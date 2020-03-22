import React from "react";
import { Book } from "../models/book.model";

let ja = new Book("saint");

function Main() {
  return <div>{ja.bookName}</div>;
}

export default Main;
