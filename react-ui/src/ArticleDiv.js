import React from "react";
const ArticleDiv = (article) => {
//   console.log("article:" + JSON.stringify(article, null, 2));
  return (
    //   <h1>hello</h1>
    Object.keys(article.props).map(i => {
    //   console.log("article[i].title:" + JSON.stringify(article.props[i].imageURL));
    //   // console.log("i:" + i);
      return (
        <div key={i} className="articleBox">
            <div className="boxStyle">
                <a href={article.props[i].articleURL} className="articleLinkStyle">
                    <h4>{article.props[i].title}</h4>
                    <img src={article.props[i].imageURL} alt='not found' className='articleImage'></img>
                    <div className="subTitleDiv">
                        <p id="publicationStyle">{article.props[i].publication}</p>
                        <p id="dateStyle">{article.props[i].date}</p>
                    </div>
                    <div className="descriptionDiv">
                        <p id="descriptionStyle">{article.props[i].description}</p>
                    </div>
                </a>
            </div>
        </div>
      )
    })
  )
}

export default ArticleDiv;