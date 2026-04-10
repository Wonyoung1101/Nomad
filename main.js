const tripCatalog = {
  tokyo: {
    name: "Tokyo",
    tagline: "Time-aware city planning with a strong balance of food, culture, and design.",
    stays: [
      { id: "tokyo-stay-1", name: "Kanda House Hotel", type: "Hotel", area: "Kanda", nightlyRate: 160, note: "Reliable central base with easy transit access." },
      { id: "tokyo-stay-2", name: "Asakusa Residence", type: "Serviced apartment", area: "Asakusa", nightlyRate: 130, note: "A measured stay option with easy access to heritage neighborhoods." },
      { id: "tokyo-stay-3", name: "Shibuya Loft Stay", type: "Hostel", area: "Shibuya", nightlyRate: 80, note: "Lower-cost base that keeps more room in the budget for food and activities." }
    ],
    zones: {
      Kanda: { nearby: ["Nihonbashi", "Ueno"], defaultTransfer: "12 min by subway" },
      Asakusa: { nearby: ["Ueno", "Kuramae"], defaultTransfer: "14 min by subway" },
      Shibuya: { nearby: ["Harajuku", "Omotesando"], defaultTransfer: "10 min by train" },
      Ueno: { nearby: ["Asakusa", "Kanda"], defaultTransfer: "12 min by subway" },
      Harajuku: { nearby: ["Shibuya", "Omotesando"], defaultTransfer: "10 min walk" },
      Ginza: { nearby: ["Nihonbashi", "Tokyo Station"], defaultTransfer: "11 min by subway" }
    },
    meals: {
      breakfast: [
        { place: "Path", area: "Tomigaya", type: "Cafe / breakfast", cost: 18, durationMinutes: 60 },
        { place: "Coffee Wrights Kuramae", area: "Kuramae", type: "Cafe / breakfast", cost: 16, durationMinutes: 50 },
        { place: "Bongen Coffee", area: "Ginza", type: "Cafe / breakfast", cost: 14, durationMinutes: 40 }
      ],
      lunch: [
        { place: "Kitsuneya", area: "Tsukiji", type: "Local lunch counter", cost: 20, durationMinutes: 55 },
        { place: "Udon Shin", area: "Shinjuku", type: "Casual lunch", cost: 22, durationMinutes: 60 },
        { place: "Sometaro", area: "Asakusa", type: "Local lunch", cost: 24, durationMinutes: 65 }
      ],
      dinner: [
        { place: "Torikizoku Dogenzaka", area: "Shibuya", type: "Casual dinner", cost: 34, durationMinutes: 90 },
        { place: "Uoshin Nogizaka", area: "Roppongi", type: "Seafood dinner", cost: 48, durationMinutes: 95 },
        { place: "Izakaya Toyo Tokyo", area: "Marunouchi", type: "Dinner / izakaya", cost: 44, durationMinutes: 90 }
      ],
      snack: [
        { place: "Amam Dacotan", area: "Omotesando", type: "Bakery stop", cost: 12, durationMinutes: 30 },
        { place: "Onibus Coffee", area: "Nakameguro", type: "Coffee stop", cost: 11, durationMinutes: 30 }
      ]
    },
    activities: [
      { id: "tokyo-activity-1", place: "Nezu Shrine Garden Path", area: "Bunkyo", type: "Walk / cultural", durationMinutes: 90, preferredWindow: "morning", cost: 12, note: "A quiet first stop that works well before the city fully speeds up." },
      { id: "tokyo-activity-2", place: "Tokyo National Museum", area: "Ueno", type: "Museum", durationMinutes: 120, preferredWindow: "midday", cost: 24, note: "A high-value cultural stop with enough depth for a full midday block." },
      { id: "tokyo-activity-3", place: "Yanaka Ginza Street Walk", area: "Yanaka", type: "Neighborhood walk / market", durationMinutes: 75, preferredWindow: "afternoon", cost: 10, note: "An easy area to explore on foot with a natural low-stress pace." },
      { id: "tokyo-activity-4", place: "Shibuya Yokocho Evening Food Route", area: "Shibuya", type: "Food / evening route", durationMinutes: 120, preferredWindow: "evening", cost: 46, note: "A stronger evening anchor that makes good use of the nightlife window." },
      { id: "tokyo-activity-5", place: "21_21 Design Sight", area: "Roppongi", type: "Design museum", durationMinutes: 95, preferredWindow: "afternoon", cost: 26, note: "A polished design-focused stop that justifies a stronger mid-range budget." }
    ]
  },
  seoul: {
    name: "Seoul",
    tagline: "A balanced city trip built around neighborhood rhythm, food, and cultural stops.",
    stays: [
      { id: "seoul-stay-1", name: "Han River Suites", type: "Serviced apartment", area: "Yongsan", nightlyRate: 110, note: "Apartment-style stay with strong value and flexibility." },
      { id: "seoul-stay-2", name: "Mapo Line Hotel", type: "Hotel", area: "Mapo", nightlyRate: 175, note: "Transit-friendly base suited to a first-time city trip." },
      { id: "seoul-stay-3", name: "Hongdae Guesthouse", type: "Hostel", area: "Hongdae", nightlyRate: 70, note: "The leanest option for preserving more of the activity budget." }
    ],
    zones: {
      Yongsan: { nearby: ["Itaewon", "Mapo"], defaultTransfer: "14 min by subway" },
      Mapo: { nearby: ["Hongdae", "Yeonnam"], defaultTransfer: "12 min walk" },
      Hongdae: { nearby: ["Yeonnam", "Mapo"], defaultTransfer: "10 min walk" },
      Bukchon: { nearby: ["Insadong", "Jongno"], defaultTransfer: "11 min walk" },
      Seongsu: { nearby: ["Ttukseom", "Konkuk"], defaultTransfer: "14 min by subway" }
    },
    meals: {
      breakfast: [
        { place: "Anthracite Hapjeong", area: "Mapo", type: "Cafe / breakfast", cost: 14, durationMinutes: 45 },
        { place: "Fritz Coffee Wonseo", area: "Jongno", type: "Cafe / breakfast", cost: 16, durationMinutes: 55 },
        { place: "Layered Yeonnam", area: "Yeonnam", type: "Bakery / breakfast", cost: 18, durationMinutes: 55 }
      ],
      lunch: [
        { place: "Jaha Son Mandu", area: "Buam-dong", type: "Local lunch", cost: 22, durationMinutes: 60 },
        { place: "Myeongdong Kyoja", area: "Myeong-dong", type: "Noodle lunch", cost: 18, durationMinutes: 55 },
        { place: "Oreno Ramen", area: "Mapo", type: "Casual lunch", cost: 20, durationMinutes: 50 }
      ],
      dinner: [
        { place: "Mingles Neighborhood Menu", area: "Cheongdam", type: "Dinner", cost: 54, durationMinutes: 100 },
        { place: "Jinmi Sikdang", area: "Mapo", type: "Seafood dinner", cost: 42, durationMinutes: 95 },
        { place: "Gwangjang Market Dinner Loop", area: "Jongno", type: "Market dinner", cost: 36, durationMinutes: 90 }
      ],
      snack: [
        { place: "Cafe Onion Anguk", area: "Anguk", type: "Cafe stop", cost: 12, durationMinutes: 35 },
        { place: "Mil Toast", area: "Seongsu", type: "Bakery stop", cost: 13, durationMinutes: 35 }
      ]
    },
    activities: [
      { id: "seoul-activity-1", place: "Gyeongui Line Forest Walk", area: "Yeonnam", type: "Walk / local", durationMinutes: 75, preferredWindow: "morning", cost: 10, note: "A low-stress opening route that fits well with a morning start." },
      { id: "seoul-activity-2", place: "Bukchon Hanok Village Route", area: "Bukchon", type: "Cultural walk", durationMinutes: 95, preferredWindow: "midday", cost: 16, note: "A strong first-day overview with architecture and cafe access." },
      { id: "seoul-activity-3", place: "DDP Design Gallery", area: "Dongdaemun", type: "Design museum", durationMinutes: 100, preferredWindow: "afternoon", cost: 22, note: "A flexible indoor stop that supports a more polished trip pace." },
      { id: "seoul-activity-4", place: "Mangwon Market Tasting Route", area: "Mangwon", type: "Market / food", durationMinutes: 90, preferredWindow: "evening", cost: 32, note: "A practical evening route that uses budget well without feeling excessive." },
      { id: "seoul-activity-5", place: "Seongsu Studio Street", area: "Seongsu", type: "Neighborhood walk / shopping", durationMinutes: 90, preferredWindow: "afternoon", cost: 18, note: "A good mid-budget stop with a natural street-to-cafe flow." }
    ]
  },
  "new york": {
    name: "New York",
    tagline: "A fast-moving city plan optimized around your travel window and total budget.",
    stays: [
      { id: "ny-stay-1", name: "Brooklyn Loft Rooms", type: "Serviced apartment", area: "Williamsburg", nightlyRate: 155, note: "Balanced value with neighborhood character and easier budget control." },
      { id: "ny-stay-2", name: "Midtown Business Stay", type: "Hotel", area: "Midtown", nightlyRate: 215, note: "A practical central option for a short structured visit." },
      { id: "ny-stay-3", name: "Mercer Avenue Hotel", type: "Hotel", area: "SoHo", nightlyRate: 245, note: "A premium city base if the budget allows more comfort." }
    ],
    zones: {
      Williamsburg: { nearby: ["Greenpoint", "Lower East Side"], defaultTransfer: "18 min by subway" },
      Midtown: { nearby: ["Flatiron", "Chelsea"], defaultTransfer: "14 min by subway" },
      SoHo: { nearby: ["West Village", "Chelsea"], defaultTransfer: "12 min by subway" },
      Chelsea: { nearby: ["Flatiron", "Midtown"], defaultTransfer: "14 min walk" },
      "Upper West Side": { nearby: ["Midtown", "Central Park"], defaultTransfer: "15 min by subway" }
    },
    meals: {
      breakfast: [
        { place: "Devocion Williamsburg", area: "Williamsburg", type: "Cafe / breakfast", cost: 18, durationMinutes: 50 },
        { place: "Daily Provisions", area: "Union Square", type: "Cafe / breakfast", cost: 16, durationMinutes: 45 },
        { place: "Maman Bryant Park", area: "Midtown", type: "Cafe / breakfast", cost: 20, durationMinutes: 55 }
      ],
      lunch: [
        { place: "Los Tacos No. 1", area: "Chelsea", type: "Casual lunch", cost: 20, durationMinutes: 45 },
        { place: "Via Carota Lunch Stop", area: "West Village", type: "Lunch", cost: 28, durationMinutes: 65 },
        { place: "Joe's Steam Rice Roll", area: "Chinatown", type: "Local lunch", cost: 16, durationMinutes: 45 }
      ],
      dinner: [
        { place: "Loring Place", area: "Greenwich Village", type: "Dinner", cost: 56, durationMinutes: 95 },
        { place: "Keen's Dinner Stop", area: "Midtown", type: "Dinner", cost: 62, durationMinutes: 100 },
        { place: "Chelsea Market Dinner Route", area: "Chelsea", type: "Food hall dinner", cost: 38, durationMinutes: 85 }
      ],
      snack: [
        { place: "Librae Bakery", area: "East Village", type: "Bakery stop", cost: 13, durationMinutes: 30 },
        { place: "Culture Espresso", area: "Midtown", type: "Coffee stop", cost: 10, durationMinutes: 25 }
      ]
    },
    activities: [
      { id: "ny-activity-1", place: "Central Park North Loop", area: "Upper West Side", type: "Walk / outdoor", durationMinutes: 90, preferredWindow: "morning", cost: 10, note: "A low-stress first stop that makes good use of a morning window." },
      { id: "ny-activity-2", place: "Whitney Museum Block", area: "Meatpacking", type: "Museum", durationMinutes: 110, preferredWindow: "midday", cost: 30, note: "A strong midday anchor with nearby food and river access." },
      { id: "ny-activity-3", place: "High Line South Stretch", area: "Chelsea", type: "Walk / neighborhood", durationMinutes: 75, preferredWindow: "afternoon", cost: 10, note: "An easy neighborhood transition that keeps the route coherent." },
      { id: "ny-activity-4", place: "Village Jazz Session", area: "West Village", type: "Music / evening", durationMinutes: 120, preferredWindow: "evening", cost: 48, note: "A strong evening payoff that uses budget in a meaningful way." },
      { id: "ny-activity-5", place: "SoHo Gallery Corridor", area: "SoHo", type: "Art walk", durationMinutes: 85, preferredWindow: "afternoon", cost: 18, note: "A practical art-focused stop with compact routing and easy pacing." }
    ]
  }
};

