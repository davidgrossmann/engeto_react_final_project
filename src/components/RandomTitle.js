import "./RandomTitle.css";

const RandomTitle = (props) => {
  return (
    <div className="randomtitle">
      <img
        className="openpic"
        src={props.title[props.number].multimedia[0].url}
        alt="uvodni_obrazek"
      />
      <h3>
        <a
          href={props.title[props.number].url}
          target="_blank"
          rel="noreferrer"
        >
          {props.title[props.number].title}
        </a>
      </h3>
    </div>
  );
};

export default RandomTitle;
