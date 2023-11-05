import React from "react";
import TicTacToe from "../components/TicTacToe";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  return (
    <div className="home">
      <TicTacToe />
      <ProfileCard />
    </div>
  );
};

export default Home;
