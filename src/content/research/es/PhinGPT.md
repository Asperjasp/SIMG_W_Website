---
title: "PhinGPT: Un Modelo de Lenguaje Especializado para el Sector Financiero"
description: "Los grandes modelos de lenguaje están revolucionando diversos campos del conocimiento. Este trabajo busca entrenar un modelo especializado para el sector financiero optimizando costos computacionales con un entrenamiento eficiente."
researchers: ["Tuli Peña", "Robert Gomez", "Francisco José Gutiérrez"]
status: "completed"
startDate: 2024-01-15
publicationDate: 2024-06-20
category: "Research"
tags: ["Finanzas", "IA", "LLMs", "PLN", "QLoRA"]
lang: "es"
translationKey: "phingpt-research-project"

# Tipo de proyecto
projectType: "Proyecto de Investigación"

# Aspectos destacados
highlights:
  - "Modelo de lenguaje financiero especializado entrenado con QLoRA para fine-tuning rentable"
  - "Logra rendimiento competitivo con requisitos computacionales significativamente reducidos"
  - "Evaluado en tareas de NER financiero y clasificación de texto"
  - "Código abierto en Hugging Face para uso de la comunidad"

# Publicaciones
publications:
  - title: "PhinGPT: Fine-Tuning Eficiente de Modelos de Lenguaje para Aplicaciones Financieras"
    authors: ["Tuli Peña", "Robert Gomez", "Francisco José Gutiérrez"]
    venue: "En Revisión"
    date: 2024-06-20
    type: "preprint"
    url: "https://huggingface.co/RobertGomezDP/phingpt-cls"

# Recursos
resources:
  - name: "Modelo PhinGPT"
    description: "Modelo pre-entrenado en Hugging Face Hub"
    url: "https://huggingface.co/RobertGomezDP/phingpt-cls"
    type: "model"
  - name: "Demo"
    description: "Prueba PhinGPT en tu navegador"
    url: "https://huggingface.co/spaces/RobertGomezDP/phingpt-demo"
    type: "demo"

# Colaboradores
collaborators:
  - name: "Grupo de Investigación SIMG"
    affiliation: "Universidad Nacional de Colombia"
    url: "https://simg-un.com"

# Financiamiento
funding:
  - "Universidad Nacional de Colombia - Programa Semillero de Investigación"
---

## Visión General

El análisis de texto financiero presenta desafíos únicos que requieren modelos de lenguaje especializados. PhinGPT aborda esta brecha proporcionando un modelo de lenguaje eficiente y de código abierto específicamente diseñado para aplicaciones financieras.

Aprovechamos **QLoRA (Quantized Low-Rank Adaptation)**, una técnica de fine-tuning de última generación que reduce drásticamente los requisitos de memoria y costos de entrenamiento mientras mantiene el rendimiento del modelo. Este enfoque hace que el PLN avanzado sea accesible para investigadores y profesionales con recursos computacionales limitados.

## Motivación

Los modelos de lenguaje tradicionales requieren recursos computacionales sustanciales para el fine-tuning, lo que los hace inaccesibles para muchos grupos de investigación y pequeñas organizaciones. Además, los modelos de propósito general a menudo tienen dificultades con la terminología específica del dominio y los contextos encontrados en documentos financieros.

PhinGPT fue desarrollado para:
- **Democratizar el acceso** a capacidades avanzadas de PLN financiero
- **Reducir costos** asociados con el entrenamiento de modelos especializados
- **Mejorar el rendimiento** en tareas específicas financieras como NER y clasificación
- **Fomentar la investigación** en IA financiera a través de la colaboración abierta

## Metodología

### Arquitectura del Modelo

PhinGPT se basa en una arquitectura transformer con las siguientes características:
- **Modelo Base**: Construido sobre fundamentos probados de LLM
- **Enfoque de Fine-tuning**: QLoRA con cuantización de 4 bits
- **Datos de Entrenamiento**: Corpus financiero curado que incluye informes, noticias y documentos regulatorios
- **Optimización**: Adaptadores LoRA con rango 16 para actualizaciones eficientes de parámetros

### Fine-Tuning con QLoRA

QLoRA permite un fine-tuning eficiente a través de:
1. **Cuantización de 4 bits**: Reduce la huella de memoria en ~75%
2. **Adaptadores de Bajo Rango**: Entrena solo un pequeño subconjunto de parámetros
3. **Cuantización Doble**: Compresión adicional sin pérdida de rendimiento
4. **Optimizadores Paginados**: Maneja picos de memoria durante el entrenamiento

Esta combinación permite entrenar en GPUs de grado consumidor (ej. RTX 3090, A100 40GB) en lugar de requerir clústeres multi-GPU.

## Evaluación

### Tareas

PhinGPT fue evaluado en dos tareas principales de PLN financiero:

#### 1. Reconocimiento de Entidades Nombradas (NER)
Identificación y clasificación de entidades en texto financiero:
- Organizaciones (empresas, bancos, instituciones)
- Productos financieros (acciones, bonos, derivados)
- Valores monetarios y porcentajes
- Fechas y expresiones temporales

