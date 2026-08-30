'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Compass, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

const capabilities = ['Engineering & design', 'Project management', 'Procurement & supply', 'Construction & installation', 'Commissioning & maintenance', 'HSE & technical support']

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="utility"><div className="container utility-inner"><span>INTEGRATED ENGINEERING SERVICES</span><span className="utility-right"><MapPin size={13} /> Abuja, Nigeria <span className="utility-dot" /> <a href="mailto:Consultingmfy@gmail.com">Consultingmfy@gmail.com</a></span></div></div>
      <header className="site-header"><div className="container nav-inner"><Link className="brand" href="/"><img className="brand-logo" src="/mfy-logo-transparent.png" alt="MFY logo" /><span className="brand-name">MFY Consulting Ltd</span></Link><nav className="desktop-nav" aria-label="Main navigation"><Link href="/#capabilities">Capabilities</Link><Link href="/#approach">Approach</Link><Link href="/#sectors">Sectors</Link><Link href="/about">About MFY</Link><Link className="nav-cta" href="/#contact">Start a conversation <ArrowUpRight size={15} /></Link></nav></div></header>

      <section className="about-hero section section-dark"><div className="container about-hero-inner"><Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link><p className="eyebrow amber">MFY / ABOUT US</p><h1>Engineering with<br /><span>intent.</span></h1><p>We are an integrated oil & gas engineering services company based in Abuja, Nigeria, delivering the technical depth and field capability that critical energy infrastructure demands.</p></div></section>

      <section className="section about-story"><div className="container about-story-grid"><div><p className="eyebrow">01 / OUR STORY</p><h2>Built for the<br /><span>work ahead.</span></h2></div><div className="about-copy"><p className="about-lead">MFY Consulting Ltd brings together engineering expertise, project discipline and practical field knowledge to help clients move confidently from concept to completion.</p><p>Our teams understand the environments in which West African energy projects operate. We pair local presence and responsiveness with globally recognised engineering, project management and quality practices.</p><p>That combination makes us a dependable partner for operators, developers and institutions navigating complex technical, commercial and delivery challenges.</p></div></div></section>

      <section className="section section-dark about-capabilities"><div className="container about-cap-grid"><div><p className="eyebrow amber">02 / WHAT WE DO</p><h2>One partner.<br /><span>Every phase.</span></h2><p className="about-muted">From early-stage definition through execution and lifecycle support, our capabilities are designed to work as one integrated delivery system.</p></div><div className="capability-list">{capabilities.map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><ArrowUpRight size={16} /></div>)}</div></div></section>

      <section className="section principles"><div className="container principles-grid"><div><p className="eyebrow">03 / OUR PRINCIPLES</p><h2>Standards that<br /><span>stay with us.</span></h2></div><div className="principle-items"><article><Compass size={25} /><h3>Practical expertise</h3><p>We turn technical requirements into solutions that can be built, operated and maintained in the real world.</p></article><article><ShieldCheck size={25} /><h3>Safety by design</h3><p>HSE is not an add-on. It is embedded in our planning, engineering, site execution and decision-making.</p></article><article><CheckCircle2 size={25} /><h3>Accountable delivery</h3><p>Clear ownership, transparent communication and disciplined controls keep every interface moving.</p></article></div></div></section>

      <section className="contact"><div className="container contact-inner"><p className="eyebrow amber">04 / LET&apos;S TALK</p><h2>Have a project<br /><em>in mind?</em></h2><p>Tell us where you are going. We will help you map the way there.</p><a className="button button-amber" href="mailto:Consultingmfy@gmail.com">Consultingmfy@gmail.com <ArrowUpRight size={17} /></a></div></section>
      <footer className="footer"><div className="container footer-grid"><div><Link className="brand brand-footer" href="/"><img className="brand-logo" src="/mfy-logo-transparent.png" alt="MFY logo" /><span className="brand-name">MFY Consulting Ltd</span></Link><p className="footer-tag">Integrated oil & gas<br />engineering services.</p></div><div><p className="footer-label">CONTACT</p><a href="mailto:Consultingmfy@gmail.com"><Mail size={14} /> Consultingmfy@gmail.com</a><a href="tel:+2348033779392"><Phone size={14} /> 08033779392</a><a href="tel:+2349077779746"><Phone size={14} /> 09077779746</a></div><div><p className="footer-label">OFFICE</p><p><MapPin size={14} /> B002 Kado Mall,<br />Ahmadu Bello Way, Abuja</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MFY Consulting Ltd. All rights reserved.</span><span>ENGINEERING WITH INTENT</span></div></footer>
    </main>
  )
}

/* eslint-disable react/no-unescaped-entities */
