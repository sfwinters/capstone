package com.example.trek.controller;

import com.example.trek.model.Ships;
import com.example.trek.service.ShipsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ships")

public class ShipsController {
    @Autowired
    ShipsService shipsService;

    @GetMapping
    public Iterable<Ships> listAllShips() {
        return shipsService.listShips();
    }

    @PostMapping
    public Ships createShips(@RequestBody Ships ships) {
        return shipsService.createShips(ships);
    }

    @GetMapping("/{id}")
    public Ships getShipsById(@PathVariable Long id) {
        return shipsService.getShipsById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteShips(@PathVariable Long id) {
        return shipsService.deleteShipsById(id);
    }
}
