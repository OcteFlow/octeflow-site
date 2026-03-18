import { useState } from "react";

const icons = {
  "Redes Empresariales": "🌐",
  "CCTV y Videovigilancia": "📹",
  "Redes para Negocio": "🏪",
  "Redes en el Hogar": "🏠",
  "Hogar Inteligente": "🤖"
};

export default function CatalogSection({ title, items }) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="catalog-ultra">

      <h2 className="section-title">{title}</h2>

      <div className="catalog-ultra-container">

        {/* SIDEBAR */}
        <div className="catalog-sidebar">
          {items.map((cat, i) => (
            <div
              key={i}
              className={`catalog-tab ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            >
              <span className="icon">{icons[cat.category]}</span>
              {cat.category}
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="catalog-content">

          <h3>{items[activeIndex].category}</h3>

          <div className="catalog-grid">

            {items[activeIndex].items.map((service, i) => (

              <div key={i} className="catalog-card">

                <h4>{service.title}</h4>

                <ul>
                  {service.list.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
