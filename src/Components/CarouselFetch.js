import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';


function FetchNews() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const apikey = "a9f71461b4dc4db6aa435b8ef702e570";
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
            <div>
                <h2>Today News in Canada</h2>
                <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={5000}>
                    {news.map((results) => (
                        <Carousel.Item>
                        <div className="row bg-light position-relative pt-2">
                            <div className="col-xl-6 mb-md-0 p-xl-3">
                                <img src={results.urlToImage} class="w-100" alt={results.title}></img>
                            </div>
                            <div className="col-xl-6 p-4 ps-xl-2 text-start">
                                <h5>{results.title}</h5>
                                <p>{results.description}</p>
                                <a href={results.url} className="stretched-link"></a>
                            </div>
                        </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default FetchNews;