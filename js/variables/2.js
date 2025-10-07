if (true) {
  var oldVariable = "I'm var!";
  let newVariable = "I'm let!";
  const constantVariable = "I'm const!";
}

console.log(oldVariable); // ✅ działa
console.log(newVariable); // ❌ błąd
console.log(constantVariable); // ❌ błąd