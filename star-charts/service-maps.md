# 🗺️ Service Maps

![Last Updated](https://img.shields.io/badge/Last%20Updated-2025--01--14-success)

## Overview

This document provides architectural maps and diagrams showing how services connect and interact
within my infrastructure.

## Core Service Categories

### 🔧 Infrastructure Management

- **Proxmox VE** - Virtual environment orchestration
- **Proxmox Backup Server** - Backup and recovery solutions
- **ProxmoxMCP** - Model Context Protocol integration

### 📊 Monitoring & Observability

- **[Triangulum Observe](https://github.com/basher83/triangulum-observe)** - Comprehensive
  monitoring stack
  - Time-series metrics collection
  - Log aggregation and analysis
  - Distributed tracing
  - Alerting and visualization

### 🚀 Application Services

- Container orchestration
- Web services
- Database clusters

## Service Interaction Patterns

### Data Flow

```
Applications → Metrics Collection → Time Series DB → Visualization
     ↓              ↓                     ↓              ↓
   Logs      → Log Aggregator    →  Search Engine → Dashboards
     ↓              ↓                     ↓              ↓
   Traces    → Trace Collector   →  Trace Storage → Analysis
```

### Monitoring Architecture

See [Triangulum Observe](https://github.com/basher83/triangulum-observe) for detailed monitoring
architecture and implementation.
