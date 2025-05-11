import React from 'react';
import styled from 'styled-components';
import teacher1 from '../../assets/math1.teacher.png';
import teacher2 from '../../assets/teachermath.png';
import teacher3 from '../../assets/math.teacher.png';
import teacher4 from '../../assets/fizika.teacher1.png';
import teacher5 from '../../assets/fizika.teacher2.png';
import teacher6 from '../../assets/fizika.teacher.png';
import teacher7 from '../../assets/ingliz teacher1.png';
import teacher8 from '../../assets/ingliz teacher2.png';
import teacher9 from '../../assets/bioloc.teacher.png';
import teacher10 from '../../assets/kimyo teacher.png';
import teacher11 from '../../assets/ciber.teacher.png';
import teacher12 from '../../assets/tarix.teacher.jpg';
import teacher13 from '../../assets/websayt.teacher.png';
import teacher14 from '../../assets/robotatexnika.teacher.png';

const TeacherSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f7f9fc 0%, #e8ecef 100%);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #040b1f;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TeacherList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeacherItem = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 20px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const TeacherImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const TeacherName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #040b1f;
  margin: 10px 0;
`;

const TeacherRole = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 0;
  line-height: 1.4;
`;

const teachers = [
  { name: 'Isoqov Temurmalik', role: 'MATEMATIKA bo‘yicha ekspert', image: teacher1 },
  { name: 'Habibullayev Dilmurod', role: 'MATEMATIKA bo‘yicha mutaxassis', image: teacher2 },
  { name: 'Abdulvosilov Muhammadyusuf', role: 'MATEMATIKA bo‘yicha ekspert', image: teacher3 },
  { name: 'Axmadjonov Rustamjon', role: 'FIZIKA bo‘yicha ekspert', image: teacher4 },
  { name: 'Rahimov Yodgorbek', role: 'FIZIKA bo‘yicha mutaxassis', image: teacher5 },
  { name: 'Jaloliddin Fazliddinov', role: 'FIZIKA bo‘yicha mutaxassis', image: teacher6 },
  { name: 'Hasanboyev Ilxomjon', role: 'INGLIZ TILI bo‘yicha ekspert', image: teacher7 },
  { name: 'Rizzayev Abdullo', role: 'INGLIZ TILI bo‘yicha mutaxassis', image: teacher8 },
  { name: 'Rasulov Nosirjon', role: 'BIOLOGIYA bo‘yicha ekspert', image: teacher9 },
  { name: 'Otamirzayev Komiljon', role: '🧬 KIMYO bo‘yicha ekspert', image: teacher10 },
  { name: 'Umidjon G‘oyipov', role: '🛡 KIBERXAVFSIZLIK bo‘yicha ekspert', image: teacher11 },
  { name: 'Abdumalikjanova Hilolabonu', role: '🛡 KIBERXAVFSIZLIK bo‘yicha mutaxassis', image: teacher12 },
  { name: 'Isoqjon G‘ofurov', role: '📖 O‘ZBEKISTON TARIXI bo‘yicha mutaxassis', image: teacher12 },
  { name: 'Zafarjanova Ruxshona', role: '⚛ WEB DASTURLARLASH bo‘yicha mutaxassis', image: teacher13 },
  { name: 'Dadamirzayev Diyorbek', role: '🔍 ROBOTOTEXNIKA bo‘yicha ekspert', image: teacher14 },
  { name: 'Musoxanov Mohirjon', role: '🔍 ROBOTOTEXNIKA bo‘yicha mutaxassis', image: teacher14 },
];

const Teacher = () => {
  return (
    <TeacherSection id="teachers-section">
      <SectionTitle>O‘qituvchilarimiz</SectionTitle>
      <TeacherList>
        {teachers.map((teacher, index) => (
          <TeacherItem key={index}>
            <TeacherImage src={teacher.image} alt={`O‘qituvchi ${teacher.name}`} />
            <TeacherName>{teacher.name}</TeacherName>
            <TeacherRole>{teacher.role}</TeacherRole>
          </TeacherItem>
        ))}
      </TeacherList>
    </TeacherSection>
  );
};

export default Teacher;