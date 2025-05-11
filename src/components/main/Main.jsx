import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header/Header';
import Courses from '../courses/Courses';
import Home from '../home/Home';
import Teacher from '../teacher/Teacher';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Main = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  return (
    <MainContainer>
      <Main id="home" />
      <Header id="header" />
      <Courses id="courses" />
      <Teacher id="teachers-section" />
    </MainContainer>
  );
};

export default Main;