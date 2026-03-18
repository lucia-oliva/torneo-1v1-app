export default function Header() {
  return (
    <header className="hero-header">
      <div className="hero-header__glow hero-header__glow--top" />
      <div className="hero-header__glow hero-header__glow--bottom" />

      <div className="hero-header__content">
        <div className="hero-header__brand-row">
          <div className="hero-header__logo-mark" aria-hidden="true">
            <img
              src="/assets/nova.jpeg"
              alt="NOVA Esports"
              className="hero-header__logo-image"
            />
          </div>

          <h1 className="hero-header__title">
            <span className="hero-header__title-main">NOVA</span>
            <span className="hero-header__title-sub">Esports</span>
          </h1>
        </div>

        <div className="hero-header__divider" />

        <h2 className="hero-header__subtitle">Torneo 1V1</h2>
      </div>
    </header>
  );
}