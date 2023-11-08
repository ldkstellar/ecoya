import {WithLocalSvg} from 'react-native-svg';
import mypageGreen from '../../assets/TabBarIcon/mypageGreen.svg'


const GreenMypageIcon = () => {
    
    return (
            <WithLocalSvg
                width={100}
                asset={mypageGreen}
            >
            </WithLocalSvg>  
    );
}

export default GreenMypageIcon;