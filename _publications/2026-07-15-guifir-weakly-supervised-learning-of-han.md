---
title: "GuiFiR: Weakly-Supervised Learning of Hand Pose Estimation for Guitar Finger Reading"
collection: publications
date: 2026-07-15
venue: 'IEEE Access'
excerpt: '**Subin An**, **SeungEun Chung**, **Minyoung Park**, **Soochahn Lee**'
thumbnail: '/images/publications/2026-07-15-guifir-weakly-supervised-learning-of-han-fig1.png'
htmlurl: 'https://ieeexplore.ieee.org/document/11611142'
pdfurl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11611142'
codeurl: 'https://github.com/kmu-ee-ailab/guifir_dataset'
bibtex: |
    @article{an2026guifir,
      title={GuiFiR: Weakly-Supervised Learning of Hand Pose Estimation for Guitar Finger Reading},
      author={An, Subin and Chung, Seungeun and Park, Minyoung and Lee, Soochahn},
      journal={IEEE Access},
      volume={14},
      pages={113417--113427},
      year={2026},
      month=jul,
      publisher={IEEE},
      doi={10.1109/ACCESS.2026.3713562}
    }
citation_mla: |
    An, Subin, et al. "GuiFiR: Weakly-Supervised Learning of Hand Pose Estimation for Guitar Finger Reading." IEEE Access, vol. 14, 2026, pp. 113417-113427, https://doi.org/10.1109/ACCESS.2026.3713562.
---

**Authors:** **Subin An**, **SeungEun Chung**, **Minyoung Park**, **Soochahn Lee**

> **TL;DR:** We introduce the problem of *guitar finger reading* -- estimating which finger presses which string on which fret from an image -- and propose GuiFiR, a weakly-supervised framework that jointly estimates hand and guitar fretboard pose, trained with strongly-annotated synthetic composites and real videos supervised by audio-derived tablature.

---
![Figure description](/images/publications/2026-07-15-guifir-weakly-supervised-learning-of-han-fig1.png)
*We propose GuiFiR, a method for hand pose estimation for guitar playing hands. We provide explicit modeling of the guitar fretboard, which is not included in existing general methods.*

## What this paper is about

Current hand pose estimation methods, even those explicitly designed to model object interactions, cannot estimate finger positions on a guitar fretboard from an image. Doing so requires jointly estimating the poses of both the hand and the fretboard, along with the precise position of the fingertips within the fretboard grid -- but no dedicated datasets exist for this task, and dense annotation of all fretboard grid points and finger joints would be prohibitively expensive.

## Key idea

GuiFiR adopts a weakly-supervised learning approach that draws on two complementary supervision signals. First, GuiFiR-Synth provides strong supervision through synthetic composite images, where annotations from a small set of template images are propagated to a large set of composites at low cost. Second, GuiFiR-Vid provides weak supervision from real guitar playing videos using tablature -- a sparse signal indicating which fret is pressed on each string -- with pseudo-GT tablature automatically generated from audio by a customized TabCNN. The fretboard is modeled as a dense grid of 126 semantically-indexed 2D landmarks, and a Hungarian-matching-based tablature loss aligns predicted fingertips with the corresponding fret positions.

## Why it matters

GuiFiR consistently improves hand pose estimation accuracy on guitar playing videos regardless of the baseline method (MediaPipe, OpenPose, WiLoR, HaMeR), while also producing accurate fretboard estimates. Combined with audio-based transcription, it could enhance automatic tablature transcription and serve as a valuable learning resource for guitar students. The GuiFiR dataset resources are publicly available.
