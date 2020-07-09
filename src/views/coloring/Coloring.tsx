import React, { useState } from 'react'
import { Grid, Button, makeStyles } from '@material-ui/core'
import { InfoOutlined as InfoIcon, CheckCircle as CheckIcon } from '@material-ui/icons'
import { ColoringPage, InfoBlock, PreviewItem, ColoringPreviewTile } from './Coloring.styles'
import Carousel from 'react-material-ui-carousel'
import { ColoringMode, COLORING_PREVIEW_ITEMS, COLORING_PREVIEWS } from './previews'
import { colors } from '../../styles/variables'
import { NAV } from '../../nav'
import { generatePath } from 'react-router'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  infoAction: {
    color: colors.white
  },
});

const Coloring: React.FC = () => {
  const classes = useStyles();
  const [coloring, setColoring] = useState<ColoringMode>(ColoringMode.NORMAL);

  return (
    <ColoringPage>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Carousel indicators={true}>
            {COLORING_PREVIEW_ITEMS[coloring].map((src, index) =>
              <PreviewItem key={index}><img src={src} alt={`preview_${index}`}/></PreviewItem>)}
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul>
            <li>
              <span>Класс</span> Standard
            </li>
            <li>
              <span>Потребляемая мощность</span> 22 W
            </li>
            <li>
              <span>Гарантия</span> 3 года
            </li>
            <li>
              <span>Монтаж</span> Да
            </li>
          </ul>
          <InfoBlock>
            <Link to={generatePath(NAV.Coloring.Details, {id: coloring})}>
              <Button className={classes.infoAction}><InfoIcon/></Button>
            </Link>
            <span>Веберите цвет свечения</span>
          </InfoBlock>
          <Grid container spacing={1}>
            {Object.keys(COLORING_PREVIEWS).map(key => {
              const { image, title } = COLORING_PREVIEWS[key as ColoringMode];
              return (
                <Grid key={key} item xs={12} sm={4}>
                  <ColoringPreviewTile onClick={() => setColoring(key as ColoringMode)}>
                    <img src={image} alt={title}/>
                    <footer>{title}</footer>
                    {coloring === key && <CheckIcon/>}
                  </ColoringPreviewTile>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </ColoringPage>
  )
}

export default Coloring
