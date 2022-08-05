import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="example" />
        </main>
        <footer className="Footer mt-3">
          This App was built by
          <a
            href="https://incandescent-tapioca-00054a.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            Melissa Nzekele,
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://github.com/Meli-Nzekele/dictionary-react-app"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
          & Hosted on{" "}
          <a
            href="https://cheerful-tarsier-e979c2.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
