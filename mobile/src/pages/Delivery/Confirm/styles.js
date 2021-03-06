import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Preview = styled.Image`
  border-radius: 6px;
  height: 80%;
`;

export const CameraButton = styled.TouchableOpacity`
  border-radius: 180px;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 70%;
  align-self: center;
  padding: 10px;
`;

export const BtnSubmit = styled(Button)`
  align-self: stretch;
  margin-top: 15px;
  background: #7d40e7;
`;
