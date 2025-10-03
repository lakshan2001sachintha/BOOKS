package com.library.library.Controller;


import com.library.library.DTO.ReviewDTO;
import com.library.library.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/review")

public class ReviewController {

    public final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    //Save Review endpoint
    @PostMapping("/save")
    public String SaveReview(@RequestBody ReviewDTO reviewDTO){
        return reviewService.saveReview(reviewDTO);
    }

    //Update Review endpoint
    @PostMapping("/update")
    public String UpdateReview(@RequestBody ReviewDTO reviewDTO){
        return reviewService.updateReview(reviewDTO);
    }

    //Get Reviews by book name
    @GetMapping("/get/{bookName}")
    public List<ReviewDTO> GetReviews(@PathVariable String bookName){
        return reviewService.getReviewsByBookName(bookName);
    }

    // Admin Controllers  ======================================================

    // Review Count
    @GetMapping("/count")
    public ResponseEntity<Long> getReviewCount(){
        Long count = reviewService.getReviewCount();
        return ResponseEntity.ok(count);
    }

    @GetMapping("/getall")
    public List<ReviewDTO> getAllReviews(){
        return reviewService.getAllReviews();
    }

    @DeleteMapping("/deleteall")
    public String deleteAllReviews(){
        return reviewService.deleteAllReviews();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteReviewById(@PathVariable String id){
        return reviewService.deleteReviewById(id);
    }

}

