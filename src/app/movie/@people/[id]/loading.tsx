import styles from "./styles.module.css";

export default function Loading() {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}></h2>
			<div className={styles.searchBar}></div>
			<div className={styles.table}>
				{Array.from({length: 10}).map((_, index) => (
					<div key={index} className={styles.row}>
						{Array.from({length: 4}).map((_, cellIndex) => (
							<div key={cellIndex} className={styles.cell}></div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
