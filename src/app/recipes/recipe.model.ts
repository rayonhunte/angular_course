import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public id: Number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(id: Number, name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredient;
    }
}
