import React from 'react';
import styled from 'styled-components';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import learningImg from '../../assets/photo-1504384308090-c894fdcc538d.avif';




const BigHomeContainer = styled.div`
  display: flex;
  align-items: center;
    flex-direction: column;


`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  min-height: calc(100vh - 120px);
  width: 100vw;
  margin: 0;
  position: relative;
  overflow: hidden;
  background: url(${learningImg}) no-repeat center center/cover;
  z-index: 0;
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4, 11, 31, 0.5); /* Dark overlay for text readability */
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 100px 0;
    min-height: calc(100vh - 100px);
    text-align: center;
  }
`;

const TextSection = styled.div`
  width: 100%;
  padding: 20px;
  z-index: 1;
  animation: fadeIn 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 15px;
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
  color: #e6e9f0;
  margin-bottom: 20px;
  line-height: 1.2;
  position: relative;

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
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ffcc00, #ffd700);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #e6e9f0;
  line-height: 1.6;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg {
    font-size: 1.2rem;
    margin-right: 8px;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;

    svg {
      font-size: 1rem;
      margin-right: 6px;
    }
  }
`;

const CTAButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 11, 31, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;

const Home = () => {
  return (

    <HomeContainer>
      <TextSection>
        <Title>
          <span>Orzu Academy O‘quv Markaziga Xush Kelibsiz</span> 
        </Title>
        <Description>
          <span>
            <MenuBookIcon /> Bizning markazimiz bilim olish uchun eng yaxshi joy.
          </span>
          <span>
            <SchoolIcon /> Tajribali ustozlar va qulay sharoitlar bilan sifatli ta'lim oling.
          </span>
          <span>Biz bilan o‘z kelajagingizni yarating! Eng yaxshi o‘qituvchilar va zamonaviy kurslar bilan ta’lim oling.</span>
        </Description>
      </TextSection>
    </HomeContainer>

  );
};

export default Home;