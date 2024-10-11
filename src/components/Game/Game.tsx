import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { cards } from "../../constants"
import { useGameStore } from "../../stores/useGameStore"
import styles from "./Game.module.scss"
import Stats from "../Stats/Stats"
import GameBoard from "../GameBoard/GameBoard"
import GameButtons from "../GameButtons/GameButtons"

const shuffleArray = <T,>(array: T[]): T[] => {
	return array.sort(() => Math.random() - 0.5)
}

const levels: Record<number, number> = {
	1: 12,
	2: 16,
	3: 20,
	4: 24,
	5: 30,
}

const Game = () => {
	const { levelId } = useParams<{ levelId: string }>()
	const levelNumber = parseInt(levelId || "0", 10)
	const numberOfCards = levels[levelNumber]

	const {
		shuffledCards,
		flippedCards,
		matchedCards,
		attempts,
		pairs,
		timer,
		startGame,
		flipCard,
		resetFlippedCards,
		incrementAttempts,
		incrementPairs,
		startTimer,
		stopTimer,
		resetTimer,
	} = useGameStore()

	useEffect(() => {
		if (numberOfCards) {
			const selectedCards = cards.slice(0, numberOfCards / 2)
			const duplicatedCards = [...selectedCards, ...selectedCards]
			startGame(shuffleArray(duplicatedCards))
			startTimer()
		}

		return () => {
			stopTimer()
			resetTimer()
		}
	}, [numberOfCards, startGame, startTimer, stopTimer, resetTimer])

	useEffect(() => {
		if (flippedCards.length === 2) {
			incrementAttempts()

			const [firstIndex, secondIndex] = flippedCards

			setTimeout(() => {
				if (shuffledCards[firstIndex].id === shuffledCards[secondIndex].id) {
					incrementPairs()
					useGameStore.setState(state => ({
						matchedCards: [...state.matchedCards, shuffledCards[firstIndex].id],
					}))

					const currentPairs = useGameStore.getState().pairs
					if (currentPairs === numberOfCards / 2) {
						stopTimer()
						useGameStore.getState().saveGameToHistory()
					}
				}

				resetFlippedCards()
			}, 1000)
		}
	}, [
		flippedCards,
		shuffledCards,
		resetFlippedCards,
		incrementAttempts,
		stopTimer,
		numberOfCards,
		incrementPairs,
	])

	const handleCardClick = (index: number, cardId: number) => {
		if (
			flippedCards.length === 2 ||
			flippedCards.includes(index) ||
			matchedCards.includes(cardId)
		) {
			return
		}

		flipCard(index, cardId)
	}

	const handleRestart = () => {
		const selectedCards = cards.slice(0, numberOfCards / 2)
		const duplicatedCards = [...selectedCards, ...selectedCards]
		startGame(shuffleArray(duplicatedCards))
		resetTimer()
		startTimer()
	}

	if (!numberOfCards) {
		return <p>Wrong level</p>
	}

	return (
		<div className={styles.container}>
			<Stats attempts={attempts} pairs={pairs} timer={timer} />
			<GameBoard
				cards={shuffledCards}
				flippedCards={flippedCards}
				matchedCards={matchedCards}
				handleCardClick={handleCardClick}
			/>
			{pairs === numberOfCards / 2 && <GameButtons onRestart={handleRestart} />}
		</div>
	)
}

export default Game
