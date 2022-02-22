import { render, act, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {

    it("rendered button", () => {
        const {getByTestId} = render(<Button/>)
        const button = getByTestId("button");
        // test whether the button element appears
        expect(button).toBeTruthy()
    });

   it("render 1 button before button click", () => {
       const {getAllByTestId} = render(<Button />)
       const buttonList = getAllByTestId("button");
       expect(buttonList).toHaveLength(1);
   })

    it("render 2 button after button click", async () => {
       await act( async  () => {
            const {getAllByTestId} = render(<Button />)
            const buttonList = getAllByTestId("button"); // old button list before click event happens
            await fireEvent.click(buttonList[0]);
            expect(getAllByTestId("button")).toHaveLength(2);
        })


    })


})