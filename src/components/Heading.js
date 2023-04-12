import React from 'react';
import { useThemeHook} from '../GlobalComponents/ThemeProvider';

const Heading = (props) => {
    const [theme] = useThemeHook();

    return (
        <h1 className={`text-center border-bottom py-2 ${props?.size} ${theme? 'text-dark-gray': 'text-light-black'}`}>
            {props.heading}
        </h1>
    );
};

export default Heading;