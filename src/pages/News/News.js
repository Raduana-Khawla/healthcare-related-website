import React from "react";
import "./News.css";

const News=()=>{
    return(
   <><div className="title my-5">
            <h2><span className="my-3">Latest News</span></h2>
            <div className="row my-3 p-3">
                <div className="col-md-6">
                   <div className="row">
                        <div className="col-md-6">
                        <img className="img-fluid w-100 h-100" src="https://denta.cmsmasters.net/wp-content/uploads/2017/08/blog-6-2.jpg" alt="" />
                       </div>
                        <div className="col-md-6">
                        <h3>When Should Toddlers Go to the Dentist?</h3>
                            <p>The first dental visit is recommended by 12 months of age, or within 6 months of the first tooth coming in. The first visit often lasts 30 to 45 minutes. Depending on your child's age, the visit may include a full exam of the teeth, jaws, bite, gums, and oral tissues to check growth and development.</p>
                         </div>
                    </div>
             </div>
             <div className="col-md-6">
             <div className="row">
                        <div className="col-md-6">
                        <img className="img-fluid w-100 h-100" src="https://denta.cmsmasters.net/wp-content/uploads/2017/08/blog-5-2.jpg" alt="" />
                       </div>
                        <div className="col-md-6">
                        <h3>Nowadays Improvements In Dental Technology</h3>
                            <p>Effective dentistry combines expert skills and cutting edge dental technology to achieve and maintain lasting results. Improved technology not only makes your treatments more accurate and effective, but also faster and more gentle. Consider the following five ways our advanced technology can make-over your smile and your dental experience.</p>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    
        <section className="title2">
        
        <h1>Legend's Speech</h1>
       <div className="d-flex">
       <div className="my-5 col-md-6 col-sm-12 p-5 justify-content-center align-aitems-center text-center">
                <p><span className="text-white">"A smile adorns a person. Dentists are like jewelers. I am glad that I can decorate people even in this way. You don’t have to brush your teeth — just the ones you want to keep.” Dentistry is not expensive, neglect is. Being a famous designer is like being a famous dentist."</span></p>
                <h5>Richard Scott</h5>
                <h6>Dentist-Orthodontist</h6>
                </div>
                <div className="col-md-6 col-sm-12 m-3 p-3 mx-3">
                    <img className="img-fluid w-75 h-75" src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.6435-9/167319494_3905784519513254_7586299318240073406_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LYjQE-cVNeQAX-CHhIi&_nc_ht=scontent.fdac27-1.fna&oh=cfb5e5af9adb03a05feebd3abf51e20a&oe=61931D69" alt="" />
                </div>
            </div>
            </section>
            <div className="title3 my-3">
            <h2><span className="text-white" >Blogs</span></h2>
                <img className="img-fluid w-75 h-75 mb-3" src="https://camo.envatousercontent.com/b2f2181349c345a9b05a603518fb56e44188ea82/687474703a2f2f636d736d6173746572732e6e65742f66696c65732f64656e74612f342e6a7067" alt="" />
            </div> 
            </>
    );
}

export default News;