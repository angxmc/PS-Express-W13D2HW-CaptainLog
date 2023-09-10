const React = require("react");

function Show({ logs }) {
  return (
    <div>
      <h1>Log Content</h1>
      <div>
        {logs.map((log) => {
          return (
            <div key={log._id}>
              <h3>{log.title}</h3>
              <p>{log.entry}</p>
              <p>{log.shipIsBroken ? "Ship is broken" : "Ship is not broken"}</p>
            </div>
          );
        })}

        <a href="/logs">Back to Logs</a>
      </div>
    </div>
  );
}

module.exports = Show;
