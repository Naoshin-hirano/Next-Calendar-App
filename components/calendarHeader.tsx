import styles from "./calendarHeader.module.css";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import subMonths from "date-fns/subMonths";
import { Dispatch, SetStateAction } from "react";

type CALENDER_HEADER = {
    setTargetDate: Dispatch<SetStateAction<Date>>;
    targetDate: Date;
};

export const CalendarHeader = ({
    setTargetDate,
    targetDate,
}: CALENDER_HEADER) => {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.calendarH1}>Calendar</h1>
            <button className={styles.todayBtn}>Today</button>
            <button
                onClick={() =>
                    setTargetDate((current: Date) => subMonths(current, 1))
                }
            >
                <span className={styles.arrowBtn}>
                    <div className={styles.arrowLeft}></div>
                </span>
            </button>
            <button
                onClick={() =>
                    setTargetDate((current: Date) => addMonths(current, 1))
                }
            >
                <span className={styles.arrowBtn}>
                    <div className={styles.arrowRight}></div>
                </span>
            </button>
            <h2 className={styles.calendarH2}>
                {format(targetDate, "y年M月")}
            </h2>
        </header>
    );
};
