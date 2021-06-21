/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// material ui
import {
  List,
  ListItem,
  Divider,
  Collapse,
  ListItemText,
  ListSubheader,
  Radio
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Minus, Plus } from 'mdi-material-ui';

// import styling from './style';
const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap'
    }

  },
  nested: {
    paddingLeft: theme.spacing(2)
  },
  item: {
    width: 'auto',
    '& > svg': {
      marginLeft: theme.spacing(2)
    }
  }
}));
// const useStyles = makeStyles(styling);

const LawItemCollapse = ({ onChange, selectedValue, index, ...law }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleExpandToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.listItem}>
      <Radio
        checked={selectedValue === index}
        onChange={onChange}
        value={index}
        name="radio-button-demo" />
      <ListItem button onClick={handleExpandToggle} className={classes.item}>
        <ListItemText primary={law.title} />
        {open ? <Minus /> : <Plus />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemText primary={law.description} />
          </ListItem>
        </List>
        {open && <Divider />}
      </Collapse>
    </div>
  );
};

const LawCategory = ({ category, setLaws, ...lawsInCat }) => {
  const [selectedValue, setSelectedValue] = React.useState("0");

  React.useEffect(() => {
    setLaws((prevState) => ({
      ...prevState,
      [category]: { ...lawsInCat[0] }
    }));
  }, [])

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setLaws((prevState) => ({
      ...prevState,
      [category]: { ...lawsInCat[event.target.value] }
    }));
  };
  return (
    <List
      subheader={
        <ListSubheader component="div">{`${category.toUpperCase()}`}</ListSubheader>
      }>
      {_.map(lawsInCat, (law, index) => (
        <LawItemCollapse
          selectedValue={selectedValue}
          onChange={handleChange}
          index={index}
          {...law} />
      ))}
    </List>
  );
};

export default ({ ...props }) => {
  const { laws } = useSelector((store) => store.session.data);
  return (
    <>
      {_.map(laws, (lawsInCat, key) => (
        <LawCategory {...lawsInCat} category={key} key={`lawsCat-${key}`} {...props} />
      ))}
    </>
  );
};