const appState = {
  currentTrip: null,
  feasibilityAdvice: null
};

const destinationInput = document.getElementById("destination-input");
const startDateInput = document.getElementById("start-date-input");
const endDateInput = document.getElementById("end-date-input");
const arrivalTimeInput = document.getElementById("arrival-time-input");
const departureTimeInput = document.getElementById("departure-time-input");
const budgetInput = document.getElementById("budget-input");
const tripForm = document.getElementById("trip-form");
const contactForm = document.getElementById("contact-form");
const contactNameInput = document.getElementById("contact-name-input");
const contactEmailInput = document.getElementById("contact-email-input");
const contactMessageInput = document.getElementById("contact-message-input");
const resetButton = document.getElementById("reset-button");
const goToBuilderButton = document.getElementById("go-to-builder-button");
const downloadPdfButton = document.getElementById("download-pdf-button");
const formMessage = document.getElementById("form-message");
const contactFormMessage = document.getElementById("contact-form-message");
const resultsTitle = document.getElementById("results-title");
const resultsSubtitle = document.getElementById("results-subtitle");
const resultsSection = document.getElementById("results");
const resultsEmptyState = document.getElementById("results-empty-state");
const resultsEmptyEyebrow = document.getElementById("results-empty-eyebrow");
const resultsEmptyTitle = document.getElementById("results-empty-title");
const resultsEmptyText = document.getElementById("results-empty-text");
const resultsEmptyDetails = document.getElementById("results-empty-details");
const overviewGrid = document.getElementById("overview-grid");
const stayRecommendation = document.getElementById("stay-recommendation");
const itineraryList = document.getElementById("itinerary-list");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const appSections = Array.from(document.querySelectorAll(".app-section"));

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function formatDateRange(start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  const options = { month: "short", day: "numeric" };
  return `${startDate.toLocaleDateString("en-US", options)} - ${endDate.toLocaleDateString("en-US", options)}`;
}

function formatSingleDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function formatTimeLabel(value) {
  const [hourText, minuteText] = value.split(":");
  let hour = Number(hourText);
  const minute = Number(minuteText);
  const suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function formatPercent(value) {
  return `${Math.round(value)}%`;
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  if (hours && remainder) return `${hours} hr ${remainder} min`;
  if (hours) return `${hours} hr`;
  return `${remainder} min`;
}

function parseTimeLabelToMinutes(value) {
  const match = value.match(/(\d{1,2}):(\d{2})\s(AM|PM)/);
  if (!match) return 0;
  let hour = Number(match[1]);
  const minute = Number(match[2]);
  const suffix = match[3];
  if (suffix === "PM" && hour !== 12) hour += 12;
  if (suffix === "AM" && hour === 12) hour = 0;
  return (hour * 60) + minute;
}

function normalizeDestination(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,]/g, "");
}

function resolveSupportedDestination(value) {
  const normalized = normalizeDestination(value);
  const aliases = {
    tokyo: "tokyo",
    "tokyo japan": "tokyo",
    japan: "tokyo",
    seoul: "seoul",
    korea: "seoul",
    "seoul korea": "seoul",
    "seoul south korea": "seoul",
    "south korea": "seoul",
    "new york": "new york",
    "new york city": "new york",
    nyc: "new york",
    "new york usa": "new york",
    usa: "new york",
    us: "new york",
    america: "new york",
    "united states": "new york",
    "united states of america": "new york"
  };

  return aliases[normalized] || null;
}

function timeToMinutes(value) {
  const [hour, minute] = value.split(":").map(Number);
  return (hour * 60) + minute;
}

