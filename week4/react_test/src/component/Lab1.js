import { useEffect, useState } from 'react';
import fruits from '../data/fruits.js';
import { FruitCard } from './FruitCard';

function Lab1() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(fruits);

  // 검색어 이벤트 핸들러
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // 검색 버튼 이벤트 핸들러
  const handleClick = () => {
    //클릭을 하면 검색어(search)를 사용해서 품목(item)을 필터링
    let filterdItems = items.filter((elem) => elem.name === search);
    console.log(filterdItems); // 검색어와 일치된 항목만이 필터링
    // 검색어와 일치하는 항목이 1개 이상일 경우에 렌더링할 품목 변경
    if (filterdItems.length >= 1) setItems(filterdItems);
    else setItems(fruits);
  };

  // search state가 잘 변경되고 있는지 확인
  useEffect(() => {
    console.log(search);
  }, [search, items]);

  return (
    <div>
      <h2>조건부 렌더링과 객체 맵핑, 필터링을 활용한</h2>
      <h2>간단한 검색 시스템 만들기</h2>
      <input id='Searchbar' onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <ul>
        {items.map((elem) => {
          return (
            <li>
              <FruitCard fruitsInfo={elem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { Lab1 };
