const contactUrl =
  process.env.NEXT_PUBLIC_CONTACT_URL ??
  "https://instagram.com/assylturubayeva";

const frictionPoints = [
  {
    number: "01",
    title: "Каждый раз начинать заново",
    text: "Снова объяснять, кто вы, для кого пишете и почему ваш текст не должен звучать как шаблон.",
  },
  {
    number: "02",
    title: "Держать всё в голове",
    text: "Идеи, рубрики, прогрев, CTA, обещания продукта и тон общения зависят только от вашей памяти.",
  },
  {
    number: "03",
    title: "Тратить силы на микрорешения",
    text: "Не на саму экспертизу, а на десятки мелких выборов: тема, формат, начало, структура, визуал, публикация.",
  },
];

const systemLayers = [
  {
    label: "Контекст",
    title: "Знает основу",
    items: ["вашу роль", "аудиторию", "продукты", "голос и запреты"],
  },
  {
    label: "Решения",
    title: "Сохраняет логику",
    items: ["контентные линии", "рубрики", "CTA", "принятые решения"],
  },
  {
    label: "Материалы",
    title: "Готовит работу",
    items: ["идеи", "сценарии", "посты", "карусели и визуал"],
  },
];

const differences = [
  {
    title: "Не один промпт",
    text: "Система собирается вокруг вас и постепенно накапливает рабочий контекст.",
  },
  {
    title: "Не случайный стиль",
    text: "Голос, смысловые ограничения и визуальные правила фиксируются, а не угадываются заново.",
  },
  {
    title: "Не поток контента ради потока",
    text: "Материалы привязаны к задачам блога: доверие, продажи, заявки и развитие продукта.",
  },
  {
    title: "Не чёрный ящик",
    text: "Вы видите логику системы, можете менять правила и сохраняете контроль над финальным результатом.",
  },
];

