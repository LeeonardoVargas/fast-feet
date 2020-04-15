import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const GroupInfo = styled.div`
  padding: 10px 0;

  & + div {
    border-top: 1px solid #eeeeee;
  }

  h3 {
    font-weight: bold;
    color: #444;
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
  }
`;

export const Signature = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 300px;
  }

  span {
    display: flex;
    align-items: center;
    padding: 15px 70px;
    border: 1px solid #333;
    border-radius: 2px;
    margin-top: 12px;

    font-size: 18px;
    color: #666;
  }
`;

export const ContentProblem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  h3 {
    font-size: 20px;
    color: #333;
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
  }

  strong {
    margin-top: 15px;
    font-size: 14px;
    color: #777;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  p {
    color: #444;
    font-size: 16px;
    line-height: 25px;
    font-weight: 300;
  }
`;