function minutesToLabel(totalMinutes) {
  const hour24 = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function clampMinutes(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function alignMinutes(value) {
  return Math.round(value / 15) * 15;
}

function buildRelativeStartTime(baseMinutes, offsetMinutes, minMinutes = 360, maxMinutes = 1380) {
  const candidate = clampMinutes(alignMinutes(baseMinutes + offsetMinutes), minMinutes, maxMinutes);
  return minutesToLabel(candidate);
}

function differenceInDays(startDate, endDate) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  return Math.round((end - start) / 86400000);
}

function getTripDayCount(startDate, endDate) {
  return differenceInDays(startDate, endDate) + 1;
}

function getNightCount(startDate, endDate) {
  return Math.max(1, differenceInDays(startDate, endDate));
}

function pluralizeDays(value) {
  return `${value} day${value === 1 ? "" : "s"}`;
}

function getTravelStyle(destinationKey, budget) {
  if (budget >= 2200) return "Premium city escape";
  if (budget <= 800) return "Lean explorer plan";
  if (destinationKey === "tokyo") return "Design-focused city break";
  if (destinationKey === "seoul") return "Balanced local discovery";
  if (destinationKey === "new york") return "Fast-paced urban itinerary";
  return "Flexible traveler plan";
}

function setFormMessage(message, type = "") {
  formMessage.textContent = message;
  formMessage.className = "form-message";
  if (type) formMessage.classList.add(type);
}

function setContactFormMessage(message, type = "") {
  contactFormMessage.textContent = message;
  contactFormMessage.className = "form-message";
  if (type) contactFormMessage.classList.add(type);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validateForm() {
  const destination = destinationInput.value.trim();
  const budget = Number(budgetInput.value);
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const arrivalTime = arrivalTimeInput.value;
  const departureTime = departureTimeInput.value;
  const destinationKey = resolveSupportedDestination(destination);

  if (!destination || !budgetInput.value || !startDate || !endDate || !arrivalTime || !departureTime) {
    return "Please complete destination, travel dates, arrival time, departure time, and total budget before building your trip.";
  }
  if (budget <= 0) {
    return "Please enter a valid budget greater than zero.";
  }
  if (new Date(endDate) < new Date(startDate)) {
    return "End date must be the same as or later than the start date.";
  }
  if (startDate === endDate && timeToMinutes(departureTime) <= timeToMinutes(arrivalTime)) {
    return "For a same-day trip, departure time must be later than arrival time.";
  }
  if (!destinationKey || !tripCatalog[destinationKey]) {
    return "Sample trip generation is currently available for Tokyo, Seoul, and New York.";
  }
  return "";
}

function buildStayCost(stay, nights) {
  const base = stay.nightlyRate * nights;
  const fees = 25;
  const taxes = Math.round(base * 0.1);
  return base + fees + taxes;
}

function buildMealTemplates(budgetPerDay) {
  if (budgetPerDay <= 65) {
    return { breakfast: 10, lunch: 14, dinner: 20, snack: 7 };
  }
  if (budgetPerDay <= 110) {
    return { breakfast: 12, lunch: 18, dinner: 26, snack: 8 };
  }
  if (budgetPerDay <= 180) {
    return { breakfast: 14, lunch: 22, dinner: 34, snack: 10 };
  }
  if (budgetPerDay <= 280) {
    return { breakfast: 16, lunch: 26, dinner: 42, snack: 12 };
  }
  return { breakfast: 20, lunch: 32, dinner: 54, snack: 15 };
}

function estimateMinimumTripCost(destinationData, dayCount) {
  const nights = Math.max(1, dayCount - 1);
  const cheapestStay = destinationData.stays
    .map((stay) => buildStayCost(stay, nights))
    .sort((a, b) => a - b)[0];
  const baseMeals = buildMealTemplates(65);
  const cheapestActivity = Math.min(...destinationData.activities.map((activity) => activity.cost));
  const transitPerDay = 8;
  const dailyEssentials = baseMeals.breakfast + baseMeals.lunch + baseMeals.dinner + transitPerDay;
  const lighterArrivalDeparture = baseMeals.lunch + baseMeals.dinner + transitPerDay + cheapestActivity;
  const fullDayCost = dailyEssentials + cheapestActivity;

  if (dayCount === 1) {
    return cheapestStay + baseMeals.lunch + baseMeals.dinner + cheapestActivity + transitPerDay;
  }

  if (dayCount === 2) {
    return cheapestStay + lighterArrivalDeparture + baseMeals.breakfast + transitPerDay;
  }

  return cheapestStay + (lighterArrivalDeparture * 2) + ((dayCount - 2) * fullDayCost);
}

function buildFeasibilityAdvice(destinationData, budget, tripDayCount) {
  const minimumBudget = estimateMinimumTripCost(destinationData, tripDayCount);
  if (budget >= minimumBudget * 0.92) return null;

  let maxFeasibleDays = 0;
  for (let dayCount = 1; dayCount <= Math.max(10, tripDayCount); dayCount += 1) {
    if (estimateMinimumTripCost(destinationData, dayCount) <= budget) {
      maxFeasibleDays = dayCount;
    }
  }

  const recommendedMinDays = Math.max(1, maxFeasibleDays === 0 ? 1 : Math.max(1, maxFeasibleDays - 1));
  const recommendedMaxDays = Math.max(recommendedMinDays, maxFeasibleDays || 1);

  return {
    destinationLabel: destinationData.name,
    minimumBudget,
    recommendedMinDays,
    recommendedMaxDays,
    tripDayCount
  };
}

function cloneActivities(activities) {
  return activities.map((activity) => ({ ...activity }));
}

function createItineraryItem({
  dayLabel,
  startTime,
  place,
  area,
  type,
  durationMinutes,
  estimatedCost = 0,
  note,
  routeReason
}) {
  return {
    dayLabel,
    startTime,
    place,
    area,
    type,
    durationMinutes,
    estimatedCost,
    note,
    routeReason,
    transferToNext: "TBD"
  };
}

function buildStopDescription(place, area, type, note) {
  return `${place} in ${area} is a ${type.toLowerCase()} stop with a traveler-friendly feel. ${note}`;
}

function createFallbackMeal(areaHint, budgetTarget, mealLabel) {
  const area = areaHint || "Central district";
  const defaults = {
    breakfast: { place: `${area} Morning Cafe`, type: "Cafe / breakfast", durationMinutes: 45, baseCost: 14 },
    lunch: { place: `${area} Lunch Kitchen`, type: "Casual lunch", durationMinutes: 55, baseCost: 22 },
    dinner: { place: `${area} Neighborhood Table`, type: "Dinner", durationMinutes: 85, baseCost: 34 },
    snack: { place: `${area} Coffee Bar`, type: "Coffee stop", durationMinutes: 30, baseCost: 10 }
  };
  const fallback = defaults[mealLabel] || defaults.lunch;
  return {
    place: fallback.place,
    area,
    type: fallback.type,
    durationMinutes: fallback.durationMinutes,
    cost: Math.max(fallback.baseCost, Math.round(budgetTarget || fallback.baseCost))
  };
}

function createFallbackActivity(areaHint, preferredWindow) {
  const area = areaHint || "Central district";
  const defaults = {
    morning: { place: `${area} Neighborhood Walk`, type: "Walk / local", durationMinutes: 75, cost: 12, note: "A flexible local route that works well as a lighter stop when the schedule needs to stay simple." },
    midday: { place: `${area} Local Gallery Stop`, type: "Gallery / museum", durationMinutes: 90, cost: 22, note: "A practical midday cultural stop that keeps the itinerary feeling complete." },
    afternoon: { place: `${area} Market Street Walk`, type: "Market / neighborhood", durationMinutes: 80, cost: 16, note: "An easy afternoon route that keeps the day coherent without forcing a long transfer." },
    evening: { place: `${area} Evening Dining Route`, type: "Food / evening route", durationMinutes: 95, cost: 30, note: "A stronger evening block that helps the trip make fuller use of the budget." }
  };
  return { ...defaults[preferredWindow] || defaults.afternoon, area, preferredWindow };
}

function inferMealLabel(type) {
  const normalized = type.toLowerCase();
  if (normalized.includes("breakfast")) return "breakfast";
  if (normalized.includes("dinner") || normalized.includes("izakaya")) return "dinner";
  if (normalized.includes("coffee") || normalized.includes("bakery") || normalized.includes("snack")) return "snack";
  if (normalized.includes("lunch")) return "lunch";
  return "";
}

function inferActivityWindowFromTime(startTime) {
  const minutes = parseTimeLabelToMinutes(startTime);
  if (minutes < 720) return "morning";
  if (minutes < 900) return "midday";
  if (minutes < 1080) return "afternoon";
  return "evening";
}

function buildActivityPoolForBudget(destinationData, budgetPerDay) {
  const targetCost = budgetPerDay <= 70 ? 10 : budgetPerDay <= 120 ? 16 : budgetPerDay <= 220 ? 24 : 36;
  return cloneActivities(destinationData.activities).sort((a, b) => Math.abs(a.cost - targetCost) - Math.abs(b.cost - targetCost));
}

function replaceStopWithBudgetAlternative(item, mealCosts) {
  const mealLabel = inferMealLabel(item.type);

  if (mealLabel) {
    const cheaperMeal = createFallbackMeal(item.area, Math.max(6, Math.round(mealCosts[mealLabel] * 0.9)), mealLabel);
    if (cheaperMeal.cost >= item.estimatedCost) return false;
    item.place = cheaperMeal.place;
    item.area = cheaperMeal.area;
    item.type = cheaperMeal.type;
    item.durationMinutes = cheaperMeal.durationMinutes;
    item.estimatedCost = cheaperMeal.cost;
    item.note = buildStopDescription(cheaperMeal.place, cheaperMeal.area, cheaperMeal.type, "It keeps the day comfortable while respecting a tighter budget.");
    return true;
  }

  if (item.type === "Hotel" || item.type === "Travel") return false;

  const cheaperActivity = createFallbackActivity(item.area, inferActivityWindowFromTime(item.startTime));
  cheaperActivity.cost = Math.min(cheaperActivity.cost, Math.max(0, Math.round(mealCosts.lunch * 0.8)));
  if (cheaperActivity.cost >= item.estimatedCost) return false;
  item.place = cheaperActivity.place;
  item.area = cheaperActivity.area;
  item.type = cheaperActivity.type;
  item.durationMinutes = Math.min(item.durationMinutes, cheaperActivity.durationMinutes);
  item.estimatedCost = cheaperActivity.cost;
  item.note = buildStopDescription(cheaperActivity.place, cheaperActivity.area, cheaperActivity.type, "It keeps the route intact while bringing the total cost back toward the target budget.");
  return true;
}

function removeLowestValueStop(plan) {
  const removableIndexes = plan.itineraryItems
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.estimatedCost > 0 && item.type !== "Hotel" && item.type !== "Travel")
    .sort((a, b) => {
      const aSnack = inferMealLabel(a.item.type) === "snack" ? -1 : 0;
      const bSnack = inferMealLabel(b.item.type) === "snack" ? -1 : 0;
      if (aSnack !== bSnack) return aSnack - bSnack;
      return b.item.estimatedCost - a.item.estimatedCost;
    });

  const candidate = removableIndexes[0];
  if (!candidate) return null;

  const [removed] = plan.itineraryItems.splice(candidate.index, 1);
  plan.activitiesAndMealsCost -= removed.estimatedCost;
  plan.totalCost = plan.recommendedStay.stayCost + plan.activitiesAndMealsCost;
  return removed;
}

function rebalancePlanToBudget(plan, budget, mealCosts) {
  if (plan.totalCost <= budget) return false;

  let updated = false;
  let passes = 0;

  while (plan.totalCost > budget && passes < 6) {
    const candidateIndexes = plan.itineraryItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.estimatedCost > 0 && item.type !== "Hotel" && item.type !== "Travel")
      .sort((a, b) => b.item.estimatedCost - a.item.estimatedCost);

    let changedInPass = false;
    for (const { index } of candidateIndexes) {
      if (plan.totalCost <= budget) break;
      const item = plan.itineraryItems[index];
      const previousCost = item.estimatedCost;
      const changed = replaceStopWithBudgetAlternative(item, mealCosts);
      if (!changed) continue;
      plan.activitiesAndMealsCost -= previousCost - item.estimatedCost;
      plan.totalCost = plan.recommendedStay.stayCost + plan.activitiesAndMealsCost;
      updated = true;
      changedInPass = true;
    }

    if (!changedInPass) {
      const removedStop = removeLowestValueStop(plan);
      if (!removedStop) break;
      updated = true;
    }

    passes += 1;
  }

  return updated;
}

