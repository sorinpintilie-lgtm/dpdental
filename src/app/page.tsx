'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Header from '../components/Header'
import StickyNote from '../components/StickyNote'
import Counter from '../components/Counter'
import PromoBar from '../components/PromoBar'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="overflow-x-hidden">
      <PromoBar />
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] opacity-60"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-white z-10 max-w-5xl px-4"
        >
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-medium uppercase tracking-wider rounded-full border border-white border-opacity-30">
              Clinică Dentară Premium
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-7xl font-heading mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Stomatologie <span className="relative inline-block">
              modernă
              <svg className="absolute -bottom-2 left-0 w-full h-1 text-white opacity-60" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path d="M0,2 Q50,0 100,2" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>, cu pași clari. În București, din 2007.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            Consultații, tratamente și estetică dentară într-un mediu calm, cu explicații simple și opțiuni corecte pentru tine.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <motion.a
              href="#programare"
              className="inline-block bg-white text-primary px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Programează consultația
            </motion.a>
            <motion.a
              href="#servicii"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:bg-white hover:text-primary transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Vezi serviciile
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-white bg-opacity-15 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white border-opacity-20">
              Plan de tratament clar
            </div>
            <div className="bg-white bg-opacity-15 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white border-opacity-20">
              Tehnologie modernă
            </div>
            <div className="bg-white bg-opacity-15 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white border-opacity-20">
              Abordare calmă
            </div>
          </motion.div>
          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-center text-white font-semibold mb-6 text-lg">Cum decurge</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-white text-base">
                <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-sm">1</span>
                <span>Consultație și diagnostic</span>
              </div>
              <div className="flex items-center justify-center text-white text-base">
                <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-sm">2</span>
                <span>Plan de tratament personalizat</span>
              </div>
              <div className="flex items-center justify-center text-white text-base">
                <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold text-sm">3</span>
                <span>Tratament și urmărire</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ y }}
        >
          <source src="/Beautiful-Smile-And-Perfect-Teeth-In-Dental-Clinic-4K-2025-12-17-21-47-45-Utc.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ↓
        </motion.div>
      </section>

      {/* Counter Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Counter end={2007} label="Anul Înființării" />
            <Counter end={5000} label="Pacienți Mulțumiți" />
            <Counter end={15} label="Ani Experiență" />
            <Counter end={100} label="Focus pe confort" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="servicii" className="section bg-neutral relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium uppercase tracking-wider rounded-full">
              Ce ne definește
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Filosofia Noastră
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-4 text-gray-900">Tehnologie Modernă</h3>
              <p className="text-gray-600 leading-relaxed">Lucrăm cu protocoale actuale și instrumente care cresc precizia și confortul: de la prevenție, la endodonție sub magnificație.</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-4 text-gray-900">Misiunea Noastră</h3>
              <p className="text-gray-600 leading-relaxed">Să transformăm vizita la dentist într-o experiență predictibilă: știi ce urmează, de ce, și cât durează.</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H13m-3 3h3m-8-8h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-4 text-gray-900">Zâmbet Natural</h3>
              <p className="text-gray-600 leading-relaxed">Zâmbetul tău, fără artificii. Ne plac rezultatele discrete: sănătos, proporționat, natural — și ușor de întreținut.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-medium uppercase tracking-wider rounded-full">
              Tratament complet
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Servicii
          </motion.h2>
          <motion.p
            className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Acoperim tratamentele esențiale, plus soluții estetice și funcționale pe termen lung.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Stomatologie generală', desc: 'Consultații, obturații, plan de tratament pe înțeles.', include: ['Consultație inițială', 'Obturații și tratamente conservatoare', 'Plan de tratament personalizat'], pentru: 'Pentru toți pacienții care doresc să își mențină sănătatea dentară.' },
              { title: 'Protetică & estetică dentară', desc: 'Restaurări care arată natural și se simt corect.', include: ['Coronițe și poduri', 'Fațete dentare', 'Restaurări estetice'], pentru: 'Pentru pacienții care doresc să își îmbunătățească aspectul și funcționalitatea dinților.' },
              { title: 'Ortodonție', desc: 'Aliniere și ghidaj, cu obiective realiste și monitorizare.', include: ['Aparate dentare fixe și mobile', 'Aliniere cu ajutorul tehnologiei moderne', 'Monitorizare constantă'], pentru: 'Pentru copii și adulți care doresc să își corecteze poziția dinților.' },
              { title: 'Endodonție', desc: 'Tratamente de canal cu accent pe precizie și control.', include: ['Tratamente de canal sub microscop', 'Utilizarea tehnologiei moderne pentru precizie', 'Controlul durerii și confortul pacientului'], pentru: 'Pentru pacienții care au nevoie de tratamente de canal.' },
              { title: 'Stomatologie pediatrică', desc: 'Abordare blândă, adaptată copiilor și părinților.', include: ['Consultații și tratamente pentru copii', 'Educare pentru igiena dentară', 'Abordare prietenoasă și fără stres'], pentru: 'Pentru copii și părinții care doresc să își mențină sănătatea dentară.' },
              { title: 'Chirurgie', desc: 'Intervenții planificate, explicații clare, recuperare ghidată.', include: ['Extracții dentare', 'Intervenții chirurgicale planificate', 'Recuperare ghidată și monitorizare'], pentru: 'Pentru pacienții care au nevoie de intervenții chirurgicale.' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white text-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <div className="space-y-3 mb-6">
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Ce include:</p>
                  <ul className="space-y-1">
                    {service.include.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">Pentru cine e potrivit:</p>
                  <p className="text-gray-600 text-sm">{service.pentru}</p>
                </div>
                <motion.a
                  href="#programare"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Programează evaluare
                </motion.a>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl shadow-lg">
              <p className="text-sm font-medium">Evaluare completă + plan de tratament personalizat</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="section bg-neutral relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-medium uppercase tracking-wider rounded-full">
              Povestea noastră
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Despre DP Dental Group
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image src="/female-dentist-with-assistant-working-in-dental-cl-2026-01-07-07-00-33-utc.jpg" alt="Clinica Noastră" width={600} height={400} className="rounded-2xl shadow-2xl w-full h-80 object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading mb-4">Misiunea Noastră</h3>
              <p className="text-gray-600 mb-6">
                DP Dental Group este mai mult decât o clinică dentară. Este locul unde schimbăm lumea pacienților noștri, învățându-i să nu se teamă de durere și să zâmbească încrezători.
              </p>
              <h3 className="text-2xl font-heading mb-4">Valori</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Calitate și profesionalism</li>
                <li>• Tehnologie modernă</li>
                <li>• Îngrijire personalizată</li>
                <li>• Mediu fără stres</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="echipa" className="section bg-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium uppercase tracking-wider rounded-full">
              Experiență & profesionalism
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Echipa Noastră
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Ana Maria Popescu', role: 'Medic stomatolog', img: '/a-sexy-hot-redhead-dentist-woman-taking-care-of-h-2026-01-07-01-18-20-utc.jpg', desc: 'Experiență clinică solidă, focus pe planuri de tratament clare și rezultate durabile.' },
              { name: 'Dr. Mihai Ionescu', role: 'Medic specialist ortodonție', img: '/young-female-dentist-in-dental-office-dentist-at-2026-01-09-06-51-47-utc.jpg', desc: 'Planificare atentă, monitorizare constantă, aliniere cu obiective realiste.' },
              { name: 'Dr. Elena Dumitrescu', role: 'Medic stomatolog pediatru', img: '/female-dentist-with-assistant-working-in-dental-cl-2026-01-07-07-00-33-utc.jpg', desc: 'Abordare blândă, comunicare pe înțelesul copiilor și al părinților.' },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <Image src={member.img} alt={member.name} width={200} height={200} className="rounded-2xl mx-auto border-4 border-gray-100" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-heading mb-2 text-gray-900">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.desc}</p>
                <p className="text-gray-500 text-xs italic">Stil: calm, explică, nu grăbește.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-neutral relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute top-20 right-10 text-9xl text-gray-200 opacity-10 font-serif leading-none">"</div>
        <div className="absolute bottom-20 left-10 text-9xl text-gray-200 opacity-10 font-serif leading-none rotate-180">"</div>
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-accent text-white text-sm font-medium uppercase tracking-wider rounded-full">
              Păreri autentice
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Recenzii
          </motion.h2>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
              <span className="text-gray-600 font-semibold">4.9/5</span>
              <span className="text-gray-500">din 150+ recenzii</span>
            </div>
          </motion.div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {[
              { name: 'Oana Ștefania', img: '/a-closeup-shot-of-a-smiling-woman-showing-her-clea-2026-01-11-08-37-43-utc.jpg', text: '"Zâmbetul pe care îl port cu încredere se datorează lor, celor de la DP Dental."' },
              { name: 'Corina Andrei', img: '/close-up-shot-of-glad-satisfied-woman-being-happy-2026-01-08-05-22-29-utc.jpg', text: '"Cei mai profesioniști oameni cu care am lucrat, cele mai bune rezultate."' },
              { name: 'Sorin Gheorghe', img: '/exuding-radiance-captivating-close-up-of-a-woman-2026-01-06-11-00-32-utc.jpg', text: '"Estetica dentară ridicată la rang de artă."' },
              { name: 'Ramo Drăgan', img: '/woman-s-lips-and-teeth-smile-close-up-2026-01-06-10-56-09-utc.jpg', text: '"În sfârșit, pot să zâmbi și sunt fericită!"' },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-6xl text-accent absolute top-4 left-4 opacity-20">"</div>
                  <Image src={testimonial.img} alt={testimonial.name} width={80} height={80} className="rounded-full mx-auto mb-4 border-4 border-accent" />
                  <div className="text-gold text-2xl mb-4">★★★★★</div>
                  <p className="mb-4 text-lg">{testimonial.text}</p>
                  <cite className="font-semibold text-accent">-{testimonial.name}</cite>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Booking Section */}
      <section id="programare" className="section bg-gradient-to-br from-primary to-accent text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)] opacity-60"></div>
        <div className="container relative z-10">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-medium uppercase tracking-wider rounded-full border border-white border-opacity-30">
              Simplu și rapid
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Programare online
          </motion.h2>
          <motion.p
            className="text-center text-lg text-white mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          >
            Trimite detaliile, iar noi confirmăm telefonic.
          </motion.p>
          <div className="max-w-2xl mx-auto bg-white bg-opacity-10 p-8 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Nume</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Telefon</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium mb-2">Serviciu Dorit</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Stomatologie Generală</option>
                  <option>Ortodonție</option>
                  <option>Protetică</option>
                  <option>Endodonție</option>
                  <option>Stomatologie Pediatrică</option>
                  <option>Chirurgie</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2">Data Preferată</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-white text-primary py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Programează Consultația
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
        <div className="container">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-medium uppercase tracking-wider rounded-full">
              Suntem aici pentru tine
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-heading text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Contact
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading mb-6">Adresa</h3>
              <p className="mb-6 text-lg">Str. Alexandru Constantinescu nr. 48, Sector 1, 011472 București</p>
              <p className="mb-4">Telefon: <a href="tel:0726769991" className="text-primary hover:text-accent font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">0726 769 991</a></p>
              <p className="mb-6">Email: <a href="mailto:contact@dpdental.ro" className="text-primary hover:text-accent font-semibold transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300">contact@dpdental.ro</a></p>
              <p className="text-lg">Găsim locuri de parcare—doar programați!</p>
              <div className="mt-8">
                <h4 className="text-xl font-heading mb-4">Program</h4>
                <p>Luni - Vineri: 9:00 - 19:00</p>
                <p>Sâmbătă: 9:00 - 14:00</p>
                <p>Duminică: Închis</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <a href="#programare" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold text-center mb-8 hover:bg-opacity-90 transition-all">
                Programează-te acum
              </a>
              <div className="bg-neutral p-6 rounded-2xl">
                <h4 className="text-xl font-heading mb-4">Newsletter</h4>
                <p className="mb-4 text-gray-600">Abonează-te pentru sfaturi despre sănătatea dentară și oferte speciale.</p>
                <input type="email" placeholder="Email-ul tău" className="w-full p-3 rounded-lg mb-4 border border-gray-300" />
                <button className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                  Abonează-te
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-heading mb-4">DP Dental Group</h3>
              <p className="text-gray-400">Zâmbete naturale, fără durere. De la 2007.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicii</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicii" className="hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Stomatologie generală</a></li>
                <li><a href="#servicii" className="hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Ortodonție</a></li>
                <li><a href="#servicii" className="hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Protetică</a></li>
                <li><a href="#servicii" className="hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Endodonție</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Str. Alexandru Constantinescu nr. 48</p>
              <p className="text-gray-400">0726 769 991</p>
              <p className="text-gray-400">contact@dpdental.ro</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Urmărește-ne</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DP Dental Group. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}