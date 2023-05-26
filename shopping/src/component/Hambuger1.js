
import { useState } from 'react';
import './Hambuger1.css'


const Hambuger1 =({page1,page2,Modalvalue})=>{
    let [Modal,setModal]=useState(false)
    Modalvalue=Modal
    return(
<div>
<div className='hamburger-menu' onClick={()=>(setModal(!Modal))} >
<div className="hamburger"></div>
<div className="hamburger"></div>
<div className="hamburger"></div>
</div>
{Modal===true&&<div className='hamburger-content'>
        <p >문종후님, 안녕하세요!</p>
        <p>🎁{page1}</p>
        <p>⭐{page2}</p>
      </div>}
      </div>
      )
}

export default Hambuger1;