function pickMeal(mealPool, areaHint, budgetTarget, mealLabel = "lunch") {
  if (!mealPool.length) {
    return createFallbackMeal(areaHint, budgetTarget, mealLabel);
  }
  const nearbyIndex = mealPool.findIndex((meal) => meal.area === areaHint);
  if (nearbyIndex >= 0) {
    const picked = mealPool.splice(nearbyIndex, 1)[0];
    return { ...picked };
  }

  const underTarget = mealPool.filter((meal) => meal.cost <= budgetTarget);
  const poolToRank = underTarget.length ? underTarget : mealPool;
  const sortedByBudget = [...poolToRank].sort((a, b) => Math.abs(a.cost - budgetTarget) - Math.abs(b.cost - budgetTarget));
  const chosen = sortedByBudget[0];
  if (!chosen) {
    return createFallbackMeal(areaHint, budgetTarget, mealLabel);
  }
  const chosenIndex = mealPool.findIndex((meal) => meal.place === chosen.place);
  if (chosenIndex < 0) {
    return createFallbackMeal(areaHint, budgetTarget, mealLabel);
  }
  const picked = mealPool.splice(chosenIndex, 1)[0];
  return { ...picked };
}

function pickActivity(activityPool, preferredWindows, usedAreas, areaHint) {
  for (const window of preferredWindows) {
    const sameAreaIndex = activityPool.findIndex((activity) => activity.preferredWindow === window && activity.area === areaHint);
    if (sameAreaIndex >= 0) return activityPool.splice(sameAreaIndex, 1)[0];

    const nearbyAreaIndex = activityPool.findIndex((activity) => activity.preferredWindow === window && usedAreas.has(activity.area));
    if (nearbyAreaIndex >= 0) return activityPool.splice(nearbyAreaIndex, 1)[0];

    const preferredIndex = activityPool.findIndex((activity) => activity.preferredWindow === window);
    if (preferredIndex >= 0) return activityPool.splice(preferredIndex, 1)[0];
  }

  return activityPool.shift() || createFallbackActivity(areaHint || [...usedAreas][0], preferredWindows[0] || "afternoon");
}

function getTransferLabel(destinationData, fromArea, toArea) {
  if (!fromArea || !toArea || fromArea === toArea) return "8 min walk";
  const zone = destinationData.zones[fromArea];
  if (zone?.nearby?.includes(toArea)) return zone.defaultTransfer;
  return "22 min by subway";
}

function annotateTransfers(destinationData, items, finalDepartureTime) {
  for (let index = 0; index < items.length; index += 1) {
    const current = items[index];
    const next = items[index + 1];
    if (!next) {
      current.transferToNext = finalDepartureTime ? `Departure transfer after ${formatTimeLabel(finalDepartureTime)}` : "End of day";
      continue;
    }

    if (current.dayLabel !== next.dayLabel) {
      current.transferToNext = "Return to hotel and reset for next day";
      continue;
    }

    current.transferToNext = getTransferLabel(destinationData, current.area, next.area);
  }
}

function buildSingleDayPlan(destinationData, items, activityPool, mealPools, arrivalTime, departureTime, mealCosts, stayArea) {
  const dayLabel = "Day 1";
  const arrivalMinutes = timeToMinutes(arrivalTime);
  const departureMinutes = timeToMinutes(departureTime);
  const usedAreas = new Set([stayArea]);

  items.push(createItineraryItem({
    dayLabel,
    startTime: formatTimeLabel(arrivalTime),
    place: "Hotel arrival, bag drop, and trip start",
    area: stayArea,
    type: "Hotel",
    durationMinutes: arrivalMinutes <= 480 ? 45 : 60,
    note: `This ${stayArea} base gives the itinerary a simple starting point before the first stop.`
  }));

  if (departureMinutes - arrivalMinutes <= 180) {
    items.push(createItineraryItem({
      dayLabel,
      startTime: buildRelativeStartTime(arrivalMinutes, 75, arrivalMinutes + 30, Math.max(arrivalMinutes + 30, departureMinutes - 45)),
      place: `${stayArea} Short Neighborhood Walk`,
      area: stayArea,
      type: "Walk / local",
      durationMinutes: 45,
      estimatedCost: 8,
      note: `A compact stop in ${stayArea} keeps a short travel window usable without rushing the day.`
    }));
    return;
  }

  if (arrivalMinutes <= 660 && departureMinutes >= 780) {
    const firstMeal = pickMeal(mealPools.breakfast, stayArea, mealCosts.breakfast, "breakfast");
    items.push(createItineraryItem({
      dayLabel,
      startTime: buildRelativeStartTime(arrivalMinutes, 75, 420, departureMinutes - 180),
      place: firstMeal.place,
      area: firstMeal.area,
      type: firstMeal.type,
      durationMinutes: firstMeal.durationMinutes,
      estimatedCost: firstMeal.cost,
      note: buildStopDescription(firstMeal.place, firstMeal.area, firstMeal.type, "It gives the trip an easy first meal with a comfortable local pace.")
    }));
    usedAreas.add(firstMeal.area);
  }

  const mainActivity = pickActivity(activityPool, ["morning", "midday", "afternoon"], usedAreas, stayArea);
  items.push(createItineraryItem({
    dayLabel,
    startTime: buildRelativeStartTime(arrivalMinutes, arrivalMinutes <= 660 ? 165 : 90, arrivalMinutes + 45, departureMinutes - 180),
    place: mainActivity.place,
    area: mainActivity.area,
    type: mainActivity.type,
    durationMinutes: Math.min(mainActivity.durationMinutes, Math.max(60, departureMinutes - arrivalMinutes - 180)),
    estimatedCost: mainActivity.cost,
    note: buildStopDescription(mainActivity.place, mainActivity.area, mainActivity.type, mainActivity.note)
  }));
  usedAreas.add(mainActivity.area);

  if (departureMinutes - arrivalMinutes >= 360) {
    const finalMealLabel = departureMinutes >= 1020 ? "dinner" : "lunch";
    const finalMeal = pickMeal(
      finalMealLabel === "dinner" ? mealPools.dinner : mealPools.lunch,
      mainActivity.area,
      finalMealLabel === "dinner" ? mealCosts.dinner : mealCosts.lunch,
      finalMealLabel
    );
    items.push(createItineraryItem({
      dayLabel,
      startTime: buildRelativeStartTime(departureMinutes, -135, arrivalMinutes + 135, departureMinutes - 60),
      place: finalMeal.place,
      area: finalMeal.area,
      type: finalMeal.type,
      durationMinutes: finalMeal.durationMinutes,
      estimatedCost: finalMeal.cost,
      note: buildStopDescription(finalMeal.place, finalMeal.area, finalMeal.type, "It rounds out the day with one more worthwhile stop before departure.")
    }));
  }

  items.push(createItineraryItem({
    dayLabel,
    startTime: buildRelativeStartTime(departureMinutes, -45, arrivalMinutes + 120, departureMinutes),
    place: "Departure transfer",
    area: stayArea,
    type: "Travel",
    durationMinutes: 30,
    note: `This buffer keeps the final leg practical and leaves enough time to head out from ${stayArea}.`
  }));
}

