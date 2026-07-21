const siteConfig = {
  name: "HealthPlus Medical",
  legalName: "HealthPlus by SEHA Medical",
  contact: {
    phone: "403-455-6656",
    secondaryPhone: "403-648-1876",
    email: "admin@healthplusmed.ca",
    website: "healthplusmed.ca",
    address: {
      street: "100-290 Midpark Way SE",
      city: "Calgary",
      province: "AB",
      postalCode: "T2X 1P1"
    }
  },
  hours: {
    weekday: "8:00 AM - 8:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
    statHolidays: "Closed"
  },
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  },
  emergencyNotice: "For a medical emergency, call 911 or go to the nearest emergency department."
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = siteConfig;
}
