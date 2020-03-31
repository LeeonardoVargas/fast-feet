import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {format, parseISO} from 'date-fns';

import {signOut} from '~/store/modules/auth/actions';
import {Container, Content, Avatar, Label, Info, BtnLogout} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector(state => state.user.profile);

  const dateFormatted = useMemo(
    () => format(parseISO(deliveryman.createdAt), 'dd/MM/yyyy'),
    [deliveryman],
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Avatar
          source={{
            uri: deliveryman.avatar
              ? deliveryman.avatar.url
              : `https://api.adorable.io/avatars/140/${deliveryman.id}.png`,
          }}
        />

        <Label>Nome completo</Label>
        <Info>{deliveryman.name}</Info>

        <Label>Email</Label>
        <Info>{deliveryman.email}</Info>
        {/* TRATAR DATAAAAAA */}
        <Label>Data de cadastro</Label>
        <Info>{dateFormatted}</Info>

        <BtnLogout onPress={handleLogout}>Sair do Sistema</BtnLogout>
      </Content>
    </Container>
  );
}