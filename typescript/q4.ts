/*
  Create a utility function findById that takes an array of User objects and a number as arguments and returns a User | undefined (if the user with the given ID exists).
  Extend the function to support a new parameter, which specifies if the returned user should include undefined or throw an error. Use TypeScript's never type to represent the error-throwing case.
  Test the function using a sample array of User objects and handle both scenarios (with and without throwing an error).

  Export the function findById so that it can be used in the test file.
*/

import { User } from "./q1";

export function findById(
  users: User[],
  id: number,
  throwError: boolean = false
): User | undefined {
  const user = users.find((user) => user.id === id);

  if (!user && throwError) {
    throw new Error(`User with ID ${id} not found.`);
  }

  return user;
}

const sampleUsers: User[] = [
  { id: 1, name: "Krish", email: "krish@company.com", role: "Admin" },
  { id: 2, name: "Shivansh", email: "shivansh@gmail.com", role: "User" },
  { id: 3, name: "Mohit", email: "mohit@company.com", role: "Manager" },
];

try {
  const foundUser = findById(sampleUsers, 1);
  console.log(foundUser);

  const nonExistentUser = findById(sampleUsers, 4, true);
  console.log(nonExistentUser);
} catch (error) {
  console.error(error);
}