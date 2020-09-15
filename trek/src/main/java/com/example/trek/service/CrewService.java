package com.example.trek.service;

import com.example.trek.model.Crew;
import org.springframework.http.HttpStatus;

public interface CrewService {
    Iterable<Crew> listCrew();
    Crew createCrew(Crew crew);
    Crew getCrewById(Long id);
    HttpStatus deleteCrewById(Long id);

}
