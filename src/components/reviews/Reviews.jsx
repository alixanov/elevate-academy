import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ReviewsSection = styled.section`
  background: #040b1f;
  padding: 60px 20px;
  width: 100%;
  box-sizing: border-box;
  color: #e6e9f0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #e6e9f0;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #ffcc00, #ffd700);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const SwiperContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  .swiper {
    padding: 20px 0 50px 0;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: auto;
  }

  .swiper-pagination {
    bottom: 10px;
  }

  .swiper-pagination-bullet {
    background: #ffcc00;
    opacity: 0.7;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #ffd700;
    opacity: 1;
    transform: scale(1.2);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffcc00;
    transition: color 0.3s ease, transform 0.3s ease;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;

    &:hover {
      color: #ffd700;
      transform: translateY(-50%) scale(1.1);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px;
  }
`;

const FeedbackCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 43, 95, 0.9), rgba(26, 43, 95, 0.7));
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 340px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 204, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 280px;
    min-height: 140px;
  }
`;

const FeedbackText = styled.p`
  font-size: 1.1rem;
  color: #e6e9f0;
  line-height: 1.5;
  margin-bottom: 12px;
  font-style: normal;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    -webkit-line-clamp: 3;
  }
`;

const StudentName = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffcc00;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const FeedbackFormSection = styled.section`
  background: #fff;
  padding: 50px 20px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #040b1f;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
`;

const FeedbackForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 0.95rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;
  color: #040b1f;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #ffcc00;
    box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 0.95rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #ffffff;
  color: #040b1f;
  outline: none;
  resize: vertical;
  max-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #ffcc00;
    box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const SuccessMessage = styled.p`
  font-size: 0.95rem;
  color: #4caf50;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.85rem;
  color: #ff4d4d;
  margin-top: 5px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #040b1f;
  border-top: 2px solid #ffcc00;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Reviews = () => {
  const [formData, setFormData] = useState({ name: '', feedback: '' });
  const [errors, setErrors] = useState({ name: '', feedback: '', server: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка отзывов с сервера
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://orzu-academy-server.vercel.app/reviews');
        if (!response.ok) throw new Error('Fikrlarni yuklashda xato');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setErrors((prev) => ({ ...prev, server: 'Fikrlarni yuklashda xato yuz berdi' }));
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '', server: '' }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', feedback: '', server: '' };

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Ismingiz kamida 2 belgidan iborat bo‘lishi kerak';
      isValid = false;
    }
    if (!formData.feedback.trim() || formData.feedback.trim().length < 10) {
      newErrors.feedback = 'Fikringiz kamida 10 belgidan iborat bo‘lishi kerak';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const token = localStorage.getItem('token'); // Опционально, если нужна авторизация
        const response = await fetch('https://orzu-academy-server.vercel.app/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            text: formData.feedback.trim(),
          }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Fikr yuborishda xato');
        }
        const newReview = await response.json();
        setReviews((prev) => [newReview, ...prev]); // Добавляем новый отзыв в начало
        setIsSubmitted(true);
        setFormData({ name: '', feedback: '' });
      } catch (error) {
        console.error('Error submitting review:', error);
        setErrors((prev) => ({ ...prev, server: error.message }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <ReviewsSection id="feedback">
        <SectionTitle>O‘quvchilarimizning Fikrlari</SectionTitle>
        <SwiperContainer>
          {isLoading ? (
            <p style={{ color: '#e6e9f0' }}>Fikrlar yuklanmoqda...</p>
          ) : reviews.length === 0 ? (
            <p style={{ color: '#e6e9f0' }}>Hozircha fikrlar yo‘q</p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <FeedbackCard>
                    <FeedbackText>"{review.text}"</FeedbackText>
                    <StudentName>– {review.name}</StudentName>
                  </FeedbackCard>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </SwiperContainer>
      </ReviewsSection>

      <FeedbackFormSection>
        <FormTitle>O‘quv Markazi Haqida Fikringiz</FormTitle>
        <FeedbackForm id="feedback-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="Ismingiz"
            required
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          <Textarea
            id="feedback"
            placeholder="Fikringizni yozing"
            value={formData.feedback}
            onChange={handleInputChange}
            aria-label="Fikringiz"
            required
          />
          {errors.feedback && <ErrorMessage>{errors.feedback}</ErrorMessage>}
          {errors.server && <ErrorMessage>{errors.server}</ErrorMessage>}
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner /> : 'Yuborish'}
          </SubmitButton>
          {isSubmitted && (
            <SuccessMessage>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#4caf50"
                width="18px"
                height="18px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
              Fikringiz muvaffaqiyatli yuborildi!
            </SuccessMessage>
          )}
        </FeedbackForm>
      </FeedbackFormSection>
    </div>
  );
};

export default Reviews;