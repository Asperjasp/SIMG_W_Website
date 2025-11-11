---
title: "Collaboration with LatamGPT CENIA Project"
description: "Strategic partnership with CENIA's LatamGPT initiative to advance Latin American language models and foster regional AI research collaboration."
researchers: ["SIMG Research Group"]
status: "active"
startDate: 2025-10-30
publicationDate: 2025-10-30
category: "Partnerships & Outreach"
tags: ["LatamGPT", "LLMs", "AI"]
lang: "en"
translationKey: "latamgpt-cenia-partnership"

# Project type
projectType: "Partnership & Collaboration"

# Key highlights
highlights:
  - "First official meeting held with CENIA researchers to explore collaboration opportunities"
  - "Alignment with LatamGPT's mission to develop language models for Latin America"
  - "Knowledge exchange on multilingual NLP and regional language challenges"
  - "Potential contributions to open-source Latin American AI initiatives"

# Publications
publications: []

# Resources
resources:
  - name: "LatamGPT Project"
    description: "Official LatamGPT initiative by CENIA"
    url: "https://cenia.cl"
    type: "other"
  - name: "SIMG Research"
    description: "Our research group's work on language models"
    url: "https://simg-un.com/en/research"
    type: "other"

# Collaborators
collaborators:
  - name: "CENIA (Centro Nacional de Inteligencia Artificial)"
    affiliation: "Chile"
    url: "https://cenia.cl"
  - name: "SIMG Research Group"
    affiliation: "Universidad Nacional de Colombia"
    url: "https://simg-un.com"

# Funding
funding:
  - "Collaborative research initiative (non-funded)"
---

## Overview

We are excited to announce our collaboration with the **LatamGPT project**, led by CENIA (Centro Nacional de Inteligencia Artificial) in Chile. This partnership aims to strengthen Latin American AI research and contribute to the development of language models specifically designed for Spanish and Portuguese speakers across the region.

LatamGPT represents a critical effort to address the linguistic and cultural nuances of Latin America that are often underrepresented in global AI systems. Through this collaboration, SIMG brings expertise in efficient model training (QLoRA, LoRA) and domain-specific fine-tuning to support this important regional initiative.

## Partnership Objectives

Our collaboration with CENIA and the LatamGPT project focuses on several key areas:

### 1. Knowledge Exchange
- **Research Sharing**: Exchange findings on efficient training methods, model architectures, and evaluation benchmarks
- **Best Practices**: Share lessons learned from our PhinGPT project on cost-effective fine-tuning
- **Technical Workshops**: Organize joint workshops and seminars for students and researchers

### 2. Model Development
- **Regional Datasets**: Collaborate on curating and processing Latin American Spanish corpora
- **Evaluation Frameworks**: Develop evaluation benchmarks that reflect regional language variations
- **Fine-tuning Strategies**: Apply our QLoRA expertise to optimize LatamGPT variants

### 3. Community Building
- **Open Collaboration**: Foster open-source contributions from Latin American researchers
- **Student Involvement**: Create opportunities for students to participate in regional AI projects
- **Research Networks**: Strengthen connections between universities across Latin America

## Initial Meeting Highlights

Our first official meeting with CENIA researchers was held in **October 2024**, where we discussed:

### Discussion Points
- **Current State**: Overview of LatamGPT's progress and technical architecture
- **SIMG Contributions**: Presentation of our work on PhinGPT and efficient fine-tuning methods
- **Synergies**: Identification of areas where our research expertise aligns with LatamGPT needs
- **Next Steps**: Roadmap for collaboration including technical exchanges and joint research

### Key Takeaways
- Strong alignment between SIMG's research on efficient LLMs and LatamGPT's resource constraints
- Opportunity to contribute Colombian Spanish linguistic resources to the project
- Mutual interest in developing domain-specific variants (finance, law, education)
- Agreement to maintain regular technical meetings and progress updates

## Why This Partnership Matters

### Regional Impact
Latin America has unique linguistic characteristics that differ from European Spanish:
- **Vocabulary Variations**: Region-specific terms and expressions
- **Cultural Context**: Local references, historical events, and social norms
- **Multilingual Reality**: Integration with indigenous languages and Portuguese
- **Digital Divide**: Need for efficient models that work with limited computational resources

