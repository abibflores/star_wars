import {Card, CardContent, CardHeader} from "@/components/ui/card";
import styles from "./styles.module.css";

export default function Loading() {
	return (
		<div className="w-full flex items-center justify-center min-h-dvh fixed top-0 left-0 bg-black/50 backdrop-blur z-20">
		<Card className={styles.card}>
			<CardHeader>
				<div className={styles.title}></div>
			</CardHeader>
			<CardContent className={styles.content}>
				<div className={styles.image}></div>
				<ul className={styles.list}>
					<li className={styles.text}></li>
					<li className={styles.text}></li>
					<li className={styles.text}></li>
					<li className={styles.text}></li>
				</ul>
			</CardContent>
		</Card>
		</div>
	);
}