function addArrivalDayPlan(destinationData, items, activityPool, mealPools, arrivalTime, mealCosts, stayArea, budgetPerDay) {
  const arrivalMinutes = timeToMinutes(arrivalTime);
  const dayLabel = "Day 1";
  const usedAreas = new Set([stayArea]);

  if (arrivalMinutes >= 1200) {
    const dinnerStart = arrivalMinutes >= 1380 ? null : buildRelativeStartTime(arrivalMinutes, 75, 1230, 1380);
    items.push(createItineraryItem({
      dayLabel,
      startTime: formatTimeLabel(arrivalTime),
      place: "Hotel arrival and check-in",
      area: stayArea,
      type: "Hotel",
      durationMinutes: 60,
      note: "This hotel base offers a straightforward late-night arrival with a calm check-in rhythm before settling in for the trip."
    }));
    if (dinnerStart) {
      const dinner = pickMeal(mealPools.dinner, stayArea, mealCosts.dinner, "dinner");
      items.push(createItineraryItem({
        dayLabel,
        startTime: dinnerStart,
        place: dinner.place,
        area: dinner.area,
        type: dinner.type,
        durationMinutes: dinner.durationMinutes,
        estimatedCost: dinner.cost,
        note: buildStopDescription(dinner.place, dinner.area, dinner.type, "It works well as a low-stress first meal after a long arrival day.")
      }));
    }
    return;
  }

  items.push(createItineraryItem({
    dayLabel,
    startTime: formatTimeLabel(arrivalTime),
    place: "Hotel arrival, bag drop, and check-in",
    area: stayArea,
    type: "Hotel",
    durationMinutes: arrivalMinutes < 720 ? 75 : 60,
    note: arrivalMinutes < 720
      ? `This ${stayArea} hotel base gives the trip a calm starting point with enough time to ease into the city early.`
      : `This ${stayArea} hotel base is well suited to a measured arrival, with a comfortable pace before the first outing.`
  }));

  if (arrivalMinutes < 660) {
    const brunch = pickMeal(mealPools.lunch, stayArea, mealCosts.lunch, "lunch");
    items.push(createItineraryItem({
      dayLabel,
      startTime: "10:00 AM",
      place: brunch.place,
      area: brunch.area,
      type: brunch.type,
      durationMinutes: brunch.durationMinutes,
      estimatedCost: brunch.cost,
      note: buildStopDescription(brunch.place, brunch.area, brunch.type, "It is a good first meal stop after arrival, with an easy pace and approachable atmosphere.")
    }));
    usedAreas.add(brunch.area);

    const firstActivity = pickActivity(activityPool, ["morning", "midday"], usedAreas, brunch.area);
    if (firstActivity) {
      items.push(createItineraryItem({
        dayLabel,
        startTime: "11:45 AM",
        place: firstActivity.place,
        area: firstActivity.area,
        type: firstActivity.type,
        durationMinutes: firstActivity.durationMinutes,
        estimatedCost: firstActivity.cost,
        note: buildStopDescription(firstActivity.place, firstActivity.area, firstActivity.type, firstActivity.note)
      }));
      usedAreas.add(firstActivity.area);
    }
  }

  const afternoonActivity = pickActivity(activityPool, ["midday", "afternoon"], usedAreas, stayArea);
  if (afternoonActivity) {
    const afternoonStart = arrivalMinutes < 660 ? "3:30 PM" : arrivalMinutes < 960 ? "3:00 PM" : "5:00 PM";
    items.push(createItineraryItem({
      dayLabel,
      startTime: afternoonStart,
      place: afternoonActivity.place,
      area: afternoonActivity.area,
      type: afternoonActivity.type,
      durationMinutes: afternoonActivity.durationMinutes,
      estimatedCost: afternoonActivity.cost,
      note: buildStopDescription(afternoonActivity.place, afternoonActivity.area, afternoonActivity.type, afternoonActivity.note)
    }));
    usedAreas.add(afternoonActivity.area);
  }

  const dinner = pickMeal(mealPools.dinner, [...usedAreas].pop() || stayArea, mealCosts.dinner, "dinner");
  items.push(createItineraryItem({
    dayLabel,
    startTime: arrivalMinutes < 960 ? "7:30 PM" : "8:00 PM",
    place: dinner.place,
    area: dinner.area,
    type: dinner.type,
    durationMinutes: dinner.durationMinutes,
    estimatedCost: dinner.cost,
    note: buildStopDescription(dinner.place, dinner.area, dinner.type, "It gives the first evening a fuller local feel without making the day too demanding.")
  }));
}

function addFullDayPlan(destinationData, items, activityPool, mealPools, dayNumber, mealCosts, stayArea) {
  const dayLabel = `Day ${dayNumber}`;
  const breakfast = pickMeal(mealPools.breakfast, stayArea, mealCosts.breakfast, "breakfast");
  items.push(createItineraryItem({
    dayLabel,
    startTime: "8:30 AM",
    place: breakfast.place,
    area: breakfast.area,
    type: breakfast.type,
    durationMinutes: breakfast.durationMinutes,
    estimatedCost: breakfast.cost,
    note: buildStopDescription(breakfast.place, breakfast.area, breakfast.type, "It is a comfortable morning start before the main activity block begins.")
  }));

  const firstActivity = pickActivity(activityPool, ["morning", "midday"], new Set([breakfast.area]), breakfast.area);
  if (firstActivity) {
    items.push(createItineraryItem({
      dayLabel,
      startTime: "10:15 AM",
      place: firstActivity.place,
      area: firstActivity.area,
      type: firstActivity.type,
      durationMinutes: firstActivity.durationMinutes,
      estimatedCost: firstActivity.cost,
      note: buildStopDescription(firstActivity.place, firstActivity.area, firstActivity.type, firstActivity.note)
    }));
  }

  const lunchArea = firstActivity ? firstActivity.area : breakfast.area;
  const lunch = pickMeal(mealPools.lunch, lunchArea, mealCosts.lunch, "lunch");
  items.push(createItineraryItem({
    dayLabel,
    startTime: "1:00 PM",
    place: lunch.place,
    area: lunch.area,
    type: lunch.type,
    durationMinutes: lunch.durationMinutes,
    estimatedCost: lunch.cost,
    note: buildStopDescription(lunch.place, lunch.area, lunch.type, "It is a practical midday stop with enough substance to keep the rest of the day comfortable.")
  }));

  const secondActivity = pickActivity(activityPool, ["afternoon", "midday", "evening"], new Set([lunch.area, lunchArea]), lunch.area);
  if (secondActivity) {
    items.push(createItineraryItem({
      dayLabel,
      startTime: "3:15 PM",
      place: secondActivity.place,
      area: secondActivity.area,
      type: secondActivity.type,
      durationMinutes: secondActivity.durationMinutes,
      estimatedCost: secondActivity.cost,
      note: buildStopDescription(secondActivity.place, secondActivity.area, secondActivity.type, secondActivity.note)
    }));
  }

  const dinnerArea = secondActivity ? secondActivity.area : lunch.area;
  const dinner = pickMeal(mealPools.dinner, dinnerArea, mealCosts.dinner, "dinner");
  items.push(createItineraryItem({
    dayLabel,
    startTime: "7:30 PM",
    place: dinner.place,
    area: dinner.area,
    type: dinner.type,
    durationMinutes: dinner.durationMinutes,
    estimatedCost: dinner.cost,
    note: buildStopDescription(dinner.place, dinner.area, dinner.type, "It closes the day with a more complete local experience and a stronger evening atmosphere.")
  }));
}

function addDepartureDayPlan(destinationData, items, activityPool, mealPools, tripDayCount, departureTime, mealCosts, stayArea) {
  const dayLabel = `Day ${tripDayCount}`;
  const departureMinutes = timeToMinutes(departureTime);

  if (departureMinutes <= 180) {
    items.push(createItineraryItem({
      dayLabel,
      startTime: "12:00 AM",
      place: "Overnight departure window",
      area: stayArea,
      type: "Travel",
      durationMinutes: 30,
      note: `This final overnight departure keeps the last day intentionally minimal before leaving from ${stayArea}.`
    }));
    return;
  }

  const breakfastType = departureMinutes <= 480 ? "snack" : "breakfast";
  const breakfast = pickMeal(
    departureMinutes <= 480 ? mealPools.snack : mealPools.breakfast,
    stayArea,
    departureMinutes <= 480 ? mealCosts.snack : mealCosts.breakfast,
    breakfastType
  );
  items.push(createItineraryItem({
    dayLabel,
    startTime: departureMinutes <= 480 ? buildRelativeStartTime(departureMinutes, -90, 300, departureMinutes - 45) : departureMinutes <= 600 ? "7:30 AM" : "8:30 AM",
    place: breakfast.place,
    area: breakfast.area,
    type: breakfast.type,
    durationMinutes: breakfast.durationMinutes,
    estimatedCost: breakfast.cost,
    note: departureMinutes <= 480
      ? buildStopDescription(breakfast.place, breakfast.area, breakfast.type, "It works as a quick last stop before a very early departure.")
      : departureMinutes <= 600
      ? buildStopDescription(breakfast.place, breakfast.area, breakfast.type, "It works as a quick final meal before an early departure.")
      : buildStopDescription(breakfast.place, breakfast.area, breakfast.type, "It gives the final morning a relaxed start before checkout.")
  }));

  items.push(createItineraryItem({
    dayLabel,
    startTime: departureMinutes <= 480 ? buildRelativeStartTime(departureMinutes, -45, 345, departureMinutes) : departureMinutes <= 600 ? "8:30 AM" : "10:00 AM",
    place: "Hotel checkout and luggage handoff",
    area: stayArea,
    type: "Hotel",
    durationMinutes: 45,
    note: `This checkout window keeps the final day practical and gives the trip a realistic transition before departure from ${stayArea}.`
  }));

  if (departureMinutes <= 600) {
    return;
  }

  const finalActivity = pickActivity(activityPool, departureMinutes >= 900 ? ["midday", "afternoon", "morning"] : ["morning", "midday"], new Set([stayArea]), stayArea);
  if (finalActivity) {
    items.push(createItineraryItem({
      dayLabel,
      startTime: departureMinutes >= 900 ? "11:30 AM" : "11:15 AM",
      place: finalActivity.place,
      area: finalActivity.area,
      type: finalActivity.type,
      durationMinutes: Math.min(finalActivity.durationMinutes, departureMinutes >= 900 ? finalActivity.durationMinutes : 75),
      estimatedCost: finalActivity.cost,
      note: buildStopDescription(finalActivity.place, finalActivity.area, finalActivity.type, departureMinutes >= 900
        ? "It makes good use of a later departure by adding one more meaningful neighborhood experience."
        : "It keeps the final morning interesting without making the departure window feel rushed.")
    }));
  }

  if (departureMinutes >= 900) {
    const finalMeal = pickMeal(mealPools.lunch, finalActivity ? finalActivity.area : stayArea, mealCosts.lunch, "lunch");
    items.push(createItineraryItem({
      dayLabel,
      startTime: "2:00 PM",
      place: finalMeal.place,
      area: finalMeal.area,
      type: finalMeal.type,
      durationMinutes: finalMeal.durationMinutes,
      estimatedCost: finalMeal.cost,
      note: buildStopDescription(finalMeal.place, finalMeal.area, finalMeal.type, "It gives the trip a satisfying last stop before heading out.")
    }));
  }
}

