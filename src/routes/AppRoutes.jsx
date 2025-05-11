import React from 'react';
import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';
import Courses from '../components/courses/Courses';
import Teacher from '../components/teacher/Teacher';
import Info from '../components/info/Info';
import Footer from '../components/footer/Footer';
import Auth from '../components/auth/Auth';

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const MainContent = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: ${(props) => (props.isAuth ? '0' : '120px')};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding-top: ${(props) => (props.isAuth ? '0' : '100px')};
  }
`;

const AppRoutes = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/register';

  return (
    <AppContainer>
      {!isAuthRoute && <Navbar />}
      <MainContent isAuth={isAuthRoute}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers-section" element={<Teacher />} />
          <Route path="/info/:courseId" element={<Info />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </MainContent>
      {!isAuthRoute && <Footer />}
    </AppContainer>
  );
};

export default AppRoutes;