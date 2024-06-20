import Collapse from "../../components/Collapse";
import FigmaIcon from "../../components/icons/FigmaIcon";
import GithubIcon from "../../components/icons/GithubIcon";
import PostmanIcon from "../../components/icons/PostmanIcon";
import VSCodeIcon from "../../components/icons/VSCodeIcon";

export default function ToolsSkills() {
  return (
    <div className="container flex flex-col gap-10 py-6 lg:py-8">
      <Collapse title="Outils de développement">
        <div className="flex flex-wrap gap-y-6 mt-6">
          <VSCodeIcon size="85px" className="fill-foreground" title="VS Code" />
          <GithubIcon
            size="85px"
            className="fill-foreground"
            classNameFooterNav=""
            title="GitHub"
          />
          <PostmanIcon
            size="85px"
            className="fill-foreground"
            title="Postman"
          />
          <FigmaIcon size="85px" className="fill-foreground" title="Figma" />
        </div>
      </Collapse>
    </div>
  );
}