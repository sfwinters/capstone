package com.example.trek.controller;

import com.example.trek.model.Crew;
import com.example.trek.service.CrewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/crew")

public class CrewController {
    @Autowired
    CrewService crewService;

    @GetMapping
    public Iterable<Crew> listAllCrew() {
        return crewService.listCrew();
    }

    @PostMapping
    public Crew createCrew(@RequestBody Crew crew) {
        return crewService.createCrew(crew);
    }

    @GetMapping("/{id}")
    public Crew getCrewById(@PathVariable Long id) {
        return crewService.getCrewById(id);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteCrew(@PathVariable Long id) {
        return crewService.deleteCrewById(id);
    }
}
