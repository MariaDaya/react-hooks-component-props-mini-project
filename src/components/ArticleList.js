import React from "react";

function ArticleList (blogData){
    return <main>
     blogData.posts.map(post => (
     <Article date={post.date} preview={post.preview} />
      ))
    </main>
}