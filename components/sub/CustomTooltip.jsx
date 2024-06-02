import React, { useState } from 'react';

const CustomTooltip = ({ children, content, ...props }) => {
    const [show, setShow] = useState(false);

    return (
        <div
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
            {...props}
        >
            {children}
            {show && (
                <div style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '5px',
                    backgroundColor: 'white',
                    color: 'white',
                    borderRadius: '4px',
                    zIndex: '1000',
                    whiteSpace: 'nowrap'
                }}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default CustomTooltip;
