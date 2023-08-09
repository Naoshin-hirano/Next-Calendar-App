import format from "date-fns/format";
import styles from "./planModal.module.css";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

type PLAN_MODAL = {
    addCalendarPlan: (clickedDate: Date) => void;
    clickedDate: Date;
    editPlanTitle: any;
    editCalendarPlan: any;
};

export const EditPlanModal = (props: PLAN_MODAL) => {
    const { clickedDate, editPlanTitle, editCalendarPlan } = props;

    const { isEditModal, setIsEditModal, setEditPlanTitle } =
        useContext(GlobalContext);
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
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
