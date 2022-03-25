// Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne
// uma lista com apenas os emails dos usuários “admin”.

enum role {
  USER = "user",
  ADMIN = "admin",
}

type template = {
  name: string;
  email: string;
  role: role;
}[];

const employees: template = [
  { name: "Rogério", email: "roger@email.com", role: role.USER },
  { name: "Ademir", email: "ademir@email.com", role: role.ADMIN },
  { name: "Aline", email: "aline@email.com", role: role.USER },
  { name: "Jéssica", email: "jessica@email.com", role: role.USER },
  { name: "Adilson", email: "adilson@email.com", role: role.USER },
  { name: "Carina", email: "carina@email.com", role: role.ADMIN },
];

function emailsList(array: template): string[] {
  const filteredList = array.filter((e) => {
    return e.role === role.ADMIN;
  });

  const emails = filteredList.map((e) => {
    return e.email;
  });

  return emails;
}

console.log(emailsList(employees));
