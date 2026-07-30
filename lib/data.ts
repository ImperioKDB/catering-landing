// ============================================================================
// SITE CONTENT — edit this file with real business details before launch.
// Everything marked TODO is placeholder and must be replaced.
// ============================================================================

export const business = {
  name: "TODO: Business Name", // e.g. "Ayo's Delight Catering & Beads"
  tagline: "Every celebration deserves a table people remember",
  whatsappNumber: "2348000000000", // TODO: real number, no leading 0, with country code, no spaces
  phoneDisplay: "+234 800 000 0000", // TODO
  email: "TODO@example.com",
  city: "Benin City, Edo State", // TODO
  deliveryAreas: "Benin City and surrounding areas — ask us about your location",
  instagram: "https://instagram.com/TODO",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const stats = [
  { label: "Events Served", value: 250, suffix: "+" },
  { label: "Happy Clients", value: 400, suffix: "+" },
  { label: "Years of Experience", value: 6, suffix: "" },
  { label: "On-Time Delivery", value: 98, suffix: "%" },
];

export const services = [
  {
    id: "cakes",
    title: "Cakes",
    description:
      "Custom cakes for weddings, birthdays and milestones — designed around your theme, flavour and guest count.",
    icon: "CakeSlice",
    cta: "Order a Cake",
  },
  {
    id: "small-chops",
    title: "Small Chops",
    description:
      "Crowd-pleasing platters of spring rolls, puff puff, samosa and more, made fresh and packed for events.",
    icon: "UtensilsCrossed",
    cta: "Order Small Chops",
  },
  {
    id: "snacks",
    title: "Snacks & Confectionery",
    description:
      "Cupcakes, cookies, chin chin and party favours — sold individually or as gift packs.",
    icon: "Cookie",
    cta: "See Snack Menu",
  },
  {
    id: "event-catering",
    title: "Event Catering",
    description:
      "Full-service catering for weddings, birthdays and family gatherings, from menu planning to on-site service.",
    icon: "PartyPopper",
    cta: "Get a Quote",
  },
  {
    id: "corporate-catering",
    title: "Corporate Catering",
    description:
      "Reliable, professional catering for meetings, launches and office events — on schedule, every time.",
    icon: "Briefcase",
    cta: "Book Corporate Catering",
  },
  {
    id: "bead-jewellery",
    title: "Bead Jewellery",
    description:
      "Handcrafted bead necklaces, bracelets and sets — made to order for aso-ebi, gifting or everyday wear.",
    icon: "Gem",
    cta: "Shop Beads",
  },
];

export const galleryItems = [
  { id: 1, category: "Cakes", label: "Three-tier wedding cake" },
  { id: 2, category: "Cakes", label: "Birthday number cake" },
  { id: 3, category: "Wedding Setups", label: "Reception dessert table" },
  { id: 4, category: "Small Chops", label: "Small chops platter" },
  { id: 5, category: "Birthday Packages", label: "Birthday party spread" },
  { id: 6, category: "Dessert Tables", label: "Candy & pastry display" },
  { id: 7, category: "Bead Collections", label: "Aso-ebi bead set" },
  { id: 8, category: "Cakes", label: "Cupcake tower" },
  { id: 9, category: "Wedding Setups", label: "Cake table styling" },
];

export const galleryCategories = [
  "All",
  "Cakes",
  "Wedding Setups",
  "Birthday Packages",
  "Small Chops",
  "Dessert Tables",
  "Bead Collections",
];

export const whyChooseUs = [
  {
    title: "Fresh, Never Frozen",
    description: "Every order is prepared close to your event date using fresh ingredients — nothing sits in storage.",
    icon: "Leaf",
  },
  {
    title: "On-Time, Every Time",
    description: "We plan delivery and setup around your event schedule, not ours. Timely arrival is a promise, not a hope.",
    icon: "Clock",
  },
  {
    title: "Professional On-Site Service",
    description: "For full catering bookings, our team handles setup, service and clean-up so you can host, not work.",
    icon: "Users",
  },
  {
    title: "Made to Your Brief",
    description: "Custom flavours, themes, portion sizes and dietary requests — we build the order around your event, not a fixed menu.",
    icon: "Sparkles",
  },
  {
    title: "Packages for Every Budget",
    description: "From an intimate birthday to a full wedding reception, we scale the package to fit what you have to spend.",
    icon: "Wallet",
  },
];

export const menuCategories = [
  {
    id: "cakes",
    label: "Popular Cakes",
    items: [
      { name: "Classic Vanilla Layer Cake", price: "From ₦25,000", note: "6-inch, serves 10–12" },
      { name: "Red Velvet Cake", price: "From ₦30,000", note: "6-inch, serves 10–12" },
      { name: "Chocolate Fudge Cake", price: "From ₦28,000", note: "6-inch, serves 10–12" },
      { name: "Custom Themed / Number Cake", price: "Quote on request", note: "Design, size & flavour to brief" },
    ],
  },
  {
    id: "snacks",
    label: "Snack Packs",
    items: [
      { name: "Small Chops Party Pack", price: "From ₦15,000", note: "Serves 10, mixed selection" },
      { name: "Puff Puff & Chin Chin Combo", price: "From ₦8,000", note: "1kg mixed pack" },
      { name: "Cupcake Box (12pc)", price: "From ₦12,000", note: "Assorted flavours" },
      { name: "Cookie Gift Box", price: "From ₦7,000", note: "Great for party favours" },
    ],
  },
  {
    id: "catering",
    label: "Catering Packages",
    items: [
      { name: "Intimate Gathering (up to 30 guests)", price: "Quote on request", note: "Finger foods + small chops" },
      { name: "Wedding Reception Package", price: "Quote on request", note: "Full menu, staffing & setup" },
      { name: "Corporate Event Package", price: "Quote on request", note: "Boxed or buffet-style service" },
      { name: "Birthday Party Package", price: "Quote on request", note: "Cake + snacks + small chops bundle" },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Contact Us",
    description: "Reach out on WhatsApp, call, or fill the form with your event date and what you need.",
    icon: "MessageCircle",
  },
  {
    step: "02",
    title: "Discuss Requirements",
    description: "We talk through guest count, theme, flavours and budget so the order fits your event exactly.",
    icon: "MessagesSquare",
  },
  {
    step: "03",
    title: "Receive Your Quote",
    description: "You get a clear, itemised quote — no surprise costs on delivery day.",
    icon: "FileText",
  },
  {
    step: "04",
    title: "Delivery or Event Service",
    description: "We deliver on schedule, or arrive early to set up and serve if you've booked full event catering.",
    icon: "Truck",
  },
];

export const testimonials = [
  {
    name: "TODO: Client Name",
    role: "Bride, June 2026",
    quote:
      "TODO: Replace with a real quote from a past client. A specific, real testimonial (with their name and event) converts far better than a generic placeholder.",
    rating: 5,
  },
  {
    name: "TODO: Client Name",
    role: "Corporate Client",
    quote: "TODO: Replace with a real quote about reliability, taste, or service.",
    rating: 5,
  },
  {
    name: "TODO: Client Name",
    role: "Birthday Celebrant",
    quote: "TODO: Replace with a real quote — ideally one that mentions a specific detail (the cake flavour, how fast delivery was, etc).",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What areas do you deliver to?",
    answer:
      "We currently deliver within " + business.deliveryAreas + ". For events outside this area, message us on WhatsApp and we'll let you know if we can make it work.",
  },
  {
    question: "How much do your cakes and packages cost?",
    answer:
      "Pricing depends on size, design and guest count. Check the Menu section above for starting prices, or send us your event details on WhatsApp for an exact quote.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For cakes and snacks, we recommend booking at least 5–7 days ahead. For full event catering (weddings, corporate events), 3–4 weeks' notice helps us plan properly — but reach out even if your date is close, we'll try to accommodate you.",
  },
  {
    question: "Can I request a custom flavour, design or dietary option?",
    answer:
      "Yes — custom flavours, themes and dietary adjustments (eggless, less sugar, etc.) are available. Mention your requirements when you contact us so we can confirm what's possible.",
  },
  {
    question: "Do you offer packages for both small parties and large weddings?",
    answer:
      "Yes. Our packages scale from an intimate 20-guest birthday to a full wedding reception. Tell us your guest count and budget and we'll recommend the right package.",
  },
];
