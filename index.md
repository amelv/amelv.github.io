---
layout: default
title: Home
---

<div class="homepage">

  <section class="hero">
    <div class="hero-content">
      <h1>Alexa Melvin</h1>
      <p class="tagline">Website Designer & Developer</p>

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

      <p>Specializing in WordPress, custom development, and clean, usable design. Small businesses and nonprofits trust me with everything from redesigns to tricky custom features.</p>
      <p><strong>I'd love to build your website!</strong></p>
      <div class="hero-buttons">
        <a href="/contact/" class="btn">Contact Me</a>
        <a href="/portfolio/" class="btn btn-outline">View Work</a>
      </div>
    </div>
    <div class="hero-profile">
      <img src="/assets/images/profile-pic.jpeg" alt="Alexa Melvin" class="profile-photo" width="140" height="140" loading="eager">
    </div>
  </section>

  <section class="services">
    <h2>My Services</h2>
    <p class="services-intro">I'm a web developer with <strong>6+ years of professional experience</strong>. I handle design, custom code, hosting setup, and clear handoff documentation.</p>
    <p>Services offered include:</p>
    <ul class="services-list">
      <li>Website design and redesign</li>
      <li>WordPress development and maintenance</li>
      <li>Fixing broken layouts, forms, and features</li>
      <li>Managing and updating sites on <strong>WordPress</strong>, <strong>Squarespace</strong>, <strong>Shopify</strong>, and similar platforms</li>
      <li>Performance, accessibility, and mobile improvements</li>
      <li>Ongoing site support and "webmaster" help</li>
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
    <p>I'm available for freelance work, ongoing support, and one-off fixes.</p>
    <a href="/contact/" class="btn">Book a Consultation</a>
  </section>

</div>
