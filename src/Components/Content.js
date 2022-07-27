import Fetch from './Fetch';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';

function Content() {
  let {newsCategory} = useParams();

  return(
    <div>
      <h2 className="pt-3 ms-4">{newsCategory} - Top Headlines</h2>
      <SearchBar />
      <br/>
      <Fetch/>
    </div>
  );
}

export default Content;