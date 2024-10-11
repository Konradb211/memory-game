import { useEffect } from "react"
import { useGameStore } from "../../stores/useGameStore"
import styles from "./GameHistory.module.scss"
import Button from "../Button/Button"

const GameHistory = () => {
	const { gameHistory, loadGameHistory } = useGameStore()

	useEffect(() => {
		loadGameHistory()
	}, [loadGameHistory])

	return (
		<div className={styles["game-history"]}>
			<h1 className={styles["game-history__title"]}>Game History</h1>
			{gameHistory.length > 0 ? (
				<ul className={styles["game-history__list"]}>
					{gameHistory.map((record, index) => (
						<li key={index} className={styles["game-history__item"]}>
							<p>Pairs: {record.pairs}</p>
							<p>Attempts: {record.attempts}</p>
							<p>Duration: {record.duration} seconds</p>
							<p>Date: {new Date(record.date).toLocaleString()}</p>
						</li>
					))}
				</ul>
			) : (
				<p className={styles["game-history__empty"]}>No games played yet.</p>
			)}

			<div className={styles["game-history__button"]}>
				<Button url='/game-dashboard'>Back to Dashboard</Button>
			</div>
		</div>
	)
}

export default GameHistory
