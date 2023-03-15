import React, { useState } from 'react';

const HamburgerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const hamburgerBar = 'w-8 my-1 h-1 bg-black rounded-fulln transition-all ease-in-out';

    const onOpenHandler = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div
            className='flex flex-col justify-between items-center w-12 h-8 cursor-pointer'
            onClick={onOpenHandler}
        >
            <div
                className={
                    isOpen
                        ? `${hamburgerBar} rotate-[405deg] translate-y-3 duration-[1500ms]`
                        : `${hamburgerBar} duration-[1500ms]`
                }
            ></div>
            <div
                className={
                    isOpen
                        ? `${hamburgerBar} opacity-0 duration-1000`
                        : `${hamburgerBar} opacity-1 duration-1000`
                }
            ></div>
            <div
                className={
                    isOpen
                        ? `${hamburgerBar} rotate-[-405deg] -translate-y-3 duration-[1500ms]`
                        : `${hamburgerBar} duration-[1500ms]`
                }
            ></div>
        </div>
    );
};

export default HamburgerButton;
