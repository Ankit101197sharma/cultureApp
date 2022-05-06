import React from 'react';
import classes from './StudioComp.module.css'

function StudioComp() {
  return (
      <section className={classes.studioSection}>
          <div className={classes.studioMain}>
          <div className={classes.studioRight}>
              <div className={classes.rightContent}>
<h3 className={classes.programH3}>UNDERGRADUATE</h3>
<h1 className={classes.programH1}>Studios + Shops</h1>
<p className={classes.studioText}>The right tool or material is often exactly what you need to achieve a breakthrough. Our creative spaces, overseen by experienced studio managers, support your work in traditional craftsmanship, digital fabrication, and hybrid practices.</p>
              </div>
              
          </div>
          <div className={classes.leftContent} >
<div className={classes.studioLeft}>
<h1 className={classes.studioHead}>03</h1>
</div>
              </div>
          </div>
          
      </section>
    
  )
}

export default StudioComp;