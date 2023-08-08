import React from "react";
import { Day } from "./day";
import styles from "./month.module.css";
import { MY_SCHEDULE } from "@/pages/calendar";
import { Week } from "./week";

export const CalendarBody = (props: {
    monthCalendar: Date[][];
    setCalendarPlanModal: (colIdx: number, rowIdx?: number) => void;
    mySchedules: MY_SCHEDULE[];
    addCalendarPlan: (clickedDate: Date) => void;
    switchDisplay: "月" | "週";
    weekCalendar: Date[];
}) => {
    const {
        monthCalendar,
        weekCalendar,
        setCalendarPlanModal,
        mySchedules,
        addCalendarPlan,
        switchDisplay,
    } = props;
    return (
        <>
            {switchDisplay === "月" && (
                <div className={styles.monthBorder}>
                    {monthCalendar.map((row: Date[], i: number) => (
                        <React.Fragment key={i}>
                            {row.map((day: Date, idx: number) => (
                                <Day
                                    day={day}
                                    key={idx}
                                    rowIdx={i}
                                    colIdx={idx}
                                    setCalendarPlanModal={setCalendarPlanModal}
                                    mySchedules={mySchedules}
                                    addCalendarPlan={addCalendarPlan}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            )}
            {switchDisplay === "週" && (
                <Week
                    week={weekCalendar}
                    setCalendarPlanModal={setCalendarPlanModal}
                    mySchedules={mySchedules}
                    addCalendarPlan={addCalendarPlan}
                />
            )}
        </>
    );
};
