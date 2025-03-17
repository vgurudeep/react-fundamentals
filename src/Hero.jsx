import hero from "./hero.svg";

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">My React Fundamentals Projects</h1>
        <div className="hero-description">
          <p>
            A collection of projects showcasing my learning in React and
            frontend fundamentals. Each project reflects a step in my
            journey—experimenting, building, and refining my skills. Dive in and
            explore!
          </p>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>
      </div>
      <img src={hero} alt="hero-svg" className="hero-svg" />
    </section>
  );
}
export default Hero;
