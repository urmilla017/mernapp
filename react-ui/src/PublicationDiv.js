import React from "react";
const PublicationDiv = (article) => {
//   console.log("article:" + JSON.stringify(article, null, 2));
  return (
    Object.keys(article.props).map(i => {
      console.log("article[i].title:" + JSON.stringify(article.props[i], null, 2));
      return (
        <div key={i} className="articleBox">
            <div className="boxStyle">
                <a href={article.props[i].articleURL} className="articleLinkStyle">
                    <div className="promptTitle">
                        <h4>{article.props[i].title}</h4>
                    </div>
                    <img src={require('./images/writtenTalesVolume2.jpg')} alt='not found' className='publicationImage'></img>
                    <div className="subTitleDiv">
                        <p id="publicationStyle">{article.props[i].publication}</p>
                        {/* <p id="dateStyle">{article.props[i].date}</p> */}
                    </div>
                    <div className="descriptionDiv">
                        <p id="descriptionStyle">{article.props[i].description}</p>
                    </div>

                    <div className="linkDiv">
                        <p>{article.props[i].articleURL}</p>
                    </div>
                </a>
            </div>
        </div>
      )
    })
  )
}

export default PublicationDiv;