import { useState, useEffect } from 'react';
import axios from 'axios';
import News from './NewsInfo';

function FetchNews(props) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {category: props.newsCategory,safeSearch: 'Off', count: '12', headlineCount: '5',textFormat: 'Raw', originalImg: 'true'},
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
                  setNews(json.data.value);
                  console.log(json.data.value);
              }
              )
              .catch(error => console.log(error))
      }, [props.newsCategory]);

    if (!isLoading) {
        return (
        <div className="loading">Content is Loading...
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
                        date={results.datePublished}
                    />)
                }
            </div>
        );
    }
}

export default FetchNews;