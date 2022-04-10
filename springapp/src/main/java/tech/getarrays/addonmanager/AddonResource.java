package tech.getarrays.addonmanager;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.addonmanager.model.Addon;
import tech.getarrays.addonmanager.service.AddonService;

import java.util.List;

@RestController
@RequestMapping("/addon")
public class AddonResource {
    private final AddonService addonService;

    public AddonResource(AddonService addonService) {
        this.addonService = addonService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Addon>> getAllAddons () {
        List<Addon> addons = addonService.findAllAddons();
        return new ResponseEntity<>(addons, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Addon> getAddonById (@PathVariable("id") Long id) {
        Addon addon = addonService.findAddonById(id);
        return new ResponseEntity<>(addon, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Addon> addAddon(@RequestBody Addon addon) {
        Addon newAddon = addonService.addAddon(addon);
        return new ResponseEntity<>(newAddon, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Addon> updateAddon(@RequestBody Addon addon) {
        Addon updateAddon = addonService.updateAddon(addon);
        return new ResponseEntity<>(updateAddon, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAddon(@PathVariable("id") Long id) {
        addonService.deleteAddon(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}