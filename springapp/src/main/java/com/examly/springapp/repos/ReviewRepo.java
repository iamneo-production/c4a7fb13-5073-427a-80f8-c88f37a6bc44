package com.examly.springapp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.models.Review;

public interface ReviewRepo extends JpaRepository<Review, String> {
	void deleteByReviewBy(String id);
    Review findByReviewBy(String id);
}
