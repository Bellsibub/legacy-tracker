import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// styles
import styles from "./style";

const useStyles = makeStyles(styles);

export default function CardBody({ children }) {
  const classes = useStyles();
  const cardBodyClasses = classNames({
    [classes.cardBody]: true
  });
  return (
    <div className={cardBodyClasses}>
      {children}
    </div>
  );
}