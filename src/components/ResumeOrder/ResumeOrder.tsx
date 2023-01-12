import React from 'react';
import { Restaurant, Order } from "@/Types";

export interface ResumeProps {
    selectedMeal: string;
    numberOfPeople: number;
    selectedRestaurant: string;
    selectedDish: Restaurant;
    numberOfServings: number;
    orders: Order[]
}

const ResumeOrder: React.FC<ResumeProps> = ({ selectedMeal, numberOfPeople, selectedRestaurant, orders }) => {
    return (
        <div className='p-10'>
            <h2>Resume</h2>
            <div className="grid grid-cols-4 gap-4">
                <div>Meal</div>
                <div>{selectedMeal}</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div>No. of People </div>
                <div>{numberOfPeople}</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div>Restaurant </div>
                <div>{selectedRestaurant}</div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div>Dishes </div>
                <div> <table className="table-auto">
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore */}
                                <td className='w-90'>{order.dish && order.dish}</td>
                                <td className='w-90'>{order.numberOfServings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table></div>
            </div>
        </div>
    );
};

export default ResumeOrder
