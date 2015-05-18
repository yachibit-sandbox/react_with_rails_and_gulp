window.Hello = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello!!!!</h1>
      </div>
    );
  }
});

// browserify sample
var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));
