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
    eyebrow: "Attire",
    title: "Dress with intention",
    formal: "Formal / Black-tie optional",
    description:
      "We invite you to dress in warm, earthy tones to match our celebration.",
    palette: [
      { name: "Cream", hex: "#E9C9B0" },
      { name: "Rose", hex: "#D19188" },
      { name: "Brick", hex: "#944244" },
      { name: "Maroon", hex: "#521A19" },
    ],
  },
  rsvp: {
    eyebrow: "Reply",
    title: "Will you join us?",
    deadline: "August 1st, 2026",
    email: "rsvp@newlywed.example",
    message:
      "Kindly respond by August 1st, 2026. We can't wait to celebrate with you.",
    submitLabel: "Send RSVP",
    successTitle: "Thank you",
    successMessage:
      "Your reply is on its way. We can't wait to celebrate with you.",
    notices: [
      "No kids allowed and partners only by invite",
      "Cash gifts only",
    ],
    fields: {
      name: {
        label: "Full name",
        placeholder: "Your full name",
      },
      email: {
        label: "Email",
        placeholder: "you@example.com",
      },
      phone: {
        label: "Phone number",
        placeholder: "+27 00 000 0000",
      },
      attendance: {
        label: "Will you be attending?",
        placeholder: "Select an option",
        options: [
          { value: "yes", label: "Yes, I will attend" },
          { value: "no", label: "No, I cannot attend" },
        ],
      },
      message: {
        label: "Message for the couple",
        placeholder: "Share a note with the couple",
      },
    },
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Details", href: "#details" },
    { name: "Dress Code", href: "#dress-code" },
  ],
} as const;
