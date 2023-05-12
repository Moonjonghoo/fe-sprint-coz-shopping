import logo from './logo.svg';
import './App.css';
import { Route,Routes,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>메인페이지임</div>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
