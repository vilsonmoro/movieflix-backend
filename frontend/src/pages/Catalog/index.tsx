import React, { useCallback, useEffect, useState } from 'react';
import CardFilme from 'core/components/Card';
import MovieCardLoader from 'core/components/Loaders/MovieCardLoader';

import Navbar from 'core/components/Navbar';
import Pagination from 'core/components/Pagination';
import { Genre, MoviesResponse } from 'core/types/Perfil';
import { makePrivateRequest } from 'core/utils/request';

import { Link } from 'react-router-dom';

import './styles.scss';



const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [genres, setGenres] = useState<Genre[]>([]);
    const [genre, setGenre] = useState('');
    //const [isLoadingGenres, setIsLoadGenres] = useState(false);

    const getFilmes = useCallback(() => {
        const params = {
            page: activePage,
            size: 8,
            genreId: genre
        }
        setIsLoading(true);
        //fazer requisição
        makePrivateRequest({ url: '/movies', method: 'GET', params: params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage, genre])

    useEffect(() => {
        getFilmes();
    }, [getFilmes]);

    useEffect(() => {
        //  setIsLoadGenres(false)
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
            .finally(() => {
                //setIsLoadGenres(false)
            })
    }, []);

    const handleChangeName = (name: string) => {
        setGenre(name);
    }

    const handleLimparFiltro = () => {
        setGenre("");
    }

    return (
        <>
            <Navbar />
            <div className="catalog-container">
                <div className="catalog-search">
                    <select
                        className="select-genres"
                        onChange={event => handleChangeName(event.target.value)}
                    >
                        {genres.map(gr => (<option value={gr.id}>{gr.name}</option>)
                        )}
                    </select>
                    <a href="#logout"
                        className="btn-limpar-filtro"
                        onClick={handleLimparFiltro}
                    >
                        LIMPAR FILTRO
                    </a>
                </div>

                <div className="catalog-movies">
                    {isLoading ? <MovieCardLoader /> : (
                        moviesResponse?.content.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <CardFilme
                                    title={movie.title}
                                    subtitle={movie.subTitle}
                                    year={movie.year}
                                    imgUrl={movie.imgUrl}
                                />
                            </Link>
                        ))
                    )}

                </div>
                {moviesResponse &&
                    <Pagination
                        totalPages={moviesResponse.totalPages}
                        activePage={activePage}
                        onChange={page => setActivePage(page)}
                    />}
            </div>
        </>
    );
}

export default Catalog;