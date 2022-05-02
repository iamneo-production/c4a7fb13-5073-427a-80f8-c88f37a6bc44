package com.examly.springapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.models.Review;
import com.examly.springapp.repos.ReviewRepo;

@Service
public class ReviewService {
	private final ReviewRepo reviewRepo;
	
	@Autowired
	public ReviewService(ReviewRepo reviewRepo) {
		this.reviewRepo = reviewRepo;
	}
	
	public Review addReview(Review review) {
		return reviewRepo.save(review);
	}
	
	public List<Review> findAllReview() {
		return reviewRepo.findAll();
	}
	
	public Review updateReview(Review review) {
		return reviewRepo.save(review);
	}
	
	public void deleteReview(String id) {
		reviewRepo.deleteReviewById(id);
	}
	
}
