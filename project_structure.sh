uganda-admin-exporter/
├── backend/                 # Node.js API server
│   ├── src/
│   │   ├── datasources/    # Data fetching logic
│   │   ├── routes/         # API endpoints
│   │   └── utils/         # Excel export utilities
│   ├── php-service/        # PHP data wrapper
│   └── package.json
├── frontend/               # React interface
│   ├── src/
│   │   ├── components/     # UI components
│   │   └── App.js         # Main application
│   └── package.json
├── data/                   # Cached data files
├── docker-compose.yml      # Container orchestration
└── README.md              # This file
