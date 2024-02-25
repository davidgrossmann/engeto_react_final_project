import React from 'react'
import ArticleComp from './ArticleComp'

const indexes = [4, 5, 6, 7];

const ArticlesBar = (props) => {
  return (
    <div className="articles-bar">
     {indexes.map((index) => (
          <ArticleComp  key={index} index={index} articleData={props.data[index]} />
     ))}
    </div>
  )
}

export default ArticlesBar
