---
layout: single
title: "Analysis of Multimodal LLMs"
permalink: /research/multimodal-llms/
author_profile: false
---

We study the capabilities and limitations of multimodal large language models (MLLMs) across audiovisual, linguistic, and perceptual reasoning tasks. Our work develops benchmarks and diagnostic tools that reveal how well these models integrate signals across modalities, how robust they are in the wild, and whether their reported performance reflects genuine learning or contamination from training data.

## Research directions

- **Benchmarking audiovisual understanding.** Designing benchmarks that test whether MLLMs can jointly exploit visual cues (lips, gestures, scene context) and auditory speech to answer fine-grained questions about human communication.
- **Universal active speaker detection.** Building models that reliably identify who is speaking in cluttered real-world video, handling occlusion, noise, and multi-speaker scenes through multimodal fusion.
- **Contamination and integrity.** Detecting benchmark contamination in vision–language models by perturbing inputs in semantically meaningful ways and measuring how performance degrades relative to genuinely learned capabilities.

## Related publications

- [Revisiting Active Speaker Detection: An In-the-Wild Benchmark for Generalization and Robustness](/publications/2025-01-01-unitalk-towards-universal-active-speake/) — arXiv preprint, 2025
- [Contamination Detection for VLMs using Multi-Modal Semantic Perturbation](/publications/2025-11-05-contamination-detection-for-vlms-using/) — arXiv preprint, 2025
- [See, Hear, and Understand: Benchmarking Audiovisual Human Speech Understanding in Multimodal Large Language Models](/publications/2025-12-01-see-hear-and-understand-benchmarking/) — CVPR (Findings), 2026
