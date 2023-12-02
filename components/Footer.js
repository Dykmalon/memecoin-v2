import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="ft-position">
            <footer className={styles.footer}>
             
      
         
          

                <p>© 2023 $BILLY</p>
                <div className='social'>
                    <ul>
                        <li><a><img src="/x.svg" width="20px"/></a></li>
                        <li><a><img src="/telegram.svg" width="20px"/></a></li>
                        <li><a><img src="/discord.svg" width="20px"/></a></li>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;