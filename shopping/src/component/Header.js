import './Header.css';

function Header() {
  return (
    <div>
    <div className='navbar'>
      <div className='logo'>Cmarket shooping</div>
      <div className='menu'>Menu</div>
    </div>
    <div className='line'><HorizonLine></HorizonLine></div>
    </div>
  );
}

export default Header;



const HorizonLine = () => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          margin: "10px 0 20px",
          
        }}
      >
      </div>
    );
  };
  
