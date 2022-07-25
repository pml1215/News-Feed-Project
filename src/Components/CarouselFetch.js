import { useState, useEffect } from 'react';
import { Carousel,Card } from 'react-bootstrap';

function FetchNews() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const apikey = "e4a14d404c954e0aa346e254635ec227";
    var url = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${apikey}`;
    
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
                <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={5000}>
                    {news.map((results) => (
                        <Carousel.Item>
                            <Card className="bg-dark text-white">
                                <Card.Img src={results.urlToImage} alt="Card image"/>
                                <Card.Body>
                                    <Card.Title>{results.title}</Card.Title>
                                    <Card.Text>{results.description}</Card.Text>
                                    <a href={results.url} className="btn btn-primary">Read More</a>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
        );
    }
}

export default FetchNews;