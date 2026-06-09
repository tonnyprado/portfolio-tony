import { Outlet } from 'react-router-dom';
import { TransitionProvider, useTransition } from '../context/TransitionContext';

function TransitionOverlay() {
  const { transition, phase } = useTransition();

  if (phase === 'idle') return null;

  // SVG Draw transition - Marker scribble effect
  if (transition.type === 'svg-draw') {
    return (
      <div className={`svg-draw-transition ${phase}`}>
        <svg
          className="svg-draw-scribble"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Multiple marker strokes scribbling across */}
          <path className="scribble-line line-1" d="M-10,8 Q25,6 50,9 T110,7" />
          <path className="scribble-line line-2" d="M110,18 Q75,20 50,17 T-10,19" />
          <path className="scribble-line line-3" d="M-10,28 Q25,26 50,29 T110,27" />
          <path className="scribble-line line-4" d="M110,38 Q75,40 50,37 T-10,39" />
          <path className="scribble-line line-5" d="M-10,48 Q25,46 50,49 T110,47" />
          <path className="scribble-line line-6" d="M110,58 Q75,60 50,57 T-10,59" />
          <path className="scribble-line line-7" d="M-10,68 Q25,66 50,69 T110,67" />
          <path className="scribble-line line-8" d="M110,78 Q75,80 50,77 T-10,79" />
          <path className="scribble-line line-9" d="M-10,88 Q25,86 50,89 T110,87" />
          <path className="scribble-line line-10" d="M110,98 Q75,100 50,97 T-10,99" />
        </svg>
      </div>
    );
  }

  // Slide transition (parallax)
  if (transition.type === 'slide') {
    return (
      <div
        className={`slide-transition ${phase} ${transition.direction}`}
      >
        <div className="slide-transition-panel" />
      </div>
    );
  }

  // Default wipe transition
  return (
    <div
      className={`page-transition ${phase}`}
      style={{ '--transition-color': transition.color }}
    >
      <div className="page-transition-screen">
        <span className="page-transition-name">{transition.name}</span>
      </div>
    </div>
  );
}

function TransitionLayoutInner() {
  return (
    <>
      <Outlet />
      <TransitionOverlay />
    </>
  );
}

export default function TransitionLayout() {
  return (
    <TransitionProvider>
      <TransitionLayoutInner />
    </TransitionProvider>
  );
}
