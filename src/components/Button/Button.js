import React from "react"
import PropTypes from "prop-types"
import styles from "./Button.module.css"

export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}
