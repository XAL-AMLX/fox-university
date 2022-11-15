import './App.css';
import { Features, FeatureTwo, FeatureThree, FeatureFive, Hero, Footer, Blogs } from './components';

function App() {
  return (
    <div className="App">
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
