import React from 'react';
import styled from 'styled-components';
import learningImg from '../../assets/0333d543bf43c489cac62f89e1b794d2.png';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  min-height: calc(100vh - 80px);
  background: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #333333;
  line-height: 1.6;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const LearningImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  max-height: 400px;

  @media (max-width: 768px) {
    max-width: 80%;
    max-height: 300px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <TextSection>
        <Title>O‘quv Markazimizga Xush Kelibsiz</Title>
        <Description>
          Turli xil kurslar va tadbirlarni kashf eting, ular sizning ta'lim safaringizni kuchaytirish uchun mo‘ljallangan. Bizning takliflarimizni o‘rganing va bugundan boshlang!
        </Description>
      </TextSection>
      <ImageSection>
        <LearningImage src={learningImg} alt="O‘quv markazi muhiti" />
      </ImageSection>
    </HomeContainer>
  );
};

export default Home;