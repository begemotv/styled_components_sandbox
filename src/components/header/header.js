import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {Toggle} from '../toggle/toggle';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${props => props.theme.primaryColor}, ${props => props.theme.secondaryColor});
  border-bottom: 3px solid ${props => props.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${p => p.open ? 'block' : 'none'};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${p => p.theme.secondaryColor};
  background: ${p => p.theme.bodyBackgroundColor};

  @media(min-width: 768px){
    display: flex;
    background: none;
    left: initial;
    top: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    position: relative;
    width: initial;
  }
`;

const Link = ({isActive, children, ...props}) => {
  return (
    <RouterLink {...props}>
      {children}
    </RouterLink>
  );
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${p => p.isActive ? 'bold' : 'normal'};
  color: ${p => p.theme.bodyFontColor};
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  >div{
    height: 3px;
    background-color: ${p => p.theme.bodyFontColor};;
    margin: 5px 0;
    width: 100%;
  }

  @media(min-width: 768px) {
    display: none;
  }
`;

const ProjectName = styled.p`
    font-family: 'Kaushan Script';
    font-weight: bold;
    font-size: 25px;
    margin-top: 10px;
`;

const Header = () => {
  const {pathname} = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {id, setTheme} = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <ProjectName>💅 Styled Components</ProjectName>
      <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme}/>
      </Menu>
    </HeaderWrapper>
  )
}

export {Header};