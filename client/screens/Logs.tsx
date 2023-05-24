import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: lime;
`;

const BaseText = styled.Text`
  font-size: 20px;
`;

const Logs = () => (
  <StyledView>
    <BaseText>This is Logs testestest</BaseText>
  </StyledView>
);

export default Logs;
