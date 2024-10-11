import Card from "../Card/Card"
import styles from "./GameBoard.module.scss"

interface GameBoardProps {
	cards: {
		id: number
		src: string
		alt: string
	}[]
	flippedCards: number[]
	matchedCards: number[]
	handleCardClick: (index: number, cardId: number) => void
}

const GameBoard = ({
	cards,
	flippedCards,
	matchedCards,
	handleCardClick,
}: GameBoardProps) => {
	let cardsClass = styles.cards

	if (cards.length === 12) {
		cardsClass = `${styles.cards} ${styles["cards-12"]}`
	} else if (cards.length === 16) {
		cardsClass = `${styles.cards} ${styles["cards-16"]}`
	} else if (cards.length === 20) {
		cardsClass = `${styles.cards} ${styles["cards-20"]}`
	} else if (cards.length === 24) {
		cardsClass = `${styles.cards} ${styles["cards-24"]}`
	} else if (cards.length === 30) {
		cardsClass = `${styles.cards} ${styles["cards-30"]}`
	}

	return (
		<div className={cardsClass}>
			{cards.map((card, index) => (
				<Card
					key={index}
					card={card}
					index={index}
					isFlipped={flippedCards.includes(index)}
					isMatched={matchedCards.includes(card.id)}
					handleClick={handleCardClick}
				/>
			))}
		</div>
	)
}

export default GameBoard
