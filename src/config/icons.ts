import { ForwardRefExoticComponent, RefAttributes } from 'react';
import {
  AmericanBadgerIcon,
  AmericanBlackBearIcon,
  AnimalAgeIcon,
  AnimalSexFemaleIcon,
  AnimalSexGeneralIcon,
  AnimalSexMaleIcon,
  AnimalSpeciesIcon,
  BighornSheepIcon,
  BrownBearIcon,
  CabinIcon,
  CampIcon,
  ChamoisIcon,
  DrinkZoneIcon,
  EatZoneIcon,
  EchoIcon,
  ElkIcon,
  EurasianBadgerIcon,
  EuropeanHareIcon,
  FallowDeerIcon,
  GatherZoneIcon,
  GoldenJackalIcon,
  GrayWolfIcon,
  GreylagGooseIcon,
  HuntingStandIcon,
  IconProps,
  LesserScaupIcon,
  LodgeIcon,
  MooseIcon,
  MouflonIcon,
  MountainGoatIcon,
  MuleDeerIcon,
  PathZoneIcon,
  PheasantIcon,
  PhotoIcon,
  RedDeerIcon,
  RedFoxIcon,
  RoeDeerIcon,
  RossGooseIcon,
  ShootingRangeIcon,
  ShowshoeHareIcon,
  SleepZoneIcon,
  ViewIcon,
  WhiteTailedDeerIcon,
  WildBoarIcon,
  WildDuckIcon,
} from 'components/Icon';
import { MarkerType } from 'types/markers';

// Map of icon types and their respective icon components
export const iconComponentMap = new Map<
  MarkerType,
  ForwardRefExoticComponent<IconProps & RefAttributes<HTMLDivElement>>
>([
  ['age', AnimalAgeIcon],
  ['animal:american badger', AmericanBadgerIcon],
  ['animal:american black bear', AmericanBlackBearIcon],
  ['animal:bighorn sheep', BighornSheepIcon],
  ['animal:brown bear', BrownBearIcon],
  ['animal:chamois', ChamoisIcon],
  ['animal:elk', ElkIcon],
  ['animal:eurasian badger', EurasianBadgerIcon],
  ['animal:european hare', EuropeanHareIcon],
  ['animal:fallow deer', FallowDeerIcon],
  ['animal:golden jackal', GoldenJackalIcon],
  ['animal:gray wolf', GrayWolfIcon],
  ['animal:greylag goose', GreylagGooseIcon],
  ['animal:lesser scaup', LesserScaupIcon],
  ['animal:moose', MooseIcon],
  ['animal:mouflon', MouflonIcon],
  ['animal:mountain goat', MountainGoatIcon],
  ['animal:mule deer', MuleDeerIcon],
  ['animal:pheasant', PheasantIcon],
  ['animal:red deer', RedDeerIcon],
  ['animal:red fox', RedFoxIcon],
  ['animal:roe deer', RoeDeerIcon],
  ['animal:ross goose', RossGooseIcon],
  ['animal:showshoe hare', ShowshoeHareIcon],
  ['animal:white-tailed deer', WhiteTailedDeerIcon],
  ['animal:wild boar', WildBoarIcon],
  ['animal:wild duck', WildDuckIcon],
  ['cabin', CabinIcon],
  ['camp', CampIcon],
  ['echo', EchoIcon],
  ['hunting stand', HuntingStandIcon],
  ['lodge', LodgeIcon],
  ['photo', PhotoIcon],
  ['sex:female', AnimalSexFemaleIcon],
  ['sex:generic', AnimalSexGeneralIcon],
  ['sex:male', AnimalSexMaleIcon],
  ['shooting range', ShootingRangeIcon],
  ['species', AnimalSpeciesIcon],
  ['view', ViewIcon],
  ['zone:drink', DrinkZoneIcon],
  ['zone:eat', EatZoneIcon],
  ['zone:gather', GatherZoneIcon],
  ['zone:path', PathZoneIcon],
  ['zone:sleep', SleepZoneIcon],
]);