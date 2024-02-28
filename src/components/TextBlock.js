import { useRef } from "react";
import "./TextBlock.css";

const TextBlock = (props) => {
  const refTitle = useRef(null);
  const refParagraph = useRef(null);
  const refBtn01 = useRef(null);
  const refBtn02 = useRef(null);
  const refBtn03 = useRef(null);
  const refBtn04 = useRef(null);

  const btn01Clicked = () => {
    refTitle.current.textContent = props.data[0].title;
    refParagraph.current.textContent = props.data[0].abstract;
    refBtn01.current.className = "topnews-btn clicked";
    refBtn02.current.className = "topnews-btn";
    refBtn03.current.className = "topnews-btn";
    refBtn04.current.className = "topnews-btn";
  };

  const btn02Clicked = () => {
    refTitle.current.textContent = props.data[1].title;
    refParagraph.current.textContent = props.data[1].abstract;
    refBtn02.current.className = "topnews-btn clicked";
    refBtn01.current.className = "topnews-btn";
    refBtn03.current.className = "topnews-btn";
    refBtn04.current.className = "topnews-btn";
  };

  const btn03Clicked = () => {
    refTitle.current.textContent = props.data[2].title;
    refParagraph.current.textContent = props.data[2].abstract;
    refBtn03.current.className = "topnews-btn clicked";
    refBtn01.current.className = "topnews-btn";
    refBtn02.current.className = "topnews-btn";
    refBtn04.current.className = "topnews-btn";
  };

  const btn04Clicked = () => {
    refTitle.current.textContent = props.data[3].title;
    refParagraph.current.textContent = props.data[3].abstract;
    refBtn04.current.className = "topnews-btn clicked";
    refBtn01.current.className = "topnews-btn";
    refBtn02.current.className = "topnews-btn";
    refBtn03.current.className = "topnews-btn";
  };

  return (
    <div className="textblock">
      <button
        className="topnews-btn clicked"
        ref={refBtn01}
        onClick={btn01Clicked}
      >
        First
      </button>
      <button className="topnews-btn" ref={refBtn02} onClick={btn02Clicked}>
        Second
      </button>
      <button className="topnews-btn" ref={refBtn03} onClick={btn03Clicked}>
        Third
      </button>
      <button className="topnews-btn" ref={refBtn04} onClick={btn04Clicked}>
        Fourth
      </button>
      <div className="textblock-article">
        <h3 ref={refTitle}> {props.data[0].title} </h3>
        <p ref={refParagraph}>{props.data[0].abstract}</p>
      </div>
    </div>
  );
};

export default TextBlock;
