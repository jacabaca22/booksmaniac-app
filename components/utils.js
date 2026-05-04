export const coverFallback = (size = '300x450') =>
    `https://placehold.co/${size}/445566/FFF?text=Brak+Okladki`;

export const getCover = (book, size) =>
    book.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || coverFallback(size);
