const siteConfig = {
  name: "HealthPlus Medical",
  legalName: "HealthPlus by SEHA Medical",
  contact: {
    phone: "403-455-6656",
    fax: "403-648-1876",
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
    monThu: "9:00 AM - 6:30 PM",
    friday: "9:00 AM - 4:30 PM",
    weekday: "Mon - Thu: 9:00 AM - 6:30 PM | Fri: 9:00 AM - 4:30 PM",
    saturday: "10:00 AM - 2:00 PM",
    sunday: "Closed",
    statHolidays: "Closed",
    days: {
      monday: "9:00 AM - 6:30 PM",
      tuesday: "9:00 AM - 6:30 PM",
      wednesday: "9:00 AM - 6:30 PM",
      thursday: "9:00 AM - 6:30 PM",
      friday: "9:00 AM - 4:30 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed"
    }
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
