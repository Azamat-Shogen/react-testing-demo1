import {useState} from "react";


const Button = () => {
   const [showAnotherButton, setShowAnotherButton] = useState(false)

    return (
       <div>
           <button
           data-testid="button"
           onClick={() => setShowAnotherButton(true)}
           >Click me
           </button>
           {showAnotherButton && (
           <button data-testid="button">
             Click here
           </button>) }
       </div>
    )
};

export default Button;