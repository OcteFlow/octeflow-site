import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function OcteFlowSite() {
  const [plans] = useState([
    { name: "Home", price: "$499/mes", desc: "WiFi estable, rápido y sin interrupciones" },
    { name: "Business", price: "$1,299/mes", desc: "Infraestructura profesional para crecer" },
    { name: "Enterprise", price: "Custom", desc: "Soluciones avanzadas y soporte dedicado" }
  ]);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-semibold tracking-tight">OcteFlow</h1>
        <nav className="space-x-6 text-sm">
          <a href="#servicios">Servicios</a>
          <a href="#planes">Planes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* Hero PRO */}
      <section className="text-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white opacity-60" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight relative">
          Tecnología que simplemente funciona
        </motion.h2>

        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto relative">
          Instalamos, optimizamos y protegemos tu red para que tú solo te enfoques en crecer.
        </p>

        <div className="flex justify-center gap-4 relative">
          <Button className="rounded-2xl px-6 py-3">Diagnóstico gratis</Button>
          <Button variant="outline" className="rounded-2xl px-6 py-3">Ver servicios</Button>
        </div>
      </section>

      {/* Confianza */}
      <section className="px-6 py-12 text-center">
        <div className="flex justify-center gap-10 text-sm text-gray-500">
          <div><strong className="text-xl text-gray-900">+100</strong><br/>Clientes</div>
          <div><strong className="text-xl text-gray-900">99.9%</strong><br/>Uptime</div>
          <div><strong className="text-xl text-gray-900">24/7</strong><br/>Soporte</div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-10 text-center">Lo que hacemos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Redes empresariales", desc: "Infraestructura sólida y escalable" },
            { title: "WiFi inteligente", desc: "Cobertura total sin caídas" },
            { title: "Seguridad & CCTV", desc: "Protección en tiempo real" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }}>
              <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">⚡</div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Diferenciador */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-semibold mb-4">¿Por qué OcteFlow?</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          No solo instalamos tecnología. Creamos soluciones que eliminan problemas antes de que existan.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>⚡ Implementación rápida</div>
          <div>🔒 Seguridad avanzada</div>
          <div>📡 Conectividad estable</div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="px-8 py-16">
        <h3 className="text-2xl font-semibold mb-10 text-center">Planes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="rounded-2xl border">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                  <p className="text-3xl mb-2">{plan.price}</p>
                  <p className="text-gray-600 mb-6">{plan.desc}</p>
                  <Button className="rounded-xl w-full">Empezar</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Ventas */}
      <section className="text-center px-6 py-20">
        <h3 className="text-3xl font-semibold mb-4">¿Listo para olvidarte de los problemas de red?</h3>
        <p className="text-gray-600 mb-6">Nosotros nos encargamos de todo.</p>
        <Button className="rounded-2xl px-8 py-4 text-lg">Hablar con un experto</Button>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-6 pb-20">
        <div className="max-w-md mx-auto space-y-4">
          <Input placeholder="Nombre" />
          <Input placeholder="Correo" />
          <Input placeholder="Empresa (opcional)" />
          <Button className="w-full rounded-xl">Enviar solicitud</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 pb-6">
        © {new Date().getFullYear()} OcteFlow
      </footer>

    </div>
  );
}
