---
title: Modernizing a Restaurant Reservation System Without Interrupting Service
featured: true
featured_order: 2
date: 2026-08-17
images:
  - /assets/images/nordic-restaurant.png
tags:
  - Laravel
  - WordPress
  - Forms
  - Admin
  - Restaurant
  - Payment Integration
links:
  - title: Visit the website
    url: https://thenordic.com
---

A reservation and payment system for The Nordic, a popular restaurant serving large seasonal crowds in Rhode Island. Over 14 months, I inherited a codebase with substantial duplication, removed and consolidated 138,000 lines of obsolete code, built a new Laravel admin from scratch, and launched reservation forms that now process $1.22 million in revenue.

<div class="cs-stats">
  <span class="cs-stat"><span class="cs-stat-value">2,543</span><span class="cs-stat-label">reservations in 4.5 months</span></span>
  <span class="cs-stat"><span class="cs-stat-value">$1.22M</span><span class="cs-stat-label">revenue processed</span></span>
  <span class="cs-stat"><span class="cs-stat-value">99.99%</span><span class="cs-stat-label">system reliability</span></span>
</div>

## The problem

The Nordic runs a **$145-per-seat seafood buffet** in Charlestown, Rhode Island, with hundreds of reservations a day during peak season and bus tour contracts worth thousands each. The reservation system needed to remain dependable during high-volume service and peak-season demand.

When I took over in June 2025, the codebase was a WordPress site with multiple custom PHP applications added incrementally over several years. The project had no Git history or local development environment, and credentials were stored directly in numerous files. Entire reservation apps had been copied so many times that the duplicated applications required the same fixes to be applied repeatedly.

The system worked, but maintaining it required care. In parts of the codebase, ownership and original purpose were unclear.

## Stabilizing first

The first three months focused primarily on stabilizing existing functionality. I addressed date-picker failures, duplicate entries, payment errors, and certificate renewals while learning the system before changing anything.

**The philosophy was simple:** keep working code working, fix what is broken, do not rewrite until you understand *why* it broke.

## The decision to rebuild

After stabilizing, I had two options: keep patching or build a new admin. The duplication problem made the choice clear. Payment workflows needed stronger visibility and centralized administration.

<div class="cs-comparison">
  <div class="cs-comparison-col">
    <p class="cs-comparison-label">Before</p>
    <ul class="cs-comparison-list">
      <li>WordPress + custom PHP apps</li>
      <li>Multiple servers, duplicated logic</li>
      <li>No git, no environment variables</li>
      <li>Credentials hardcoded across files</li>
      <li>Large group on separate server</li>
    </ul>
  </div>
  <div class="cs-comparison-col">
    <p class="cs-comparison-label">After</p>
    <ul class="cs-comparison-list">
      <li>WordPress + <code>Gravity Forms</code> (child theme)</li>
      <li>Laravel admin + API (<code>Nordic Enjoy</code>)</li>
      <li>One unified admin for all booking types</li>
      <li>Docker, MySQL 8, and version control throughout development</li>
      <li>Consolidated onto single infrastructure</li>
    </ul>
  </div>
</div>

I built **Nordic Enjoy**, a new Laravel admin: Laravel 12, PHP 8.4, AdminLTE, Tailwind, MySQL 8, Docker from day one. Over eight months it grew into a full management platform, *reservations, lakeside dining, group contracts, events, dashboards, financial reports.* The dashboard was redesigned five times, each iteration based on what the operations team actually used.

<figure class="cs-figure">
  <img src="/assets/images/nordic-admin-dashboard.jpg" alt="Nordic Enjoy admin dashboard showing this weekend's reservations across all booking types" loading="lazy" width="1600" height="986">
  <figcaption>Admin dashboard: reservations across all booking types at a glance.</figcaption>
</figure>

<figure class="cs-figure">
  <img src="/assets/images/nordic-admin-events.jpg" alt="Events management page in Nordic Enjoy admin" loading="lazy">
  <figcaption>Events and group bookings management.</figcaption>
</figure>

<figure class="cs-figure">
  <img src="/assets/images/nordic-admin-large-group.jpg" alt="Large group reservations report" loading="lazy">
  <figcaption>Large group reservations report.</figcaption>
</figure>

## Security

Some parts of this work aren't something I can detail publicly. If you'd like to know more about how I approached securing a payment system that processes customer transactions, [start a conversation](/contact/).

## New forms: April 1, 2026

The largest release was the new Sunday reservation form: a complete reservation and payment system with secure payment processing using tokenized card data. Since launch:

- **2,543 reservations** processed
- **$1.22 million** in revenue

<figure class="cs-figure">
  <img src="/assets/images/nordic-sunday-form.jpg" alt="Sunday reservation form showing date picker and party size selection" loading="lazy" width="1600" height="1200">
  <figcaption>Sunday reservation form: date selection, party size, and payment in one flow.</figcaption>
</figure>

<figure class="cs-figure cs-figure--video">
  <video src="/assets/media/nordic-reservation-flow.webm" poster="/assets/images/nordic-reservation-flow-poster.jpg" controls preload="metadata" aria-label="Walking through the mobile Sunday reservation form"></video>
  <figcaption>Mobile reservation flow: filling out the Sunday reservation form.</figcaption>
</figure>

<figure class="cs-figure cs-figure--video">
  <video src="/assets/media/nordic-admin-received.webm" poster="/assets/images/nordic-admin-received-poster.jpg" controls preload="metadata" aria-label="How the reservation appears in the admin dashboard"></video>
  <figcaption>How the reservation appears in the admin.</figcaption>
</figure>

## What this shows

<ul class="cs-grid">
   <li class="cs-card"><span class="cs-card-title">Revenue-critical infrastructure</span><p>$1.22 million processed in 4.5 months, with four months left in the season.</p></li>
   <li class="cs-card"><span class="cs-card-title">Systematic cleanup</span><p>138,000 lines of obsolete code removed through a documented audit, validated against the live system.</p></li>
   <li class="cs-card"><span class="cs-card-title">Gradual migration</span><p>New systems were built alongside the existing platform without interrupting restaurant operations.</p></li>
   <li class="cs-card"><span class="cs-card-title">Production payment systems</span><p>The system supports payment processing and customer data in active production use. Some details are available on request.</p></li>
</ul>
