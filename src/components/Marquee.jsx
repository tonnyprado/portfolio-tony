import { PORT } from '../data';

function Marquee() {
  const items = PORT.ui.marquee;
  const run = items.map((w, i) => (
    <span className="marquee-item" key={i}>{w}<span className="star">✦</span></span>
  ));
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{run}{run}</div>
    </div>
  );
}

export default Marquee;
