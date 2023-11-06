import React from 'react';
import { WithLocalSvg } from 'react-native-svg';
import mapIcon from '../../assets/TabBarIcon/map.svg'

const MapIcon = ({color}) => {
    return (
       
            <WithLocalSvg
                width={100}
                fill={"#FFFFFF"}
                stroke={color}
                asset={mapIcon}
            />
           
        
    );
}

export default MapIcon;