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
          <span class="stat-number">7+</span>
          <span class="stat-label">years experience</span>
        </div>
      </div>

      <p>I build websites and the systems that power them &mdash; payment processing, custom admin tools, booking platforms, and the integrations that tie everything together. I love working with small businesses and nonprofits.</p>
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
      <li><strong>Custom payment &amp; booking systems</strong> &mdash; reservation platforms, donation forms, ticket sales, and secure payment integration</li>
      <li><strong>Custom admin tools &amp; dashboards</strong> &mdash; internal systems built for how your team actually works</li>
      <li><strong>WordPress development</strong> &mdash; custom themes, plugins, and integrations that connect your site to CRMs, email, and payment processors</li>
      <li><strong>Website design &amp; redesign</strong> &mdash; clean, accessible, usable design that serves your visitors and your business</li>
      <li><strong>Security hardening &amp; maintenance</strong> &mdash; monitoring, updates, protection, and someone who knows your system when something breaks</li>
    </ul>
  </section>

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
