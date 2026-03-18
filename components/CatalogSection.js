import { useState, useEffect } from "react";

export default function CatalogSection({ title, items }) {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll(".catalog-card-ultra");

    cards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    });
  }, [activeIndex]);

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
              {cat.category}
            </div>
          ))}
        </div>

        {/* CONTENIDO */}
        <div className="catalog-content">

          <h3 className="catalog-content-title">
            {items[activeIndex].category}
          </h3>

          <div className="catalog-ultra-grid">

            {items[activeIndex].items.map((service, i) => (

              <div key={i} className="catalog-card-ultra">

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
