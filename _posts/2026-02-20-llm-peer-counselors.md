---
layout: post
title: "LLM Copilots for Peer Counselors"
date: 2026-02-20 10:00:00
description: How motivational interviewing–aware sandboxes and analytics help peer counselors level up.
tags: [mental-health, counseling, llm, feedback]
categories: [research, mental-health]
---

Peer-support platforms run on empathy, reflective listening, and quick feedback, yet volunteers rarely get the same coaching professionals do. Over the past few years we built a full stack of AI copilots for counselors, culminating in **Helping the Helper (CSCW 2025)**, **Modeling Motivational Interviewing Strategies (CSCW 2022)**, **Multi-level Feedback Generation (ACL 2024)**, and the randomized trial **Can LLM-Simulated Practice and Feedback Upskill Human Counselors? (2025)**.

## Why counselors need copilots

- Volunteers scale faster than expert supervision and rarely receive structured practice.
- Feedback in these communities is episodic and subjective, so it’s hard to tell whether a reflection or affirmation helped.
- The highest-stakes conversations demand consistent quality, yet most platforms can’t afford 1:1 coaching.

## What we built

1. **Skill-aware pipelines** that encode motivational interviewing (MI) strategies and conversational intents across counselor-client turns.
2. **LLM-based practice sandboxes** where novices rehearse with simulated seekers, receive rubric-aligned feedback, and iterate within minutes.
3. **Tiered feedback generators** that surface tactical guidance ("Try a double-sided reflection") grounded in the volunteer’s actual transcripts.
4. **Analytics for moderators** that flag stuck counselors and suggest targeted interventions.

## Evidence it works

- Lab studies show statistically significant gains on MI competence scores after a single LLM practice session.
- Field deployments on large peer-support platforms reduced time-to-proficiency by ~30% while raising user-reported helpfulness.
- Counselors trust the assistant more when it mirrors MI language and cites concrete turns from their own conversations.

## What’s next

- Adaptive curricula that match practice difficulty to longitudinal counselor data.
- Safety overlays that combine the unlearning + watermarking stack so sensitive disclosures stay in the secure perimeter.
- An open evaluation suite (datasets, rubrics, code) so other teams can benchmark their own coaching tools.

If you want to experiment with the coaching sandbox or contribute new MI annotations, reach out—this line of work thrives on collaboration.
