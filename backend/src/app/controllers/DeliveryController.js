import * as Yup from 'yup';
import { parseISO, isBefore, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';
import NewDeliverynMail from '../jobs/NewDeliverynMail';
import Queue from '../../lib/Queue';

class DeliveryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const { recipient_id, deliveryman_id } = req.body;

    // Validando entregador
    const isDeliveryman = await Deliveryman.findByPk(deliveryman_id);
    if (!isDeliveryman)
      return res.status(400).json({ error: 'Deliveryman is not available.' });

    // Validando destinatário
    const isRecipient = await Recipient.findByPk(recipient_id);
    if (!isRecipient)
      return res.status(400).json({ error: 'Recipient does not exists.' });

    const delivery = await Delivery.create(req.body);

    await Queue.add(NewDeliverynMail.key, {
      delivery,
      deliveryman: isDeliveryman,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery)
      return res.status(400).json({ error: 'Delivery does not exists.' });

    const schema = Yup.object().shape({
      product: Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      signature_id: Yup.number(),
      start_date: Yup.date(),
      end_date: Yup.date(),
      canceled_at: Yup.date(),
    });

    // ERRO: Campos da requisição incompletos
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails.' });

    const {
      recipient_id,
      deliveryman_id,
      signature_id,
      start_date: sd,
      end_date,
    } = req.body;
    // Validações referente à data de ínicio da entrega
    if (sd) {
      const start_date = parseISO(sd);

      const hoursStart = start_date.getHours();
      // Testa se não é uma data do passado e se o horário está entre às 08:00 e às 18:00h
      if (isBefore(start_date, new Date()) || hoursStart < 8 || hoursStart > 18)
        return res
          .status(400)
          .json({ error: 'Start date for delivery is not permited!' });

      // Busca por todas as entregas começadas na data de retirada.
      const deliveriesNow = await Delivery.count({
        where: {
          start_date: {
            [Op.between]: [startOfDay(start_date), endOfDay(start_date)],
          },
        },
      });
      // O entregador só pode retirer 5 encomendas por vez na mesma data
      if (deliveriesNow === 5)
        return res.status(400).json({
          error: 'The deliveryman can only make 5 withdrawals per day',
        });
    }
    // A entrega só pode ser finalizada se o entregador cadastrou a foto da assinatura
    if (end_date) {
      if (!delivery.start_date)
        return res.status(400).json({
          error: 'Delivery can only be completed if the start date is valid',
        });
      if (!signature_id)
        return res.status(400).json({
          error: 'Delivery can only be completed with the signature photo',
        });
    }
    // Validando entregador
    const isDeliveryman = await Deliveryman.findByPk(deliveryman_id);
    if (!isDeliveryman && deliveryman_id)
      return res.status(400).json({ error: 'Deliveryman is not available.' });

    // Validando destinatário
    const isRecipient = await Recipient.findByPk(recipient_id);
    if (!isRecipient && recipient_id)
      return res.status(400).json({ error: 'Recipient does not exists.' });

    // Validando foto da assinatura
    const isSignature = await File.findByPk(signature_id);
    if (!isSignature && signature_id)
      return res
        .status(400)
        .json({ error: 'Photo signature does not exists.' });

    await delivery.update(req.body);

    return res.json(delivery);
  }

  async index(req, res) {
    const product = req.query.product || '';
    // const { deliveryman_id } = req.params;
    const deliveries = await Delivery.findAll({
      where: {
        product: {
          [Op.iLike]: `%${product}%`,
        },
      },
      attributes: ['id'],
      sort: ['id'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['city', 'state', 'name'],
        },
        {
          model: Deliveryman,
          as: 'deliverymen',
          attributes: ['name'],
          include: {
            model: File,
            as: 'avatar',
            attributes: ['id', 'url'],
          },
        },
      ],
    });
    return res.json(deliveries);
  }

  async delete(req, res) {
    const { delivery_id: id } = req.params;
    await Delivery.destroy({ where: { id } });
    return res.json({ message: 'Delivery successfully removed' });
  }
}

export default new DeliveryController();
