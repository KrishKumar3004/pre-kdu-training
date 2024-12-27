/*
  Define a generic function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] that filters an array based on a predicate function.
  Use this function to filter an array of numbers and return only even numbers.
  Use the same function to filter an array of User objects and return users whose email includes "@company.com".

  Export the filterArray function so that the code can be tested in the test file.
*/

import { User } from "./q1";

export function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

const users: User[] = [
  { id: 1, name: "Krish", email: "krish@company.com", role: "Admin" },
  { id: 2, name: "Shivansh", email: "shivansh@gmail.com", role: "User" },
  { id: 3, name: "Mohit", email: "mohit@company.com", role: "Manager" },
];

const companyUsers = filterArray(users, (user) => user.email.includes("@company.com"));

console.log(evenNumbers);
console.log(companyUsers);