function buildMealPools(destinationData) {
  return {
    breakfast: destinationData.meals.breakfast.map((item) => ({ ...item })),
    lunch: destinationData.meals.lunch.map((item) => ({ ...item })),
    dinner: destinationData.meals.dinner.map((item) => ({ ...item })),
    snack: destinationData.meals.snack.map((item) => ({ ...item }))
  };
}

function buildFallbackPlan(destinationData, budget, startDate, endDate, arrivalTime, departureTime) {
  const tripDayCount = getTripDayCount(startDate, endDate);
  const nights = getNightCount(startDate, endDate);
  const stay = destinationData.stays
    .map((candidate) => ({ ...candidate, stayCost: buildStayCost(candidate, nights), nights }))
    .sort((a, b) => a.stayCost - b.stayCost)[0];
  const area = stay.area || "Central district";
  const itineraryItems = [];

  itineraryItems.push(createItineraryItem({
    dayLabel: "Day 1",
    startTime: formatTimeLabel(arrivalTime),
    place: "Hotel arrival and check-in",
    area,
    type: "Hotel",
    durationMinutes: 60,
    note: `This ${stay.type.toLowerCase()} base in ${area} gives the trip a simple and reliable starting point.`
  }));

  itineraryItems.push(createItineraryItem({
    dayLabel: "Day 1",
    startTime: timeToMinutes(arrivalTime) >= 1080
      ? buildRelativeStartTime(timeToMinutes(arrivalTime), 60, 1200, 1380)
      : "3:00 PM",
    place: `${area} First-Day Walk`,
    area,
    type: "Walk / neighborhood",
    durationMinutes: 75,
    estimatedCost: 12,
    note: `This first route in ${area} keeps the trip usable even when the detailed optimizer cannot build the full plan.`
  }));

  for (let day = 2; day <= tripDayCount; day += 1) {
    if (day === tripDayCount && tripDayCount > 1) {
      itineraryItems.push(createItineraryItem({
        dayLabel: `Day ${day}`,
        startTime: timeToMinutes(departureTime) <= 180
          ? "12:00 AM"
          : timeToMinutes(departureTime) <= 600
            ? buildRelativeStartTime(timeToMinutes(departureTime), -90, 300, timeToMinutes(departureTime) - 45)
            : "10:30 AM",
        place: `${area} Final Day Route`,
        area,
        type: "Walk / local",
        durationMinutes: timeToMinutes(departureTime) <= 180 ? 30 : timeToMinutes(departureTime) <= 600 ? 45 : 75,
        estimatedCost: 10,
        note: "A lighter final-day stop keeps the trip realistic around the departure window."
      }));
      continue;
    }

    itineraryItems.push(createItineraryItem({
      dayLabel: `Day ${day}`,
      startTime: "10:00 AM",
      place: `${area} Main Day Route`,
      area,
      type: "Walk / neighborhood",
      durationMinutes: 90,
      estimatedCost: 16,
      note: `A simple day block in ${area} keeps the itinerary coherent and usable as a fallback plan.`
    }));
    itineraryItems.push(createItineraryItem({
      dayLabel: `Day ${day}`,
      startTime: "1:00 PM",
      place: `${area} Lunch Stop`,
      area,
      type: "Casual lunch",
      durationMinutes: 60,
      estimatedCost: 22,
      note: `A practical midday meal in ${area} keeps the day comfortable and budget-aware.`
    }));
  }

  annotateTransfers(destinationData, itineraryItems, departureTime);
  const activitiesAndMealsCost = itineraryItems.reduce((sum, item) => sum + item.estimatedCost, 0);
  return {
    recommendedStay: stay,
    itineraryItems,
    activitiesAndMealsCost,
    totalCost: stay.stayCost + activitiesAndMealsCost,
    usedFallback: true
  };
}

function addBudgetUseStops(plan, destinationData, budget, mealCosts, arrivalTime, departureTime) {
  let remaining = budget - plan.totalCost;
  if ((remaining / budget) <= 0.03) return;
  if (remaining < mealCosts.snack + 8) return;

  const addedStops = [];
  const candidateSnackStops = destinationData.meals.snack.map((item) => ({ ...item }));
  const uniqueDayLabels = [...new Set(plan.itineraryItems.map((item) => item.dayLabel))];
  const firstDayLabel = uniqueDayLabels[0];
  const lastDayLabel = uniqueDayLabels[uniqueDayLabels.length - 1];
  const arrivalMinutes = timeToMinutes(arrivalTime);
  const departureMinutes = timeToMinutes(departureTime);

  for (const dayLabel of uniqueDayLabels) {
    if (remaining < mealCosts.snack + 8) break;
    const anchorItem = plan.itineraryItems.find((item) => item.dayLabel === dayLabel && item.type !== "Hotel");
    if (!anchorItem) continue;
    if (dayLabel === firstDayLabel && arrivalMinutes >= 1080) continue;
    if (dayLabel === lastDayLabel && departureMinutes <= 600) continue;

    const snack = pickMeal(candidateSnackStops, anchorItem.area, mealCosts.snack, "snack");
    const snackTime = dayLabel === firstDayLabel
      ? buildRelativeStartTime(arrivalMinutes, 330, arrivalMinutes + 120, 1110)
      : dayLabel === lastDayLabel
        ? buildRelativeStartTime(departureMinutes, -150, 600, departureMinutes - 75)
        : "4:45 PM";
    const snackCost = Math.min(snack.cost + 4, remaining);
    addedStops.push(createItineraryItem({
      dayLabel,
      startTime: snackTime,
      place: snack.place,
      area: snack.area,
      type: snack.type,
      durationMinutes: snack.durationMinutes,
      estimatedCost: snackCost,
      note: buildStopDescription(snack.place, snack.area, snack.type, "It adds a small local moment that makes the day feel more complete.")
    }));
    remaining -= snackCost;
  }

  plan.itineraryItems.push(...addedStops);
  plan.activitiesAndMealsCost += addedStops.reduce((sum, item) => sum + item.estimatedCost, 0);
  plan.totalCost += addedStops.reduce((sum, item) => sum + item.estimatedCost, 0);
}

function sortItineraryItems(items) {
  return [...items].sort((a, b) => {
    const dayA = Number(a.dayLabel.replace("Day ", ""));
    const dayB = Number(b.dayLabel.replace("Day ", ""));
    if (dayA !== dayB) return dayA - dayB;
    return parseTimeLabelToMinutes(a.startTime) - parseTimeLabelToMinutes(b.startTime);
  });
}

function getDateForDayIndex(startDate, dayIndex) {
  const date = new Date(`${startDate}T00:00:00`);
  date.setDate(date.getDate() + dayIndex);
  return date.toISOString().slice(0, 10);
}

function getDaySectionSummary(dayNumber, tripDayCount) {
  if (tripDayCount === 1) return "Same-day trip plan";
  if (dayNumber === 1) return "Arrival day";
  if (dayNumber === tripDayCount) return "Lighter departure day";
  return "Full exploration day";
}

