import React from 'react'; 

import './styles.scss';

type Props = {
    title: string,
    year: number,
    subtitle: string,
    imgUrl: string
}
const CardFilme = ({title, year, subtitle, imgUrl}: Props) => (
     <>
        <div className="card-container">
            <img src={imgUrl} alt={title} className="card-image" />
            <h2 className="card-title">{ title }</h2>
            <h2 className="card-year"> { year }</h2>
            <h2 className="card-subtitle">{subtitle}</h2>
        </div>
     </>
);

export default CardFilme;