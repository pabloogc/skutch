import React from "react";
import {Provider} from "react-redux";
import {DocumentPage} from "app/document/DocumentPage";
import {store} from "core/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path=":documentId" element={<DocumentPage/>}/>
            <Route path="" element={<DocumentPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
