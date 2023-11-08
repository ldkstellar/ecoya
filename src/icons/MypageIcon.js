import {WithLocalSvg} from 'react-native-svg';
import mypage from '../../assets/TabBarIcon/mypage.svg'


const MypageIcon = () => {
    
    return (
            <WithLocalSvg
                width={100}
                asset={mypage}
            >
            </WithLocalSvg>  
    );
}

export default MypageIcon;