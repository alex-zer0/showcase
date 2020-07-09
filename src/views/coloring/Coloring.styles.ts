
import { colors } from '../../styles/variables'
import styled from '@emotion/styled/macro'
import { Paper } from '@material-ui/core'

export const ColoringPage = styled.section`
  ul {
    li {
      display: flex;
      align-items: center;
      margin: .5rem 0;
      span {
        width: 220px;
        padding-right: 3rem;
      }
    }
  }
`
export const ColoringPreviewTile = styled(Paper)`
  margin: 1rem;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: .25rem;
    text-align: center;
    background: ${colors.black};
    color: ${colors.white};
    font-size: .75rem;
  }
  .MuiSvgIcon-root {
    position: absolute;
    z-index: 1;
    color: ${colors.blue};
    top: .5rem;
    right: .5rem;
  }
`
export const PreviewItem = styled(Paper)`
  img {
    width: 100%;
  }
`
export const InfoBlock = styled.div`
  display: flex;
  background: ${colors.blue};
  color: ${colors.white};
  span {
    flex: 0 1 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
