# 🗺️ Service Maps

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=star-charts/service-maps.md&display_timestamp=committer)

## Overview

This document provides architectural maps and diagrams showing how services connect and interact
within my infrastructure.

## Core Service Categories

### 🔧 Infrastructure Management

- **Proxmox VE** - Virtual environment orchestration
- **Proxmox Backup Server** - Backup and recovery solutions
- **ProxmoxMCP** - Model Context Protocol integration
- **[Andromeda Orchestration](https://github.com/basher83/andromeda-orchestration)** - Ansible
  automation for homelab infrastructure management with NetBox integration

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
