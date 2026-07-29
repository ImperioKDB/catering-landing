export type ImageSlot = {
  key: string;
  label: string;
  section: "Hero" | "Services" | "Gallery" | "Why Choose Us";
  aspect: string; // Tailwind aspect-ratio class used when rendering
};

export const imageSlots: ImageSlot[] = [
  // Hero
  { key: "hero-main-cake", label: "Hero: signature cake, close-up", section: "Hero", aspect: "aspect-square" },
  { key: "hero-small-chops", label: "Hero: small chops platter", section: "Hero", aspect: "aspect-square" },
  { key: "hero-beads", label: "Hero: bead jewellery set", section: "Hero", aspect: "aspect-square" },
  { key: "hero-dessert-table", label: "Hero: dessert table styling", section: "Hero", aspect: "aspect-square" },

  // Services (one per card)
  { key: "service-cakes", label: "Cakes — card image", section: "Services", aspect: "aspect-[16/10]" },
  { key: "service-small-chops", label: "Small Chops — card image", section: "Services", aspect: "aspect-[16/10]" },
  { key: "service-snacks", label: "Snacks & Confectionery — card image", section: "Services", aspect: "aspect-[16/10]" },
  { key: "service-event-catering", label: "Event Catering — card image", section: "Services", aspect: "aspect-[16/10]" },
  { key: "service-corporate-catering", label: "Corporate Catering — card image", section: "Services", aspect: "aspect-[16/10]" },
  { key: "service-beads", label: "Bead Jewellery — card image", section: "Services", aspect: "aspect-[16/10]" },

  // Gallery
  { key: "gallery-wedding-cake", label: "Three-tier wedding cake", section: "Gallery", aspect: "aspect-[3/4]" },
  { key: "gallery-birthday-cake", label: "Birthday number cake", section: "Gallery", aspect: "aspect-square" },
  { key: "gallery-reception-table", label: "Reception dessert table", section: "Gallery", aspect: "aspect-square" },
  { key: "gallery-small-chops", label: "Small chops platter", section: "Gallery", aspect: "aspect-[3/4]" },
  { key: "gallery-birthday-spread", label: "Birthday party spread", section: "Gallery", aspect: "aspect-square" },
  { key: "gallery-dessert-display", label: "Candy & pastry display", section: "Gallery", aspect: "aspect-square" },
  { key: "gallery-bead-set", label: "Aso-ebi bead set", section: "Gallery", aspect: "aspect-[3/4]" },
  { key: "gallery-cupcake-tower", label: "Cupcake tower", section: "Gallery", aspect: "aspect-square" },
  { key: "gallery-cake-styling", label: "Cake table styling", section: "Gallery", aspect: "aspect-square" },

  // Why Choose Us
  { key: "team-plating", label: "Team preparing an order / plating", section: "Why Choose Us", aspect: "aspect-[4/5]" },
];
