'use client'
import styles from "./styles.error.module.css";

export default function Error({ message }: { message?: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>⚠️ Error al cargar la película</h1>
      <p className={styles.message}>
        {message || "No pudimos cargar los detalles de la película. Intenta de nuevo más tarde."}
      </p>
      <button className={styles.button} onClick={() => window.location.reload()}>
        Recargar Página 🔄
      </button>
      <button className={styles.backButton} onClick={() => window.history.back()}>
        Volver Atrás ⬅️
      </button>
    </div>
  );
};
