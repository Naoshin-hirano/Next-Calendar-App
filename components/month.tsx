import React from "react";
import { Day } from "./day";
import styles from "./month.module.css";

export const Month = (props: any) => {
    const { month } = props;
    return (
        <div className={styles.monthBorder}>
            {month.map((row: any, i: any) => (
                <React.Fragment key={i}>
                    {row.map((day: any, idx: any) => (
                        <Day day={day} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
