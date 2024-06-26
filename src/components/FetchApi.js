import React from 'react'
import { useState } from 'react'
import axios from 'axios'

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
        <div className="card mt-5">
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">Fetch data with the help of Axios package</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore, recusandae nam dolorum nostrum sed! Possimus ex, natus pariatur sunt ab itaque obcaecati voluptatem tempora, magni similique ad quae libero!</p>
              <button className="btn btn-primary" onClick={fetchApiData}>Fetch News</button>

            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value) => {
              return (
                <div className="col-4 g-4">
                  <div className="card" >
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="/" className="btn btn-primary">Resource: {value.source.name}</a>
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
