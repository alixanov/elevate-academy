import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PersonOutline, EmailOutlined, LogoutOutlined } from '@mui/icons-material';

const CabinetSection = styled.section`
  background: #ffffff;
  padding: 100px 20px 80px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  color: #040b1f;

  @media (max-width: 768px) {
    padding: 90px 15px 70px;
  }
`;

const CabinetContainer = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 768px) {
    max-width: 340px;
    padding: 20px;
  }
`;

const CabinetTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #040b1f;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #040b1f;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid rgba(4, 11, 31, 0.1);
  border-radius: 8px;
  margin-bottom: 16px;

  svg {
    color: #ffcc00;
    font-size: 24px;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #040b1f;
    flex: 1;
  }

  @media (max-width: 768px) {
    padding: 10px;
    svg {
      font-size: 20px;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const LogoutButton = styled.button`
  max-width: 200px;
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 16px rgba(255, 204, 0, 0.4);
  }

  @media (max-width: 768px) {
    max-width: 180px;
    font-size: 0.85rem;
    padding: 8px;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: #ff4d4d;
  margin-top: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ffcc00;
  border-top: 4px solid #040b1f;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Cabinet = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoading(false);
        navigate('/auth');
        return;
      }

      try {
        const response = await fetch('https://orzu-academy-backend.vercel.app/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Server xatosi');
        }

        setUser(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        localStorage.removeItem('token');
        setIsLoading(false);
        navigate('/auth');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (isLoading) {
    return (
      <Loader>
        <Spinner />
      </Loader>
    );
  }

  return (
    <CabinetSection>
      <CabinetContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <CabinetTitle>Shaxsiy kabinet</CabinetTitle>
        {error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <>
            <Avatar>{user?.login?.[0]?.toUpperCase() || 'U'}</Avatar>
            <InfoCard>
              <PersonOutline />
              <p>Login: {user?.login}</p>
            </InfoCard>
            <InfoCard>
              <EmailOutlined />
              <p>Email: {user?.email}</p>
            </InfoCard>
            <LogoutButton onClick={handleLogout}>
              <LogoutOutlined sx={{ fontSize: 18 }} />
              Chiqish
            </LogoutButton>
          </>
        )}
      </CabinetContainer>
    </CabinetSection>
  );
};

export default Cabinet;