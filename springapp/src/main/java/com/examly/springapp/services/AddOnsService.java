package com.examly.springapp.services;

import com.examly.springapp.models.AddOns;
import com.examly.springapp.repos.AddOnsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AddOnsService {

    @Autowired
    private AddOnsRepo addOnsRepo;

    public AddOns saveAddOns(AddOns addOns){
        return addOnsRepo.save(addOns);
    }

    public List<AddOns> getAllAddOns(){
        return addOnsRepo.findAll();
    }

    public AddOns AddOnsById(String id) throws Exception {
        Optional<AddOns> addOns = addOnsRepo.findById(id);
        if(addOns.isEmpty()) throw new Exception("Add On not found");
        else return addOns.get();
    }

    public AddOns updateAddOns(AddOns addOns){
        return addOnsRepo.save(addOns);
    }

    public void deleteAddOns(String id){
        addOnsRepo.deleteById(id);
    }
}

