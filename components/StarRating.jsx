import React, { useState } from 'react';

export default function StarRating({ 
    book, 
    hoverRating, 
    setHoverRating, 
    selectedRating, 
    setSelectedRating, 
    onConfirm 
}) {
    return (
        <div className="star-rating-picker">
            <div className="star-rating-stars">
                {[1, 2, 3, 4, 5].map(star => {
                    const displayRating = hoverRating || selectedRating;
                    const isFull = displayRating >= star;
                    const isHalf = !isFull && displayRating >= star - 0.5;
                    return (
                        <span key={star} className="star-rating-star">
                            <span
                                className="star-half star-half--left"
                                onMouseEnter={() => setHoverRating(star - 0.5)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setSelectedRating(star - 0.5)}
                            />
                            <span
                                className="star-half star-half--right"
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setSelectedRating(star)}
                            />
                            <svg className={`star-icon ${isFull ? 'star--full' : isHalf ? 'star--half-display' : 'star--empty'}`} viewBox="0 0 24 24">
                                {isHalf ? (
                                    <>
                                        <defs>
                                            <linearGradient id={`half-${book.id}-${star}`}>
                                                <stop offset="50%" stopColor="#facc15" />
                                                <stop offset="50%" stopColor="#3d4856" />
                                            </linearGradient>
                                        </defs>
                                        <path fill={`url(#half-${book.id}-${star})`} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </>
                                ) : (
                                    <path fill={isFull ? '#facc15' : '#3d4856'} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                )}
                            </svg>
                        </span>
                    );
                })}
            </div>
            {selectedRating > 0 && (
                <button
                    className="star-rating-confirm"
                    onClick={() => onConfirm(selectedRating)}
                >
                    ✓ {selectedRating}/5
                </button>
            )}
        </div>
    );
}
