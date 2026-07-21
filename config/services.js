const hpServices = [
  {
    id: "family-medicine",
    title: "Family Medicine",
    slug: "family-medicine",
    shortDescription: "Comprehensive healthcare for every stage of life, providing continuity and preventive care for your whole family.",
    heroImage: "assets/images/services/family-medicine.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' /></svg>",
    featured: true,
    category: "Primary Care",
    benefits: [
      "Consistent, long-term health tracking for you and your family.",
      "Preventive screenings and proactive health management.",
      "Coordinated care for chronic conditions like hypertension and diabetes."
    ],
    conditions: [
      "Routine check-ups and physicals",
      "Chronic disease management",
      "Preventive care and immunizations",
      "Minor illnesses and infections"
    ],
    whatToExpect: "Your family physician will take the time to understand your medical history, current concerns, and lifestyle. We focus on building a trusting, long-term relationship to guide your health decisions.",
    whoItIsFor: "Individuals and families of all ages looking for a dedicated primary care provider to manage their overall health.",
    preparation: "Please bring your provincial health card, a list of any current medications, and your personal or family medical history if this is your first visit.",
    faq: [
      { q: "Do you accept new patients?", a: "Please contact our clinic directly to inquire about family physicians currently accepting new patients." },
      { q: "How often should I have a routine check-up?", a: "Frequency depends on your age and health history, but we generally recommend an annual review for preventive screening." }
    ],
    relatedServices: ["pediatric-care", "womens-health", "mental-health"],
    seoTitle: "Family Medicine in Calgary | HealthPlus Medical",
    seoDescription: "Compassionate, comprehensive family medicine in Calgary. HealthPlus Medical provides preventive care and ongoing health management for all ages.",
    canonicalUrl: "https://healthplusmed.ca/services/family-medicine",
    status: "active"
  },
  {
    id: "walk-in-clinic",
    title: "Walk-In Clinic",
    slug: "walk-in-clinic",
    shortDescription: "Timely, accessible care for non-emergency medical concerns, available without an appointment.",
    heroImage: "assets/images/services/walk-in-clinic.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>",
    featured: true,
    category: "Immediate Care",
    benefits: [
      "Access to medical care for prompt, non-emergency concerns.",
      "Flexible availability when your regular doctor is unavailable.",
      "On-site support for prescriptions, referrals, and minor injuries."
    ],
    conditions: [
      "Cold and flu symptoms",
      "Minor cuts, burns, or injuries",
      "Rashes and skin infections",
      "Sprains and strains"
    ],
    whatToExpect: "Patients are seen based on availability and medical priority. Our team will assess your concern promptly and provide appropriate care or referrals.",
    whoItIsFor: "Anyone experiencing an unexpected, non-life-threatening medical issue requiring timely attention.",
    preparation: "Bring your health card and a list of medications. If you are experiencing a medical emergency, please call 911 or visit the nearest emergency department.",
    faq: [
      { q: "Do I need an appointment?", a: "No appointment is necessary for the walk-in clinic, though wait times can vary." },
      { q: "Can the walk-in doctor refill my prescription?", a: "Yes, in most cases our walk-in physicians can provide prescription refills, excluding certain controlled medications." }
    ],
    relatedServices: ["family-medicine", "virtual-care"],
    seoTitle: "Walk-In Medical Clinic Calgary | HealthPlus Medical",
    seoDescription: "Timely access to medical care at the HealthPlus walk-in clinic in Calgary. No appointment necessary for non-emergency concerns.",
    canonicalUrl: "https://healthplusmed.ca/services/walk-in-clinic",
    status: "active"
  },
  {
    id: "internal-medicine",
    title: "Internal Medicine",
    slug: "internal-medicine",
    shortDescription: "Specialized assessment and management of complex adult health concerns and chronic conditions.",
    heroImage: "assets/images/services/internal-medicine.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z' /></svg>",
    featured: true,
    category: "Specialist Care",
    benefits: [
      "In-depth diagnostic evaluation for multi-system health issues.",
      "Expert coordination of care for concurrent chronic diseases.",
      "Evidence-based treatment plans tailored to complex adult health needs."
    ],
    conditions: [
      "Diabetes and metabolic disorders",
      "Cardiovascular disease and hypertension",
      "Respiratory conditions like COPD or asthma",
      "Gastrointestinal disorders"
    ],
    whatToExpect: "Your internist will conduct a thorough review of your medical history, order necessary diagnostic tests, and work closely with your primary care doctor to manage your condition.",
    whoItIsFor: "Adults requiring specialized diagnosis or ongoing management of complex, chronic, or undiagnosed medical conditions.",
    preparation: "A referral from your family physician or a walk-in doctor is typically required. Please bring all relevant medical records and a complete list of medications.",
    faq: [
      { q: "Do I need a referral to see an internist?", a: "Yes, internal medicine is a specialist service that requires a referral from a primary care provider." },
      { q: "How is an internist different from a family doctor?", a: "Internists specialize specifically in complex adult medicine, often focusing on patients with multiple interacting chronic conditions." }
    ],
    relatedServices: ["family-medicine"],
    seoTitle: "Internal Medicine Specialists Calgary | HealthPlus Medical",
    seoDescription: "Expert internal medicine services in Calgary. Comprehensive diagnosis and management of complex adult health conditions.",
    canonicalUrl: "https://healthplusmed.ca/services/internal-medicine",
    status: "active"
  },
  {
    id: "mental-health",
    title: "Mental Health",
    slug: "mental-health",
    shortDescription: "Compassionate primary mental healthcare, offering assessment, support, and guidance for your emotional well-being.",
    heroImage: "assets/images/services/mental-health.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z' /><path stroke-linecap='round' stroke-linejoin='round' d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z' /></svg>",
    featured: true,
    category: "Wellness & Support",
    benefits: [
      "A safe, confidential environment to discuss mental health concerns.",
      "Comprehensive assessment and primary care treatment plans.",
      "Coordination with specialists or therapists when additional support is needed."
    ],
    conditions: [
      "Anxiety and stress management",
      "Depression and mood changes",
      "Grief and life transitions",
      "Sleep disturbances related to mental health"
    ],
    whatToExpect: "Your physician will listen to your concerns without judgment, evaluate your symptoms, and discuss a personalized care plan, which may include therapy referrals, lifestyle adjustments, or medication.",
    whoItIsFor: "Anyone experiencing emotional difficulties, persistent stress, or symptoms affecting their daily mental well-being.",
    preparation: "No special preparation is required. Consider noting down how you've been feeling recently and any questions you want to ask.",
    faq: [
      { q: "Is this service confidential?", a: "Absolutely. All consultations and records are strictly confidential and protected by privacy laws." },
      { q: "Can my family doctor help with mental health?", a: "Yes, family physicians are trained to provide primary mental health care and are an excellent first point of contact." }
    ],
    relatedServices: ["family-medicine", "virtual-care"],
    seoTitle: "Mental Health Support Calgary | HealthPlus Medical",
    seoDescription: "Compassionate mental health care at HealthPlus Medical. Secure, confidential support for anxiety, depression, and emotional well-being.",
    canonicalUrl: "https://healthplusmed.ca/services/mental-health",
    status: "active"
  },
  {
    id: "mva-care",
    title: "MVA Care",
    slug: "mva-care",
    shortDescription: "Thorough assessment, documentation, and recovery planning following a motor vehicle accident.",
    heroImage: "assets/images/services/mva-care.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' /></svg>",
    featured: false,
    category: "Injury & Recovery",
    benefits: [
      "Comprehensive medical evaluation to identify hidden or delayed injuries.",
      "Proper medical documentation required for insurance and recovery claims.",
      "Coordinated care plans including physiotherapy or specialist referrals."
    ],
    conditions: [
      "Whiplash and neck pain",
      "Soft tissue injuries",
      "Post-collision headaches or dizziness",
      "Back and joint pain"
    ],
    whatToExpect: "A detailed physical exam focusing on your musculoskeletal and neurological systems. We will document your injuries and initiate a treatment pathway to support your recovery.",
    whoItIsFor: "Individuals who have recently been involved in a car collision or motor vehicle accident, regardless of the severity of initial symptoms.",
    preparation: "Please bring details of the accident, your insurance information, and any forms provided by your insurer that require a physician's completion.",
    faq: [
      { q: "Should I see a doctor even if I feel fine after an accident?", a: "Yes, symptoms from soft tissue injuries like whiplash can take days to appear. Early assessment is important." },
      { q: "Do you handle the insurance paperwork?", a: "We provide the necessary medical documentation and fill out the physician portions of your MVA forms." }
    ],
    relatedServices: ["concussion-care", "sports-medicine", "walk-in-clinic"],
    seoTitle: "Motor Vehicle Accident (MVA) Care Calgary | HealthPlus Medical",
    seoDescription: "Medical assessment and recovery planning following a motor vehicle accident. HealthPlus Medical supports your healing and documentation.",
    canonicalUrl: "https://healthplusmed.ca/services/mva-care",
    status: "active"
  },
  {
    id: "obstetrics-gynecology",
    title: "Obstetrics & Gynecology",
    slug: "obstetrics-gynecology",
    shortDescription: "Dedicated care for reproductive health, pregnancy, screening, and overall gynecologic wellness.",
    heroImage: "assets/images/services/obstetrics-gynecology.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' /></svg>",
    featured: false,
    category: "Specialist Care",
    benefits: [
      "Expert guidance through all stages of pregnancy.",
      "Comprehensive reproductive health screenings and preventive care.",
      "Management of complex gynecologic conditions in a comfortable environment."
    ],
    conditions: [
      "Prenatal and postpartum care",
      "Menstrual irregularities and pelvic pain",
      "Menopause management",
      "Cervical cancer screening (Pap smears)"
    ],
    whatToExpect: "A supportive, private environment where your reproductive health needs are addressed. Appointments may include physical exams, screenings, or detailed discussions about family planning.",
    whoItIsFor: "Women seeking prenatal care, reproductive health support, or management of gynecologic concerns.",
    preparation: "A referral may be required for specialist gynecologic care, though family physicians handle many routine screenings. Bring your medical history and specific questions.",
    faq: [
      { q: "Do you provide shared care for pregnancy?", a: "Our family physicians often provide early prenatal care before transitioning you to an obstetrician for delivery." },
      { q: "How often should I get a Pap test?", a: "Guidelines vary by age and history. Your doctor will advise you on the appropriate screening schedule for your health." }
    ],
    relatedServices: ["womens-health", "family-medicine"],
    seoTitle: "Obstetrics & Gynecology Calgary | HealthPlus Medical",
    seoDescription: "Comprehensive reproductive health, pregnancy support, and gynecologic care at HealthPlus Medical in Calgary.",
    canonicalUrl: "https://healthplusmed.ca/services/obstetrics-gynecology",
    status: "active"
  },
  {
    id: "pediatric-care",
    title: "Pediatric Care",
    slug: "pediatric-care",
    shortDescription: "Gentle, preventive care and health management for infants, children, and adolescents.",
    heroImage: "assets/images/services/pediatric-care.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z' /></svg>",
    featured: true,
    category: "Primary Care",
    benefits: [
      "Monitoring of developmental milestones and physical growth.",
      "Routine immunizations and preventive childhood healthcare.",
      "Guidance for parents on nutrition, sleep, and behavioral health."
    ],
    conditions: [
      "Well-child check-ups and immunizations",
      "Childhood illnesses (coughs, fevers, earaches)",
      "Growth and developmental monitoring",
      "Asthma and allergy management"
    ],
    whatToExpect: "A child-friendly environment where our team takes a gentle approach to exams, ensuring both the child and parents feel comfortable and informed.",
    whoItIsFor: "Newborns, infants, children, and teenagers requiring preventive care or treatment for childhood illnesses.",
    preparation: "Bring your child's immunization record and any notes regarding their development, feeding habits, or specific concerns you wish to discuss.",
    faq: [
      { q: "Do you administer routine childhood vaccines?", a: "Yes, we provide routine childhood immunizations in accordance with provincial health guidelines." },
      { q: "What if my child gets sick outside regular hours?", a: "Our clinic provides walk-in services during operating hours. For after-hours emergencies, please visit the nearest children's hospital." }
    ],
    relatedServices: ["family-medicine", "sports-medicine"],
    seoTitle: "Pediatric Care & Child Health Calgary | HealthPlus Medical",
    seoDescription: "Compassionate pediatric care for infants, children, and teens. HealthPlus Medical supports healthy growth and development.",
    canonicalUrl: "https://healthplusmed.ca/services/pediatric-care",
    status: "active"
  },
  {
    id: "sports-medicine",
    title: "Sports Medicine",
    slug: "sports-medicine",
    shortDescription: "Diagnosis, treatment, and recovery planning for activity-related injuries to help you return to motion safely.",
    heroImage: "assets/images/services/sports-medicine.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-1.637l4.053 2.026c.451.226.747.68.747 1.18v.794a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25v-.794c0-.5.296-.954.747-1.18L6 11.484m6 1.637v5.25' /></svg>",
    featured: false,
    category: "Injury & Recovery",
    benefits: [
      "Accurate assessment of musculoskeletal injuries.",
      "Customized rehabilitation plans to restore mobility and strength.",
      "Preventive strategies to avoid future activity-related injuries."
    ],
    conditions: [
      "Sprains, strains, and joint pain",
      "Overuse injuries like tendonitis",
      "Minor fractures and dislocations",
      "Return-to-sport planning"
    ],
    whatToExpect: "A physical assessment of your injury, mobility, and strength. Your doctor will discuss imaging if necessary and create a structured recovery timeline.",
    whoItIsFor: "Athletes, active individuals, or anyone experiencing pain or injury related to physical activity or exercise.",
    preparation: "Wear comfortable, loose clothing that allows easy access to the injured area. Bring any previous imaging or notes related to the injury.",
    faq: [
      { q: "Do I have to be a professional athlete to use this service?", a: "Not at all. We treat anyone with an activity-related injury, from weekend warriors to daily walkers." },
      { q: "Do you offer physiotherapy on-site?", a: "Our physicians diagnose and plan your recovery. We coordinate closely with trusted physiotherapists in the community for your rehabilitation." }
    ],
    relatedServices: ["concussion-care", "mva-care", "walk-in-clinic"],
    seoTitle: "Sports Medicine & Injury Care Calgary | HealthPlus Medical",
    seoDescription: "Expert sports medicine in Calgary. HealthPlus Medical provides diagnosis and recovery planning for activity-related injuries.",
    canonicalUrl: "https://healthplusmed.ca/services/sports-medicine",
    status: "active"
  },
  {
    id: "virtual-care",
    title: "Virtual Care",
    slug: "virtual-care",
    shortDescription: "Convenient, secure remote medical consultations for appropriate health concerns from the comfort of home.",
    heroImage: "assets/images/services/virtual-care.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25' /></svg>",
    featured: false,
    category: "Access & Convenience",
    benefits: [
      "Access healthcare guidance without traveling to the clinic.",
      "Secure, private platform for medical discussions.",
      "Efficient for follow-ups, prescription renewals, and initial triage."
    ],
    conditions: [
      "Routine prescription renewals",
      "Review of lab results",
      "Minor illnesses suitable for visual assessment",
      "Mental health follow-ups"
    ],
    whatToExpect: "You will connect with a physician via a secure video or phone link. They will assess your symptoms, provide advice, or determine if an in-person visit is required.",
    whoItIsFor: "Existing patients with appropriate, non-emergency concerns that do not require a physical examination.",
    preparation: "Ensure you have a stable internet connection, a quiet and private space, and your health card ready.",
    faq: [
      { q: "Can all issues be handled virtually?", a: "No. If a physical exam is necessary to safely assess your condition, you will be asked to visit the clinic." },
      { q: "Is the video platform secure?", a: "Yes, we use a compliant, encrypted telehealth platform to protect your privacy and medical information." }
    ],
    relatedServices: ["family-medicine", "mental-health"],
    seoTitle: "Virtual Care & Telehealth Calgary | HealthPlus Medical",
    seoDescription: "Secure virtual care consultations in Calgary. Connect with HealthPlus Medical from the comfort of your home.",
    canonicalUrl: "https://healthplusmed.ca/services/virtual-care",
    status: "active"
  },
  {
    id: "womens-health",
    title: "Women's Health",
    slug: "womens-health",
    shortDescription: "Dedicated preventive care, screening, and individualized support for every stage of a woman's life.",
    heroImage: "assets/images/services/womens-health.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' /></svg>",
    featured: true,
    category: "Wellness & Support",
    benefits: [
      "Proactive screening for breast, cervical, and bone health.",
      "Supportive management of life transitions like menopause.",
      "Guidance on family planning and reproductive wellness."
    ],
    conditions: [
      "Routine wellness exams and Pap tests",
      "Contraception counseling",
      "Menopause symptom management",
      "Bone density and cardiovascular health screening"
    ],
    whatToExpect: "A respectful, comfortable consultation focused on your specific health goals and life stage. We prioritize preventive screening and evidence-based health maintenance.",
    whoItIsFor: "Women of all ages seeking preventive healthcare, reproductive guidance, or management of female-specific health concerns.",
    preparation: "Write down any questions about changes in your health, menstrual cycle, or family medical history to discuss with your doctor.",
    faq: [
      { q: "Do I need a female doctor for a women's health exam?", a: "You can request a female physician for your comfort, subject to availability. All our doctors are trained to provide respectful, professional care." },
      { q: "Can you help with menopause symptoms?", a: "Yes, our team can assess your symptoms and discuss various lifestyle and medical options to support you." }
    ],
    relatedServices: ["family-medicine", "obstetrics-gynecology", "mental-health"],
    seoTitle: "Women's Health Clinic Calgary | HealthPlus Medical",
    seoDescription: "Dedicated women's healthcare at HealthPlus Medical. Preventive screening, family planning, and wellness support in Calgary.",
    canonicalUrl: "https://healthplusmed.ca/services/womens-health",
    status: "active"
  },
  {
    id: "concussion-care",
    title: "Concussion Care",
    slug: "concussion-care",
    shortDescription: "Careful assessment, symptom monitoring, and step-by-step guidance for a safe return to your daily activities.",
    heroImage: "assets/images/services/concussion-care.webp",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' /></svg>",
    featured: false,
    category: "Injury & Recovery",
    benefits: [
      "Evidence-based evaluation of head injuries and cognitive symptoms.",
      "Structured, personalized recovery timelines.",
      "Clear guidance on safe return to school, work, and sports."
    ],
    conditions: [
      "Recent concussions or mild traumatic brain injuries",
      "Post-concussion symptoms (headaches, dizziness, focus issues)",
      "Sports-related head impacts",
      "Clearance for return to play"
    ],
    whatToExpect: "Your doctor will perform a neurological exam, assess your cognitive and physical symptoms, and provide a stepwise recovery plan to protect your brain while it heals.",
    whoItIsFor: "Anyone who has recently sustained a head injury, or is experiencing lingering symptoms following a concussion.",
    preparation: "If you lost consciousness, experienced vomiting, or severe worsening headaches after an injury, seek emergency care immediately. For clinic visits, bring a friend or family member if you are experiencing memory issues.",
    faq: [
      { q: "How long does a concussion take to heal?", a: "Recovery time varies greatly. Most resolve within a few weeks, but careful monitoring ensures you don't return to activities too soon." },
      { q: "Can you provide a doctor's note for school or work?", a: "Yes, we provide necessary documentation to request appropriate cognitive or physical rest accommodations." }
    ],
    relatedServices: ["sports-medicine", "mva-care", "family-medicine"],
    seoTitle: "Concussion Assessment & Care Calgary | HealthPlus Medical",
    seoDescription: "Evidence-based concussion care and recovery planning at HealthPlus Medical. Safe guidance for returning to school, work, and sport.",
    canonicalUrl: "https://healthplusmed.ca/services/concussion-care",
    status: "active"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = hpServices;
}
