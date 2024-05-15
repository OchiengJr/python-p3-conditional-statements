#!/usr/bin/env node

// Function to handle admin login
function adminLogin(username, password) {
  return (username === "admin" || username === "ADMIN") && password === "12345" 
    ? "Access granted" 
    : "Access denied";
}

// Function to describe the weather based on temperature
function howsTheWeather(temperature) {
  if (temperature < 40) {
    return "It's brisk out there!";
  } else if (temperature <= 65) {
    return "It's a little chilly out there!";
  } else if (temperature > 85) {
    return "It's too dang hot out there!";
  } else {
    return "It's perfect out there!";
  }
}

// Function to play FizzBuzz
function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

// Function to act as a basic calculator
function calculator(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("Invalid operation!");
      return null; // or undefined if preferred
  }
}

// Example usage:

console.log(adminLogin("admin", "12345")); // "Access granted"
console.log(adminLogin("user", "password")); // "Access denied"

console.log(howsTheWeather(30)); // "It's brisk out there!"
console.log(howsTheWeather(50)); // "It's a little chilly out there!"
console.log(howsTheWeather(90)); // "It's too dang hot out there!"
console.log(howsTheWeather(70)); // "It's perfect out there!"

console.log(fizzbuzz(3)); // "Fizz"
console.log(fizzbuzz(5)); // "Buzz"
console.log(fizzbuzz(15)); // "FizzBuzz"
console.log(fizzbuzz(7)); // 7

console.log(calculator("+", 10, 5)); // 15
console.log(calculator("-", 10, 5)); // 5
console.log(calculator("*", 10, 5)); // 50
console.log(calculator("/", 10, 5)); // 2
console.log(calculator("%", 10, 5)); // Invalid operation!
