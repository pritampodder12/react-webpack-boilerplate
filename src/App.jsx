import React from "react";

function App() {
  return (
    <div className="app-container">
      <ul>
        <li>
          This is a boilerplace created using webpack, react, tailwind css,
          scss.
        </li>
        <li>
          This is an example where we could setup a react application by
          manually installing all the necessary Dev dependencies.
        </li>
        <li>
          We used webpack to bundle all the modules required to run a React
          project. We have configured webpack in webpack.config.js file.
        </li>
        <li>We configured Babel so that Browser can understand JSX syntax.</li>
        <li>
          For css we have used SCSS and configured it to webpack config file.
        </li>
        <li>Also we have installed tailwind CSS.</li>

        <li>All modules are installed and set-up manually.</li>

        <li>
          This is an example boilerplate project I have created to prove that we
          might not need to use next.js for a small web application.
        </li>
        <li>
          We can reuse this boilerplate next time when we will create a web app
          from scratch.
        </li>
      </ul>
    </div>
  );
}

export default App;
