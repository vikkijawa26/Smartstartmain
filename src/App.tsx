import { FormEvent, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpen,
  Check,
  CircleCheck,
  HeartHandshake,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  X,
  Youtube,
} from 'lucide-react';
import Gallery from './components/gallery';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY;

const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const images = {
  hero: asset('images/WhatsApp_Image_2026-09-18_at_11.50.24_(2).jpeg'),
  learn: asset('images/WhatsApp_Image_2026-09-18_at_11.50.22.jpeg'),
  play: asset('images/WhatsApp_Image_2026-09-18_at_11.50.23.jpeg'),
  friends: asset('images/WhatsApp_Image_2026-09-18_at_11.50.23_(2).jpeg'),
  slide: asset('images/WhatsApp_Image_2026-09-18_at_11.50.24_(1).jpeg'),
};

const heroSlides = [
  { image: images.hero, title: 'Growing', detail: 'with joy', alt: 'Children playing together at Alagappa Smart Start' },
  { image: images.learn, title: 'Learning', detail: 'through wonder', alt: 'Children learning through a colourful classroom activity' },
  { image: images.play, title: 'Playing', detail: 'with purpose', alt: 'Child enjoying outdoor play' },
  { image: images.friends, title: 'Growing', detail: 'together', alt: 'Children exploring together' },
  { image: images.slide, title: 'Every day', detail: 'is an adventure', alt: 'Children playing outside' },
];

const programmes = [
  { age: '1.5 – 2.5 years', name: 'Tiny Tots', description: 'A gentle first step into group play, discovery and little routines that build confidence.', color: 'red', icon: Baby },
  { age: '2.5 – 3.5 years', name: 'Playgroup', description: 'Busy hands, bright ideas and playful experiences that grow early language and social skills.', color: 'yellow', icon: Sparkles },
  { age: '3.5 – 4.5 years', name: 'Nursery', description: 'A joyful foundation for curiosity, creativity, independence and a love of learning.', color: 'blue', icon: BookOpen },
  { age: '4.5 – 6 years', name: 'Kindergarten', description: 'Confident preparation for big school through meaningful projects and purposeful play.', color: 'green', icon: Star },
];

const reasons = [
  { title: 'Learning that feels like play', text: 'Every activity is designed to invite curiosity, movement and meaningful discovery.', icon: Sparkles, color: 'yellow' },
  { title: 'A safe, caring space', text: 'Warm adults, thoughtful routines and child-friendly spaces help little ones feel secure.', icon: ShieldCheck, color: 'blue' },
  { title: 'Teachers who truly see them', text: 'Our educators notice the small moments and celebrate every child’s unique spark.', icon: HeartHandshake, color: 'red' },
  { title: 'Room to grow and explore', text: 'Bright classrooms and open-air play areas give growing minds room to move.', icon: Leaf, color: 'green' },
];

const testimonials = [
  { quote: 'The happiness in my child is the best review. Every morning she runs in with a smile and comes home with a new story.', name: 'Priya R.', role: 'Parent of Ananya, Nursery', initials: 'PR', color: 'red' },
  { quote: 'We can see the difference in his confidence every week. The teachers are so patient, warm and genuinely invested.', name: 'Karthik S.', role: 'Parent of Arjun, Playgroup', initials: 'KS', color: 'blue' },
  { quote: 'Alagappa Smart Start feels like a second home. It is joyful, structured and exactly what our little one needed.', name: 'Meena V.', role: 'Parent of Tara, Kindergarten', initials: 'MV', color: 'green' },
];

const facilities = [
  {
    title: 'Computer Lab',
    tag: 'Digital Learning',
    description:
      'Our Computer Lab is designed to provide a modern, spacious, and comfortable learning environment. It is equipped with the latest hardware and software to support a wide range of academic and practical computing needs.',
    image: asset('images/facilities/computer-lab.png'),
    icon: Monitor,
    color: 'blue',
  },
  {
    title: 'Kindergarten Classroom',
    tag: 'Creative Play',
    description:
      'A vibrant world of learning Where curiosity meets creativity, Encouraging holistic Growth through interactive Experiences and Joyful learning moments.',
    image: asset('images/facilities/kindergarten-classroom.png'),
    icon: Sparkles,
    color: 'yellow',
  },
  {
    title: 'LKG Classroom',
    tag: 'Early Steps',
    description:
      'A nurturing and cheerful learning environment where young learners take their first step into education through play-based activities, joyful exploration, and guided discovery.',
    image: asset('images/facilities/lkg-classroom.png'),
    icon: BookOpen,
    color: 'red',
  },
  {
    title: 'UKG Classroom',
    tag: 'Primary Transition',
    description:
      'A dynamic and engaging space that strengthens foundational skills, fosters confidence, and prepares children for a smooth transition to primary education.',
    image: asset('images/facilities/ukg-classroom.png'),
    icon: Star,
    color: 'green',
  },
  {
    title: 'Day Care',
    tag: 'Safe & Homelike',
    description:
      'Caring and secure space that provides comfort, supervision, and enriching activities, ensuring children feel safe, happy, and at home throughout the day.',
    image: asset('images/facilities/day-care.png'),
    icon: HeartHandshake,
    color: 'yellow',
  },
  {
    title: 'Dining Area',
    tag: 'Nutrition & Etiquette',
    description:
      'Clean, safe, and welcoming space where children enjoy nutritious meals together, learning healthy eating habits, table manners, and the joy of sharing in a comfortable environment.',
    image: asset('images/facilities/dining-area.png'),
    icon: UtensilsCrossed,
    color: 'red',
  },
  {
    title: 'Play Area',
    tag: 'Active Outdoors',
    description:
      'Our play area is a safe and joyful space designed for fun and learning through play. Equipped with swing, seesaw, and slide. It helps children to develop physical strength, balance, coordination, and social skills while enjoying active play.',
    image: asset('images/facilities/play-area.png'),
    icon: Smile,
    color: 'blue',
  },
];

