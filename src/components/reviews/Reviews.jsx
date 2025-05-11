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
  font-size: 2.8rem;
  font-weight: 600;
  color: #e6e9f0;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #ffcc00, #ffd700);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const SwiperContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .swiper {
    padding-bottom: 40px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: #ffcc00;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background: #ffd700;
    opacity: 1;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #ffcc00;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FeedbackCard = styled.div`
  background: #1a2b5f;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    border: 2px solid #ffcc00;
  }

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 300px;
  }
`;

const FeedbackText = styled.p`
  font-size: 1rem;
  color: #e6e9f0;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const StudentName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #ffcc00;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const FeedbackFormSection = styled.section`
  background: #1a2b5f;
  padding: 60px 20px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #e6e9f0;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const FeedbackForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #e6e9f0;
  border-radius: 8px;
  background: #ffffff;
  color: #040b1f;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ffcc00;
  }

  &::placeholder {
    color: #555;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #e6e9f0;
  border-radius: 8px;
  background: #ffffff;
  color: #040b1f;
  outline: none;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ffcc00;
  }

  &::placeholder {
    color: #555;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
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

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1rem;
  color: #ffcc00;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  font-size: 0.9rem;
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
            // Имитация отправки на сервер
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                setFormData({ name: '', feedback: '' });
                // Здесь можно добавить реальную отправку на сервер
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
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
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