package com.devsuperior.movieflix.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;
	
	//@PreAuthorize("hasAnyRole('ADMIN','VISITOR','MEMBER')")
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll() {
		
		List<Genre> list = repository.findAll();

		List<GenreDTO> listDTO = new ArrayList<>();
		for(Genre genre: list) {
			listDTO.add(new GenreDTO(genre));
		}

		return listDTO;
	}

}
