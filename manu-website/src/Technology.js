import { ReactComponent as ReactIcon } from "./images/react.svg";
import { ReactComponent as ReactNativeIcon } from "./images/react-native.svg";
import { ReactComponent as AngularIcon } from "./images/angular.svg";
import { ReactComponent as DotnetIcon } from "./images/dotnet.svg";
import { ReactComponent as JavaIcon } from "./images/java.svg";

import "./Technology.css";

const TechnologyIcon = (tech) => {
  switch (tech) {
    case "React":
      return <ReactIcon width="35" height="35" alt="React" />;
    case ".NET":
      return <DotnetIcon width="35" height="35" alt=".NET" />;
    case "ReactNative":
      return <ReactNativeIcon width="35" height="35" alt="React Native" />;
    case "Angular":
      return <AngularIcon width="35" height="35" alt="Angular" />;
    case "Java":
      return <JavaIcon width="35" height="35" alt="Java" />;
    default:
      return <ReactIcon width="35" height="35" alt="React" />;
  }
};

const Technology = ({ tech }) => {
  return (
    <div className="technology-icon">
      {TechnologyIcon(tech)}
    </div>
  )
}

export default Technology;
