import { WithLocalSvg } from "react-native-svg";
import failCharacter from "../../assets/failCharacter.svg";
const FailCharacter = () => {
  return (
    <WithLocalSvg width={390} height={272} asset={failCharacter}></WithLocalSvg>
  );
};

export default FailCharacter;
