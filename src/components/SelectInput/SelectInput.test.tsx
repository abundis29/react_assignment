import { render, fireEvent } from "@testing-library/react";
import SelectInput from "./SelectInput";

interface Product {
  id: string;
  name: string;
  price: number;
}
const myProductList: Product[] = [{ id: "1", name: "Product 1", price: 10 }, { id: "2", name: "Product 2", price: 120 }];

describe("SelectInput", () => {
  test("should display the options correctly", () => {
    const { getByText } = render(
      // eslint-disable-next-line react/react-in-jsx-scope
      <SelectInput
        options={myProductList}
        title="Select a Product"
        placeholder="Select a product"
        onSelected={() => null}
      />
    );
    expect(getByText("Product 1")).not.toBeNull();
    expect(getByText("Product 2")).not.toBeNull();
  });

//   test("should call the onChange callback with the correct argument", () => {
//     const handleSelection = jest.fn();
//     const { getByText } = render(
//       // eslint-disable-next-line react/react-in-jsx-scope
//       <SelectInput
//         objectList={myProductList}
//         title="Select a Product"
//         placeholder="Select a product"
//         onChange={handleSelection}
//       />
//     );

//     const select = getByTestId("select");
//     fireEvent.change(select, { target: { value: "2" } });
//     expect(handleSelection).toHaveBeenCalledWith({ id: "2", name: "Product 2", price: 20 });
//   });
});
