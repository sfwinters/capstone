package com.example.trek.service;

import com.example.trek.model.Ships;
import com.example.trek.repository.ShipsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ShipsServiceImpl implements ShipsService{
    @Autowired
    ShipsRepository shipsRepository;

    @Override
    public Iterable<Ships> listShips() {
        return shipsRepository.findAll();
    }

    @Override
    public Ships createShips(Ships ships) {
        return shipsRepository.save(ships);
    }

    @Override
    public Ships getShipsById(Long id) {
        return shipsRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteShipsById(Long id) {
        shipsRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
