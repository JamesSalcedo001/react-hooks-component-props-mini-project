import React from "react";
import Article from "./Article"

function ArticleList({posts}) {

    const postMap = posts.map((post) => (
        <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
        />
    ))

    return (
        <main>{postMap}</main>
    )
}

export default ArticleList;