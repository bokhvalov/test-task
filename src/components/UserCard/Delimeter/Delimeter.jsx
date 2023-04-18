import styled from 'styled-components';
import { UserCardAvatar } from './UserCardAvatar/UserCardAvatar';

const UserCardDelimeter = styled.div`
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Delimeter = ({ avatar }) => {
  return (
    <UserCardDelimeter>
      <UserCardAvatar avatarUrl={avatar} />
    </UserCardDelimeter>
  );
};
