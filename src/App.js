import './App.css';
import { Features, FeatureTwo, FeatureThree, FeatureFive, Header, Hero, Footer, Blogs } from './components';

function App() {
  return (
    <div className="App">
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
