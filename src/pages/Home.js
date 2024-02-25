import { useState, useEffect } from "react";
import "./Home.css";
import RandomTitle from "../components/RandomTitle";
import ArticlesBar from "../components/ArticlesBar";
import TextBlock from "../components/TextBlock";



const url =
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=kF5neFdAJbfD3DbuuXYopll4pso6SxJw";


const Home = () => {
  const [topNewsResults, setTopNewsResults] = useState([]);
  const [loading, setLoading] = useState("true");
  const [randomNumber, setRandomNumber] = useState(0);
  

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTopNewsResults(data.results);        
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    setRandomNumber(Math.floor(Math.random() * 4));
    
  }, []);
  console.log(topNewsResults);
  console.log(randomNumber);
  


  if (loading) {
    return (
      <div className="container">
        <p>Načítám data...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>NYT Project </h1>
      <h2>Random news of the day</h2>
      <RandomTitle title={topNewsResults} number={randomNumber}>
      </RandomTitle>
      <h2>In other news</h2>
      <ArticlesBar data={topNewsResults}></ArticlesBar>
      <h2>Latest News</h2>
      <TextBlock data={topNewsResults} />
         
      
    </div>
  );
};

export default Home;
