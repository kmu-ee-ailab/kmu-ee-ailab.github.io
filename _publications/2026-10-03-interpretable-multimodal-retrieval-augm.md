---
title: "Interpretable Multimodal Retrieval Augmented Diagnosis for Breast Ultrasound with Multinational Clinical Validation and Reader Study"
collection: publications
date: 2026-10-03
venue: 'npj Digital Medicine'
excerpt: 'Han Jang, **Subin An**, Sunghyun Jung, Hye Ji, Miran Kim, **Soochahn Lee**, Kyu Sung Choi, Su Min Ha'
titleurl: 'https://ailab.kookmin.ac.kr/B-RAD-project-page/'
thumbnail: '/images/publications/2026-10-03-interpretable-multimodal-retrieval-augm-fig1.png'
htmlurl: 'https://www.nature.com/articles/s41746-026-03272-3'
pdfurl: 'https://www.nature.com/articles/s41746-026-03272-3.pdf'
codeurl: 'https://github.com/snuh-rad-aicon/B-RAD'
dataseturl: 'https://huggingface.co/datasets/Subin94/B-RAD-Det-Dataset'
bibtex: |
    @article{jang2026brad,
      title={Interpretable multimodal retrieval augmented diagnosis for breast ultrasound with multinational clinical validation and reader study},
      author={Jang, Han and An, Subin and Jung, Sunghyun and Ji, Hye and Kim, Miran and Lee, Soochahn and Choi, Kyu Sung and Ha, Su Min},
      journal={npj Digital Medicine},
      year={2026},
      month=oct,
      publisher={Nature Publishing Group},
      doi={10.1038/s41746-026-03272-3}
    }
citation_mla: |
    Jang, Han, et al. "Interpretable Multimodal Retrieval Augmented Diagnosis for Breast Ultrasound with Multinational Clinical Validation and Reader Study." npj Digital Medicine, 2026, https://doi.org/10.1038/s41746-026-03272-3.
---

**Authors:** Han Jang, **Subin An**, Sunghyun Jung, Hye Ji, Miran Kim, **Soochahn Lee**, Kyu Sung Choi, Su Min Ha

> **TL;DR:** B-RAD reads a breast ultrasound image the way a radiologist does -- it retrieves BI-RADS-matched reference cases, localizes the lesion, and then assigns the BI-RADS category -- and it learns the image-text alignment it needs from unpaired data. Validated on 8,311 images from eleven cohorts in seven countries, it reached a biopsy-triage AUROC of 0.952 on an independent hospital cohort without fine-tuning, and in a four-reader study it raised reader accuracy and inter-reader agreement.

---

![Figure description](/images/publications/2026-10-03-interpretable-multimodal-retrieval-augm-fig1.png)
*Overview of B-RAD. An input image and an MLLM-generated pseudo-report query a BI-RADS-aware corpus. The retrieved exemplars guide few-shot lesion detection, the detected box prompts a segmentation foundation model, and the resulting region of interest steers the vision encoder for region-aware BI-RADS classification.*

## What this paper is about

Breast ultrasound is central to breast cancer diagnosis, but Breast Imaging Reporting and Data System (BI-RADS) assessment suffers from substantial inter-observer variability, and existing deep learning models for ultrasound remain opaque. Multimodal large language models promise interpretable, report-based reasoning, yet paired image-report data are scarce in this domain, so the visual-semantic alignment such models learn is weak.

## Key idea

B-RAD is a BI-RADS-aware retrieval-augmented diagnosis framework that mirrors the radiologist workflow of retrieving exemplars, localizing the lesion, and determining the BI-RADS category. Its retrieval module learns BI-RADS-aware image-text alignment from *unpaired* data by jointly minimizing cross-modal mismatch and ordinal prediction error, so cases that look alike are also alike in category. The retrieved exemplars then serve as support examples for few-shot detection of the lesion together with its margin and posterior acoustic features, and the detected region prompts a segmentation foundation model. Finally, the segmented mask drives a training-free foveal attention mechanism that focuses the classifier on the lesion when predicting BI-RADS 2 through 5. Each stage exposes its evidence -- the retrieved references with known diagnoses, the localized lesion, and the attention it received -- so a reader can see why a category was assigned.

![Figure description](/images/publications/2026-10-03-interpretable-multimodal-retrieval-augm-fig2.jpg)
*Top-5 retrieval results for (a) a BI-RADS 2 query and (b) a BI-RADS 5 query. B-RAD-CLIP returns references that match the query in both BI-RADS category and lexicon descriptors (green), whereas general and biomedical CLIP baselines frequently return category-mismatched cases (red).*

## Why it matters

B-RAD was validated on eleven cohorts from seven countries totaling 8,311 images, spanning internal validation and three external cohorts including an independent institutional cohort. On that institutional cohort the full pipeline reached a biopsy-triage AUROC of 0.952 without any fine-tuning, outperforming existing vision-language models. In a four-reader study, B-RAD assistance improved accuracy for every reader, raised inter-reader agreement from moderate to substantial, and reduced missed malignancies. Retrieval-augmented diagnosis can thus narrow the expertise gap between readers and support accessible breast cancer screening in resource-limited settings. Code, checkpoints, and an interactive demo are publicly available.
