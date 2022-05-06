import React from 'react';
import classes from "./LandingPage.module.css"

function LandingPage() {
  return (
    <section className={classes.section1}>
        <div className={classes.usheet}>
            <div className={classes.ugroup}>
                <div className={classes.ucontainer}>
                    <h2 className={classes.subtitle}>Overview</h2>
                    <h1 className={classes.utitle}>Art Academics</h1>
                    <p className={classes.utext}>Our academic programs support creative practitioners who strive for a world that’s brighter, more inclusive, relentlessly innovative, and ecologically resilient.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default LandingPage;