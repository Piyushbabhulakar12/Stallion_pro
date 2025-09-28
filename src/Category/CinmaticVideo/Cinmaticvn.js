import React from "react";
import VideoApi from "./VideoApi"; 


const Cinmaticn = () => {
    return(
        <>
        
        <div className="container mt-4">
           	 <div className="rows">
           	 	 <div className="col-md-12">
           	 	 	<h3 className="hero_heading">Cinematic Videos</h3>

                    {VideoApi.map((data , index) => {
                        if(data.creater === 'Cinematic Videos')
                        {
                         return (
                            <React.Fragment key={index}>
                            	 <iframe loading="lazy" src={data.videourl} width="100%" height="600" allow="autoplay" className="iframe_video mt-5"></iframe>
                                 
                            </React.Fragment>
                         )
                        }
                    })}


                    </div>
                    </div>
                    </div>

        </>
    )
}
export default Cinmaticn;