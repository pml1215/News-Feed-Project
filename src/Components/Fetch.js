import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import News from './NewsInfo';

function FetchNews(props) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let {newsCategory} = useParams();

    // const options = 
    // [{
    //   "_type": "NewsArticle",
    //   "name": "‘We could feel it’: Kansans celebrate upset abortion rights victory",
    //   "url": "https://www.msn.com/en-us/news/world/we-could-feel-it-kansans-celebrate-upset-abortion-rights-victory/ar-AA10gRh1",
    //   "description": " In a conference room at the Sheraton in the Kansas City suburb of Overland Park, people screamed, whooped, cheered and cried as a vote to protect abortion rights in Kansas’s state constitution came",
    //   "provider": [
    //     {
    //       "_type": "Organization",
    //       "name": "The Guardian",
    //       "image": {
    //         "_type": "ImageObject",
    //         "thumbnail": {
    //           "_type": "ImageObject",
    //           "contentUrl": "https://www.bing.com/th?id=ODF.FLSSz2cn3Rqzpu_HVWuRvA&pid=news"
    //         }
    //       }
    //     }
    //   ],
    //   "datePublished": "2022-08-03T15:38:07.0000000Z"
    // },
    // {
    //   "_type": "NewsArticle",
    //   "name": "Midterm elections roundup: The primary results are in",
    //   "url": "https://www.msn.com/en-us/news/politics/midterm-elections-roundup-the-primary-results-are-in/ar-AA10gBBT",
    //   "image": {
    //     "_type": "ImageObject",
    //     "thumbnail": {
    //       "_type": "ImageObject",
    //       "contentUrl": "https://www.bing.com/th?id=OVFT.nPUpZhVB4ktfJiepShEJjC&pid=News",
    //       "width": 1200,
    //       "height": 630
    //     },
    //     "isLicensed": true
    //   },
    //   "description": "Today's First Read examines losses by two Michigan House incumbent congressmen — Republican Peter Meijer and Democrat Andy Levin. Here’s a look at the results in some of the other key contests, with",
    //   "provider": [
    //     {
    //       "_type": "Organization",
    //       "name": "NBC News",
    //       "image": {
    //         "_type": "ImageObject",
    //         "thumbnail": {
    //           "_type": "ImageObject",
    //           "contentUrl": "https://www.bing.com/th?id=ODF.ighWNnrr5MMFUs8WKMme2A&pid=news"
    //         }
    //       }
    //     }
    //   ],
    //   "datePublished": "2022-08-03T13:24:42.0000000Z"
    // },
    // {
    //   "_type": "NewsArticle",
    //   "name": "‘We could feel it’: Kansans celebrate upset abortion rights victory",
    //   "url": "https://www.msn.com/en-us/news/world/we-could-feel-it-kansans-celebrate-upset-abortion-rights-victory/ar-AA10gRh1",
    //   "description": " In a conference room at the Sheraton in the Kansas City suburb of Overland Park, people screamed, whooped, cheered and cried as a vote to protect abortion rights in Kansas’s state constitution came",
    //   "provider": [
    //     {
    //       "_type": "Organization",
    //       "name": "The Guardian",
    //       "image": {
    //         "_type": "ImageObject",
    //         "thumbnail": {
    //           "_type": "ImageObject",
    //           "contentUrl": "https://www.bing.com/th?id=ODF.FLSSz2cn3Rqzpu_HVWuRvA&pid=news"
    //         }
    //       }
    //     }
    //   ],
    //   "datePublished": "2022-08-03T15:38:07.0000000Z"
    // },
    // {
    //   "_type": "NewsArticle",
    //   "name": "Midterm elections roundup: The primary results are in",
    //   "url": "https://www.msn.com/en-us/news/politics/midterm-elections-roundup-the-primary-results-are-in/ar-AA10gBBT",
    //   "image": {
    //     "_type": "ImageObject",
    //     "thumbnail": {
    //       "_type": "ImageObject",
    //       "contentUrl": "https://www.bing.com/th?id=OVFT.nPUpZhVB4ktfJiepShEJjC&pid=News",
    //       "width": 1200,
    //       "height": 630
    //     },
    //     "isLicensed": true
    //   },
    //   "description": "Today's First Read examines losses by two Michigan House incumbent congressmen — Republican Peter Meijer and Democrat Andy Levin. Here’s a look at the results in some of the other key contests, with",
    //   "provider": [
    //     {
    //       "_type": "Organization",
    //       "name": "NBC News",
    //       "image": {
    //         "_type": "ImageObject",
    //         "thumbnail": {
    //           "_type": "ImageObject",
    //           "contentUrl": "https://www.bing.com/th?id=ODF.ighWNnrr5MMFUs8WKMme2A&pid=news"
    //         }
    //       }
    //     }
    //   ],
    //   "datePublished": "2022-08-03T13:24:42.0000000Z"
    // }];

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {category: newsCategory,safeSearch: 'Off', count: '5', headlineCount: '5',textFormat: 'Raw', originalImg: 'true'},
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