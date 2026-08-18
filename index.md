---
layout: default
title: Home
---

<div class="homepage">

  <section class="hero">
    <div class="hero-profile">
      <img src="/assets/images/profile-pic.webp" alt="Alexa Melvin" class="profile-photo" width="200" height="200" loading="eager">
      <span class="hero-badge">7+ years of experience</span>
    </div>
    <div class="hero-content">
      <h1>Alexa Melvin</h1>
      <p class="tagline">Websites and systems that make your work easier</p>
      <p class="hero-desc">I build <strong>websites alongside the tools behind them</strong>: payment processing, booking platforms, custom admin tools, and integrations that connect your essential systems. I work with small businesses and nonprofits.</p>
      <div class="hero-stats">
        <span class="hero-stat"><span class="hero-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> Highly rated by clients</span>
        <span class="hero-stat-sep">&middot;</span>
        <span class="hero-stat">7+ years</span>
      </div>
      <div class="hero-buttons">
        <a href="/contact/" class="btn">Start a Project</a>
        <a href="/portfolio/" class="btn btn-outline">See My Work</a>
      </div>
    </div>
  </section>

  <section class="services">
    <h2>Ways I Can Help</h2>
    <ul class="services-list">
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 6h18v12H3V6Zm3 3h5v2H6V9Zm0 4h3v2H6v-2Zm8-1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></svg> <strong>Custom payment &amp; booking systems</strong>: reservation platforms, donation forms, ticket sales, and secure payment integration</li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19V9h4v10H4Zm6 0V5h4v14h-4Zm6 0v-7h4v7h-4Z"/></svg> <strong>Custom admin tools &amp; dashboards</strong>: practical systems tailored to your team’s workflow</li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16v16H4V4Zm3 3v10h10V7H7Zm2 2h6v2H9V9Zm0 4h6v2H9v-2Z"/></svg> <strong>WordPress development</strong>: custom themes, plugins, and integrations that connect your site to customer relationship management tools, email, and payment processors</li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="m15.7 4.3 4 4-9.9 9.9-4.5 1 1-4.5 9.4-10.4Zm-7 11.1 1.9 1.9M14 6l4 4"/></svg> <strong>Website design &amp; redesign</strong>: clear, accessible design that serves your visitors and your business</li>
      <li><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Zm0 4.1L7 9v2c0 3.4 2.1 5.8 5 7 2.9-1.2 5-3.6 5-7V9l-5-1.9Z"/></svg> <strong>Security hardening &amp; maintenance</strong>: monitoring, updates, protection, and reliable support from someone who understands your system</li>
    </ul>
  </section>

  {% assign featured_work = site.portfolio | where: 'featured', true | sort: 'featured_order' %}
  {% if featured_work.size > 0 %}
    <section class="featured-work">
      <div class="featured-work-inner">
        <h2 class="featured-work-title">Featured Work</h2>
        {% for project in featured_work limit:3 %}
          <article class="featured-entry">
            {% if project.images.size > 0 %}
              <a href="{{ project.url }}" class="featured-media"><img src="{{ project.images[0] | relative_url }}" alt="{{ project.title }} screenshot" loading="lazy"></a>
            {% else %}
              <a href="{{ project.url }}" class="featured-media featured-media--placeholder"><span>Project details available soon</span></a>
            {% endif %}
            <div class="featured-body">
              <p class="featured-meta">
                <span>{{ project.date | date: '%Y' }}</span>
                {% if project.tags.size > 0 %}<span aria-hidden="true"> &middot; </span><span>{% for tag in project.tags limit:2 %}{% unless forloop.first %} &middot; {% endunless %}{{ tag }}{% endfor %}</span>{% endif %}
              </p>
              <h3 class="featured-title"><a href="{{ project.url }}">{{ project.title }}</a></h3>
              <p class="featured-excerpt">{{ project.excerpt | strip_html | truncate: 240 }}</p>
              <a href="{{ project.url }}" class="featured-link">See how it came together <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  {% assign featured_reviews = site.data.reviews | where: 'featured', true %}
  {% if featured_reviews.size > 0 %}
    <section class="reviews-section">
      <h2>Client Experiences</h2>
      <div class="reviews-grid">
        {% for review in featured_reviews %}
          <blockquote class="review-card">
            <p class="review-text">{{ review.text }}</p>
            <footer class="review-author">
              <span class="review-name">{{ review.client }}</span>
              {% if review.role %}<span class="review-role">{{ review.role }}</span>{% endif %}
              <span class="review-source">{% if review.source_url %}<a href="{{ review.source_url }}" target="_blank" rel="noopener">via {{ review.source }}</a>{% else %}via {{ review.source }}{% endif %}</span>
            </footer>
          </blockquote>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <section class="cta-section">
    <h2>Let's talk about what you're building</h2>
    <p>I'm available for new projects, ongoing support, and security audits.</p>
    <a href="/contact/" class="btn">Start a Conversation</a>
  </section>

</div>
