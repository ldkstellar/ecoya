import { WithLocalSvg } from "react-native-svg";
import searchIcon from "../../assets/searchIcon.svg";

const SearchIcon = () => {
  return (
    <WithLocalSvg width={28} height={28} fill={"#FFFFFF"} asset={searchIcon} />
  );
};

export default SearchIcon;
