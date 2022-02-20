import React from "react";
import {Provider} from "react-redux";
import {DocumentPage} from "app/document/DocumentPage";
import {store} from "core/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <DocumentPage/>
      </div>
    </Provider>
  );
}

export default App;
