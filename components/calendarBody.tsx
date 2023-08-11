import React, { Dispatch, SetStateAction, useContext } from "react";
import { Day } from "./day";
import styles from "./month.module.css";
import { MY_SCHEDULE } from "@/pages";
import { Week } from "./week";
import GlobalContext from "@/context/GlobalContext";

export const CalendarBody = (props: {
    monthCalendar: Date[][];
    setCalendarPlanModal: (colIdx: number, rowIdx?: number) => void;
    mySchedules: MY_SCHEDULE[];
    addCalendarPlan: (clickedDate: Date) => void;
    weekCalendar: Date[];
    setEditPlanId: Dispatch<SetStateAction<Date>>;
    setClickedDate: Dispatch<SetStateAction<Date>>;
    editCalendarModal: (schedule: MY_SCHEDULE) => void;
    setIsEditModal: Dispatch<SetStateAction<boolean>>;
}) => {
    const {
        monthCalendar,
        weekCalendar,
        setCalendarPlanModal,
        mySchedules,
        addCalendarPlan,
        setEditPlanId,
        setClickedDate,
        editCalendarModal,
        setIsEditModal,
    } = props;
    const { switchDisplay } = useContext(GlobalContext);
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
                                    setIsEditModal={setIsEditModal}
                                    setEditPlanId={setEditPlanId}
                                    setClickedDate={setClickedDate}
                                    editCalendarModal={editCalendarModal}
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
                    editCalendarModal={editCalendarModal}
                />
            )}
        </>
    );
};
