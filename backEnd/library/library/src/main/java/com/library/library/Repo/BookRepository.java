package com.library.library.Repo;

import com.library.library.DTO.BookDTO;
import com.library.library.Model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends MongoRepository<Book,String> {

}
