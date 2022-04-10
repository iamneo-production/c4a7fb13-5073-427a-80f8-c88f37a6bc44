package tech.getarrays.addonmanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.addonmanager.model.Addon;

import java.util.Optional;

public interface AddonRepo extends JpaRepository<Addon, Long> {
    void deleteAddonById(Long id);

    Optional<Addon> findAddonById(Long id);
}
