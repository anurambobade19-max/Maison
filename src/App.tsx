import { useState, useEffect, useCallback } from 'react';
import {
  Building2,
  Home,
  House,
  Palmtree,
  Castle,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowRight,
  Check,
  Loader2,
} from 'lucide-react';
import { categories, type Category, type GalleryImage } from '@/data/categories';
import { supabase } from '@/lib/supabase';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Home,
  House,
  Palmtree,
  Castle,
};

// ── Header ──────────────────────────────────────────────────────────────────

function Header({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/90 backdrop-blur-xl border-b border-stone-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav('hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Home className="w-5 h-5 text-stone-950" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-stone-50">
            Maison<span className="text-amber-400">.</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleNav(c.id)}
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors relative group"
            >
              {c.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('contact')}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-stone-950 text-sm font-semibold hover:bg-amber-400 transition-colors"
        >
          Book Consultation
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          className="md:hidden text-stone-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-stone-900/95 backdrop-blur-xl border border-stone-800 p-4 space-y-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleNav(c.id)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-stone-200 hover:bg-stone-800/60 hover:text-amber-400 transition-colors"
            >
              {c.name}
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="w-full px-4 py-3 rounded-xl bg-amber-500 text-stone-950 font-semibold mt-2"
          >
            Book Consultation
          </button>
        </div>
      )}
    </header>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────

function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={categories[4].hero}
          alt="Luxury mansion interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/60 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50/10 backdrop-blur-md border border-stone-50/20 mb-8 animate-[fadeIn_0.8s_ease]">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-stone-200 font-medium tracking-wide">
            Interior Design & Home Decor Studio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-stone-50 leading-[1.05] tracking-tight mb-6">
          Explore Homes,
          <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Curated for Every Dream
          </span>
        </h1>

        <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
          From cozy apartments to grand mansions — discover inspiring interiors
          for every space, every style, every story.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400 transition-all hover:scale-105 shadow-xl shadow-amber-500/20"
          >
            Explore Homes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-stone-50/10 backdrop-blur-md border border-stone-50/20 text-stone-50 font-semibold hover:bg-stone-50/20 transition-all"
          >
            Book Consultation
          </button>
        </div>

        <div className="flex items-center justify-center gap-8 mt-16 text-stone-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-50">5</div>
            <div className="text-sm">Home Types</div>
          </div>
          <div className="w-px h-12 bg-stone-700" />
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-50">30+</div>
            <div className="text-sm">Spaces</div>
          </div>
          <div className="w-px h-12 bg-stone-700" />
          <div className="text-center">
            <div className="text-3xl font-bold text-stone-50">200+</div>
            <div className="text-sm">Design Ideas</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Category Explorer ──────────────────────────────────────────────────────

function CategoryCard({
  category,
  onClick,
  index,
}: {
  category: Category;
  onClick: () => void;
  index: number;
}) {
  const Icon = iconMap[category.icon] ?? Home;
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl aspect-[4/5] text-left animate-[fadeInUp_0.6s_ease_forwards] opacity-0"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={category.hero}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

      <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-stone-50/15 backdrop-blur-md border border-stone-50/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-amber-400" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-stone-50 mb-1">{category.name}</h3>
        <p className="text-sm text-stone-300 mb-3">{category.tagline}</p>
        <div className="inline-flex items-center gap-1.5 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          Explore {category.subcategories.length} spaces
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </button>
  );
}

function CategoryExplorer({
  activeCategory,
  onCategorySelect,
}: {
  activeCategory: string | null;
  onCategorySelect: (id: string) => void;
}) {
  return (
    <section id="explore" className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Explore Homes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 tracking-tight mb-4">
            Find Your Perfect Space
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Browse five distinctive home categories, each with its own collection
            of curated interior spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={i}
              onClick={() => onCategorySelect(cat.id)}
            />
          ))}
          <div className="hidden lg:flex rounded-3xl bg-gradient-to-br from-amber-500/10 to-stone-900 border border-amber-500/20 items-center justify-center p-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-50 mb-2">
                Not sure where to start?
              </h3>
              <p className="text-stone-400 text-sm mb-4">
                Book a free consultation with our design experts.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-amber-400 font-medium text-sm hover:gap-3 transition-all"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Gallery (subcategory view) ──────────────────────────────────────────────

