console.log('************** DELIVERABLE 04 *********************');

type book = {
  title: string;
  isRead: boolean;
};

const books: book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

const isBookRead = (books: book[], titleToSearch: string): boolean => {
  return books.some(
    (book) => book.title === titleToSearch && book.isRead === true,
  );
};
console.log('----Libros----', books);
console.log(
  'Harry Potter y la piedra filosofal',
  isBookRead(books, 'Harry Potter y la piedra filosofal'),
);
console.log(
  'Canción de hielo y fuego',
  isBookRead(books, 'Canción de hielo y fuego'),
);
console.log('Devastación', isBookRead(books, 'Devastación'));
console.log(
  'El señor de los anillos',
  isBookRead(books, 'El señor de los anillos'),
);
