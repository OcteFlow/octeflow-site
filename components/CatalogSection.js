export default function CatalogSection({ title, items }) {
  return (
    <section className="page-section gray">

      <h2 className="section-title">{title}</h2>

      <div className="catalog">

        {items.map((item, index) => (

          <div key={index} className="catalog-block">

            <h3>{item.title}</h3>

            {item.description && <p>{item.description}</p>}

            {item.list && (
              <ul>
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}
