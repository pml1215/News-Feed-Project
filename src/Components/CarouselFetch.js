import { useState, useEffect } from 'react';
import { Carousel} from 'react-bootstrap';

function FetchNews() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const apikey = "b4806efc-97a3-49c4-869c-fedfb88e7a36";
    var url = `https://content.guardianapis.com/search?section=news&order-by=newest&api-key=${apikey}`;
    
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
                <Carousel className="carousel" variant="dark" activeIndex={index} onSelect={handleSelect} interval={5000}>
                    {news.map((results) => (
                        <Carousel.Item>
                            <h4>
                            {results.webTitle}
                            </h4>
                            <a href={results.webUrl}>{results.webUrl}</a>
                        </Carousel.Item>
                    ))}
                </Carousel>
        );
    }
}

export default FetchNews;