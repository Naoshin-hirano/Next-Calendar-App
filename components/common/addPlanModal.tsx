import format from "date-fns/format";
import styles from "./planModal.module.css";
import { Dispatch, SetStateAction } from "react";

type PLAN_MODAL = {
    addCalendarPlan: (clickedDate: Date) => void;
    planTitle: string;
    setPlanTitle: Dispatch<SetStateAction<string>>;
    isAddModal: boolean;
    setIsAddModal: Dispatch<SetStateAction<boolean>>;
    clickedDate: Date;
};

export const AddPlanModal = (props: PLAN_MODAL) => {
    const {
        addCalendarPlan,
        planTitle,
        setPlanTitle,
        isAddModal,
        setIsAddModal,
        clickedDate,
    } = props;
    return (
        <>
            {isAddModal && (
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
                                追加する
                            </button>
                            <button
                                onClick={() => {
                                    setIsAddModal(false);
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
