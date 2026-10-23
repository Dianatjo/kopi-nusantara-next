"use client";

import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [likedStatus, setLikedStatus] = useState([false, false, false]);

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    const newLikedStatus = [...likedStatus];
    
    if (newLikedStatus[index]) {
      newLikes[index] -= 1;
      newLikedStatus[index] = false;
    } else {
      newLikes[index] += 1;
      newLikedStatus[index] = true;
    }
    
    setLikes(newLikes);
    setLikedStatus(newLikedStatus);
  };

  return (
    <>
      <div className="bg-light py-2 text-center border-bottom">
        <small className="text-muted fw-bold">Diana — 535250097 (Teknik Informatika)</small>
      </div>

      <nav className="navbar navbar-expand-lg custom-navbar shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">Kopi Nusantara</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" href="#hero">Beranda</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#menu">Menu</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#kontak">Kontak</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Cita Rasa Kopi Asli Indonesia</h1>
          <p>Kedai kopi dengan biji kopi langsung dari petani lokal</p>
          <a href="#menu">Lihat Menu</a>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="container-custom-menu">
          <h2>Menu Favorit</h2>
          <div className="row g-4 justify-content-center text-start">
            
            {/* Menu 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 custom-card">
                <img src="aset_gambar/Kopi_Tubruk.jpg" alt="Kopi Tubruk" className="card-img-top custom-card-img" />
                <div className="card-body card-info">
                  <h3>Kopi Tubruk</h3>
                  <p>Kopi hitam tubruk mantap dari biji robusta Temanggung.</p>
                  <span className="harga">Rp 12.000</span>
                  <br />
                  <button 
                    className={`btn-like ${likedStatus[0] ? 'liked' : ''}`}
                    onClick={() => handleLike(0)}
                  >
                    Suka (<span className="like-count">{likes[0]}</span>)
                  </button>
                </div>
              </div>
            </div>

            {/* Menu 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 custom-card">
                <img src="aset_gambar/Es_Kopi_Susu_Aren.jpg" alt="Es Kopi Susu Aren" className="card-img-top custom-card-img" />
                <div className="card-body card-info">
                  <h3>Es Kopi Susu Aren</h3>
                  <p>Perpaduan kopi espresso, susu segar, dan gula aren legit</p>
                  <span className="harga">Rp 18.000</span>
                  <br />
                  <button 
                    className={`btn-like ${likedStatus[1] ? 'liked' : ''}`}
                    onClick={() => handleLike(1)}
                  >
                    Suka (<span className="like-count">{likes[1]}</span>)
                  </button>
                </div>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 custom-card">
                <img src="aset_gambar/Arabika_Gayo_V60.jpg" alt="Arabika Gayo V60" className="card-img-top custom-card-img" />
                <div className="card-body card-info">
                  <h3>Arabika Gayo V60</h3>
                  <p>Manual brew dengan aroma harum bunga dan rasa asam segar.</p>
                  <span className="harga">Rp 20.000</span>
                  <br />
                  <button 
                    className={`btn-like ${likedStatus[2] ? 'liked' : ''}`}
                    onClick={() => handleLike(2)}
                  >
                    Suka (<span className="like-count">{likes[2]}</span>)
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        <div className="container-custom-faq">
          <div className="accordion" id="accordionFAQ">
            
            <div className="accordion-item custom-accordion-item">
              <h3 className="accordion-header m-0">
                <button className="accordion-button custom-accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Dari manakah asal biji kopi yang digunakan?
                </button>
              </h3>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body custom-accordion-body">
                  <p className="m-0">Kami memperoleh biji kopi secara langsung dari petani lokal, di antaranya dari daerah Gayo dan Temanggung.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item custom-accordion-item">
              <h3 className="accordion-header m-0">
                <button className="accordion-button custom-accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Pukul berapakah jam operasional kedai ini?
                </button>
              </h3>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body custom-accordion-body">
                  <p className="m-0">Kedai kami beroperasi setiap hari mulai pukul 10.00 hingga 22.00 WIB.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item custom-accordion-item">
              <h3 className="accordion-header m-0">
                <button className="accordion-button custom-accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Apakah tersedia promo khusus untuk mahasiswa?
                </button>
              </h3>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body custom-accordion-body">
                  <p className="m-0">Saat ini belum tersedia promo khusus untuk mahasiswa, namun kami memastikan harga seluruh menu kami tetap terjangkau bagi kalangan pelajar.</p>
                </div>
              </div>
            </div>

            <div className="accordion-item custom-accordion-item">
              <h3 className="accordion-header m-0">
                <button className="accordion-button custom-accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Apakah menerima metode pembayaran menggunakan QRIS?
                </button>
              </h3>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body custom-accordion-body">
                  <p className="m-0">Ya, kami menerima berbagai metode pembayaran, termasuk QRIS, transfer bank, maupun uang tunai.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer id="kontak" className="footer">
        <p><strong>Kopi Nusantara</strong> - Jl. XX No. 10</p>
        <p>Buka setiap hari jam 10.00 - 22.00</p>
        <p className="glowing-text">&copy; 2026 Kopi Nusantara</p>
      </footer>
    </>
  );
}