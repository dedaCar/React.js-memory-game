import React from 'react';
import JsonData from './data/data';
import styles from './Card.module.css';


const Card = ({ element, handleFlip, id }) => {
	const flippedClass = element.active ? styles.cardFlipped : styles.cardNotFlipped;
	const cardClasses = `${styles.card} ${flippedClass}`;

	let cardFace;
	if (element.active) {
		cardFace = (
			<div className={styles.front}>
				<p className={styles.symbol}>{element.symbol}</p>
			</div>
		);
	} else {
		cardFace = <div className={styles.back} />;
	}

	return (
		<div className={cardClasses} onClick={() => handleFlip(id)}>
			{cardFace}
		</div>
	);
};

export default Card;
