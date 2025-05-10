import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/sidebar/Sidebar';
import Home from '../components/home/Home';
import { Route, Routes } from 'react-router-dom';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  margin-left: 250px; /* Matches sidebar width */
  width: calc(100% - 250px);
  padding: 20px;
  min-height: 100vh;
`;

const AppRoutes = () => {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainContent>
    </AppContainer>
  );
};

export default AppRoutes;