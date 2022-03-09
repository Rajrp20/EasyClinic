import React from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
function App() {
  const [tags, setTags] = React.useState(["example tag"])
  return (
    <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
    />
  )
}
const root = document.getElementById("root");
ReactDOM.render(<App/>, root);






// import React from "react";
// import ReactDOM from "react-dom";
// import ReactTagInput from "@pathofdev/react-tag-input";
// import  { Component, KeyboardEvent  } from "react";




// <div className="container">
//   {tags.map((tag) => <div>{tag}</div>)}
//   <input/>
// </div>

// const [input, setInput] = useState('');
// const [tags, setTags] = useState([]);


// <div className="container">
//   {tags.map((tag) => <div className="tag">{tag}</div>)}
//   <input
//     value={input}
//     placeholder="Enter a tag"
//     onKeyDown={onKeyDown}
//     onChange={onChange}
//   />
// </div>

// const onChange = (e) => {
//     const { value } = e.target;
//     setInput(value);
//   };


//   const onKeyDown = (e) => {
//     const { key } = e;
//     const trimmedInput = input.trim();
  
//     if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
//       e.preventDefault();
//       setTags(prevState => [...prevState, trimmedInput]);
//       setInput('');
//     }
//   };



//   const onKeyDown = (e) => {
//     const { key } = e;
//     const trimmedInput = input.trim();
  
//     if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
//       e.preventDefault();
//       setTags(prevState => [...prevState, trimmedInput]);
//       setInput('');
//     }
  
//     if (key === "Backspace" && !input.length && tags.length) {
//       e.preventDefault();
//       const tagsCopy = [...tags];
//       const poppedTag = tagsCopy.pop();
  
//       setTags(tagsCopy);
//       setInput(poppedTag);
//     }
//   };

// const [isKeyReleased, setIsKeyReleased] = useState(false);

// const onKeyDown = (e) => {
//     const { key } = e;
//     const trimmedInput = input.trim();
  
//     if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
//       e.preventDefault();
//       setTags(prevState => [...prevState, trimmedInput]);
//       setInput('');
//     }
  
//     if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
//       const tagsCopy = [...tags];
//       const poppedTag = tagsCopy.pop();
//       e.preventDefault();
//       setTags(tagsCopy);
//       setInput(poppedTag);
//     }
  
//     setIsKeyReleased(false);
//   };
  
//   const onKeyUp = () => {
//     setIsKeyReleased(true);
//   }

//   {tags.map((tag, index) => (
//     <div className="tag">
//       {tag}
//       <button onClick={() => deleteTag(index)}>x</button>
//     </div>
//   ))}

//   const deleteTag = (index) => {
//     setTags(prevState => prevState.filter((tag, i) => i !== index))
//   }