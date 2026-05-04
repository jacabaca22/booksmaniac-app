import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="flex items-center">
                    <img src="/booksmaniac-logo.png" alt="Booksmaniac Logo" className="navbar-logo" />
                </div>
                <div className="navbar-links">
                    <button onClick={() => setActiveTab('home')} className={`nav-link ${activeTab === 'home' ? 'nav-link--active' : ''}`}>Search</button>
                    <button onClick={() => setActiveTab('reading')} className={`nav-link ${activeTab === 'reading' ? 'nav-link--active' : ''}`}>Reading</button>
                    <button onClick={() => setActiveTab('finished')} className={`nav-link ${activeTab === 'finished' ? 'nav-link--active' : ''}`}>Shelf</button>
                </div>
            </div>
        </nav>
    );
}
