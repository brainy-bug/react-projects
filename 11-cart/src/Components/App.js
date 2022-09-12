import React from "react";
import { useGlobalContext } from "../context";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  // Uncomment for data fetching

  // const { loading } = useGlobalContext();
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  // if (!loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Unable to fetch data...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
