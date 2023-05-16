import { useState, useEffect } from "react";
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import image6 from './images/image6.jpg'
import image7 from './images/image7.webp'

const images=[ image1, image2, image3, image4, image5, image6, image7]
const Slider = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((index === 6 ? 0 : index + 1));
      }, 8000);
  
      return () => clearInterval(interval);
    }, [index]);
  
    return (<div>
    <img src={images[index]} alt="something was here" className="slides"/>
    </div>
    );
  };
export default Slider