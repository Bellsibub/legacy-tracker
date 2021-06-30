import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  List,
  ListItem,
  Divider,
  Collapse,
  ListItemText,
  ListSubheader,
  Radio,
  Popover,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';
import { ChevronDown, ChevronUp } from 'mdi-material-ui';

// styles
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

const LawItemCollapse = ({ onChange, selectedValue, index, ...law }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const openPop = Boolean(anchorEl);
  const handleClick = (event) => {
    if (smallScreen) {
      setOpenCollapse(!openCollapse);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.listItem}>
      <Radio
        checked={selectedValue === index}
        onChange={onChange}
        value={index}
        name="radio-button-demo" />
      <ListItem className={classes.item}>
        <ListItemText primary={law.title} />
        <IconButton onClick={handleClick}>
          {smallScreen ? (
            <>{openCollapse ? <ChevronUp /> : <ChevronDown />}</>
          ) : (
            <InfoOutlined />
          )}
        </IconButton>
      </ListItem>
      {smallScreen ? (
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <List dense component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary={law.description} />
            </ListItem>
          </List>
          {openCollapse && <Divider />}
        </Collapse>
      ) : (
        <Popover
          open={openPop}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}>
          <Typography>{law.description}</Typography>
        </Popover>
      )}
    </div>
  );
};

const LawCategory = ({ packs, category, setLaws, ...lawsInCat }) => {
  const [selectedValue, setSelectedValue] = React.useState(0);
  packs = _.filter(packs, ['active', true]);
  lawsInCat = _.filter(lawsInCat, (item) => {
    let st;
    _.forEach(packs, (pack) => {
      if (pack.name === item.pack) {
        st = true;
        // pack matches so return out of loop
        return false;
      } else {
        st = false;
      }
    });
    return st;
  });

  React.useEffect(() => {
    setLaws((prevState) => ({
      ...prevState,
      [category]: { ...lawsInCat[0] }
    }));
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedValue(parseInt(value, 10));
    setLaws((prevState) => ({
      ...prevState,
      [category]: { ...lawsInCat[parseInt(value, 10)] }
    }));
  };
  return (
    <>
      {lawsInCat.length > 0 && (
        <List
          subheader={
            <ListSubheader component="div">{`${category.toUpperCase()}`}</ListSubheader>
          }>
          {_.map(lawsInCat, (law, index) => (
            <LawItemCollapse
              key={`lawItem${index}`}
              selectedValue={selectedValue}
              onChange={handleChange}
              index={index}
              {...law} />
          ))}
        </List>
      )}
    </>
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
