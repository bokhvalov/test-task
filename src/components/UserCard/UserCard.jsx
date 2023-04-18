import styled from "styled-components";
import { UpperBox } from "./UpperBox/UpperBox";
import { Delimeter } from "./Delimeter/Delimeter";
import { LowerBox } from "./LowerBox/LowerBox";

const UserCardContainer = styled.div`
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const UserCard = ({ data, ...rest }) => {
  return (
    <UserCardContainer>
      <UpperBox />
      <Delimeter avatar={data.avatar} />
      <LowerBox data={data} {...rest} />
    </UserCardContainer>
  );
};
