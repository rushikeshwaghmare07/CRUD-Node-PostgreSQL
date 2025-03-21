import { createUserService, deleteUserService, getAllUsersService, getUserByIdService, updateUserService } from "../models/user.model.js";

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

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await updateUserService(id, name, email);

    if (!updatedUser) {
      return handleResponse(res, 404, "User not found");
    }

    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(id);

    if (!deletedUser) {
      return handleResponse(res, 404, "User not found");
    } else {
      handleResponse(res, 200, "User deleted successfully", deletedUser);
    }
  } catch (error) {
    next(error);
  }
}
