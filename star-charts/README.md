# 🗺️ Star Charts - Architecture & Infrastructure Maps

![GitHub last commit](https://img.shields.io/github/last-commit/basher83/docs?path=star-charts/README.md&display_timestamp=committer)

## Overview

Star Charts provides visual and spatial documentation of infrastructure, network topology, and
service architecture. This directory contains architectural diagrams, network maps, and service
relationship documentation to help navigate the technical landscape.

## 📍 Navigation

### Core Documentation

| Document                                  | Description                                                            | Last Updated |
| ----------------------------------------- | ---------------------------------------------------------------------- | ------------ |
| [Homelab Topology](./homelab-topology.md) | Network architecture and infrastructure layout for homelab environment | 2025-08-13   |
| [Service Maps](./service-maps.md)         | Service dependencies, interaction patterns, and data flow diagrams     | 2025-08-19   |

## 🔭 Content Categories

### Infrastructure Architecture

- Physical and virtual network topology
- Proxmox cluster configurations
- Storage architecture and backup paths
- Network segmentation and VLANs

### Service Relationships

- Application service dependencies
- Data flow patterns between services
- Integration points and APIs
- Monitoring and observability touchpoints

### Security Architecture

- Network security zones
- Firewall rules and access patterns
- Authentication and authorization flows
- Certificate management infrastructure

## 🎯 Purpose

Star Charts serves as the visual navigation system for understanding:

- **Where** services are deployed
- **How** components communicate
- **What** dependencies exist between systems
- **Why** certain architectural decisions were made

## 🔗 Related Documentation

- [Mission Control](../mission-control/) - Standards and conventions that guide architecture
- [Flight Manuals](../flight-manuals/) - Procedures for implementing and managing infrastructure
- [Maintenance Logs](../maintenance-logs/) - Historical decisions and architecture evolution

## 📊 Diagram Standards

All diagrams in this directory follow these conventions:

- **Format**: Markdown with ASCII art or linked draw.io/mermaid diagrams
- **Naming**: Descriptive kebab-case filenames
- **Updates**: Include last-modified dates in document headers
- **Legend**: Always include legend for symbols and colors used

## 🚀 Quick Reference

For immediate navigation to key infrastructure components:

- **Monitoring Stack**: See [Service Maps](./service-maps.md#monitoring--observability)
- **Backup Architecture**: See [Homelab Topology](./homelab-topology.md#backup-infrastructure)
- **Network Zones**: See [Homelab Topology](./homelab-topology.md#network-segmentation)
