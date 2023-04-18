import styled from "styled-components";
import { FollowBtn } from "./FollowBtn";
const Container = styled.div`
  padding: 62px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0 0 16px;
  font-family: "Montserrat" sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const LowerBox = ({ data: { tweets, id }, isFollowing, btnHandler }) => {
  return (
    <Container>
      <Text> {tweets} tweets</Text>
      <Text>
        {" "}
        {(isFollowing ? 100501 : 100500).toLocaleString()} Followers{" "}
      </Text>
      <FollowBtn onClick={() => btnHandler(id)} isFollowing={isFollowing} />
    </Container>
  );
};
