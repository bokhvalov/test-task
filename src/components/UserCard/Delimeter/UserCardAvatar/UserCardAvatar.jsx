import React from "react";
import styled from "styled-components";
import avatarElipse from "./avatar-elipse.svg";
import defaultAvatar from "./default-avatar.svg";

const AvatarElipse = styled.div`
  z-index: 1;

  height: 72px;
  width: 80px;

  background-image: url(${avatarElipse});
  background-size: cover;
`;
const Avatar = styled.img`
  position: absolute;

  width: 58px;
  height: 58px;

  background-color: #5736a3;
  border-radius: 50%;
`;

export const UserCardAvatar = ({ avatarUrl }) => {
  return (
    <>
      <AvatarElipse />
      <Avatar src={avatarUrl ?? defaultAvatar} alt="avatar" />
    </>
  );
};
