import { useEffect, useRef, useState } from 'react';
import Orb from './Orb';
import Strands from './Strands';
import WebThreads from './WebThreads';
import MagicRings from './MagicRings';
import logoUrl from '../../assets/UP-Logo-white.svg';
import './app.css';

const EFFECTS = [Orb, Strands, WebThreads, MagicRings];
const EFFECT_DURATION_MS = 5000;
const TRANSITION_DURATION_MS = 1000;

function App() {
  const [layers, setLayers] = useState([{ id: 0, effectIndex: 0, leaving: false }]);
  const activeIndexRef = useRef(0);
  const nextLayerIdRef = useRef(1);

  useEffect(() => {
    const removalTimers = new Set();
    const cycleTimer = window.setInterval(() => {
      activeIndexRef.current = (activeIndexRef.current + 1) % EFFECTS.length;
      const incomingLayer = {
        id: nextLayerIdRef.current,
        effectIndex: activeIndexRef.current,
        leaving: false
      };
      nextLayerIdRef.current += 1;

      setLayers(currentLayers => [
        ...currentLayers.map(layer => ({ ...layer, leaving: true })),
        incomingLayer
      ]);

      const removalTimer = window.setTimeout(() => {
        setLayers(currentLayers => currentLayers.filter(layer => !layer.leaving));
        removalTimers.delete(removalTimer);
      }, TRANSITION_DURATION_MS);
      removalTimers.add(removalTimer);
    }, EFFECT_DURATION_MS);

    return () => {
      window.clearInterval(cycleTimer);
      removalTimers.forEach(timer => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div className="stage">
      <div className="effects" aria-hidden="true">
        {layers.map(layer => {
          const Effect = EFFECTS[layer.effectIndex];
          return (
            <div
              className={`effect-layer ${layer.leaving ? 'is-leaving' : 'is-entering'}`}
              key={layer.id}
            >
              <Effect />
            </div>
          );
        })}
      </div>

      <main className="brand" aria-label="Unlimited Power">
        <img className="logo" src={logoUrl} alt="Unlimited Power" />
        <p className="tagline">
          <span className="sr-only">Building your future...</span>
          <span aria-hidden="true">Building your future</span>
          <span className="loading-dots" aria-hidden="true"><span>.</span><span>.</span><span>.</span></span>
        </p>
      </main>
    </div>
  );
}

export default App;
