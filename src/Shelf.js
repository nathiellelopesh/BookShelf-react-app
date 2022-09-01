import React from "react";

const Shelf = ({ items }) => {
  return (
    <div className="container">
      {items.map((menuItem) => {
        const { id, title, img, author, price } = menuItem;
        return (
          <article key={id} className="book-container">
            <img src={img} alt={title} className="book-container__img" />
            <div className="item-info">
              <header>
                <h4 className="book-container__title">{title}</h4>
                <h4 className="book-container__price">${price}</h4>
                <p className="book-container__author">By {author}</p>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Shelf;
