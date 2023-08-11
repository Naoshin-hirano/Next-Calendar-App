import React from "react";
import styles from "./week.module.css";
import { MY_SCHEDULE } from "@/pages";
import { WeekDay } from "./weekDay";

export const Week = (props: {
    week: Date[];
    setCalendarPlanModal: (colIdx: number, rowIdx?: number) => void;
    mySchedules: MY_SCHEDULE[];
    addCalendarPlan: (clickedDate: Date) => void;
    editCalendarModal: (schedule: MY_SCHEDULE) => void;
}) => {
    const { week } = props;
    return (
        <div className={styles.weekBorder}>
            {week.map((day: Date, i: number) => (
                <WeekDay key={i} day={day} colIdx={i} {...props} />
            ))}
        </div>
    );
};
