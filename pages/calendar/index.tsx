import { CalendarHeader } from "@/components/calendarHeader";
import { CalendarBody } from "@/components/calendarBody";
import { getFuncWeek, getFunsMonth } from "@/util";
import styles from "../../styles/Home.module.css";
import { useContext, useState } from "react";
import { AddPlanModal } from "@/components/common/addPlanModal";
import Layout from "@/components/layout";
import { EditPlanModal } from "@/components/common/editPlanModal";
import GlobalContext from "@/context/GlobalContext";

export type MY_SCHEDULE = {
    id: Date;
    title: string;
    date: Date;
};

export default function Page1() {
    const [targetDate, setTargetDate] = useState<Date>(new Date());
    const [isModal, setIsModal] = useState<boolean>(false);
    const [clickedDate, setClickedDate] = useState<Date>(new Date());
    const [planTitle, setPlanTitle] = useState("");
    const [mySchedules, setMySchedules] = useState<MY_SCHEDULE[]>([]);
    const [editPlanId, setEditPlanId] = useState();

    const { setIsEditModal, editPlanTitle } = useContext(GlobalContext);

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
        const newSchedule = mySchedules.map((plan) => {
            if (plan.id === editPlanId) {
                plan.title = editPlanTitle;
            }
            return plan;
        });
        setMySchedules(newSchedule);
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
                    setEditPlanId={setEditPlanId}
                    setClickedDate={setClickedDate}
                />
                <AddPlanModal
                    isModal={isModal}
                    setIsModal={setIsModal}
                    clickedDate={clickedDate}
                    addCalendarPlan={addCalendarPlan}
                    planTitle={planTitle}
                    setPlanTitle={setPlanTitle}
                />
                <EditPlanModal
                    clickedDate={clickedDate}
                    addCalendarPlan={addCalendarPlan}
                    editPlanTitle={editPlanTitle}
                    editCalendarPlan={editCalendarPlan}
                />
            </div>
        </Layout>
    );
}
