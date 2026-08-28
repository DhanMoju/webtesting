import { useState, useRef, useEffect } from "react";

// ── Data ────────────────────────────────────────────────────────────────────

const ARTIST = "VAEL";
const TAGLINE = "Electronic. Visceral. Unbound.";

const NAV_LINKS = ["Music", "Tour", "About", "Listen"];

const ALBUMS = [
  {
    id: 1,
    title: "Hollow Static",
    year: "2024",
    tracks: 10,
    cover: "https://images.unsplash.com/photo-1558620013-a08999547a36?w=600&h=600&fit=crop&auto=format",
    genre: "Dark Electronic",
  },
  {
    id: 2,
    title: "Signal/Noise",
    year: "2022",
    tracks: 8,
    cover: "https://images.unsplash.com/photo-1600779547877-be592ef5aad3?w=600&h=600&fit=crop&auto=format",
    genre: "Industrial Ambient",
  },
  {
    id: 3,
    title: "Before the Collapse",
    year: "2020",
    tracks: 12,
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop&auto=format",
    genre: "Alternative Electronic",
  },
  {
    id: 4,
    title: "Periphery",
    year: "2018",
    tracks: 9,
    cover: "https://images.unsplash.com/photo-1515175192010-cf3250992719?w=600&h=600&fit=crop&auto=format",
    genre: "Synthwave",
  },
];

const TRACKS = [
  { id: 1, title: "Hollow Static", album: "Hollow Static", duration: "4:32", bpm: 128 },
  { id: 2, title: "Dissolve", album: "Hollow Static", duration: "5:14", bpm: 110 },
  { id: 3, title: "Meridian", album: "Hollow Static", duration: "3:58", bpm: 140 },
  { id: 4, title: "Signal/Noise", album: "Signal/Noise", duration: "6:01", bpm: 96 },
  { id: 5, title: "White Frequency", album: "Signal/Noise", duration: "4:47", bpm: 122 },
];

const TOUR_DATES = [
  { id: 1, date: "SEP 12", year: "2026", city: "Berlin", venue: "Berghain", country: "DE", status: "available" },
  { id: 2, date: "SEP 18", year: "2026", city: "Amsterdam", venue: "Paradiso", country: "NL", status: "available" },
  { id: 3, date: "SEP 25", year: "2026", city: "London", venue: "Fabric", country: "UK", status: "sold out" },
  { id: 4, date: "OCT 03", year: "2026", city: "Paris", venue: "Rex Club", country: "FR", status: "available" },
  { id: 5, date: "OCT 11", year: "2026", city: "Barcelona", venue: "Razzmatazz", country: "ES", status: "available" },
  { id: 6, date: "OCT 19", year: "2026", city: "New York", venue: "Output", country: "US", status: "few left" },
  { id: 7, date: "OCT 27", year: "2026", city: "Los Angeles", venue: "The Mayan", country: "US", status: "available" },
  { id: 8, date: "NOV 04", year: "2026", city: "Tokyo", venue: "Contact", country: "JP", status: "available" },
];

const MARQUEE_TEXT = "HOLLOW STATIC — OUT NOW — VAEL — HOLLOW STATIC — OUT NOW — VAEL — HOLLOW STATIC — OUT NOW — VAEL — HOLLOW STATIC — OUT NOW — VAEL — ";

// ── Sub-components ───────────────────────────────────────────────────────────

