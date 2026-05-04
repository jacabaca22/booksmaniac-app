import React, { useState } from 'react';
import BookCard from './BookCard';

export default function SearchTab({ readingList, addToReading }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchBooks = async (e) => {
        e.preventDefault();
        if (!query) return;
        setError('');

        try {
            const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`);
            if (!res.ok) throw new Error("API Error");
            const data = await res.json();

            const mappedResults = (data.docs || []).map(doc => ({
                id: doc.key,
                volumeInfo: {
                    title: doc.title,
                    authors: doc.author_name,
                    categories: doc.subject ? [doc.subject[0]] : null,
                    imageLinks: doc.cover_i ? {
                        thumbnail: `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
                    } : null
                }
            }));

            setResults(mappedResults);
        } catch (err) {
            setError('Error connecting to the OpenLibrary API.');
            setResults([]);
        }
    };

    return (
        <section className="section-animated">
            <div className="search-header">
                <h2 className="search-title">What are you going to read?</h2>
                <form onSubmit={searchBooks} className="search-form">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search by title, author or ISBN..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">SEARCH</button>
                </form>
                {error && <p className="search-error">{error}</p>}
            </div>

            <div className="book-grid">
                {results.map(book => (
                    <BookCard
                        key={book.id}
                        book={book}
                        isAdded={readingList.some(b => b.id === book.id)}
                        onAdd={addToReading}
                    />
                ))}
            </div>
        </section>
    );
}
