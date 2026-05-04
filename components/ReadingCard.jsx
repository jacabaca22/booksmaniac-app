import React, { useState } from 'react';
import StarRating from './StarRating';
import { getCover } from './utils';

export default function ReadingCard({ book, updatePage, confirmFinish, removeFromReading }) {
    const [isPickerOpen, setIsPickerOpen] = useState(false);
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    const toggleRating = () => {
        if (isPickerOpen && selectedRating > 0) {
            confirmFinish(book, selectedRating);
            setIsPickerOpen(false);
        } else if (isPickerOpen) {
            setIsPickerOpen(false);
            setSelectedRating(0);
            setHoverRating(0);
        } else {
            setIsPickerOpen(true);
            setSelectedRating(0);
            setHoverRating(0);
        }
    };

    return (
        <div className="reading-card">
            <div className="reading-card-cover">
                <img
                    src={getCover(book)}
                    className="reading-card-img"
                    alt={book.volumeInfo.title}
                />
            </div>
            <div className="reading-card-info">
                <h3 className="reading-card-title">{book.volumeInfo.title}</h3>
                <p className="reading-card-author">{book.volumeInfo.authors?.[0] || 'Unknown author'}</p>
                <div className="reading-card-meta">
                    <span className="reading-card-genre">{book.volumeInfo.categories?.[0] || ''}</span>
                    <div className="reading-card-page-box">
                        <span className="reading-card-page-label">PAGE:</span>
                        <input
                            type="number"
                            min="0"
                            max="1000"
                            value={book.currentPage || null}
                            onChange={(e) => updatePage(book.id, e.target.value)}
                            className="reading-card-page-input"
                        />
                    </div>
                </div>
            </div>
            <div className="reading-card-actions">
                <button 
                    onClick={toggleRating} 
                    className={`btn-finish ${isPickerOpen ? 'btn-finish--active' : ''}`}
                >
                    FINISH
                </button>
                {isPickerOpen && (
                    <StarRating 
                        book={book} 
                        hoverRating={hoverRating}
                        setHoverRating={setHoverRating}
                        selectedRating={selectedRating}
                        setSelectedRating={setSelectedRating}
                        onConfirm={(rating) => {
                            confirmFinish(book, rating);
                            setIsPickerOpen(false);
                        }} 
                    />
                )}
                <button onClick={() => removeFromReading(book)} className="btn-remove">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    REMOVE
                </button>
            </div>
        </div>
    );
}
