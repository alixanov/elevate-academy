import React, { useState } from 'react';
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
  border: 1px solid #040b1f;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #040b1f;
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:focus {
    border-color: #ffcc00;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: #040b1f;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;  
    padding: 8px;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 0.95rem;
  border: 1px solid  #040b1f;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #040b1f;
  outline: none;
  resize: vertical;
  max-height: 150px;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:focus {
    border-color: #ffcc00;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color:rgb(0, 6, 23);
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 204, 0, 0.3);
  }

  &:disabled {
    background: #ccc;
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
  color: #ffcc00;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 0.85rem;
  color: #ff4d4d;
  margin-top: 5px;
`;

const reviewsData = [
  {
    text: "Orzu o‘quv markazi bilim olish uchun eng zo‘r joy!",
    name: "Jamshidbek",
  },
  {
    text: "Bu yerda o‘qib hayotim o‘zgardi!",
    name: "Madinaxon",
  },
  {
    text: "Ustozlar juda mehribon va bilimli!",
    name: "Otabek",
  },
  {
    text: "O‘quv jarayonlari juda qiziqarli va samarali!",
    name: "Malikaxon",
  },
  {
    text: "Bu markazda o‘qib hayotim yangi bosqichga chiqdi!",
    name: "Azizbek",
  },
  {
    text: "O‘quv mashg‘ulotlari juda qiziqarli",
    name: "Ruxshona",
  },
  {
    text: "Ustozlar juda bilimli!",
    name: "Shodiya",
  },
  {
    text: "Men bu o‘quv markazda o‘qib yuksaldim!",
    name: "Nozigul",
  },
];

const Reviews = () => {
  const [formData, setFormData] = useState({ name: '', feedback: '' });
  const [errors, setErrors] = useState({ name: '', feedback: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: '' }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', feedback: '' };

    if (!formData.name.trim()) {
      newErrors.name = "Ismingizni kiriting";
      isValid = false;
    }
    if (!formData.feedback.trim()) {
      newErrors.feedback = "Fikringizni yozing";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', feedback: '' });
      }, 1000);
    }
  };

  return (
    <div>
      <ReviewsSection id="feedback">
        <SectionTitle>O‘quvchilarimizning Fikrlari</SectionTitle>
        <SwiperContainer>
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
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index}>
                <FeedbackCard>
                  <FeedbackText>"{review.text}"</FeedbackText>
                  <StudentName>– {review.name}</StudentName>
                </FeedbackCard>
              </SwiperSlide>
            ))}
          </Swiper>
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
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}
          </SubmitButton>
          {isSubmitted && (
            <SuccessMessage>Fikringiz muvaffaqiyatli yuborildi!</SuccessMessage>
          )}
        </FeedbackForm>
      </FeedbackFormSection>
    </div>
  );
};

export default Reviews;