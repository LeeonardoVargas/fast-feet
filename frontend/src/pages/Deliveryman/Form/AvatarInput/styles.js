import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 200px;
      width: 200px;
      border-radius: 50%;
      border: 3px dashed rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
      margin-bottom: 5px;
    }
  }
`;

export const InputPhoto = styled.div`
  color: #dddddd;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  border: 1px #dddddd;
  border-style: dashed;
  align-items: center;
  padding: 50px 25px;
  font-weight: 600;
  font-size: 18px;
`;