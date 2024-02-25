import { useEffect, useState } from 'react';
import './ArticleComp.css'

const ArticleComp = (props) => {
    const { articleData } = props;
    
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [abstract, setAbstract] = useState(''); 
    const [link, setLink] = useState('');
    
    useEffect(() => {
        setTitle(articleData.title || '');
        setImage(articleData.multimedia[0]?.url || '');
        setAbstract(articleData.abstract || '');
        setLink(articleData.url || '');
    }, [articleData]);
    
    return (
        <div className='article-component'>
            <h3>{title}</h3>
            <img src={image} alt="" width="500px"  />
            <p>{abstract}</p>
            <a href={link} target='_blank'>More...</a>
        </div>
    );
}

export default ArticleComp;









// import {useEffect,useState} from 'react'

// const ArticleComp = (props) => {
    
//     const [title,setTitle] = useState()
//     const [image,setImage] = useState()
//     const [abstract,setAbstract] = useState() 
//     const [link, setLink] = useState()
    
//     useEffect(() => {
//         setTitle(articleData.title)
//         setImage(articleData.multimedia[0].url)
//         setAbstract(articleData.abstract)
//         setLink(articleData.url)
           
    
//     }, [])
    
    
    
//   return (
//     <div className='article'>
//         <h3>{title}</h3>
//         <img src={image} alt="" width="500px"  />
//         <p>{abstract}</p>
//         <a href={link} target='_blank'>More...</a>
//     </div>
//   )
// }

// export default ArticleComp
