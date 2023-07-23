import format from "date-fns/format";
import styles from "./planModal.module.css";
import { Dispatch, SetStateAction } from "react";

type PLAN_MODAL = {
    isModal: boolean;
    setIsModal: Dispatch<SetStateAction<boolean>>;
    clickedDate: Date;
    addCalendarPlan: any;
    planTitle: string;
    setPlanTitle: any;
};

export const PlanModal = (props: PLAN_MODAL) => {
    const {
        isModal,
        setIsModal,
        clickedDate,
        addCalendarPlan,
        planTitle,
        setPlanTitle,
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
                            <button onClick={addCalendarPlan}>保存</button>
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
