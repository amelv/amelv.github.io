---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-page" style="position: relative;">

<div class="contact-meeting">
  <h2>Schedule a Meeting</h2>
  <p>Prefer to talk it through? Book a 30-minute call to talk through your goals and identify the best next step.</p>
  <a href="https://calendar.app.google/qDERXTBNbpS3HPF2A" class="btn" target="_blank" rel="noopener">Book a Meeting</a>
</div>

<hr class="contact-divider">

<div class="contact-form">
  <h2>Or send a message</h2>
  <p>Fill out the form below and I'll reply as soon as I can, usually within two business days.</p>

  <form action="https://formspree.io/f/{{ site.formspree_id }}" method="POST">
    <label for="name">Name <span class="req">*</span></label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email <span class="req">*</span></label>
    <input type="email" id="email" name="email" required>

    <label for="message">How can I help you? <span class="req">*</span></label>
    <textarea id="message" name="message" placeholder="Tell me what you're hoping to build, improve, or untangle, along with any timing or budget details you already know." required></textarea>

    <button type="submit" class="btn">Send Message</button>
  </form>
</div>

</div>
