import { Animal, AnimalActivity, AnimalAge, AnimalRating } from 'types/animals';

export const animals: Array<Animal> = [
  // Tier 1
  {
    description:
      'The European hare, also known as the brown hare, is a species of hare native to Europe and parts of Asia. It is among the largest hare species and is adapted to temperate, open country. Hares are herbivorous and feed mainly on grasses and herbs, supplemented with twigs, buds, bark and field crops.',
    hitEnergy: [356, 1068],
    latin: 'Lepus europaeus',
    lifeCycle: [
      { activity: AnimalActivity.Feeding, time: 0 },
      { activity: AnimalActivity.Sleeping, time: 3 },
      { activity: AnimalActivity.Feeding, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 17 },
    ],
    name: 'European Hare',
    slug: 'european-hare',
    tier: 1,
    type: 'animal:european hare',
  },
  {
    description:
      'The snowshoe hare, also called the varying hare, is a species of hare found in North America. It has the name "showshoe" because of the large size of its hind feet, which prevent it from sinking into the snow when it hops and walks. It has fur on the soles of its feet to protect them from freezing temperatures. These animals are nimble and fast: the need to be, as they are a popular target for many predators.',
    hitEnergy: [56, 628],
    latin: 'Lepus americanus',
    lifeCycle: [
      { activity: AnimalActivity.Feeding, time: 0 },
      { activity: AnimalActivity.Sleeping, time: 3 },
      { activity: AnimalActivity.Feeding, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 17 },
    ],
    name: 'Showshoe Hare',
    slug: 'showshoe-hare',
    tier: 1,
    type: 'animal:showshoe hare',
  },

  // Tier 3
  {
    description:
      'They\'re sturdy, with short legs, short tails, and flat bodies. Their triangular faces - ideal for digging and "nosing" into tight spaces - are dark in color, with white stripes down their nose and over their eyes',
    hitEnergy: [612, 1836],
    latin: 'Taxidea taxus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'American Badger',
    slug: 'american-badger',
    tier: 3,
    type: 'animal:american badger',
  },
  {
    description:
      'The European badger is a powerfully built black, white, brown and gray animal with a small head, stocky body, small black eyes and a short tail.',
    hitEnergy: [700, 2100],
    latin: 'Meles meles',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'Eurasian Badger',
    slug: 'eurasian-badger',
    tier: 3,
    type: 'animal:eurasian badger',
  },
  {
    description:
      'Red foxes are famous predators, known for their cunning and intelligence. They are solitary hunters that feed on rodents, rabbits, birds, and other small game - but their diet can be as flexible as their home habitat. Their fur comes in beautiful shades of crimson, white and dark coal.',
    hitEnergy: [612, 1836],
    latin: 'Vulpes vulpes',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'Red Fox',
    slug: 'red-fox',
    tier: 3,
    type: 'animal:red fox',
  },

  // Tier 4
  {
    description:
      'Roe deer are small, reddish and grey-brown, almost tailless, and well-adapted to cold environments. In good conditions, bucks develop antlers roughened and enlarged at the base, with two, three, and rarely even four points.',
    hitEnergy: [945, 2458],
    latin: 'Capreolus capreolus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Roe Deer',
    slug: 'roe-deer',
    tier: 4,
    type: 'animal:roe deer',
  },
  {
    description:
      'The golden jackal occurs in North and East Africa, Southeastern Europe and South Asia to Burma. Golden jackals prefer dry, open country and arid, short grasslands.',
    hitEnergy: [350, 2000],
    latin: 'Canis aureus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'Golden Jackal',
    slug: 'golden-jackal',
    tier: 4,
    type: 'animal:golden jackal',
  },

  // Tier 5
  {
    description:
      'Bighorn males, called rams, are famous for their large, curled horns. Females, called ewes, have horns too, but theirs are shorter and less curved.',
    hitEnergy: [1669, 4005],
    latin: 'Ovis canadensis',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Bighorn Sheep',
    slug: 'bighorn-sheep',
    tier: 5,
    type: 'animal:bighorn sheep',
  },
  {
    description:
      'The chamois is a species of goat-antelope native to mountains in Europe. Both sexes possess vertical horns that hook sharply backward at the ends.',
    hitEnergy: [1323, 3439],
    latin: 'Rupicapra rupicapra',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Chamois',
    slug: 'chamois',
    tier: 5,
    type: 'animal:chamois',
  },
  {
    description:
      'The fallow deer is an elegant, medium-sized deer, with a typically spotted coat. Males have broad, palmate antlers.',
    hitEnergy: [1462, 3510],
    latin: 'Dama dama',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Fallow Deer',
    slug: 'fallow-deer',
    tier: 5,
    type: 'animal:fallow deer',
  },
  {
    description:
      'The gray wolf, largest wild member of the dog family, inhabits vast areas of the northern hemisphere. Wolves were domesticated several thousand years ago, and selective breeding produced dogs. Gray wolves usually live in packs of six to ten, but pack size can be as large as two dozen individuals. A pack is basically a family group consisting of an adult breeding pair and their offspring of various ages. The ability of wolves to form strong social bonds with one another is what makes the wolf pack possible.',
    hitEnergy: [1165, 3029],
    latin: 'Canis lupus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'Gray Wolf',
    slug: 'gray-wolf',
    tier: 5,
    type: 'animal:gray wolf',
  },
  {
    description:
      'Mouflon is a feral subspecies of the domestic sheep. It was originally found only on the Mediterranean islands of Corsica and Sardinia, but has since been introduced into many other regions of Europe.',
    hitEnergy: [1345, 3498],
    latin: 'Ovis musimon',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Mouflon',
    slug: 'mouflon',
    tier: 5,
    type: 'animal:mouflon',
  },
  {
    description:
      'Mountain goats have cloven hooves with two toes that spread wide to improve balance. They have distinctive beards and long, warm, white coats to protect them from cold temperatures and strong mountain winds.',
    hitEnergy: [1515, 3636],
    latin: 'Oreamnos americanus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Mountain Goat',
    slug: 'mountain-goat',
    tier: 5,
    type: 'animal:mountain goat',
  },
  {
    description:
      'They gained their name from their large, mule-like ears which they can move independently, allowing them to survey their surroundings for sounds of potential danger. They are often confused with white-tailed deer but, fully formed, mature mule deer racks are taller and broader than those on whitetails. They are also bifurcated, forking in two directions as they grow, splitting again to create more tines (points).',
    hitEnergy: [1576, 3783],
    latin: 'Odocoileus hemionus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Mule Deer',
    slug: 'mule-deer',
    tier: 5,
    type: 'animal:mule deer',
  },
  {
    description:
      'The deer can be recognized by the characteristic white underside to its tail. It raises its tail when alarmed to warn the predator that it has been detected. Bucks have either a typical or atypical antler arrangement. Typical antlers are symmetrical with points growing straight up from the main beam. Atypical antlers are asymmetrical and the points may project at any angle from the main beam.',
    hitEnergy: [1543, 3705],
    latin: 'Odocoileus virginianus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'White-Tailed Deer',
    slug: 'white-tailed-deer',
    tier: 5,
    type: 'animal:white-tailed deer',
  },
  {
    description:
      'Large head, long narrow snout and small ears. Coarse coat, with a mane of bristles from the neck to the middle of the back.',
    hitEnergy: [1625, 3900],
    latin: 'Sus scrofa',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Wild Boar',
    slug: 'wild-boar',
    tier: 5,
    type: 'animal:wild boar',
  },

  // Tier 6
  {
    description:
      'The black bear, also called the American bear, is the most common bear found in the forests of North America, including parts of Mexico. Males can be up to 70 percent heavier than females. The head is small but is supported by a strong neck. The ears are small and rounded. The curved claws are non-retractable, and, unlike cats and dogs, bears walk on the soles of their feet.',
    hitEnergy: [2889, 4911],
    latin: 'Ursus americanus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'American Black Bear',
    slug: 'american-black-bear',
    tier: 6,
    type: 'animal:american black bear',
  },
  {
    description:
      'Adult brown bears are powerful apex predators, but much of their diet consists of nuts, berries, fruit, leaves, and roots. Bears also eat other animals, from rodents to moose.',
    hitEnergy: [2835, 5386],
    latin: 'Ursus arctos',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 3 },
      { activity: AnimalActivity.Drinking, time: 7 },
      { activity: AnimalActivity.Sleeping, time: 10 },
      { activity: AnimalActivity.Feeding, time: 15 },
      { activity: AnimalActivity.Drinking, time: 19 },
    ],
    name: 'Brown Bear',
    slug: 'brown-bear',
    tier: 6,
    type: 'animal:brown bear',
  },
  {
    description:
      'Elk are also called wapiti, a Native American word that means "light-colored deer". In North America there are six subspecies of elk. Males are called bulls, and females are called cows. Elk have thick bodies with slender legs and short tails. Most have lighter yellow-brown to orange coats in contrast to the dark brown hair on their heads.',
    hitEnergy: [2912, 5532],
    latin: 'Cervus canadensis',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Elk',
    slug: 'elk',
    tier: 6,
    type: 'animal:elk',
  },
  {
    description:
      'Moose are the largest members of the deer family. Most adult males have distinctive broad, palmate ("open-hand shaped") antlers. Both male and female moose have dewlaps, also known as a "bell", which grow under their jaw. Young males often have the largest bells, and their exact function remains a mystery.',
    hitEnergy: [3088, 5867],
    latin: 'Alces americanus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Moose',
    slug: 'moose',
    tier: 6,
    type: 'animal:moose',
  },
  {
    description:
      'The red deer is one of the largest deer species. A male red deer is called a stag or hart, and a female is called a hind. The stag has long, regularly-branched antlers bearing a total of 10 or more tines. Its coat is reddish brown, darkening to grayish brown.',
    hitEnergy: [2693, 4579],
    latin: 'Cervus elpahus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 5 },
      { activity: AnimalActivity.Drinking, time: 9 },
      { activity: AnimalActivity.Sleeping, time: 13 },
      { activity: AnimalActivity.Feeding, time: 17 },
      { activity: AnimalActivity.Drinking, time: 22 },
    ],
    name: 'Red Deer',
    slug: 'red-deer',
    tier: 6,
    type: 'animal:red deer',
  },
];

