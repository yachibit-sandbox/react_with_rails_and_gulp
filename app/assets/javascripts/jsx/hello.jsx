var React = require('react');

var Hello = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello!!</h1>
      </div>
    );
  }
});

$(() => {
  React.render(
    <Hello />, document.getElementById('hello')
  );
})
