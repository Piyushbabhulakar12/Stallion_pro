import React from 'react';
import imag1 from "../Assets/Image/AS_01986.jpg";
import imag2 from "../Assets/Image/Lis8Ps1-removebg-preview.png";
import imag3 from "../Assets/Image/velaniavello-36ebc1-removebg-preview.png";
import imag4 from "../Assets/Image/0302481e8ca81d9c44b95413900cbeb1-removebg-preview.png";


const team = [
  {
    img: imag4,
    alt: "Piyush",
    title: "Piyush",
    des: "Web Developer",
  },
  {
    img: imag2,
    alt: "Aniket",
    title: "Aniket",
    des: "Sr. Video Editor",
  },
  {
    img: imag3, 
    alt: "Prerna",
    title: "Prerna",
    des: "Content Writer",
  },
  {
    img: imag2,
    alt: "Ashish",
    title: "Ashish",
    des: "Sr. Video Editor",
  },
  {
    img: imag2,
    alt: "Cinematography",
    title: "Kiran",
    des: "Cinematography",
  },
  {
    img: imag3,
    alt: "Social Media",
    title: "Aditi",
    des: "Social Media",
  },
]

function Team() {
  return (
    <>


<div className="container section_margin_top" id="team">
            <h2 className="heading_text_about">About Me</h2>
        </div>



        <div className="container mt-5">
           <div className="row">
              <div className="col-md-3 col-12">
                <img src={imag1} className="aboutus_img" />
                </div>
                <div className="col-md-9 col-12">
                  <h3 className="headinaboutus">Akshay Hendre</h3>
                  <span style={{ color: '#8d8d8d' }}>Chief Editor</span>
                  <p className="paraaboutus">Hello, I'm Akshay Hendre, and I'm thrilled to welcome you to Videoddity. As the owner and the creative force behind this venture, I wanted to share a bit about my journey and what drives me in the world of visual storytelling.</p>
                  <b style={{ color: '#8d8d8d' }}>A Passion for Visual Storytelling:</b>
                  <p className="paraaboutus">Ever since I can remember, I've been captivated by the power of moving images. It's this fascination that led me to a profound journey into videography and cinematography. The ability to tell stories through visuals, to capture moments in time and transform them into captivating narratives, is a journey I hold dear.</p>
                 <b style={{ color: '#8d8d8d' }}>Over a Decade of Dedication:</b>
                 <p className="paraaboutus">My journey began over 12 years ago, and I've dedicated myself to mastering the art and science of video editing and cinematography. Each year has been a step forward, filled with learning, creative exploration, and an unwavering commitment to excellence.
</p>
<b style={{ color: '#8d8d8d' }}>Mastery of the Craft:
</b>
                 <p className="paraaboutus">From feature films to commercials, documentaries to short films, each project I've had the privilege to work on has added to the rich tapestry of my portfolio. It's my firm belief that the essence of cinematography is in the power of storytelling. My focus is to create visuals that resonate, engage, and leave a lasting impression.
</p>
                </div>
            </div>
         </div>


       
       <div className="container section_margin_top" id="team">
            <h2 className="heading_text_about">Our Team</h2>
        </div>

        <div className="container">
            <div className="row m-auto justify-content-center">
              <div className="col-md-10 col-12">

                  <div className="row">
                      
                      {team.map((data , index) => (

                     
                  <div className="col-md-4 mt-4" key={index}>
                    
                    <center>
                        
                        <img alt={data.alt} src={data.img} className="team_img" />
                    

                       <h5 className="team_title">{data.title}</h5>
                       <p className="team_des">{data.des}</p>


                    </center>
      
                      </div>
                       ))}
                      </div>

              </div>
            </div>
        </div>


    </>
  );
}

export default Team;