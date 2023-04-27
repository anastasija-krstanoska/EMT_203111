package mk.ukim.finki.emtlab.config;

import lombok.AllArgsConstructor;

import mk.ukim.finki.emtlab.model.Author;
import mk.ukim.finki.emtlab.model.Book;
import mk.ukim.finki.emtlab.model.Country;
import mk.ukim.finki.emtlab.model.enumerations.Category;
import mk.ukim.finki.emtlab.repository.AuthorRepository;
import mk.ukim.finki.emtlab.repository.BookRepository;
import mk.ukim.finki.emtlab.repository.CountryRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

import java.util.List;

@Component
@AllArgsConstructor
public class DataHolder {

    private List<Author> authors;
    private List<Book> books;
    private List<Country> countries;
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final CountryRepository countryRepository;

    @PostConstruct
    public void init() {;
        Country c1 = new Country("Macedonia","Europe");
        Country c2 = new Country("France","Europe");
        Country c3 = new Country("USA","North America");
        countries.add(c1);
        countries.add(c2);
        countries.add(c3);
        countryRepository.saveAll(countries);

        Author a1 = new Author("James","Joyce",c1);
        Author a2 = new Author("Marcel" ," Proust",c2);
        Author a3 = new Author("Miguel de", "Cervantes",c3);
        Author a4 = new Author("Leo", "Tolstoy", c3);
        Author a5 = new Author("Homer", "", c3);
        Author a6 = new Author("Dante", "Alighieri", c3);


        authors.add(a1);
        authors.add(a2);
        authors.add(a3);
        authors.add(a4);
        authors.add(a5);
        authors.add(a6);

        authorRepository.saveAll(authors);

        Book b1 = new Book("In Search of Lost Time", Category.BIOGRAPHY,a2,300);
        Book b2 = new Book("Ulysses", Category.NOVEL,a1,20);
        Book b3 = new Book("Don Quixote", Category.NOVEL,a3,50);
        Book b4 = new Book("War and Peace", Category.NOVEL,a4,100);
        Book b5 = new Book("The Odyssey", Category.THRILLER,a5,300);
        Book b6 = new Book("The Divine Comedy", Category.HISTORY,a6,500);
        books.add(b1);
        books.add(b2);
        books.add(b3);
        books.add(b4);
        books.add(b5);
        books.add(b6);

        bookRepository.saveAll(books);
    }

}
