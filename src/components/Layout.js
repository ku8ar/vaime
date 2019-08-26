import React from 'react'
import { Link } from 'gatsby'
import Head from './Head'
import SocialLink from './SocialLink'
import logo from '../img/logo.svg'
import '../styles/index.sass'

const Wrapper = ({ children, title = '', description = '' }) => (
  <main>
    <Head title={title} description={description} />
    <header>
      <div className='content navigation'>
        <nav>
          <Link to="/" className="logo" title="Logo">
            <img src={logo} className="logo-img" alt="Vaime Travel" />
          </Link>
          <Link to="/tours" className="nav-item" title="Wycieczki">Wycieczki</Link>
          <Link to="/georgia" className="nav-item" title="Gruzja">Gruzja</Link>
          <Link to="/faq" className="nav-item" title="FAQ">FAQ</Link>
          <Link to="/partnership" className="nav-item" title="Współpraca">Współpraca</Link>
          <Link to="/contact" className="nav-item" title="Kontakt">Kontakt</Link>
        </nav>
        <div className='nav-social'>
          <SocialLink type='facebook' src='' />
          <SocialLink type='instagram' src='' />
          <SocialLink type='youtube' src='' />
        </div>
      </div>
    </header>
    {children}
    <footer>
      <div className='content'>
        <div className='flex-row-auto footer-columns'>
          <div className='footer-list'>
            <img src={logo} className="footer-logo" alt="Vaime Travel" />
            <a className='footer-link' href=''>+48 730 665 176</a>
            <a className='footer-link' href=''>+995 555 628 887</a>
            <a className='footer-link' href=''>info@vaimetravel.com</a>
          </div>
          <div className='footer-list'>
            <h5 className='color-white'>Gruziński Po Polsku</h5>
            <a className='footer-link' href=''>Facebook</a>
            <a className='footer-link' href=''>Instagram</a>
            <a className='footer-link' href=''>Youtube</a>
          </div>
          <div className='footer-list'>
            <a className='footer-link' href=''><h6 className='color-white'>Polityka Prywatności</h6></a>
          </div>
        </div>
        <div className='flex-row-auto footer-columns'>
          <p className='footer-copyright'>© Copyright 2017 Vaime Travel. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </main>
)

export default Wrapper
