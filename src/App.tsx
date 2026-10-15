import { FormEvent, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  GraduationCap,
  Stethoscope,
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
  { age: 'CBSE FOUNDATION', name: 'Early Years', description: 'A warm foundation where children build language, confidence, curiosity, and joyful learning habits.', color: 'red', icon: Baby },
  { age: 'PRIMARY SCHOOL', name: 'Young Explorers', description: 'Strong core learning paired with projects that help children ask better questions and think independently.', color: 'yellow', icon: BrainCircuit },
  { age: 'MIDDLE SCHOOL', name: 'Future Makers', description: 'Deeper discovery through science, mathematics, technology, communication, and collaborative problem-solving.', color: 'blue', icon: FlaskConical },
  { age: 'SENIOR SCHOOL', name: 'Pathways to Purpose', description: 'Focused CBSE preparation with exposure to engineering, medicine, research, leadership, and service.', color: 'green', icon: GraduationCap },
];

const reasons = [
  { title: 'CBSE learning with depth', text: 'A strong academic foundation that balances concepts, communication, creativity, and character.', icon: BookOpen, color: 'yellow' },
  { title: 'Engineering thinking', text: 'Students learn to observe, design, build, test, and improve through hands-on STEM experiences.', icon: BrainCircuit, color: 'blue' },
  { title: 'Medicine-inspired care', text: 'Biology, wellbeing, empathy, and service help students understand the human side of science.', icon: Stethoscope, color: 'red' },
  { title: 'A campus that supports growth', text: 'Purposeful classrooms, technology, play, nutrition, and caring routines help every student thrive.', icon: ShieldCheck, color: 'green' },
];

