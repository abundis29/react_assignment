import React from 'react';
import { CartProps } from "@/Types";
import SelectInput from "../SelectInput";

export interface RestaurantListProps extends CartProps {
    onSelected: (restaurant: string) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ selectedMeal, data, onSelected }) => {
    let filteredData = data;
    if (selectedMeal) {
        filteredData = filteredData.filter((restaurant) =>
            restaurant.availableMeals.includes(selectedMeal)
        );
    }
    const uniqueRestaurant = [...new Set(filteredData.map(item => item.restaurant))];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
    return <SelectInput options={uniqueRestaurant} title="Select a restaurant" placeholder="---" onSelected={onSelected} />
};

export default RestaurantList