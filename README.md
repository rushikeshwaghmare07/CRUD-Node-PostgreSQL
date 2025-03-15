# CRUD-Node-PostgreSQL-Docker

## **Create User -** -

### Overview

This API handles the creation of users in the application. It validates user input, ensures email uniqueness, and stores user details securely.

---

### Endpoints

- ### URL: `/api/users`
- ### Method: `POST`

---

### Request Body:

The request body should be in JSON format and include the following fields:

```json
{
  "fullName": "test_name",
  "email": "test@test.com"
}
```

---

### **Validation Rules**

| Field   | Rules                     | Error Message                             |
| ------- | ------------------------- | ----------------------------------------- |
| `name`  | Minimum 3 characters long | "Name must be at least 3 characters long" |
| `email` | Must be a valid email     | "Invalid email format"                    |

---

### Example Response:

- **Success Response (201 Created) -**

```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "test_name",
    "email": "test@test.com",
    "created_at": "2025-03-15T12:00:00Z"
  }
}
```

### Error Responses:

- **Validation Error (400)**

```json
{
  "status": 400,
  "message": "Validation error",
  "error": "Name must be at least 3 characters long"
}
```

- **User Already Exists (400)**

```json
{
  "status": 400,
  "message": "All fields are required"
}
```

- **Invalid User Data (400)**

```json
{
  "success": false,
  "message": "Invalid user data"
}
```

- **User Already Exists (400)**

```json
{
  "status": 400,
  "message": "User already exists"
}
```

- **Internal Server Error (500)**

```json
{
  "status": 500,
  "message": "Internal server error",
  "error": "Error message here"
}
```

### **Error Handling**

- **Validation Errors:** A `400` status with a descriptive error message.

- **User Already Exists:** Returns a `400` status if the email is already registered.

- **Invalid Data:** Returns a `400` status if user data is incorrect or incomplete.

- **Server Issues:** Returns a `500` status for unexpected errors.

---

### **Behavior**

1. Validates the incoming request using `Joi` middleware.

2. Checks if the email is already registered.

3. Creates a new user and stores it in the database.

4. Returns the user data (excluding sensitive information).

---
