import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    title: "Cinematic Videos",
    subdes: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    des: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremIpsum is simply dummy text of the printing Lorem Ipsum",
    url: "/cinmatic",
  },
  {
    title: "Corporate Videos",
    subdes: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    des: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremIpsum is simply dummy text of the printing Lorem Ipsum",
    url: "/corporate",
  },
  {
    title: "Wedding Videos",
    subdes: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    des: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremIpsum is simply dummy text of the printing Lorem Ipsum",
    url: "/wedding",
  },
  {
    title: "Traditional Videos",
    subdes: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    des: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremIpsum is simply dummy text of the printing Lorem Ipsum",
    url: "/",
  },
  {
    title: "Photo Edits",
    subdes: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    des: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing LoremIpsum is simply dummy text of the printing Lorem Ipsum",
    url: "/",
  },
]

function Contact() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" rel="noreferrer" href="#">Stallion Productions</a>
    <button className="btn menu_icon mobile_menu_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="fa fa-bars" aria-hidden="true"></i></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link className="nav-link navbar_text" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link navbar_text" to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link navbar_text" rel="noreferrer" href="#team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navbar_text" rel="noreferrer" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navbar_text" rel="noreferrer" href="#">Picture</a>
        </li>
         <li className="nav-item">
           <Link className="nav-link navbar_text" to="/contact-us">Contact</Link>
        </li>
      </ul>
    <button className="btn menu_icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i className="fa fa-bars" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>


<div className="offcanvas offcanvas-end menu_siderbar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title logo_bold" id="offcanvasExampleLabel">Videoddity</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
           
{menu.map((data , index) => (
<React.Fragment key={index}>
           <div className="container mt-5" key={index}>
               <div className="row">
                   <div className="col-md-5">
                       
                       <h3 className="font_600">{data.title}</h3>
                       <p className="paragraph_text">{data.subdes}</p>

                   </div>
                   <div className="col-md-3">
                   <p className="paragraph_text">{data.des}</p>

                   </div>
                   <div className="col-md-4">
                       
                      <Link to={data.url}><button data-bs-dismiss="offcanvas" className="btn btn-dark float-end rounded-pill btn_spas shadow-lg"><i className="fa fa-angle-right" aria-hidden="true"></i></button></Link>

                   </div>
               </div>
           </div>

<hr></hr>
</React.Fragment>
))}

  </div>
</div>



<div className='container'>
   <div className='row'>
      <div className='col-12' style={{ display: 'flex' , justifyContent: 'center' }}>
        <div className='box_mobilemenu'>
          
        <Link className="nav-link navbar_text" to="/"><i class="bi bi-house" style={{ color: '#fff' , fontSize: '20px'  }}></i></Link>
        <Link className="nav-link navbar_text" to="/about-us"><i class="bi bi-camera-video" style={{ color: '#fff' , fontSize: '20px'  }}></i></Link>
        <Link className="nav-link navbar_text" to="/"><i class="bi bi-image" style={{ color: '#fff' , fontSize: '20px'  }}></i></Link>
        <Link className="nav-link navbar_text" to="/contact-us"><i class="bi bi-person" style={{ color: '#fff' , fontSize: '20px'  }}></i></Link>
        </div>
      </div>
   </div>
</div>


     

    </div>
  );
}

export default Contact;
