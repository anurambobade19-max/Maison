export interface GalleryImage {
  url: string;
  alt: string;
}

export interface SubCategory {
  name: string;
  images: GalleryImage[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  hero: string;
  subcategories: SubCategory[];
}

const apt = [
  'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7546648/pexels-photo-7546648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/19239905/pexels-photo-19239905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6585599/pexels-photo-6585599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11295838/pexels-photo-11295838.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6580396/pexels-photo-6580396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const pent = [
  'https://images.pexels.com/photos/32750273/pexels-photo-32750273.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6970051/pexels-photo-6970051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7377669/pexels-photo-7377669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/27543244/pexels-photo-27543244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7339157/pexels-photo-7339157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4933154/pexels-photo-4933154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const rowHouse = [
  'https://images.pexels.com/photos/37623824/pexels-photo-37623824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7561155/pexels-photo-7561155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/39190168/pexels-photo-39190168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37893361/pexels-photo-37893361.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6715943/pexels-photo-6715943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/15453572/pexels-photo-15453572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/16375856/pexels-photo-16375856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const bungalow = [
  'https://images.pexels.com/photos/36871546/pexels-photo-36871546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/28180214/pexels-photo-28180214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8031875/pexels-photo-8031875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8031890/pexels-photo-8031890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/28293765/pexels-photo-28293765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/18495295/pexels-photo-18495295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8031883/pexels-photo-8031883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/14036481/pexels-photo-14036481.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const villa = [
  'https://images.pexels.com/photos/27626186/pexels-photo-27626186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/18971223/pexels-photo-18971223.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/2155202/pexels-photo-2155202.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1498792/pexels-photo-1498792.png?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1488267/pexels-photo-1488267.png?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/36025721/pexels-photo-36025721.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/19084142/pexels-photo-19084142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/29679172/pexels-photo-29679172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const mansion = [
  'https://images.pexels.com/photos/34779832/pexels-photo-34779832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8092431/pexels-photo-8092431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/31561114/pexels-photo-31561114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/569609/pexels-photo-569609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37522335/pexels-photo-37522335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/316080/pexels-photo-316080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7061418/pexels-photo-7061418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6587862/pexels-photo-6587862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/31488453/pexels-photo-31488453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1033825/pexels-photo-1033825.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const bedroom = [
  'https://images.pexels.com/photos/6782479/pexels-photo-6782479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/30767888/pexels-photo-30767888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/28853343/pexels-photo-28853343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8089268/pexels-photo-8089268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/14613397/pexels-photo-14613397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const kitchen = [
  'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8142046/pexels-photo-8142046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/39017406/pexels-photo-39017406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6903160/pexels-photo-6903160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6207816/pexels-photo-6207816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const dining = [
  'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/1327369/pexels-photo-1327369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/24461264/pexels-photo-24461264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/29071945/pexels-photo-29071945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const theatre = [
  'https://images.pexels.com/photos/7745995/pexels-photo-7745995.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8089078/pexels-photo-8089078.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13806260/pexels-photo-13806260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8583821/pexels-photo-8583821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37698748/pexels-photo-37698748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const library = [
  'https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7643400/pexels-photo-7643400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8045884/pexels-photo-8045884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/12593769/pexels-photo-12593769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/16433564/pexels-photo-16433564.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/990432/pexels-photo-990432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

const garden = [
  'https://images.pexels.com/photos/238385/pexels-photo-238385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/39016547/pexels-photo-39016547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8091888/pexels-photo-8091888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/19836800/pexels-photo-19836800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11315954/pexels-photo-11315954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/13349987/pexels-photo-13349987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

function img(urls: string[], startIndex: number, count: number): GalleryImage[] {
  const result: GalleryImage[] = [];
  for (let i = 0; i < count; i++) {
    const url = urls[(startIndex + i) % urls.length];
    result.push({ url, alt: 'Interior design inspiration' });
  }
  return result;
}

export const categories: Category[] = [
  {
    id: 'apartment',
    name: 'Flat / Apartment',
    icon: 'Building2',
    tagline: 'Smart, stylish living for every layout',
    hero: apt[0],
    subcategories: [
      { name: '1 BHK', images: img(apt, 1, 4) },
      { name: '2 BHK', images: img(apt, 2, 4) },
      { name: '3 BHK', images: img(apt, 3, 4) },
      { name: '4 BHK', images: img(apt, 4, 4) },
      { name: '5 BHK', images: img(apt, 5, 4) },
      { name: 'Penthouse', images: img(pent, 0, 6) },
    ],
  },
  {
    id: 'rowhouse',
    name: 'Row House',
    icon: 'Home',
    tagline: 'Multi-floor living with character at every level',
    hero: rowHouse[0],
    subcategories: [
      { name: 'Ground Floor', images: img(rowHouse, 1, 4) },
      { name: 'First Floor', images: img(rowHouse, 2, 4) },
      { name: 'Second Floor', images: img(rowHouse, 3, 4) },
      { name: 'Staircase', images: img(rowHouse, 4, 3) },
      { name: 'Balcony', images: img(rowHouse, 5, 3) },
      { name: 'Terrace', images: img(garden, 0, 4) },
    ],
  },
  {
    id: 'bungalow',
    name: 'Bungalow',
    icon: 'House',
    tagline: 'Single-story comfort with indoor-outdoor flow',
    hero: bungalow[0],
    subcategories: [
      { name: 'Exterior', images: img(bungalow, 1, 4) },
      { name: 'Interior', images: img(apt, 6, 4) },
      { name: 'Garden', images: img(bungalow, 3, 4) },
      { name: 'Patio', images: img(garden, 1, 4) },
      { name: 'Terrace', images: img(garden, 2, 4) },
    ],
  },
  {
    id: 'villa',
    name: 'Villa',
    icon: 'Palmtree',
    tagline: 'Refined residences built for a life well-lived',
    hero: villa[0],
    subcategories: [
      { name: 'Modern Villa', images: img(villa, 1, 4) },
      { name: 'Luxury Villa', images: img(villa, 2, 4) },
      { name: 'Duplex Villa', images: img(villa, 3, 4) },
      { name: 'Pool Villa', images: img(villa, 4, 4) },
      { name: 'Garden', images: img(garden, 3, 4) },
      { name: 'Outdoor Living', images: img(garden, 4, 4) },
    ],
  },
  {
    id: 'mansion',
    name: 'Mansion',
    icon: 'Castle',
    tagline: 'Grand estates where every room makes a statement',
    hero: mansion[0],
    subcategories: [
      { name: 'Grand Entrance', images: img(mansion, 1, 4) },
      { name: 'Grand Living Room', images: img(mansion, 2, 4) },
      { name: 'Master Suite', images: img(bedroom, 0, 4) },
      { name: 'Luxury Kitchen', images: img(kitchen, 0, 4) },
      { name: 'Dining Hall', images: img(dining, 0, 4) },
      { name: 'Home Theatre', images: img(theatre, 0, 4) },
      { name: 'Library', images: img(library, 0, 4) },
      { name: 'Swimming Pool', images: img(villa, 5, 4) },
      { name: 'Garden', images: img(garden, 5, 4) },
      { name: 'Terrace', images: img(garden, 0, 4) },
    ],
  },
];
