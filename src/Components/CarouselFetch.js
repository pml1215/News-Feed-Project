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
        params: { mkt: 'en-CA', safeSearch: 'Off', textFormat: 'Raw', offset: '3', count: '3' , originalImg: 'true'},
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
    }, []);

    if (!isLoading) {
        return (
            <div className="loading">Content is Loading...
            </div>
        );
    } else {
        return (
            <div>
                <h2>Today News in Canada</h2>
                <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} interval={5000}>
                    {news.map((results) => (
                        <Carousel.Item>
                            <div className="row bg-light position-relative">
                                <div className="col-xl-4 mb-md-0 p-xl-3" style={{float:"left"}}>
                                    <img src={results.image?.thumbnail.contentUrl} className="w-75" alt={results.name}></img>
                                </div>
                                <div className="col-xl-8 mt-3 pe-3" >
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