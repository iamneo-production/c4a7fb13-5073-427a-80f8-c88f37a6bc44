package com.examly.springapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Review;

public interface ReviewRepo extends JpaRepository<Review, String> {
	void deleteReviewById(String id);
}
