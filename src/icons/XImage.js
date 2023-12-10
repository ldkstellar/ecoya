import { WithLocalSvg } from 'react-native-svg';
import xImage from '../../assets/xImage.svg';
const XImage = ()=>{
    return(
        <WithLocalSvg
            width={390}
            height={272} 
            asset={xImage}>

        </WithLocalSvg>
    )
};

export default XImage;