function buildPlanForStay(destinationData, budget, startDate, endDate, arrivalTime, departureTime, stay) {
  const tripDayCount = getTripDayCount(startDate, endDate);
  const nights = getNightCount(startDate, endDate);
  const stayCost = buildStayCost(stay, nights);
  const discretionaryBudget = Math.max(0, budget - stayCost);
  const budgetPerDay = Math.max(25, discretionaryBudget / tripDayCount);
  const mealCosts = buildMealTemplates(budgetPerDay);
  const activityPool = buildActivityPoolForBudget(destinationData, budgetPerDay);
  const mealPools = buildMealPools(destinationData);
  const itineraryItems = [];

  if (tripDayCount === 1) {
    buildSingleDayPlan(destinationData, itineraryItems, activityPool, mealPools, arrivalTime, departureTime, mealCosts, stay.area);
  } else {
    addArrivalDayPlan(destinationData, itineraryItems, activityPool, mealPools, arrivalTime, mealCosts, stay.area, budgetPerDay);
  }

  if (tripDayCount > 2) {
    for (let day = 2; day < tripDayCount; day += 1) {
      addFullDayPlan(destinationData, itineraryItems, activityPool, mealPools, day, mealCosts, stay.area);
    }
  }

  if (tripDayCount > 1) {
    addDepartureDayPlan(destinationData, itineraryItems, activityPool, mealPools, tripDayCount, departureTime, mealCosts, stay.area);
  }

  const sortedItems = sortItineraryItems(itineraryItems);
  const activitiesAndMealsCost = sortedItems.reduce((sum, item) => sum + item.estimatedCost, 0);
  const plan = {
    recommendedStay: {
      ...stay,
      stayCost,
      nights
    },
    itineraryItems: sortedItems,
    activitiesAndMealsCost,
    totalCost: stayCost + activitiesAndMealsCost,
    budgetAdjustments: []
  };

  const usedBudgetDowngrades = rebalancePlanToBudget(plan, budget, mealCosts);
  addBudgetUseStops(plan, destinationData, budget, mealCosts, arrivalTime, departureTime);
  const usedFinalBudgetFit = rebalancePlanToBudget(plan, budget, mealCosts);
  plan.itineraryItems = sortItineraryItems(plan.itineraryItems);
  annotateTransfers(destinationData, plan.itineraryItems, departureTime);
  plan.activitiesAndMealsCost = plan.itineraryItems.reduce((sum, item) => sum + item.estimatedCost, 0);
  plan.totalCost = plan.recommendedStay.stayCost + plan.activitiesAndMealsCost;
  if (usedBudgetDowngrades || usedFinalBudgetFit) {
    if (stay.type.toLowerCase().includes("hostel")) {
      plan.budgetAdjustments.push("a hostel stay");
    } else if (stay.type.toLowerCase().includes("serviced apartment")) {
      plan.budgetAdjustments.push("a value-focused stay");
    }
    plan.budgetAdjustments.push("fewer paid attractions");
    plan.budgetAdjustments.push("more local restaurants");
  }
  return plan;
}

function chooseBestPlan(destinationData, budget, startDate, endDate, arrivalTime, departureTime) {
  const plans = destinationData.stays.map((stay) => {
    try {
      return buildPlanForStay(destinationData, budget, startDate, endDate, arrivalTime, departureTime, stay);
    } catch (error) {
      return null;
    }
  }).filter(Boolean);

  if (!plans.length) {
    return {
      ...buildFallbackPlan(destinationData, budget, startDate, endDate, arrivalTime, departureTime),
      planningMode: "Closest viable option"
    };
  }

  const underBudget = plans.filter((plan) => plan.totalCost <= budget);
  if (underBudget.length) {
    const bestUnderBudget = underBudget.sort((a, b) => b.totalCost - a.totalCost)[0];
    const usagePercent = (bestUnderBudget.totalCost / budget) * 100;
    return {
      ...bestUnderBudget,
      planningMode: bestUnderBudget.budgetAdjustments?.length
        ? "Balanced budget"
        : usagePercent >= 92
          ? "Best value under budget"
          : "Budget fit"
    };
  }

  return {
    ...plans.sort((a, b) => a.totalCost - b.totalCost)[0],
    planningMode: "Closest viable option"
  };
}

function buildBudgetExplanation(trip) {
  if (trip.budgetStatus === "Within Budget") {
    if (trip.budgetAdjustments?.length) {
      return `To stay within your budget, Nomad selected ${trip.budgetAdjustments.join(", ")}. The result still follows your travel window while keeping total usage at ${formatPercent(trip.usagePercent)} of your budget.`;
    }
    return `Nomad kept this itinerary under your limit by balancing the stay, paid activities, food choices, and public-transit-friendly routing across your travel window. Budget usage is ${formatPercent(trip.usagePercent)}.`;
  }
  return `Nomad prioritized budget fit first, but the sample destination costs for these exact dates and times still run above your target. This result is the closest available alternative with the lightest stay, simpler activities, and lower-cost food routing we could build.`;
}

function buildTripFromForm() {
  const destinationKey = resolveSupportedDestination(destinationInput.value);
  const destinationData = tripCatalog[destinationKey];
  const budget = Number(budgetInput.value);
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const arrivalTime = arrivalTimeInput.value;
  const departureTime = departureTimeInput.value;
  const tripDayCount = getTripDayCount(startDate, endDate);
  const feasibilityAdvice = buildFeasibilityAdvice(destinationData, budget, tripDayCount);

  appState.feasibilityAdvice = feasibilityAdvice;
  if (feasibilityAdvice) {
    appState.currentTrip = null;
    return;
  }

  const selectedPlan = chooseBestPlan(destinationData, budget, startDate, endDate, arrivalTime, departureTime);
  const remainingBudget = budget - selectedPlan.totalCost;
  const usagePercent = Math.min(999, (selectedPlan.totalCost / budget) * 100);

  appState.currentTrip = {
    destinationKey,
    destinationLabel: destinationData.name,
    travelStyle: getTravelStyle(destinationKey, budget),
    planningMode: selectedPlan.planningMode || "Budget fit",
    budget,
    startDate,
    endDate,
    arrivalTime,
    departureTime,
    dateLabel: formatDateRange(startDate, endDate),
    arrivalDepartureLabel: `${formatTimeLabel(arrivalTime)} arrival · ${formatTimeLabel(departureTime)} departure`,
    tagline: `Automatically generated around your travel window and budget. ${destinationData.tagline}`,
    recommendedStay: selectedPlan.recommendedStay,
    itineraryItems: selectedPlan.itineraryItems,
    activitiesAndMealsCost: selectedPlan.activitiesAndMealsCost,
    totalCost: selectedPlan.totalCost,
    budgetAdjustments: [...new Set(selectedPlan.budgetAdjustments || [])],
    remainingBudget,
    usagePercent,
    budgetStatus: selectedPlan.totalCost <= budget ? "Within Budget" : "Over Budget",
    usedFallback: Boolean(selectedPlan.usedFallback)
  };

  appState.currentTrip.budgetExplanation = buildBudgetExplanation(appState.currentTrip);
}

function renderOverview() {
  const trip = appState.currentTrip;
  const tripLength = getTripDayCount(trip.startDate, trip.endDate);
  overviewGrid.innerHTML = `
    <article class="overview-item">
      <span><i class="overview-icon">◎</i>Destination</span>
      <strong>${trip.destinationLabel}</strong>
    </article>
    <article class="overview-item">
      <span><i class="overview-icon">◌</i>Travel dates</span>
      <strong>${trip.dateLabel}</strong>
    </article>
    <article class="overview-item">
      <span><i class="overview-icon">↗</i>Arrival / Departure</span>
      <strong>${trip.arrivalDepartureLabel}</strong>
    </article>
    <article class="overview-item">
      <span><i class="overview-icon">△</i>Travel style</span>
      <strong>${trip.travelStyle}</strong>
    </article>
    <article class="overview-item">
      <span><i class="overview-icon">◇</i>Planning mode</span>
      <strong>${trip.planningMode}</strong>
    </article>
    <article class="overview-item">
      <span><i class="overview-icon">◍</i>Trip length</span>
      <strong>${tripLength} days</strong>
    </article>
  `;
}

function renderStayRecommendation() {
  const stay = appState.currentTrip.recommendedStay;
  stayRecommendation.innerHTML = `
    <article class="content-card recommendation-card">
      <div class="card-top">
        <span class="tag">${stay.type}</span>
        <span class="price">${formatCurrency(stay.stayCost)}</span>
      </div>
      <h4>${stay.name}</h4>
      <p>${stay.note}</p>
      <div class="card-meta">
        <span>${stay.area}</span>
        <span>${stay.nights} nights · ${formatCurrency(stay.nightlyRate)}/night</span>
      </div>
    </article>
  `;
}

function renderItinerary() {
  const trip = appState.currentTrip;
  const tripDayCount = getTripDayCount(trip.startDate, trip.endDate);
  const groupedItems = trip.itineraryItems.reduce((groups, item) => {
    const existing = groups[item.dayLabel] || [];
    existing.push(item);
    groups[item.dayLabel] = existing;
    return groups;
  }, {});

  const orderedDayLabels = Object.keys(groupedItems).sort((a, b) => Number(a.replace("Day ", "")) - Number(b.replace("Day ", "")));

  itineraryList.innerHTML = orderedDayLabels.map((dayLabel) => {
    const dayNumber = Number(dayLabel.replace("Day ", ""));
    const dayDate = getDateForDayIndex(trip.startDate, dayNumber - 1);
    const dayHeading = tripDayCount > 1 && dayNumber === tripDayCount ? "Final Day" : dayLabel;
    const daySummary = getDaySectionSummary(dayNumber, tripDayCount);
    const stopsMarkup = groupedItems[dayLabel].map((item) => `
      <article class="timeline-item itinerary-main-item">
        <div class="timeline-time">${item.startTime}</div>
        <div class="itinerary-card-content">
          <h4>${item.place}</h4>
          <div class="itinerary-meta-grid">
            <div><span>Area</span><strong>${item.area}</strong></div>
            <div><span>Type</span><strong>${item.type}</strong></div>
            <div><span>Duration</span><strong>${formatDuration(item.durationMinutes)}</strong></div>
            <div><span>Transfer to next stop</span><strong>${item.transferToNext}</strong></div>
            <div><span>Estimated cost</span><strong>${formatCurrency(item.estimatedCost)}</strong></div>
            <div><span>Time</span><strong>${item.startTime}</strong></div>
          </div>
          <p class="place-description">${item.note}</p>
        </div>
      </article>
    `).join("");

    return `
      <section class="itinerary-day-group">
        <div class="itinerary-day-header">
          <div>
            <p class="eyebrow day-badge">${dayHeading}</p>
            <h4>${formatSingleDate(dayDate)}</h4>
          </div>
          <p class="day-summary">${daySummary}</p>
        </div>
        <div class="day-stops">
          ${stopsMarkup}
        </div>
      </section>
    `;
  }).join("");
}

