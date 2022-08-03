function GetDate(){
  return (
    <div className="date">
      <h5>Today is {new Date().toLocaleDateString()}</h5>
    </div>
  )
}

export default GetDate;
