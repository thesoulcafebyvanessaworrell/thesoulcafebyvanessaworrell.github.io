import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main class="page">
    <div class="ambient-shape shape-one" aria-hidden="true"></div>
    <div class="ambient-shape shape-two" aria-hidden="true"></div>

    <section class="card hero reveal">
      <div class="logo-shell">
        <img
          class="brand-logo"
          data-logo
          src="/logo.png"
          alt="The Soul Cafe by Vanessa Worrell logo"
        />
        <div class="logo-fallback" hidden>The Soul Cafe</div>
      </div>
      <p class="tagline">Heaing brewed daily…☕️</p>
      <h1>The Soul Cafe by Vanessa Worrell</h1>
    </section>

    <section class="card reveal delay-1">
      <p>
        The Soul Cafe is a psychotherapy space designed for depth, safety, and
        meaningful change. It was created with the belief that healing happens best
        in environments that feel warm, reflective, and free of judgment.
      </p>
      <p>
        At The Soul Cafe, I work with adolescents and adults navigating anxiety,
        emotional overwhelm, trauma, identity exploration, relationship challenges,
        and life transitions. My approach is trauma informed, evidence based, and
        deeply collaborative. Sessions blend psychological insight with practical
        tools, helping clients build emotional regulation, clarity, and resilience
        in ways that feel sustainable.
      </p>
      <p>
        This is not a space for quick fixes or surface level advice. It is a space
        to slow down, understand patterns, reconnect with yourself, and grow in ways
        that feel aligned and intentional. The Soul Cafe exists to support not just
        symptom relief, but lasting self awareness and inner steadiness.
      </p>
    </section>

    <section class="card social reveal delay-2">
      <h2>Connect</h2>
      <nav class="social-grid" aria-label="Social links">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">Instagram</a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer noopener">WhatsApp</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">Facebook</a>
      </nav>
    </section>
  </main>
`;

const logo = document.querySelector<HTMLImageElement>("[data-logo]");
const logoShell = document.querySelector<HTMLElement>(".logo-shell");
const logoFallback = document.querySelector<HTMLElement>(".logo-fallback");

logo?.addEventListener("error", () => {
  logoShell?.classList.add("missing-logo");
  if (logoFallback) {
    logoFallback.hidden = false;
  }
});
