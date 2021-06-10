import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./style";

const useStyles = makeStyles(styles);

export default function CardBody({ className, children, ...other }) {
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...other}>
      {children}
    </div>
  );
}