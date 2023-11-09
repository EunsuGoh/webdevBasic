import { useState } from 'react';
import axios from 'axios';

function EventHandler() {
  const [id, setID] = useState('');
  const [passwd, setPasswd] = useState('');
  const [name, setName] = useState('');

  // ID 핸들러
  const handleId = (e) => {
    setID(e.target.value);
  };

  // PW 핸들러
  const handlePW = (e) => {
    setPasswd(e.target.value);
  };
  // NAME 핸들러
  const handleName = (e) => {
    setPasswd(e.target.value);
  };

  // 버튼 핸들러
  const hendleClick = async () => {
    //TODO : server request 작성
    try {
      let result = await axios.post('http://localhost:3000/user/register', {
        id: id,
        password: passwd,
        name: name,
      });
      window.alert(result.data.message);
    } catch (e) {
      // ERROR HANDLER :400/500
      // console.log(e);
      window.alert(e.response.data);
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
      }}
    >
      <h3>이름, ID와 PW를 입력하세요.</h3>
      <p>NAME</p>
      <input onChange={handleName} />
      <p>ID</p>
      <input onChange={handleId} />
      <p>PW</p>
      <input type='password' onChange={handlePW} />
      <button onClick={hendleClick}>로그인</button>
    </div>
  );
}

export { EventHandler };
