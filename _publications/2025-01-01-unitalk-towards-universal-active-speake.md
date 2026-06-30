---
title: "Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness"
collection: publications
date: 2025-01-01
venue: 'arXiv preprint arXiv:2505.21954'
excerpt: 'Le Thien Phuc Nguyen, Zhuoran Yu, Khoa Quang Nhat Cao, Yuwei Guo, Tu Ho Manh Pham, Tuan Tai Nguyen, Toan Ngo Duc Vo, Lucas Poon, **Soochahn Lee**, Yong Jae Lee'
htmlurl: 'https://plnguyen2908.github.io/UniTalk-ASD-project-page/index.html'
pdfurl: 'https://arxiv.org/pdf/2505.21954.pdf'
codeurl: 'https://github.com/plnguyen2908/UniTalk-ASD-code'
dataseturl: 'https://huggingface.co/datasets/plnguyen2908/LASER-bench/tree/main'
thumbnail: '/images/publications/2025-01-01-unitalk-towards-universal-active-speake-fig1.png' 
bibtex: |
    @article{nguyen2025revisiting,
      title={Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness},
      author={Nguyen, Le Thien Phuc and Yu, Zhuoran and Cao, Khoa Quang Nhat and Guo, Yuwei and Pham, Tu Ho Manh and Nguyen, Tuan Tai and Vo, Toan Ngo Duc and Poon, Lucas and Lee, Soochahn and Lee, Yong Jae},
      journal={arXiv preprint arXiv:2505.21954},
      year={2025}
    }
citation_mla: |
    Nguyen, Le Thien Phuc, et al. "Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness." arXiv preprint arXiv:2505.21954 (2025).
---

**Authors:** Le Thien Phuc Nguyen, Zhuoran Yu, Khoa Quang Nhat Cao, Yuwei Guo, Tu Ho Manh Pham, Tuan Tai Nguyen, Toan Ngo Duc Vo, Lucas Poon, **Soochahn Lee**, Yong Jae Lee

> **TL;DR:** UniTalk is a challenging new benchmark for active speaker detection that captures real-world conditions -- underrepresented languages, noisy backgrounds, and crowded scenes -- and shows that state-of-the-art models which look near-perfect on older benchmarks still fail to generalize.

---

## What this paper is about

Active speaker detection (ASD) -- figuring out who is currently talking in a video -- looks almost solved on established benchmarks like AVA. But AVA is built largely from old movies, so it has a large domain gap from real-world video, and strong AVA scores don't reflect how models behave in the wild.

## Key idea

The paper introduces UniTalk, a new ASD benchmark dataset built specifically around challenging in-the-wild conditions -- underrepresented languages, noisy backgrounds, and crowded scenes -- at a scale comparable to AVA. Evaluating state-of-the-art models reveals that ASD is far from solved: models that are near-perfect on AVA do not saturate on UniTalk, while models trained on UniTalk generalize better to other in-the-wild datasets such as Talkies and ASW.

## Why it matters

By exposing the generalization and robustness gaps that older, movie-based benchmarks hide, UniTalk gives the community a realistic testbed for building active speaker detection systems that actually hold up in unconstrained, real-world settings.

<!-- TODO: Add key figures from the paper -->
![Figure description](/images/publications/2025-01-01-unitalk-towards-universal-active-speake-fig1.png)
