import React from 'react';
import styled from 'styled-components';
import SmmGirl from '../../assets/video (online-video-cutter.com).mp4';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  min-height: 400px;
  padding: 60px 100px;
  position: relative;
  overflow-x: hidden; /* Предотвращаем горизонтальный скролл */
  box-sizing: border-box;
  background: #040b1f;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    min-height: auto;
    text-align: center;
  }
`;

const TxtCourseLearning = styled.div`
  flex: 1;
  padding: 30px;
  z-index: 1;
  max-width: 50%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px 0;
    max-width: 100%;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #e6e9f0;
  margin-bottom: 15px;
  line-height: 1.2;
  position: relative;
  width: 100%;

  span {
    background: linear-gradient(90deg, #ffcc00, #ffd700);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #ffcc00, #ffd700);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #e6e9f0;
  line-height: 1.6;
  margin-bottom: 15px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 11, 31, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 16px;
    margin: 0 auto;
  }
`;

const Video = styled.video`
  width: 50%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  z-index: 1;

  border-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TxtCourseLearning>
        <Title>
          <span>Orzu O‘quv Markazi</span>da Bilim Oling!
        </Title>
        <Description>
          Kelajagingizni biz bilan quring! Tajribali o‘qituvchilar va zamonaviy kurslar sizni kutmoqda.
        </Description>
        <CTAButton>Batafsil ma'lumot</CTAButton>
      </TxtCourseLearning>
      <Video autoPlay muted loop playsInline>
        <source src={SmmGirl} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </HeaderContainer>
  );
};

export default Header;