function renderBudgetSummary() {
  const trip = appState.currentTrip;
  document.getElementById("summary-destination").textContent = trip.destinationLabel;
  document.getElementById("summary-dates").textContent = trip.dateLabel;
  document.getElementById("summary-times").textContent = trip.arrivalDepartureLabel;
  document.getElementById("summary-budget").textContent = formatCurrency(trip.budget);
  document.getElementById("summary-stay-cost").textContent = formatCurrency(trip.recommendedStay.stayCost);
  document.getElementById("summary-activity-cost").textContent = formatCurrency(trip.activitiesAndMealsCost);
  document.getElementById("summary-total-cost").textContent = formatCurrency(trip.totalCost);
  document.getElementById("summary-remaining-label").textContent = trip.remainingBudget >= 0 ? "Remaining" : "Difference";
  document.getElementById("summary-remaining").textContent = `${trip.remainingBudget < 0 ? "-" : ""}${formatCurrency(Math.abs(trip.remainingBudget))}`;
  document.getElementById("summary-usage").textContent = formatPercent(trip.usagePercent);
  document.getElementById("budget-progress-fill").style.width = `${Math.min(100, trip.usagePercent)}%`;

  const statusElement = document.getElementById("budget-status");
  statusElement.textContent = trip.budgetStatus;
  statusElement.className = "budget-status";
  statusElement.classList.add(trip.budgetStatus === "Within Budget" ? "within" : "over");
  document.getElementById("budget-explanation").textContent = trip.budgetExplanation;

  const generationNotice = document.getElementById("generation-notice");
  if (trip.usedFallback) {
    generationNotice.hidden = false;
    generationNotice.textContent = "We could not build the full optimized plan for this exact time window, so Nomad generated a simpler itinerary that still fits the destination, schedule, and budget.";
  } else {
    generationNotice.hidden = true;
    generationNotice.textContent = "";
  }
}

function renderResults() {
  const hasTrip = Boolean(appState.currentTrip);
  const advice = appState.feasibilityAdvice;
  resultsSection.classList.toggle("is-empty", !hasTrip);
  resultsEmptyState.hidden = hasTrip;

  if (!hasTrip) {
    resultsTitle.textContent = "Your automatic trip itinerary";
    resultsSubtitle.textContent = "Build a trip first and Nomad will generate a time-aware, budget-optimized itinerary here.";
    if (advice) {
      resultsEmptyEyebrow.textContent = "Budget Recommendation";
      resultsEmptyTitle.textContent = "Your current budget is too low for this trip length.";
      resultsEmptyText.textContent = `For ${advice.destinationLabel}, Nomad recommends either shortening the trip or increasing the budget before generating a full itinerary.`;
      resultsEmptyDetails.hidden = false;
      resultsEmptyDetails.innerHTML = `
        <div><span>Minimum suggested budget</span><strong>${formatCurrency(advice.minimumBudget)}</strong></div>
        <div><span>Suggested trip length</span><strong>${pluralizeDays(advice.recommendedMinDays)} to ${pluralizeDays(advice.recommendedMaxDays)}</strong></div>
      `;
    } else {
      resultsEmptyEyebrow.textContent = "No Results Yet";
      resultsEmptyTitle.textContent = "No trip results yet.";
      resultsEmptyText.textContent = "Start by entering your destination, dates, arrival time, departure time, and budget, then click Build My Trip.";
      resultsEmptyDetails.hidden = true;
      resultsEmptyDetails.innerHTML = "";
    }
    overviewGrid.innerHTML = "";
    stayRecommendation.innerHTML = "";
    itineraryList.innerHTML = "";
    document.getElementById("summary-destination").textContent = "-";
    document.getElementById("summary-dates").textContent = "-";
    document.getElementById("summary-times").textContent = "-";
    document.getElementById("summary-budget").textContent = "$0";
    document.getElementById("summary-stay-cost").textContent = "$0";
    document.getElementById("summary-activity-cost").textContent = "$0";
    document.getElementById("summary-total-cost").textContent = "$0";
    document.getElementById("summary-remaining-label").textContent = "Remaining";
    document.getElementById("summary-remaining").textContent = "$0";
    document.getElementById("summary-usage").textContent = "0%";
    document.getElementById("budget-progress-fill").style.width = "0%";
    document.getElementById("budget-status").textContent = "Build a trip to see budget status";
    document.getElementById("budget-status").className = "budget-status";
    document.getElementById("budget-explanation").textContent = advice
      ? "Adjust the trip length or budget, then build again to generate a full itinerary."
      : "Nomad will explain how the itinerary uses your budget after generation.";
    document.getElementById("generation-notice").hidden = true;
    document.getElementById("generation-notice").textContent = "";
    return;
  }

  appState.feasibilityAdvice = null;
  resultsTitle.textContent = `${appState.currentTrip.destinationLabel} itinerary`;
  resultsSubtitle.textContent = appState.currentTrip.tagline;
  renderOverview();
  renderStayRecommendation();
  renderItinerary();
  renderBudgetSummary();
  scrollToSection("results");
}

function resetPlanner() {
  document.getElementById("trip-form").reset();
  appState.currentTrip = null;
  appState.feasibilityAdvice = null;
  renderResults();
  setFormMessage("Planner reset. Enter destination, dates, arrival time, departure time, and budget to build a new trip.");
  scrollToSection("planner");
}

function setActiveSection(sectionId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.navLink === sectionId);
  });

  appSections.forEach((section) => {
    section.classList.toggle("in-focus", section.dataset.section === sectionId);
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  setActiveSection(sectionId);
}

function setupNavigation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      scrollToSection(link.dataset.navLink);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    const visibleEntries = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visibleEntries[0]) {
      setActiveSection(visibleEntries[0].target.dataset.section);
    }
  }, {
    rootMargin: "-20% 0px -55% 0px",
    threshold: [0.2, 0.35, 0.55]
  });

  appSections.forEach((section) => observer.observe(section));
}

function handleTripSubmit(event) {
  event.preventDefault();
  const validationError = validateForm();
  if (validationError) {
    setFormMessage(validationError, "error");
    return;
  }

  try {
    buildTripFromForm();
    if (appState.feasibilityAdvice) {
      renderResults();
      scrollToSection("results");
      setFormMessage("This budget is too low for the selected trip length. Nomad suggested a more realistic range below.", "error");
      return;
    }
    setFormMessage(
      appState.currentTrip?.usedFallback
        ? "Trip generated with a simplified fallback itinerary because the full optimized route was not available for this exact combination."
        : "Trip generated. Review the detailed itinerary and export it as a PDF when ready.",
      appState.currentTrip?.usedFallback ? "" : "success"
    );
    renderResults();
    scrollToSection("results");
  } catch (error) {
    appState.currentTrip = null;
    renderResults();
    setFormMessage("There was an issue with the time window calculation. Please try again; if the issue persists, adjust the dates or times slightly.", "error");
  }
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = contactNameInput.value.trim();
  const email = contactEmailInput.value.trim();
  const message = contactMessageInput.value.trim();

  if (!name || !email || !message) {
    setContactFormMessage("Please complete your name, email, and message before submitting.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    setContactFormMessage("Please enter a valid email address.", "error");
    return;
  }

  const savedMessages = JSON.parse(localStorage.getItem("nomadContactMessages") || "[]");
  savedMessages.push({
    name,
    email,
    message,
    submittedAt: new Date().toISOString()
  });
  localStorage.setItem("nomadContactMessages", JSON.stringify(savedMessages));

  contactForm.reset();
  setContactFormMessage("Message saved locally. Thanks for reaching out to Nomad.", "success");
}

tripForm.addEventListener("submit", handleTripSubmit);
if (contactForm) {
  contactForm.addEventListener("submit", handleContactSubmit);
}
resetButton.addEventListener("click", resetPlanner);
goToBuilderButton.addEventListener("click", () => scrollToSection("planner"));
downloadPdfButton.addEventListener("click", () => {
  if (!appState.currentTrip) {
    scrollToSection("planner");
    setFormMessage("Build a trip first, then export the itinerary as a PDF.", "error");
    return;
  }

  window.print();
});

renderResults();
setupNavigation();
setActiveSection("planner");
setFormMessage("Start with destination, dates, arrival time, departure time, and budget, then click Build My Trip.");
