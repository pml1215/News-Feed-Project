import { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function FetchTrending(props) {
  const [trending, setTrending] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
    params: { textFormat: 'Raw', safeSearch: 'Off', count: '8' , originalImg: 'true'},
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '16b18d25c4msh56163c1c254872ap10e61fjsn8e67f8ab03a8',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options)
      .then((json) => {
        setIsLoading(true);
        setTrending(json.data.value);
        console.log(json.data.value);
      }
      )
      .catch(error => console.log(error))
  }, []);

  if (!isLoading) {
    return (
      <div className="loading">Content is Loading...
      </div>
    );
  } else {
    return (
      <div className='cardgrp'>
        <Row xs={1} lg={2} xl={4} >
          {trending.map(results => (
            <Col>
              <CardItem
                key={results.id}
                image={results.image?.url}
                notfoundimage={"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
                title={results.name}
                text={results.query.text}
                url={results.newsSearchUrl}
                date={results.datePublished}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default FetchTrending;