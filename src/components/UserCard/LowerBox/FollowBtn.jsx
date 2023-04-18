import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  background: ${(props) => (props.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: "Montserrat" sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  font-weight: 1.2;

  text-transform: uppercase;

  color: #373737;

  cursor: pointer;
  transition: background 0.25s ease;

  :hover {
    background: ${(props) =>
      props.isFollowing ? "rgb(229, 153, 153)" : "rgb(233, 212, 149)"};
  }
`;

export const FollowBtn = ({ isFollowing, onClick }) => {
  return (
    <Button onClick={onClick} isFollowing={isFollowing}>
      {isFollowing ? "following" : "follow"}
    </Button>
  );
};
