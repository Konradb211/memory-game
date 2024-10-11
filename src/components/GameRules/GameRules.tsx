import Button from "../Button/Button"
import styles from "./GameRules.module.scss"

const GameRules = () => {
	return (
		<div className={styles["game-rules"]}>
			<h1 className={styles["game-rules__title"]}>Memory Game Rules</h1>
			<ol className={styles["game-rules__rules"]}>
				<li>Objective: Find and match all pairs of cards.</li>
				<li>Setup: Lay out all the cards face down in rows and columns.</li>
				<li>On each turn, flip two cards over.</li>
				<li>If the two cards match, you keep the pair and continue.</li>
				<li>
					If the two cards do not match, flip them back over and try again.
				</li>
				<li>The game ends when all pairs have been found.</li>
				<li>Try to find all pairs in the fewest attempts possible!</li>
			</ol>
			<div className={styles["game-rules__button"]}>
				<Button url='/'>Back to Game</Button>
			</div>
		</div>
	)
}

export default GameRules
