import React from 'react'
import contactimage from './contact.svg'
import whatsapp from './whatsapp.png'
import mail from './mail.png'
import address from './address.png'

const Contact = () => {
  return (
    <div id="contact">
      <h1 className='headline'>Contact us</h1>
      <p>We can be contacted via the following links.</p>

      <div className='section2'>
        <div>
          <div className='address'>
            <div className='address-item'>
              <img src={address} alt="" />
              <p>Komplek Green Ville, Jalan Ratu Kemuning
                Blok BL No. 1, RT.8/RW.14
                Daerah Khusus Ibukota Jakarta</p>
            </div>
            <div className='address-item'>
              <img src={whatsapp} alt="" />
              <p>+6281 393 555 909</p>
            </div>
            <div className='address-item'>
              <img src={mail} alt="" />
              <p>cs@islahuddin.com</p>
            </div>
            <img src={contactimage} alt="" />
            <p></p>
          </div>
        </div>
        <div className='message'>
          <h1>Leave a Message</h1>
          <form>
            <label htmlFor="">Fullname : </label>
            <input type="text" />
            <label htmlFor="">Email : </label>
            <input type="text" />
            <label htmlFor="">Role : </label>
            <input type="text" />
            <button>Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact