import styled from 'styled-components';
import background from './img/background.svg';
import logo from './img/logo-goit.svg';

const UserCardUpperBox = styled.div`
  padding: 28px 0px 18px;

  display: flex;
  justify-content: center;

  position: relative;
`;

const UserCardUpperBoxLogo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;

  width: 76px;
  height: 22px;
`;

const UserCardUpperBoxBackground = styled.img`
  height: 168px;
  width: 308px;
`;

export const UpperBox = () => {
  return (
    <UserCardUpperBox>
      <UserCardUpperBoxLogo src={logo} alt="logo" />
      <UserCardUpperBoxBackground
        src={background}
        alt=""
        className="background"
      />
    </UserCardUpperBox>
  );
};
