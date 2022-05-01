import moment from "moment";
import { Recipes } from "../entities/recipes";
import { idGenerator } from "../services/idGenerator";

const generatingId = new idGenerator();

export const populateData = [
  {
    id: generatingId.generate(),
    title: "Biscoito de banana com aveia",
    description: "Ingredientes: 2 bananas bem maduras, 1 xícara de aveia.",
    createdAt: moment().format("DD/MM/YYYY"),
    id_creator: "a68ecb6f-8c58-4fc2-a9ce-1fdb2435c083",
  },
  {
    id: generatingId.generate(),
    title: "Panqueca de banana",
    description: "Ingredientes: 1 ovo, 1 banana, canela a gosto.",
    createdAt: moment().format("DD/MM/YYYY"),
    id_creator: "b61e97fa-b561-4645-9a39-35118e02e32f",
  },
  {
    id: generatingId.generate(),
    title: "Massa de pizza",
    description:
      "Ingredientes: 1 xícara de farinha pronta com fermento, 1 xícara de iogurte Grego ou natural, Farinha extra para polvilhar a superfície.",
    createdAt: moment().format("DD/MM/YYYY"),
    id_creator: "4ad1d219-3ee0-49c5-9c22-48b050e20da3",
  },

  {
    id: generatingId.generate(),
    title: "Brigadeiro de colher",
    description:
      "Ingredientes: 1 lata de leite condensado, 2 colheres de sopa de margarina, 4 colheres de sopa de chocolate em pó.",
    createdAt: moment().format("DD/MM/YYYY"),
    id_creator: "4ad1d219-3ee0-49c5-9c22-48b050e20da3",
  },
  {
    id: generatingId.generate(),
    title: "Bombocado",
    description:
      "Ingredientes: 500 g de coco ralado e 1 lata de leite condensado.",
    createdAt: moment().format("DD/MM/YYYY"),
    id_creator: "b61e97fa-b561-4645-9a39-35118e02e32f",
  },
];
