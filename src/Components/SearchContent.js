import SearchFetch from './SearchFetch';
import {useParams} from 'react-router-dom';

function Content(props) {
  let {keywords} = useParams();

  return(
    <div className={props.show?"searchNews active":"searchNews"}>
      <h1 className="newsheader">Searching Keyword: {keywords}</h1>
      <br/>
      <SearchFetch keywords={keywords}/>
    </div>
  );
}

export default Content;