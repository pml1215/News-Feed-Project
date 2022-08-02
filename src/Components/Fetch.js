import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import News from './NewsInfo';

function FetchNews(props) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    let {newsCategory} = useParams();

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {category:newsCategory, safeSearch: 'Off', textFormat: 'Raw'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '9da41f44bcmshf68bf6e7e12e85fp1a1880jsn6693a732a5f7',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
      };
  
      useEffect(() => {
          axios.request(options)
              .then((json) => {
                  setIsLoading(true);
                  setNews(json.data.value);
                  console.log(json.data.value);
              }
              )
              .catch(error => console.log(error))
      }, [newsCategory]);

    if (!isLoading) {
        return (
        <div className="loading">Loading...
        </div>
        );
    } else {
        return (
            <div>
                {news.map(results =>
                    <News
                        key={results.id}
                        image={results.image?.thumbnail.contentUrl}
                        description={results.description}
                        title={results.name}
                        url={results.url}
                    />)
                }
            </div>
        );
    }
}

export default FetchNews;