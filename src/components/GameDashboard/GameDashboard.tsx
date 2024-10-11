import { difficultyLevel } from "../../constants"
import styles from "./GameDashboard.module.scss"
import play from "../../assets/icons/play.svg"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

const GameDashboard = () => {
	return (
		<div className={styles.container}>
			<div className={styles["container__levels"]}>
				<div>
					<h1>Select difficulty level: </h1>
				</div>
				{difficultyLevel.map(level => (
					<div key={level.level}>
						<h2>{level.level}</h2>
						<div className={styles["container__levels-plays"]}>
							<div>
								<p className={styles["container__levels-plays-card"]}>
									{level.cardNumbers} Cards
								</p>
								<p className={styles["container__levels-plays-pair"]}>
									{level.pairNumber} Pairs
								</p>
							</div>
							<div>
								<Link to={`/game/level/${level.level}`}>
									<img src={play} alt='Play icon' />
								</Link>
							</div>
						</div>
					</div>
				))}
				<Button url='game-history'>Game history</Button>
			</div>
		</div>
	)
}

export default GameDashboard
