export default function UseCasesSection({ title, cases }) {

  return (

    <section className="usecases">

      <h2 className="section-title">{title}</h2>

      <div className="usecases-grid">

        {cases.map((item, index) => (

          <div key={index} className="usecase-card">

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>

  );

}
