
import React from 'react';

import {ReactComponent as MainImage} from 'core/assets/images/main-image.svg';
import FormLogin from '../login';
import './styles.scss';
import Navbar from 'core/components/Navbar';

const Home = () => (
    <>
       <Navbar />
        <div className="home-content">
            <h1 className="lb-avalie">Avalie Filmes</h1>
            <h1 className="lb-tell">Diga o que você achou do seu filme favorito</h1>
            <MainImage className="main-image" />
        </div>
        <div className="form-login">
            <FormLogin />
        </div>     
    
    </>
);

export default Home;