import { Button, styled } from "@mui/material";
import React from "react";
import styles from './pill-button.module.css';

export default function PillButton ({ children, height }: { children: React.ReactNode, height?: string }) {
    return (
        <Button variant="outlined" className={styles.button} style={{ height }}>{children}</Button>
    )
}