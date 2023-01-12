import React from 'react';
import { CartProps } from "@/Types";
import SelectInput from '../SelectInput';


export interface DishListProps extends CartProps {
    onSelected: (dish: string) => void;
}

const DishList: React.FC<DishListProps> = ({ selectedMeal, data, selectedRestaurant, onSelected }) => {
    let filteredData = data;
    if (selectedMeal) {
        filteredData = filteredData.filter((restaurant) =>
            restaurant.availableMeals.includes(selectedMeal)
        );
    }
    if (selectedRestaurant) {
        filteredData = filteredData.filter((restaurant) =>
            restaurant.restaurant.includes(selectedRestaurant)
        );
    }
    return <SelectInput
        options={filteredData}
        title="Please select a dish"
        placeholder="---"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSelected={onSelected}
    />
};
export default DishList