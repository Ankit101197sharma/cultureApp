import React from 'react'
import classes from "./FooterComp.module.css"

function FooterComp() {
  return (
    <section className={classes.FooterComp1}>
        <div>
            <div className={classes.footerData}>
            <p> <a href="/">Template</a>  Created with <a href="/">Nicepage</a> </p>
            </div>
        </div>
    </section>
    

  )
}

export default FooterComp;