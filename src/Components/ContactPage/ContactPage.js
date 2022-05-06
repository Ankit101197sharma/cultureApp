import React from 'react'
import classes from "./ContactPage.module.css";
import {FiFacebook} from "react-icons/fi"
import {FaInstagram} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {FaPinterest} from "react-icons/fa"

function ContactPage() {
  return (
      <section className={classes.maindiv}>
          <div className={classes.maindiv0}>
              
              <div className={classes.leftdiv}>
                  <div className={classes.contactDetails}>
                  <h3 className={classes.programHeadline}>Sample Headline</h3>
                    <h2 className={classes.programHeadline2}>Contact Us</h2>
                    <p className={classes.contactText}>143 Art and Design Building <br />
408 E. Peabody Drive <br />
School of Art + Design Champaign, IL 61752 <br />
217-333-0866</p>

<div >
    <div className={classes.socialIcon}>
        <span className={classes.spani}><FiFacebook/></span>
        <span className={classes.spani}><FaInstagram/></span>
        <span className={classes.spani}><FiTwitter/></span>
        <span className={classes.spani}><FaPinterest/></span>
    </div>
</div>
                  </div>
                    

              </div>
              <div className={classes.rightdiv0}>
              <div className={classes.rightdiv}>
              </div>
              </div>
             
          </div>
      </section>
    
  )
}

export default ContactPage;