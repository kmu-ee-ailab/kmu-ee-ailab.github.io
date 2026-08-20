---
layout: single
title: "Vessel Analysis of Retinal Images"
permalink: /research/retinal-vessel-analysis/
author_profile: false
---

The retinal vasculature is a primary biomarker for vision-threatening and systemic disease. Our research develops methods to extract, classify, and assess retinal vessels from fundus and angiography images — combining topology-aware deep learning, multi-modal integration, interactive refinement, and generative modeling to produce vessel maps that are accurate, anatomically consistent, and clinically useful.

## Research directions

- **Structure-aware vessel segmentation.** Beyond pixel-level classification, our models explicitly learn vessel connectivity and multi-scale structure, producing segmentations that preserve the topological integrity of the vascular tree.
- **Artery/vein classification.** Topology-aware and multi-modal approaches that propagate A/V labels along connected vessel segments, fusing fundus and FA evidence for more reliable classification.
- **Multimodal and FA-assisted vessel extraction.** Leveraging registration with fluorescein angiography to supervise fundus-based vessel segmentation at a finer scale than standalone fundus data permits.
- **Interactive and hybrid assessment.** Integrating deep segmentation with interactive editing, graphical modeling, and multimodal prompt-based refinement for precise clinical vessel assessment.
- **Generative modeling for vessel data.** Using diffusion models to synthesize structurally realistic fundus images with paired vessel annotations, addressing data scarcity for rare conditions.
- **Image enhancement for downstream vessel analysis.** Deep learning frameworks that improve fundus image quality — correcting illumination, blur, and artifacts — to make vessel analysis more reliable.

## SERVAL: our retinal vessel assessment platform

Much of this research has been consolidated into **SERVAL** (SEoul Retinal Vessel Assessment Library), a software platform that combines deep learning based vessel segmentation and artery/vein classification with interactive semi-automatic editing and graphical modeling for topological consistency. SERVAL is now available as a **web application** — no installation required:

- **Web application:** [serval.clop.ai](https://serval.clop.ai/)
- **Code:** [github.com/snubhretina/SERVAL](https://github.com/snubhretina/SERVAL)
- **Paper:** [Scientific Reports, 2025](https://www.nature.com/articles/s41598-025-25421-6)

## Related publications

- [Fine-Scale Vessel Extraction in Fundus Images by Registration with Fluorescein Angiography](/publications/2019-01-01-fine-scale-vessel-extraction-in-fundus-i/) — MICCAI, 2019
- [Scale Space Approximation in Convolutional Neural Networks for Retinal Vessel Segmentation](/publications/2019-01-01-scale-space-approximation-in-convolution/) — Computer Methods and Programs in Biomedicine, 2019
- [Deep Vessel Segmentation by Learning Graphical Connectivity](/publications/2019-12-01-deep-vessel-segmentation-by-learning-gra/) — Medical Image Analysis, 2019
- [Multimodal Registration of Fundus Images with Fluorescein Angiography for Fine-Scale Vessel Segmentation](/publications/2020-01-01-multimodal-registration-of-fundus-images/) — IEEE Access, 2020
- [Combining Fundus Images and Fluorescein Angiography for Artery/Vein Classification Using the Hierarchical Vessel Graph Network](/publications/2020-01-01-combining-fundus-images-and-fluorescein/) — MICCAI, 2020
- [Topology-Aware Retinal Artery–Vein Classification via Deep Vascular Connectivity Prediction](/publications/2020-12-31-topology-aware-retinal-artery-vein-class/) — Applied Sciences, 2020
- [Combined Deep Learning of Fundus Images and Fluorescein Angiography for Retinal Artery/Vein Classification](/publications/2022-01-01-combined-deep-learning-of-fundus-images/) — IEEE Access, 2022
- [A Deep Learning-Based Framework for Retinal Fundus Image Enhancement](/publications/2023-03-16-a-deep-learning-based-framework-for-reti/) — PLoS ONE, 2023
- [Generation of Structurally Realistic Retinal Fundus Images with Diffusion Models](/publications/2024-06-17-generation-of-structurally-realistic-ret/) — CVPRW, 2024
- [Multimodal Prompt Sequence Learning for Interactive Segmentation of Vascular Structures](/publications/2025-09-01-multimodal-prompt-sequence-learning-for/) — MICCAI, 2025
- [Improving Retinal Vessel Assessment Precision by Integrating Deep Learning with Interactive Editing and Graphical Modeling](/publications/2025-11-24-improving-retinal-vessel-assessment-prec/) — Scientific Reports, 2025
