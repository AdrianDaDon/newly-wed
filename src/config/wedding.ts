export const weddingConfig = {
  siteName: "Newly Wed",
  couple: {
    groom: "Jonathan",
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
    '"Two are better than one... A cord of three strands is not quickly broken." – Ecclesiastes 4:9-12',
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
    eyebrow: "Wedding Quest",
    title: "Colour Dress Code",
    formal: "Formal / Black-tie optional",
    description:
      "Strictly follow the colour palate for the benediction ceremony",
    palette: [
      { name: "Cream", hex: "#E9C9B0" },
      { name: "Rose", hex: "#D19188" },
      { name: "Brick", hex: "#944244" },
    ],
    giftInformation: {
      title: "Gift information",
      titleFr: "Informations sur les cadeaux",
      messages: [
        {
          lang: "en",
          text: "We kindly ask for no boxed gifts; a monetary gift (cash) would be deeply appreciated.",
        },
        {
          lang: "fr",
          text: "Nous vous prions de ne pas offrir de cadeaux matériels ; un cadeau en espèces serait très apprécié.",
        },
      ],
    },
  },
  rsvp: {
    eyebrow: "Reply",
    title: "Will you join us?",
    deadline: "August 1st, 2026",
    email: "rsvp@newlywed.example",
    message:
      "Kindly respond by August 15th, 2026. We can't wait to celebrate with you.",
    submitLabel: "Send RSVP",
    successTitle: "Thank you",
    successMessage:
      "Your reply is on its way. We can't wait to celebrate with you.",
    notices: [
      {
        text: "No kids allowed and partners only by invite",
        uppercase: false,
        accent: "red",
      },
    ],
    fields: {
      party: {
        label: "Attending as",
        placeholder: "Select an option",
        options: [
          { value: "single", label: "Single" },
          { value: "couple", label: "Couple" },
        ],
      },
      partnerName: {
        label: "Partner's name",
        placeholder: "Your partner's full name",
      },
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
  footer: {
    eyebrow: "More information",
    contact: {
      name: "Vee",
      phone: "074 439 5950",
      /** E.164 for tel: links */
      phoneHref: "+27744395950",
    },
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Details", href: "#details" },
    { name: "Dress Code", href: "#dress-code" },
  ],
} as const;
