import { useState } from "react";

const icons = {
  "Redes Empresariales": (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M12 2a5 5 0 00-5 5v2H5a3 3 0 00-3 3v3h4v-3h2v3h8v-3h2v3h4v-3a3 3 0 00-3-3h-2V7a5 5 0 00-5-5z"/>
    </svg>
  ),

  "CCTV y Videovigilancia": (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M2 10l20-5-5 5 5 5-20-5z"/>
    </svg>
  ),

  "Redes para Negocio": (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  ),

  "Redes en el Hogar": (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
    </svg>
  ),

  "Hogar Inteligente": (
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 3.25 2.5 5.5 2.5 5.5h9S19 12.25 19 9a7 7 0 00-7-7zm-1 17h2v2h-2v-2z"/>
    </svg>
  )
};

export default function CatalogSection({ title, items }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeCategory = (index) => {
    if (index === activeIndex) return;

    setAnimate(false);

    setTimeout(() => {
      setActiveIndex(index);
      setAnimate(true);
    }, 180);
  };

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
              onClick={() => changeCategory(i)}
            >
              <span className="icon">{icons[cat.category]}</span>
              {cat.category}
              {i === activeIndex && <span className="active-indicator" />}
            </div>
          ))}
        </div>

        {/* CONTENIDO */}
        <div className={`catalog-content ${animate ? "fade-in" : "fade-out"}`}>

          <h3 className="catalog-content-title">
            {items[activeIndex].category}
          </h3>

          <div className="catalog-grid">

            {items[activeIndex].items.map((service, i) => (
              <div
                key={i}
                className="catalog-card"
                style={{ animationDelay: `${i * 0.05}s` }}
              >

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
