'use client'
import styles from "./styles.error.module.css";

export default function Error({ message }: { message?: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>⚠️ Error al cargar los personajes</h1>
      <p className={styles.message}>
        {message || "No pudimos cargar la lista de personajes. Intenta de nuevo más tarde."}
      </p>
      <button className={styles.button} onClick={() => window.location.reload()}>
        Recargar Página 🔄
      </button>
    </div>
  );
};
