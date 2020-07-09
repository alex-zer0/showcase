import React, { ChangeEvent } from 'react';
import { useHistory } from 'react-router';
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import styled from '@emotion/styled/macro'
import { NAV } from '../nav';
import { colors, size } from '../styles/variables';

export const PageFooter = styled.footer`
  height: ${size.footer};
  min-height: ${size.footer};
  overflow: auto;
  width: 100%;
  .MuiBottomNavigation-root {
    width: 100%;
    height: 100%;
  }
  .Mui-selected {
    background: ${colors.blue};
    color: ${colors.white};
  }
`

const useStyles = makeStyles({
  action: {
    border: `1px solid ${colors.paleGray}`,
    background: colors.bgGray
  },
});

const PageFooterComponent = () => {
  const classes = useStyles()
  const history = useHistory()
  const [value, setValue] = React.useState(NAV.Coloring.Index);

  const handleChange = (_: ChangeEvent<{}>, val: string) => {
    setValue(val);
    history.push(val)
  };

  return (
    <PageFooter>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction className={classes.action} label="Вариант кухни" value="kitchen"/>
        <BottomNavigationAction className={classes.action} label="Размеры" value="size"/>
        <BottomNavigationAction className={classes.action} label="Сенсор" value="sensor"/>
        <BottomNavigationAction className={classes.action} label="Питающий кабель" value="cable"/>
        <BottomNavigationAction className={classes.action} label="Блок питания" value="charging"/>
        <BottomNavigationAction className={classes.action} label="Цвет сечения" value={NAV.Coloring.Index}/>
        <BottomNavigationAction className={classes.action} label="Монтаж" value="mounting"/>
        <BottomNavigationAction className={classes.action} label="Корзина" value="cart"/>
      </BottomNavigation>
    </PageFooter>
  );
}

export default PageFooterComponent;
