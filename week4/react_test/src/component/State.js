import { useState } from 'react';

function State() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>버튼을 {count}번 눌렀습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export { State };
