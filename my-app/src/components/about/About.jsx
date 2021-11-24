import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";



export default function About() {
  const textRef = useRef();

  useEffect(() => {
    
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
    
      strings: ["UI/UX Designer?", "Web Developer?", "Content Creator?","Graphics Designer?"],
    });
  }, []);
    
    return (
        <div className="about" id="about">
        <div className="left">
        <div className="wrapper">
          <h2>Are You</h2>
          <h2>Looking For </h2>
          <h1> <span ref={textRef}></span></h1>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <h1>Why work with US?</h1>
        <h2>We porovides coustomised website as clients requirement.<br></br>Our websites features are :</h2>
        <h3>User Friendly</h3>
        <p> Our websites are designed as user-friendly.So that,anyone can get services easily and our clients can easily maintain their website themselves.Clients own the finished and permanent website. </p>
        <h3>Fresh and Clear</h3>
        <p>We are offering fresh and clean eye smothing websites</p>
        <h3>Creative Design</h3>
        <p> Unique and Outstanding UI/UX design is the basic components of our products.</p>
        <h3>Share Expertise</h3>
        <p>We will provide our clients web training they need to confidently make changes or updates to their website down the road,as their trusted partner.</p>

        </div>
        
        
      </div>
    </div>
    );
}
