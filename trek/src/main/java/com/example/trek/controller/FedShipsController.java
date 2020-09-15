package com.example.trek.controller;

import com.example.trek.model.FedShips;
import com.example.trek.service.FedShipsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/fedships")

public class FedShipsController {
    @Autowired
    FedShipsService fedShipsService;

    @GetMapping
    public Iterable<FedShips> listAllFedShips() {
        return fedShipsService.listFedShips();
    }

    @PostMapping
    public FedShips createFedShips(@RequestBody FedShips fedShips) {
        return fedShipsService.createFedShips(fedShips);
    }

    @GetMapping("/{id}")
    public FedShips getFedShipsById(@PathVariable Long id) {
        return fedShipsService.getFedShipsById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteFedShips(@PathVariable Long id) {
        return fedShipsService.deleteFedShipsById(id);
    }
}
