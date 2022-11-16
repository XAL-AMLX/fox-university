import './App.css';
import { Features, FeatureTwo, FeatureThree, FeatureFive, Header, Hero, Footer, Blogs } from './components';

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Features />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFive />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
