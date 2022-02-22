import {useState} from "react";


const Input = ({showDiv}) => {
   const [searchWord, setSearchWord] = useState("");

    return (
       <div>
           <input
               type="text"
               data-testid="searchBar"
               placeholder="Search..."
               onChange={(e) => {
                   setSearchWord(e.target.value);
               }}
           />

           <h1 data-testid="displaySearch">{searchWord}</h1>

           {showDiv && (
               <div data-testid="divWeWantToShow">
                   Hey My name is Jin Kazama. And I know what you did last summer!
               </div>
           )}

       </div>
    )
};

export default Input;