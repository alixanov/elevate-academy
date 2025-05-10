import React from 'react';
import styled from 'styled-components';
import learningImg from '../../assets/0333d543bf43c489cac62f89e1b794d2.png';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 40px;
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 20px;
  z-index: 1;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 30px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
  line-height: 1.2;
  position: relative;

  span {
    background: linear-gradient(90deg, #870121, #ffaaaa);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #870121, #ffcccc);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333333;
  line-height: 1.6;
  max-width: 500px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const CTAButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #fffbf0;
  background: linear-gradient(90deg, #870121, #6b011a);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(135, 1, 33, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 1;
  animation: slideIn 0.8s ease-out;

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const LearningImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: contain;
  background: transparent;
  max-height: 450px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (prefers-reduced-motion) {
    animation: none;
    transition: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextSection>
        <Title>
          <span>Elevate Academy</span> O‘quv Markaziga Xush Kelibsiz
        </Title>
        <Description>
          Turli xil kurslar va tadbirlarni kashf eting, ular sizning ta'lim safaringizni kuchaytirish uchun mo‘ljallangan. Elevate Academy bilan bugundan bilim oling!
        </Description>
        <CTAButton>Batafsil ma'lumot</CTAButton>
      </TextSection>
      <ImageSection>
        <LearningImage src={learningImg} alt="Elevate Academy o‘quv muhiti" />
      </ImageSection>
    </HomeContainer>
  );
};

export default Home;