import { MapLabelOptions } from 'types/cartography';

export interface HuntingMapLabelProps extends MapLabelOptions {
  mapScale: number;
  maxMapScale: number;
  minMapScale: number;
}
