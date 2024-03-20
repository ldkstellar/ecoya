import { WithLocalSvg } from "react-native-svg";
import wrongCharacter from "../../assets/wrongCharacter.svg";
const WrongCharacter = () => {
  return (
    <WithLocalSvg
      width={390}
      height={272}
      asset={wrongCharacter}
    ></WithLocalSvg>
  );
};

export default WrongCharacter;
