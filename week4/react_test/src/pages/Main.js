import { useNavigate } from 'react-router-dom';
function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>안녕하세요, 광운대학교 학생 여러분 😃</h2>
      <h2>리액트 입문에 오신걸 환영합니다!</h2>
      <button onClick={() => navigate('/component')}>컴포넌트 작성하기</button>
      <button onClick={() => navigate('/state')}>스테이트</button>
      <button onClick={() => navigate('/props')}>프롭스</button>
      <button onClick={() => navigate('/event')}>이벤트 핸들러</button>
      <button onClick={() => navigate('/lab1')}>Lab1</button>
      <button onClick={() => navigate('/lab2')}>Lab2</button>
    </div>
  );
}

export { Main };
