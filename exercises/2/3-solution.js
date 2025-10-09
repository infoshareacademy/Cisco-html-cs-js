// Napisz definicję funkcji getUniqueEmails która zwróci tablicę unikatowych adresów email (bez powtórzeń)
// Wykorzystać pętlę for of

function getUniqueEmails(emails) {
  const uniqueEmails = [];

  for (const email of emails) {
    if (!uniqueEmails.includes(email)) {
      uniqueEmails.push(email);
    }
  }

  return uniqueEmails;
}

const emailList = [
  "jan@example.com",
  "anna@example.com",
  "jan@example.com",
  "kuba@example.com",
  "anna@example.com"
];

const unique = getUniqueEmails(emailList);

console.log(unique);