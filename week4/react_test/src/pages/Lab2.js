import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Lab2() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleClick = () => {
    navigate(`/mypage/${name}`);
  };

  return (
    <div id='login'>
      <h2>회원 가입 페이지</h2>
      <p>이름</p>
      <input onChange={handleName} />
      <p>나이</p>
      <input onChange={handleAge} />
      <button onClick={handleClick}>회원 가입</button>
    </div>
  );
}

export { Lab2 };
