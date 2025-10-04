package com.library.library.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Book")
public class Book {

    @Id
    private String id;

    private String bookName1;
    private String bookName2;
    private String bookName3;
    private String bookName4;

    public Book() {
        this.bookName1 = bookName1;
        this.bookName2 = bookName2;
        this.bookName3 = bookName3;
        this.bookName4 = bookName4;
    }

    public String getId() {
        return id;
    }

    public String getBookName1() {
        return bookName1;
    }

    public void setBookName1(String bookName1) {
        this.bookName1 = bookName1;
    }

    public String getBookName2() {
        return bookName2;
    }

    public void setBookName2(String bookName2) {
        this.bookName2 = bookName2;
    }

    public String getBookName3() {
        return bookName3;
    }

    public void setBookName3(String bookName3) {
        this.bookName3 = bookName3;
    }

    public String getBookName4() {
        return bookName4;
    }

    public void setBookName4(String bookName4) {
        this.bookName4 = bookName4;
    }
}
