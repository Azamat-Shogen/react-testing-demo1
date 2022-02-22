import { render, act, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {

    it("rendered input", () => {
      const {getByTestId} = render(<Input showDiv={false}/>)
      const input = getByTestId("searchBar");
      // test whether the input element appears
      expect(input).toBeTruthy()
    });

    it("render div", () => {
        const {getByTestId} = render(<Input showDiv={true}/>)
        const div = getByTestId("divWeWantToShow");
        expect(div).toBeTruthy();
    });

    it("dont render div", () => {
        const {queryByTestId} = render(<Input showDiv={false}/>)
        const div = queryByTestId("diveWeWantToShow");
        expect(div).toBeFalsy();
    })

    it("change on input causes change on header", async () => {
       await act( async  () => {
            const {getByTestId} = render(<Input showDiv={true}/>);
            const input = getByTestId("searchBar");
            const header = getByTestId("displaySearch");
            const inputWord = "Azamat"
            await fireEvent.change(input, {target: {value: inputWord}})
            expect(header.innerHTML).toBe(inputWord)
        })
    })
})