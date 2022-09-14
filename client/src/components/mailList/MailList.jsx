import React from 'react'
import "./mailList.scss"
function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTitle">Zamandan ve paradan tasarruf edin!</h1>
        <span className="mailDesc">Kaydolursanız en iyi fırsatları size göndereceğiz</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='E-Posta adresiniz...' />
            <button>Üye ol</button>
        </div>
    </div>
  )
}

export default MailList