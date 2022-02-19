import React from "react";
import {Provider} from "react-redux";
import {storeManager} from "core/StoreManager";
import {DocumentPage} from "app/document/DocumentPage";

function App() {
  return (
    <Provider store={storeManager.store}>
      <div>
        <DocumentPage/>
      </div>
    </Provider>
  );
}

export default App;
