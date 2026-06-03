import { PORT } from '../data';

const yellowItems = [
  'Web Development',
  'SaaS Platforms',
  'Mobile Apps',
  'Cloud Architecture',
  'API Design',
  'React & Node.js',
];

function Marquee({ variant }) {
  const items = variant === 'yellow' ? yellowItems : PORT.ui.marquee;
  const run = items.map((w, i) => (
    <span className="marquee-item" key={i}>{w}<span className="star">✦</span></span>
  ));
  return (
    <div className={`marquee${variant === 'yellow' ? ' marquee-yellow' : ''}`} aria-hidden="true">
      <div className="marquee-track">{run}{run}</div>
    </div>
  );
}

export default Marquee;
