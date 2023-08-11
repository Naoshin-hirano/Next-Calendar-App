import format from "date-fns/format";
import styles from "./planModal.module.css";
import { Dispatch, SetStateAction } from "react";

type PLAN_MODAL = {
    addCalendarPlan: (clickedDate: Date) => void;
    clickedDate: Date;
    editCalendarPlan: () => void;
    deleteCalendarPlan: () => void;
    editPlanTitle: string;
    setEditPlanTitle: Dispatch<SetStateAction<string>>;
    setIsEditModal: Dispatch<SetStateAction<boolean>>;
    isEditModal: boolean;
};

export const EditPlanModal = (props: PLAN_MODAL) => {
    const {
        clickedDate,
        editCalendarPlan,
        deleteCalendarPlan,
        editPlanTitle,
        setEditPlanTitle,
        setIsEditModal,
        isEditModal,
    } = props;

    return (
        <>
            {isEditModal && (
                <div id={styles.overlay}>
                    <div id={styles.content}>
                        <div className={styles.title}>
                            <input
                                type="text"
                                name="title"
                                value={editPlanTitle}
                                onChange={(e) =>
                                    setEditPlanTitle(e.target.value)
                                }
                            />
                        </div>
                        <div className={styles.dayInfo}>
                            日付: {format(clickedDate, "y年M月d日")}
                        </div>
                        <div className={styles.button}>
                            <button onClick={() => editCalendarPlan()}>
                                編集した内容で保存
                            </button>
                            <button
                                onClick={() => {
                                    setIsEditModal(false);
                                }}
                            >
                                閉じる
                            </button>
                            <div className={styles.deleteBtn}>
                                <button onClick={() => deleteCalendarPlan()}>
                                    削除
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
