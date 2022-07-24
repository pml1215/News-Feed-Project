import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import News from './NewsInfo';

function FetchNews() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const apikey = "b4806efc-97a3-49c4-869c-fedfb88e7a36";
    let {category} = useParams();
    var url = `https://content.guardianapis.com/search?section=${category}&order-by=newest&api-key=${apikey}`;
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((json) => {
                setIsLoading(true);
                setNews(json.response.results);
                console.log(json.response.results);
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
                        title={results.webTitle}
                        url={results.webUrl}
                    />)
                }
            </div>
        );
    }
}

export default FetchNews;