export const birds: Array<Animal> = [
  {
    description:
      'The greylag goose is a large, pale grey goose with pink legs and an orange bill. It has a loud cackling call similar to that of the domestic goose: "Aahng-ung-ung", uttered on the ground or in flight.',
    hitEnergy: [1, 681],
    latin: 'Anser anser',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    name: 'Greylag Goose',
    slug: 'greylag-goose',
    tier: 1,
    type: 'animal:greylag goose',
  },
  {
    description:
      'The lesser scaup is a small North American diving duck that migrates south as far as Central America in winter. it is colloquially known as the little bluebill or broadbill because of its distinctive blue bill.',
    hitEnergy: [1, 174],
    latin: 'Aythya affinis',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    name: 'Lesser Scaup',
    slug: 'lesser-scaup',
    tier: 1,
    type: 'animal:lesser scaup',
  },
  {
    description:
      "A well-known gamebird, the common pheasant is one of the world's most hunted. It has been introduced for that purpose to many regions, and is also common on game farms where it is commercially bred. Pheasants are characterized by strong sexual dimorphism, males being highly decorated with bright colors and adornments such as wattles.",
    hitEnergy: [1, 402],
    latin: 'Phasianus Colchicus',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    name: 'Pheasant',
    slug: 'pheasant',
    tier: 1,
    type: 'animal:pheasant',
  },
  {
    description:
      'The mallard is a typical dabbling duck, feeding mainly at the surface rather than by diving, on plants as well as on small animals in the shallows of ponds, marshes, lakes, and rivers.',
    hitEnergy: [1, 255],
    latin: 'Anas platyrhynchos',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    name: 'Wild Duck',
    slug: 'wild-duck',
    tier: 1,
    type: 'animal:wild duck',
  },
  {
    description:
      "Ross's Geese can be identified by their all white plumage with black wingtips and pink legs. They also have a stubby pink bill with a blue-grey base. Once considered extremely rare, their population have been increasing in numbers in recent decades. They are the smallest goose commonly found in North America.",
    hitEnergy: [1, 279],
    latin: 'Anser rossii',
    lifeCycle: [
      { activity: AnimalActivity.Sleeping, time: 0 },
      { activity: AnimalActivity.Feeding, time: 4 },
      { activity: AnimalActivity.Sleeping, time: 8 },
      { activity: AnimalActivity.Feeding, time: 12 },
      { activity: AnimalActivity.Sleeping, time: 16 },
      { activity: AnimalActivity.Feeding, time: 20 },
    ],
    name: "Ross's Goose",
    slug: 'ross-goose',
    tier: 1,
    type: 'animal:ross goose',
  },
];

// List of animal ages and their names
export const animalAgeNames = new Map<AnimalAge, string>([
  ['young', 'Young'],
  ['adult', 'Adult'],
  ['mature', 'Mature'],
]);

// Names of animal rating values
export const animalRatingNames = new Map<AnimalRating, string>([
  ['F', 'Female'],
  ['M1', 'Male'],
  ['M2', 'Male'],
  ['M3', 'Male'],
  ['M4', 'Male'],
  ['M5', 'Male'],
]);
