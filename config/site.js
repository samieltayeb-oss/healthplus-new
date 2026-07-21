const siteConfig = {
  name: "HealthPlus Medical",
  legalName: "HealthPlus by SEHA Medical",
  contact: {
    phone: "(555) 123-4567",
    email: "info@healthplusmed.ca",
    address: {
      street: "[Clinic Address Placeholder]",
      city: "Calgary",
      province: "AB",
      postalCode: "[Postal Placeholder]"
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
