import React, {useEffect, useState} from 'react';
import arrow from './arrow.svg'
  
const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  },[])
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  return (
    <div className='scroll' style={{
      display : visible ? "block" : "none"
    }} onClick={scrollToTop}>
      <img src={arrow} alt="" />
    </div>
  );
}
  
export default ScrollButton;