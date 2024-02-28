import { useState } from "react";
import "./QrGenerator.css";

const QrGenerator = () => {
  const [submitedText, setSubmitedText] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const isValidUrl = (text) => {
    const urlRegex = /^(ftp|http|https):\/\/(www\.)?[^ "]+$/;
    const wwwUrlRegex = /^(www\.)?[^ "]+\.[^ "]+$/;
    return urlRegex.test(text) || wwwUrlRegex.test(text);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (submitedText.trim() === "") {
      setError("Musíte zadat nějaký text");
      setText("");
    } else if (isValidUrl(submitedText)) {
      setUrl(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${submitedText}`
      );
      setError("");
      setText(submitedText);
    } else {
      setUrl(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${submitedText}`
      );
      setText(submitedText);
      setError("Zadaný text není platná URL adresa. QR kód bude jen text.");
    }
    setSubmitedText("");
  };

  return (
    <div>
      <h1>Generátor QR kódů</h1>
      <div className="qrgenerator">
        <div className="qrleft">
          <h2>Vložte URL nebo text</h2>
          <form onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="Text nebo URL"
              value={submitedText}
              onChange={(event) => setSubmitedText(event.target.value)}
            />

            <button className="qrgenerator-btn">Generovat QR kód</button>
          </form>
        </div>

        <div className="qrright">
          <h2>Váš QR kód</h2>
          {url ? (
            <>
              <img src={url} alt="qr kód" />
              <p>{text}</p>
            </>
          ) : (
            <p>Čekám na zadání</p>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;
