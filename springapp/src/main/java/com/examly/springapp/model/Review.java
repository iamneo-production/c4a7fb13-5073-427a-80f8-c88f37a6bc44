package com.examly.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Review {
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private String id;
	private String rating;
	private String reviewBy;
	private String userId;
	private String reviewDes;
	private String dateTime;
	
	public Review() {}
	
	public Review(String id, String rating, String reviewBy, String userId, String reviewDes, String dateTime) {
		
		this.id = id;
		this.rating = rating;
		this.reviewBy = reviewBy;
		this.userId = userId;
		this.reviewDes = reviewDes;
		this.dateTime = dateTime;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getReviewBy() {
		return reviewBy;
	}

	public void setReviewBy(String reviewBy) {
		this.reviewBy = reviewBy;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getReviewDes() {
		return reviewDes;
	}

	public void setReviewDes(String reviewDes) {
		this.reviewDes = reviewDes;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", rating=" + rating + ", reviewBy=" + reviewBy + ", userId=" + userId
				+ ", reviewDes=" + reviewDes + ", dateTime=" + dateTime + "]";
	}
	
	
}
