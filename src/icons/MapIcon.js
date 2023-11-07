import React ,{useRef}from 'react';
import { Path, WithLocalSvg } from 'react-native-svg';
import mapIcon from '../../assets/TabBarIcon/map.svg'

const MapIcon = ({color}) => {
   
    return (
       
            <WithLocalSvg
                width={100}
                asset={mapIcon}
                
            >
                <Path
                    d ="M19.9944 9.63956C19.9944 12.0011 18.8148 15.6834 17.1124 18.7914C16.2644 20.3396 15.3002 21.7197 14.3125 22.7069C13.3134 23.7054 12.3497 24.2433 11.4999 24.2433C10.6501 24.2433 9.68641 23.7054 8.68731 22.7069C7.69966 21.7197 6.73544 20.3396 5.88741 18.7914C4.18503 15.6834 3.00547 12.0011 3.00547 9.63956C3.00547 4.94821 6.80856 1.14512 11.4999 1.14512C16.1913 1.14512 19.9944 4.94821 19.9944 9.63956Z"
                    stroke="#1AAB0E"/>
            </WithLocalSvg>
           
        
    );
}

export default MapIcon;