package com.examly.springapp;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;

@RestController
@RequestMapping("/user")
public class ReviewController {
	private final ReviewService reviewService;
	
	public ReviewController(ReviewService reviewService) {
		this.reviewService = reviewService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Review>> findAllReviews () {
		List<Review> reviews = reviewService.findAllReview();
		return new ResponseEntity<>(reviews, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Review> addReview(@RequestBody Review review){
		Review newReview = reviewService.addReview(review);
		return new ResponseEntity<>(newReview, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Review> updateReview(@RequestBody Review review){
		Review updatedReview = reviewService.updateReview(review);
		return new ResponseEntity<>(updatedReview, HttpStatus.OK);
	} 
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteReview(@PathVariable("id") String id){
		reviewService.deleteReview(id);
		return new ResponseEntity<>(HttpStatus.OK);
	} 
	
	
	
}
