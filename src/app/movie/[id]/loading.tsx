import styles from "./styles.module.css";

export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className={styles.container}>
			<div className={styles.image}></div>
			<div className={styles.content}>
				<div className={styles.title}></div>
				<div className={styles.text}></div>
				<div className={styles.text}></div>
				<div className={styles.subtitle}></div>
				<div className={styles.subtitle}></div>
				<div className={styles.subtitle}></div>
			</div>
		</div>
	);
}
