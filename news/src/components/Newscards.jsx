import React from 'react';
// import {News} from './components/News';
export const Newscards = ({data}) => {
  console.log("vada", data);

  return (
    <div className='detailsDiv'>
        {/* {data.map((article)=>{
            return(
                <div>
                    <div><h3 style={{lineHeight:"20px"}}>{article.title}</h3></div>
                    <h6><b>Source:{article.source.name}</b>
                    </h6>
                    <div><img src={article.image} alt="" style={{width:"300px",height:"300px"}} /></div>
                    <p><b>Content:</b>{article.content}</p>
                    <div><p><b>Description</b>{article.description}</p></div>
                </div>
            )
        })} */}
    </div>
  )
}