### Academic Collaboration
This partnership strengthens the Latin American AI research ecosystem:
- **Resource Pooling**: Share datasets, computational resources, and expertise
- **Joint Publications**: Potential for co-authored papers and conference presentations
- **Student Mobility**: Exchange programs and collaborative thesis projects
- **Visibility**: Increase recognition of Latin American AI research globally

## Our Contributions

### Technical Expertise
SIMG brings several key capabilities to the partnership:

#### 1. Efficient Training Methods
- **QLoRA Implementation**: Proven experience reducing training costs by ~65%
- **Low-Resource Scenarios**: Techniques for training on limited GPU infrastructure
- **Model Compression**: Knowledge on quantization and pruning for deployment

#### 2. Domain Specialization
- **Financial NLP**: Expertise from PhinGPT project on domain-specific fine-tuning
- **Evaluation Metrics**: Frameworks for assessing model performance on specialized tasks
- **Transfer Learning**: Strategies for adapting models across domains

#### 3. Open-Source Philosophy
- **Code Sharing**: All our tools and scripts available on GitHub
- **Documentation**: Comprehensive guides and tutorials in Spanish
- **Community Support**: Active engagement with researchers and practitioners

## Planned Activities

### Short-term (2024-2025)
- [x] First collaboration meeting completed
- [ ] Technical documentation exchange
- [ ] Joint workshop on efficient LLM training
- [ ] Contribution of Colombian Spanish corpus
- [ ] Pilot project: Fine-tune LatamGPT variant for financial domain

### Medium-term (2025-2026)
- [ ] Co-author research paper on Latin American LLMs
- [ ] Develop evaluation benchmark for regional Spanish variants
- [ ] Student exchange program between SIMG and CENIA
- [ ] Joint application for regional research funding
- [ ] Public demo of collaborative model

### Long-term Vision
- [ ] Establish Latin American LLM research consortium
- [ ] Create open-source platform for regional model development
- [ ] Organize annual conference on Latin American AI
- [ ] Develop models for indigenous languages in collaboration with communities

## How to Get Involved

This is an **open collaboration**, and we welcome participation from:

### Researchers
- Contribute linguistic resources (corpora, annotations)
- Share evaluation datasets and benchmarks
- Participate in technical discussions and workshops
- Collaborate on joint research projects

### Students
- Join as research assistants on collaborative projects
- Propose thesis topics aligned with LatamGPT objectives
- Participate in workshops and training sessions
- Contribute to open-source codebases

### Institutions
- Provide computational resources or datasets
- Host joint workshops or seminars
- Facilitate student exchanges
- Support funding applications

## Technical Alignment

### Infrastructure Compatibility
Both SIMG and LatamGPT share similar constraints and priorities:

```python
# Example: Efficient fine-tuning setup compatible with both teams
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model

# Load base LatamGPT model (when available)
model = AutoModelForCausalLM.from_pretrained(
    "cenia/latamgpt-base",
    load_in_4bit=True,  # Efficient memory usage
    device_map="auto"
)

# Apply QLoRA for domain adaptation
lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
print(f"Trainable parameters: {model.num_parameters(only_trainable=True):,}")
```

### Shared Goals
- **Accessibility**: Models that run on consumer-grade hardware
- **Multilingual**: Support for Spanish, Portuguese, and indigenous languages
- **Open-Source**: Free access to models, datasets, and code
- **Regional Focus**: Address Latin American contexts and use cases

## Impact Metrics

We will track the success of this collaboration through:

### Research Outputs
- Number of joint publications
- Citations of collaborative work
- Contributions to LatamGPT codebase
- Datasets and benchmarks released

### Community Engagement
- Workshop participants
- Student collaborations
- GitHub stars/forks on shared projects
- Active contributors from Latin America

### Model Performance
- Evaluation scores on regional benchmarks
- User adoption and downloads
- Deployment in real-world applications
- Feedback from Latin American users

## Contact & Updates

Want to learn more or participate in this collaboration?

- **Email**: Contact us at [SIMG website](https://simg-un.com/en/contact)
- **Updates**: Follow our progress on [GitHub](https://github.com/SIMG-UN)
- **Discussions**: Join conversations on our Discord or Hugging Face community

---

**Stay tuned** for updates on this exciting partnership as we work together to advance Latin American AI research and create language models that truly represent our region!
