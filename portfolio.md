---
layout: page
title: My Work
permalink: /portfolio/
---

<section class="featured-work">
  <div class="featured-work-inner">
{% assign featured = site.portfolio | where: 'featured', true | sort: 'featured_order' %}
{% assign regular = site.portfolio | where_exp: 'p', 'p.featured != true' | sort: 'date' | reverse %}
{% for project in featured %}
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

<section class="portfolio-more">
  <h2>More selected work</h2>
  <p>A few more projects spanning editorial design, content systems, accessibility, and client-facing tools.</p>
</section>

<div class="portfolio-grid">
{% for project in regular %}
  <article class="portfolio-card">
    {% if project.images.size > 0 %}
      <a href="{{ project.url }}" class="card-thumb"><img src="{{ project.images[0] | relative_url }}" alt="{{ project.title }} screenshot" loading="lazy"></a>
    {% else %}
      <a href="{{ project.url }}" class="card-thumb card-thumb--placeholder"><span>Project details available soon</span></a>
    {% endif %}
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
