import styled from "styled-components/native";

const StyledView = styled.View`
  background-color: pink;
`;

const BaseText = styled.Text`
  font-size: 20px;
`;

const Settings = () => (
  <StyledView>
    <BaseText>This is Settings</BaseText>
  </StyledView>
);

export default Settings;
