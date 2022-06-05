import { getGridTemplateMarginNormalizer } from '../helper/getResponsiveValue';
import { CONTAINER_WIDTH } from '../../constants/constant';

/**
 * Return margin normalizer for each breakpoints
 * to make a full width element inside GridTemlate element
 */
export const gridTemplateMarginNormalizers = CONTAINER_WIDTH.map(
  (contaienrWidth) => getGridTemplateMarginNormalizer(contaienrWidth)
);
