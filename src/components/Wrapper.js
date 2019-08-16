import React from 'react'
import { Link } from 'gatsby'
import Head from './Head'
import SocialLink from './SocialLink'
import logo from '../img/logo.svg'
import './style.sass'

const Wrapper = ({ children, title = '', description = '' }) => (
  <main>
    <Head title={title} description={description} />
    <header>
      <div className='content'>
        <Link to="/" className="logo" title="Logo">
          <img src={logo} className="logo" alt="Vaime Travel" />
        </Link>
        <nav>
          <Link to="/tours" className="nav-item" title="Logo">Wycieczki</Link>
          <Link to="/tours" className="nav-item" title="Logo">O Gruzji</Link>
          <Link to="/tours" className="nav-item" title="Logo">FAQ</Link>
          <Link to="/tours" className="nav-item" title="Logo">Współpraca</Link>
          <Link to="/tours" className="nav-item" title="Logo">Kontakt</Link>
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
      </div>
    </footer>
  </main>
)

export default Wrapper
