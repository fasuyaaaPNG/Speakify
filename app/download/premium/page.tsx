import { motion } from 'framer-motion'
import './style.css'

export default function Premium() {
    return (
        // main div
        <div className="main">
            {/* container */}
            <div className="container">
                {/* div logo */}
                <div className="logo">
                    <div className="logoImage">
                        <img src="/logo/logoPlus.svg" alt="" className="logoImagePlus" />
                    </div>
                </div>
                {/* logo-------- */}
                {/* div judul */}
                <div className="judul">
                    <p className="judulText">
                        Speakify Premium Edition
                    </p>
                </div>
                {/* judul--------- */}
                {/* div form */}
                <div className="form">
                    <form action="">
                        {/* div formIsi */}
                        <div className="formIsi">
                            <div className="formIsiNama">
                                <input type="text" className="formIsiNamaInput" />
                            </div>
                            <div className="formIsiEmail">
                                <input type="email" className="formIsiEmailInput" />
                            </div>
                            <div className="formIsiBukti">
                                <input type="file" className="formIsiBuktiInput" accept='.jpg,.png,.jpeg' />
                            </div>
                        </div>  
                    </form>
                </div>
                {/* form-------- */}
            </div>
            {/* container------- */}
        </div>
        // ------------------------
    );
}