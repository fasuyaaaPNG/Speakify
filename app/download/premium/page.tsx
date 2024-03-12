import { motion } from 'framer-motion'
import './style.css'

export default function Premium() {
    return (
        // main div
        <div className="main">
            {/* container */}
            <div className="container">
                {/* div logo */}
                <a href="/">
                    <div className="logo">
                        <div className="logoImage">
                            <img src="/logo/logoPlus.svg" alt="" className="logoImagePlus" />
                        </div>
                    </div>
                </a>
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
                            <fieldset>
                                <legend>
                                    Name
                                </legend>
                            <div className="formIsiNama">
                                <input type="text" className="formIsiNamaInput" />
                            </div>
                            </fieldset>
                            <fieldset>
                                <legend>
                                    Email
                                </legend>
                            <div className="formIsiEmail">
                                <input type="email" className="formIsiEmailInput" />
                            </div>
                            </fieldset>
                            <div className="formIsiBukti">
                                <input type="file" className="formIsiBuktiInput" accept='.jpg,.png,.jpeg' />
                            </div>
                        </div>  
                        <button className='Button'>
                            Submit
                        </button>
                    </form>
                </div>
                {/* form-------- */}
                <div className="info">
                    <p className="how">
                        Payment
                    </p>
                    <p className="subHow">
                        Payment method uses bank transfer
                    </p>
                    <div className="borderBank">
                        <p className="bank">
                            <span className='name'>Bank name:</span> Bank Seabank (Seabank)
                        </p>
                        <p className="bank">
                            <span className='name'>Account number:</span> 984128120128
                        </p>
                        <p className="bank">
                            <span className='name'>Name:</span> Dhira Faizah Syavitri
                        </p>
                    </div>
                </div>
            </div>
            {/* container------- */}
        </div>
        // ------------------------
    );
}