package com.examly.springapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.models.Review;
import com.examly.springapp.repos.ReviewRepo;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReviewService {
	
	
	@Autowired
    ReviewRepo reviewRepo;
	
	public Review addReview(Review review) {
		return reviewRepo.save(review);
	}
	
	public List<Review> findAllReview() {
		return reviewRepo.findAll();
	}
	
	public Review updateReview(Review review ,String Id) {

        Review r=reviewRepo.findByReviewBy(Id);
		r.setReviewDes(review.getReviewDes());
		r.setDateTime(review.getDateTime());
		r.setRating(review.getRating());
		return reviewRepo.save(r);
		
	}
	
	public void deleteReview(String id) {
		System.out.println("service before delete");
		reviewRepo.deleteByReviewBy(id);
		System.out.println("service after delete");
	}
    public Review findReviewById(String Id)
    {
        return reviewRepo.findByReviewBy(Id);
    }
	
}
