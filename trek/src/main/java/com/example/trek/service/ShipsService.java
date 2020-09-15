package com.example.trek.service;

import com.example.trek.model.Ships;
import org.springframework.http.HttpStatus;

public interface ShipsService {
    Iterable<Ships> listShips();
    Ships createShips(Ships ships);
    Ships getShipsById(Long id);
    HttpStatus deleteShipsById(Long id);

}
