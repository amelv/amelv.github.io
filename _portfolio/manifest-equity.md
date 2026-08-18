---
title: Full Site Redesign and Recommendation Engine for a Benefits Marketplace
featured: true
featured_order: 1
date: 2026-06-01
images:
  - /assets/images/manifest-healthcare-hero.jpg
tags:
  - WordPress
  - Web Design
  - Gravity Forms
  - Integration
links:
  - title: Visit the website
    url: https://manifestequity.org
  - title: Try the recommendation engine
    url: https://manifestequity.org/plan-results/
---

A full site redesign for Manifest Equity, a nonprofit that connects individuals, families, and businesses with affordable healthcare, workplace learning, and community support. The project included a custom recommendation engine that helps people compare insurance plans that may fit their needs.

## The problem

Manifest Equity had a WordPress site that did not clearly communicate the breadth of their services. The homepage tried to cover healthcare, education, books, and donations all at once, and the layout builder made it hard to maintain. They needed a site that felt as intentional as their mission, along with a way to help visitors compare options and find a plan aligned with their needs.

## The approach

I built a custom WordPress theme using Timber and Tailwind, designed around two audiences: individuals looking for coverage, and businesses offering benefits to their teams. The recommendation engine was the centerpiece, guiding visitors through a focused questionnaire and returning a plan recommendation with pricing based on their responses.

## The site

<figure class="cs-figure">
  <img src="/assets/images/manifest-services-grid.jpg" alt="Homepage services grid showing five offerings" loading="lazy">
  <figcaption>Five services organized within one website.</figcaption>
</figure>

The homepage leads with the mission and routes visitors to the right path: a stats bar at the top, a services grid in the middle, and featured content below. The visual identity uses green accents, warm photography, and a structured layout with clear paths for each audience.

<figure class="cs-figure">
  <img src="/assets/images/manifest-healthcare-steps.jpg" alt="Three steps to coverage that actually fits" loading="lazy">
  <figcaption>The healthcare page explaining enrollment in three steps.</figcaption>
</figure>

The healthcare page explains the value in three steps: tell us who you're covering, browse plans that fit, get covered. Below that, a dual-track section splits the page into Individuals and Families vs. Businesses and Organizations, each with their own pricing and call to action.

## The recommendation engine

The Find My Plan form asks about coverage type (individual, family, or business), situation, insurance interests, top three priorities, state, and carrier preference. It includes about 16 questions and is designed to be completed quickly.

<figure class="cs-figure cs-figure--video cs-figure--phone">
  <video src="/assets/media/manifest-find-my-plan.webm" poster="/assets/images/manifest-find-my-plan-poster.jpg" controls preload="metadata" aria-label="Walking through the Find My Plan form and viewing personalized results"></video>
  <figcaption>The Find My Plan form in action.</figcaption>
</figure>

<figure class="cs-figure">
  <img src="/assets/images/manifest-plan-results.jpg" alt="Personalized plan recommendation results with pricing and coverage details" loading="lazy">
  <figcaption>Plan results with pricing and coverage details.</figcaption>
</figure>

After submission, Gravity Forms passes the entry to a PHP recommendation engine that matches the inputs against a catalog of 74 plans across eight carriers. The documented matching rules weigh the inputs and return a recommended option with pricing, plus alternatives to compare. The results render on a dedicated page and get emailed to the user. Form submissions also flow into Google Sheets and GoHighLevel CRM through webhooks, so the team can manage leads within their existing tools.

The plan catalog is stored locally and refreshed annually from the source data. This approach keeps operating costs predictable and gives the team full control over updates. The engine applies the same documented matching rules to each submission.

## What this shows

<ul class="cs-grid">
   <li class="cs-card"><span class="cs-card-title">Custom recommendation engine</span><p>74 plans matched against form inputs using documented matching rules.</p></li>
   <li class="cs-card"><span class="cs-card-title">Connected lead management</span><p>Form submissions route to Google Sheets and GoHighLevel CRM via webhooks.</p></li>
  <li class="cs-card"><span class="cs-card-title">Dual-audience design</span><p>One platform serving individuals, families, and businesses with separate entry points.</p></li>
</ul>
