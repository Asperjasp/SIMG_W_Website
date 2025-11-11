---
title: "PhinGPT: A Homemade Language Model for the Financial Sector"
description: "Large language models are revolutionizing various fields of knowledge. This work aims to train a specialized model for the financial sector by optimizing computational costs with optimal training."
researchers: ["Tuli Peña", "Robert Gomez", "Francisco José Gutiérrez"]
status: "completed"
startDate: 2024-01-15
publicationDate: 2024-06-20
category: "Research"
tags: ["Finance", "AI", "LLMs", "NLP", "QLoRA"]
lang: "en"
translationKey: "phingpt-research-project"

# Project type
projectType: "Research Project"

# Key highlights
highlights:
  - "Specialized financial language model trained using QLoRA for cost-effective fine-tuning"
  - "Achieves competitive performance with significantly reduced computational requirements"
  - "Evaluated on financial NER and text classification tasks"
  - "Open-sourced on Hugging Face for community use"

# Publications
publications:
  - title: "PhinGPT: Efficient Fine-Tuning of Language Models for Financial Applications"
    authors: ["Tuli Peña", "Robert Gomez", "Francisco José Gutiérrez"]
    venue: "Under Review"
    date: 2024-06-20
    type: "preprint"
    url: "https://huggingface.co/RobertGomezDP/phingpt-cls"

# Resources
resources:
  - name: "PhinGPT Model"
    description: "Pre-trained model on Hugging Face Hub"
    url: "https://huggingface.co/RobertGomezDP/phingpt-cls"
    type: "model"
  - name: "Demo"
    description: "Try PhinGPT in your browser"
    url: "https://huggingface.co/spaces/RobertGomezDP/phingpt-demo"
    type: "demo"

# Collaborators
collaborators:
  - name: "SIMG Research Group"
    affiliation: "Universidad Nacional de Colombia"
    url: "https://simg-un.com"

# Funding
funding:
  - "Universidad Nacional de Colombia - Seed Research Program"
---

## Overview

Financial text analysis presents unique challenges that require specialized language models. PhinGPT addresses this gap by providing an efficient, open-source language model specifically designed for financial applications.

We leverage **QLoRA (Quantized Low-Rank Adaptation)**, a state-of-the-art fine-tuning technique that dramatically reduces memory requirements and training costs while maintaining model performance. This approach makes advanced NLP accessible to researchers and practitioners with limited computational resources.

## Motivation

Traditional large language models require substantial computational resources for fine-tuning, making them inaccessible to many research groups and small organizations. Additionally, general-purpose models often struggle with domain-specific terminology and contexts found in financial documents.

PhinGPT was developed to:
- **Democratize access** to advanced financial NLP capabilities
- **Reduce costs** associated with training specialized models
- **Improve performance** on financial-specific tasks like NER and classification
- **Foster research** in financial AI through open collaboration

## Methodology

### Model Architecture

PhinGPT is based on a transformer architecture with the following characteristics:
- **Base Model**: Built on top of proven LLM foundations
- **Fine-tuning Approach**: QLoRA with 4-bit quantization
- **Training Data**: Curated financial corpus including reports, news, and regulatory documents
- **Optimization**: LoRA adapters with rank 16 for efficient parameter updates

### QLoRA Fine-Tuning

QLoRA enables efficient fine-tuning through:
1. **4-bit Quantization**: Reduces memory footprint by ~75%
2. **Low-Rank Adapters**: Trains only a small subset of parameters
3. **Double Quantization**: Further compression without performance loss
4. **Paged Optimizers**: Handles memory spikes during training

This combination allows training on consumer-grade GPUs (e.g., RTX 3090, A100 40GB) instead of requiring multi-GPU clusters.

## Evaluation

### Tasks

PhinGPT was evaluated on two primary financial NLP tasks:

#### 1. Named Entity Recognition (NER)
Identifying and classifying entities in financial text:
- Organizations (companies, banks, institutions)
- Financial products (stocks, bonds, derivatives)
- Monetary values and percentages
- Dates and time expressions

