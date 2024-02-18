import React from 'react';
import Link from 'next/link';

const Header = ({ title }: { title: string }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Link href="/word-game">Word Game</Link>
        </header>
    );
};

export default Header;