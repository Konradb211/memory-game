import Button from "../Button/Button"
import styles from "./WelcomeScreen.module.scss"

const DASHBOARD_URL = "game-dashboard"
const RULES_URL = "game-rules"

const WelcomeScreen = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container__text}>
				<h1>Memory Game</h1>
				<p>
					Welcome to the game that will test your memory and concentration!
					Click 'Start' to begin the fun and see how many card pairs you can
					match. Are you ready for the challenge?
				</p>
			</div>
			<div className={styles.container__buttons}>
				<Button url={DASHBOARD_URL}>Start</Button>
				<Button url={RULES_URL}>Rules</Button>
			</div>
		</div>
	)
}

export default WelcomeScreen
