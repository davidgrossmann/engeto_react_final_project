import { useRef, useState } from "react";
import "./TextBlock.css";

const indexes = [0, 1, 2, 3];
const buttonLabels = ["First", "Second", "Third", "Fourth"];

const TextBlock = (props) => {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const refTitle = useRef(null);
  const refParagraph = useRef(null);
  const refsBtn = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const btnClicked = (index) => {
    refTitle.current.textContent = props.data[index].title;
    refParagraph.current.textContent = props.data[index].abstract;
    setSelectedBtn(index);
    refsBtn.forEach((ref, i) => {
      ref.current.className = `topnews-btn${i === index ? " clicked" : ""}`;
    });
  };

  return (
    <div className="textblock">
      {indexes.map((index) => (
        <button
          key={index}
          className={`topnews-btn${selectedBtn === index ? " clicked" : ""}`}
          ref={refsBtn[index]}
          onClick={() => btnClicked(index)}
        >
          {buttonLabels[index]}
        </button>
      ))}
      <div className="textblock-article">
        <h3 ref={refTitle}>{props.data[selectedBtn].title}</h3>
        <p ref={refParagraph}>{props.data[selectedBtn].abstract}</p>
      </div>
    </div>
  );
};

export default TextBlock;
