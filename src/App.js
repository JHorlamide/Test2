import React, { useState } from "react";

// Create a simple React App that shows a list of numbers.
// The Application will have a text input that only accepts integers,
//when the user presses enter on the input, the number will be added to the list.

// The App will show each of the numbers as "Number #" with a checkbox next to it.
// The list of numbers will always show the highest number first, the lowest number last,
// the rest of the numbers appear in the same order they are added, when a number's checkbox is checked,
// the number will have a line through as indication of an excluded number, and if checked,
// the number cannot be considered neither as maximum or minimum.
//  If unchecked, it goes back to normal behaviour.

// The App should persist the numbers, so if the page is refreshed the list is in the same state as before.

function App() {
  const [num, setNum] = useState("");
  const [numbers, setNumber] = useState([1, 3, 10, 20, 50, 4, 5, 6]);
  const [isChecked, setIsChecked] = useState(false);


  console.log("IsTrue: ", isChecked)

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(num);
  };

  const handleCheck = (num) => {
    numbers.filter((number) => {
      const result = number !== num;
      console.log("Result: ", result);
      return setIsChecked(result);
    });
  };

  return (
    <div className="App">
      {numbers
        .sort((a, b) => b - a)
        .map((num, index) => (
          <div
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
            key={index}
          >
            {num}# <input type="checkbox" onClick={() => handleCheck(num)}/>
            <br />
          </div>
        ))}

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="number"
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button type="submit">Add Number</button>
      </form>
    </div>
  );
}

export default App;
