import { CalendarHeader } from "@/components/calendarHeader";
import { CalendarBody } from "@/components/calendarBody";
import { getFuncWeek, getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { PlanModal } from "@/components/common/planModal";
import Layout from "@/components/layout";
import { EditPlanModal } from "@/components/common/editPlanModal";

export type MY_SCHEDULE = {
    id: Date;
    title: string;
    date: Date;
};

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const [planTitle, setPlanTitle] = useState("");
    const [editPlanTitle, setEditPlanTitle] = useState("");
    const [mySchedules, setMySchedules] = useState<MY_SCHEDULE[]>([]);
    const [editPlanId, setEditPlanId] = useState();

    let monthCalendar = getFunsMonth(targetDate);
    let weekCalendar = getFuncWeek(targetDate);

    const setCalendarPlanModal = (colIdx: number, rowIdx?: number) => {
        setIsModal(true);
        if (rowIdx === undefined) {
            setClickedDate(weekCalendar[colIdx]);
        } else {
            setClickedDate(monthCalendar[rowIdx][colIdx]);
        }
    };

    const addCalendarPlan = (clickedDate: Date) => {
        const newSchedule = [
            ...mySchedules,
            {
                id: new Date(),
                title: planTitle,
                date: clickedDate,
            },
        ];

        setMySchedules(newSchedule);
        setPlanTitle("");
        setIsModal(false);
    };

    const editCalendarPlan = () => {
        mySchedules.map((plan) => {
            if (plan.id === editPlanId) {
                plan.title = editPlanTitle;
            }
            return plan;
        });
        setIsEditModal(false);
    };

    return (
        <Layout>
            <div className={styles.container}>
                <CalendarHeader
                    setTargetDate={setTargetDate}
                    targetDate={targetDate}
                />
                <CalendarBody
                    monthCalendar={monthCalendar}
                    weekCalendar={weekCalendar}
                    setCalendarPlanModal={setCalendarPlanModal}
                    mySchedules={mySchedules}
                    addCalendarPlan={addCalendarPlan}
                    setIsEditModal={setIsEditModal}
                    setEditPlanTitle={setEditPlanTitle}
                    setEditPlanId={setEditPlanId}
                    setClickedDate={setClickedDate}
                />
                <PlanModal
                    isModal={isModal}
                    setIsModal={setIsModal}
                    clickedDate={clickedDate}
                    addCalendarPlan={addCalendarPlan}
                    planTitle={planTitle}
                    setPlanTitle={setPlanTitle}
                />
                <EditPlanModal
                    isEditModal={isEditModal}
                    setIsEditModal={setIsEditModal}
                    clickedDate={clickedDate}
                    addCalendarPlan={addCalendarPlan}
                    editPlanTitle={editPlanTitle}
                    setEditPlanTitle={setEditPlanTitle}
                    editCalendarPlan={editCalendarPlan}
                />
            </div>
        </Layout>
    );
}
