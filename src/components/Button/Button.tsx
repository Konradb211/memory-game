import { ReactNode } from "react"
import styles from "./Button.module.scss"
import { Link } from "react-router-dom"

type Props = {
	children: ReactNode
	url?: string
	onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>
}

const Button = ({ children, url, onClick }: Props) => {
	return url ? (
		<Link onClick={onClick} to={url} className={styles.button}>
			{children}
		</Link>
	) : (
		<div onClick={onClick} className={styles.button}>
			{children}
		</div>
	)
}

export default Button