const navItems = [
  { label: 'Programmes', href: '#programmes' },
  { label: 'About us', href: '#about-us' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
];

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Smart Start Play School home">

      <img src={asset('images/smartstartLogo.png')} alt="Smart Start Play School" className="brand-logo" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'centered' : ''}`}>
      <span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveHeroSlide((slide) => (slide + 1) % heroSlides.length);
    }, 4200);
    return () => window.clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openEnquiry = () => {
    setSubmitted(false);
    setFormError('');
    setEnquiryOpen(true);
  };

  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError('');
    const form = new FormData(event.currentTarget);
    const parentName = String(form.get('parent_name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const childAge = String(form.get('child_age') ?? '').trim();
    const programme = String(form.get('programme') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    if (!supabase) {
      console.info('Enquiry received (demo/offline mode):', {
        parentName,
        phone,
        childAge,
        programme,
        message,
      });
      setSubmitted(true);
      event.currentTarget.reset();
      setSubmitting(false);
      return;
    }

    const { error } = await supabase.from('school_enquiries').insert({
      parent_name: parentName,
      phone,
      child_age: childAge,
      programme,
      message,
    });

    if (error) {
      setFormError('We could not send that just now. Please call us directly and we will be happy to help.');
    } else {
      setSubmitted(true);
      event.currentTarget.reset();
    }
    setSubmitting(false);
  };

  return (
    <div id="top" className="site-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Admissions open for 2026–27</span>
          <div className="utility-links"><a href="tel:+919876543210"><Phone size={14} /> +91 98765 43210</a><a href="#locate"><MapPin size={14} /> Find a centre</a></div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <Logo />
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <button className="button button-small button-red nav-mobile-cta" onClick={openEnquiry}>Enquire now <ArrowUpRight size={16} /></button>
          </nav>
          <button className="button button-small button-red nav-cta" onClick={openEnquiry}>Enquire now <ArrowUpRight size={16} /></button>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-blob hero-blob-one" />
          <div className="hero-blob hero-blob-two" />
          <div className="container hero-grid">
            <div className="hero-copy animate-in">
              <div className="hero-kicker"><span className="kicker-dot" /> Where little minds bloom</div>
              <h1>Big dreams<br /><em>start small.</em></h1>
              <p className="hero-text">A joyful first school where every child is known, nurtured and inspired to discover the world in their own wonderful way.</p>
              <div className="hero-actions">{/*<button className="button button-red" onClick={openEnquiry}>Begin their journey <ArrowRight size={18} /></button>*/}<a className="button button-red" href="https://docs.google.com/forms/d/e/1FAIpQLSfnYF0QQDe8LOVrRhdhQv-TryBRd0f7VKPIeC8-EC1f7hFd5w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Begin their journey <ArrowRight size={18} /></a><a className="play-link" href="#facilities"><span className="play-circle"><Play size={15} fill="currentColor" /></span> Explore facilities</a></div>
              <div className="hero-note"><div className="mini-avatars"><span>AS</span><span>KS</span><span>PR</span><b>+</b></div><span>Loved by <strong>1,200+ families</strong></span></div>
            </div>
            <div className="hero-visual animate-in delay-1">
              <div className="hero-photo-wrap"><img key={heroSlides[activeHeroSlide].image} src={heroSlides[activeHeroSlide].image} alt={heroSlides[activeHeroSlide].alt} /><div className="photo-tag photo-tag-top"><span className="tag-icon yellow-icon"><Star size={15} fill="currentColor" /></span><span><strong>{heroSlides[activeHeroSlide].title}</strong><small>{heroSlides[activeHeroSlide].detail}</small></span></div><div className="photo-tag photo-tag-bottom"><span className="tag-icon green-icon"><CircleCheck size={16} /></span><span><strong>Safe & nurturing</strong><small>every single day</small></span></div></div><div className="hero-slide-controls" aria-label="Choose homepage photo">{heroSlides.map((slide, index) => <button key={slide.image} className={index === activeHeroSlide ? 'is-active' : ''} onClick={() => setActiveHeroSlide(index)} aria-label={`Show photo ${index + 1}`} />)}</div>
              <span className="doodle doodle-star">✦</span><span className="doodle doodle-sun">☼</span>
            </div>
          </div>
        </section>

        <section className="stats-band"><div className="container stats-grid"><div><strong>12</strong><span>years of<br />happy learning</span></div><div><strong>1,200<span>+</span></strong><span>little learners<br />in our care</span></div><div><strong>35<span>+</span></strong><span>loving educators<br />and guides</span></div><div><strong>4.9<span>/5</span></strong><span>parent<br />happiness</span></div></div></section>

        <section id="programmes" className="section programmes-section"><div className="container"><SectionHeading eyebrow="Find their happy place" title="A programme for every little leap." text="From first friendships to big-school confidence, our programmes meet children exactly where they are." /><div className="programme-grid">{programmes.map(({ age, name, description, color, icon: Icon }) => <article className={`programme-card card-${color}`} key={name}><div className="card-top"><span className="age-label">{age}</span><span className={`round-icon ${color}-bg`}><Icon size={22} /></span></div><h3>{name}</h3><p>{description}</p><a href="#enquire" onClick={(event) => { event.preventDefault(); openEnquiry(); }}>Explore programme <ArrowUpRight size={17} /></a><span className="card-number">0{programmes.findIndex((item) => item.name === name) + 1}</span></article>)}</div></div></section>

        <section id="about-us" className="section why-section"><div className="container why-grid"><div className="why-images"><div className="image-tall"><img src={images.learn} alt="Children learning through a colourful classroom activity" /></div><div className="image-small"><img src={images.play} alt="Child enjoying outdoor play" /></div><span className="floating-sticker">play<br /><strong>• learn •</strong><br />grow</span></div><div className="why-copy"><SectionHeading eyebrow="More than a school" title="A little world made for big becoming." text="The early years are full of firsts. We create the kind of place where every first feels exciting, supported and full of possibility." /><div className="reason-grid">{reasons.map(({ title, text, icon: Icon, color }) => <div className="reason-item" key={title}><span className={`reason-icon ${color}-bg`}><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><a className="text-link" href="#curriculum">Discover our difference <ArrowRight size={17} /></a></div></div></section>

        <section id="curriculum" className="section curriculum-section"><div className="container curriculum-grid"><div className="curriculum-copy"><SectionHeading eyebrow="Our way of learning" title="Curious minds. Kind hearts. Confident steps." text="Our play-led approach brings together the best of structured learning and child-led discovery, so every child gets to learn in a way that feels natural to them." /><div className="curriculum-points"><div><span className="point-number red-bg">01</span><p><strong>Wonder first</strong><br />We begin with questions, not answers.</p></div><div><span className="point-number blue-bg">02</span><p><strong>Hands on</strong><br />Little hands make big connections.</p></div><div><span className="point-number green-bg">03</span><p><strong>Grow together</strong><br />Every voice and every pace matters.</p></div></div></div><div className="learning-diagram"><div className="diagram-center"><span><Sparkles size={27} /></span><strong>Happy<br />learning</strong></div><div className="diagram-orbit orbit-one"><span className="orbit-icon yellow-bg"><Baby size={20} /></span><b>Play</b></div><div className="diagram-orbit orbit-two"><span className="orbit-icon red-bg"><HeartHandshake size={20} /></span><b>Belong</b></div><div className="diagram-orbit orbit-three"><span className="orbit-icon blue-bg"><BookOpen size={20} /></span><b>Discover</b></div><div className="diagram-orbit orbit-four"><span className="orbit-icon green-bg"><Users size={20} /></span><b>Grow</b></div></div></div></section>

        <section id="facilities" className="facilities-section">
          <div className="container">
            <div className="facilities-header-row">
              <SectionHeading
                eyebrow="Campus & Infrastructure"
                title="Every space built for happy discoveries."
                text="Designed from the ground up for early learners. Explore our labs, cheerful classrooms, day care, dining spaces, and outdoor play areas."
              />
            </div>

            <div className="facilities-grid">
              {facilities.map((fac) => {
                const Icon = fac.icon;
                return (
                  <article className="facility-card" key={fac.title}>
                    <div className="facility-img-wrap">
                      <img src={fac.image} alt={fac.title} loading="lazy" />
                      <span className="facility-tag">{fac.tag}</span>
                    </div>
                    <div className="facility-content">
                      <div className="facility-title-row">
                        <span className={`facility-badge-icon ${fac.color}-bg`}>
                          <Icon size={18} />
                        </span>
                        <h3>{fac.title}</h3>
                      </div>
                      <p>{fac.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>


          </div>
        </section>
        <Gallery></Gallery>

        {/* <section id="gallery" className="gallery-section"><div className="container gallery-grid"><div className="gallery-intro"><span className="eyebrow eyebrow-light"><Sparkles size={14} /> Days worth remembering</span><h2>There is magic<br />in the everyday.</h2><p>Messy hands. Brave tries. Loud laughter. These are the moments that make childhood.</p><a className="button button-light" href="#about-us">Visit our world <ArrowUpRight size={17} /></a></div><div className="gallery-photo gallery-photo-one"><img src={images.friends} alt="Children exploring together" /></div><div className="gallery-photo gallery-photo-two"><img src={images.slide} alt="Children playing outside" /></div></div></section> */}

        <section className="section testimonials-section"><div className="container"><SectionHeading eyebrow="From our parent circle" title="The little things mean everything." align="center" /><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><Quote className="quote-mark" size={30} /><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><p>“{item.quote}”</p><div className="testimonial-person"><span className={`initials ${item.color}-bg`}>{item.initials}</span><span><strong>{item.name}</strong><small>{item.role}</small></span></div></article>)}</div></div></section>

        <section className="section cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light"><Sparkles size={14} /> Begin today</span><h2>Build a brighter<br /><em>beginning</em> with us.</h2><p>Join a community that believes every neighbourhood deserves a beautiful place for children to begin.</p></div><button className="button button-yellow" onClick={openEnquiry}>Enquire now <ArrowUpRight size={18} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>Growing happy, curious and confident little people — one joyful day at a time.</p><div className="social-links"><a href="#top" aria-label="Instagram"><Instagram size={18} /></a><a href="#top" aria-label="YouTube"><Youtube size={18} /></a><a href="#top" aria-label="Message us"><MessageCircle size={18} /></a></div></div><div className="footer-column"><h3>Explore</h3><a href="#programmes">Programmes</a><a href="#about-us">About us</a><a href="#curriculum">Our curriculum</a><a href="#facilities">Campus facilities</a><a href="#gallery">Gallery</a></div><div className="footer-column"><h3>For families</h3><a href="#about-us">Admissions</a><a href="#about-us">School tour</a><a href="#about-us">About our school</a><a href="#top">Talk to us</a></div><div className="newsletter"><h3>Stay in the loop</h3><p>Little ideas and big smiles, delivered occasionally.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowRight size={18} /></button></form></div></div><div className="container footer-bottom"><span>© 2026 Alagappa Smart Start. Made for little beginnings.</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Accessibility</a></div><span className="footer-made">Made with <span>♥</span> for growing minds</span></div></footer>

      {enquiryOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setEnquiryOpen(false); }}><div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><button className="modal-close" onClick={() => setEnquiryOpen(false)} aria-label="Close enquiry form"><X size={20} /></button>{submitted ? <div className="success-state"><span className="success-icon"><Check size={30} /></span><h2>We received your note.</h2><p>Thank you for reaching out. Our admissions team will call you soon to plan your little one’s next happy step.</p><button className="button button-red" onClick={() => setEnquiryOpen(false)}>Back to the site <ArrowRight size={17} /></button></div> : <><span className="eyebrow"><Sparkles size={14} /> Let’s get to know you</span><h2 id="enquiry-title">Start their happy beginning.</h2><p className="modal-intro">Tell us a little about your child and we’ll help you find the right programme.</p><form className="enquiry-form" onSubmit={submitEnquiry}><label>Parent’s name<input name="parent_name" required minLength={2} placeholder="e.g. Priya Raman" /></label><label>Phone number<input name="phone" required minLength={7} type="tel" placeholder="e.g. +91 98765 43210" /></label><div className="form-row"><label>Child’s age<select name="child_age" required defaultValue=""><option value="" disabled>Select age</option><option>1.5 – 2.5 years</option><option>2.5 – 3.5 years</option><option>3.5 – 4.5 years</option><option>4.5 – 6 years</option></select></label><label>Programme<select name="programme" required defaultValue=""><option value="" disabled>Select programme</option>{programmes.map((item) => <option key={item.name}>{item.name}</option>)}</select></label></div><label>Anything you’d like to ask? <span className="optional">Optional</span><textarea name="message" maxLength={1000} rows={3} placeholder="Tell us what’s on your mind..." /></label>{formError && <p className="form-error">{formError}</p>}<button className="button button-red form-submit" disabled={submitting} type="submit">{submitting ? 'Sending...' : 'Send my enquiry'} <ArrowRight size={18} /></button></form></>}</div></div>}
    </div>
  );
}

export default App;
