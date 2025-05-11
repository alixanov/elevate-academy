import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import Courses from '../components/courses/Courses';
import Teacher from '../components/teacher/Teacher';
import Info from '../components/info/Info';
import Footer from '../components/footer/Footer';
import Home from '../components/home/Home';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`;

const AppRoutes = () => {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers-section" element={<Teacher />} />
          <Route path="/info/:courseId" element={<Info />} />

        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default AppRoutes;