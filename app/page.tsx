import './styles.css';
import { VscArrowDown } from 'react-icons/vsc';

export default function Home() {
  const arrowSizeInVw = 3; // Adjust this value as needed

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
              ✖️ Supports all languages <br />
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
    </div>
  );
}
