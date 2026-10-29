---
title: "DocHop: Benchmarking Out-of-domain Multi-hop Reasoning in Information-Dense Documents"
collection: publications
date: 2026-07-01
venue: 'International Conference on Machine Learning (ICML)'
excerpt: 'Zhuoran Yu, Le Thien Phuc Nguyen, Jaden Park, Xinyi Gu, Zexue He, **Soochahn Lee**, Rogerio Feris, Yong Jae Lee'
titleurl: 'https://www.zhuoranyu.com/dochop-page/'
thumbnail: '/images/publications/2026-07-01-dochop-benchmarking-out-of-domain-multi-fig1.png'
htmlurl: 'https://icml.cc/virtual/2026/poster/64260'
pdfurl: 'https://arxiv.org/pdf/2609.02059'
codeurl: 'https://github.com/ZhuoranYu/dochop-vlmevalkit'
dataseturl: 'https://huggingface.co/datasets/zhuoranyu336/dochop'
bibtex: |
    @inproceedings{yu2026dochop,
      title={DocHop: Benchmarking Out-of-domain Multi-hop Reasoning in Information-Dense Documents},
      author={Yu, Zhuoran and Nguyen, Le Thien Phuc and Park, Jaden and Gu, Xinyi and He, Zexue and Lee, Soochahn and Feris, Rogerio and Lee, Yong Jae},
      booktitle={Proceedings of the 43rd International Conference on Machine Learning (ICML)},
      year={2026}
    }
citation_mla: |
    Yu, Zhuoran, et al. "DocHop: Benchmarking Out-of-domain Multi-hop Reasoning in Information-Dense Documents." Proceedings of the 43rd International Conference on Machine Learning (ICML), 2026.
---

**Authors:** Zhuoran Yu, Le Thien Phuc Nguyen, Jaden Park, Xinyi Gu, Zexue He, **Soochahn Lee**, Rogerio Feris, Yong Jae Lee

> **TL;DR:** DocHop is a benchmark of 1,876 document-style images that pair narrative text with multiple charts, requiring multimodal LLMs to work out from the text which entities a question refers to before gathering and aggregating evidence across the charts. Human annotators exceed 90% accuracy, while the best model evaluated in the paper reaches only about 60%.

---

![Figure description](/images/publications/2026-07-01-dochop-benchmarking-out-of-domain-multi-fig1.png)
*An example from DocHop. A stochastically sampled multi-hop reasoning trace (left) is instantiated with concrete entities, metrics, and thresholds (middle) and rendered into a narrative document interleaved with charts (right). The narrative spells out the compositional constraints and assigns a semantic reference label ("Platinum Tier Night Service") to the entities that satisfy them. The question refers to this label rather than naming the entities, so a model must resolve the targets from the document context and then aggregate the right numbers from the charts.*

## What this paper is about

Multimodal large language models (MLLMs) now do well on chart question answering and document understanding when each is tested in isolation. Real documents, however, combine the two: a report explains in prose which companies, hospitals, or regions satisfy certain conditions, while the numbers needed to answer a question are spread across several charts. Existing benchmarks leave a key capability underexplored -- whether a model can use the textual context to determine how chart evidence should be selected, interpreted, and aggregated.

## Key idea

DocHop is built with a logic-first generation pipeline. Each instance starts from a symbolic reasoning trace -- a tree of filtering constraints that may be combined with AND/OR operators -- which is verbalized into a document narrative, while charts provide the corresponding data values. Questions are grounded on a semantic reference label defined in the narrative instead of explicit entity names, forcing the model to first resolve the relevant entities from context and only then retrieve or aggregate evidence across multiple charts. Because the pipeline is stochastic and symbolic, reasoning depth and visual density (the number of charts per document) are directly controllable. The benchmark covers 1,876 examples across six task categories: value retrieval, counting, numeric reasoning, ranking, hypothetical reasoning, and fact checking.

![Figure description](/images/publications/2026-07-01-dochop-benchmarking-out-of-domain-multi-fig2.png)
*The DocHop data generation pipeline. An LLM curates a metadata pool of topics, entity names, metrics, and timestamps; chart configurations are sampled from this pool; a multi-hop reasoning trace is stochastically constructed over the sampled charts; an LLM then generates constraint-satisfying chart tables and a narrative that verbalizes the trace; and finally a semantic reference label and task-specific question-answer pairs are instantiated and rendered with the charts into a single-page document image.*

## Why it matters

Evaluating a wide range of proprietary and open-source MLLMs reveals a substantial gap to human performance: annotators achieve over 90% accuracy, while the best model reaches only 60.18%. Reasoning-enhanced models consistently do better, but their accuracy degrades as the reasoning trace gets deeper or the document contains more charts. DocHop therefore provides a controlled testbed for the kind of integrated chart-context reasoning that current multimodal models still struggle with. The dataset, evaluation code, and a live leaderboard are publicly available on the project page.
