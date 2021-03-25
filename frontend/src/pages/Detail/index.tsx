import Navbar from 'core/components/Navbar';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { Movie } from 'core/types/Perfil';
import MovieDetailsLoader from 'core/components/Loaders/MovieDetailsLoader';
import { isAllowedByRole, getSessionData } from 'core/utils/auth';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const Detail = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(0);
    const [reviewText, setReviewText] = useState('');    

    useEffect(() => {
        const currentUserData = getSessionData();
        setCurrentUserId(currentUserData.userId);
        setIsLoading(true);

        makePrivateRequest({ url: `/movies/${movieId}`, method: 'GET' })
            .then(response => setMovie(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [movieId]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setReviewText(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            text: reviewText,
            movieId: movieId,
            userId: currentUserId
        }
        if (reviewText.length > 0) {
            makePrivateRequest({ url: '/reviews', method: 'POST', data: payload })
                .then(() => {
                    setReviewText('');                    
                    window.location.reload();
                });
        }      

    }

    return (
        <>
            <Navbar />
            <div className="detail-container">
                {isLoading ? <MovieDetailsLoader /> : (
                    <>
                        <div className="detail-content">
                             <img src={movie?.imgUrl} alt={movie?.title} 
                                className="detail-img-movie" />
                            <div className="detail-movie">
                                <h3 className="detail-title"> {movie?.title} </h3>
                                <h3 className="detail-year"> {movie?.year} </h3>
                                <h3 className="detail-subtitle"> {movie?.subTitle} </h3>
                                <div className="detail-descripton">
                                    {movie?.synopsis}
                                </div>
                            </div>
                        </div>

                        {isAllowedByRole(['ROLE_MEMBER']) && (
                            <div className="detail-form-save-avaliation">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        value={reviewText}
                                        name="name"
                                        type="text"
                                        className="detail-form-input"
                                        onChange={handleOnChange}
                                    />
                                    <button className="detail-form-button">
                                        SALVAR AVALIAÇÂO
                                    </button>
                                </form>
                            </div>
                        )}

                        {movie?.reviews.map(review => (
                            <div className="detail-avaliation">
                                <img src="core/assets/images/image" alt="cecf" />
                                <h3 className="detail-avaliation-user">{review.user.name}</h3>
                                <div className="detail-avaliation-text">
                                    {review.text}
                                </div>
                            </div>
                        ))}
                    </>
                )}

            </div>
        </>
    )
};

export default Detail;