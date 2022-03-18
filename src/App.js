import Accordion from "./components/Accordion";
// import Search from './components/Search';
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const items = [
  {
    title: "What is React?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, exercitationem.",
  },
  {
    title: "Why use React?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, exercitationem.",
  },
  {
    title: "where is React?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, exercitationem.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <br />
      <Accordion items={items} />
      <br />
      {/*  <Search/>
      <br /> */}
      <button onClick={() => setToggle(!toggle)}>Dropdown Toggle</button>
      {toggle ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
