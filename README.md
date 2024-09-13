Atlantis/
├── backend/
│   ├── app.js               # Main backend application
│   ├── socket.js            # Socket.IO server logic
│   ├── metricsController.js  # Handles system and training metrics
│   ├── gpuService.js        # GPU-specific metric collection
│   ├── cpuService.js        # CPU and memory collection
│   ├── routes.js            # Express route handling for metrics API
│   └── utils.js             # Utility for logging or helper functions
├── frontend/
│   ├── public/              # Public static files (index.html, favicon, etc.)
│   ├── src/
│   │   ├── App.js           # Main React app
│   │   ├── components/      # React components (Dashboard, Charts, etc.)
│   │   ├── socket.js        # Socket.IO client setup
│   ├── index.js             # Main React entry point
│   ├── package.json         # Frontend dependencies
├── README.md
├── package.json             # Backend dependencies
├── .env                     # Environment variables
└── Dockerfile               # Dockerfile for containerization (optional)
