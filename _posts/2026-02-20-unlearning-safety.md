---
layout: post
title: "Beyond the Unlearning Mirage"
date: 2026-02-20 11:00:00
description: Dynamic probes and activation analysis that expose brittle unlearning, paired with watermarking and continual learning.
tags: [safety, unlearning, watermarking, continual-learning]
categories: [research, safety]
---

Most LLM unlearning demos crumble when users rephrase queries, add alias chains, or build multi-hop reasoning paths. "The Unlearning Mirage" makes that brittleness visible by pairing dynamic, model-specific probes with activation-pathway analysis.

## What the framework delivers
1. **Probe generation** that spans single-hop recalls to adversarial multi-hop chains and aliases, all grounded in knowledge elicited from the target model before unlearning.
2. **Activation analysis** showing that single-hop queries usually travel dominant pathways that the unlearning method disrupts, while multi-hop queries find alternate routes that often remain intact.
3. **Automatic alias/paraphrase sweeps** that stress-test whether a supposedly forgotten fact still leaks.

## Complementary defenses
- **Text watermarking taxonomy (NAACL 2025)** clarifies how to prove which model family produced a generation, even after editing or fine-tuning.
- **Power-law continual learning (ECAI 2024)** keeps models plastic while mitigating catastrophic forgetting, offering a softer alternative than hard erasure.

## What practitioners get
- Pip-installable evaluators and leaderboards so every unlearning method can be stress-tested before deployment.
- Roadmaps for pairing unlearning with provenance controls and continual learning recipes.
- Visualizations that expose exactly which prompts still succeed post-unlearning.

Next steps: release activation-visualization tooling, extend to multimodal models, and maintain a living playbook of best practices. If you operate production LLMs, this stack is built for you.
