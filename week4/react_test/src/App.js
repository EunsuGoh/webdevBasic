import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mybutton } from './component/Mybutton';
import { Props } from './component/Props';
import { State } from './component/State';
import { Lab1 } from './component/Lab1';
import { Main } from './pages/Main';
import { EventHandler } from './component/EventHandler';
import { Lab2 } from './pages/Lab2';
import { Mypage } from './component/Mypage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/component' element={<Mybutton />}></Route>
          <Route path='/state' element={<State />}></Route>
          <Route path='/props' element={<Props name='eunsuGoh' />}></Route>
          <Route path='/Lab1' element={<Lab1 />}></Route>
          <Route path='/event' element={<EventHandler />}></Route>
          <Route path='/Lab2' element={<Lab2 />}></Route>
          <Route path='/mypage/:name' element={<Mypage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
