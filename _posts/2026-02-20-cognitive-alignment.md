---
layout: post
title: "Teaching Language Models to Grow Up"
date: 2026-02-20 12:00:00
description: BabyLM and psych-inspired batteries that treat LLMs as computational subjects of cognitive science.
tags: [cognition, babylm, developmental-alignment, llm]
categories: [research, cognition]
---

Large language models can mimic adult conversation, but do they develop cognitive abilities the way humans do? Our thread—from **Development of Cognitive Intelligence in Pre-trained Language Models (EMNLP 2024)** to BabyLM workshops and typicality/numerical studies—treats LLMs as computational participants in cognitive science experiments.

## Why developmental alignment matters

- Safety issues often stem from gaps between how models generalize and how humans learn concepts over time.
- Most benchmarks exercise mature competencies; we need probes that mirror human developmental progression.
- When models track human trajectories, we can design curricula that steer them earlier.

## What we’ve built

1. **Developmentally staged corpora** (BabyLM challenge) that restrict training to age-aligned text so abstractions emerge gradually.
2. **Cognitive batteries** testing garden-path recovery, numerical magnitude, and typicality, paired with linking hypotheses that map behavior to model attention.
3. **Theory-practice loop** where cognitive experiments reveal over-reliance on statistics, guiding safer training objectives.

## Takeaways

- Smaller PLMs trained on child-directed data can hit many milestones but still mis-handle compositional syntax without curated scaffolding.
- Typicality and magnitude effects emerge in mid-sized models once prompts match human tasks.
- Garden-path fast recovery hints at over-reliance on surface statistics rather than incremental parsing.

Next steps: public developmental leaderboards, curriculum interventions, and cross-disciplinary collaborations. Join the next BabyLM workshop and help turn “teaching models to grow up” into an empirical science.
