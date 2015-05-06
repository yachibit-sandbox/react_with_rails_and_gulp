var React = require('react');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello!!</h1>
      </div>
    );
  }
});

$(function() {
  React.render(
    <Hello />, document.getElementById('hello')
  );
})
