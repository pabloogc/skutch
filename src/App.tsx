import React from "react";
import {Provider} from "react-redux";
import {storeManager} from "core/StoreManager";
import {ArtboardPage} from "app/artboards/view/ArtboardPage";

function App() {
  return (
    <Provider store={storeManager.store}>
      <div>
        <ArtboardPage/>
      </div>
    </Provider>
  );
}

export default App;
