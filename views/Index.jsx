const React = require("react");

function Index({ logs }) {
  return (
    <div>
        <a href="/logs/new">Create a new log</a>
      <ul>
        {logs.map((log) => {
          return <li key={log._id}>{log.title}</li>;
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
