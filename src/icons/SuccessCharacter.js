import { WithLocalSvg } from 'react-native-svg';
import sucessCharacter from '../../assets/sucessCharacter.svg';
const SucessCharacter = ()=>{
    return(
        <WithLocalSvg
            width={390}
            height={272} 
            asset={sucessCharacter}>

        </WithLocalSvg>
    )
};

export default SucessCharacter;