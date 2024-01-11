import { Button, styled } from "@mui/material";
import React from "react";
import styles from './text-button.module.css';

export default function TextButton ({ children }: { children: React.ReactNode }) {
    return (
        <Button variant="text" className={styles.button}>{children}</Button>
    )
}