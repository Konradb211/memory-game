import Button from "../Button/Button"
import styles from "./GameButtons.module.scss"

interface GameButtonsProps {
	onRestart: () => void
}

const GameButtons = ({ onRestart }: GameButtonsProps) => {
	return (
		<div className={styles.buttons}>
			<Button onClick={onRestart}>Play Again</Button>
			<Button url='/game-dashboard'>Back to dashboard</Button>
		</div>
	)
}

export default GameButtons
