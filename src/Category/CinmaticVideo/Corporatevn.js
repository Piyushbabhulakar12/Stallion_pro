import VideoApi from "./VideoApi";
import React from "react";

const Corporatevn = () => {
    return (
        <>
         <div className="container mt-4">
           	 <div className="rows">
           	 	 <div className="col-md-12">
           	 	 	<h3 className="hero_heading">Corporate Videos</h3>

                    {VideoApi.map((data , index) => {
                        if(data.creater === 'Corporate Videos')
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
export default Corporatevn;