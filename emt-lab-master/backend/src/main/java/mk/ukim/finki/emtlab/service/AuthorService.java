package mk.ukim.finki.emtlab.service;

import mk.ukim.finki.emtlab.model.Author;
import mk.ukim.finki.emtlab.model.Book;

import java.util.List;

public interface AuthorService {
    List<Author> listAllAuthors();
    Author findById(Long id);
}
