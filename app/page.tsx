'use client'
import './styles.css';
import { VscArrowDown, VscDashboard, VscDebug } from 'react-icons/vsc';
import React, { useEffect, useState } from 'react';
import { FaLanguage, FaChartLine, FaSteam, FaTwitter,FaWrench, FaWindows, FaDownload, FaLinux, FaApple, FaAnglesUp, FaGithub, FaInstagram, FaTiktok, FaCaretRight, FaCaretLeft, FaCaretDown} from "react-icons/fa6";
import { motion } from 'framer-motion';

export default function Home() {

  const isBrowser = typeof window !== 'undefined';

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpenJ1, setIsOpenJ1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenJ2, setIsOpenJ2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpenJ3, setIsOpenJ3] = useState(false);

  const handleTap1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpenJ1(!isOpenJ1);
  };

  const handleTap2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpenJ2(!isOpenJ2);
  };

  const handleTap3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpenJ3(!isOpenJ3);
  };
  const [transformX, setTransformX] = React.useState(25);
  const [count, setCount] = React.useState(0);
  
  const handleButtonClickKanan = () => {
    setTransformX((prevTransformX) => prevTransformX - 180);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  
    const elemenButtonKanan = document.getElementById("kanan");
    const elemenButtonKiri = document.getElementById("kiri");
  
    if (elemenButtonKiri && count === 0) {
      elemenButtonKiri.classList.remove("ilang");
      elemenButtonKiri.classList.add("ada");
    }
  
    if (elemenButtonKanan && count === 2) {
      elemenButtonKanan.classList.add("ilang");
      elemenButtonKanan.classList.remove("ada");
    }
  
    if (elemenButtonKanan && count === 1) {
      elemenButtonKanan.classList.add("ada");
      elemenButtonKanan.classList.remove("ilang");
    }
  };
  
  const handleButtonClickKiri = () => {
    setTransformX((prevTransformX) => prevTransformX + 180);
    setCount((prevCount) => prevCount - 1);
    console.log(count);
  
    const elemenButtonKanan = document.getElementById("kanan");
    const elemenButtonKiri = document.getElementById("kiri");
  
    if (elemenButtonKiri && count === 1) {
      elemenButtonKiri.classList.add("ilang");
      elemenButtonKiri.classList.remove("ada");
    }
  
    if (elemenButtonKanan && count === 2) {
      elemenButtonKanan.classList.remove("ilang");
      elemenButtonKanan.classList.add("ada");
    }
  
    if (elemenButtonKanan && count === 3) {
      elemenButtonKanan.classList.add("ada");
    }
  };
    
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

  }, []);

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
          <div className="boxFitur">
            <motion.div
              transition={{ duration: 0.4, ease: 'easeIn'}}
              whileHover={{ scale: isBrowser && window.innerWidth >= 1024 ? 1 : 1.1 }}
              whileTap={{ scale: isBrowser && window.innerWidth >= 1024 ? 1 : 0.9}}
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
              whileHover={{ scale: isBrowser && window.innerWidth >= 1024 ? 1 : 1.1 }}
              whileTap={{ scale: isBrowser && window.innerWidth >= 1024 ? 1 : 0.9}}
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
          </div>
          <br />
        </div>
      </div>
      <motion.div
          className="garisAtas"
          initial={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 0vw 0vw rgba(255, 255, 255, 0))', borderRadius: '0 0 0 0'}}
          whileInView={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 2vw 6vw rgba(255, 255, 255, 1))', borderRadius: isBrowser && window.innerWidth >= 1024 ? '0 0 2vw 2vw' : '0 0 15vw 15vw'}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <hr className='garisAtas' />
        </motion.div>
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
          <div className="Content3">
            <motion.div
              className='boxContent3 box1'
              initial={{ opacity: 0, x: 100 }}  
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeIn', duration: 0.5 }}
            >
              <div className="isiContent3 box1">
                <div className="head">
                  <div className="iconContent3">
                    <span className="debugIcon">
                      <VscDebug size={isBrowser&&window.innerWidth >= 1024 ? 30 :23}/>
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
              className='boxContent3 box2'
              initial={{ opacity: 0, x: -100 }}  
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeIn', duration: 0.5}}
            >
              <div className="isiContent3">
                <div className="head">
                    <div className="iconContent3">
                      <span className="debugIcon">
                        <VscDashboard size={isBrowser&&window.innerWidth >= 1024 ? 30 :23}/>
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
              className='boxContent3 box3'
              initial={{ opacity: 0, x: 100 }}  
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeIn', duration: 0.5}}
            >
              <div className="isiContent3">
                <div className="head">
                    <div className="iconContent3">
                      <span className="debugIcon">
                        <FaLanguage size={isBrowser&&window.innerWidth >= 1024 ? 30 :23}/>
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
              className='boxContent3 box4'
              initial={{ opacity: 0, x: -100 }}  
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeIn', duration: 0.5}}
            >
              <div className="isiContent3">
                <div className="head head4">
                    <div className="iconContent3">
                      <span className="debugIcon">
                        <FaChartLine size={isBrowser&&window.innerWidth >= 1024 ? 30 :23}/>
                      </span>
                    </div>
                  <div className="judulIsiContent3">
                    <p>
                      Productivity
                    </p>
                  </div>
                </div>
                <div className="deskripsiIsiContent3 desk4">
                  <p>
                    Voice assistants contribute to increased productivity by enabling users to perform tasks efficiently and quickly using voice commands. This includes managing schedules, sending messages, or searching for information
                  </p>
                </div>            
              </div>
            </motion.div>
            <motion.div
              className='boxContent3 box5'
              initial={{ opacity: 0, x: 100 }}  
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: 'easeIn', duration: 0.5}}
            >
              <div className="isiContent3">
                <div className="head head5">
                    <div className="iconContent3">
                      <span className="debugIcon">
                        <FaWrench size={isBrowser&&window.innerWidth >= 1024 ? 30 :23}/>
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
          </div>
          <div className="testiCode">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1}}
              transition={{ ease: 'easeIn', duration: 0.4}}
              whileHover={{ scale: isBrowser && window.innerWidth >= 1024 ? 1 : 1.1}}
              whileTap={{ scale: isBrowser && window.innerWidth >= 1024 ? 0.9 : 0.9 }}
            >
              <img className='testi' src="/misc/image.svg" alt="" />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="garis"
          initial={{ width: '0%', opacity: 0, left: '50%', right: '50%' }}
          whileInView={{ width: isBrowser && window.innerWidth >= 1024 ? '90%' : '70%', opacity: 1, left: 0, right: 0 }}
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
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}
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
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}
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
            whileTap={{scale: 0.9}}
            whileHover={{scale: 1.1}}
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
          initial={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 0vw 0vw rgba(255, 255, 255, 0))', borderRadius: '0 0 0 0'}}
          whileInView={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 -2vw 6vw rgba(255, 255, 255, 1))', borderRadius: '15vw 15vw 0 0'}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <hr className='garis1' />
        </motion.div>
        <div className="back5">
          <div className="content5">
            <p className="judulContent5">
              Development Team
            </p>
            <p className="ketContent5">
              The following contributed to this project
            </p>
            <motion.div
              animate={{transform: `translateX(${transformX}vw)`}}
            >
              <div className="profilCard">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
                  transition={{ ease: 'easeIn', duration: 0.7 }}
                >
                  <div className="Card">
                    <div className="profil">
                      <img src="/profil/dhavin.jpeg" alt="" className="profilImage" />
                    </div>
                    <p className="nama">
                      Dhavin Fasya A.
                    </p>
                    <p className="job">
                      Software Development
                    </p>
                    <div className="IconCard">
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://github.com/fasuyaaaPNG" className="iconLink">
                            <FaGithub/>
                          </a>
                        </motion.div>
                      </div>
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://www.instagram.com/vinfasss" className="iconLink">
                            <FaInstagram/>
                          </a>
                        </motion.div>
                      </div>
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://twitter.com/fasuyaaa" className="iconLink">
                            <FaTwitter/>
                          </a>
                        </motion.div>
                      </div>
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://steamcommunity.com/profiles/76561199494600447/" className="iconLink">
                            <FaSteam/>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
                  transition={{ ease: 'easeIn', duration: 0.7 }}
                >
                  <div className="Card">
                    <div className="profil">
                      <img src="/profil/dhira.jpeg" alt="" className="profilImage" />
                    </div>
                    <p className="nama">
                     Dhira Faizah Syavitri
                    </p>
                    <p className="job">
                      Maintenance Engineer
                    </p>
                    <div className="IconCard">
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://www.tiktok.com/@dhirasyv?_t=8jEPncp9htR&_r=1" className="iconLink">
                            <FaTiktok/>
                          </a>
                        </motion.div>
                      </div>
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://www.instagram.com/dhirasyv?igsh=dWkxcW1wcTJ3Zjd3" className="iconLink">
                            <FaInstagram/>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
                  transition={{ ease: 'easeIn', duration: 0.7 }}
                >
                  <div className="Card">
                    <div className="profil">
                      <img src="/profil/nydia.jpg" alt="" className="profilImage" />
                    </div>
                    <p className="nama">
                      Nydia Havina
                    </p>
                    <p className="job">
                      Assets Designer
                    </p>
                    <div className="IconCard">
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://www.tiktok.com/@akudianydia?_t=8jEpCw9OsTa&_r=1" className="iconLink">
                            <FaTiktok/>
                          </a>
                        </motion.div>
                      </div>
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://www.instagram.com/nydhvn?igsh=am96bGQ0ZXRtNTh6" className="iconLink">
                            <FaInstagram/>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: [0.8, 1.1, 1] }}
                  transition={{ ease: 'easeIn', duration: 0.7 }}
                >
                  <div className="Card">
                    <div className="profil">
                      <img src="/profil/rafif.jpeg" alt="" className="profilImage" />
                    </div>
                    <p className="nama">
                      M. Rafif Putra Perdana
                    </p>
                    <p className="job">
                      DevOps Engineer
                    </p>
                    <div className="IconCard">
                      <div className="iconCard">
                        <motion.div
                          whileTap={{filter: 'drop-shadow(0 0 1vw rgb(0, 225, 255))'}}
                        >
                          <a href="https://www.instagram.com/mz.rafiff/" className="iconLink">
                            <FaInstagram/>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <div className="btn">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ ease: 'easeIn', duration: 0.5 }}
              >
                <div className="btnLeft">
                  <button className="left" id='kiri' onClick={handleButtonClickKiri}> 
                    <FaCaretLeft color='rgb(0, 96, 109)' size={45} filter='drop-shadow(0 0 1vw rgba(0, 225, 255, 1))'/>
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ ease: 'easeIn', duration: 0.5 }}
              >
                <div className="btnRight">
                  <button className="right" id='kanan' onClick={handleButtonClickKanan}>
                    <FaCaretRight color='rgb(0, 96, 109)' size={45} filter='drop-shadow(0 0 1vw rgba(0, 225, 255, 1))'/>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="garis1"
          initial={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 0vw 0vw rgba(255, 255, 255, 0))', borderRadius: '0 0 0 0'}}
          whileInView={{ width: '100%', opacity: 1, filter: 'drop-shadow(0 -2vw 6vw rgba(255, 255, 255, 1))', borderRadius: '0 0 15vw 15vw'}}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <hr className='garis1' />
        </motion.div>
        {/* end back 5 */}
        <div className="back6">
          <div className="content6">
            <div className="judulContent6">
              <p className="textJudulContent6">
                FAQ
              </p>
            </div>
            <div className="deskContent6">
              <p className="textDeskContent6">
                Things you might ask about this project
              </p>
            </div>
            <div className="sectionFaq">
              <motion.div
                className="boxFaq"
                onTap={handleTap1}
                animate={{ filter: isOpen1 ? 'drop-shadow(0 0 1vw rgb(0, 225, 255))' : 'drop-shadow(0 0 0vw rgb(0, 225, 255))', scale: isOpen1 ? [0.9, 1] : [1,0.9,1]}}
                transition={{ease: 'easeIn', duration: '0.3'}}
              >
                <p className="judulBoxFaq">
                  What is Speakify?
                </p>
                  <motion.div
                    className="iconBoxFaq"
                    animate={{rotate: isOpen1 ? 180 : 0}}
                  >
                    <FaCaretDown />
                  </motion.div>
              </motion.div>
              <div className={isOpenJ1 ? ' boxFaqJawaban aktif' : '`boxFaqJawaban  hilang'}>
                <p className="jawabanBoxFaq">
                  "Speakify" was chosen because it combines the elements "speak" which means to speak, with the suffix "-ify" which is often used to indicate transformation or change. As an app name, “Speakify” could suggest involvement in voice technology or communications enhanced using artificial intelligence.
                </p>
              </div>
              <motion.div
                className="boxFaq"
                onTap={handleTap2}
                animate={{ filter: isOpen2 ? 'drop-shadow(0 0 1vw rgb(0, 225, 255))' : 'drop-shadow(0 0 0vw rgb(0, 225, 255))', scale: isOpen2 ? [0.9, 1] : [1,0.9,1]}}
                transition={{ease: 'easeIn', duration: '0.3'}}
              >
                <p className="judulBoxFaq">
                  What was the purpose of Speakify created?
                </p>
                 <motion.div
                    className="iconBoxFaq"
                    // Properti rotasi ikon menggunakan Framer Motion
                    animate={{rotate: isOpen2 ? 180 : 0}}
                  >
                    <FaCaretDown />
                  </motion.div>
              </motion.div>
              <div className={isOpenJ2 ? 'boxFaqJawaban aktif' : 'boxFaqJawaban  hilang'}>
                <p className="jawabanBoxFaq">
                  1. Assistant for teachers and students <br /><br />
                  Makes it easier for teachers and students to search for information on the internet using voice so they don't have to type for a long time. <br /><br />
                  2. Access information quickly and easily <br /><br />
                  Students and teachers can quickly access educational information via AI voice. This can make it easier to help find answers to questions. <br /><br />
                  3. Study and improve a foreign language <br /><br />
                  In making AI voice products, we can choose to learn 3 foreign languages ​​including English, Japanese and German. Don't worry if you have difficulty hearing foreign language answers, our product provides Indonesian translation. <br /><br />
                  4. Increase interest in learning in the era of digitalization <br /><br />
                  By developing our AI voice product which uses voice features so that users don't feel bored just by reading text. <br /><br />
                  5. Utilize AI Voice Assistant technology in the education sector <br /><br />
                  This technology also supports inclusivity by providing voice assistance to students with special needs. Thus, this technology not only increases the effectiveness of learning, but also creates a more adaptive and responsive educational environment.
                </p>
              </div>
              <motion.div
                className="boxFaq"
                onTap={handleTap3}
                animate={{ filter: isOpen3 ? 'drop-shadow(0 0 1vw rgb(0, 225, 255))' : 'drop-shadow(0 0 0vw rgb(0, 225, 255))', scale: isOpen3 ? [0.9, 1] : [1,0.9,1]}}
                transition={{ease: 'easeIn', duration: '0.3'}}
              >
                <p className="judulBoxFaq">
                  How to install Speakify?
                </p>
                 <motion.div
                    className="iconBoxFaq"
                    // Properti rotasi ikon menggunakan Framer Motion
                    animate={{rotate: isOpen3 ? 180 : 0}}
                  >
                    <FaCaretDown />
                  </motion.div>
              </motion.div>
              <div className={isOpenJ3 ? 'boxFaqJawaban aktif' : 'boxFaqJawaban hilang'}>
                <p className="jawabanBoxFaq">
                  1. Press "DOWNLOAD FOR FREE" on the website <span>speakify</span><br /><br />
                  2. Choose according to the platform you use <br /><br />
                  3. Extract the downloaded file <br /><br />
                  4. Read the README.txt file because each platform has different setup methods
                </p>
              </div>
            </div>
            <div className="footer">
              <motion.div
                className='footerImage'
                initial={{opacity: 0}}
                whileInView={{opacity: 1, filter: 'drop-shadow(0 0 0.9vw rgb(255, 255, 255))'}}
              >
                <img src="/logo/speakify.svg" className='imageFooter' alt="" />
              </motion.div>
              <motion.div
                className='copy'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ease: 'easeIn', delay: 1}}
              >
                <p>
                  &copy; Copyrigt Speakify 2023
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
