import gitStats from "../img/projects/gitHub.PNG";
import codewarsStats from "../img/projects/Codewars.PNG";

const Activity = () => {
  return (
    <div className="activity">
      <div className="activity__item">
        <h2 className="title-2">GitHub</h2>
        <img src={gitStats} alt="gitHub" />
      </div>
      <br />
      <div className="activity__item">
        <h2 className="title-2">Codewars</h2>
        <img src={codewarsStats} alt="codewars" />
      </div>
    </div>
  );
};

export default Activity;
