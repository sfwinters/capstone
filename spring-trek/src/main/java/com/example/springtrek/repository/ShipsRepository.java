package com.example.springtrek.repository;

import com.example.springtrek.model.Ships;
import org.springframework.data.repository.CrudRepository;

public interface ShipsRepository extends CrudRepository<Ships, Long> {
}
