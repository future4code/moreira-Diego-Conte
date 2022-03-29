import express from "express";
import cors from "cors";

//Starting configs >>>>>>
const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
  console.log(`Server is running in http://localhost:3003`);
});
//Ending configs <<<<<<

// Exercício 1
app.get("/", (req, res) => {
  res.send("Hello from the other side; I must've called a thousand times.");
});

// Exercício 2
type templateUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}[];

//Exercício 3
const users: templateUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
];

//Exercício 4
app.get("/users", (req, res) => {
  // const getUser: template = users.map((u)=> {
  //     return u
  // })

  res.status(200).send(users);
});

//Exercício 5
type templatePosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[];

//Exercício 6
//Alocar estes dados em outro array me parece mais lógico porque são informações diversas
//e também porque facilita a organização e uso dos dados.
const posts: templatePosts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cumnreprehenderit molestiae \
    ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 2,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\
    nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\
    nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 3,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\
    nvoluptatem doloribus vel accusantium quis pariatur\
    nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 4,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\
    nsit amet autem assumenda provident rerum culpa\
    nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\
    nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\
    nalias aut fugiat sit autem sed est\
    nvoluptatem omnis possimus esse voluptatibus quis\
    nest aut tenetur dolor neque",
  },
];

//Exercício 7
app.get("/posts", (req, res) => {
  const post: templatePosts = posts.map((p) => {
    return p;
  });

  res.status(200).send(post);
});

//Exercício 8
app.get("/posts/:userId", (req, res) => {
  const reqId = Number(req.params.userId);

  const postsByUser = posts.filter((p) => {
    return p.userId === reqId;
  });

  if (postsByUser.length === 0) {
    return res.status(400).send("Nenhum post encontrado.");
  } else {
    return res.status(200).send(postsByUser);
  }
});

//Desafio 9
app.delete("/posts/:postId", (req, res) => {
  const id = Number(req.params.postId);
  const deletedPosts = posts.filter((p) => {
      return p.id !== id
  })

  if(deletedPosts.length === posts.length){
      return res.status(400).send('Nenhum post localizado.')
  } else {
      return res.status(200).send('Post deletado.')
  }
});

//Desafio 10
app.delete("/users/:userId", (req, res) => {
    const id = Number(req.params.userId);
    const deletedUser = users.filter((u) => {
        return u.id !== id
    })

    if(users.length === deletedUser.length){
        return res.status(400).send('Id não encontrado.')
    }else{
        return res.status(200).send('Usuário deletado.')
    }
})
