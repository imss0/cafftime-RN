import styled from "styled-components/native";
import { mock } from "../mockdata";

const StyledView = styled.ScrollView`
  background-color: skyblue;
  margin: 10px;
`;

const BaseText = styled.Text`
  font-size: 16px;
`;

const Daily = () => (
  <StyledView>
    <BaseText>This is Daily</BaseText>
    {mock.map((item) => (
      <StyledView key={item.id}>
        <BaseText>{item.name}</BaseText>
        {item.caffeine_per_size.map((item, index) => (
          <BaseText key={index}>
            {item.size}의 음료 {item.amount}ml 당 {item.caffeine}mg이 들어
            있어요!
          </BaseText>
        ))}
      </StyledView>
    ))}
  </StyledView>
);
export default Daily;
