---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-meeting">
  <h2>Schedule a Meeting</h2>
  <p>Prefer to talk it through? Book a 30-minute call and we'll figure out what you need.</p>
  <a href="https://calendar.app.google/qDERXTBNbpS3HPF2A" class="btn" target="_blank" rel="noopener">Book a Meeting</a>
</div>

<hr class="contact-divider">

<div class="contact-form">
  <h2>Or send a message</h2>
  <p>Fill out the form below and I'll get back to you within a day or two.</p>

  <form action="https://formspree.io/f/{{ site.formspree_id }}" method="POST">
    <label for="name">Name <span class="req">*</span></label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email <span class="req">*</span></label>
    <input type="email" id="email" name="email" required>

    <label for="message">How can I help you? <span class="req">*</span></label>
    <textarea id="message" name="message" placeholder="Tell me about your project, timeline, budget, or any questions..." required></textarea>

    <button type="submit" class="btn">Send Message</button>
  </form>
</div>
