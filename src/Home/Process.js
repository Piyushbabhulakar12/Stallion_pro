import React from 'react';
import imag1 from "../Assets/Image/human.png";
import imag2 from "../Assets/Image/human2.png";


const process = [
   {
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the",
      img: `${imag1}`,
   },
   {
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the",
      img: `${imag2}`,
   },
   {
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the",
      img: `${imag1}`,
   },
]

const processa = [
   {
      num: "01",
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
   },
   {
      num: "02",
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
   },
   {
      num: "03",
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
   },
   {
      num: "04",
      title: "Lorem Ipsum is simply dummy text of the",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
   },
]


function Process() {
  return (
    <div>

          
          <div className="bg_color mt-5">

            
            <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                       
                      
                       <h3 className="color_bigtitle">Lorem Ipsum is simply dummy text of the</h3>
                       <p className="color_title_a">Lorem Ipsum is simply dummy text of the </p>

                     </div>
                  </div>
            </div>


         
           <div className="container mt-5">
                <div className="row">
                  {process.map((data , index) => (
                    <div className="col-md-4" key={index}>
                      <div className="container">
                      <div className="card card_baba">
                      <p className="whittecard_title_a">{data.title}</p>      
                      <h3 className="whitecard_bigtitle">{data.des}</h3>
                      
                      <img src={data.img} alt="DATA" className="art_image"></img>
                      </div>
                      </div>

                      
                    </div>
                    ))}
                   
                      </div>

                    </div>
                </div>
         



          <div className="container mt-5">
             <div className="row">
               <div className="col-12">
                     
               <div className="">
            <h2 className="heading_text_about">Process</h2>
        </div>


        <div className="contianer mt-4">
            <div className="row m-auto justify-content-center">
               <div className="col-md-11 col-12">

                  <div className="row">

                     {processa.map((data , index) => (
                  <div className="col-md-6" key={index}>
                  
                  <div className="para_bold">
                  <h2 className="process_title">{data.num}</h2>
                  <h3 className="process_big_title">{data.title}</h3>
                  <p className="para_process">{data.des}</p>
    
                  </div>
               </div>
                ))}
              

                  </div>

               </div>
            </div>
        </div>





   






               </div>
             </div>
          </div>







    </div>
  );
}

export default Process;