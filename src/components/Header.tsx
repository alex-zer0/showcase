import React from 'react'
import styled from '@emotion/styled/macro'
import { MenuList, SwipeableDrawer, Button, MenuItem, makeStyles } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { colors, size } from '../styles/variables'

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${size.header};
  background: ${colors.black};
  color: ${colors.white};
`
const Brand = styled.div`
  padding: 0 1rem;
  font-size: 1.25rem;
`

const useStyles = makeStyles({
  button: {
    color: colors.white,
  },
  menu: {
    background: colors.black,
    color: colors.white
  },
  paper: {
    background: colors.black,
    top: size.header
  }
});

const MenuDrawer = () => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = React.useState(false);

  return <>
    <Button onClick={() => setIsOpened(!isOpened)} className={classes.button}>
      <MenuIcon/>
    </Button>
    <SwipeableDrawer
      anchor="right"
      open={isOpened}
      onClose={() => setIsOpened(false)}
      onOpen={() => setIsOpened(true)}
      PaperProps={{ className: classes.paper }}
    >
      <MenuList className={classes.menu}>
        <MenuItem>Обучающее видео</MenuItem>
        <MenuItem>Оформление заказа</MenuItem>
        <MenuItem>Оплата</MenuItem>
        <MenuItem>Доставка</MenuItem>
        <MenuItem>Гарантия</MenuItem>
        <MenuItem>Возврат</MenuItem>
        <MenuItem>Контакты</MenuItem>
        <MenuItem>Партнеры</MenuItem>
      </MenuList>
    </SwipeableDrawer>
  </>;
}

const PageHeaderComponent: React.FC = () => {
  return (
    <PageHeader>
      <Brand>Fulogy</Brand>
      <MenuDrawer/>
    </PageHeader>
  )
}

export default PageHeaderComponent
