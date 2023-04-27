package mk.ukim.finki.emtlab.service;

import mk.ukim.finki.emtlab.model.Book;
import mk.ukim.finki.emtlab.model.dto.BookDto;

import java.util.List;

public interface BookService {
    List<Book> findAllBooks();

    Book findById(Long id);

    Book create(BookDto book);

    Book update(Long id, BookDto book);

    void delete(Long id);

    void markBookAsTaken(Long id);
}
