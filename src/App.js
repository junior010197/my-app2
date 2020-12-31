// component
import React from "react";
import Header from "./header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      {/*Header */}
      <Header />
      {/*TinderCards */}
      <TinderCards />

      {/*SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
