export const generateTreeText = () => `
📁 src
├── 📁 domain
│   ├── 📁 entities               # Domain entities
│   ├── 📁 repositories           # Repository interfaces
│   └── 📁 value-objects          # (Optional) Value objects

├── 📁 application
│   ├── 📁 use-cases              # Use cases
│   └── 📁 services               # Auxiliary services

├── 📁 infrastructure
│   ├── 📁 orm
│   │   ├── schema                # Model definition file (ORM agnostic)
│   │   ├── migrations/           # ORM-generated migrations
│   │   ├── client                # ORM client configuration
│   │   └── 📁 repositories       # Concrete repository implementations
│   ├── 📁 external
│   │   └── 📁 apis               # Adapters for external APIs
│   ├── 📁 webserver
│   │   ├── 📁 express            # Express.js-specific configuration
│   │   └── server.js             # Main server configuration
│   ├── 📁 config                 # Application configuration
│   ├── 📁 logger                 # Logging configuration
│   └── 📁 docker                 # Docker-related files

├── 📁 interfaces
│   ├── 📁 controllers            # HTTP controllers
│   ├── 📁 routes                 # Application routes
│   ├── 📁 middlewares            # Express middlewares
│   └── 📁 validators             # Specific input validators

├── 📁 tests
│   ├── 📁 unit                   # Unit tests
│   ├── 📁 integration            # Integration tests
│   ├── 📁 e2e                    # End-to-end tests
│   └── 📁 mocks                  # (Optional) Dependency mocks

└── 📁 shared
    ├── 📁 utils                  # Utility functions
    ├── 📁 constants              # Global constants
    └── 📁 exceptions             # Centralized error handling
`;
