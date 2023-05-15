import './App.css';
import { Route,Routes} from 'react-router-dom';
import Header from './component/Header';

import Main from './page/Main';
import Bookmark from './page/Bookmark';
import Product from './page/Product';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
     
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/products/list" element={<Product></Product>}></Route>
        <Route path='/bookmark' element={<Bookmark></Bookmark>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;



