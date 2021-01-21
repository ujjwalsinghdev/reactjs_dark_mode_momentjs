import React from "react"
import moment from "moment"

const Article = ({ title, snippet, date, length }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>
        {/* <span>{moment(date).format("dddd Do, YYYY")}</span> */}
        <span>{moment(date).startOf("day").fromNow()}</span>
        <span>{length} min read </span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