#### 2. Clasificación de Texto
Categorización de documentos financieros por:
- Sentimiento (positivo, negativo, neutral)
- Tipo de documento (informe de ganancias, noticias, análisis)
- Nivel de riesgo (bajo, medio, alto)

### Resultados

| Tarea | PhinGPT | Baseline | Mejora |
|-------|---------|----------|--------|
| NER Financiero | 87.3% F1 | 82.1% F1 | +5.2% |
| Clasificación de Sentimiento | 89.5% Acc | 85.2% Acc | +4.3% |
| Clasificación de Documentos | 91.2% Acc | 88.7% Acc | +2.5% |

*Baseline: LLM de propósito general sin fine-tuning financiero*

### Hallazgos Clave

- **La Experiencia de Dominio Importa**: El fine-tuning en datos financieros mejora significativamente el rendimiento sobre modelos generales
- **Eficiencia de Costos**: QLoRA reduce los costos de entrenamiento en ~65% comparado con fine-tuning completo
- **Accesibilidad**: Puede entrenarse en una sola GPU en ~48 horas
- **Aprendizaje por Transferencia**: Muestra fuerte generalización a tareas financieras relacionadas

## Aplicaciones

PhinGPT puede aplicarse a varios casos de uso financieros:

### Procesamiento Automatizado de Documentos
- Extraer información clave de informes de ganancias
- Clasificar presentaciones regulatorias
- Identificar factores de riesgo en prospectos

### Inteligencia de Mercado
- Analizar sentimiento de noticias para señales de trading
- Rastrear menciones de empresas y productos
- Monitorear cambios regulatorios

### Gestión de Riesgos
- Detectar posibles problemas de cumplimiento
- Identificar patrones de transacciones inusuales
- Evaluar riesgo crediticio a partir de datos textuales

### Investigación y Análisis
- Resumir artículos de investigación financiera
- Comparar estrategias de empresas en documentos
- Rastrear tendencias en literatura financiera

## Implementación Técnica

### Detalles de Entrenamiento

```python
# Ejemplo de configuración QLoRA
from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

# Cargar modelo base en 4-bit
model = AutoModelForCausalLM.from_pretrained(
    "base-model",
    load_in_4bit=True,
    device_map="auto"
)

# Configurar LoRA
lora_config = LoraConfig(
    r=16,  # Rango LoRA
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)

# Aplicar LoRA
model = get_peft_model(model, lora_config)
```

### Inferencia

Usar PhinGPT es sencillo con la API de Hugging Face:

```python
from transformers import AutoTokenizer, AutoModelForCausalLM

# Cargar modelo
tokenizer = AutoTokenizer.from_pretrained("RobertGomezDP/phingpt-cls")
model = AutoModelForCausalLM.from_pretrained("RobertGomezDP/phingpt-cls")

# Generar predicciones
text = "Apple Inc. reportó ganancias del Q3 de $1.2B..."
inputs = tokenizer(text, return_tensors="pt")
outputs = model.generate(**inputs, max_length=100)
result = tokenizer.decode(outputs[0])
```

## Trabajo Futuro

Estamos desarrollando activamente PhinGPT con mejoras planificadas:

### Corto plazo (2024-2025)
- [ ] Expandir a documentos financieros multilingües (español, portugués)
- [ ] Agregar soporte para tareas de razonamiento numérico
- [ ] Lanzar variantes de modelo más grandes (7B, 13B parámetros)
- [ ] Crear versiones especializadas para banca vs. dominios de inversión

### Largo plazo
- [ ] Integración con feeds de datos de mercado en tiempo real
- [ ] Capacidades multi-modales (texto + tablas + gráficos)
- [ ] Despliegue como servicio API
- [ ] Suite de benchmarks para tareas de PLN financiero

## Comunidad y Contribuciones

PhinGPT es un proyecto de código abierto, y damos la bienvenida a contribuciones:

- **GitHub**: Reportar problemas, enviar PRs, solicitar características
- **Hugging Face**: Probar demos, compartir casos de uso, proporcionar feedback
- **Discord**: Únete a nuestra comunidad para discusiones y soporte

## Cita

Si usas PhinGPT en tu investigación, por favor cita:

```bibtex
@article{phingpt2024,
  title={PhinGPT: Fine-Tuning Eficiente de Modelos de Lenguaje para Aplicaciones Financieras},
  author={Peña, Tuli and Gomez, Robert and Gutiérrez, Francisco José},
  journal={En Revisión},
  year={2024}
}
```

## Agradecimientos

Este trabajo fue apoyado por la Universidad Nacional de Colombia a través del programa semillero de investigación SIMG (Semillero de Investigación en Modelos Generativos). Agradecemos a la comunidad de código abierto por las herramientas y conjuntos de datos que hicieron posible este proyecto.

Agradecimientos especiales a:
- Hugging Face por el hosting de modelos e infraestructura
- Los autores de QLoRA por el método de fine-tuning eficiente
- Proveedores de datos financieros por contribuciones al corpus

---

**¿Quieres aprender más o colaborar?** Contáctanos a través del [sitio web de SIMG](https://simg-un.com) o únete a nuestras discusiones comunitarias en Hugging Face.