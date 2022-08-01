function GetDate(){
  return (
    <div className="date">
      <h5>{new Date().toLocaleDateString()}</h5>
    </div>
  )
}

export default GetDate;
