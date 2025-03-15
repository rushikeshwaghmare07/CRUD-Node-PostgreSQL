import { createUserService, getAllUsersService } from "../models/user.model.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return handleResponse(res, 400, "All fields are required");
  }

  try {
    const newUser = await createUserService(name, email);

    if (!newUser) {
      return handleResponse(res, 400, "User already exists");
    }
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    handleResponse(res, 200, "Users fetched successfully", users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);

    handleResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};
