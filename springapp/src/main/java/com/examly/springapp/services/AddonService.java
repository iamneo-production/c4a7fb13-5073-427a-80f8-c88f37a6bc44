package com.examly.springapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import com.examly.springapp.exception.UserNotFoundException;
import com.examly.springapp.models.Addon;
import com.examly.springapp.repos.AddonRepo;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class AddonService {
    private final AddonRepo addonRepo;

    @Autowired
    public AddonService(AddonRepo addonRepo) {
        this.addonRepo = addonRepo;
    }

    public Addon addAddon(Addon addon) {
        addon.setaddonCode(UUID.randomUUID().toString());
        return addonRepo.save(addon);
    }

    public List<Addon> findAllAddons() {
        return addonRepo.findAll();
    }

    public Addon updateAddon(Addon addon) {
        return addonRepo.save(addon);
    }

    public Addon findAddonById(Long id) {
        return addonRepo.findAddonById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteAddon(Long id){
        addonRepo.deleteAddonById(id);
    }
}