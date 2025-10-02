package com.library.library.Service;

import com.library.library.DTO.ReviewDTO;
import com.library.library.Model.Review;
import com.library.library.Model.User;
import com.library.library.Repo.ReviewRepository;
import com.library.library.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Transactional
public class ReviewService {

    private ReviewRepository reviewRepository;
    private UserRepository userRepository;

    public ReviewService(ReviewRepository reviewRepository, UserRepository userRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
    }

    //save Reviews
   public String saveReview(ReviewDTO request){
        Optional<User> reviewOpt = userRepository.findByUsername(request.getUsername());
        if(reviewOpt.isPresent()){
                User review = reviewOpt.get();
            if(review.getUsername().equals(request.getUsername())){
                Review addreview = new Review();
                addreview.setUsername(request.getUsername());
                addreview.setBookName(request.getBookName());
                addreview.setReview(request.getReview());

                reviewRepository.save(addreview);
                return "Successfully added your review!";
            }
        }
        return "User not Found !";
   }

   //GET
   public List<ReviewDTO> getReviewsByBookName(String book_name) {
       List<Review> reviews = reviewRepository.findByBookName(book_name);
       return reviews.stream()
               .map(review -> new ReviewDTO(
                       review.getId(),
                       review.getUsername(),
                       review.getBookName(),
                       review.getReview()))
               .collect(Collectors.toList());
   }

   //Update Reviews
    public String updateReview(ReviewDTO request){
        Optional<Review> reviewOpt = reviewRepository.findByUsername(request.getUsername());
        if(reviewOpt.isPresent()){

                Review review = reviewOpt.get();
                review.setBookName(request.getBookName());
                review.setReview(request.getReview());

                reviewRepository.save(review);
                return "Successfully updated your review !";

        }
        return "User not Found !";
    }


    // Admin Things ======================================================


    // Count Reviews
    public long getReviewCount(){
        return reviewRepository.count();
    }

    // Get All Reviews
    public List<ReviewDTO> getAllReviews(){
        List<Review> reviews = reviewRepository.findAll();
        return reviews.stream()
                .map(review -> new ReviewDTO(
                        review.getId(),
                        review.getUsername(),
                        review.getBookName(),
                        review.getReview()))
                .collect(Collectors.toList());
    }

    // Delete All Reviews
    public String deleteAllReviews(){
        reviewRepository.deleteAll();
        return "All Reviews Deleted Successfully !";
    }

}
