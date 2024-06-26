import React from 'react'
import { useState } from 'react'
import axios, { Axios } from 'axios'

export default function FetchApi() {
  const [news, setNews] = useState([])

  const fetchApiData = () => {
    // console.log("click me")
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d1656e97a09847798bf7c6229e0d7aff")
      .then((response) => {
        console.log(response)
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div className="container">
        <button className="btn btn-primary mt-5" onClick={fetchApiData}>Fetch Api</button>
      </div>

      <div className="container">
        <div className="row">
        {
          news.map((value)=>{
            return(
              <div className="col-4 g-4">
              <div className="card" >
                <img src={value.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.description}</p>
                  <a href="/" className="btn btn-primary w-75">{value.url}</a>
                </div>
              </div>
            </div>
            )
          })
        }
          
        </div>
      </div>
    </>
  )
}