const stages = [
  {
    step: "1",
    title: "Разбираем основу",
    text: "Фиксируем продукт, аудиторию, голос, сильные смыслы и то, чего в контенте быть не должно.",
  },
  {
    step: "2",
    title: "Собираем систему",
    text: "Настраиваем память, рабочие правила, структуру материалов и нужные сценарии взаимодействия.",
  },
  {
    step: "3",
    title: "Проверяем на реальной работе",
    text: "Создаём контент, замечаем слабые места, уточняем правила и убираем лишние ручные действия.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4.5 10.5 3.2 3.2 7.8-8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="На главную">
          <span className="brand-mark" aria-hidden="true">
            А
          </span>
          <span className="brand-copy">
            <strong>Карманный ИИ-СММщик</strong>
            <span>ИИ-студия Асыл Турубаевой</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#system">Как работает</a>
          <a href="#difference">Отличия</a>
          <a href="#process">Настройка</a>
        </nav>
        <a className="header-cta" href={contactUrl} target="_blank" rel="noreferrer">
          Обсудить проект
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Персональная ИИ-система для блога</p>
          <h1>
            Блог больше не должен <em>полностью держаться</em> на вас.
          </h1>
          <p className="hero-lead">
            Карманный ИИ-СММщик помогает удерживать ваш контекст, превращать
            идеи в материалы и снимать часть ручной работы — без потери голоса,
            смысла и контроля.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#system">
              Посмотреть, как работает
              <ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href={contactUrl}
              target="_blank"
              rel="noreferrer"
            >
              Обсудить настройку
            </a>
          </div>
          <p className="hero-note">
            Для экспертов, наставников, консультантов и владельцев небольших
            проектов, которым блог нужен для доверия, продаж и заявок.
          </p>
        </div>

        <div className="hero-visual" aria-label="Схема работы персональной ИИ-системы">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-card system-card-main">
            <div className="system-card-head">
              <span>Контент-система</span>
              <span className="status-dot">активна</span>
            </div>
            <div className="system-pulse">
              <span>Ваш контекст</span>
              <strong>сохранён и используется</strong>
            </div>
            <div className="memory-lines" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="system-summary">
              <div>
                <span>Голос</span>
                <strong>ваш</strong>
              </div>
              <div>
                <span>Логика</span>
                <strong>единая</strong>
              </div>
              <div>
                <span>Рутина</span>
                <strong>меньше</strong>
              </div>
            </div>
          </div>
          <div className="system-card floating-card floating-card-top">
            <span className="mini-label">Память</span>
            <strong>Карта автора</strong>
            <p>Роль, аудитория, продукты, интонация</p>
          </div>
          <div className="system-card floating-card floating-card-bottom">
            <span className="mini-label">В работе</span>
            <strong>Сценарий → карусель</strong>
            <p>Одна мысль развивается в несколько форматов</p>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Ключевые свойства">
        <span>Помнит ваш голос</span>
        <span>Сохраняет решения</span>
        <span>Собирает контент</span>
        <span>Оставляет контроль вам</span>
      </section>

      <section className="section problem-section">
        <div className="section-intro split-intro">
          <div>
            <p className="eyebrow">Почему блог становится тяжёлым</p>
            <h2>Проблема не только в нехватке идей.</h2>
          </div>
          <p>
            Больше всего выматывает необходимость постоянно заново собирать
            весь процесс: вспомнить контекст, принять десятки решений и вручную
            довести мысль до публикации.
          </p>
        </div>
        <div className="friction-grid">
          {frictionPoints.map((point) => (
            <article className="friction-item" key={point.number}>
              <span className="friction-number">{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section system-section" id="system">
        <div className="section-intro centered-intro">
          <p className="eyebrow">Не генератор, а рабочая система</p>
          <h2>Три слоя, которые работают вместе.</h2>
          <p>
            Сильный результат появляется не из одного удачного запроса, а из
            связки контекста, сохранённых решений и повторяемых процессов.
          </p>
        </div>
        <div className="layers">
          {systemLayers.map((layer, index) => (
            <article className="layer" key={layer.label}>
              <div className="layer-topline">
                <span>{layer.label}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{layer.title}</h3>
              <ul>
                {layer.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="flow-line" aria-hidden="true">
          <span>понимает</span>
          <i />
          <span>связывает</span>
          <i />
          <span>готовит</span>
        </div>
      </section>

      <section className="section difference-section" id="difference">
        <div className="difference-heading">
          <p className="eyebrow">Чем отличается</p>
          <h2>
            Обычный чат отвечает на запрос. Система <em>продолжает вашу работу.</em>
          </h2>
        </div>
        <div className="difference-list">
          {differences.map((item, index) => (
            <article className="difference-item" key={item.title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section audience-section">
        <div className="audience-panel">
          <div className="audience-copy">
            <p className="eyebrow eyebrow-light">Для кого</p>
            <h2>Для тех, кому нужен не «контент любой ценой», а узнаваемый блог.</h2>
            <p>
              Подходит, когда экспертность уже есть, но регулярность, упаковка и
              коммуникация требуют слишком много личного ресурса.
            </p>
          </div>
          <div className="audience-signals">
            <p>Вы узнаете себя, если:</p>
            <ul>
              <li>
                <CheckIcon />
                блог нужен для продаж, доверия и заявок;
              </li>
              <li>
                <CheckIcon />
                вы устали держать весь контентный процесс на себе;
              </li>
              <li>
                <CheckIcon />
                обычный ChatGPT выдаёт «как будто не ваш» текст;
              </li>
              <li>
                <CheckIcon />
                делегировать хочется без постоянного повторного брифинга.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-intro split-intro">
          <div>
            <p className="eyebrow">Как собирается система</p>
            <h2>Сначала понимаем вас. Потом автоматизируем.</h2>
          </div>
          <p>
            Автоматизация до ясной основы лишь быстрее размножает случайные
            решения. Поэтому настройка начинается не с инструментов, а с вашей
            реальной работы и задач блога.
          </p>
        </div>
        <div className="stage-list">
          {stages.map((stage) => (
            <article className="stage" key={stage.step}>
              <span>{stage.step}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="cta-orbit" aria-hidden="true" />
        <p className="eyebrow eyebrow-light">Первый шаг</p>
        <h2>Посмотрим, какую часть вашего блога уже можно снять с ручного управления.</h2>
        <p>
          Без обещаний «автопилота за один вечер». Сначала — разбор процесса,
          затем решение, которое действительно подходит вашей работе.
        </p>
        <a className="button button-light" href={contactUrl} target="_blank" rel="noreferrer">
          Обсудить проект
          <ArrowIcon />
        </a>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark brand-mark-small" aria-hidden="true">
            А
          </span>
          <div>
            <strong>Карманный ИИ-СММщик</strong>
            <span>Продукт ИИ-студии Асыл Турубаевой</span>
          </div>
        </div>
        <div className="footer-links">
          <a href="#system">Как работает</a>
          <a href="#difference">Отличия</a>
          <a href={contactUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p>© {new Date().getFullYear()} Асыл Турубаева</p>
      </footer>
    </main>
  );
}
