import React from 'react';
import { getCover } from './utils';

export default function ShelfTab({ finishedList }) {
    return (
        <section className="shelf-section">
            <div className="shelf-counter">
                <span className="shelf-counter-label">In my library:</span>
                <span className="shelf-counter-number">{finishedList.length}</span> <span className="text-3xl">📖</span>
            </div>

            <h2 className="shelf-title">My digital shelf</h2>

            {finishedList.length === 0 ? (
                <p className="shelf-empty">Your digital shelf is empty for now. Finish reading some books!</p>
            ) : (
                <div className="shelf-grid">
                    {finishedList.map(book => (
                        <div key={book.id} className="shelf-book">
                            <div className="shelf-book-cover">
                                <img
                                    src={getCover(book, '150x225')}
                                    className="shelf-book-img"
                                    alt={book.volumeInfo.title}
                                />
                                {book.rating && (
                                    <div className="shelf-book-rating">⭐ {book.rating}/5</div>
                                )}
                            </div>
                            <h3 className="shelf-book-title">{book.volumeInfo.title}</h3>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
