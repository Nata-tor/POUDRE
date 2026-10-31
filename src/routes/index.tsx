import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const products = [
  {
    number: "01",
    category: "УХОД",
    title: "Крем",
    description:
      "Прозрачная матовая банка и прохладный голубой акцент. Знак находит место между названием и формой.",
    image: "/poudre-cream.png",
    alt: "Матовая банка крема Poudre с голубой крышкой и ботаническим логотипом",
    imageClass: "product-card__image--cream",
  },
  {
    number: "02",
    category: "ОДЕЖДА",
    title: "Футболка",
    description:
      "Свободный силуэт в мягком пудровом оттенке. Ветвь и название складываются в единый знак.",
    image: "/poudre-portrait.png",
    alt: "Модель в свободной футболке Poudre с ботаническим знаком",
    imageClass: "product-card__image--portrait",
  },
  {
    number: "03",
    category: "БУМАГА",
    title: "Блокнот",
    description:
      "Тёплая обложка, чистая плоскость и та же тонкая графика. Логотип звучит тише — и остаётся заметным.",
    image: "/poudre-notebook.png",
    alt: "Блокнот Poudre с ботаническим логотипом на обложке",
    imageClass: "product-card__image--notebook",
  },
];

function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="site-header__brand" href="#home" aria-label="Poudre — на главную">
          <img src="/poudre-logo.png" alt="" />
        </a>
        <nav className="site-nav" aria-label="Основная навигация">
          <a href="#idea">Идея</a>
          <a href="#collection">Коллекция</a>
          <a href="#author">Автор</a>
        </nav>
        <a
          className="site-header__contact"
          href="https://t.me/Nattoro"
          target="_blank"
          rel="noreferrer"
        >
          Связаться <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__index">01</span>
            КОНЦЕПЦИЯ АЙДЕНТИКИ БРЕНДА
          </p>
          <h1>
            У каждого утра
            <br />
            своё <em>начало.</em>
          </h1>
          <p className="hero__description">
            Poudre — идея марки повседневных предметов. Один ботанический знак объединяет три
            простые формы: уход, одежду и бумагу.
          </p>
          <a className="text-link" href="#collection">
            Смотреть коллекцию <span aria-hidden="true">↓</span>
          </a>
          <div className="hero__signature">
            <span />
            <p>Design by TORnata</p>
          </div>
        </div>

        <figure className="hero__visual">
          <div className="hero__image-frame">
            <img
              src="/poudre-collection.png"
              alt="Первая коллекция Poudre: крем, футболка и блокнот в общей цветовой гамме"
              fetchPriority="high"
            />
            <span className="hero__edition">ÉDITION Nº 01</span>
          </div>
          <figcaption className="hero__caption">
            <span>ТРИ ФОРМЫ. ОДИН ВИЗУАЛЬНЫЙ ЯЗЫК.</span>
          </figcaption>
        </figure>
        <a className="hero__scroll" href="#idea" aria-label="Прокрутить к идее">
          <span />
        </a>
      </section>

      <section className="idea-section" id="idea">
        <div className="idea-section__heading">
          <p className="eyebrow">
            <span className="eyebrow__index">02</span>
            ИДЕЯ ЗНАКА
          </p>
          <h2>
            Маленький знак.
            <br />
            <em>Место для своего начала.</em>
          </h2>
        </div>
        <div className="idea-section__story">
          <figure className="idea-section__logo">
            <img src="/poudre-logo.png" alt="Логотип Poudre с ботаническим знаком" loading="lazy" />
          </figure>
          <div className="idea-section__copy">
            <span className="idea-section__rule" />
            <p>
              Ботаническая линия напоминает о росте и движении. Не диктует, с чего начинать, а
              оставляет пространство для собственного выбора.
            </p>
            <p className="idea-section__note">
              ЛОГОТИП РАЗРАБОТАН ПО МОТИВАМ ЗНАКА НА ИЗОБРАЖЕНИЯХ КОЛЛЕКЦИИ
            </p>
          </div>
        </div>
        <div className="color-story" aria-label="Цвета концепции">
          <p>ЦВЕТА КОЛЛЕКЦИИ</p>
          <span className="color-story__swatch color-story__swatch--powder">
            ПУДРОВЫЙ <span className="color-story__hex">#DCC8B3</span>
          </span>
          <span className="color-story__swatch color-story__swatch--blue">
            ГОЛУБОЙ <span className="color-story__hex">#C5D5D9</span>
          </span>
          <span className="color-story__swatch color-story__swatch--ink">
            ГРАФИТ <span className="color-story__hex">#706F6B</span>
          </span>
        </div>
      </section>

      <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__index">03</span>
              ПЕРВАЯ КОЛЛЕКЦИЯ
            </p>
            <h2>
              Знак в <em>простых формах.</em>
            </h2>
          </div>
          <p className="section-heading__note">
            Один графический мотив —
            <br />
            три разных поверхности.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.number}>
              <figure className={`product-card__image ${product.imageClass}`}>
                <img src={product.image} alt={product.alt} loading="lazy" />
                <figcaption>{product.number} / 03</figcaption>
              </figure>
              <div className="product-card__meta">
                <span>{product.category}</span>
                <span>POUDRE · ÉDITION I</span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="identity-section" aria-labelledby="identity-title">
        <div className="identity-section__card">
          <div className="identity-section__copy">
            <p className="eyebrow">
              <span className="eyebrow__index">04</span>
              СИСТЕМА АЙДЕНТИКИ
            </p>
            <h2 id="identity-title">
              Узнаваемость
              <br />в <em>деталях.</em>
            </h2>
            <p>
              Ботаническая ветвь, спокойная типографика и один голубой оттенок соединяют объекты, не
              перекрывая их характер.
            </p>
            <span className="identity-section__caption">
              ВЕКТОРНЫЙ ЗНАК · ЦВЕТОВАЯ ПАЛИТРА · ПРИМЕНЕНИЕ
            </span>
          </div>
          <figure className="identity-section__image">
            <img
              src="/poudre-collection.png"
              alt="Логотип Poudre применён на креме, футболке и блокноте в составе одной коллекции"
              loading="lazy"
            />
            <figcaption>ОДНА АЙДЕНТИКА — ТРИ НОСИТЕЛЯ</figcaption>
          </figure>
        </div>
      </section>

      <footer className="site-footer" id="author">
        <a className="site-footer__brand" href="#home" aria-label="Poudre — наверх">
          <img src="/poudre-logo.png" alt="" loading="lazy" />
        </a>
        <div className="site-footer__credit">
          <p className="eyebrow">АВТОР ПРОЕКТА</p>
          <p className="site-footer__name">Design by TORnata</p>
          <a href="https://t.me/tornata_dsgn" target="_blank" rel="noreferrer">
            Портфолио <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="site-footer__services">
          <p className="eyebrow">НАПРАВЛЕНИЯ</p>
          <p>UX/UI · Айдентика · Генеративная графика и 3D</p>
          <a href="https://t.me/Nattoro" target="_blank" rel="noreferrer">
            Обсудить проект в Telegram <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="site-footer__disclaimer">
          POUDRE — КОНЦЕПЦИЯ АЙДЕНТИКИ И ПЕРВОЙ КОЛЛЕКЦИИ. ПРОЕКТ ДЛЯ ПОРТФОЛИО.
        </p>
      </footer>
    </main>
  );
}
