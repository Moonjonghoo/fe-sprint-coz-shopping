import './Header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='header'>
      <div className='navbar'>
        <img src="logo11.png" alt='logo' onClick={()=>(navigate('/'))}></img>
        <div className='logo'>Cmarket shooping</div>
        <div className='menu' onClick={handleClick}><Hamburger></Hamburger></div>
      </div>
      <div className='line' style={{ zIndex: 1 }}><HorizonLine /></div>
      {showModal && <div className='modal' onClick={handleClick}><Modalcontent></Modalcontent></div>}
    </div>
  );
}


const HorizonLine = () => {
  
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "3px solid #aaa",
        margin: "10px 0 20px",
        opacity: "0.4"
      }}
    >
    </div>
  );
};

export default Header;

const Hamburger = () =>{
  return(
    <div class="hamburger">
  <span></span>
  <span></span>
  <span></span>
</div>
  )
}

const Modalcontent=()=>{
  const navigate=useNavigate()

  return(
    <div className='content'>
      <p >문종후님, 안녕하세요!</p>
      <p onClick={()=>{navigate('/products/list')}}>🎁상품리스트 페이지</p>
      <p onClick={()=>{navigate('/bookmark')}}>⭐북마크 페이지</p>
    </div>
  )
}
