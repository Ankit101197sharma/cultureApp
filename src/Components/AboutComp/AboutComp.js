import React from 'react'
import classes from "./AboutComp.module.css"

function AboutComp() {
  return (
    <section>
        <div className={classes.mainDiv0}>
            <div className={classes.firstDiv1}>
                <h1 className={classes.firstHeading1}>01</h1>
            </div>
            <div  className={classes.firstDiv2}>
                <h3 className={classes.firstHeading2}>About us</h3>
                <h2 className={classes.heading3}>Immerse yourself in our creative culture</h2>
                <p className={classes.textpara}>Pursue your passions at California College of the Arts, where diverse practices meet and inspiration is at every turn. With access to the Bay Area’s creative communities and thriving industries, you’ll take part in exciting
                                collaborations, deepen your practice, and learn from art and design leaders, including our renowned faculty.</p>

                                <a className={classes.readBtn} href="/">read more</a>
            </div>
            <div  className={classes.firstDiv3}>
                
            </div>
        </div>
    </section>
  )
}

export default AboutComp;