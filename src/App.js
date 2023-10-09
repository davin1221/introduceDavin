import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">

      <Nav />
      
      <div className='intro intro_full'>
        <div className='intro_text'>
          <div>안녕하세요!</div>
          <div>프런트엔드 개발자</div>
          <div>
            <span>김다빈</span>
            <span>입니다.</span>
          </div>
        </div>
        <div className='intro_img'>
          <img src={process.env.PUBLIC_URL + "/img/img_1.jpg"}/>
        </div>
      </div>

    </div>
  );
}

export default App;
