import styles from "./Stats.module.scss"

interface StatsProps {
	attempts: number
	pairs: number
	timer: number
}

const Stats = ({ attempts, pairs, timer }: StatsProps) => {
	return (
		<div className={styles.stats}>
			<p>Moves: {attempts}</p>
			<p>Pairs: {pairs}</p>
			<p>Time: {timer}s</p>
		</div>
	)
}

export default Stats
