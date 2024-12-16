import "./App.scss";

import logo from "./assets/logo.svg";
import earth from "./assets/earth.svg";
import rocket from "./assets/rocket.svg";

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-container">
            <img src={logo} alt="Logo" className="logo" />
            <input type="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Products</a>
              </li>
              <li>
                <svg
                  className="svg-icon"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="gradient-fill"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="26.02%"
                        style={{
                          stopColor: "rgba(235, 255, 0, 0.6)",
                          stopOpacity: 1,
                        }}
                      />
                      <stop
                        offset="90.57%"
                        style={{
                          stopColor: "rgba(255, 112, 217, 0.6)",
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    className="svg-path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                    fill="url(#gradient-fill)"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="banner">
        <div className="container">
          <div className="banner__content">
            <h1 className="banner__title">
              Discover the vast expanses of{" "}
              <span className="banner__title_highlight">space</span>
            </h1>
            <p className="banner__subtitle">
              Where the possibilities are{" "}
              <span className="banner__subtitle_highlight">endless!</span>
            </p>
            <a href="#food-menu" className="banner__button">
              Learn more
            </a>
          </div>
          <div className="banner__image">
            <img src={earth} alt="earth" />
          </div>
        </div>
      </section>

      <section className="section container">
        <span className="section__title">Offers</span>
        <div className="offers">
        <div className="offers__offer offers__offer_case-1">
          <h2>Move the borders of reality!</h2>
          <p>Go on a space adventure - it's possible with us!</p>
          <button>Learn more</button>
        </div>
        <div className="offers__offer offers__offer_case-2">
          <h2>Space is not just stars and planets</h2>
          <p>Go on a space adventure</p>
          <button>Learn more</button>
        </div>
        <div className="offers__offer offers__offer_case-3">
          <h2>For those who dream of stars</h2>
          <p>Our offer: make your dream come true</p>
          <button>Learn more</button>
        </div>
        <div className="offers__offer offers__offer_case-4">
          <h2>Fulfill your fantastic dreams</h2>
          <p>Space has never been so close</p>
          <button>Learn more</button>
        </div>
        </div>
      </section>

      <section className="section container">
      <span className="section__title">Embark on a space journey</span>
        <div className="info">
          <input type="checkbox" className="info__input" id="read-more-state" />
          <p className="info__content">
            Traveling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and visit
            the wonders of the universe. We guarantee that your time spent in
            space will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>
          <label htmlFor="read-more-state" className="info__label" />
        </div>
      </section>

      <footer className="footer">
        <img src={rocket} alt="rocket" className="rocket" />
        <h2>Exciting space adventure!</h2>
      </footer>
    </>
  );
}

export default App;
