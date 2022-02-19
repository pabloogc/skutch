import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import {storeManager} from "core/StoreManager";
import {ArtboardPage} from "app/artboards/ArtboardPage";

function App() {

  return (
    <Provider store={storeManager.store}>
      <div className="App">
        <ArtboardPage/>
      </div>
    </Provider>

  );
}

export default App;
