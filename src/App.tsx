import React, { useCallback, useEffect, useState } from "react";
import { OrderFormState, Restaurant } from "@/Types";
import { SelectInput, CounterInput, RestaurantList, DishesList, ResumeOrder, Stepper } from "./components";
import { useFindById } from "./hooks/useFindById";
import { MEALS } from "./utils/constants";




const App: React.FC = () => {
    const [data, setData] = useState<[]>([]);
    const [form, setForm] = useState<OrderFormState>({
        selectedMeal: null,
        numberOfPeople: 0,
        selectedRestaurant: '',
        selectedDish: null,
        numberOfServings: 0,
        selections: [],
        orders: []
    });

    useEffect(() => {
        fetch("./data/dishes.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data.dishes)
            });
    }, [])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSelectMeal = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setForm((prevState) => ({ ...prevState, selectedMeal: value }));
    };

    const handleSelectRestaurant = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm((prevState) => ({ ...prevState, selectedRestaurant: e.target.value }));
    };

    const handleSelectDish = (e: React.ChangeEvent<HTMLSelectElement>, dish: Restaurant) => {
        setForm((prevState) => ({ ...prevState, selectedDish: dish }));
    };


    const handleAddDish = (e: { stopPropagation: () => void; preventDefault: () => void; }) => {
        e.stopPropagation();
        e.preventDefault();
        addDish();
    };

    const addDish = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setForm((prevState) => {
            const { selectedMeal, selectedRestaurant, selectedDish, numberOfServings } = prevState;
            const dish = useFindById(data, selectedDish)
            console.log(dish)
            const newOrder = {
                meal: selectedMeal,
                restaurant: selectedRestaurant,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                dish: dish?.name,
                numberOfServings
            };
            return {
                ...prevState,
                orders: [...prevState.orders, newOrder],
                selectedDish: null,
                numberOfServings: 0
            };
        });
    }, [form]);

    const handleSubmit = () => {
        // let totalDishes = form.orders.reduce((acc, order) => acc + order.numberOfServings, 0);
        // if (totalDishes < form.numberOfPeople) {
        //     setErrors({ totalDishes: "Total number of dishes should be greater or equal to the number of people selected in step 1" });
        // } else if (totalDishes > 10) {
        //     setErrors({ totalDishes: "Maximum of 10 dishes allowed" });
        // } else {
        //     console.log("Order submitted:", form.orders);
        // }
    }

    const steps = [
        <div key={0} className="md:flex md:items-center mb-6 mt-10" style={{ flexDirection: 'column' }}>
            <SelectInput className="md:w-1/3" name="selectedMeal" options={MEALS} title="Please Select a meal" placeholder="---" onSelected={handleSelectMeal} />
            <br />
            <CounterInput className="md:w-1/3" name="numberOfPeople" title={"Please enter the number of people"} onCountChange={handleChange} max={10} />
        </div>,

        <div key={1} className="md:flex md:items-center mb-6 mt-10" style={{ flexDirection: 'column' }}>
            <RestaurantList
                className="md:w-1/3"
                selectedMeal={form.selectedMeal}
                data={data}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onSelected={handleSelectRestaurant}
            />
            <div className="md:w-1/3"></div>
        </div>,
        <div key={2} className="md:flex md:items-center mb-6 mt-10" style={{ flexDirection: 'column' }}>
            <DishesList
                selectedMeal={form.selectedMeal}
                selectedRestaurant={form.selectedRestaurant}
                selectedDish={form.selectedDish}
                data={data}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onSelected={handleSelectDish}
            />
            <br />
            <CounterInput
                title={"Please enter the number of Servings"}
                onCountChange={handleChange}
                name="numberOfServings" max={100}
            />
            <button
                className="ml-20 w-10 h-10 rounded-full bg-teal-400 hover:bg-teal-500 text-white"
                onClick={handleAddDish}
            >
                +
            </button>
        </div>,
        <div key={4} className="md:flex md:items-center mb-6 mt-10" style={{ flexDirection: 'column' }}>
            <ResumeOrder
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                selectedMeal={form.selectedMeal}
                numberOfPeople={form.numberOfPeople}
                selectedRestaurant={form.selectedRestaurant}
                orders={form.orders}
            />
        </div>,
    ]

    return (
        <div className="p-5">
            <form onSubmit={(e) => { e.preventDefault() }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 columns-1">
                <Stepper steps={steps} />
            </form>
        </div>
    );
};

export default App;