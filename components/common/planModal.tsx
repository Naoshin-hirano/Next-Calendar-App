import format from "date-fns/format";
import styles from "./planModal.module.css";
import { Dispatch, SetStateAction, useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

type PLAN_MODAL = {
    addCalendarPlan: (clickedDate: Date) => void;
    planTitle: string;
    setPlanTitle: Dispatch<SetStateAction<string>>;
    isModal: boolean;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    clickedDate: Date;
};

export const PlanModal = (props: PLAN_MODAL) => {
    const {
        addCalendarPlan,
        planTitle,
        setPlanTitle,
        isModal,
        setIsModal,
        clickedDate,
    } = props;
    return (
        <>
            {isModal && (
                <div id={styles.overlay}>
                    <div id={styles.content}>
                        <div className={styles.title}>
                            <input
                                type="text"
                                name="title"
                                placeholder="タイトルを追加"
                                value={planTitle}
                                onChange={(e) => setPlanTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.dayInfo}>
                            日付: {format(clickedDate, "y年M月d日")}
                        </div>
                        <div className={styles.button}>
                            <button
                                onClick={() => addCalendarPlan(clickedDate)}
                            >
                                保存
                            </button>
                            <button
                                onClick={() => {
                                    setIsModal(false);
                                    setPlanTitle("");
                                }}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
