import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: yellow;
`;

const BaseText = styled.Text`
  font-size: 20px;
`;

const Logs = () => (
  <StyledView>
    <BaseText>This is Logs</BaseText>
  </StyledView>
);

export default Logs;
