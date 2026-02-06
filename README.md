# Uganda Administrative Boundaries Exporter

A functional web tool to export Uganda's complete administrative hierarchy (District → Constituency → County → Parish → Village) to Excel format using free data sources.

## 🌍 Live Demo
[Add your deployment link here once live]

## 📊 Data Sources
This tool aggregates data from multiple free sources:
- **Primary**: PHP package (scraped from moea.ica.go.ug)
- **Validation**: Uganda Bureau of Statistics (UBOS) ArcGIS portals
- **Geospatial**: SimpleMaps Uganda GIS data
- **Reference**: Electoral Commission administrative counts

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ & npm
- PHP 7.4+ & Composer
- Docker & Docker Compose (recommended)

### Option 1: Docker Deployment (Easiest)
```bash
# Clone the repository
git clone https://github.com/yourusername/uganda-admin-exporter
cd uganda-admin-exporter

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001
# PHP Data Service: http://localhost:8000
