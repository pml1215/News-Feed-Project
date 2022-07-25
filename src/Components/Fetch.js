import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import News from './NewsInfo';

function FetchNews(props) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    let {category} = useParams();
    const apikey = "a9f71461b4dc4db6aa435b8ef702e570";
    var url = `https://newsapi.org/v2/top-headlines?category=${category}&country=ca&apiKey=${apikey}`;
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                setIsLoading(true);
                setNews(json.articles);
                console.log(json.articles);
                console.log(url);
            })
            .catch(error => console.log(error))
    }, [url]);

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
                        image={results.urlToImage}
                        description={results.description}
                        title={results.title}
                        url={results.url}
                    />)
                }
            </div>
        );
    }
}

export default FetchNews;