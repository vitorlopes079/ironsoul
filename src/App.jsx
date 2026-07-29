import { AssetImage } from "./components/AssetImage";
import { AlertTriangle, BarChart3, Flame, Mail, MessageSquare, Phone, ShieldCheck, Target, TrendingUp } from "lucide-react";

function ContactLink({ kind, children }) {
  const Icon = kind === "call" ? Phone : MessageSquare;
  return <a className="contact-link" href="tel:6507229511"><Icon aria-hidden="true" /><span>{children}</span></a>;
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <Brand />
        <div className="header-actions">
          <a className="phone" href="tel:6507229511"><Phone size={17} aria-hidden="true" /> 650 722 9511</a>
          <a className="button button-primary" href="tel:6507229511">CONTACT ME</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">TRAIN HARD. RECOVER SMART. BECOME MORE.</p>
            <h1>STRONGER TODAY.<br />UNSTOPPABLE TOMORROW.</h1>
            <p className="lead">Personalized training and performance coaching to help athletes rise above, recover stronger, and achieve more.</p>
            <div className="actions"><a className="button button-primary" href="tel:6507229511">CONTACT ME</a></div>
          </div>
          <AssetImage className="hero-art" src="/assets/hero.png" alt="IronSoul coach" label="HERO IMAGE" />
        </section>

        <section className="split-section">
          <InfoBlock icon={AlertTriangle} title="A WARNING">
            <p>For the most part, training is terrible. Athletes don’t see results, get injured, and don’t achieve the goals they set for themselves.</p>
            <p>Things are too complicated, confusing, and often don’t help athletes achieve their goals.</p>
            <ol><li>Many trainers focus on workouts that look good, but don’t actually get results.</li><li>Training that looks impressive isn’t the same as training that’s effective.</li><li>Most athletes don’t truly know what their bodies need or how to improve.</li><li>Training without purpose is just exercise. We focus on targeted programs, proven methods, and measurable progress.</li></ol>
          </InfoBlock>
          <InfoBlock icon={Target} title="THE SOLUTION" id="solution">
            <p>I’d like for you to consider yourself lucky. I’m going to give you a few reasons why.</p>
            <ol><li>You found a performance coach who has two main components — elite training expertise and real-world experience.</li><li>I provide a 4-part process:<ul><li><strong>Strategy</strong> — We start with your goals and build a plan that fits your sport and your life.</li><li><strong>Performance</strong> — We train with purpose, using methods that create real improvements.</li><li><strong>Recovery</strong> — We emphasize movement quality, recovery, and injury prevention.</li><li><strong>Persistence</strong> — We track, adjust, and refine so you keep getting better.</li></ul></li><li>We’ve thought about the risks involved on your end, and reduced them. The cost of not training the right way? Injury, stalled progress, and wasted time.</li></ol>
          </InfoBlock>
        </section>

        <section className="rise" id="contact">
          <AssetImage className="athlete-art" src="/assets/athlete-summit.jpeg" alt="Athlete standing on a mountain peak at sunset" label="ATHLETE PHOTO" />
          <div className="rise-copy">
            <p className="eyebrow">RISE FROM WITHIN.</p>
            <h2>Become the athlete you were meant to be.</h2>
            <div className="features"><Feature icon={BarChart3} title="Train with Purpose" text="Every session designed to build you up." /><Feature icon={ShieldCheck} title="Stronger, Resilient, Ready" text="Build strength, confidence, and durability." /><Feature icon={Flame} title="Unleash Your Potential" text="Break limits. Set new standards." /></div>
            <div className="actions contact-actions"><a className="button button-primary" href="tel:6507229511">CONTACT ME</a><ContactLink kind="call"><b>CALL OR TEXT</b><br />650 722 9511</ContactLink><a className="contact-link" href="mailto:cpmclaughlin83@gmail.com"><Mail aria-hidden="true" /><span><b>EMAIL</b><br />cpmclaughlin83@gmail.com</span></a></div>
          </div>
        </section>
      </main>

      <footer><Brand compact /><p>© 2024 IRONSOUL TRAINING. ALL RIGHTS RESERVED.</p><div><ContactLink kind="call"><b>CALL OR TEXT</b><br />650 722 9511</ContactLink></div></footer>
    </>
  );
}

function InfoBlock({ icon: Icon, title, children, id }) { return <article className="info-block" id={id}><div className="section-heading"><Icon aria-hidden="true" /><h2>{title}</h2></div>{children}</article>; }
function Feature({ icon: Icon, title, text }) { return <div className="feature"><Icon className="feature-icon" aria-hidden="true" strokeWidth={1.8} /><h3>{title}</h3><p>{text}</p></div>; }
function Brand({ compact = false }) {
  return <a className={`brand ${compact ? "brand-compact" : ""}`} href="#top">
    <AssetImage className="brand-mark" src="/assets/logo.png" alt="IronSoul phoenix mark" label="IRONSOUL" />
    <span className="wordmark"><strong>IRONSOUL</strong><span>TRAINING</span><small>IRONSOULTRAINING.COM</small></span>
  </a>;
}
