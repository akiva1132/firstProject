function newBooks(
  name,
  date,
  genre,
  authorFirstName,
  authorLasttName,
  authorAge
) {
  let book = { name: name, date: date, genre: genre };
  book["author"] = {
    firstName: authorFirstName,
    lastName: authorLasttName,
    age: authorAge,
  };
  return book;
}

function printBook(book) {
  console.log("Name: " + book.name);
  console.log("Date: " + book.date);
  console.log("Genre: " + book.genre);
  console.log("Author First Name: " + book.author.firstName);
  console.log("Author Last Name: " + book.author.lastName);
  console.log("Author Age: " + book.author.age);
}

function editNameBook(book, newName) {
  book.name = newName;
}

function editDateBook(book, newDate) {
  book.date = newDate;
}

function editauthorAge(book, newAuthorAge) {
  if (book.author.age < 80 && book.author.age > 15) {
    book.author.age = newAuthorAge;
  } else {
    throw Error("Error");
  }
}

let book1 = newBooks("sca", "30/07/2000", "skr", "akiva", "kraus", 70);
let book2 = newBooks("ak2", "30/07/1990", "arrw", "ary", "key", 20);
// לא הבנתי למה לעשות רשימת ספרים עם אובייקט במקום עם מערך
let allBooks = { book1: book1, book2: book2 };

printBook(book1);
editNameBook(book1, "aaa");
editauthorAge(book1, 95);
printBook(book1);
