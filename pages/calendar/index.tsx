import { CalendarHeader } from "@/components/calendarHeader";
import { CalendarBody } from "@/components/calendarBody";
import { getFuncWeek, getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import { AddPlanModal } from "@/components/common/addPlanModal";
import Layout from "@/components/layout";
import { EditPlanModal } from "@/components/common/editPlanModal";

export type MY_SCHEDULE = {
    id: Date;
    title: string;
    date: Date;
};

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [isAddModal, setIsAddModal] = useState<boolean>(false);
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const [planTitle, setPlanTitle] = useState("");
    const [mySchedules, setMySchedules] = useState<MY_SCHEDULE[]>([]);
    const [editPlanId, setEditPlanId] = useState<Date>(new Date());
    const [editPlanTitle, setEditPlanTitle] = useState("");

    let monthCalendar = getFunsMonth(targetDate);
    let weekCalendar = getFuncWeek(targetDate);

    const setCalendarPlanModal = (colIdx: number, rowIdx?: number) => {
        setIsAddModal(true);
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
        setIsAddModal(false);
    };

    const editCalendarPlan = () => {
        const newSchedule = mySchedules.map((plan) => {
            if (plan.id === editPlanId) {
                plan.title = editPlanTitle;
            }
            return plan;
        });
        setMySchedules(newSchedule);
        setIsEditModal(false);
    };

    const deleteCalendarPlan = () => {
        const question = window.confirm("本当に削除してもよろしいでしょうか");
        if (!question) {
            return;
        }
        const newSchedule = mySchedules.filter(
            (plan) => plan.id !== editPlanId
        );
        setMySchedules(newSchedule);
        setIsEditModal(false);
    };

    const editCalendarModal = (schedule: MY_SCHEDULE) => {
        setIsEditModal(true);
        setEditPlanTitle(schedule.title);
        setEditPlanId(schedule.id);
        setClickedDate(schedule.date);
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
                    setEditPlanId={setEditPlanId}
                    setClickedDate={setClickedDate}
                    editCalendarModal={editCalendarModal}
                    setIsEditModal={setIsEditModal}
                />
                <AddPlanModal
                    isAddModal={isAddModal}
                    setIsAddModal={setIsAddModal}
                    clickedDate={clickedDate}
                    addCalendarPlan={addCalendarPlan}
                    planTitle={planTitle}
                    setPlanTitle={setPlanTitle}
                />
                <EditPlanModal
                    clickedDate={clickedDate}
                    addCalendarPlan={addCalendarPlan}
                    editCalendarPlan={editCalendarPlan}
                    deleteCalendarPlan={deleteCalendarPlan}
                    editPlanTitle={editPlanTitle}
                    setEditPlanTitle={setEditPlanTitle}
                    isEditModal={isEditModal}
                    setIsEditModal={setIsEditModal}
                />
            </div>
        </Layout>
    );
}
