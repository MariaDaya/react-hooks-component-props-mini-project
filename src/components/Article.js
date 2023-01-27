import React from "react";
import blogData  from "../data/blog";
const {preview} =blogData.posts;
function Article ({blogData}){
    return <article>
        <h3>{blogData.name}</h3>
        <small>{blogData.posts.date}</small>
        <p>{blogData.posts.preview}</p>
    </article>
}