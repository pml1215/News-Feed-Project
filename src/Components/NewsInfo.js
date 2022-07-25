function News(props) {
  if (props.image === null) {

    return (
      <div className="row g-0 bg-white position-relative offset-5 w-50 pt-2">
        <div className="col-xl-4 mb-md-0 p-xl-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" class="w-100" alt="nopic"></img>
        </div>
        <div className="col-xl-8 p-4 ps-xl-0">
          <h5 className="mt-0">{props.title}</h5>
          <p>{props.description}</p>
          <a href={props.url} className="stretched-link">{props.url}</a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row g-0 bg-white position-relative offset-5 w-50 pt-2">
        <div className="col-xl-4 mb-md-0 p-xl-4">
          <img src={props.image} class="w-100" alt={props.title}></img>
        </div>
        <div className="col-xl-8 p-4 ps-xl-0">
          <h5 className="mt-0">{props.title}</h5>
          <p>{props.description}</p>
          <a href={props.url} className="stretched-link">{props.url}</a>
        </div>
      </div>
    );
  }
}

export default News;
