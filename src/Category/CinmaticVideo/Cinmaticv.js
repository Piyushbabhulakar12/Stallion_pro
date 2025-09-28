import React from 'react';
import VideoApi from './VideoApi.js';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';

const Cinmaticv = () =>{
     
	const {id} = useParams();

	const dataid = {id}

	console.log(dataid);

	return(
        <> 
              <div className="container">
           	 <div className="row">
           	 	 <div className="col-md-12">
           	 	 	<div className="section_padding">
           	 	 		 <div className="row d-flex justify-content-center">
           	 	 		 	<div className="col-xl-10 col-lg-10 col-md-10 col-12">
								  <h3 className="hero_heading">Video's</h3>
           	 	 		 		{VideoApi.filter(data => data.id.includes(id)).map((e , index)=>{
                                            return (
												<React.Fragment key={index}>
												 <iframe key={index} src={e.videourl} width="100%" height="550" allow="autoplay" className="iframe_video"></iframe>
												<h3 className="video_title">{e.title}</h3>
												<p>Video For {e.title}</p>
												</React.Fragment>
           	 	 		 		);})}

									  <h3 className="hero_heading mt-5">Suggestions</h3>
                      <div className="row">
                  {VideoApi.filter(data => data.id !== id).map((e , index)=>{
                                            return (
                        <div className="col-md-4 mt-3" key={index}>
                        <Link to={`/cinmaticv/${e.id}`}>   <img src={e.url} className="video_thubnail" />
                           <h5 className="video_titile_grid">{e.title}</h5>
                           <p className="text_acnhcor mt-1">{e.creater}</p> </Link>
                        </div> 
                          );})}
                      </div>
           	 	 		 	</div>
           	 	 		 </div>
           	 	 	</div>
           	 	 </div>
           	 </div>
           </div>
        </>
  )
}
export default Cinmaticv;