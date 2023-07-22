import React from "react";
import { Day } from "./day";
import styles from "./month.module.css";

export const Month = (props: {
    month: Date[][];
    addCalendarPlan: (day: Date, rowIdx: number, colIdx: number) => void;
}) => {
    const { month, addCalendarPlan } = props;
    return (
        <div className={styles.monthBorder}>
            {month.map((row: Date[], i: number) => (
                <React.Fragment key={i}>
                    {row.map((day: Date, idx: number) => (
                        <Day
                            day={day}
                            key={idx}
                            rowIdx={i}
                            colIdx={idx}
                            addCalendarPlan={addCalendarPlan}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
