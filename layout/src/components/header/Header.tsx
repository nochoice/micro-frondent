import React from "react";
import './header.scss';
import Logo from '../../images/logo.png';

interface Props {
    title?: string;
    children?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export default function Header({title, left, right, children}: Props) {
    return (
        <header>
            <div className="logo">
                <a href="/"><img src={Logo} /></a>            
            </div>
            <div className="left">{left}</div>
            <div className="title">{title || 'Just welcome'}</div>
            <div className="right">{right}</div>
            {children}
        </header>
    )
}