function Nav({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#222018]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <button
          onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          className="font-display text-xl font-black tracking-[0.2em] text-[#f0ece4] hover:text-[#e8a020] transition-colors duration-300"
        >
          {ARTIST}
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`nav-link text-xs font-mono tracking-[0.18em] uppercase transition-colors duration-300 ${
                  activeSection === link.toLowerCase()
                    ? "text-[#e8a020]"
                    : "text-[#a09888] hover:text-[#f0ece4]"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("Listen")}
          className="hidden md:block text-xs font-mono tracking-[0.18em] uppercase px-5 py-2 border border-[#e8a020] text-[#e8a020] hover:bg-[#e8a020] hover:text-[#080808] transition-all duration-300"
        >
          Stream Now
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#f0ece4] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-md border-t border-[#222018] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-sm font-mono tracking-[0.18em] uppercase text-[#a09888] hover:text-[#e8a020] transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[#080808]">
        <img
          src="https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?w=1600&h=900&fit=crop&auto=format"
          alt="VAEL live performance"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize: "256px" }}
        />
      </div>

      {/* Vertical label */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#6b6257] uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll to explore
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-[#6b6257] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
        <p className="animate-fade-up font-mono text-xs tracking-[0.3em] text-[#e8a020] uppercase mb-5">
          New Album Out Now
        </p>
        <h1 className="animate-fade-up-delay-1 font-display font-black text-[clamp(4rem,12vw,11rem)] leading-[0.88] tracking-tight text-[#f0ece4] glow-text">
          {ARTIST}
        </h1>
        <p className="animate-fade-up-delay-2 font-display italic text-[clamp(1.1rem,3vw,2rem)] text-[#a09888] mt-4 font-light">
          {TAGLINE}
        </p>
        <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mt-10">
          <button
            onClick={() => document.getElementById("listen")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-[#e8a020] text-[#080808] font-mono text-xs tracking-[0.18em] uppercase font-bold hover:bg-[#f0b030] transition-colors duration-300"
          >
            Listen Now
          </button>
          <button
            onClick={() => document.getElementById("tour")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border border-[#f0ece4]/30 text-[#f0ece4] font-mono text-xs tracking-[0.18em] uppercase hover:border-[#f0ece4]/70 transition-colors duration-300"
          >
            Tour Dates
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#6b6257]" />
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-[#222018] py-3 bg-[#0d0d0d]">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-mono text-xs tracking-[0.25em] text-[#e8a020] uppercase pr-0">
          {MARQUEE_TEXT}
        </span>
        <span className="font-mono text-xs tracking-[0.25em] text-[#e8a020] uppercase">
          {MARQUEE_TEXT}
        </span>
      </div>
    </div>
  );
}

function MusicSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="music" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-3">Discography</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none text-[#f0ece4]">
            The Work
          </h2>
        </div>
        <span className="hidden sm:block font-mono text-xs text-[#6b6257] tracking-[0.15em]">
          {ALBUMS.length} releases
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222018]">
        {ALBUMS.map((album) => (
          <div
            key={album.id}
            className="album-card relative bg-[#080808] cursor-pointer group"
            onMouseEnter={() => setHovered(album.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative overflow-hidden aspect-square">
              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="album-overlay absolute inset-0 bg-[#080808]/70 opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <button className="font-mono text-xs tracking-[0.2em] uppercase text-[#e8a020] border border-[#e8a020] px-5 py-2.5 hover:bg-[#e8a020] hover:text-[#080808] transition-all duration-300">
                  Listen
                </button>
              </div>
            </div>
            <div className="p-5">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#6b6257] uppercase mb-1">
                {album.year} · {album.genre}
              </p>
              <h3 className="font-display font-bold text-lg text-[#f0ece4] group-hover:text-[#e8a020] transition-colors duration-300">
                {album.title}
              </h3>
              <p className="font-mono text-xs text-[#6b6257] mt-1">{album.tracks} tracks</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Player() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const track = TRACKS[currentTrack];

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            handleNext();
            return 0;
          }
          return p + 0.25;
        });
      }, 200);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [playing, currentTrack]);

  const handleNext = () => {
    setCurrentTrack((c) => (c + 1) % TRACKS.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrack((c) => (c - 1 + TRACKS.length) % TRACKS.length);
    setProgress(0);
  };

  const elapsed = (() => {
    const [m, s] = track.duration.split(":").map(Number);
    const totalSec = m * 60 + s;
    const elapsedSec = Math.floor((progress / 100) * totalSec);
    const em = Math.floor(elapsedSec / 60);
    const es = elapsedSec % 60;
    return `${em}:${es.toString().padStart(2, "0")}`;
  })();

  return (
    <section id="listen" className="bg-[#0d0d0d] border-y border-[#222018] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-3">Now Playing</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none text-[#f0ece4]">
            Listen
          </h2>
        </div>

        {/* Player card */}
        <div className="glow-border bg-[#111111] p-6 lg:p-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-center">
            {/* Album art */}
            <div className="relative aspect-square max-w-xs mx-auto lg:max-w-full overflow-hidden">
              <img
                src={ALBUMS[0].cover}
                alt={track.album}
                className={`w-full h-full object-cover transition-all duration-1000 ${playing ? "scale-105" : "scale-100"}`}
              />
              <div className={`absolute inset-0 bg-[#e8a020]/10 transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`} />
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#6b6257] uppercase">{track.album} · {track.bpm} BPM</p>
                <h3 className="font-display font-black text-3xl lg:text-4xl text-[#f0ece4] mt-1">{track.title}</h3>
                <p className="font-mono text-xs text-[#a09888] mt-1">{ARTIST}</p>
              </div>

              {/* Progress bar */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#6b6257] w-8 shrink-0">{elapsed}</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="track-progress w-full"
                  style={{ background: `linear-gradient(to right, #e8a020 ${progress}%, #222018 ${progress}%)` }}
                />
                <span className="font-mono text-xs text-[#6b6257] w-8 shrink-0 text-right">{track.duration}</span>
              </div>

              {/* Playback controls */}
              <div className="flex items-center justify-center gap-8">
                <button
                  onClick={handlePrev}
                  className="text-[#a09888] hover:text-[#f0ece4] transition-colors"
                  aria-label="Previous track"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>
                <button
                  onClick={() => setPlaying(!playing)}
                  className="w-14 h-14 rounded-full bg-[#e8a020] text-[#080808] flex items-center justify-center hover:bg-[#f0b030] transition-colors duration-200 shrink-0"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={handleNext}
                  className="text-[#a09888] hover:text-[#f0ece4] transition-colors"
                  aria-label="Next track"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#6b6257">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="track-progress w-28"
                  style={{ background: `linear-gradient(to right, #6b6257 ${volume}%, #222018 ${volume}%)` }}
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#6b6257">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Track list */}
          <div className="mt-8 border-t border-[#222018] pt-6">
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#6b6257] uppercase mb-4">Tracklist</p>
            <ul className="flex flex-col gap-1">
              {TRACKS.map((t, i) => (
                <li key={t.id}>
                  <button
                    onClick={() => { setCurrentTrack(i); setPlaying(true); setProgress(0); }}
                    className={`w-full flex items-center gap-4 px-3 py-2.5 transition-colors duration-200 group ${
                      currentTrack === i ? "bg-[#1a1a1a]" : "hover:bg-[#141414]"
                    }`}
                  >
                    <span className={`font-mono text-xs w-5 text-right shrink-0 ${currentTrack === i ? "text-[#e8a020]" : "text-[#6b6257]"}`}>
                      {currentTrack === i && playing ? "▶" : String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 text-left text-sm ${currentTrack === i ? "text-[#e8a020] font-medium" : "text-[#a09888] group-hover:text-[#f0ece4]"} transition-colors`}>
                      {t.title}
                    </span>
                    <span className="font-mono text-xs text-[#6b6257] shrink-0">{t.album}</span>
                    <span className="font-mono text-xs text-[#6b6257] shrink-0 w-10 text-right">{t.duration}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TourSection() {
  const [filter, setFilter] = useState<"all" | "available">("all");

  const filtered = filter === "all" ? TOUR_DATES : TOUR_DATES.filter((d) => d.status === "available");

  const statusStyle = (status: string) => {
    if (status === "sold out") return "text-[#6b6257] bg-[#141414]";
    if (status === "few left") return "text-[#e8a020] bg-[#e8a020]/10";
    return "text-[#4caf6e] bg-[#4caf6e]/10";
  };

  return (
    <section id="tour" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-3">Live</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none text-[#f0ece4]">
            Tour Dates
          </h2>
        </div>
        <div className="flex gap-2">
          {(["all", "available"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-200 ${
                filter === f
                  ? "border-[#e8a020] text-[#e8a020] bg-[#e8a020]/10"
                  : "border-[#222018] text-[#6b6257] hover:border-[#a09888] hover:text-[#a09888]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ul className="flex flex-col border-t border-[#222018]">
        {filtered.map((show, i) => (
          <li
            key={show.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-[#222018] group hover:bg-[#0d0d0d] px-2 -mx-2 transition-colors duration-200"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 shrink-0">
                <p className="font-mono text-xs text-[#6b6257]">{show.year}</p>
                <p className="font-display font-black text-xl text-[#f0ece4]">{show.date}</p>
              </div>
              <div>
                <p className="font-display font-bold text-lg text-[#f0ece4] group-hover:text-[#e8a020] transition-colors duration-300">
                  {show.city}
                  <span className="font-mono text-xs text-[#6b6257] ml-2 font-normal">{show.country}</span>
                </p>
                <p className="font-mono text-xs text-[#6b6257] mt-0.5">{show.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className={`font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1 ${statusStyle(show.status)}`}>
                {show.status}
              </span>
              <button
                disabled={show.status === "sold out"}
                className={`font-mono text-xs tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                  show.status === "sold out"
                    ? "border-[#222018] text-[#3a3530] cursor-not-allowed"
                    : "border-[#e8a020] text-[#e8a020] hover:bg-[#e8a020] hover:text-[#080808]"
                }`}
              >
                {show.status === "sold out" ? "Sold Out" : "Get Tickets"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-[#0d0d0d] border-t border-[#222018] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:max-w-full">
            <img
              src="https://images.unsplash.com/photo-1637059880830-59a90102de77?w=700&h=950&fit=crop&auto=format"
              alt="VAEL artist portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-60" />
          </div>
          {/* Decorative frame offset */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#e8a020]/20 pointer-events-none" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-3">About</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black leading-none text-[#f0ece4]">
              Sound as a<br />
              <em className="italic font-light text-[#a09888]">state of collapse</em>
            </h2>
          </div>

          <p className="text-[#a09888] leading-relaxed text-base">
            VAEL is the project of Berlin-based producer and sound designer M. Kresse. Emerging from
            the city's underground circuit in 2016, VAEL builds dense sonic architectures from decayed
            field recordings, industrial hardware, and deconstructed club music.
          </p>
          <p className="text-[#a09888] leading-relaxed text-base">
            The debut LP <em className="text-[#f0ece4] not-italic">Before the Collapse</em> earned attention in
            Resident Advisor and Wire Magazine. The latest record, <em className="text-[#f0ece4] not-italic">Hollow Static</em>,
            marks a shift toward longer, more meditative forms — a study in controlled disintegration.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#222018]">
            {[
              { value: "4", label: "Albums" },
              { value: "8", label: "Years Active" },
              { value: "200K+", label: "Monthly Listeners" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display font-black text-3xl text-[#e8a020]">{value}</p>
                <p className="font-mono text-[10px] tracking-[0.15em] text-[#6b6257] uppercase mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const socials = [
    { label: "Spotify", href: "#" },
    { label: "SoundCloud", href: "#" },
    { label: "Bandcamp", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Resident Advisor", href: "#" },
  ];

  return (
    <footer className="border-t border-[#222018] bg-[#080808] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-16">
          {/* Mailing list */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-3">Mailing List</p>
            <h3 className="font-display font-black text-2xl text-[#f0ece4] mb-4">
              Stay in the loop
            </h3>
            <p className="text-sm text-[#6b6257] mb-6 leading-relaxed">
              Tour announcements, new releases, and event tickets — nothing else.
            </p>
            {submitted ? (
              <p className="font-mono text-xs tracking-[0.15em] text-[#e8a020] uppercase">
                ✓ You're on the list
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-[#111111] border border-[#222018] px-4 py-3 text-sm text-[#f0ece4] placeholder-[#3a3530] font-mono focus:outline-none focus:border-[#e8a020] transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="shrink-0 px-5 py-3 bg-[#e8a020] text-[#080808] font-mono text-xs tracking-[0.15em] uppercase font-bold hover:bg-[#f0b030] transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-4">Streaming</p>
            <ul className="flex flex-col gap-3">
              {socials.slice(0, 3).map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-mono text-sm text-[#a09888] hover:text-[#f0ece4] transition-colors tracking-wider">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-4">Follow</p>
            <ul className="flex flex-col gap-3">
              {socials.slice(3).map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-mono text-sm text-[#a09888] hover:text-[#f0ece4] transition-colors tracking-wider">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[#e8a020] uppercase mb-2">Booking</p>
              <a href="mailto:booking@vael.io" className="font-mono text-sm text-[#a09888] hover:text-[#f0ece4] transition-colors">
                booking@vael.io
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#222018] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display font-black text-2xl text-[#f0ece4] tracking-widest">{ARTIST}</p>
          <p className="font-mono text-xs text-[#3a3530] tracking-[0.1em]">
            © 2026 VAEL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "music", "listen", "tour", "about"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="bg-[#080808] text-[#f0ece4] min-h-full">
      <Nav activeSection={activeSection} />
      <Hero />
      <Marquee />
      <MusicSection />
      <Player />
      <TourSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
