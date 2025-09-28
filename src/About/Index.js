import { Link } from "react-router-dom";
import Menu from "../Component/Menu";

const data = [
    {
        id: '01',
        title: 'Cinematogrphy',
        des: 'At Videoddity, we are passionate about the art of storytelling through visual media. Our journey in the world of videography and cinematography began with a shared vision: to capture the extraordinary in the ordinary and transform moments into captivating narratives.',
        link: '/cinmatic',
    },
    {
        id: '02',
        title: 'Video editing',
        des: 'At Videoddity, video editing is the heartbeat of our creative process. It’s where raw footage transforms into compelling stories, where every frame is carefully crafted, and where the magic truly happens. We take pride in our expertise in the art of video editing.',
        link: '/corporate',
    },
    {
        id: '03',
        title: "Precision and Creativity",
        des: "Video editing is more than just assembling clips. It’s about weaving together a seamless narrative, enhancing visual appeal, and evoking emotions. Our video editing team brings precision and creativity to every project, ensuring that the final product not only meets but exceeds your expectations.",
        link: "/wedding",
      },
    {
        id: '04', 
        title: 'Technical Excellence',
        des: 'We use industry-standard software and cutting-edge tools to edit your videos. From color correction to sound design, we pay meticulous attention to every detail, ensuring the highest technical quality.',
        link: '#',
    },
    {
        id: '05',
        title: 'Storytelling',
        des: 'Editing isn’t just about visuals; it’s about storytelling. We understand the power of pacing, transitions, and the right music to engage your audience. Our editors are adept at enhancing the narrative arc and making your story unforgettable.',
        link: '#',
    },
    
]



const Index = () => {
    return(
        <>
         

         <div className="container">
         <h3 className="hero_heading mt-5">About Us</h3>


         <div className="container mt-5">
           <div className="row">
              <div className="col-12">
                
              <h3 className="subheading mt-5" style={{ color: '#8d8d8d' }}><span style={{ fontSize: '15px', marginRight: '50px' , color: '#8d8d8d' }}>What We Do</span>We are a team of creative heads all working towards designing your memory in the most spectacular way. From shooting to editing and the final delivery is curated finely, with attention to detail, to provide you with the best you'll find around. We have partnered with clients who have appreciated us for our quality and also for our timely delivery. Don't trust us? Book your order now and experience it like never before. Call us on:</h3>
<br /> <br />
                {data.map((data , index) => (

                   <div className="card_about" key={index}>
                       
                       <div className="row">
                         <div className="col-md-2">
                          
                          <h5 className="about_cardid" style={{ color: '#8d8d8d' }}>{data.id}</h5>

                         </div>
                         <div className="col-md-5">
                          
                          <h2 className="about_cardname" style={{ color: '#8d8d8d' }}> {data.title} </h2>
 
                         </div>
                         <div className="col-md-5">
                          
                          <p className="about_carddes" style={{ color: '#8d8d8d' }}>{data.des}</p>

                          <Link to={data.link}><button className="btn btn_custom_knomorebtn">Know More About Project</button></Link>

                         </div>
                       </div>

                   </div>

                ))}
               



              </div>
           </div>
         </div>



        


          </div>

        </>
    )
}
export default Index;