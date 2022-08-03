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
        params: {category: newsCategory,safeSearch: 'Off', count: '5', headlineCount: '5',textFormat: 'Raw'},
        headers: {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': 'df61594a49mshad3ef36d5a24d11p160b8djsn7f3e7b832ae0',
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