import React, { useContext } from "react";
import { Day } from "./day";
import styles from "./month.module.css";
import { MY_SCHEDULE } from "@/pages/calendar";
import { Week } from "./week";
import GlobalContext from "@/context/GlobalContext";

export const CalendarBody = (props: {
    monthCalendar: Date[][];
    setCalendarPlanModal: (colIdx: number, rowIdx?: number) => void;
    mySchedules: MY_SCHEDULE[];
    addCalendarPlan: (clickedDate: Date) => void;
    weekCalendar: Date[];
    setIsEditModal: any;
    setEditPlanTitle: any;
    setEditPlanId: any;
    setClickedDate: any;
}) => {
    const {
        monthCalendar,
        weekCalendar,
        setCalendarPlanModal,
        mySchedules,
        addCalendarPlan,
        setIsEditModal,
        setEditPlanTitle,
        setEditPlanId,
        setClickedDate,
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
                                    setEditPlanTitle={setEditPlanTitle}
                                    setEditPlanId={setEditPlanId}
                                    setClickedDate={setClickedDate}
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
