import "./styles.css";
import React from "react";

import { Text } from "../../assets/styled/text";

const Card = props => (
  <div className="card col-xs-12">
    <div className="card__image">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAMAAACWCLnmAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFNUExURUdwTF8j7Tjkn18j7V8j7V8j7Tjkn18j7V8j7V8j7V8j7V8j7Tjknzjknzjkn18j7V8j7V8j7V8j7Tjkn18j7V8j7V8j7V8j7V8j7V8j7Tjkn18j7V8j7Tjknzjkn18j7V8j7Tjkn18j7V8j7V8j7Tjkn18j7Tjknzjknzjknzjknzjknzjkn18j7V8j7V8j7V8j7Tjkn18j7Tjkn18j7V8j7TjioDjknzjknzjknzjkn18j7V8j7V8j7V8j7V8j7Tjkn18j7Tjkn18j7V8j7V8j7Tjkn18j7Tjknzjkn18j7Tjknzjknzjknzjkn18j7Tjknzjknzjknzjknzjkn10y6V8j7V8j7V8j7Tjknzjkn18j7Tjknzjknzjknzjknzjknzjknzjknzjkn1da2l8j7Trfok+IyELCrzjkn18j7VF8zU6OxV8j7Tjknxi2ye4AAABtdFJOUwDRA8n6vvwCCf5ulEn33GBSw5AJJCBB8lw5qhTnMenvcmHjPKwjy5NztY0P4YAGnbEG9yylt1Y6Gm/KokRM7N2QDvJlZA9EJ+S81ofQWp+IsSddJcL8WHqGedMvFHoSUkEg7mm+if6N+aAys/C5Lep2AAABzUlEQVQYGXXAZWOqUAAG4FcRAbtmd1x1dsya63Cb67jdXef8/49DMEDggRoX9DEpQtqmhqcOPdzxHslup91hm91Edms8NAIvSD6HuYm9nR1jzTi0l4NCgBVsUAla2AOocD5ig8JGiq1jnU8YY4XNxqDBsfEDLHjIDnRstG+wwHihyxfiIZuQl9AVIGHIbBYe+kxdyLYZGLBfQObtwoCtDZnJDgNuAhnTgIEjAllzCwZqcch+xFt3/cR7aDVZSFq/yG8qqu4XoMaHapg5df18+t6/S3wqJq1FP5TCZALRB3reuQnFIPKXnG8HWOEuWIhKdGpGLNWFpHPm+oilNIkA6Fs3IXKTY0gKX2+xELHYIbocmTHTEDyQ9KgDsne7DA/AQT9DwuWFVxxmRo+QeEKmGETXLsxxrwmTgyhDBwACedI8wYyriKWciTDpv/UB7QXcW0LcDZn1G1a4nWabCKknCxG8RzzmaAYqfMSd/v8veIIV5xAaziGULq+x7oE6oLSfNGNNyVqBUoJeQc3sikKtXK1A5Q1NQK1wWDZD4dS6iXUOa7mCpZ7zvAUNx+HZvRmShyiN+qHjyy1N/hneZ6aPNJmBgc505KS0Gr3yQ+MZmSxAMX+gQDoAAAAASUVORK5CYII="
        alt="icon"
      />
    </div>

    <div className="card__title">
      <Text size="1.5rem" upper>
        {props.title}
      </Text>
    </div>

    <div className="card__text">
      <Text>{props.content}</Text>
    </div>
  </div>
);

export default Card;
