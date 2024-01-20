'use client'
import './styles.css';
import { VscArrowDown, VscDashboard, VscDebug } from 'react-icons/vsc';
import React, { useEffect } from 'react';
import { FaLanguage, FaChartLine, FaWrench, FaWindows, FaDownload, FaLinux, FaApple, FaAnglesUp} from "react-icons/fa6";
import { motion } from 'framer-motion';

export default function Home() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;
      const elemenAtas = document.getElementById("Atas");
    
      if (elemenAtas && scrollPosition >= 120) {
        elemenAtas.classList.add("atasVisible");
      }

      if (elemenAtas && scrollPosition <= 120) {
        elemenAtas.classList.remove("atasVisible");
      }
    };    
    
    window.addEventListener('scroll', handleScroll);

    // Kode untuk IntersectionObserver
    const fiturSections = document.querySelectorAll('.fitur');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, options);

    fiturSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      fiturSections.forEach(section => {
        observer.unobserve(section);
      });
    };

  }, []); // Perhatikan perubahan pada dependencies array, sekarang kosong karena Anda hanya ingin ini dijalankan sekali pada mounting.

  return (
    <div className="container">
      <div id="Atas" className="atas">
        <a href="#landing" className='atasIcon' onClick={handleScrollToTop}>
          <FaAnglesUp size={25} color='black'/>
        </a>
      </div>
      <div className="back1" id="#landing">
        <div className="content1">
          <img className="logo" src="/logo/speakify.svg" alt="" />
          <p className="title">
            SPEAKIFY
          </p>
          <p className="desk">
            Speakify is an artificial intelligence <span className='tanda'>(AI Voice)</span> that is capable of producing a natural voice according to the commands given by the user.
          </p>
          <div className="buttonDownload">
            <a className='free' href='#download'>
              DOWNLOAD FOR FREE
            </a>
            <button className="premium">DOWNLOAD FOR PREMIUM</button>
          </div>
        </div>
        <div className="arrow">
          <a href="#next">
            <VscArrowDown size={40}/>
          </a>
        </div>
      </div>
      <div className="back2" id='next'>
        <div className="content2">
          <h1 className='Select'>
            Select Version
          </h1>
          <p className="ketVersi">
            Choose according to your preferences what you need
          </p>
          <motion.div
            transition={{ duration: 0.4}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="fitur fitur1">
              <p className="judulFitur">
                Free
              </p>
              <p className="isiFitur">
                ✔️ Voice assistant <br />
                ✔️ Uses GPT-3.5 Turbo <br />
                ✖️ Change Japanese voice <br />
                ✔️ Supports all languages <br />
                ✖️ Unlimited tokens <br />
                ✖️ Support maintenance <br />
                ✖️ Interaction with devices
              </p>
            </div>
          </motion.div>
          <motion.div
            transition={{ duration: 0.4}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="fitur fitur2">
              <p className="judulFitur">
                Premium
              </p>
              <p className="isiFitur">
                ✔️ Voice assistant <br />
                ✔️ Uses GPT-4 <br />
                ✔️ Change Japanese voice <br />
                ✔️ Supports all languages <br />
                ✔️ Unlimited tokens <br />
                ✔️ Support maintenance <br />
                ✔️ Interaction with devices
              </p>
            </div>
          </motion.div>
          <br />
        </div>
      </div>
      <div className="back3">
        <div className="content3">
          <motion.div
            initial = {{opacity: 0}}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{opacity: 1}}
            transition={{ease: 'easeIn', duration: 0.5}}
          >
            <p className="judulContent3">
              Why Choose <span className='speakify'>Speakify</span>?
            </p>  
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5 }}
          >
            <div className="isiContent3">
              <div className="head">
                <div className="iconContent3">
                  <span className="debugIcon">
                    <VscDebug size={23}/>
                  </span>
                </div>
                <div className="judulIsiContent3">
                  <p>
                    Guaranteed Security
                  </p>
                </div>
              </div>
              <div className="deskripsiIsiContent3">
                <p>
                  Use encryption algorithms to secure sensitive data, both in transit and at rest. This helps protect information from being intercepted or accessed by unauthorized parties
                </p>
              </div>            
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5}}
          >
            <div className="isiContent3">
              <div className="head">
                  <div className="iconContent3">
                    <span className="debugIcon">
                      <VscDashboard size={23}/>
                    </span>
                  </div>
                <div className="judulIsiContent3">
                  <p>
                    Accessibility
                  </p>
                </div>
              </div>
              <div className="deskripsiIsiContent3">
                <p>
                  Voice assistants enhance accessibility for individuals with physical or visual impairments. By using voice commands, users can control devices or access information without the need for manual input
                </p>
              </div>            
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5}}
          >
            <div className="isiContent3">
              <div className="head">
                  <div className="iconContent3">
                    <span className="debugIcon">
                      <FaLanguage size={21}/>
                    </span>
                  </div>
                <div className="judulIsiContent3 natural">
                  <p>
                    Language Understanding
                  </p>
                </div>
              </div>
              <div className="deskripsiIsiContent3">
                <p>
                  A quality voice assistant, have superior natural language understanding capabilities. This allows the assistant to better comprehend user intent and provide more relevant responses
                </p>
              </div>            
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5}}
          >
            <div className="isiContent3">
              <div className="head">
                  <div className="iconContent3">
                    <span className="debugIcon">
                      <FaChartLine size={21} />
                    </span>
                  </div>
                <div className="judulIsiContent3">
                  <p>
                    Productivity
                  </p>
                </div>
              </div>
              <div className="deskripsiIsiContent3">
                <p>
                  Voice assistants contribute to increased productivity by enabling users to perform tasks efficiently and quickly using voice commands. This includes managing schedules, sending messages, or searching for information
                </p>
              </div>            
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}  
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeIn', duration: 0.5}}
          >
            <div className="isiContent3">
              <div className="head">
                  <div className="iconContent3">
                    <span className="debugIcon">
                      <FaWrench size={21}/>
                    </span>
                  </div>
                <div className="judulIsiContent3">
                  <p>
                    Update Capabilities
                  </p>
                </div>
              </div>
              <div className="deskripsiIsiContent3">
                <p>
                  Choosing a voice assistant platform with active development and regular updates can be advantageous. This ensures ongoing improvements in functionality and the addition of new features
                </p>
              </div>            
            </div>
          </motion.div>
          <div className="testiCode">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ ease: 'easeIn', duration: 0.4}}
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9 }}
          >
            <img className='testi' src="/misc/image.svg" alt="" />
          </motion.div>
          </div>
        </div>
        <motion.div
          className="garis"
          initial={{ width: '0%', opacity: 0, left: '50%', right: '50%' }}
          whileInView={{ width: '70%', opacity: 1, left: 0, right: 0 }}
          transition={{ duration: 0.4 }}
        >
          <hr className='garis' />
        </motion.div>
        <div className="content4" id='download'>
          <h1 className='Select2'>
            Download Free Version
          </h1>
          <p className="ketVersi">
            Choose according to the platform you use below
          </p>
          <motion.div
            initial = {{opacity: 0, scale: 0.9}}
            transition={{ease: 'easeIn', duration: .4}}
            whileInView={{opacity: 1, scale: 1}}
          >
            <div className="downloadBox">
              <div className="logoBox">
                <FaWindows size={35} filter='drop-shadow(0 0 1vw rgba(0, 225, 255, 1)'/>
              </div>
              <p className="judulBox">
                Windows
              </p>
              <div className="button">
                <button className='downloadButton'>
                  Download <FaDownload color='white'/>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial = {{opacity: 0, scale: 0.9}}
            transition={{ease: 'easeIn', duration: .4}}
            whileInView={{opacity: 1, scale: 1}}
          >
            <div className="downloadBox">
              <div className="logoBox">
                <FaLinux size={35} filter='drop-shadow(0 0 1vw rgba(0, 225, 255, 1)'/>
              </div>
              <p className="judulBox">
                Linux
              </p>
              <div className="button">
                <button className='downloadButton'>
                  Download <FaDownload color='white'/>
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial = {{opacity: 0, scale: 0.9}}
            transition={{ease: 'easeIn', duration: .4}}
            whileInView={{opacity: 1, scale: 1}}
          >
            <div className="downloadBox">
              <div className="logoBox">
                <FaApple size={35} filter='drop-shadow(0 0 1vw rgba(0, 225, 255, 1)'/>
              </div>
              <p className="judulBox">
                Mac OS
              </p>
              <div className="button">
                <button className='downloadButton'>
                  Download <FaDownload color='white'/>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <br /><br /><br />
        <motion.div
          className="garis1"
          initial={{ width: '100%', opacity: 0, filter: 'drop-shadow(0 0vw 0vw rgba(255, 255, 255, 0))'}}
          whileInView={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 -2vw 6vw rgba(255, 255, 255, 1))'}}
          transition={{ duration: 0.2, ease: 'easeIn' }}
        >
          <hr className='garis1' />
        </motion.div>
        <div className="back5">
          <div className="content5">
            <p className="judulContent5">
              Development Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
