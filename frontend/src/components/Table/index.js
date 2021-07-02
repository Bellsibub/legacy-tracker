import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Typography,
  Card,
  CardContent,
  GridList,
  GridListTile
} from '@material-ui/core';
import { ChevronDown, ChevronUp } from 'mdi-material-ui';
// local components
import ChipCell from './Cells/ChipCell';
import EditSimCell from './Cells/EditSimCell';
// styles
import styles from './style';

const useStyles = makeStyles(styles);

const header = {
  firstName: 'Name',
  gender: 'Gender',
  role: 'Role',
  status: 'Status',
  actions: ''
};
const moreInfo = ['relations', 'adopted', 'traits', 'aspirations', 'species'];

const CollapseRow = ({ ...item }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const rowClasses = classNames({
    [classes.tableRow]: true,
    [classes.tableRowOpen]: open
  });
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <TableRow className={rowClasses}>
        {_.map(header, (prop, key) => {
          switch (key) {
            case 'traits':
              return (
                <TableCell key={key} className={classes.tableCellChip}>
                  <ChipCell items={item[key]} />
                </TableCell>
              );
            case 'firstName':
              return (
                <TableCell key={key} className={classes.tableCell}>
                  {`${item.firstName} ${item.lastName}`}
                </TableCell>
              );
            case 'role':
              return (
                <TableCell key={key} className={classes.tableCell}>
                  {`${item.role.text}`}
                </TableCell>
              );
            case 'actions':
              return (
                <>
                  <EditSimCell item={item}>
                    <IconButton onClick={handleClick}>
                      {open ? <ChevronUp /> : <ChevronDown />}
                    </IconButton>
                  </EditSimCell>
                </>
              );
            default:
              return (
                <TableCell key={key} className={classes.tableCell}>
                  {item[key]}
                </TableCell>
              );
          }
        })}
      </TableRow>
      <TableRow>
        <TableCell colSpan={10} className={classes.collapseCell}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Card variant="outlined">
              <CardContent>
                <GridList cellHeight={50} cols={3}>
                  {_.map(item, (obj, key) => {
                    if (!_.includes(moreInfo, key)) {
                      return;
                    }
                    return (
                      <GridListTile>
                        <Typography variant="caption" align="left" color="textPrimary">
                          {key}
                        </Typography>
                        <Typography variant="body1">to be designed</Typography>
                      </GridListTile>
                    );
                  })}
                </GridList>
              </CardContent>
            </Card>
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
          {_.map(cellData, (item) => (
            <CollapseRow key={item._id} {...item} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
