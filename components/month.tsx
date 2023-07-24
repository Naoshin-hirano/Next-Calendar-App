import React, { Dispatch, SetStateAction } from "react";
import { Day } from "./day";
import styles from "./month.module.css";
import { MY_SCHEDULE } from "@/pages/posts/page1";

export const Month = (props: {
    month: Date[][];
    setCalendarPlanModal: (rowIdx: number, colIdx: number) => void;
    mySchedules: MY_SCHEDULE[];
    setMySchedules: Dispatch<SetStateAction<MY_SCHEDULE[]>>;
    addCalendarPlan: (clickedDate: Date) => void;
}) => {
    const {
        month,
        setCalendarPlanModal,
        mySchedules,
        setMySchedules,
        addCalendarPlan,
    } = props;
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
                            setCalendarPlanModal={setCalendarPlanModal}
                            mySchedules={mySchedules}
                            setMySchedules={setMySchedules}
                            addCalendarPlan={addCalendarPlan}
                        />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
