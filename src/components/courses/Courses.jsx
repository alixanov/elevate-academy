import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CoursesSection = styled.section`
  background: #fff;
  padding: 60px 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #040b1f;
  text-align: center;
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

const CourseList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CourseItem = styled.div`
  background: #040b1f;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
    border: 2px solid #ffcc00;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CourseTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #e6e9f0;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const CourseButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #040b1f;
  background: linear-gradient(90deg, #ffcc00, #ffd700);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(4, 11, 31, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 16px;
  }
`;

const courses = [
  {
    id: 'matematika',
    title: 'Matematika',
    image: 'https://i.pinimg.com/736x/40/1b/58/401b58a3ee3805c544719003db013c28.jpg',
  },
  {
    id: 'fizika',
    title: 'Fizika',
    image: 'https://i.pinimg.com/736x/cf/61/05/cf6105af0b0e6b387fc895616fb250ac.jpg',
  },
  {
    id: 'kiberxavfsizlik',
    title: 'Kiberxavfsizlik',
    image: 'https://i.pinimg.com/736x/2e/a2/42/2ea24229e3c118fc1d98de5fb756bfb2.jpg',
  },
  {
    id: 'ingliz-tili',
    title: 'Ingliz Tili',
    image: 'https://i.pinimg.com/736x/14/40/10/14401077561aa4d5466c51c7be084c72.jpg',
  },
  {
    id: 'biologiya',
    title: 'Biologiya',
    image: 'https://i.pinimg.com/736x/cc/94/04/cc9404429f7ca3edde221119592b5182.jpg',
  },
  {
    id: 'kimyo',
    title: 'Kimyo',
    image: 'https://i.pinimg.com/736x/80/cd/b1/80cdb14962d66dd7c31df6369a1c12f3.jpg',
  },
  {
    id: 'uzbekiston-tarixi',
    title: 'O‘zbekiston Tarixi',
    image: 'https://i.pinimg.com/736x/cc/64/70/cc647011101698cfe4474e841f74b8d3.jpg',
  },
  {
    id: 'web-dasturlash',
    title: 'Web Dasturlash',
    image: 'https://i.pinimg.com/736x/20/ea/1b/20ea1b4d3225648f985e232fef803069.jpg',
  },
  {
    id: 'robototexnika',
    title: 'Robototexnika',
    image: 'https://i.pinimg.com/736x/e5/2a/32/e52a320e623970a7fb4d0baca4a0d943.jpg',
  },
];

const Courses = () => {
  return (
    <CoursesSection id="courses">
      <SectionTitle>Kurslarimiz</SectionTitle>
      <CourseList>
        {courses.map((course) => (
          <CourseItem key={course.id}>
            <CourseImage src={course.image} alt={course.title} />
            <CourseTitle>{course.title}</CourseTitle>
            <CourseButton to={`/info/${course.id}`}>Batafsil</CourseButton>
          </CourseItem>
        ))}
      </CourseList>
    </CoursesSection>
  );
};

export default Courses;