import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import logo1 from '../../assets/logo/logo1.png'
import logo2 from '../../assets/logo/logo2.png'
import logo3 from '../../assets/logo/logo3.png'
import logo4 from '../../assets/logo/logo4.png'
import logo5 from '../../assets/logo/logo5.png'
import axios from 'axios';
function Sponsors() {
  // const [sponserimages,setSponserimages]=useState([])
    const Sponsor=[
        {
           logo:logo1
        },
        {
           logo:logo2
        },
        {
           logo:logo3
        },
        {
           logo:logo4
        },
        {
           logo:logo5
        },
      

    ] 
    // useEffect(async()=>{
    //   try {
    //     const response= await axios.get("https://dynamo-unicorn-chess-backend.onrender.com/api/getRule")
    //     if(response){
    //       setSponserimages(response.data.data)
    //     }
        
    //   } catch (error) {
    //     console.log(error)
    //   }


    // },[])
    // console.log(sponserimages,"+++++++++++sponserimages+++++++++++")
    
  

  return (
    <>
 <div className="max-w-3xl mx-auto px-5 mt-6">
  <div className="flex flex-col justify-center">
    <div className="text-center">
      <h2 className="font-semibold text-3xl">Our Sponsors</h2>
      <p className="max-w-md mx-auto mt-2 text-gray-500">
        We are thankful to each and every company sponsored our plugin which
        helped us to continue working on it.
      </p>
    </div>
  </div>

</div>
<div className="w-full  p-3">
    <div >
    <OwlCarousel
          className="owl-theme"
          loop={true}
          margin={6}
          autoplay={true}
          autoplayTimeout={5000}
          autoplaySpeed={2000}
          items={1}
          dots={false}
          nav={false}
          dotsEach={true}
          dotData={true}
          responsive={
            {
              0: {
                items: 2
              },
              600: {
                items: 3
              },
              1000: {
                items: 5
              }
            }
          }
        >
          {Sponsor.map((item, index) =>
          <div key={index} className='relative rounded-md'>
            <img loading='lazy' className="h-40 w-full rounded-md" src={item.logo} alt="" />
          </div>
          
            
              
           
          )}
        
        </OwlCarousel>     
    </div>

</div>

</>

  )
}

export default Sponsors