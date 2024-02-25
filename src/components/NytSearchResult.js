import { useState } from 'react'
import './NytSearchResult.css'

const NytSearchResult = (props) => {
    const [index, setIndex] = useState(0)
    
    const checkIndex = (resultIndex) => {
        if (resultIndex < 0) {
            return props.searchResults.length - 1
        } else if (resultIndex > props.searchResults.length - 1) {
            return 0
        } else {
            return resultIndex
        }
    }

    const nextResult = () => {
        const newIndex = index + 1
        setIndex(checkIndex(newIndex))
    }

    const prevResult = () => {
        const newIndex = index - 1
        setIndex(checkIndex(newIndex))
    }
    
    const otherResults = props.searchResults.filter((searchResult, idx) => {
        return idx !== index; 
      });


    if (props.searchedTerm && props.searchResult ) {
        return <div className='search-result'>
            <div className='search-result_left'>
            <h2>{props.searchResults[index].headline.main}</h2>
            {/* {console.log(props.searchResults[index])} */}
            <img src={`https://www.nytimes.com/${props.searchResults[index].multimedia[0].url}`} alt="" />
            <p>{props.searchResults[index].lead_paragraph} <a href={props.searchResults[index].web_url} target='blank'> More...</a></p>
            
            <button className='search-button' onClick={prevResult}> back </button>
            <button className='search-button' onClick={nextResult}> forward </button>
            </div>
            
            <div className="search-result_right">
            <h2>Other results</h2>
            {otherResults.map((otherResult, index) => {
                return <div key={index}>
                    <h3>{otherResult.headline.main}</h3>
                    <p>{otherResult.lead_paragraph} <a href={otherResult.web_url} target='blank'>More... </a></p>
                </div>

            })}
                
            </div>
           

        </div>
    } else {
        return <div>
            <p className='waiting'>Waiting...</p>
        </div>
    }
}

export default NytSearchResult

// console.log(searchResults);
// console.log(searchResults[1].headline.main);
// console.log(searchResults[1].abstract);
// console.log(searchResults[1].web_url);
// console.log(searchResults[1]);
// console.log(searchResults.length);   
