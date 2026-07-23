export const weddingConfig = {
  siteName: "Newly Wed",
  couple: {
    groom: "Johnathan",
    bride: "Filly",
  },
  /** ISO datetime used by the countdown timer */
  date: "2026-09-12T15:00:00",
  displayDate: "Saturday, September 12th, 2026",
  venue: {
    name: "The Garden Estate",
    address: "1234 Rosewood Lane, Napa Valley",
  },
  tagline:
    "Join us to celebrate our love — Saturday, September 12th, 2026 at The Garden Estate.",
  ceremony: {
    time: "3:00 PM",
    location: "The Garden Estate",
    address: "1234 Rosewood Lane, Napa Valley",
  },
  reception: {
    time: "5:00 PM",
    location: "The Vineyard Hall",
    description: "Dinner, dancing & celebration",
  },
  dressCode: {
    description:
      "Formal / Black-tie optional. We invite you to dress in warm, earthy tones to match our celebration.",
    colors: ["#E9C9B0", "#D19188", "#944244", "#521A19"],
  },
  rsvp: {
    deadline: "August 1st, 2026",
    email: "rsvp@newlywed.example",
    message:
      "Kindly respond by August 1st, 2026. We can't wait to celebrate with you.",
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Details", href: "#details" },
    { name: "Dress Code", href: "#dress-code" },
  ],
} as const;
