import './header.css'
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [Modal, setModal] = useState(false);
    let navigate=useNavigate()
    return (
        <header>
            <nav>
                <div className='logo'>
                <img src="./로고.PNG" alt="쇼핑몰로고" className='img-logo' onClick={()=>{navigate('/')}}></img>
                <h2>COZ Shopping</h2>
                </div>
                <div className='hamburger-menu' onClick={()=>(setModal(!Modal))}>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                    <div className="hamburger"></div>
                </div>
                
            </nav>
            {Modal?<Selectlist></Selectlist>:null}
        </header>
      );
}

export default Header;

function Selectlist() {
    let navigate=useNavigate()
    return (
        <div className='hamburger-content'>
        <p >문종후님, 안녕하세요!</p>
        <p onClick={()=>{navigate('/products/list')}}>🎁상품리스트 페이지</p>
        <p onClick={()=>{navigate('/bookmark')}}>⭐북마크 페이지</p>
      </div>
    );
}

