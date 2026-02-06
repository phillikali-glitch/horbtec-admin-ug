# Clone the starter repository
git clone https://github.com/yourusername/uganda-admin-exporter
cd uganda-admin-exporter

# Project structure
uganda-admin-exporter/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── datasources/    # Data fetching modules
│   │   ├── routes/         # API endpoints
│   │   └── utils/          # Excel export utilities
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # District selector, export button
│   │   └── App.js
│   └── package.json
├── data/                   # Cached data files
└── docker-compose.yml      # Container setup