import Fetch from './Fetch';
import SearchBar from './SearchBar';
import {useParams} from 'react-router-dom';

function Content() {
  let {category} = useParams();
  const categoryUpper = category.toUpperCase();

  return(
    <div>
      <h2 className="pt-3 ms-4">{categoryUpper} - Top Headlines</h2>
      <SearchBar />
      <br/>
      <Fetch/>
    </div>
  );
}

export default Content;