package com.library.library.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.library.library.Model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);  // change 6:31 p.m.

}


