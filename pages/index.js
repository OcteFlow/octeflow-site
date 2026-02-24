import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function OcteFlowSite() {
  return (
    <div className="min-h-screen bg-[#050a30] text-white font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* CAMBIA ESTE SRC POR TU LOGO */}
          <img src="/logo.png" alt="OcteFlow logo" className="h-10" />
          <span className="text-xl font-semibold">OcteFlow</span>
        </div>
        <a
          href="https://wa.me/5214421396305"
          target="_blank"
          className="bg-[#2ea5e4] px-4 py-2 rounded-xl font-medium hover:opacity-90"
        >
          Contactar
        </a>
      </header>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Conectividad Inteligente para tu Empresa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Redes, WiFi, CCTV y soluciones tecnológicas diseñadas para brindar
          estabilidad, seguridad y crecimiento.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/5214421396305"
            target="_blank"
            className="bg-[#2ea5e4] px-6 py-3 rounded-xl font-medium"
          >
            WhatsApp
          </a>
          <a
            href="tel:+5214421396305"
            className="border border-[#2ea5e4] px-6 py-3 rounded-xl"
          >
            Llamar
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          "Redes Empresariales",
          "CCTV y Seguridad",
          "WiFi Profesional",
        ].map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 p-6 rounded-2xl backdrop-blur"
          >
            <h3 className="text-xl font-semibold mb-3">{service}</h3>
            <p className="text-gray-300">
              Soluciones modernas y confiables adaptadas a tus necesidades.
            </p>
          </motion.div>
        ))}
      </section>

      {/* CONTACTO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/5214421396305"
            target="_blank"
            className="flex items-center gap-2 bg-[#2ea5e4] px-5 py-3 rounded-xl"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          <a
            href="mailto:contacto@octeflow.com"
            className="flex items-center gap-2 border border-white/20 px-5 py-3 rounded-xl"
          >
            <Mail size={18} /> Correo
          </a>

          <a
            href="tel:+5214421396305"
            className="flex items-center gap-2 border border-white/20 px-5 py-3 rounded-xl"
          >
            <Phone size={18} /> Llamar
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 py-6 text-sm">
        © {new Date().getFullYear()} OcteFlow. Todos los derechos reservados.
      </footer>
    </div>
  );
}
