import "./App.css";

import {
  Navbar,
  Title,
  CoverPage,
  AboutUs,
  CourseraPage,
  Services,
  Projects,
  Reviews,
  Awards,
  ContactUs,
  Footer,
} from "./Components/index";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Title />
        <CoverPage />
        <AboutUs />
        <CourseraPage />
        <Services />
        <Projects />
        <Reviews />
        <Awards />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
