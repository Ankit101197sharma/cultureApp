import React from "react";
import classes from "./GridComp.module.css";

function GridComp() {
  return (
    <section className={classes.GridCompSec}>
      <div className={classes.mainData}>
        <div className={classes.GridCompLeft}>
          <div className={classes.gridContent}>
              <div style={{display:'flex'}}>
              <div className={classes.img1}></div>
            <div className={classes.GridCompText}>
              <h2 className={classes.GridHead}>What We DO</h2>
              <a className={classes.readBtn} href="/">read more</a>
            </div>
              </div>
            <div style={{display:'flex'}}>
            <div className={classes.img3}></div>
            <div className={classes.img2}>
              
            </div>
            </div>
            
          </div>
        </div>
        <div style={{width:'50%',  margin:'auto'}}>
        <div className={classes.GridCompRight}>

        </div>
        </div>
        
      </div>
    </section>
  );
}

export default GridComp;
