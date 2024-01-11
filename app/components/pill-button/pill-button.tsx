import { Button, styled } from "@mui/material";
import React from "react";
import styles from './pill-button.module.css';

export default function PillButton ({ children }: { children: React.ReactNode }) {
    return (
        <Button variant="outlined" className={styles.button}>{children}</Button>
    )
}