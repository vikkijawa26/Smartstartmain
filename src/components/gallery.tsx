import {
    ArrowUpRight,
    Sparkles,
} from 'lucide-react';
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const images = {

    friends: asset('images/WhatsApp_Image_2026-09-18_at_11.50.23_(2).jpeg'),
    slide: asset('images/WhatsApp_Image_2026-09-18_at_11.50.24_(1).jpeg'),
};
function Gallery() {

    return (
        <div>
            <section id="gallery" className="gallery-section"><div className="container gallery-grid"><div className="gallery-intro"><span className="eyebrow eyebrow-light"><Sparkles size={14} /> Days worth remembering</span><h2>There is magic<br />in the everyday.</h2><p>Messy hands. Brave tries. Loud laughter. These are the moments that make childhood.</p><a className="button button-light" href="#about-us">Visit our world <ArrowUpRight size={17} /></a></div><div className="gallery-photo gallery-photo-one"><img src={images.friends} alt="Children exploring together" /></div><div className="gallery-photo gallery-photo-two"><img src={images.slide} alt="Children playing outside" /></div></div></section>
        </div>
    );
}
export default Gallery;
