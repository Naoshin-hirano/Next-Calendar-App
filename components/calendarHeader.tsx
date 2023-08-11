import React, { ChangeEvent } from "react";
import { addWeeks, subWeeks } from "date-fns";
import styles from "./calendarHeader.module.css";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import subMonths from "date-fns/subMonths";
import { Dispatch, SetStateAction, useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

type CALENDER_HEADER = {
    setTargetDate: Dispatch<SetStateAction<Date>>;
    targetDate: Date;
};

type DISPLAY_TYPE = "月" | "週";

export const CalendarHeader = ({
    setTargetDate,
    targetDate,
}: CALENDER_HEADER) => {
    const { switchDisplay, setSwitchDisplay } = useContext(GlobalContext);
    const dateArray: DISPLAY_TYPE[] = ["月", "週"];

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const displayValue = e.target.value as DISPLAY_TYPE;
        setSwitchDisplay(displayValue);
    };
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.calendarH1}>Calendar</h1>
            <button className={styles.todayBtn}>Today</button>
            {switchDisplay === "月" ? (
                <>
                    <button
                        onClick={() =>
                            setTargetDate((current: Date) =>
                                subMonths(current, 1)
                            )
                        }
                    >
                        <span className={styles.arrowBtn}>
                            <div className={styles.arrowLeft}></div>
                        </span>
                    </button>
                    <button
                        onClick={() =>
                            setTargetDate((current: Date) =>
                                addMonths(current, 1)
                            )
                        }
                    >
                        <span className={styles.arrowBtn}>
                            <div className={styles.arrowRight}></div>
                        </span>
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() =>
                            setTargetDate((current: Date) =>
                                subWeeks(current, 1)
                            )
                        }
                    >
                        <span className={styles.arrowBtn}>
                            <div className={styles.arrowLeft}></div>
                        </span>
                    </button>
                    <button
                        onClick={() =>
                            setTargetDate((current: Date) =>
                                addWeeks(current, 1)
                            )
                        }
                    >
                        <span className={styles.arrowBtn}>
                            <div className={styles.arrowRight}></div>
                        </span>
                    </button>
                </>
            )}
            <h2 className={styles.calendarH2}>
                {format(targetDate, "y年M月")}
            </h2>
            <div className={styles.displaySwitch}>
                <select onChange={(e) => handleChange(e)} name="displaySwitch">
                    {dateArray.map((date, key) => (
                        <option key={key} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
};
