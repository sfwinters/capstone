package com.example.trek.service;

import com.example.trek.model.FedShips;
import org.springframework.http.HttpStatus;

public interface FedShipsService {
    Iterable<FedShips> listFedShips();
    FedShips createFedShips(FedShips fedShips);
    FedShips getFedShipsById(Long id);
    HttpStatus deleteFedShipsById(Long id);

}
