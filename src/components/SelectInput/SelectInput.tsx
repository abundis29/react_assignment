import React, { useState } from "react";

interface Props {
  options: any[] | string[];
  title: string;
  placeholder: string;
  name?: string;
  className?: string;
  onSelected: (e: React.ChangeEvent<HTMLSelectElement>, selected: any) => void;
}


export type { Props };

const SelectInput = ({
  options,
  title,
  name,
  placeholder,
  className,
  onSelected
}: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    if (e.target.value) {
      onSelected(e, e.target.value);
    }
  };

  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="relative rounded-md shadow-sm">
        <select
          className="block appearance-none w-full bg-white rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={selectedValue}
          onChange={handleChange}
          name={name}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {typeof options[0] === 'string'
            ? options.map((str) => (
              <option key={str} value={str}>
                {str}
              </option>
            ))
            : options.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.name}
              </option>
            ))
          }
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default SelectInput;

/**
 * 
 * 
 * 
Description: A brief overview of what the component does and what problem it solves.
Props: A list of the component's props, including their types and a brief description of what they do. For example:
options: An array of objects to display in the select input (required). The type of the objects can be defined by user.
title: The title to display above the select input (required).
placeholder: The text to display as the default option in the select input (required).
onChange: A callback function that is called when the user makes a selection, with the selected object passed as an argument (required).
Examples: Some code examples of how to use the component, including the props that should be passed in.
Notes: Any additional notes or considerations that developers should keep in mind when using the component.
Related Components: If the component is part of a larger collection of components, you may want to include links to the other components in this collection.
Here's an example of what the documentation for the SelectInput component might look like:

SelectInput
A flexible and customizable select input component for React.

Props
Prop	Type	Description	Required
options	T[]	An array of objects to display in the select input.	yes
title	string	The title to display above the select input.	yes
placeholder	string	The text to display as the default option in the select input.	yes
onChange	(selected: T) => void	A callback function that is called when the user makes a selection, with the selected object passed as an argument.	yes
Examples
Copy code
interface Product {
  id: string;
  name: string;
  price: number;
}
const handleSelection = (selected: Product) => {
  console.log(`Selected product: ${selected.name}`);
};
const myProductList: Product[] = [{ id: "1", name: "Product 1", price: 10 }, ...];

return (
  <SelectInput
    options={myProductList}
    title="Select a Product"
    placeholder="Select a product"
    onChange={handleSelection}
  />
);
Notes
options is the array of the generic type, so it can be any type of object and it required the object must have id and name properties
onChange callback is called with the selected object when the user makes a selection, you may use that object as per requirement
title and placeholder are required props
Related Components
None
Resources
React - Select
Using this type of documentation, developers can quickly understand how to use your component, what props it takes and what it does, which will help them to use it effectively.
 */