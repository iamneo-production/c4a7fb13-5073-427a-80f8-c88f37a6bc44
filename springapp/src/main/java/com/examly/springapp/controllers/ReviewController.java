package com.examly.springapp.controllers;

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
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import com.examly.springapp.models.Review;
import com.examly.springapp.services.ReviewService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin("*")
@RequestMapping("/")
public class ReviewController {
	@Autowired
	private  ReviewService reviewService;
	
	
	
	@GetMapping("getReview")
	public ResponseEntity<List<Review>> findAllReviews () {
		List<Review> reviews = reviewService.findAllReview();
		return new ResponseEntity<>(reviews, HttpStatus.OK);
	}
	
	@PostMapping("customer/addReview")
	public ResponseEntity<Review> addReview(@RequestBody Review review){
		Review newReview = reviewService.addReview(review);
		return new ResponseEntity<>(newReview, HttpStatus.CREATED);
	}
	
	@PostMapping("customer/editReview/{id}")
	public ResponseEntity<Review> updateReview(@RequestBody Review review , @PathVariable("id") String id){
		Review updatedReview = reviewService.updateReview(review ,id);
		return new ResponseEntity<>(updatedReview, HttpStatus.OK);
	} 
	
	@GetMapping("customer/deleteReview/{id}")
	public ResponseEntity<Void> deleteReview(@PathVariable("id") String id){
		System.out.println("before delete");
		reviewService.deleteReview(id);
		System.out.println("after delete");
		return new ResponseEntity<Void>(HttpStatus.OK);
	} 
    @GetMapping("customer/getReview/{id}")
	public ResponseEntity<Review> getReview(@PathVariable("id") String id){
		Review r=reviewService.findReviewById(id);
		System.out.println(r);
        if(r!=null){
		return ResponseEntity.status(HttpStatus.OK).body(r);

        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        
	} 
	
	
	
}
