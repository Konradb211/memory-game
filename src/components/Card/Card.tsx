import styles from "./Card.module.scss"

interface CardProps {
	card: {
		id: number
		src: string
		alt: string
	}
	index: number
	isFlipped: boolean
	isMatched: boolean
	handleClick: (index: number, cardId: number) => void
}

const Card = ({
	card,
	index,
	isFlipped,
	isMatched,
	handleClick,
}: CardProps) => {
	return (
		<div
			className={`${styles.card} ${isFlipped ? styles.flipped : ""} ${
				isMatched ? styles.matched : ""
			}`}
			onClick={() => handleClick(index, card.id)}>
			<div className={styles.card__inner}>
				<div className={styles.card__front}></div>
				<div className={styles.card__back}>
					<img src={card.src} alt={card.alt} />
				</div>
			</div>
		</div>
	)
}

export default Card
