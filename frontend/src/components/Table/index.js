import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// styles
import styles from './style';
// local components
import ChipCell from './Cells/ChipCell';
import EditSimCell from './Cells/EditSimCell';

const useStyles = makeStyles(styles);

const header = {
  firstName: 'Name',
  gender: 'Gender',
  role: 'Role',
  status: 'Status'
};
const moreInfo = {
  causeOfDeath: 'Cause Of Death',
  relations: 'Relations'
};

const CollapseRow = ({ ...item }) => {
  const classes = useStyles();

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
          if (key === 'role') {
            return (
              <TableCell key={key} className={classes.tableCell}>
                {`${item.role.text}`}
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
          {_.map(cellData, (item) => (
            <CollapseRow key={item._id} {...item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
