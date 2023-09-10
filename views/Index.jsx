const React = require("react");

function Index({ logs }) {
  return (
    <div>
      <a href="/logs/new">Create a new log</a>
      <ul>
        {logs.map((log) => {
          return (
            <li key={log._id}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
              
              <div>
                <a href={`/logs/${log._id}/edit`}>Edit Log</a>
              </div>

              <form method="POST" action={`/logs/${logs._id}?_method=Delete`}>
                <input type="submit" value="Delete"></input>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
