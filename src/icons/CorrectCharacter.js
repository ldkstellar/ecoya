import { WithLocalSvg } from "react-native-svg";
import correctCharacter from "../../assets/correctCharacter.svg";
const CorrectCharacter = () => {
  return (
    <WithLocalSvg
      width={198}
      height={242}
      asset={correctCharacter}
    ></WithLocalSvg>
  );
};

export default CorrectCharacter;

