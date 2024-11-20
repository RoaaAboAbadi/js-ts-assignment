// Task 5
function checkEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log(checkEmail("roaaabadi@gmail.com"));
console.log(checkEmail("roaa@abadi"));
