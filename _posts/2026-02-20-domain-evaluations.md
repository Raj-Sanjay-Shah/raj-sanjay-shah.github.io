---
layout: post
title: "Domain-Specific Evaluations With Real Consequences"
date: 2026-02-20 13:00:00
description: Benchmarks for finance, medicine, and cybersecurity that mirror the consequences that matter.
tags: [evaluation, finance, cybersecurity, visualization]
categories: [research, evaluation]
---

Generic leaderboards rarely tell us whether an AI system actually helps an analyst detect fraud, support clinical decision-making, or flag cyber threats. A line through my work focuses on targeted evaluations that mirror those real-world stakes.

## Finance & medicine

- **When Flue Meets Flang (EMNLP 2022)** released a domain-tuned benchmark blending filings, earnings calls, and analyst commentary, with metrics for numerical reasoning and entity resolution.
- Ongoing work expands this suite to medical text, evaluating reliability, explainability, and bias when models make patient-facing statements.

## Cyber threat intelligence

- **CTI-Twitter** fused supervised + unsupervised signals so analysts could triage millions of tweets down to credible threat mentions.
- The pipeline now evaluates timeliness, trust, and downstream analyst handoff quality so practitioners can see where automation helps and where humans should intervene.

## Visualization literacy for multimodal models

- Our NeurIPS 2024 work probed how zero-shot vision-language models recover graphical perception results.
- We built a visual-question battery covering trend detection, correlation misreads, and scale illusions, and compared model vs. human error profiles.

## Why bespoke evaluations matter

- **Ground truth is contextual:** the "right" answer for a finance analyst is different than for a counselor or policy designer.
- **Failure costs vary:** a hallucinated earnings number can move markets; a misread visualization can mislead thousands.
- **Trust grows with relevance:** analysts cite benchmarks because they reflect their KPIs.

## What’s next

- Scenario-based stress tests ("CPI spikes 200 bps") and chain-of-thought rubrics.
- Shared tasks where VLMs explain visualization mistakes, not just point them out.
- Pair cybersecurity datasets with the unlearning framework so sensitive indicators can be removed without breaking downstream analytics.

If you have a domain with unusual evaluation needs, this playbook can encode your constraints into reproducible benchmarks.
