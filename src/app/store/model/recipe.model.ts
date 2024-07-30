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