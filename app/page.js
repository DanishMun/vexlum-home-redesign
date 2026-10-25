import Image from "next/image";
import Header from "./Header";
import { stats, applications, products, steps, news } from "./data";

export default function HomePage() {
  return (
    <>
      {/* Clear note so nobody mistakes this for the real Vexlum site */}
      <div className="concept-bar">
        Concept redesign by Danish Munawar · not the official Vexlum website ·{" "}
        <a href="https://vexlum.com">visit vexlum.com</a>
      </div>

      <Header />

      <main>
        {/* 1. HERO */}
        <section className="hero">
          <Image src="/images/hero.jpg" alt="" fill priority className="hero-image" />
          <div className="container hero-content">
            <p className="eyebrow">VECSEL lasers · Made in Tampere, Finland</p>
            <h1>Precise, powerful lasers for quantum, space and chip-making.</h1>
            <p className="hero-text">
              High-power, low-noise single-frequency lasers across the visible and near-infrared,
              tailored to the exact wavelength your application needs.
            </p>
            <div className="button-row">
              <a href="#products" className="button">Explore products</a>
              <a href="#contact" className="button button-outline">Request a quote</a>
            </div>
          </div>
        </section>

        {/* 2. KEY NUMBERS */}
        <section className="stats">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHERE THE LASERS ARE USED */}
        <section className="section">
          <div className="container">
            <p className="eyebrow eyebrow-dark">Applications</p>
            <h2>Where our lasers make a difference</h2>
            <div className="card-grid four">
              {applications.map((item) => (
                <div key={item.title} className="card app-card">
                  <span className="yellow-line" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PRODUCTS */}
        <section id="products" className="section section-grey">
          <div className="container">
            <p className="eyebrow eyebrow-dark">Products</p>
            <h2>Two platforms, one technology</h2>
            <div className="card-grid two">
              {products.map((product) => (
                <article key={product.name} className="card product-card">
                  <div className="product-image">
                    <Image src={product.image} alt={`${product.name} laser`} fill sizes="(max-width: 800px) 100vw, 50vw" />
                  </div>
                  <div className="product-body">
                    <span className="tag">{product.tag}</span>
                    <h3>{product.name}</h3>
                    <p>{product.text}</p>
                    <ul>
                      {product.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="button-row">
                      <a href="https://vexlum.com/products/" className="button">See full specs</a>
                      <a href={product.datasheet} className="text-link">Download datasheet (PDF)</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. HOW IT IS MADE */}
        <section className="section section-dark">
          <div className="container split">
            <div>
              <p className="eyebrow">Technology</p>
              <h2>From wafer to finished laser, all in Tampere</h2>
              <p className="lead">
                VECSELs combine the wavelength freedom of semiconductor lasers with the power
                handling of thin-disk lasers. We make every part ourselves.
              </p>
            </div>
            <ol className="steps">
              {steps.map((step) => (
                <li key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. NEWS */}
        <section id="news" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow eyebrow-dark">News</p>
                <h2>Latest from Vexlum</h2>
              </div>
              <a href="https://vexlum.com/news/" className="text-link">All news →</a>
            </div>
            <div className="card-grid three">
              {news.map((item) => (
                <a key={item.title} href={item.href} className="card news-card">
                  {/* Simple brand-colour tile instead of a photo */}
                  <div className="news-tile">
                    <span className="news-tile-label">{item.tileLabel}</span>
                    <span className="news-tile-word">{item.tileWord}</span>
                  </div>
                  <div className="news-body">
                    <p className="news-date">{item.date}</p>
                    <h3>{item.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CAREERS */}
        <section id="careers" className="section section-yellow">
          <div className="container split">
            <div className="careers-image">
              <Image src="/images/team.jpg" alt="The Vexlum team" fill sizes="(max-width: 800px) 100vw, 50vw" />
            </div>
            <div>
              <p className="eyebrow eyebrow-dark">Careers</p>
              <h2>We are growing. Grow with us.</h2>
              <p className="lead">
                After our EUR 10 million funding round we are scaling up manufacturing in Tampere and
                growing in the UK and the US. We are happy to hear from talented people in
                engineering, production and software.
              </p>
              <div className="button-row">
                <a href="#contact" className="button button-dark">Send an open application</a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CONTACT */}
        <section id="contact" className="section section-dark contact">
          <div className="container contact-inner">
            <h2>Tell us what your application needs</h2>
            <p className="lead">
              Share the wavelength, power and linewidth you need, and our team will get back to you with a quotation.
            </p>
            <div className="button-row center">
              <a href="https://vexlum.com/products/" className="button">Request a quote</a>
              <a href="mailto:sales@vexlum.com" className="button button-outline">sales@vexlum.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Image src="/images/logo.png" alt="Vexlum" width={140} height={22} className="footer-logo" />
            <p>Novel semiconductor lasers for high-impact applications.</p>
          </div>
          <div>
            <h4>Finland (HQ)</h4>
            <p>Kauhakorvenkatu 53 B<br />33710 Tampere</p>
          </div>
          <div>
            <h4>United States</h4>
            <p>11001 W 120th Ave #400<br />Broomfield, CO 80021</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href="mailto:contact@vexlum.com">contact@vexlum.com</a><br />
              <a href="mailto:techsupport@vexlum.com">techsupport@vexlum.com</a>
            </p>
          </div>
        </div>
        <p className="container footer-note">
          Concept by Danish Munawar. Content and images belong to Vexlum Oy.
        </p>
      </footer>
    </>
  );
}
