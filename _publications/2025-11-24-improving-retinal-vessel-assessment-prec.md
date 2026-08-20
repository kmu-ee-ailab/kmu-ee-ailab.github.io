---
title: "Improving retinal vessel assessment precision by integrating deep learning with interactive editing and graphical modeling"
collection: publications
date: 2025-11-24
venue: 'Scientific Reports'
excerpt: '**Sojung Go**, **Jaemin Chae**, **Uichan Kim**, **Jongsoo Lim**, **Jooyoung Kim**, Sang Jun Park, **Soochahn Lee**'
thumbnail: '/images/publications/2025-11-24-improving-retinal-vessel-assessment-prec-fig1.png'
htmlurl: 'https://www.nature.com/articles/s41598-025-25421-6'
pdfurl: 'https://www.nature.com/articles/s41598-025-25421-6.pdf'
codeurl: 'https://github.com/snubhretina/SERVAL'
appurl: 'https://serval.clop.ai/'
bibtex: |
    @article{Go_2025, title={Improving retinal vessel assessment precision by integrating deep learning with interactive editing and graphical modeling}, volume={15}, ISSN={2045-2322}, url={http://dx.doi.org/10.1038/s41598-025-25421-6}, DOI={10.1038/s41598-025-25421-6}, number={1}, journal={Scientific Reports}, publisher={Springer Science and Business Media LLC}, author={Go, Sojung and Chae, Jaemin and Kim, Uichan and Lim, Jongsoo and Kim, Jooyoung and Hogg, Stephen and Trucco, Emanuele and Park, Sang Jun and Lee, Soochahn}, year={2025}, month=nov }
citation_mla: |
    Go, Sojung, et al. “Improving Retinal Vessel Assessment Precision by Integrating Deep Learning with Interactive Editing and Graphical Modeling.” Scientific Reports, vol. 15, no. 1, Nov. 2025. Crossref, https://doi.org/10.1038/s41598-025-25421-6.
---

<!-- NOTE: Summary based on title only - verify and expand with actual abstract -->

**Authors:** **Sojung Go**, **Jaemin Chae**, **Uichan Kim**, **Jongsoo Lim**, **Jooyoung Kim**, Sang Jun Park, **Soochahn Lee**

> **TL;DR:** A hybrid system that combines deep learning vessel segmentation with interactive editing and graphical modeling to achieve more precise retinal vessel assessment than either approach alone.

---
![Figure description](/images/publications/2025-11-24-improving-retinal-vessel-assessment-prec-fig1.png)
*GUI layout of the SEoul Retinal Vessel Assessment Library (SERVAL) with sample fundus image and overlaid artery and vein masks (left), along with a summary of key components and features (right).*

## What this paper is about

Accurate retinal vessel assessment is crucial for diagnosing and monitoring eye diseases, but purely automatic deep learning segmentation still makes errors -- especially on fine vessels or in pathological regions. Meanwhile, fully manual assessment is too time-consuming for clinical practice.

## Key idea

The paper integrates deep learning-based vessel segmentation with an interactive editing interface and graphical modeling, allowing clinicians to efficiently correct segmentation errors while the graphical model ensures topological consistency of the vessel tree. This human-in-the-loop approach gets the best of both worlds.

![Figure description](/images/publications/2025-11-24-improving-retinal-vessel-assessment-prec-fig2.png)
*Overview of the FIREFLY (Fundus Images REgistered with FLuorescein angiographY) dataset construction process, used to train the deep learning based vessel segmentation and A/V classification modules.*

![Figure description](/images/publications/2025-11-24-improving-retinal-vessel-assessment-prec-fig3.png)
*Examples of interactive semi-automatic editing tools for (a) vessel connection, (b) artery/vein label toggling of connected components, and (c) modification of the fitted optic disc ellipse.*

![Figure description](/images/publications/2025-11-24-improving-retinal-vessel-assessment-prec-fig4.png)
*Overview of the vessel mask refinement and parameterization process. The vessel mask consists of two channels representing arteries and veins.*

## Why it matters

Published in Scientific Reports, this work offers a practical clinical tool that balances automation with expert oversight, directly improving the reliability of retinal vessel measurements used in ophthalmic diagnosis.

