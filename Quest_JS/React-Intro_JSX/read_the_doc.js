const avatar = "http://img3.wikia.nocookie.net/__cb20110112060411/terminator/images/7/71/T1SarahPromo2.jpg";
const name = <strong>Sarah Connor</strong>;
const online = true ? <h3>Online</h3> : <h3>Offline</h3>;


const element = (
  (<div className="person-item">
      <img className="avatar" src={avatar}/>
      <p> Hello {name}</p>
      <div className="online"> {online}</div>
  </div>)
);

ReactDOM.render(element, document.getElementById('root'));