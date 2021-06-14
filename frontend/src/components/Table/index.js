/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import _ from 'lodash';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {
  Avatar,
  Box,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Typography
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import DialogSims from 'components/DialogSims';
import styles from './style';
import ChipCell from './Cells/ChipCell';
import EditSimCell from './Cells/EditSimCell';

const useStyles = makeStyles(styles);

const header = {
  firstName: 'Name',
  gender: 'Gender',
  role: 'Role',
  status: 'Status',
  traits: 'traits'
};
const moreInfo = {
  causeOfDeath: 'Cause Of Death',
  relations: 'Relations'
};

const CollapseRow = ({ ...item }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  // console.log(mainItem);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <TableRow className={classes.tableRow}>
        {_.map(header, (prop, key) => {
          if (key === 'traits') {
            return (
              <TableCell key={key} className={classes.tableCellChip}>
                <ChipCell items={item[key]} />
              </TableCell>
            );
          }
          if (key === 'firstName') {
            return (
              <TableCell key={key} className={classes.tableCell}>
                {`${item.firstName} ${item.lastName}`}
              </TableCell>
            );
          }
          return (
            <TableCell key={key} className={classes.tableCell}>
              {item[key]}
            </TableCell>
          );
        })}
        <EditSimCell item={item} />
        <TableCell className={classes.expandTableCell}>
          <IconButton onClick={handleClick}>
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={10} className={classes.collapseCell}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {_.map(moreInfo, (prop, key) => (
                <div key={key}>
                  <Typography variant="subtitle1" color="textPrimary">
                    {prop}
                  </Typography>
                  <p key={key}>{item[key]}</p>
                </div>
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ({ cellData }) => {
  const classes = useStyles();
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            {_.map(header, (value, key) => (
              <TableCell className={classes.tableHeadCell} key={`thead-${key}`}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cellData.map((item) => (
            <CollapseRow key={item._id} {...item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
