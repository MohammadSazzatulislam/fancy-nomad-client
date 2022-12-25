import React from "react";
import Message from "../../Component/Message/Message";
import Nature from "../../Component/Nature/Nature";
import News from "../../Component/News/News";
import Placess from "../../Component/Placess/Placess";

const Home = () => {
  return (
    <div>
      <News></News>
      <Nature></Nature>
      <Placess></Placess>
      <Message></Message>
    </div>
  );
};

export default Home;
