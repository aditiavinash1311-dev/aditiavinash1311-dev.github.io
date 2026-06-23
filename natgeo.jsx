import React, { useEffect } from "react";
import "./style.css";
import { initNatGeoCarousel } from "./natgeo";

export default function NatGeoClone() {
  useEffect(() => {
    const cleanup = initNatGeoCarousel();
    return cleanup;
  }, []);

  return (
    <>
      <header className="navbar">
        <div className="mobile-left">
          <div className="mobile-hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="mobile-center">
          <div className="mobile-logo">
            <span className="logo-box"></span>
            <span className="logo-text">
              NATIONAL
              <br />
              GEOGRAPHIC
            </span>
          </div>
        </div>

        <div className="mobile-right">
          <svg className="search-icon" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="16" y1="16" x2="22" y2="22"></line>
          </svg>
        </div>

        <div className="nav-left">
          <div className="logo-box"></div>
          <span className="logo-text">
            <b>NATIONAL</b>
            <br />
            GEOGRAPHIC
          </span>
          <nav className="menu">
            <b><a>Animals</a></b>
            <b><a>History & Culture</a></b>
            <b><a>Travel</a></b>
            <b><a>Health</a></b>
            <b><a>Science & Nature</a></b>
            <b><a>Shows</a></b>
            <b><a>More</a></b>
          </nav>
        </div>

        <div className="nav-right">
          <svg className="search-icon" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="16" y1="16" x2="22" y2="22"></line>
          </svg>
          <b><a className="login">Aditi</a></b>
          <div className="subscribe"><b><span>Subscribe</span></b></div>
        </div>
      </header>

      <section className="hero">
        <h1><b>LATEST STORIES</b></h1>
        <p>
          <span className="link">Subscribe</span> for full access to read stories from National Geographic.
        </p>
        <br />
        <div className="underline"></div>
      </section>

      <div className="cutu">
        <section className="picks">
          <div className="picks-left">
            <div className="todays-picks">
              <h2>
                <span className="yellow-bar"></span>
                TODAY'S PICKS
              </h2>
            </div>

            <div className="pick-item">
              <img src="./media/image.png" alt="" />
              <div>
                <small><b>SCIENCE</b></small>
                <p>Inside the bone-crushing mating rituals of dinosaurs</p>
              </div>
            </div>

            <div className="pick-item">
              <img src="./media/WhatsApp Image 2025-12-28 at 20.42.02.jpeg" alt="" />
              <div>
                <small>SCIENCE</small>
                <p>Here’s where NASA is looking for life in our solar system</p>
              </div>
            </div>

            <div className="pick-item">
              <img src="./media/WhatsApp Image 2025-12-28 at 20.44.07.jpeg" alt="" />
              <div>
                <small className="locked">🔒 HISTORY & CULTURE</small>
                <p>Is there archaeological evidence for the Biblical fall of Jericho?</p>
              </div>
            </div>

            <div className="pick-item">
              <img src="./media/WhatsApp Image 2025-12-28 at 20.59.31.jpeg" alt="" />
              <div>
                <small>PHOTOGRAPHY</small>
                <p>Inside London’s most beautiful and unique private members’ clubs</p>
              </div>
            </div>

            <div className="pick-item">
              <img src="./media/WhatsApp Image 2025-12-28 at 21.00.37.jpeg" alt="" />
              <div>
                <small>HISTORY & CULTURE</small>
                <p>Who was Pliny the Younger? How his words survived Pompeii</p>
              </div>
            </div>

            <div className="pick-item">
              <img src="./media/WhatsApp Image 2025-12-28 at 21.04.16.jpeg" alt="" />
              <div>
                <small className="locked">🔒 ANIMALS</small>
                <p>The evolutionary case for a little roughhousing</p>
              </div>
            </div>

            <div className="seemorebhalu">
              <a href="#" className="see-more highlight-text seemoreimp">
                <span>SEE MORE</span>
              </a>
            </div>
          </div>

          <div className="hy">
            <div className="picks-right">
              <div className="overlay">
                <div>
                  <small>🔒 SCIENCE · MIND, BODY, WONDER</small>
                </div>
                <div>
                  <h1>Why heart attacks surge between Christmas and New Year's</h1>
                </div>
              </div>
            </div>

            <div className="cards-wrapper">
              <div className="news-card">
                <img src="./media/WhatsApp Image 2025-12-28 at 21.02.11.jpeg" alt="" />
                <div className="cardw-content">
                  <small>ANIMALS</small>
                  <h3>Watch the most thrilling—and the weirdest—wildlife videos of 2025</h3>
                  <span className="read">☰ READ</span>
                </div>
              </div>

              <div className="news-card">
                <img className="image_fixing" src="./media/WhatsApp Image 2025-12-28 at 21.02.40.jpeg" alt="" />
                <div className="cardw-content">
                  <small>TRAVEL</small>
                  <h3>A calendar of New Year celebrations around the world</h3>
                  <span className="read">☰ READ</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="feature-year">
        <div className="feature-wrapper">
          <div className="feature-image">
            <img src="./media/image copy.png" alt="Pictures of the Year" />
          </div>

          <div className="feature-text">
            <h2>2025: The Pictures of the Year</h2>
            <p>
              From the thousands of images made by our photographers all around
              the world this year, we present the ones that moved and inspired us most.
            </p>
          </div>
        </div>
      </section>

      <section className="year-review">
        <div className="year-wrapper">
          <div className="year-text">
            <div className="h23">
              <h2 className="water"><b>2025: Year in Review</b></h2>
            </div>
            <p>
              From iconic images to medical breakthroughs,
              revisit the highlights of the past year.
            </p>
          </div>

          <div className="year-image">
            <img src="./media/WhatsApp Image 2025-12-28 at 21.41.18.jpeg" alt="2025 Year in Review" />
          </div>
        </div>
      </section>

      <section className="ad-section">
        <p className="ad-label">ADVERTISEMENT</p>
        <div className="ad-banner">
          <div className="ad-text">
            <h2>Free for students</h2>
            <p>Start with lecture notes, finish ready for tests.</p>
          </div>
          <div className="ad-arrow">❯</div>
        </div>
      </section>

      <div className="yhe-section">
        <div className="yhe">
          <div className="bge-overlay"></div>
          <div className="show-overlay">
            <h2>LIMITLESS WITH CHRIS HEMSWORTH</h2>
            <p>
              Chris Hemsworth takes on three epic challenges to explore science-backed
              ways to improve our health. He learns to drum for a brain-boosting,
              surprise stadium gig, climbs a frozen 600-foot wall to explore the
              benefits of breaking out of our comfort zones, and embraces brutal
              Special Forces pain training in South Korea—all to discover how we can
              live longer, better lives.
            </p>
            <a href="#" className="watch-btn highlight-text">WATCH NOW</a>
          </div>
        </div>

        <div className="you">
          <section className="disney-section">
            <div className="disney-header">
              <h3>DISCOVER MORE ON DISNEY+</h3>
              <br />
              <a href="#" className="see-shows highlight-text">SEE SHOWS</a>
            </div>

            <div className="disney-row">
              <div className="show-card"><img src="./media/a_road_trip.jpg" alt="" /></div>
              <div className="show-card"><img src="./media/WhatsApp Image 2025-12-29 at 12.43.05.jpg" alt="" /></div>
              <div className="show-card"><img src="./media/WhatsApp Image 2025-12-29 at 12.43.21.jpg" alt="" /></div>
              <div className="show-card"><img src="./media/WhatsApp Image 2025-12-29 at 12.43.32.jpg" alt="" /></div>
              <div className="show-card"><img src="./media/WhatsApp Image 2025-12-29 at 12.43.47.webp" alt="" /></div>
            </div>
          </section>
        </div>
      </div>

      <section className="natgeo-tv">
        <h2>NAT GEO TV</h2>
        <div className="yellow-line"></div>
      </section>

      <div className="carousel-wrapper">
        <button className="nav left">‹</button>

        <div className="carousel">
          <div className="card left2">
            <img src="./media/WhatsApp Image 2025-12-29 at 12.43.47.webp" alt="" />
            <div className="card-content">
              <button>WATCH NOW</button>
            </div>
          </div>

          <div className="card left1">
            <img src="./media/WhatsApp Image 2025-12-29 at 12.43.32.jpg" alt="" />
            <div className="card-content">
              <button>WATCH NOW</button>
            </div>
          </div>

          <div className="card active">
            <img src="./media/a_road_trip.jpg" alt="" />
            <div className="card-content">
              <button>WATCH NOW</button>
            </div>
          </div>

          <div className="card right1">
            <img src="./media/WhatsApp Image 2025-12-29 at 12.43.21.jpg" alt="" />
            <div className="card-content">
              <button>WATCH NOW</button>
            </div>
          </div>

          <div className="card right2">
            <img src="./media/WhatsApp Image 2025-12-29 at 12.43.05.jpg" alt="" />
            <div className="card-content">
              <button>WATCH NOW</button>
            </div>
          </div>
        </div>

        <button className="nav right">›</button>
      </div>
    </>
  );
}