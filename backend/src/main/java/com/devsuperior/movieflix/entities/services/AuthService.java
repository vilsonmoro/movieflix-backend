package com.devsuperior.movieflix.entities.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.entities.services.exceptions.ForbiddenException;
import com.devsuperior.movieflix.entities.services.exceptions.UnauthorizedException;
import com.devsuperior.movieflix.repositories.UserRepository;

@Service
public class AuthService {
	@Autowired
	UserRepository userRepository;
    @Transactional( readOnly = true)
	public User authenticated() {
		try {
			String username = SecurityContextHolder.getContext().getAuthentication().getName();
			return userRepository.findByEmail(username);
		} catch (Exception e) {
			throw new UnauthorizedException("Invalid user");
		}
	}
    
    public void validSelfOrAdmin(Long userId) {
    	User user = authenticated();
    	if(!user.getId().equals(userId) && !user.hasHole("ROLE_ADMIN")) {
    	   throw new ForbiddenException("Acces denied"); 	
    	}
    }
}
