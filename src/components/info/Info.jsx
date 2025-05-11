import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const InfoSection = styled.section`
  background: #f7f9fc;
  padding: 120px 20px 60px;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 10px 40px;
  }
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  border-radius: 12px;
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 30px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CourseImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CourseTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #040b1f;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CourseDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  li::before {
    content: '•';
    color: #ffcc00;
    font-size: 1.2rem;
    margin-right: 8px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CourseSummary = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #040b1f;
  margin-bottom: 20px;
`;

const CourseDetails = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;

  p {
    margin: 5px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const PaymentButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 11, 31, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #e6e9f0;
  background: #040b1f;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 11, 31, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(4, 11, 31, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #1a2b5f;
  padding: 30px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  color: #e6e9f0;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ModalInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #e6e9f0;
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

  &[type='text']:invalid {
    border-color: #ff4d4d;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const ModalLabel = styled.label`
  font-size: 1rem;
  color: #e6e9f0;
  text-align: left;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ModalAmount = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffcc00;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ModalButton = styled.button`
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
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1rem;
  color: #ffcc00;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: #ff4d4d;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const coursesData = [
  {
    id: 'matematika',
    title: 'Matematika',
    image: 'https://i.pinimg.com/736x/40/1b/58/401b58a3ee3805c544719003db013c28.jpg',
    description: [
      'Mantiqiy va tanqidiy fikrlash, murakkab muammolarni tahlil qilish va samarali yechim topishni o‘rgatadi.',
      'Muhandislik, IT, iqtisodiyot, fizika kabi sohalarda rivojlanishda yordam beradi.',
      'Dasturchi, muhandis, moliyachi, tadqiqotchi kabi yuqori daromadli kasblarda ishlash imkoniyati beradi.',
      'Innovatsion fikrlash va ijodkorlikni, Matematik mantiq orqali yangi g‘oyalar yaratish va texnologik taraqqiyotga hissa qo‘shish imkoniyatini yaratib beradi.',
    ],
    summary: 'Matematika nafaqat fanga, balki kundalik hayotga ham katta foyda keltiradi!',
    duration: '3 oy',
    price: '500 000 so‘m/oy',
  },
  {
    id: 'fizika',
    title: 'Fizika',
    image: 'https://i.pinimg.com/736x/cf/61/05/cf6105af0b0e6b387fc895616fb250ac.jpg',
    description: [
      'Mantiqiy fikrlash va ilmiy tahlil qilish qobiliyati rivojlanadi.',
      'Elektronika, mexanika, energetika va sun’iy intellekt sohalarida ishlash imkoniyati oshiradi.',
      'Ilmiy tadqiqotlar va yangi texnologiyalar yaratishda qatnashish mumkin.',
      'Kundalik hayot va koinot hodisalarini ilmiy asosda tushunish imkoniyati paydo bo‘ladi.',
      'Fizika bilimlari bilan dasturchi, muhandis, fizik tadqiqotchi yoki energetika mutaxassisi bo‘lish mumkin.',
    ],
    summary: 'Fizika – kelajak texnologiyalarining asosi bo‘lib, rivojlanish va innovatsiyalar uchun muhim fan hisoblanadi.',
    duration: '9 oy',
    price: '450 000 so‘m/oy',
  },
  {
    id: 'kiberxavfsizlik',
    title: 'Kiberxavfsizlik',
    image: 'https://i.pinimg.com/736x/2e/a2/42/2ea24229e3c118fc1d98de5fb756bfb2.jpg',
    description: [
      'Kiberxavfsizlik mutaxassislari global bozorda talabgir bo‘lib, yaxshi daromad topishadi.',
      'Banklar, IT kompaniyalar, davlat idoralari kabi ko‘plab sohalarda kerakli mutaxassisga aylanasiz.',
      'Shaxsiy va korporativ ma’lumotlarni himoya qilish, xakerlik hujumlaridan, ma’lumotlar o‘g‘irlanishidan himoyalanishni o‘rganasiz.',
      'Linux, Python, tarmoq protokollari va xavfsizlik tizimlari bo‘yicha bilimga ega bo‘lasiz.',
      'Tajovuzkorlarning usullarini o‘rganib, ularga qarshi samarali kurashish imkoniyati paydo bo‘ladi.',
      'Mustaqil ish yoki biznes yuritish. CEH, CISSP, CompTIA Security+ kabi sertifikatlarga ega bo‘lib, global bozorga chiqish imkoni bo‘ladi.',
    ],
    summary: 'Kiberxavfsizlik – doimiy o‘sib boruvchi va katta istiqbolga ega soha. O‘qib, amaliyot qilish orqali katta muvaffaqiyatga erishish mumkin!',
    duration: '6 oy',
    price: '750 000 so‘m/oy',
  },
  {
    id: 'ingliz-tili',
    title: 'Ingliz Tili',
    image: 'https://i.pinimg.com/736x/14/40/10/14401077561aa4d5466c51c7be084c72.jpg',
    description: [
      'Dunyoning eng nufuzli universitetlarida o‘qish imkoniyati kengayadi.',
      'Xalqaro kompaniyalarda ishlash, yaxshi maoshli ish topish osonlashadi.',
      'Dunyoning istalgan joyida bemalol muloqot qilish mumkin.',
      'Eng so‘nggi ilmiy maqolalar, texnologik yangiliklar ingliz tilida bo‘lgani uchun bilim olish osonlashadi.',
      'Yangi madaniyatlarni o‘rganish, xorijliklar bilan do‘stlashish imkoniyati paydo bo‘ladi.',
    ],
    summary: 'Ingliz tili dunyo eshiklarini ochadigan kalit!',
    duration: '9 oy',
    price: '550 000 so‘m/oy',
  },
  {
    id: 'biologiya',
    title: 'Biologiya',
    image: 'https://i.pinimg.com/736x/cc/94/04/cc9404429f7ca3edde221119592b5182.jpg',
    description: [
      'Shifokor, biolog, farmatsevt, genetik, ekolog kabi kasblarga yo‘l ochiladi.',
      'Atrof-muhitni muhofaza qilish, qishloq xo‘jaligida samarali usullarni qo‘llash imkoniyati yaratiladi.',
      'Kasalliklarni davolash, yangi dorilar va qishloq xo‘jaligi mahsulotlarini yaratish imkonini beradi.',
      'Professor, o‘qituvchi yoki ilmiy tadqiqotchi bo‘lib, yangi bilimlarni kashf etish va o‘rgatish imkonini beradi.',
      'To‘g‘ri ovqatlanish, sport va umumiy sog‘lom turmush tarzini tushunish.',
    ],
    summary: 'Biologiya – bu inson, tabiat va hayotning asoslarini o‘rganish orqali ilm-fan va jamiyatga foyda keltiradigan muhim fan!',
    duration: '8 oy',
    price: '450 000 so‘m/oy',
  },
  {
    id: 'kimyo',
    title: 'Kimyo',
    image: 'https://i.pinimg.com/736x/80/cd/b1/80cdb14962d66dd7c31df6369a1c12f3.jpg',
    description: [
      'Yangi moddalar, dori vositalari va materiallarni yaratish o‘rgatadi.',
      'Farmatsevtika, neft-kimyo, oziq-ovqat va texnologiya sohalarida faoliyat yuritadi.',
      'Atrof-muhitni himoya qilish, biotexnologiyalarni rivojlantiradi.',
      'Yangi materiallar va energiya manbalarini ishlab chiqish.',
      'Kimyo sohasidagi mutaxassislar yuqori maoshli ish topish imkoniyatiga ega.',
    ],
    summary: 'Kimyo kundalik hayotdan tortib, katta ilmiy innovatsiyalargacha bo‘lgan keng imkoniyatlarni ochib beradi!',
    duration: '10 oy',
    price: '450 000 so‘m/oy',
  },
  {
    id: 'uzbekiston-tarixi',
    title: 'O‘zbekiston Tarixi',
    image: 'https://i.pinimg.com/736x/cc/64/70/cc647011101698cfe4474e841f74b8d3.jpg',
    description: [
      'Ajdodlarimizning boy madaniyati, urf-odatlari va tarixiy merosi bilan tanishish orqali o‘z milliy qadriyatlarimizni chuqur tushunish.',
      'O‘zbekistonning mustaqillikka erishish yo‘lidagi kurashlarini bilish orqali yurtga muhabbat va sadoqat his qilish.',
      'Tarixiy hodisalar sabab va oqibatlarini o‘rganish orqali mantiqiy tahlil qilish qobiliyatini oshirish.',
      'Davlat boshqaruvi, qonunchilik va jamiyat rivojlanishi jarayonlarini tushunish.',
      'Tarix fanini chuqur o‘rganish orqali arxeologiya, tarixshunoslik, diplomatika, jurnalistika va huquq sohalarida muvaffaqiyatga erishish.',
    ],
    summary: 'O‘zbekiston tarixi – faqat o‘tgan voqealarni bilish emas, balki kelajakka to‘g‘ri xulosa chiqarish imkoniyatini beruvchi muhim fandir.',
    duration: '3 oy',
    price: '750 000 so‘m/oy',
  },
  {
    id: 'web-dasturlash',
    title: 'Web Dasturlash',
    image: 'https://i.pinimg.com/736x/20/ea/1b/20ea1b4d3225648f985e232fef803069.jpg',
    description: [
      'Web dasturchilar hozirda talabgir va yaxshi maosh oluvchi mutaxassislardan biri.',
      'Dunyodagi istalgan joydan turib ishlash mumkin, frilans yoki kompaniyada.',
      'Shaxsiy saytlar, e-commerce platformalar, bloglar yoki startaplarni yaratish imkoniyati.',
      'Dizayn, UI/UX, kod yozish, ma’lumotlar bazasi va server bilan ishlashni o‘rganasiz.',
      'Texnologiya rivojlanib borayotgan davrda web dasturchilar har doim talabgir bo‘lib qoladi.',
    ],
    summary: 'Agar web dasturlashni mukammal o‘rgansangiz, mustaqil dasturchi sifatida ishlashingiz yoki yirik IT kompaniyalarga kirishingiz mumkin!',
    duration: '9 oy',
    price: '650 000 so‘m/oy',
  },
  {
    id: 'robototexnika',
    title: 'Robototexnika',
    image: 'https://i.pinimg.com/736x/e5/2a/32/e52a320e623970a7fb4d0baca4a0d943.jpg',
    description: [
      'Dasturlash, elektronika, mexanika va sun’iy intellekt asoslarini o‘rganish.',
      'Murakkab tizimlarni loyihalash va muammolarni tahlil qilish qobiliyatini shakllantirish.',
      'Avtomatlashtirish, sun’iy intellekt, sanoat robotlari, dronlar va IoT (Internet of Things) sohalarida ishlash imkoniyati.',
      'Yangi texnologiyalar yaratish va startaplar ochish imkoniyati.',
      'Robot muhandisligi, avtomatlashtirish bo‘yicha mutaxassislik kabi talab yuqori bo‘lgan sohalarda ishlash imkoniyatlarini beradi.',
    ],
    summary: 'Robototexnika kelajak kasblaridan biri bo‘lib, uni chuqur o‘rganğan inson innovatsion rivojlanishda muhim o‘rin egallaydi!',
    duration: '9 oy',
    price: '550 000 so‘m/oy',
  },
];

const Info = () => {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errors, setErrors] = useState({ cardNumber: '', expiryDate: '' });
  const [isPaid, setIsPaid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setCardNumber('');
    setExpiryDate('');
    setErrors({ cardNumber: '', expiryDate: '' });
    setIsPaid(false);
    setIsSubmitting(false);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { cardNumber: '', expiryDate: '' };

    // Валидация номера карты
    const cardNumberClean = cardNumber.replace(/\s/g, '');
    if (!/^\d{16}$/.test(cardNumberClean)) {
      newErrors.cardNumber = 'Karta raqami 16 raqamdan iborat bo‘lishi kerak';
      isValid = false;
    }

    // Валидация срока действия
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Amal qilish muddati MM/YY formatida bo‘lishi kerak';
      isValid = false;
    } else {
      const [month, year] = expiryDate.split('/');
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);
      const currentYear = new Date().getFullYear() % 100; // Последние 2 цифры года
      if (monthNum < 1 || monthNum > 12) {
        newErrors.expiryDate = 'Oy 01-12 oralig‘ida bo‘lishi kerak';
        isValid = false;
      } else if (yearNum < currentYear || yearNum > currentYear + 10) {
        newErrors.expiryDate = 'Yil hozirgi yildan 10 yil ichida bo‘lishi kerak';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Только цифры
    value = value.slice(0, 16); // Ограничение до 16 цифр
    value = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Пробелы после каждых 4 цифр
    setCardNumber(value);
    setErrors((prev) => ({ ...prev, cardNumber: '' }));
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Только цифры
    value = value.slice(0, 4); // Ограничение до 4 цифр
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`; // Добавление слэша
    }
    setExpiryDate(value);
    setErrors((prev) => ({ ...prev, expiryDate: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsPaid(true);
      }, 1000); // Имитация запроса
    }
  };

  if (!course) {
    return (
      <InfoSection>
        <InfoContainer>
          <CourseTitle>Kurs topilmadi</CourseTitle>
          <CourseSummary>Uzr, bunday kurs mavjud emas.</CourseSummary>
          <ButtonContainer>
            <BackButton to="/courses">Kurslarga qaytish</BackButton>
          </ButtonContainer>
        </InfoContainer>
      </InfoSection>
    );
  }

  return (
    <InfoSection>
      <InfoContainer>
        <LeftColumn>
          <CourseImage src={course.image} alt={course.title} loading="lazy" />
        </LeftColumn>
        <RightColumn>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseDescription>
            {course.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </CourseDescription>
          <CourseSummary>{course.summary}</CourseSummary>
          <CourseDetails>
            <p><strong>Davomiylik:</strong> {course.duration}</p>
            <p><strong>Narx:</strong> {course.price}</p>
          </CourseDetails>
          <ButtonContainer>
            <PaymentButton onClick={openModal}>To‘lov qilish</PaymentButton>
            <BackButton to="/courses">Orqaga</BackButton>
          </ButtonContainer>
        </RightColumn>
      </InfoContainer>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalTitle>{isPaid ? 'To‘lov muvaffaqiyatli!' : 'To‘lov qilish'}</ModalTitle>
              {!isPaid ? (
                <>
                  <ModalAmount>To‘lov summasi: {course.price}</ModalAmount>
                  <ModalForm onSubmit={handleSubmit}>
                    <div>
                      <ModalLabel htmlFor="cardNumber">Karta raqami</ModalLabel>
                      <ModalInput
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19} // 16 цифр + 3 пробела
                        required
                      />
                      {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
                    </div>
                    <div>
                      <ModalLabel htmlFor="expiryDate">Amal qilish muddati (MM/YY)</ModalLabel>
                      <ModalInput
                        type="text"
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        maxLength={5} // 4 цифры + слэш
                        required
                      />
                      {errors.expiryDate && <ErrorMessage>{errors.expiryDate}</ErrorMessage>}
                    </div>
                    <ModalButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Yuborilmoqda...' : 'Oplatit'}
                    </ModalButton>
                  </ModalForm>
                </>
              ) : (
                <>
                  <SuccessMessage>
                    Siz {course.price} summasini muvaffaqiyatli to‘ladingiz!
                  </SuccessMessage>
                  <ModalButton onClick={closeModal}>Yopish</ModalButton>
                </>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </InfoSection>
  );
};

export default Info;