export function getProjectNavItems(categories) {
  return categories.map((category) => ({
    href: `#${category.id}`,
    label: category.label,
  }));
}
