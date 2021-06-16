import React from 'react';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DialogSelectSim from 'components/DialogSelectSim';

export default ({ anchorEl, handleClose, items, category, categoryItem }) => {
  const [open, setOpen] = React.useState(false);
  const toggleDialog = () => {
    setOpen(!open);
  };
  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {items.map((item) => (
          <div key={item.title}>
            {(item.hasOptions) ? (
              <>
                <MenuItem
                  onClick={() => {
                    toggleDialog();
                    handleClose();
                  }}>
                  {item.title}
                </MenuItem>
                <DialogSelectSim
                  title={`Editing ${categoryItem.name}`}
                  category={category}
                  item={categoryItem}
                  open={open}
                  action={item.onAction}
                  setOpen={setOpen} />
              </>
            ) : (
              <MenuItem
                onClick={() => {
                  item.onAction();
                  handleClose();
                }}>
                {item.title}
              </MenuItem>
            )}
          </div>
        ))}
      </Menu>
    </>
  );
};
