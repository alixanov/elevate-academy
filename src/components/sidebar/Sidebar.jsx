import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import SchoolIcon from '@mui/icons-material/School';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: linear-gradient(180deg, #870121 0%, #6b011a 100%);
  color: #fffbf0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    box-shadow: none;
  }
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fffbf0;
  margin-bottom: 30px;
  text-align: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 12px;
  position: relative;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px 15px;
  color: #6b011a;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px 8px 8px 12px; /* Asymmetrical corners for subtle creativity */
  background: linear-gradient(135deg, #fffbf0 0%, #f5f0e6 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: transparent;
    transition: background 0.4s ease-in-out;
  }

  &:hover {
    background: linear-gradient(135deg, #ffffff 0%, #f9f5ec 100%);
    transform: translateX(3px) scale(1.02);
    box-shadow: 0 4px 12px rgba(135, 1, 33, 0.3);
    color: #870121;
    &::before {
      background: rgba(135, 1, 33, 0.2);
    }
  }

  &.active {
    background: linear-gradient(135deg, #ffbfbf 0%, #ffaaaa 100%);
    box-shadow: 0 4px 12px rgba(135, 1, 33, 0.4);
    transform: translateX(6px) scale(1.03);
    color: #870121;
    font-weight: 600;

    &::before {
      background: #870121;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 8px;
      width: 0;
      height: 0;
      border-left: 5px solid #870121;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      transform: translateY(-50%);
      opacity: 0.9;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(135, 1, 33, 0.5);
  }

  svg {
    margin-right: 12px;
    font-size: 1.2rem;
    transition: color 0.4s ease-in-out;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Learning Center</Logo>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/" aria-label="Home">
            <HomeFilledIcon /> Home
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/courses" aria-label="Courses">
            <SchoolIcon /> Courses
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/events" aria-label="Events">
            <EventIcon /> Events
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/profile" aria-label="Profile">
            <PersonIcon /> Profile
          </NavLinkStyled>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;