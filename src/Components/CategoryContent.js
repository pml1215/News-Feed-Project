import CategoryFetch from './CategoryFetch';
import {useParams} from 'react-router-dom';

function Content(props) {
  let {newsCategory} = useParams();

  return(
    <div className={props.show?"content active":"content"}>
      <h1 className="newsheader">{newsCategory}</h1>
      <br/>
      <CategoryFetch newsCategory={newsCategory}/>
    </div>
  );
}

export default Content;