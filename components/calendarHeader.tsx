import styles from "./calendarHeader.module.css";

export const CalendarHeader = () => {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.calendarH1}>Calendar</h1>
            <button className={styles.todayBtn}>Today</button>
            <button>
                <span className={styles.arrowBtn}>
                    <div className={styles.arrowLeft}></div>
                </span>
            </button>
            <button>
                <span className={styles.arrowBtn}>
                    <div className={styles.arrowRight}></div>
                </span>
            </button>
        </header>
    );
};
