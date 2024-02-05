import React from 'react';
import img1 from './Images/1673521990847.jpg';
import img2 from './Images/Screenshot_20221229-072728_WhatsApp.jpg';
import img3 from './Images/Screenshot_20230213-005112_WhatsApp.jpg';
import img4 from './Images/Screenshot_20230213-185527_WhatsApp.jpg';
import CardComponent from './Card';


function images(){

    return(
        <div>
              <CardComponent></CardComponent>
              
            {/* <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
            <img src={img4} alt=""/> */}
        </div>
    )
       

    
}
export default images; 