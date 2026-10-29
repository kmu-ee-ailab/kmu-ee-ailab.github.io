---
title: "Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness"
collection: publications
date: 2026-09-01
venue: 'Annual Conference of the International Speech Communication Association (Interspeech)'
excerpt: 'Le Thien Phuc Nguyen, Zhuoran Yu, Khoa Quang Nhat Cao, Yuwei Guo, Tu Ho Manh Pham, Tuan Tai Nguyen, Toan Ngo Duc Vo, Lucas Poon, Tuan Khai Nguyen, **Soochahn Lee**, Yong Jae Lee'
titleurl: 'https://plnguyen2908.github.io/UniTalk-ASD-project-page/index.html'
thumbnail: '/images/publications/2025-01-01-unitalk-towards-universal-active-speake-fig1.png'
htmlurl: 'https://www.isca-archive.org/interspeech_2026/nguyen26b_interspeech.html'
pdfurl: 'https://www.isca-archive.org/interspeech_2026/nguyen26b_interspeech.pdf'
codeurl: 'https://github.com/plnguyen2908/UniTalk-ASD-code'
dataseturl: 'https://huggingface.co/datasets/plnguyen2908/UniTalk-ASD'
bibtex: |
    @inproceedings{nguyen2026revisiting,
      title={Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness},
      author={Nguyen, Le Thien Phuc and Yu, Zhuoran and Cao, Khoa Quang Nhat and Guo, Yuwei and Pham, Tu Ho Manh and Nguyen, Tuan Tai and Vo, Toan Ngo Duc and Poon, Lucas and Nguyen, Tuan Khai and Lee, Soochahn and Lee, Yong Jae},
      booktitle={Proc. Interspeech 2026},
      pages={5971--5980},
      year={2026},
      doi={10.21437/Interspeech.2026-581}
    }
citation_mla: |
    Nguyen, Le Thien Phuc, et al. "Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness." Proc. Interspeech 2026, 2026, pp. 5971-5980, https://doi.org/10.21437/Interspeech.2026-581.
---

**Authors:** Le Thien Phuc Nguyen, Zhuoran Yu, Khoa Quang Nhat Cao, Yuwei Guo, Tu Ho Manh Pham, Tuan Tai Nguyen, Toan Ngo Duc Vo, Lucas Poon, Tuan Khai Nguyen, **Soochahn Lee**, Yong Jae Lee

> **TL;DR:** UniTalk is an active speaker detection benchmark built from diverse real-world video -- underrepresented languages, noisy backgrounds, and crowded multi-speaker scenes -- at a scale on par with AVA. Models that are near-perfect on AVA fall well short of saturation on UniTalk, while models trained on UniTalk generalize better to other in-the-wild datasets.

---

![Figure description](/images/publications/2025-01-01-unitalk-towards-universal-active-speake-fig1.png)
*AVA versus UniTalk. AVA consists largely of old, often dubbed, movies with a single clean speaker. UniTalk spans group interviews, documentaries, variety shows, and other genres across many languages, with multiple simultaneous speakers and background noise.*

## What this paper is about

Active speaker detection (ASD) -- determining who is currently talking in a video -- looks nearly solved on established benchmarks such as AVA. But AVA is built predominantly from old movies, so it has a large domain gap from the video people actually record and share today, and strong AVA scores say little about how models behave in the wild.

## Key idea

UniTalk is a new ASD benchmark built explicitly around challenging real-world conditions: underrepresented languages, noisy backgrounds, and crowded scenes in which several visible people speak concurrently or in overlapping turns. It contains over 44.5 hours of video with frame-level active speaker annotations across 48,693 face tracks and roughly 4 million face crops, with more speakers per frame on average than AVA, ASW, or Talkies. The test set is further divided into language, noise, crowded-scene, and mixed-condition subsets so that failure modes can be diagnosed separately.

## Why it matters

Extensive evaluation shows that state-of-the-art models which are near-perfect on AVA fail to reach saturation on UniTalk, with the largest drops under mixed conditions, so ASD remains far from solved under realistic conditions. Conversely, models trained on UniTalk generalize better than AVA-trained models to modern in-the-wild datasets such as Talkies and ASW. UniTalk thus gives the community a realistic testbed for building active speaker detection systems that hold up in unconstrained settings. The dataset, evaluation code, and pretrained checkpoints are publicly available.

An earlier preprint version of this work was circulated as *UniTalk: Towards Universal Active Speaker Detection in Real World Scenarios* ([arXiv:2505.21954](https://arxiv.org/abs/2505.21954)).
