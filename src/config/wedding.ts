export const weddingConfig = {
  siteName: "Newly Wed",
  couple: {
    groom: "Johnathan",
    bride: "Filly",
  },
  /** ISO datetime used by the countdown timer */
  date: "2026-09-12T12:00:00",
  displayDate: "Saturday, September 12th, 2026",
  venue: {
    name: "Alberton Civic Centre",
    address: "Alwyn Taljaard Ave, Alberton, Johannesburg",
    /** Coords for the embedded map */
    lat: -26.264588989829896,
    lng: 28.123540380615683,
  },
  tagline:
    "\"Two are better than one... A cord of three strands is not quickly broken.\" – Ecclesiastes 4:9-12",
  details: {
    eyebrow: "The day",
    title: "When & where",
    description:
      "A ceremony followed by dinner, dancing, and celebration as the evening unfolds.",
    directionsLabel: "Get directions",
  },
  ceremony: {
    label: "Blessings",
    time: "12:00 PM",
    location: "Alberton Civic Centre",
    address: "Alwyn Taljaard Ave, Alberton, Johannesburg",
  },
  reception: {
    label: "Reception",
    time: "5:00 PM",
    location: "Alberton Civic Centre",
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
