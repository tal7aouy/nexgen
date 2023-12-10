export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons'
      },
    ],
  },
]
