import React from "react";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <main>
      <div className="landing-wrapper">
        <div className="welcome-wrapper">
          <h1 className="welcome-header">Welcome</h1>
          <h2 className="welcome-sub-header">Dreamer</h2>
        </div>
        <div className="greeting-wrapper">
          <p className="greeting-top">
            Welcome to Whispers from Neverland, your mystical gateway to the subconscious realm. <br />
            Dreams, the whispers of Neverland, often harbor profound insights that guide our waking voyage. Embrace this enchanted journey of maintaining a dream journal with us, unearthing wisdom, stoking creativity, and enhancing problem-solving.
          </p>
          <p className="greeting-bottom">
            Let's sail through these stars of self-discovery.<br />
            Dream on, adventurer!
          </p>
        </div>
        <button className="entry-btn">Start a New Entry</button>
      </div>
    </main>
  )
}

export default LandingPage;