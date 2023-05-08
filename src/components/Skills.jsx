import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faReact,
  faHtml5,
  faCss3,
  faGit,
  faJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

export const Skills = () => {
  return (
    <>
      <section>
        <div className="slider mt-5">
          <div className="slide-track">
            <div className="slide">
              <FontAwesomeIcon
                icon={faGit}
                style={{ fontSize: "4em", color: "white" }}
              />
            </div>
            <div className="slide">
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ fontSize: "4em", color: "white", marginRight: "20px" }}
              />
            </div>
            <div className="slide">
              <FontAwesomeIcon
                icon={faCss3}
                style={{ fontSize: "4em", color: "white" }}
              />
            </div>
            <div className="slide">
              <FontAwesomeIcon
                icon={faJava}
                style={{ fontSize: "4em", color: "white" }}
              />
            </div>
            <div className="slide">
              <FontAwesomeIcon
                icon={faReact}
                style={{ fontSize: "4em", color: "white" }}
              />
            </div>
            <div className="slide">
              <FontAwesomeIcon
                icon={faJs}
                style={{ fontSize: "4em", color: "white" }}
              />
            </div>
            <div className="slide">
              <FontAwesomeIcon
                icon={faNode}
                style={{ fontSize: "4em", color: "white" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
