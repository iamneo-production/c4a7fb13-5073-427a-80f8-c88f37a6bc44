package com.examly.springapp.repos;

import java.util.Optional;
import com.examly.springapp.models.Addon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddonRepo extends JpaRepository<Addon, Long> {
    void deleteAddonById(Long id);

    Optional<Addon> findAddonById(Long id);
}
