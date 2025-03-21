# CRUD-Node-PostgreSQL-Docker

## **Create User -**

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

---

## **Get All Users -**

### Overview

This API fetch all the users from the database.

---

### Endpoints

- ### URL: `/api/users`
- ### Method: `GET`

---

### Example Response:

- **Success Response (200 OK) -**

```json
{
  "status": 200,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "test_name1",
      "email": "test1@example.com",
      "created_at": "2025-03-15T12:00:00Z"
    },
    {
      "id": 2,
      "name": "test_name2",
      "email": "test2@example.com",
      "created_at": "2025-03-15T13:00:00Z"
    }
  ]
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

- **Server Issues:** Returns a `500` status for unexpected errors.

---

### **Behavior**

1. Fetches all users from the database.

2. Returns a list of users with their details.

---

---

## **Get User by ID -** -

### Overview

This API retrieves a specific user from the database based on their ID.

---

### Endpoints

- ### URL: `/api/users/:id`
- ### Method: `GET`

---

### **Path Parameters**

- `id` - String

### Example Response:

- **Success Response (201 Created) -**

```json
{
  "status": 201,
  "message": "User fetched successfully",
  "data": {
    "id": 1,
    "name": "test_name",
    "email": "test@test.com",
    "created_at": "2025-03-15T12:00:00Z"
  }
}
```

### Error Responses:

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

- **Server Issues:** Returns a `500` status for unexpected errors.

---

### **Behavior**

1. Extracts the user ID from the request parameters.

2. Fetches the user data from the database.

3. Returns the user details if found, otherwise returns an error.

---

---

## **Update User -**

### Overview

This API updates an existing user's details based on their ID.

---

### Endpoints

- ### URL: `/api/users/:id`
- ### Method: `PUT`

---

### Path Parameters:

- `id` - String

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
  "message": "User updated successfully",
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

- **User Not Found (404)**

```json
{
  "status": 404,
  "message": "User not found"
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

- **User Not Found:** Returns a `404` status if the user ID does not exist.

- **Server Issues:** Returns a `500` status for unexpected errors.

---

### **Behavior**

1. Extracts the user ID from the request parameters.

2. Validates the request body.

3. Updates the user data in the database.

4. Returns the updated user details if found, otherwise returns an error.

---

---

## **Delete User -**

### Overview

This API deletes a specific user from the database based on their ID.

---

### Endpoints

- ### URL: `/api/users/:id`
- ### Method: `DELETE`

---

### Path Parameters:

- `id` - String

---

### Example Response:

- **Success Response (200 ok) -**

```json
{
  "status": 201,
  "message": "User deleted successfully",
  "data": {
    "id": 1,
    "name": "test_name",
    "email": "test@test.com"
  }
}
```

### Error Responses:

- **User Not Found (404)**

```json
{
  "status": 404,
  "message": "User not found"
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

- **User Not Found:** Returns a `404` status if the user ID does not exist.

- **Server Issues:** Returns a `500` status for unexpected errors.

---

### **Behavior**

1. Extracts the user ID from the request parameters.

2. Attempts to delete the user from the database.

3. Returns a success response if the user is deleted, otherwise returns an error.

---
