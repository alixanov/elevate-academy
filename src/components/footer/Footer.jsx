import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Telegram,
  Instagram,
  YouTube,
  School,
  Email,
  Phone,
  LocationOn,
  HomeFilled,
  Info,
  MenuBook,
  People,
  AttachMoney,
  ContactMail,
} from '@mui/icons-material';

const FooterContainer = styled(motion.footer)`
  background: linear-gradient(180deg, #040b1f, #0a1a3d);
  color: #e6e9f0;
  padding: 60px 20px;
  text-align: center;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  &.footer-logo {
    align-items: center;
    text-align: center;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffcc00;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const FooterLink = styled(Link)`
  color: #e6e9f0;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: translateX(5px);
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    svg {
      font-size: 20px;
    }
  }
`;

const ExternalLink = styled.a`
  color: #e6e9f0;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffd700;
    transform: translateX(5px);
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    svg {
      font-size: 20px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LogoText = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffcc00;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoIcon = styled(School)`
  font-size: 48px;
  color: #ffcc00;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #e6e9f0;
  max-width: 280px;
  line-height: 1.6;
  margin: 10px 0 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    max-width: 240px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <FooterWrapper>
        <FooterColumn>
          <ColumnTitle>Foydali havolalar</ColumnTitle>
          <FooterList>
            <li>
              <FooterLink to="/#home">
                <HomeFilled /> Bosh sahifa
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/#about">
                <Info /> O‘quv markaz haqida
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/#courses">
                <MenuBook /> Kurslarimiz
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/#teachers">
                <School /> O‘qituvchilar
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/#students">
                <People /> O‘quvchilar
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/#pricing">
                <AttachMoney /> Narxlar
              </FooterLink>
            </li>
            <li>
              <FooterLink to="/#contact">
                <ContactMail /> Bog‘lanish
              </FooterLink>
            </li>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Bog‘lanish</ColumnTitle>
          <FooterList>
            <li>
              <ExternalLink href="mailto:info@orzu_academy.uz">
                <Email /> info@orzu_academy.uz
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="tel:+998334568080">
                <Phone /> +998 33 456 80 80
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://t.me/orzu_uquvmarkazi" target="_blank">
                <Telegram /> Telegram
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href="https://maps.google.com/?q=2RJX+P52,R-118,Uyci,Namangan,Uzbekistan"
                target="_blank"
              >
                <LocationOn /> Manzil
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.instagram.com/orzu_academy" target="_blank">
                <Instagram /> Instagram
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://youtube.com/@orzu_academy" target="_blank">
                <YouTube /> YouTube
              </ExternalLink>
            </li>
          </FooterList>
        </FooterColumn>

        <FooterColumn className="footer-logo">
          <LogoContainer>
            <LogoIcon />
            <LogoText>Orzu Academy</LogoText>
          </LogoContainer>
          <Description>
            "Orzu Academy" – zamonaviy ta’lim muassasasi, kelajakka yo‘l ochadi.
          </Description>
        </FooterColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;