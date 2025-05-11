import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';

const NavbarContainer = styled.nav`
  width: 100%;
  background: #040b1f;
  color: #e6e9f0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
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
  color: #e6e9f0;
  font-size: 0.85rem;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 204, 0, 0.5);
  }

  svg {
    font-size: 0.9rem;
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
    color: #e6e9f0;
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
  padding: 10px 15px;
  color: #040b1f;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  background: linear-gradient(135deg, #e6e9f0 0%, #c9d1e6 100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;

  &.btn {
    background: linear-gradient(135deg, #ffcc00 0%, #ffd700 100%);
    color: #040b1f;
    font-weight: 600;
    padding: 12px 20px;

    &:hover {
      background: linear-gradient(135deg, #ffd700 0%, #ffcc00 100%);
      box-shadow: 0 4px 12px rgba(4, 11, 31, 0.4);
      transform: translateY(-2px);
    }
  }

  &:hover {
    background: linear-gradient(135deg, #ffffff 0%, #e6e9f0 100%);
    transform: translateX(3px);
    box-shadow: 0 4px 12px rgba(4, 11, 31, 0.3);
    color: #1a2b5f;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(4, 11, 31, 0.5);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;
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
      transform: scale(1.1);
      background: linear-gradient(135deg, #ffffff 0%, #e6e9f0 100%);
    }

    &.btn {
      padding: 10px;
      background: linear-gradient(135deg, #ffcc00 0%, #ffd700 100%);

      &:hover {
        transform: scale(1.1);
        background: linear-gradient(135deg, #ffd700 0%, #ffcc00 100%);
      }
    }
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

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
        // Добавляем scrollMarginTop для учета высоты Navbar
        element.style.scrollMarginTop = '90px';
        // Добавляем временный класс для margin-bottom
        element.classList.add('temp-margin-bottom');
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Удаляем margin-bottom через 1 секунду
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
      margin-bottom: 5px;
      transition: margin-bottom 0.3s ease;
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
            >
              <PhoneIcon />
              <span>Fikrlaringiz</span>
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled
              to="/register"
              className="btn"
              aria-label="Ro‘yxatdan o‘tish"
            >
              <EditIcon />
              <span>Ro‘yxatdan o‘tish</span>
            </NavLinkStyled>
          </NavItem>
        </NavList>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;