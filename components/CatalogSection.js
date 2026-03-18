export default function CatalogSection({ title, items }) {

  return (
    <section className="page-section gray">

      <h2 className="section-title">{title}</h2>

      {items.map((group, index) => (

        <div key={index} className="catalog-group">

          <h3 className="catalog-category">
            {group.category}
          </h3>

          <div className="catalog">

            {group.items.map((item, i) => (

              <div key={i} className="catalog-block premium">

                <h4>{item.title}</h4>

                <ul>
                  {item.list.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>
  );

}
