import React from 'react';
import ReadingCard from './ReadingCard';

export default function ReadingTab({ readingList, updatePage, confirmFinish, removeFromReading }) {
    return (
        <section className="section-animated">
            <h2 className="reading-title">Current reads</h2>
            {readingList.length === 0 ? (
                <p className="reading-empty">No books on the list</p>
            ) : (
                <div className="reading-list">
                    {readingList.map(book => (
                        <ReadingCard
                            key={book.id}
                            book={book}
                            updatePage={updatePage}
                            confirmFinish={confirmFinish}
                            removeFromReading={removeFromReading}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
