package com.example.trek.service;

import com.example.trek.model.FedShips;
import com.example.trek.repository.FedShipsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class FedShipsServiceImpl implements FedShipsService{
    @Autowired
    FedShipsRepository fedShipsRepository;

    @Override
    public Iterable<FedShips> listFedShips() {
        return fedShipsRepository.findAll();
    }

    @Override
    public FedShips createFedShips(FedShips fedShips) {
        return fedShipsRepository.save(fedShips);
    }

    @Override
    public FedShips getFedShipsById(Long id) {
        return fedShipsRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteFedShipsById(Long id) {
        fedShipsRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
