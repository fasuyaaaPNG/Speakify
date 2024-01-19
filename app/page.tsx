import './styles.css'

export default function Home() {
  return (
    <div 
    className="container">
      <div 
      className="back1">
        <div 
        className="content1">
          <img
          className="logo"
          src="/logo/speakify.svg" 
          alt="" 
          />
          <p 
          className="title">
            SPEAKIFY
          </p>
          <p 
          className="desk">
            Speakify is an artificial intelligence (AI Voice) that is capable of  producing a natural voice according to the commands given by the user.
          </p>
          <div 
          className="buttonDownload">
            <button 
            className="free">
              DOWNLOAD FOR FREE
            </button>
            <button 
            className="premium">
              DOWNLOAD FOR PREMIUM
            </button>
          </div>
        </div>
      </div>
      <div 
      className="back2">
        
      </div>
    </div>
  );
}