const testimonials = [
  { quote: 'We wanted a school that values both strong academics and the kind of confidence children carry into the world. Smart Start gives us both.', name: 'Priya R.', role: 'Parent of Ananya, CBSE Foundation', initials: 'PR', color: 'red' },
  { quote: 'The exposure to computers, science activities, and practical learning has made our son genuinely excited to come to school.', name: 'Karthik S.', role: 'Parent of Arjun, Primary School', initials: 'KS', color: 'blue' },
  { quote: 'The teachers know our child well and guide her with patience. It feels like a school with ambition and a very caring heart.', name: 'Meena V.', role: 'Parent of Tara, Middle School', initials: 'MV', color: 'green' },
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
  { label: 'Academics', href: '#programmes' },
  { label: 'About school', href: '#about-us' },
  { label: 'CBSE curriculum', href: '#curriculum' },
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
          <div className="utility-links"><a href="tel:+919876543210"><Phone size={14} /> +91 98765 43210</a><a href="#facilities"><MapPin size={14} /> Visit our campus</a></div>
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
              <div className="hero-kicker"><span className="kicker-dot" /> CBSE learning for tomorrow’s thinkers</div>
              <h1>Where bright<br /><em>futures begin.</em></h1>
              <p className="hero-text">A joyful, future-ready school where strong academics meet engineering thinking, medical curiosity, and the confidence to lead with purpose.</p>
              <div className="hero-actions"><a className="button button-red" href="https://docs.google.com/forms/d/e/1FAIpQLSfnYF0QQDe8LOVrRhdhQv-TryBRd0f7VKPIeC8-EC1f7hFd5w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Explore admissions <ArrowRight size={18} /></a><a className="play-link" href="#facilities"><span className="play-circle"><Play size={15} fill="currentColor" /></span> Tour the campus</a></div>
              <div className="hero-note"><div className="mini-avatars academic-mini"><span><BrainCircuit size={13} /></span><span><FlaskConical size={13} /></span><span><Stethoscope size={13} /></span><b>+</b></div><span>Learning for <strong>curious, capable minds</strong></span></div><div className="academic-pill-row"><span><BrainCircuit size={14} /> Engineering thinking</span><span><Stethoscope size={14} /> Medical curiosity</span></div>
            </div>
            <div className="hero-visual animate-in delay-1">
              <div className="hero-photo-wrap"><img key={heroSlides[activeHeroSlide].image} src={heroSlides[activeHeroSlide].image} alt={heroSlides[activeHeroSlide].alt} /><div className="photo-tag photo-tag-top"><span className="tag-icon yellow-icon"><Star size={15} fill="currentColor" /></span><span><strong>{heroSlides[activeHeroSlide].title}</strong><small>{heroSlides[activeHeroSlide].detail}</small></span></div><div className="photo-tag photo-tag-bottom"><span className="tag-icon green-icon"><CircleCheck size={16} /></span><span><strong>Safe & nurturing</strong><small>every single day</small></span></div></div><div className="hero-slide-controls" aria-label="Choose homepage photo">{heroSlides.map((slide, index) => <button key={slide.image} className={index === activeHeroSlide ? 'is-active' : ''} onClick={() => setActiveHeroSlide(index)} aria-label={`Show photo ${index + 1}`} />)}</div>
              <span className="doodle doodle-star">✦</span><span className="doodle doodle-sun">☼</span>
            </div>
          </div>
        </section>

        <section className="stats-band"><div className="container stats-grid"><div><strong>12</strong><span>years of<br />trusted learning</span></div><div><strong>7</strong><span>purpose-built<br />campus spaces</span></div><div><strong>360<span>°</span></strong><span>whole-child<br />development</span></div><div><strong>1</strong><span>clear promise:<br />every child matters</span></div></div></section>

        <section id="programmes" className="section programmes-section"><div className="container"><SectionHeading eyebrow="Academic pathways" title="A strong start for every future." text="From foundational learning to senior-school readiness, our CBSE pathway helps students build the knowledge, curiosity, and character to pursue what inspires them." /><div className="programme-grid">{programmes.map(({ age, name, description, color, icon: Icon }) => <article className={`programme-card card-${color}`} key={name}><div className="card-top"><span className="age-label">{age}</span><span className={`round-icon ${color}-bg`}><Icon size={22} /></span></div><h3>{name}</h3><p>{description}</p><a href="#enquire" onClick={(event) => { event.preventDefault(); openEnquiry(); }}>Explore programme <ArrowUpRight size={17} /></a><span className="card-number">0{programmes.findIndex((item) => item.name === name) + 1}</span></article>)}</div></div></section>

        <section id="about-us" className="section why-section"><div className="container why-grid"><div className="why-images"><div className="image-tall"><img src={images.learn} alt="Children learning through a colourful classroom activity" /></div><div className="image-small"><img src={images.play} alt="Child enjoying outdoor play" /></div><span className="floating-sticker">play<br /><strong>• learn •</strong><br />grow</span></div><div className="why-copy"><SectionHeading eyebrow="More than a classroom" title="A school for thinkers, makers, and caregivers." text="We bring together academic discipline, practical exploration, and a culture of empathy so students can grow into capable people who make a difference." /><div className="reason-grid">{reasons.map(({ title, text, icon: Icon, color }) => <div className="reason-item" key={title}><span className={`reason-icon ${color}-bg`}><Icon size={20} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><a className="text-link" href="#curriculum">See our learning philosophy <ArrowRight size={17} /></a></div></div></section>

        <section id="curriculum" className="section curriculum-section"><div className="container curriculum-grid"><div className="curriculum-copy"><SectionHeading eyebrow="Our CBSE approach" title="Concepts first. Curiosity always. Character throughout." text="Our learning model connects classroom knowledge to the real world. Students investigate, experiment, communicate, and reflect — building the confidence to pursue engineering, medicine, research, and every path in between." /><div className="curriculum-points"><div><span className="point-number red-bg">01</span><p><strong>Build the base</strong><br />Clear concepts make confident learners.</p></div><div><span className="point-number blue-bg">02</span><p><strong>Learn by doing</strong><br />Labs, projects, and questions make knowledge stick.</p></div><div><span className="point-number green-bg">03</span><p><strong>Lead with purpose</strong><br />Empathy and responsibility belong in every subject.</p></div></div></div><div className="learning-diagram"><div className="diagram-center"><span><Sparkles size={27} /></span><strong>Happy<br />learning</strong></div><div className="diagram-orbit orbit-one"><span className="orbit-icon yellow-bg"><Baby size={20} /></span><b>Play</b></div><div className="diagram-orbit orbit-two"><span className="orbit-icon red-bg"><HeartHandshake size={20} /></span><b>Belong</b></div><div className="diagram-orbit orbit-three"><span className="orbit-icon blue-bg"><BookOpen size={20} /></span><b>Discover</b></div><div className="diagram-orbit orbit-four"><span className="orbit-icon green-bg"><Users size={20} /></span><b>Grow</b></div></div></div></section>

        <section id="facilities" className="facilities-section">
          <div className="container">
            <div className="facilities-header-row">
              <SectionHeading
                eyebrow="Campus & Infrastructure"
                title="Spaces that turn lessons into lived experience."
                text="Explore the places where ideas become practical: a computer lab, vibrant classrooms, day care, dining, and outdoor play designed around the whole student."
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

        <section className="section testimonials-section"><div className="container"><SectionHeading eyebrow="From our parent circle" title="The school years that shape a life." align="center" /><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><Quote className="quote-mark" size={30} /><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><p>“{item.quote}”</p><div className="testimonial-person"><span className={`initials ${item.color}-bg`}>{item.initials}</span><span><strong>{item.name}</strong><small>{item.role}</small></span></div></article>)}</div></div></section>

        <section className="section cta-section"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light"><Sparkles size={14} /> The next chapter starts here</span><h2>Give them a future<br /><em>worth building.</em></h2><p>Discover a CBSE school where academic foundations, practical exposure, and compassionate leadership grow side by side.</p></div><a className="button button-yellow" href="https://docs.google.com/forms/d/e/1FAIpQLSfnYF0QQDe8LOVrRhdhQv-TryBRd0f7VKPIeC8-EC1f7hFd5w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Start an enquiry <ArrowUpRight size={18} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>Building knowledgeable, compassionate, and future-ready students — one purposeful day at a time.</p><div className="social-links"><a href="#top" aria-label="Instagram"><Instagram size={18} /></a><a href="#top" aria-label="YouTube"><Youtube size={18} /></a><a href="#top" aria-label="Message us"><MessageCircle size={18} /></a></div></div><div className="footer-column"><h3>Explore</h3><a href="#programmes">Academics</a><a href="#about-us">About school</a><a href="#curriculum">CBSE curriculum</a><a href="#facilities">Campus facilities</a><a href="#gallery">Gallery</a></div><div className="footer-column"><h3>For families</h3><a href="#about-us">Admissions</a><a href="#facilities">School tour</a><a href="#about-us">About our school</a><a href="#top">Talk to us</a></div><div className="newsletter"><h3>Stay in the loop</h3><p>School updates, admissions news, and ideas for growing minds.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowRight size={18} /></button></form></div></div><div className="container footer-bottom"><span>© 2026 Smart Start Play School. Building bright futures.</span><div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Accessibility</a></div><span className="footer-made">Made with <span>♥</span> for growing minds</span></div></footer>

      {enquiryOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setEnquiryOpen(false); }}><div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><button className="modal-close" onClick={() => setEnquiryOpen(false)} aria-label="Close enquiry form"><X size={20} /></button>{submitted ? <div className="success-state"><span className="success-icon"><Check size={30} /></span><h2>We received your note.</h2><p>Thank you for reaching out. Our admissions team will call you soon to help plan your child’s next academic step.</p><button className="button button-red" onClick={() => setEnquiryOpen(false)}>Back to the site <ArrowRight size={17} /></button></div> : <><span className="eyebrow"><Sparkles size={14} /> Let’s get to know you</span><h2 id="enquiry-title">Start their next chapter.</h2><p className="modal-intro">Tell us a little about your child and we’ll help you understand the right academic pathway.</p><form className="enquiry-form" onSubmit={submitEnquiry}><label>Parent’s name<input name="parent_name" required minLength={2} placeholder="e.g. Priya Raman" /></label><label>Phone number<input name="phone" required minLength={7} type="tel" placeholder="e.g. +91 98765 43210" /></label><div className="form-row"><label>Student stage<select name="child_age" required defaultValue=""><option value="" disabled>Select stage</option><option>Early Years</option><option>Primary School</option><option>Middle School</option><option>Senior School</option></select></label><label>Academic pathway<select name="programme" required defaultValue=""><option value="" disabled>Select pathway</option>{programmes.map((item) => <option key={item.name}>{item.name}</option>)}</select></label></div><label>Anything you’d like to ask? <span className="optional">Optional</span><textarea name="message" maxLength={1000} rows={3} placeholder="Tell us what’s on your mind..." /></label>{formError && <p className="form-error">{formError}</p>}<button className="button button-red form-submit" disabled={submitting} type="submit">{submitting ? 'Sending...' : 'Send my enquiry'} <ArrowRight size={18} /></button></form></>}</div></div>}
    </div>
  );
}

export default App;
