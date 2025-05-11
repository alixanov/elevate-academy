import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutline from '@mui/icons-material/PersonOutline';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #ffffff;
  color: #040b1f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const NavbarContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: 0 auto;
`;

const ContactBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
    padding: 5px 0;
  }
`;

const ContactButton = styled.button`
  color: #040b1f;
  font-size: 0.85rem;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.4s ease, text-shadow 0.4s ease;

  &:hover {
    color: #ffcc00;
    text-shadow: 0 1px 3px rgba(255, 204, 0, 0.3);
  }

  &:hover svg {
    transform: scale(1.2) translateX(3px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 204, 0, 0.5);
  }

  svg {
    font-size: 0.9rem;
    transition: transform 0.4s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;

    &:nth-child(n+4) {
      display: none;
    }
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  padding: 10px 0;

  h1 {
    font-size: 1.5rem;
    color: #040b1f;
    font-weight: 600;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.2rem;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
`;

const NavLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  background: #040b1f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;

  &.btn {
    background: linear-gradient(135deg, #ffcc00 0%, #ffd700 100%);
    color: #040b1f;
    font-weight: 600;
    padding: 12px 20px;

    &:hover {
      background: linear-gradient(135deg, #ffd700 0%, #ffcc00 100%);
      box-shadow: 0 6px 20px rgba(255, 204, 0, 0.5);
      transform: scale(1.03);
    }
  }

  &:hover {
    background: #0a1a3d;
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(255, 204, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
    color: #ffffff;
    transition: color 0.4s ease, transform 0.4s ease;
  }

  &:hover svg {
    color: #ffcc00;
    transform: translateX(3px);
  }

  &.btn svg {
    color: #040b1f;
  }

  &.btn:hover svg {
    color: #040b1f;
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    justify-content: center;

    span {
      display: none;
    }

    svg {
      margin-right: 0;
      font-size: 1.6rem;
    }

    &:hover {
      transform: scale(1.05);
      background: #0a1a3d;
      box-shadow: 0 4px 16px rgba(255, 204, 0, 0.3);
    }

    &.btn {
      padding: 10px;
      background: linear-gradient(135deg, #ffcc00 0%, #ffd700 100%);

      &:hover {
        transform: scale(1.05);
        background: linear-gradient(135deg, #ffd700 0%, #ffcc00 100%);
        box-shadow: 0 6px 20px rgba(255, 204, 0, 0.5);
      }
    }
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isAuthenticated = !!localStorage.getItem('token');

  const handleContactClick = useCallback((action) => {
    if (action.startsWith('mailto:') || action.startsWith('tel:')) {
      window.location.href = action;
    } else {
      window.open(action, '_blank');
    }
  }, []);

  const handleNavClick = useCallback((id) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = '90px';
        element.classList.add('temp-margin-bottom');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          element.classList.remove('temp-margin-bottom');
          element.style.scrollMarginTop = '';
        }, 1000);
      }
    }
  }, [isHomePage]);

  // Динамический стиль для временного margin-bottom
  const styleSheet = document.createElement('style');
  styleSheet.innerText = `
    .temp-margin-bottom {
      margin-bottom: 50px;
      transition: margin-bottom 0.4s ease;
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <NavbarContainer>
      <NavbarContent>
        <ContactBar>
          <ContactButton
            onClick={() => handleContactClick('mailto:info@orzu_academy.uz')}
            aria-label="Email info@orzu_academy.uz"
          >
            <i className="fas fa-envelope"></i> info@orzu_academy.uz
          </ContactButton>
          <ContactButton
            onClick={() => handleContactClick('tel:+998334568080')}
            aria-label="Phone +998 33 456 80 80"
          >
            <i className="fas fa-phone"></i> +998 33 456 80 80
          </ContactButton>
          <ContactButton
            onClick={() => handleContactClick('https://t.me/orzu_uquvmarkazi')}
            aria-label="Telegram"
          >
            <i className="fab fa-telegram"></i> Telegram
          </ContactButton>
          <ContactButton
            onClick={() => handleContactClick('https://maps.google.com/?q=2RJX+P52,R-118,Uyci,Namangan,Uzbekistan')}
            aria-label="Manzil"
          >
            <i className="fas fa-map-marker-alt"></i> Manzil
          </ContactButton>
          <ContactButton
            onClick={() => handleContactClick('https://www.instagram.com/orzu_academy')}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> Instagram
          </ContactButton>
          <ContactButton
            onClick={() => handleContactClick('https://youtube.com/@orzu_academy')}
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i> YouTube
          </ContactButton>
        </ContactBar>
        <NavList>
          <NavItem>
            <NavLinkStyled
              to={isHomePage ? '/#home' : '/'}
              onClick={() => handleNavClick('header')}
              aria-label="Bosh Sahifa"
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              <HomeFilledIcon />
              <span>Bosh Sahifa</span>
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to={isHomePage ? '/#courses' : '/courses'}
              onClick={() => handleNavClick('courses')}
              aria-label="Kurslar"
              aria-current={pathname === '/courses' ? 'page' : undefined}
            >
              <MenuBookIcon />
              <span>Kurslar</span>
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to={isHomePage ? '/#teachers-section' : '/teachers-section'}
              onClick={() => handleNavClick('teachers-section')}
              aria-label="O‘qituvchilar"
              aria-current={pathname === '/teachers-section' ? 'page' : undefined}
            >
              <SchoolIcon />
              <span>O‘qituvchilar</span>
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to={isHomePage ? '/#feedback' : '/feedback'}
              onClick={() => handleNavClick('feedback')}
              aria-label="Fikrlaringiz"
              aria-current={pathname === '/feedback' ? 'page' : undefined}
            >
              <PhoneIcon />
              <span>Fikrlaringiz</span>
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to={isAuthenticated ? '/cabinet' : '/register'}
              className="btn"
              aria-label={isAuthenticated ? 'Shaxsiy kabinet' : 'Ro‘yxatdan o‘tish'}
              aria-current={isAuthenticated && pathname === '/cabinet' ? 'page' : undefined}
            >
              {isAuthenticated ? <PersonOutline /> : <EditIcon />}
              <span>{isAuthenticated ? 'Shaxsiy kabinet' : 'Ro‘yxatdan o‘tish'}</span>
            </NavLinkStyled>
          </NavItem>
        </NavList>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;