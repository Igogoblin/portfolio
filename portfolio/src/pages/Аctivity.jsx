import gitStats from "../img/projects/gitHub.PNG";
import codewarsStats from "../img/projects/Codewars.PNG";

const Activity = () => {
  return (
    <div className="activity">
      <div className="activity__item">
        <a href="https://github.com/Igogoblin">
          <h2 className="title-2">GitHub</h2>
        </a>
        <img src={gitStats} alt="gitHub" />
      </div>
      <br />
      <div className="activity__item">
        <a href="https://www.codewars.com/users/rsschool_70d7c1b9325c94ca/stats">
          <h2 className="title-2">Codewars</h2>
        </a>
        <img src={codewarsStats} alt="codewars" />
      </div>
    </div>
  );
};

export default Activity;
