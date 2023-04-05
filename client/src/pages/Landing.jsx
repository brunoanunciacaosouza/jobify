import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            commodi sint? Dolor, saepe! Mollitia omnis consequuntur fugiat
            commodi nobis, incidunt porro facere quidem ipsa officia!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
