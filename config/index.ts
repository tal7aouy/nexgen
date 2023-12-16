export const PRODUCT_CATEGORIES = [
  {
    label: 'Development Tools',
    value: 'development_tools' as const,
    featured: [
      {
        name: 'Editor\'s Picks',
        href: `/products?category=development_tools`,
      },
      {
        name: 'New Arrivals',
        href: '/products?category=development_tools&sort=desc',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=development_tools',
      },
    ],
  },
  {
    label: 'Tech Icons',
    value: 'tech_icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=tech_icons`,
      },
      {
        name: 'New Arrivals',
        href: '/products?category=tech_icons&sort=desc',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=tech_icons'
      },
    ],
  },
]
