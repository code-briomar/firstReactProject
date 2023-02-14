import "./App.css";
import InfoSection from "./assets/InfoSection";
import AboutSection from "./assets/AboutSection";
import InterestSection from "./assets/InterestSection";
function App() {
  return (
    <div className="App">
      {/* Info Section ( Photo, Name, Title, Contact) */}
      <InfoSection />
      {/* About Section ( About Juju Smith) */}
      <AboutSection />
      {/* Interest Section (What is Juju Interested in) */}
      <InterestSection />
    </div>
  );
}

export default App;
