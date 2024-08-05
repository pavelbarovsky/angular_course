export interface Recipe {
    id: string;
    body: string;
    title: string;
    tags: string[];
    image: string;
    timeCooking: number;
    createdOn: string;
    updatedOn: string;
    author: {
      avatar: string;
      id: string;
      firstName: string;
      lastName: string;
      middleName: string;
    }
}

export class LoadRecipes {
    static readonly type = '[App] Load Recipes';
}

export class DeleteRecipe {
  static readonly type = '[Recipe] Delete Recipe';
  constructor(public id: string) {}
}

export class LikeRecipe {
  static readonly type = '[Recipe] Like Recipe';
  constructor(public recipe: Recipe) {}
}

export class UnlikeRecipe {
  static readonly type = '[Recipe] Unlike Recipe';
  constructor(public id: string) {}
}