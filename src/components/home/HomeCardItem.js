import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.target === "_self" ? props.path: "/"}
          onClick={() => {
            if (props.target === "_self") {
              setTimeout(function() {
                window.scrollTo(window.scrollX, window.scrollY - 100);
            }, 10);
            }
            else {
              window.location.href = props.path
            }
          }}
        >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
