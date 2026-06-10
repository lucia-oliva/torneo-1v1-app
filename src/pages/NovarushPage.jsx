import { Link } from 'react-router-dom';

export default function NovarushPage() {
  return (
    <div className="app-shell">
      <div className="app-shell__glow" />

      <main className="app-container">
        <section className="novarush-page">
          <p className="novarush-page__eyebrow">Nueva ruta</p>
          <h1 className="novarush-page__title">NovaRush</h1>
          <p className="novarush-page__copy">
            Base lista para empezar a reutilizar paneles, tablas y componentes con otro diseño.
          </p>
          <Link className="novarush-page__link" to="/">
            Volver al torneo 1v1
          </Link>
        </section>
      </main>
    </div>
  );
}
