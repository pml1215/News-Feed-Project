import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';


function FetchNews() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: {mkt: 'en-CA', safeSearch: 'Off', textFormat: 'Raw'},
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
    }, []);

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
                        <div className="row bg-light position-relative p-3">
                            <div className="col-xl-6 mb-md-0 p-xl-3">
                                <img src={results.image?.thumbnail.contentUrl} className="w-100" alt={results.name}></img>
                            </div>
                            <div className="col-xl-6 p-4 ps-xl-2">
                                <h5>{results.name}</h5>
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