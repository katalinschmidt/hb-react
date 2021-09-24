'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <h2>Hey there, user!</h2>
    <a href="/cards">Click here to view the trading cards.</a>
    <div>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
