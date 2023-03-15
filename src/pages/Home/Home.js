import React from "react";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Section
          title={"Prvi"}
          buttonText="More courses"
          helperText={"Helper 1"}
        />
        <Section isSecondary={true} buttonText="More courses" />
        <Section
          title={"Treći"}
          helperText={"Helper 3"}
          buttonText="More courses"
        />
      </main>
    </>
  );
};

export default Home;
