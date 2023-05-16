import React from 'react';
import {FaFacebook} from 'react-icons/fa'

const ShareOnFacebookButton = () => {
  const handleClick = () => {
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <button style={{backgroundColor:'inherit', border:'none', cursor:'pointer'}} onClick={handleClick}><FaFacebook style={{width:'40px', height:'40px'}}/></button>
  );
};

export default ShareOnFacebookButton;
