
const React = require("react");

function New() {
  return (
    <form action="/logs" method="POST">
      Title: <input type="text" name="title" />
      Entry: <textarea name="entry"/>
      Ship is Broken: <input type="checkbox" name="shipIsBroken"/>
      <input type="submit" />
    </form>
  );
}

module.exports = New;

