import Moment from 'react-moment';
import 'moment/locale/ca';

function News(props) {
  if (!props.image) {
    return (
      <div className="row g-0 bg-white position-relative offset-2 pt-2 newContainer">
        <div className="col-xl-4 mb-md-0 p-xl-4">
          <img style={{borderRadius:"30px"}}  src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" alt="nopic"></img>
        </div>
        <div className="col-xl-8 p-4 ps-xl-0">
          <h4 className="mt-0">{props.title}</h4>
          <Moment locale="ca">{props.date}</Moment>
          <p>{props.description}</p>
          <a href={props.url} className="stretched-link">{props.url}</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row g-0 bg-white position-relative offset-2 pt-2 newContainer">
        <div className="col-xl-4 mb-md-0 p-xl-4">
          <img style={{borderRadius:"30px"}} src={props.image} alt={props.title}></img>
        </div>
        <div className="col-xl-8 p-4 ps-xl-0">
          <h4>{props.title}</h4>
          <Moment locale="ca">{props.date}</Moment>
          <p>{props.description}</p>
          <a href={props.url} className="stretched-link">{props.url}</a>
        </div>
      </div>
    );
  }
}

export default News;
