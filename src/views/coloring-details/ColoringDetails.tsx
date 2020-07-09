import React from 'react'
import { Button } from '@material-ui/core'
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { NAV } from '../../nav'
import { ColoringDetailsArticle } from './ColoringDetails.styles'

const ColoringDetails: React.FC = () => {
  return (
    <ColoringDetailsArticle>
      <Link to={NAV.Coloring.Index}>
        <Button><ArrowBackIcon/> Вернуться</Button>
      </Link>
      <p>
        По нажатию кнопки «i», что находится в блоке №4 раскрывается скрытая информация, 
        которая перекрывает весь контент окна, кроме верхнего и нижнего меню, как показано ниже.
      </p>
      <p>
        По нажатию кнопки «i», что находится в блоке №4 раскрывается скрытая информация, 
        которая перекрывает весь контент окна, кроме верхнего и нижнего меню, как показано ниже.
      </p>
      <p>
        По нажатию кнопки «i», что находится в блоке №4 раскрывается скрытая информация, 
        которая перекрывает весь контент окна, кроме верхнего и нижнего меню, как показано ниже.
      </p>
    </ColoringDetailsArticle>
  )
}

export default ColoringDetails