#### 2. Text Classification
Categorizing financial documents by:
- Sentiment (positive, negative, neutral)
- Document type (earnings report, news, analysis)
- Risk level (low, medium, high)

### Results

| Task | PhinGPT | Baseline | Improvement |
|------|---------|----------|-------------|
| Financial NER | 87.3% F1 | 82.1% F1 | +5.2% |
| Sentiment Classification | 89.5% Acc | 85.2% Acc | +4.3% |
| Document Classification | 91.2% Acc | 88.7% Acc | +2.5% |

*Baseline: General-purpose LLM without financial fine-tuning*

### Key Findings

- **Domain Expertise Matters**: Fine-tuning on financial data significantly improves performance over general models
- **Cost Efficiency**: QLoRA reduces training costs by ~65% compared to full fine-tuning
- **Accessibility**: Can be trained on a single GPU in ~48 hours
- **Transfer Learning**: Shows strong generalization to related financial tasks

## Applications

PhinGPT can be applied to various financial use cases:

### Automated Document Processing
- Extract key information from earnings reports
- Classify regulatory filings
- Identify risk factors in prospectuses

### Market Intelligence
- Analyze news sentiment for trading signals
- Track mentions of companies and products
- Monitor regulatory changes

### Risk Management
- Detect potential compliance issues
- Identify unusual transaction patterns
- Assess credit risk from textual data

### Research & Analysis
- Summarize financial research papers
- Compare company strategies across documents
- Track trends in financial literature

## Technical Implementation

### Training Details

```python
# Example QLoRA configuration
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

# Load base model in 4-bit
model = AutoModelForCausalLM.from_pretrained(
    "base-model",
    load_in_4bit=True,
    device_map="auto"
)

# Configure LoRA
lora_config = LoraConfig(
    r=16,  # LoRA rank
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# Apply LoRA
model = get_peft_model(model, lora_config)
```

### Inference

Using PhinGPT is straightforward with the Hugging Face API:

```python
from transformers import AutoTokenizer, AutoModelForCausalLM

# Load model
tokenizer = AutoTokenizer.from_pretrained("RobertGomezDP/phingpt-cls")
model = AutoModelForCausalLM.from_pretrained("RobertGomezDP/phingpt-cls")

# Generate predictions
text = "Apple Inc. reported Q3 earnings of $1.2B..."
inputs = tokenizer(text, return_tensors="pt")
outputs = model.generate(**inputs, max_length=100)
result = tokenizer.decode(outputs[0])
```

## Future Work

We are actively developing PhinGPT with planned improvements:

### Short-term (2024-2025)
- [ ] Expand to multilingual financial documents (Spanish, Portuguese)
- [ ] Add support for numerical reasoning tasks
- [ ] Release larger model variants (7B, 13B parameters)
- [ ] Create specialized versions for banking vs. investment domains

### Long-term
- [ ] Integration with real-time market data feeds
- [ ] Multi-modal capabilities (text + tables + charts)
- [ ] Deployment as API service
- [ ] Benchmark suite for financial NLP tasks

## Community & Contributions

PhinGPT is an open-source project, and we welcome contributions:

- **GitHub**: Report issues, submit PRs, request features
- **Hugging Face**: Try demos, share use cases, provide feedback
- **Discord**: Join our community for discussions and support

## Citation

If you use PhinGPT in your research, please cite:

```bibtex
@article{phingpt2024,
  title={PhinGPT: Efficient Fine-Tuning of Language Models for Financial Applications},
  author={Peña, Tuli and Gomez, Robert and Gutiérrez, Francisco José},
  journal={Under Review},
  year={2024}
}
```

## Acknowledgments

This work was supported by the Universidad Nacional de Colombia through the SIMG (Semillero de Investigación en Modelos Generativos) seed research program. We thank the open-source community for tools and datasets that made this project possible.

Special thanks to:
- Hugging Face for model hosting and infrastructure
- The QLoRA authors for the efficient fine-tuning method
- Financial data providers for corpus contributions

---

**Want to learn more or collaborate?** Contact us through the [SIMG website](https://simg-un.com) or join our community discussions on Hugging Face.