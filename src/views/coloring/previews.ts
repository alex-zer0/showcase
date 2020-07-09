import NormalPreview1 from '../../assets/img/coloring/normal_1.jpg'
import NormalPreview2 from '../../assets/img/coloring/normal_2.jpg'
import NormalPreview3 from '../../assets/img/coloring/normal_3.jpg'
import NormalPreview4 from '../../assets/img/coloring/normal_4.jpg'

import ColdPreview1 from '../../assets/img/coloring/cold_1.jpg'
import ColdPreview2 from '../../assets/img/coloring/cold_2.jpg'
import ColdPreview3 from '../../assets/img/coloring/cold_3.jpg'
import ColdPreview4 from '../../assets/img/coloring/cold_4.jpg'

import WarmPreview1 from '../../assets/img/coloring/warm_1.jpg'
import WarmPreview2 from '../../assets/img/coloring/warm_2.jpg'
import WarmPreview3 from '../../assets/img/coloring/warm_3.jpg'
import WarmPreview4 from '../../assets/img/coloring/warm_4.jpg'

export enum ColoringMode {
  NORMAL = 'Normal',
  WARM = 'Warm',
  COLD = 'Cold',
};

export const COLORING_PREVIEW_ITEMS = {
  [ColoringMode.NORMAL]: [NormalPreview1, NormalPreview2, NormalPreview3, NormalPreview4],
  [ColoringMode.COLD]: [ColdPreview1, ColdPreview2, ColdPreview3, ColdPreview4],
  [ColoringMode.WARM]: [WarmPreview1, WarmPreview2, WarmPreview3, WarmPreview4],
};

export const COLORING_PREVIEWS = {
  [ColoringMode.WARM]: {
    image: WarmPreview1,
    title: 'Теплый'
  },
  [ColoringMode.NORMAL]: {
    image: NormalPreview1,
    title: 'Дневной'
  },
  [ColoringMode.COLD]: {
    image: ColdPreview1,
    title: 'Холодный'
  },
};
