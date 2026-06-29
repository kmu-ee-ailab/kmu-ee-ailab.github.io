---
title: "Multimodal prompt sequence learning for interactive segmentation of vascular structures"
collection: publications
date: 2025-09-01
venue: 'International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)'
excerpt: '**Jongsoo Lim**, **Soochahn Lee**'
thumbnail: '/images/publications/2025-09-01-multimodal-prompt-sequence-learning-for-fig2.png'
pdfurl: 'https://papers.miccai.org/miccai-2025/paper/5230_paper.pdf'
htmlurl: 'http://dx.doi.org/10.1007/978-3-032-04965-0_32'
codeurl: 'https://github.com/kmu-ee-ailab/mpsl-vessel-seg'
bibtex: |
    @inbook{Lim_2025, title={Multimodal Prompt Sequence Learning for Interactive Segmentation of Vascular Structures}, ISBN={9783032049650}, ISSN={1611-3349}, url={http://dx.doi.org/10.1007/978-3-032-04965-0_32}, DOI={10.1007/978-3-032-04965-0_32}, booktitle={Medical Image Computing and Computer Assisted Intervention – MICCAI 2025}, publisher={Springer Nature Switzerland}, author={Lim, Jongsoo and Lee, Soochahn}, year={2025}, month=sep, pages={337–347} }
citation_mla: |
    Lim, Jongsoo, and **Soochahn Lee**. “Multimodal Prompt Sequence Learning for Interactive Segmentation of Vascular Structures.” Medical Image Computing and Computer Assisted Intervention – MICCAI 2025, Sept. 2025, pp. 337–47. Crossref, https://doi.org/10.1007/978-3-032-04965-0_32.
---

<!-- NOTE: Summary based on title only - verify and expand with actual abstract -->

**Authors:** **Jongsoo Lim**, **Soochahn Lee**

> **TL;DR:** A multimodal prompt sequence learning method for interactive segmentation of vascular structures, combining user interaction cues with learned prompts to iteratively refine vessel delineation.

---

## What this paper is about

Segmenting vascular structures in medical images is notoriously difficult due to their thin, branching, and complex topology. Fully automatic methods often miss fine vessels, so interactive approaches where a user provides guidance are attractive -- but existing interactive segmentation methods are not well-suited to the unique challenges of vasculature.

## Key idea

The paper proposes learning sequences of multimodal prompts (combining different types of user interactions including clicks and text keywords) to progressively guide a segmentation model toward accurate vessel delineation. The sequential learning captures how expert interactions naturally refine segmentation over multiple rounds. The paper also proposes a framework to automatically construct  training data with synthetic multimodal user prompts with corresponding mask sequences.


![Figure description](/images/publications/2025-09-01-multimodal-prompt-sequence-learning-for-fig1.png)
***Overview of the proposed method.** The model incorporates sequences of multimodal text and point prompts to enable interactive segmentation of complex vessel structures, providing enhanced user control throughout the process.*

![Figure description](/images/publications/2025-09-01-multimodal-prompt-sequence-learning-for-fig2.png)
***Model structure of the proposed method.** Mask and point prompt encoders from SAM, together with the text prompt encoder from CLIP are adopted to enable multimodal prompts. We propose a prompt sequence model (PSM) to combine the sequence of multimodal prompts, which conditions the output segmentation, predicted from the decoder of the SAM-HQ. During training, the encoders are kept frozen to maintain generalizability.*

![Figure description](/images/publications/2025-09-01-multimodal-prompt-sequence-learning-for-fig3.png)
*Training process using generated interactive prompt sequence data. Using the generated text and point prompts from the text prompt predictor and point sampling process, the prompt sequence module is trained and the HQ-decoder is fine-tuned.*

## Why it matters

Published at MICCAI 2025, this work addresses a real clinical need: efficient and accurate vessel segmentation that respects the expertise of the human annotator while reducing the manual burden.

![Figure description](/images/publications/2025-09-01-multimodal-prompt-sequence-learning-for-fig4.png)
*Qualitative comparison on a sample image from the HRF dataset. Black, cyan, and magenta pixels denote true-positive, false-negative, and false-positive pixels, respectively.*