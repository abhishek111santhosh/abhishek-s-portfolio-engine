import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Instagram, Download, ArrowRight, Mail,
  Code2, Brain, Smartphone, Palette, Database, Eye, Users, Sparkles, Award,
} from "lucide-react";
import { CursorOrb } from "@/components/CursorOrb";
import { TiltCard } from "@/components/TiltCard";
import { Typewriter } from "@/components/Typewriter";
import { ThemeToggle } from "@/components/ThemeToggle";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhishek Santhosh — AI & Data Science Developer" },
      { name: "description", content: "Portfolio of Abhishek Santhosh, AI & Data Science student, full-stack developer, and creative problem solver from Kuttanad, Alappuzha." },
      { property: "og:title", content: "Abhishek Santhosh — AI & Data Science Developer" },
      { property: "og:description", content: "AI & Data Science portfolio — projects, skills, and certifications." },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    items: [
      { label: "Python", icon: Code2 },
      { label: "C", icon: Code2 },
      { label: "Full-Stack Development", icon: Database },
    ],
  },
  {
    title: "AI & Mobile",
    icon: Brain,
    items: [
      { label: "Flutter", icon: Smartphone },
      { label: "Google ML Kit", icon: Brain },
      { label: "Computer Vision", icon: Eye },
      { label: "Data Science", icon: Database },
    ],
  },
  {
    title: "Creative & Soft Skills",
    icon: Palette,
    items: [
      { label: "Graphic Design", icon: Palette },
      { label: "Video Editing", icon: Sparkles },
      { label: "Digital Branding", icon: Sparkles },
      { label: "Team Strategist", icon: Users },
    ],
  },
];

const projects = [
  {
    title: "Flexion Flow",
    role: "Developer",
    desc: "A tele-rehabilitation application designed to track physical movements in real-time. Built with Flutter and Google ML Kit.",
    tags: ["Flutter", "ML Kit", "Computer Vision"],
  },
  {
    title: "EduVora",
    role: "Architect & Concept Designer",
    desc: "An AI-powered Learning Management System designed for AI-driven personalization.",
    tags: ["AI", "LMS", "Product Design"],
  },
  {
    title: "Lumiere Stories",
    role: "Lead Designer",
    desc: "A creative branding and digital design project featuring dynamic animated sequences and logo design.",
    tags: ["Branding", "Motion", "Identity"],
  },
];

const certs = [
  "be10x AI Tools Workshop",
  "Srishti Campus NASSCOM Participation",
  "Skillo Certificate of Achievement",
  "M-Sigma Certification",
  "Firstbit Certification",
  "Outskill Certification",
  "HP Life Certification",
];

const socials = [
  { icon: Github, href: "https://github.com/abhishek111santhosh", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abhishek-santhosh", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/abhishek_._santhosh", label: "Instagram" },
];

function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96%,980px)]">
      <nav className="glass rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#top" className="font-bold text-lg tracking-tight">
          <span className="text-gradient">A.S.</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 ${className}`}>
      {children}
    </section>
  );
}

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
    </motion.div>
  );
}

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <CursorOrb />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-5 pt-28">
        <div className="absolute inset-0 -z-10 animated-gradient-bg opacity-70" />
        <div className="absolute inset-0 -z-10 bg-background/40" />

        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-8 float-y"
          >
            <div className="glow-ring inline-block rounded-full p-1">
              <img
                src={profileImg}
                alt="Abhishek Santhosh"
                className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient">Abhishek Santhosh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-5 text-lg sm:text-2xl text-muted-foreground min-h-[2em]"
          >
            <Typewriter
              words={[
                "AI & Data Science Student.",
                "Full-Stack Developer.",
                "Creative Problem Solver.",
                "Tech Enthusiast.",
              ]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass rounded-full p-3 hover:scale-110 hover:text-primary transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-accent transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT + EDUCATION */}
      <Section id="about">
        <Heading eyebrow="01 — Introduction" title="About Me" />
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 glass rounded-3xl p-8 leading-relaxed text-muted-foreground">
            I am an AI & Data Science (ADS) student currently in my second year at{" "}
            <span className="text-foreground font-medium">Mentor Engineering College</span>. Hailing
            from <span className="text-foreground font-medium">Kuttanad, Alappuzha</span>, I have a
            strong passion for bridging the gap between complex algorithms and intuitive user
            experiences. Whether I am writing clean Python code, training a computer vision model, or
            designing a digital brand identity, I approach every project with the mindset of a
            developer and a strategist. I thrive in collaborative environments and actively
            participate in tech hackathons like{" "}
            <span className="text-foreground font-medium">AlgoRhythm 2.0</span>.
          </div>
          <div id="education" className="md:col-span-2 glass rounded-3xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Education</p>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold">B.Tech — AI & Data Science</h3>
                <p className="text-sm text-muted-foreground">Mentor Engineering College</p>
                <p className="text-xs text-muted-foreground mt-1">2nd Year · Ongoing</p>
              </div>
              <div className="h-px bg-border" />
              <div>
                <h3 className="font-semibold">Hometown</h3>
                <p className="text-sm text-muted-foreground">Kuttanad, Alappuzha, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <Heading eyebrow="02 — Arsenal" title="Skills & Tools" />
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="glass rounded-3xl p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl bg-primary/15 text-primary p-2">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-medium"
                    >
                      <it.icon className="h-3 w-3 text-primary" />
                      {it.label}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <Heading eyebrow="03 — Selected work" title="Projects" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="glass rounded-3xl p-7 h-full group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    0{idx + 1}
                  </span>
                  <span className="text-xs rounded-full bg-primary/15 text-primary px-2.5 py-1">
                    {p.role}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certs">
        <Heading eyebrow="04 — Recognition" title="Achievements & Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c, idx) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass rounded-2xl p-5 flex items-start gap-3 hover:-translate-y-1 transition-transform"
            >
              <div className="rounded-lg bg-primary/15 text-primary p-2 shrink-0">
                <Award className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium">{c}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT / FOOTER */}
      <section id="contact" className="relative px-5 sm:px-8 pt-16 pb-12">
        <div className="absolute inset-0 -z-10 animated-gradient-bg opacity-40" />
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 sm:p-16">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            <span className="text-gradient">Let's Build Something Together.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Open to internships, collaborations, and creative projects.</p>
          <a
            href="mailto:abhishek@example.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Mail className="h-4 w-4" /> Get in Touch
          </a>
          <div className="mt-8 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-full border border-border p-2.5 hover:text-primary hover:scale-110 transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10">© 2026 Abhishek Santhosh.</p>
      </section>
    </div>
  );
}
