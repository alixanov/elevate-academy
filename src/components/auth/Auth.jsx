import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, EmailOutlined, PersonOutline, LockOutlined } from '@mui/icons-material';

const AuthSection = styled.section`
  background: linear-gradient(180deg, #040b1f, #0a1a3d);
  padding: 60px 20px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #e6e9f0;
  position: relative;
`;

const HomeIcon = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #ffcc00;
  transition: color 0.4s ease, transform 0.4s ease;

  &:hover {
    color: #ffd700;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
  }
`;

const AuthContainer = styled(motion.div)`
  max-width: 360px;
  width: 100%;
  background: linear-gradient(135deg, rgba(26, 43, 95, 0.85), rgba(26, 43, 95, 0.65));
  backdrop-filter: blur(12px);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 300px;
    padding: 20px;
  }
`;

const AuthTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #e6e9f0;
  margin-bottom: 20px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputWrapper = styled.div`
  position: relative;
  max-width: 280px;
  width: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  max-width: 280px;
  width: 100%;
  padding: 10px 10px 10px 36px;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #e6e9f0;
  outline: none;
  transition: border-color 0.4s ease, background 0.4s ease;

  &:focus {
    border-color: #ffcc00;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: #a0a8c0;
  }

  &:invalid {
    border-color: #ff4d4d;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 8px 8px 32px;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #a0a8c0;
  transition: color 0.4s ease;

  ${Input}:focus ~ & {
    color: #ffcc00;
  }

  @media (max-width: 768px) {
    left: 8px;
  }
`;

const SubmitButton = styled.button`
  max-width: 280px;
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px auto 0;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(255, 204, 0, 0.4);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px;
  }
`;

const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid #040b1f;
  border-top: 2px solid #ffcc00;
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

const SwitchLink = styled.button`
  font-size: 0.85rem;
  color: #ffcc00;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 12px;
  transition: color 0.4s ease;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #ff4d4d;
  margin: 4px 0 0;
  text-align: left;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const SuccessMessage = styled(motion.p)`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4caf50;
  margin-top: 12px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    login: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    login: '',
    password: '',
    server: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL || 'https://orzu-academy-server.vercel.app';

  const handleSwitch = useCallback(() => {
    setIsRegister((prev) => !prev);
    setFormData({ email: '', login: '', password: '' });
    setErrors({ email: '', login: '', password: '', server: '' });
    setSuccessMessage('');
  }, []);

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '', server: '' }));
    setSuccessMessage('');
  }, []);

  const validateForm = useCallback(() => {
    let isValid = true;
    const newErrors = { email: '', login: '', password: '', server: '' };

    if (isRegister && !formData.email.trim()) {
      newErrors.email = 'Email kiritilishi shart';
      isValid = false;
    } else if (isRegister && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "To‘g‘ri email manzilini kiriting";
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = 'Login kiritilishi shart';
      isValid = false;
    } else if (formData.login.length < 3) {
      newErrors.login = 'Login kamida 3 belgidan iborat bo‘lishi kerak';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Parol kiritilishi shart';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Parol kamida 6 belgidan iborat bo‘lishi kerak';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, isRegister]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (validateForm()) {
        setIsSubmitting(true);
        try {
          const endpoint = isRegister ? '/register' : '/login';
          const payload = isRegister
            ? { email: formData.email, login: formData.login, password: formData.password }
            : { login: formData.login, password: formData.password };

          console.log('Sending request to:', `${API_URL}${endpoint}`);
          console.log('Payload:', payload);

          const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          console.log('Response:', data);

          if (!response.ok) {
            throw new Error(data.error || 'Server xatosi, iltimos keyinroq urinib ko‘ring');
          }

          setSuccessMessage(
            isRegister
              ? "Siz muvaffaqiyatli ro‘yxatdan o‘tdingiz! Iltimos, tizimga kiring."
              : "Tizimga muvaffaqiyatli kirdingiz!"
          );
          setFormData({ email: '', login: '', password: '' });
          localStorage.setItem('token', data.token);

          if (isRegister) {
            setIsRegister(false); // Переключение на форму входа
          } else {
            navigate('/cabinet'); // Перенаправление в личный кабинет
          }
        } catch (error) {
          console.error('Auth error:', error);
          setErrors((prev) => ({
            ...prev,
            server: error.message,
          }));
        } finally {
          setIsSubmitting(false);
        }
      }
    },
    [isRegister, formData, validateForm, navigate, API_URL]
  );

  return (
    <AuthSection>
      <HomeIcon to="/">
        <HomeOutlined sx={{ fontSize: 24 }} />
      </HomeIcon>
      <AuthContainer
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <AuthTitle>{isRegister ? 'Ro‘yxatdan o‘tish' : 'Kirish'}</AuthTitle>
        <AnimatePresence mode="wait">
          <motion.div
            key={isRegister ? 'register' : 'login'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <AuthForm onSubmit={handleSubmit}>
              {isRegister && (
                <InputWrapper>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <InputIcon>
                    <EmailOutlined sx={{ fontSize: 18 }} />
                  </InputIcon>
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputWrapper>
              )}
              <InputWrapper>
                <Input
                  type="text"
                  id="login"
                  placeholder="Login"
                  value={formData.login}
                  onChange={handleInputChange}
                  required
                />
                <InputIcon>
                  <PersonOutline sx={{ fontSize: 18 }} />
                </InputIcon>
                {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  type="password"
                  id="password"
                  placeholder="Parol"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <InputIcon>
                  <LockOutlined sx={{ fontSize: 18 }} />
                </InputIcon>
                {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              </InputWrapper>
              {errors.server && <ErrorMessage>{errors.server}</ErrorMessage>}
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : isRegister ? 'Ro‘yxatdan o‘tish' : 'Kirish'}
              </SubmitButton>
              <SwitchLink onClick={handleSwitch}>
                {isRegister
                  ? 'Allaqachon hisobingiz bormi? Kirish'
                  : 'Hali hisobingiz yo‘qmi? Ro‘yxatdan o‘tish'}
              </SwitchLink>
              {successMessage && (
                <SuccessMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {successMessage}
                </SuccessMessage>
              )}
            </AuthForm>
          </motion.div>
        </AnimatePresence>
      </AuthContainer>
    </AuthSection>
  );
};

export default Auth;