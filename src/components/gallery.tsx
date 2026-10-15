import { ArrowUpRight, FlaskConical } from 'lucide-react';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const images = {
  friends: asset('images/WhatsApp_Image_2026-09-18_at_11.50.23_(2).jpeg'),
  slide: asset('images/WhatsApp_Image_2026-09-18_at_11.50.24_(1).jpeg'),
};

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container gallery-grid">
        <div className="gallery-intro">
          <span className="eyebrow eyebrow-light"><FlaskConical size={14} /> Campus intelligence</span>
          <h2>See learning<br />in motion.</h2>
          <p>From collaborative classrooms to practical exploration, every frame reflects a campus designed to move students from knowledge to capability.</p>
          <a className="button button-light" href="#about-us">Explore the school <ArrowUpRight size={17} /></a>
        </div>
        <div className="gallery-photo gallery-photo-one"><img src={images.friends} alt="Students collaborating on campus" /></div>
        <div className="gallery-photo gallery-photo-two"><img src={images.slide} alt="Students participating in an outdoor learning activity" /></div>
      </div>
    </section>
  );
}

export default Gallery;
