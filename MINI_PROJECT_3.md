# Mini Project 3: Docker Persistence and Debugging

## Overview
This project demonstrates Docker volume persistence, container debugging, and data retention across container restarts.

## Completed Tasks

### ✅ 1. Database Volume Configuration
The `docker-compose.yml` is configured with a persistent volume for PostgreSQL:

```yaml
volumes:
  db-data:

services:
  db:
    volumes:
      - db-data:/var/lib/postgresql/data
```

### ✅ 2. Docker Debugging Commands Used

#### View Container Logs
```bash
docker logs express_backend --tail 20
docker logs postgres_db --tail 15
docker logs react_frontend --tail 20
```

#### Inspect Volume
```bash
docker volume ls
docker volume inspect fullstack-docker-app_db-data
```

#### Execute Commands in Container
```bash
docker exec -it postgres_db psql -U postgres -d testdb -c "SELECT version();"
```

#### Enter Container Shell
```bash
docker exec -it postgres_db bash
docker exec -it express_backend sh
```

### ✅ 3. Stop/Start Testing

**Stop containers:**
```bash
docker-compose stop
```

**Verify stopped:**
```bash
docker ps -a
```

**Start containers:**
```bash
docker-compose start
```

**Verify running:**
```bash
docker ps
```

### ✅ 4. Data Persistence Verification

After stop/start cycle, the database logs show:
```
PostgreSQL Database directory appears to contain a database; Skipping initialization
```

This confirms that:
- The database data persisted across restarts
- No data loss occurred
- Volume is working correctly

## Application Status

All containers are running and healthy:
- **postgres_db** - PostgreSQL 13 (port 5432) ✅ Healthy
- **express_backend** - Node.js/Express API (port 5000) ✅ Running
- **react_frontend** - Vite/React UI (port 3000) ✅ Running

## Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Database: localhost:5432

## Volume Information
- **Volume Name**: fullstack-docker-app_db-data
- **Driver**: local
- **Purpose**: Persist PostgreSQL data
- **Status**: Working correctly ✅

## Testing Results
✅ Containers stop gracefully  
✅ Containers start successfully  
✅ Database data persists  
✅ Application works after restart  
✅ No data loss observed  

## GitHub Repository
https://github.com/Azino9/Mini_Project_DockerLS

## Conclusion
The application demonstrates proper Docker volume usage for data persistence. All debugging commands work correctly, and the database maintains its state across container lifecycle events.
