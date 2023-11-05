import { useParams } from 'react-router-dom';

function Mypage() {
  const { name } = useParams();
  return <div>안녕하세요, {name}님!</div>;
}

export { Mypage };
