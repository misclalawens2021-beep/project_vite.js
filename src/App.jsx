import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function PortfolioMike() {
  return (
    <div class="mike">
      <nav className="navbar" aria-label="Navigation principale">
        <a href="/App.jsx" className="nav-logo" aria-label="Accueil"><i class="bi bi-house"></i></a>
        <span className="nav-step" aria-hidden="true"></span>
        <div className="nav-main">
          <a href="" class="nav-path" aria-label="A propos" title="A propos"><i className="bi bi-person"></i></a>
          <a href="" class="nav-path" aria-label="Epreuve E5" title="Epreuve E5"><i className="bi bi-hdd-stack"></i></a>
          <a href="" class="nav-path" aria-label="Epreuve E6" title="Epreuve E6"><i className="bi bi-code-slash"></i></a>
          <a href="" class="nav-path" aria-label="Veille" title="Veille"><i className="bi bi-bullseye"></i></a>
          <a href="" class="nav-path" aria-label="Contact" title="Contact"><i className="bi bi-envelope"></i></a>
        </div>
      </nav>
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>

      <div className="hamburger-menu" id="hamburger" role="button" aria-label="Ouvrir le menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav-overlay" id="nav-overlay">
        <ul className="nav-links">
          <li>
            <a href="/App.jsx" class="nav-path">
              <p>Accueil</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>A propos</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>
                E5
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <p>E6</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>Veille</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>

      <main id="apropos">
        <header id="hero" className="hero-split">
          <div className="hero-layout">
            <figure className="hero-photo" id="hero-photo" role="button" tabindex="0" aria-pressed="false" aria-label="Retourner la photo">
              <div className="photo-inner">
                <div className="photo-face photo-front">
                  <div className="photo-placeholder" aria-hidden="true">
                    <i className="bi bi-person"></i>
                  </div>
                </div>
                <div className="photo-face photo-back">
                  <i className="bi bi-code-slash" aria-hidden="true"></i>
                  <strong>Mike-Scott-Lawens</strong>
                  <span>BTS SIO option SLAM</span>
                  <span>Paris Ynov Campus</span>
                  <small>Clique pour retourner</small>
                </div>
              </div>
            </figure>

            <div className="welcome-to">
              <code><h1>Laguerre <br />Mike-Scott-Lawens</h1></code>
              <h2 className="padding-bottom: 40px;">Apprenti développeur full-stack</h2>
              <div className="prj">
                <button className="lm">
                  <a href="">Réalisations E5</a>
                </button>
              </div>
            </div>

            <div className="hero-links">
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
              <button className="lm">
                <a href=""></a>
              </button>
            </div>
          </div>
        </header>

        <section id="stack" className="stack-section" style="margin-top: 0;">
          <div className="stack-card">
            <h2>Ma stack</h2>
            <ul className="stack-icons" aria-label="Ma stack technique">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="social">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>

        <div className="m_legal">
          <a href="">
            <p>Mentions légales</p>
          </a>
        </div>

        <p>&copy; <span id="year"></span> Laguerre Mike-Scott-Lawens | Portfolio BTS SIO</p>
      </footer>

      <button id="backToTop" className="back-to-top">
        <i className="bi bi-chevron-double-up" style="font-size: 20px;"></i>
      </button>
      
    </div>
  )
}

export default PortfolioMike
