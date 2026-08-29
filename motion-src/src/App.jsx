import GlowCursor from './GlowCursor';
import './app.css';

function App() {
  return (
    <GlowCursor className="stage">
      <main className="brand" aria-label="Unlimited Power">
        <img className="logo" src="/assets/UP-Logo-white.svg" alt="Unlimited Power" />
        <p className="tagline">
          <span className="sr-only">Building your future...</span>
          <span aria-hidden="true">Building your future</span>
          <span className="loading-dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span>
        </p>
      </main>
    </GlowCursor>
  );
}

export default App;
