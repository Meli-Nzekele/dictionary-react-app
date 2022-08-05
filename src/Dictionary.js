import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // Documentation: https://www.pexels.com/api/documentation/
    const pexelsApiKey =
      "563492ad6f9170000100000187d28de6883e434294126103bbe2ff87";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary mt-4">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="input-icons d-flex justify-content-center">
              <input
                className="form-control input-field"
                type="search"
                onChange={handleKeywordChange}
                placeholder=" Example:   Yoga, Flower, Moon..."
                aria-label="default input example"
              ></input>
            </div>
          </form>
        </div>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
