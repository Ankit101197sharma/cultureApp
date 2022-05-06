import React from 'react';
import classes from "./DesignComp.module.css"

function DesignComp() {
  return (
    <section className={classes.section3}>
        <div  className={classes.mainDesign}>
            <div className={classes.leftDesign}>
              <div>
                <h3 className={classes.designH3}>Core DISCIPLINES</h3>
                <div >
                <h1 style={{width:'60%', backgroundColor:'#4ad7d1', paddingLeft:'30px'}}  className={classes.designH1}>Architecture</h1>
                </div>
               
                <p className={classes.designP}>Connect theoretical speculation and material innovation with experimental design methods in our four academic programs and five research labs.</p>
                <span className={classes.rightArrow}>&#8594;</span>
              </div>
            </div>
            <div className={classes.rightDesign1}>
              <div className={classes.rightDesign}>

              <h3 className={classes.texth3}>core disciplines</h3>
              <div className={classes.ushape}></div>
              <h2 className={classes.textDesign}>Design</h2>
              <p className={classes.designp}>Develop the skills to imagine and create new kinds of objects, images, systems, and interactions that contribute meaningfully to our world.</p>
              <span className={classes.leftArrow}>&#8594;</span>
              </div>
            </div>
            
        </div>
        <div style={{display:'flex'}}>
        <div className={classes.leftDesign1}>
              <div>
                <h3 className={classes.designCoreh3}>Core DISCIPLINES</h3>
                <div >
                <h1 style={{width:'60%', backgroundColor:'#fff', paddingLeft:'24px'}}  className={classes.designH4}>Fine Arts</h1>
                </div>
               
                <p className={classes.designP3}>Find your voice, identify your audience, and make your mark in the expansive worlds of contemporary art, craft, and digital media.</p>
                <span className={classes.rightArrow3}>&#8594;</span>
              </div>
            </div>
            <div className={classes.rightDesign00}>
              <div className={classes.rightDesign}>

              <h3 className={classes.texth6}>core disciplines</h3>
              <div className={classes.ushape2}></div>
              <h1   className={classes.textDesign1}>Humanities</h1>
              <p className={classes.designp}>Explore critical thinking as a creative act and advance cultural engagement through research, studio work, and writing.</p>
              <span className={classes.leftArrow4}>&#8594;</span>
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default DesignComp;