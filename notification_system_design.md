# Stage 1

Designed REST APIs for campus notification system.

Endpoints:
- POST /api/notifications/send
- GET /api/notifications
- GET /api/notifications/:id

JSON request and response structures were created using Express.js.

---

# Stage 2

Suggested using MongoDB for scalable notification storage.

Collections:
- students
- notifications

Advantages:
- Flexible schema
- Better scalability
- Faster reads for large notification systems

---

# Stage 3

Query optimization strategies:
- Added indexing on studentID and createdAt
- Avoided indexing every column unnecessarily
- Improved unread notification fetch performance

Optimized query example:

SELECT * FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC;

---

# Stage 4

Suggested:
- Pagination
- Caching
- Lazy loading
- Background processing

These approaches reduce database overload and improve API response times.

---

# Stage 5

Problems identified:
- Sequential email sending
- Slow processing
- Failure handling issues

Suggested:
- Queue-based architecture
- Retry mechanism
- Async workers

---

# Stage 6

Implemented Vehicle Maintenance Scheduler microservice using Node.js and Express.

Features:
- Fetches depots and vehicle tasks from protected APIs
- Uses Bearer token authentication
- Optimizes vehicle selection based on Impact score and mechanic hours
- Returns selected high priority maintenance tasks

REST API Endpoint:
- GET /api/scheduler/optimize