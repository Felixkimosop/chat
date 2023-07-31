import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className=" max-w-[728px] m-auto text-center ">
      <section className="flex flex-col h-[90vh] border mt-10 bg-gray-100 shadow-xl relative">
        <Navbar />
        <Chat />
      </section>
    </div>
  );
}

export default App;
