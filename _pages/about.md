---
permalink: /
title: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

# Welcome to the AILab at Kookmin University School of EE!

Thank you for visiting the home of the AI Lab at the School of Electrical Engineering at Kookmin University. We are striving for technical advancement in artificial intelligence and machine learning, with a special focus on computer vision and applications  of multimodal LLMs. 

Our current research topics include:
- Training and benchmarking Multimodal LLMs
- Multimodal retrieval augmented medical image analysis & diagnosis
- Segmentation and registration of anatomical structures in medical images
- Vascular analysis of retinal images

{% include base_path %}

## 📢 Latest News

<div class="news-list">
  {% for post in site.posts limit:5 %}
    <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
      <h3 class="archive__item-title" itemprop="headline">
        <a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a>
      </h3>
      <p class="page__meta"><i class="fa fa-clock" aria-hidden="true"></i> {{ post.date | date: "%B %d, %Y" }}</p>
      {% if post.excerpt %}
        <div class="archive__item-content" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 160 }}</div>
      {% endif %}
    </article>
  {% endfor %}
</div>

*<a href="{{ '/news/' | relative_url }}">See all news...</a>*

---

{% assign gallery_items = site.gallery | sort: 'order' %}
{% assign latest = gallery_items.first %}
{% if latest.image %}
<div style="margin: 1.5em 0;">
  <a href="{{ latest.url | relative_url }}">
    <img src="{{ latest.image | prepend: base_path }}" alt="{{ latest.title }}" style="width: 100%; border-radius: 8px;">
  </a>
  <p style="text-align: center; font-size: 0.85em; color: var(--global-text-color-light); margin-top: 0.5em;">{{ latest.title }} · <a href="{{ '/gallery/' | relative_url }}">See all photos...</a></p>
</div>
{% endif %}
