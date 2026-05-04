import React from 'react';
import { getCover } from './utils';

export default function BookCard({ book, isAdded, onAdd }) {
    return (
        <div className="book-card">
            <div className="book-card-cover">
                <img
                    src={getCover(book)}
                    className="book-card-img"
                    alt={book.volumeInfo.title}
                />
                <div className="book-card-overlay">
                    {isAdded ? (
                        <div className="book-card-added-badge">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            ADDED
                        </div>
                    ) : (
                        <button onClick={() => onAdd(book)} className="book-card-add-btn">
                            ADD TO LIST
                        </button>
                    )}
                </div>
            </div>
            <h3 className="book-card-title">{book.volumeInfo.title}</h3>
            <p className="book-card-author">{book.volumeInfo.authors?.[0] || 'Unknown author'}</p>
        </div>
    );
}
