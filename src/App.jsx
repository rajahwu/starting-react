import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        color: "blue",
      }}
    >
      <h1>Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
