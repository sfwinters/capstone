package com.example.trek.service;

import com.example.trek.model.Crew;
import com.example.trek.repository.CrewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CrewServiceImpl implements CrewService{
    @Autowired
    CrewRepository crewRepository;

    @Override
    public Iterable<Crew> listCrew() {
        return crewRepository.findAll();
    }

    @Override
    public Crew createCrew(Crew crew) {
        return crewRepository.save(crew);
    }

    @Override
    public Crew getCrewById(Long id) {
        return crewRepository.findById(id).get();
    }

    @Override
    public HttpStatus deleteCrewById(Long id) {
        crewRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
