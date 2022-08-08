

export default function About(props) {
    return (
    
      <div
      className={props.show?"about active":"about"}>
      <h1>About</h1>
      <br/>
      <h4>This app is a news feed app that fetches news from Microsoft Bing</h4>
      <h5>produced by:</h5>
      <ul>
        <li>Chi Lam Yim</li>
        <li>Ka Yan Lui</li>
        <li>Ming Lok Pun</li>
      </ul>
      </div>
    );
  }