function Gallery({
  category,
  onBack,
  onImageClick,
}: {
  category: Category;
  onBack: () => void;
  onImageClick: (imgs: GalleryImage[], index: number) => void;
}) {
  const [activeSub, setActiveSub] = useState(0);

  const sub = category.subcategories[activeSub];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors mb-6 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to all homes
        </button>

        <div className="flex items-center gap-4 mb-2">
          {(() => {
            const Icon = iconMap[category.icon] ?? Home;
            return (
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                <Icon className="w-6 h-6 text-amber-400" />
              </div>
            );
          })()}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-50 tracking-tight">
              {category.name}
            </h2>
            <p className="text-stone-400">{category.tagline}</p>
          </div>
        </div>

        {/* Subcategory tabs */}
        <div className="flex flex-wrap gap-2 mt-8 mb-10">
          {category.subcategories.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActiveSub(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                i === activeSub
                  ? 'bg-amber-500 text-stone-950'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sub.images.map((image, i) => (
            <button
              key={i}
              onClick={() => onImageClick(sub.images, i)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-[fadeInUp_0.5s_ease_forwards] opacity-0"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-stone-50 text-sm font-medium">{sub.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (dir: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-stone-50/10 hover:bg-stone-50/20 flex items-center justify-center text-stone-50 transition-colors"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-stone-50/10 hover:bg-stone-50/20 flex items-center justify-center text-stone-50 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <img
        src={images[index].url}
        alt={images[index].alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[85vh] rounded-xl object-contain animate-[fadeIn_0.3s_ease]"
      />

      <button
        onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-stone-50/10 hover:bg-stone-50/20 flex items-center justify-center text-stone-50 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-stone-50/10 text-stone-300 text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

// ── Contact / Consultation Form ─────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', property_type: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    const { error } = await supabase.from('inquiries').insert([form]);
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', property_type: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="max-w-3xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50 tracking-tight mb-4">
            Book a Free Consultation
          </h2>
          <p className="text-stone-400 text-lg">
            Tell us about your dream home and our design experts will reach out
            within 24 hours.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-10 text-center animate-[fadeIn_0.4s_ease]">
            <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-5">
              <Check className="w-8 h-8 text-stone-950" />
            </div>
            <h3 className="text-2xl font-bold text-stone-50 mb-2">Thank you!</h3>
            <p className="text-stone-300 mb-6">
              Your consultation request has been received. We'll be in touch shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-800 text-stone-200 font-medium hover:bg-stone-700 transition-colors"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Interested In</label>
                <select
                  value={form.property_type}
                  onChange={(e) => setForm({ ...form, property_type: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-stone-50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  <option value="">Select a home type</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-300 mb-2">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-stone-50 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400 transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800/60 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Home className="w-5 h-5 text-stone-950" />
              </div>
              <span className="text-xl font-semibold text-stone-50">
                Maison<span className="text-amber-400">.</span>
              </span>
            </div>
            <p className="text-stone-400 max-w-md leading-relaxed">
              Interior design and home decor studio helping you find inspiration
              for every kind of home — from compact apartments to sprawling
              mansions.
            </p>
          </div>
          <div>
            <h4 className="text-stone-50 font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => document.getElementById(c.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-stone-50 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <Mail className="w-4 h-4 text-amber-400" />
                hello@maison.studio
              </li>
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                +1 (555) 012-3456
              </li>
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                123 Design District, NYC
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-800/60 text-center text-stone-500 text-sm">
          © 2026 Maison Studio. Craftured for dream homes.
        </div>
      </div>
    </footer>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);

  const handleNavigate = useCallback((id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (id === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const cat = categories.find((c) => c.id === id);
    if (cat) {
      setActiveCategory(cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleCategorySelect = useCallback((id: string) => {
    const cat = categories.find((c) => c.id === id);
    if (cat) {
      setActiveCategory(cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleLightboxNav = useCallback(
    (dir: number) => {
      setLightbox((prev) => {
        if (!prev) return null;
        const next = (prev.index + dir + prev.images.length) % prev.images.length;
        return { ...prev, index: next };
      });
    },
    []
  );

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <Header onNavigate={handleNavigate} />

      {activeCategory ? (
        <Gallery
          category={activeCategory}
          onBack={() => setActiveCategory(null)}
          onImageClick={(images, index) => setLightbox({ images, index })}
        />
      ) : (
        <>
          <Hero onExplore={() => handleNavigate('explore')} />
          <CategoryExplorer
            activeCategory={activeCategory?.id ?? null}
            onCategorySelect={handleCategorySelect}
          />
        </>
      )}

      <ContactForm />
      <Footer />

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={handleLightboxNav}
        />
      )}
    </div>
  );
}
