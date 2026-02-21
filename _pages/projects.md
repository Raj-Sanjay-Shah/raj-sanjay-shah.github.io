---
layout: page
title: projects
permalink: /projects/
description: Ongoing Projects
nav: true
nav_order: 3
---

## Projects

A selection of ongoing research projects spanning cognitive science, large language models (LLMs), vision-language models (VLMs), data visualization, and AI for mental health.

---

#### Naive Scientific Misconceptions in Large Language Models

**People:** Harsh Nishant Lalai, Raj Sanjay Shah, Sashank Varma

We investigate whether modern LLMs exhibit _naive scientific misconceptions_ analogous to those found in human learners. Inspired by cognitive science work on intuitive theories (e.g., physics/biology/psychology), we probe for systematically "intuitive but wrong" explanations and analyze how misconceptions vary across model scale and prompting conditions.

**Focus areas**

- Persistent intuitive-but-incorrect explanations
- Misconception structure and robustness
- Links between fluency and conceptual correctness

---

#### When Visuals Aren't the Problem: Evaluating Vision-Language Models on Misleading Data Visualizations

**People:** Harsh Nishant Lalai*, Raj Sanjay Shah*, Hanspeter Pfister, Sashank Varma, Grace Guo  
\*equal contribution

We evaluate VLMs on misleading visualization cases where the _visual rendering is not the primary issue_, but interpretation and reasoning are. The goal is to understand when models fail at inference-level reasoning even if perception is sufficient.

**Focus areas**

- Misleading captions and framing
- Axis/scale manipulation and annotation traps
- Reasoning errors over data and uncertainty
- Benchmark design grounded in visualization theory

---

#### Simulating AI Patients for Psychotherapy: Challenges and Opportunities

**People:** Raj Sanjay Shah, Diyi Yang, Tim Althoff, Hiba Arnaout, Dana Atzil-Slonim, Daniel Blonigen, Tanmoy Chakraborty, Stevie Chancellor, Monojit Choudhury, Torrey Creed, Cristian Danescu-Niculescu-Mizil, Steffen Eberhardt, Anmol Goel, Philipp Graffe, Iryna Gurevych, Nick Haber, Dirk Hovy, Minlie Huang, Zac Imel, Hamidreza Jamalabadi, Jana Lasser, Maria Liakata, Ryan Louie, Wolfgang Lutz, Matteo Malgaroli, Clarissa Ong, Flor Miriam Plaza-del-Arco, Julia R. Pozuelo, Sahand Sabour, Brian Schwartz, Thamar Solorio, Aseem Srivastava, Jina Suh

This project examines how simulated AI patients can support evaluation, training, and benchmarking of therapeutic dialogue systems—while avoiding pitfalls around validity, bias, and over-reliance on simulation.

**Focus areas**

- Fidelity to clinical theory and therapeutic goals
- Evaluation validity and ecological realism
- Safety/ethics and responsible deployment
- Simulation as an evaluation and training instrument

---

#### Understanding Graphical Perception in Data Visualization

**People:** Grace Guo*, Jenna Jiayi Kang*, Raj Sanjay Shah\*, Hanspeter Pfister, Sashank Varma  
**Previous preprint:** [arXiv:2411.00257](https://arxiv.org/abs/2411.00257)

We study how humans and AI systems interpret visual encodings in charts and graphs, with a focus on grounding evaluation in cognitive theories of graphical perception (not just benchmark accuracy).

**Focus areas**

- Low-level perceptual judgments (e.g., length/angle/area)
- Higher-level inference tasks and uncertainty
- Human-model alignment under controlled manipulations

---

#### AI Patient Bank: State-Based Simulated Patients Grounded in Therapeutic Source Texts

**People:** Nathan Paek, William Fang, Raj Sanjay Shah, Hercy Shen, Declan Grabb, Emma Brunskill, Diyi Yang, Ryan Louie

We are building a state-based simulated patient framework grounded in therapeutic source texts and optimized via evidence-based testing. The goal is a scalable infrastructure for developing, validating, and stress-testing therapeutic AI systems.

**Focus areas**

- Structured patient state and dynamics
- Source-text grounding and controllability
- Automated evaluation pipelines
- Unit-test style behavioral validation

---

#### Ask Before You Summarize: Clarification-Driven Summarization from Dialogue Transcripts

**People:** Raj Sanjay Shah, Han-Chin Shing, Lei Xu, Joseph Paul Cohen, Jack Moriarty, Chaitanya Shivade

We propose a clarification-driven framework for summarizing under-specified dialogue transcripts. Instead of summarizing immediately, the system detects missing information, asks targeted clarifying questions, and incorporates responses to produce more faithful and useful summaries.
