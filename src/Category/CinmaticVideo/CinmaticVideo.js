import React from 'react';
import VideoApi from "./VideoApi";
import { Link } from 'react-router-dom';

function CinmaticVideo() {
    return (
      <div>
           
           <div className="container">
           	 <div className="row">
           	 	 <div className="col-md-12">
           	 	 	<h3 className="hero_heading">Videos</h3>
           	 	 	<div className="section_padding">
           	 	 		 <div className="row d-flex justify-content-center">
           	 	 		 	<div className="col-xl-9 col-lg-9 col-md-9 col-12">
								  
           	 	 		 		{VideoApi.map((e , id)=>{
                                            return (
           	 	 		 		<div className="row mt-4" key={id}> 
           	 	 		 			 <div className="col-md-1">
           	 	 		 			 	<div className="row_align">
           	 	 		 			 		<h2 className="video_text_number">{e.id}</h2>
           	 	 		 			 	</div>
           	 	 		 			 </div>
           	 	 		 			 <div className="col-md-5">

           	 	 		 			 	 <Link to={`/Cinmaticv/${e.id}`}> <img src={e.url} className="video_thubnail" /> </Link>
           	 	 		 			 </div>
           	 	 		 			 <div className="col-md-5">
           	 	 		 			 	<div className="row_align_title">
           	 	 		 			 	  <Link to={`/Cinmaticv/${e.id}`}> <h4 className="video_title">{e.title}</h4> </Link>
           	 	 		 			    </div>
           	 	 		 			 </div>
           	 	 		 			 <div className="col-md-1 d-xl-block d-lg-block d-md-block d-none">
           	 	 		 			 	<div className="row_align">
           	 	 		 			 <Link to={`/Cinmaticv/${e.id}`}><button className="btn"><i className="bi bi-play-circle video_play_icon"></i></button></Link>
           	 	 		 			 </div>
           	 	 		 			 </div>
           	 	 		 		</div>
           	 	 		 		);})}
           	 	 		 	</div>
           	 	 		 </div>
           	 	 	</div>

           	 	 </div>
           	 </div>
           </div>

      </div>
  )
}
export default CinmaticVideo;