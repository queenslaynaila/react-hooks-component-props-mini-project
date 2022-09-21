import React from "react";
import  Article from "./Article"
import blogData from "../data/blog";
function ArticleList({posts}){
     console.log(posts)
    const lists = posts.map((list)=>{
        console.log(list)
        return(
            <Article key={list.id}
            title={list.title}
            date={list.date}
            preview={list.preview}
            /> 
        )
    })
     console.log(lists)
    return(
        <main>
             {lists} 
        </main>
    )
}

export default ArticleList