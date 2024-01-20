'use client'
import './styles.css';
import { VscArrowDown, VscDashboard, VscDebug } from 'react-icons/vsc';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const fiturSections = document.querySelectorAll('.fitur');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
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
      <div className="back1">
        <div className="content1">
          <img className="logo" src="/logo/speakify.svg" alt="" />
          <p className="title">SPEAKIFY</p>
          <p className="desk">
            Speakify is an artificial intelligence (AI Voice) that is capable of producing a natural voice according to the commands given by the user.
          </p>
          <div className="buttonDownload">
            <button className="free">DOWNLOAD FOR FREE</button>
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
            Select version
          </h1>
          <p className="ketVersi">
            choose according to your preferences what you need
          </p>
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
          <br />
        </div>
      </div>
      <div className="back3">
        <div className="content3">
          <p className="judulContent3">
            Why choose <span className='speakify'>Speakify</span>?
          </p>
          <div className="isiContent3">
            <div className="head">
              <div className="iconContent3">
                <span className="debugIcon">
                  <VscDebug size={25}/>
                </span>
              </div>
              <div className="judulIsiContent3">
                <p>
                  Guaranteed security
                </p>
              </div>
            </div>
            <div className="deskripsiIsiContent3">
              <p>
                The program created is safe from viruses because it has been verified as safe for the device
              </p>
            </div>            
          </div>
          <div className="isiContent3">
            <div className="head">
              <div className="iconContent3">
                <span className="debugIcon">
                  <VscDashboard size={25}/>
                </span>
              </div>
              <div className="judulIsiContent3">
                <p>
                  Guaranteed security
                </p>
              </div>
            </div>
            <div className="deskripsiIsiContent3">
              <p>
                The program created is safe from viruses because it has been verified as safe for the device
              </p>
            </div>            
          </div>
          <div className="isiContent3">
            <div className="head">
              <div className="iconContent3">
                <span className="debugIcon">
                  <VscDebug size={25}/>
                </span>
              </div>
              <div className="judulIsiContent3">
                <p>
                  Guaranteed security
                </p>
              </div>
            </div>
            <div className="deskripsiIsiContent3">
              <p>
                The program created is safe from viruses because it has been verified as safe for the device
              </p>
            </div>            
          </div>
          <div className="isiContent3">
            <div className="head">
              <div className="iconContent3">
                <span className="debugIcon">
                  <VscDebug size={25}/>
                </span>
              </div>
              <div className="judulIsiContent3">
                <p>
                  Guaranteed security
                </p>
              </div>
            </div>
            <div className="deskripsiIsiContent3">
              <p>
                The program created is safe from viruses because it has been verified as safe for the device
              </p>
            </div>            
          </div>
          <div className="isiContent3">
            <div className="head">
              <div className="iconContent3">
                <span className="debugIcon">
                  <VscDebug size={25}/>
                </span>
              </div>
              <div className="judulIsiContent3">
                <p>
                  Guaranteed security
                </p>
              </div>
            </div>
            <div className="deskripsiIsiContent3">
              <p>
                The program created is safe from viruses because it has been verified as safe for the device
              </p>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}
