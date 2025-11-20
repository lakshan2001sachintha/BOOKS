package com.library.library.Service;

import com.library.library.DTO.BookDTO;
import com.library.library.Model.Book;
import com.library.library.Repo.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    private final BookRepository bookRepository;

    // Save books by Admin
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book saveBook(BookDTO bookDTO){
        Book book = new Book();
                book.setBookName1(bookDTO.getBookName1());
                book.setBookName2(bookDTO.getBookName2());
                book.setBookName3(bookDTO.getBookName3());
                book.setBookName4(bookDTO.getBookName4());

        return bookRepository.save(book);
    }

    // Delete Book By Admin
    public void deleteAllBooks() {
        bookRepository.deleteAll();
    }

    // Get books from DB to Home page
    public Book getBooks(){
        return bookRepository.findAll().stream().findFirst().orElse(null);
    }
}
