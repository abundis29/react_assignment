
export enum availableMeals {
    lunch = 'lunch',
    dinner = 'diner',
    breakfast = 'breakfast'
}

export interface ResturantMeals {
    [key: string]: string[];
}

export interface Restaurant {
    id: number;
    name: string;
    restaurant: string;
    availableMeals: Array<string>
}

export interface CartProps {
    selectedMeal: string | null;
    selectedRestaurant?: string | null;
    selectedDish?: Restaurant | null;
    onSelected?: (selected: string) => void;
    onSelectedDish?: (selected: Restaurant) => void;
    data: Restaurant[];
}

export interface Order {
    meal: string;
    numberOfPeople?: number;
    restaurant: string;
    dish: Restaurant | null;
    numberOfServings: number;
}

export interface OrderFormState {
    selectedMeal: availableMeals | null;
    numberOfPeople: number;
    selectedRestaurant: string ;
    selectedDish: any | null;
    numberOfServings: number;
    selections: any[];
    orders: Order[];
}