import Fetch from './Fetch';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';

function Content() {
  let {newsCategory} = useParams();

  return(
    <div>
      <SearchBar />
      <h1 className="newsheader">{newsCategory}</h1>
      <br/>
      <Fetch/>
    </div>
  );
}

export default Content;