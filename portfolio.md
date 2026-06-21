---
layout: page
title: My Work
permalink: /portfolio/
---

<div class="portfolio-grid">
{% assign featured = site.portfolio | where: 'featured', true | sort: 'date' | reverse %}
{% assign regular = site.portfolio | where_exp: 'p', 'p.featured != true' | sort: 'date' | reverse %}
{% for project in featured %}
  <article class="portfolio-card featured-card">
    <div class="card-badge">Featured</div>
    <h2><a href="{{ project.url }}">{{ project.title }}</a></h2>
    <p>{{ project.excerpt | strip_html | truncate: 150 }}</p>
    <div class="card-tags">
      {% for tag in project.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
  </article>
{% endfor %}
{% for project in regular %}
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
