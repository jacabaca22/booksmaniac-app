import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchTab from './components/SearchTab';
import ReadingTab from './components/ReadingTab';
import ShelfTab from './components/ShelfTab';

function App() {
    const [readingList, setReadingList] = useState([]);
    const [finishedList, setFinishedList] = useState([]);
    const [activeTab, setActiveTab] = useState('home');

    const addToReading = (book) => {
        if (!readingList.find(b => b.id === book.id)) {
            setReadingList([...readingList, { ...book, currentPage: 1 }]);
        }
    };

    const updatePage = (bookId, pageString) => {
        const page = parseInt(pageString, 10) || 0;
        setReadingList(readingList.map(b => b.id === bookId ? { ...b, currentPage: page } : b));
    };

    const removeFromReading = (book) => {
        if (confirm(`Are you sure you want to remove "${book.volumeInfo.title}" from the reading list?`)) {
            setReadingList(readingList.filter(b => b.id !== book.id));
        }
    };

    const confirmFinish = (book, rating) => {
        setFinishedList([...finishedList, { ...book, rating }]);
        setReadingList(readingList.filter(b => b.id !== book.id));
    };

    return (
        <div className="app-container">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="main-content">
                {activeTab === 'home' && (
                    <SearchTab 
                        readingList={readingList} 
                        addToReading={addToReading} 
                    />
                )}
                {activeTab === 'reading' && (
                    <ReadingTab 
                        readingList={readingList}
                        updatePage={updatePage}
                        confirmFinish={confirmFinish}
                        removeFromReading={removeFromReading}
                    />
                )}
                {activeTab === 'finished' && (
                    <ShelfTab finishedList={finishedList} />
                )}
            </main>
        </div>
    );
}

export default App;