import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import Grid from "./components/Grid";
import Signup from "./components/Signup";
import ArchitectPortfolios from "./components/Products";
import AdminDashboard from "./components/Dashboard";
import ChatBotArea from "./components/ChatBotArea";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>

    
      <Hero />
      <ArchitectPortfolios />

      <Stats />
      <Grid />
      <Testimonial />
      <Pricing />
      <Signup /> 

       <AdminDashboard />
      <ChatBotArea />

    </>
  );
}

export default App;
