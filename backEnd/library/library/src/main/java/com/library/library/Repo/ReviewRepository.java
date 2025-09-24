package com.library.library.Repo;

import com.library.library.Model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    Optional<Review> findByUsername(String username);
    List<Review> findByBookName(String bookName);
}
