package com.devsuperior.movieflix.entities.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.MovieDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.services.exceptions.ResourceNotFoundException;
import com.devsuperior.movieflix.repositories.MovieRepository;

@Service
public class MovieService {
	@Autowired
	MovieRepository repository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAllPaged(PageRequest pageRequest) {
		
		Page<Movie> list = repository.findAll(pageRequest);

		Page<MovieDTO> listDTO = list.map(x -> new MovieDTO(x));

		return listDTO;
	}

	public MovieDTO findById(Long id) {
		Optional<Movie> obj = repository.findById(id);		
		Movie entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new MovieDTO(entity, entity.getReviews());
	}

	
}
