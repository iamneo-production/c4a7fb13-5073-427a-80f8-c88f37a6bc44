package com.examly.springapp.repos;

import com.examly.springapp.models.AddOns;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddOnsRepo extends JpaRepository<AddOns,String> {
}
