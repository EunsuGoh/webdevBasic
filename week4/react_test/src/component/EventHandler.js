import { useState } from 'react';

function EventHandler() {
  const [id, setID] = useState('');
  const [passwd, setPasswd] = useState('');

  // ID 핸들러
  const handleId = (e) => {
    setID(e.target.value);
  };

  // PW 핸들러
  const handlePW = (e) => {
    setPasswd(e.target.value);
  };

  // 버튼 핸들러
  const hendleClick = () => {
    if (passwd.length < 6)
      window.alert(`비밀번호는 6자 이상으로 설정해 주세요`);
    else window.alert(`반갑습니다. ${id}님!`);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
      }}
    >
      <h3>ID와 PW를 입력하세요.</h3>
      <p>ID</p>
      <input onChange={handleId} />
      <p>PW</p>
      <input type='password' onChange={handlePW} />
      <button onClick={hendleClick}>로그인</button>
    </div>
  );
}

export { EventHandler };
