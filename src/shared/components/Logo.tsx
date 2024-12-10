import React from 'react';
import { Image } from 'react-bootstrap';

import LogoImg from '../../images/logo/imageLogo.png';

export const Logo = () => {
    return (
        <Image src={LogoImg} style={{maxWidth: '140px'}}/>
    );
}

export default Logo;