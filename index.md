---
layout: default
title: Home
---

<div class="homepage">

  <section class="hero">
    <div class="hero-content">
      <h1>Alexa Melvin</h1>
      <p class="tagline">Your website, built to work</p>

      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span class="stat-label">5-star rating</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-number">7+</span>
          <span class="stat-label">years experience</span>
        </div>
      </div>

      <p>I build websites and the systems that power them: payment processing, custom admin tools, booking platforms, and the integrations that tie everything together. I love working with small businesses and nonprofits.</p>
      <div class="hero-buttons">
        <a href="/contact/" class="btn">Work with Me</a>
        <a href="/portfolio/" class="btn btn-outline">See My Work</a>
      </div>
    </div>
    <div class="hero-profile">
      <img src="/assets/images/profile-pic.jpeg" alt="Alexa Melvin" class="profile-photo" width="140" height="140" loading="eager">
    </div>
  </section>

  <section class="services">
    <h2>My Services</h2>
    <ul class="services-list">
      <li><i class="bi bi-credit-card"></i> <strong>Custom payment &amp; booking systems</strong> : reservation platforms, donation forms, ticket sales, and secure payment integration</li>
      <li><i class="bi bi-speedometer2"></i> <strong>Custom admin tools &amp; dashboards</strong> : internal systems built for how your team actually works</li>
      <li><i class="bi bi-wordpress"></i> <strong>WordPress development</strong> : custom themes, plugins, and integrations that connect your site to CRMs, email, and payment processors</li>
      <li><i class="bi bi-pen"></i> <strong>Website design &amp; redesign</strong> : clean, accessible, usable design that serves your visitors and your business</li>
      <li><i class="bi bi-shield-check"></i> <strong>Security hardening &amp; maintenance</strong> : monitoring, updates, protection, and someone who knows your system when something breaks</li>
    </ul>
  </section>

  {% assign featured_work = site.portfolio | where: 'featured', true | sort: 'date' | reverse %}
  {% if featured_work.size > 0 %}
    <section class="services">
      <h2>Featured Work</h2>
      <div class="portfolio-grid">
        {% for project in featured_work limit:3 %}
          <article class="portfolio-card">
            <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
            <p>{{ project.excerpt | strip_html | truncate: 150 }}</p>
            <div class="card-tags">
              {% for tag in project.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {% assign featured_reviews = site.data.reviews | where: 'featured', true %}
  {% if featured_reviews.size > 0 %}
    <section class="reviews-section">
      <h2>What Clients Say</h2>
      <div class="reviews-grid">
        {% for review in featured_reviews %}
          <blockquote class="review-card">
            <p class="review-text">{{ review.text }}</p>
            <footer class="review-author">
              <strong>{{ review.client }}</strong>
              {% if review.role %}<span class="review-role">{{ review.role }}</span>{% endif %}
              {% if review.source_url %}
                <a href="{{ review.source_url }}" target="_blank" rel="noopener" class="review-source">Read on {{ review.source }}</a>
              {% endif %}
            </footer>
          </blockquote>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <section class="cta-section">
    <h2>Have a project in mind?</h2>
    <p>I'm available for new projects, ongoing support, and security audits.</p>
    <a href="/contact/" class="btn">Book a Consultation</a>
  </section>

</div>
