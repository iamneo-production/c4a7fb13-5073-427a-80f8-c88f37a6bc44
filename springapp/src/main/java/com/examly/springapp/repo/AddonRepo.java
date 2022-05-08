package com.examly.springapp.repo;

import java.util.Optional;
import com.examly.springapp.model.Addon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddonRepo extends JpaRepository<Addon, Long> {
    void deleteAddonById(Long id);

    Optional<Addon> findAddonById(Long id);
}
