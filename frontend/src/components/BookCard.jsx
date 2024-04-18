import React from 'react';

const BookCard = ({book, deleteBook}) => {
    return (
        <div>
            <div className="list">
                <div className="card-container">
                    <img
                        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                        alt="Books"
                        height="200"
                    />
                    <div className="desc">
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <p>{book.description} <br/>
                       
                        Pages: {book.pages}
                        <button
                            className="float-right"
                            onClick={()=>deleteBook(book._id)}
                        >X</button>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;