interface Post {
  id: number;
  img: string;
  tittle: string;
  userId: number;
  description: string;
  ingredients: Ingredient[];
}

interface Ingredient{
  name: string;
  quantity: string;
}

