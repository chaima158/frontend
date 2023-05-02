export default function Notes({ notes }) {
  return (
    <>
      <section  className="register-form" >
        <h3>Ajouter des notes</h3>
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </>
  )
}
