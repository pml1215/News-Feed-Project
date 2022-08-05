import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardItem from './CardItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function FetchTrending(props) {
  const [trending, setTrending] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // const options =
  //   [{
  //     "_type": "NewsArticle",
  //     "name": "‘We could feel it’: Kansans celebrate upset abortion rights victory",
  //     "url": "https://www.msn.com/en-us/news/world/we-could-feel-it-kansans-celebrate-upset-abortion-rights-victory/ar-AA10gRh1",
  //     "description": " In a conference room at the Sheraton in the Kansas City suburb of Overland Park, people screamed, whooped, cheered and cried as a vote to protect abortion rights in Kansas’s state constitution came",
  //     "provider": [
  //       {
  //         "_type": "Organization",
  //         "name": "The Guardian",
  //         "image": {
  //           "_type": "ImageObject",
  //           "thumbnail": {
  //             "_type": "ImageObject",
  //             "contentUrl": "https://www.bing.com/th?id=ODF.FLSSz2cn3Rqzpu_HVWuRvA&pid=news"
  //           }
  //         }
  //       }
  //     ],
  //     "datePublished": "2022-08-03T15:38:07.0000000Z"
  //   },
  //   {
  //     "_type": "NewsArticle",
  //     "name": "Midterm elections roundup: The primary results are in",
  //     "url": "https://www.msn.com/en-us/news/politics/midterm-elections-roundup-the-primary-results-are-in/ar-AA10gBBT",
  //     "image": {
  //       "_type": "ImageObject",
  //       "thumbnail": {
  //         "_type": "ImageObject",
  //         "contentUrl": "https://www.bing.com/th?id=OVFT.nPUpZhVB4ktfJiepShEJjC&pid=News",
  //         "width": 1200,
  //         "height": 630
  //       },
  //       "isLicensed": true
  //     },
  //     "description": "Today's First Read examines losses by two Michigan House incumbent congressmen — Republican Peter Meijer and Democrat Andy Levin. Here’s a look at the results in some of the other key contests, with",
  //     "provider": [
  //       {
  //         "_type": "Organization",
  //         "name": "NBC News",
  //         "image": {
  //           "_type": "ImageObject",
  //           "thumbnail": {
  //             "_type": "ImageObject",
  //             "contentUrl": "https://www.bing.com/th?id=ODF.ighWNnrr5MMFUs8WKMme2A&pid=news"
  //           }
  //         }
  //       }
  //     ],
  //     "datePublished": "2022-08-03T13:24:42.0000000Z"
  //   },
  //   {
  //     "_type": "NewsArticle",
  //     "name": "‘We could feel it’: Kansans celebrate upset abortion rights victory",
  //     "url": "https://www.msn.com/en-us/news/world/we-could-feel-it-kansans-celebrate-upset-abortion-rights-victory/ar-AA10gRh1",
  //     "description": " In a conference room at the Sheraton in the Kansas City suburb of Overland Park, people screamed, whooped, cheered and cried as a vote to protect abortion rights in Kansas’s state constitution came",
  //     "provider": [
  //       {
  //         "_type": "Organization",
  //         "name": "The Guardian",
  //         "image": {
  //           "_type": "ImageObject",
  //           "thumbnail": {
  //             "_type": "ImageObject",
  //             "contentUrl": "https://www.bing.com/th?id=ODF.FLSSz2cn3Rqzpu_HVWuRvA&pid=news"
  //           }
  //         }
  //       }
  //     ],
  //     "datePublished": "2022-08-03T15:38:07.0000000Z"
  //   },
  //   {
  //     "_type": "NewsArticle",
  //     "name": "Midterm elections roundup: The primary results are in",
  //     "url": "https://www.msn.com/en-us/news/politics/midterm-elections-roundup-the-primary-results-are-in/ar-AA10gBBT",
  //     "image": {
  //       "_type": "ImageObject",
  //       "thumbnail": {
  //         "_type": "ImageObject",
  //         "contentUrl": "https://www.bing.com/th?id=OVFT.nPUpZhVB4ktfJiepShEJjC&pid=News",
  //         "width": 1200,
  //         "height": 630
  //       },
  //       "isLicensed": true
  //     },
  //     "description": "Today's First Read examines losses by two Michigan House incumbent congressmen — Republican Peter Meijer and Democrat Andy Levin. Here’s a look at the results in some of the other key contests, with",
  //     "provider": [
  //       {
  //         "_type": "Organization",
  //         "name": "NBC News",
  //         "image": {
  //           "_type": "ImageObject",
  //           "thumbnail": {
  //             "_type": "ImageObject",
  //             "contentUrl": "https://www.bing.com/th?id=ODF.ighWNnrr5MMFUs8WKMme2A&pid=news"
  //           }
  //         }
  //       }
  //     ],
  //     "datePublished": "2022-08-03T13:24:42.0000000Z"
  //   }];

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTrending(options);

  // }
  // );


  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
    params: { textFormat: 'Raw', safeSearch: 'Off', count: '8' , originalImg: 'true'},
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
        setTrending(json.data.value);
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
      <div className='cardgrp'>
        <Row xs={2} lg={3} xl={4} >
          {trending.map(results => (
            <Col>
              <CardItem
                key={results.id}
                image={results.image?.url}
                notfoundimage={"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
                title={results.name}
                text={results.query.text}
                url={results.url}
                date={results.datePublished}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default FetchTrending;