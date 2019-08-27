import React from "react"
import styles from "./Button.module.css"

export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  )
}
