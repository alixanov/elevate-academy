import React from 'react';
import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SchoolIcon from '@mui/icons-material/School';

const FooterContainer = styled.footer`
  background: #040b1f;
  color: #e6e9f0;
  padding: 60px 20px;
  text-align: center;
`;

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.footer-logo {
    align-items: center;
    text-align: center;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffcc00;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #e6e9f0;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ffcc00;
    transform: translateX(5px);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: inline-block;
  color: #e6e9f0;
  transition: transform 0.3s ease, color 0.3s ease;

  svg {
    font-size: 32px;
  }

  &:hover {
    transform: scale(1.2);
    color: #ffcc00;
  }
`;

const LogoIcon = styled(SchoolIcon)`
  font-size: 60px;
  color: #ffcc00;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #e6e9f0;
  max-width: 300px;
  line-height: 1.5;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumn>
          <ColumnTitle>Foydali havolalar</ColumnTitle>
          <FooterList>
            <li><FooterLink href="#home">Bosh sahifa</FooterLink></li>
            <li><FooterLink href="#about">O‘quv markaz haqida</FooterLink></li>
            <li><FooterLink href="#courses">Kurslarimiz</FooterLink></li>
            <li><FooterLink href="#teachers">O‘qituvchilar</FooterLink></li>
            <li><FooterLink href="#students">O‘quvchilar</FooterLink></li>
            <li><FooterLink href="#pricing">Narxlar</FooterLink></li>
            <li><FooterLink href="#contact">Bog‘lanish</FooterLink></li>
          </FooterList>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Bog‘lanish</ColumnTitle>
          <FooterList>
            <li>
              <FooterLink href="mailto:info@orzu_academy.uz">
                <i className="fas fa-envelope" /> info@orzu_academy.uz
              </FooterLink>
            </li>
            <li>
              <FooterLink href="tel:+998334568080">
                <i className="fas fa-phone" /> +998 33 456 80 80
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://t.me/orzu_uquvmarkazi" target="_blank">
                <TelegramIcon /> Telegram
              </FooterLink>
            </li>
            <li>
              <FooterLink
                href="https://maps.google.com/?q=2RJX+P52,R-118,Uyci,Namangan,Uzbekistan"
                target="_blank"
              >
                <i className="fas fa-map-marker-alt" /> Manzil
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://www.instagram.com/orzu_academy" target="_blank">
                <InstagramIcon /> Instagram
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://youtube.com/@orzu_academy" target="_blank">
                <YouTubeIcon /> YouTube
              </FooterLink>
            </li>
          </FooterList>
          <SocialIcons>
            <SocialLink href="https://t.me/orzu_uquvmarkazi" target="_blank">
              <TelegramIcon />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/orzu_academy" target="_blank">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com/@orzu_academy" target="_blank">
              <YouTubeIcon />
            </SocialLink>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn className="footer-logo">
          <LogoIcon />
          <Description>
            "Orzu" o‘quv markazi – zamonaviy ta’lim muassasasi.
          </Description>
        </FooterColumn>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;