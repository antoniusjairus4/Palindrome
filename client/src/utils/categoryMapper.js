/**
 * Highly optimized, regex-driven category classification utility for Palindrome.
 * Auto-generated from master taxonomy.
 */

// Basic category structures with their original names and keywords
export const CATEGORIES = [
  {
    "id": 1,
    "originalId": null,
    "name": "Groceries",
    "group": "Food & Dining",
    "keywords": [
      "milk",
      "egg",
      "bread",
      "cheese",
      "butter",
      "curd",
      "rice",
      "atta",
      "flour",
      "sugar",
      "salt",
      "oil",
      "dhal",
      "pulses",
      "vegetable",
      "fruit",
      "chicken",
      "mutton",
      "fish",
      "grocery",
      "supermarket",
      "mart",
      "dmart",
      "reliance fresh",
      "bigbasket",
      "instamart",
      "blinkit",
      "zepto"
    ]
  },
  {
    "id": 2,
    "originalId": null,
    "name": "Restaurants & Fast Food",
    "group": "Food & Dining",
    "keywords": [
      "restaurant",
      "hotel",
      "biryani",
      "pizza",
      "burger",
      "cafe",
      "bakes",
      "kitchen",
      "dhabha",
      "swiggy",
      "zomato",
      "eatclub",
      "dominos",
      "kfc",
      "mcdonald",
      "subway",
      "starbucks",
      "corner house",
      "tiffin",
      "mess",
      "diner"
    ]
  },
  {
    "id": 3,
    "originalId": null,
    "name": "Beverages & Snacks",
    "group": "Food & Dining",
    "keywords": [
      "juice",
      "soda",
      "cola",
      "pepsi",
      "coke",
      "tea",
      "chai",
      "coffee",
      "water bottle",
      "chips",
      "biscuit",
      "chocolate",
      "ice cream",
      "snack",
      "waffle",
      "candy"
    ]
  },
  {
    "id": 4,
    "originalId": null,
    "name": "Cookware",
    "group": "Kitchenware & Utensils",
    "keywords": [
      "pan",
      "kadhai",
      "tawa",
      "pot",
      "pressure cooker",
      "pressure-cooker",
      "non-stick",
      "nonstick",
      "frying pan",
      "saucepan",
      "griddle",
      "wok"
    ]
  },
  {
    "id": 5,
    "originalId": null,
    "name": "Tableware & Plates",
    "group": "Kitchenware & Utensils",
    "keywords": [
      "plate",
      "bowl",
      "cup",
      "mug",
      "saucer",
      "glass",
      "tumbler",
      "dinner set",
      "serving bowl"
    ]
  },
  {
    "id": 6,
    "originalId": null,
    "name": "Cutlery & Implements",
    "group": "Kitchenware & Utensils",
    "keywords": [
      "fork",
      "spoon",
      "knife",
      "knives",
      "chopsticks",
      "spatula",
      "ladle",
      "tongs",
      "peeler",
      "whisk",
      "grater"
    ]
  },
  {
    "id": 7,
    "originalId": null,
    "name": "Storage & Miscellaneous",
    "group": "Kitchenware & Utensils",
    "keywords": [
      "tupperware",
      "container",
      "jar",
      "lunch box",
      "thermos",
      "flask",
      "bottle",
      "ziplock",
      "rack",
      "kitchen organizer"
    ]
  },
  {
    "id": 8,
    "originalId": null,
    "name": "Living Room",
    "group": "Furniture & Home Decor",
    "keywords": [
      "sofa",
      "couch",
      "recliner",
      "armchair",
      "center table",
      "coffee table",
      "tv unit",
      "bookshelf",
      "shoe rack"
    ]
  },
  {
    "id": 9,
    "originalId": null,
    "name": "Bedroom",
    "group": "Furniture & Home Decor",
    "keywords": [
      "bed",
      "mattress",
      "pillow",
      "wardrobe",
      "cupboard",
      "dressing table",
      "bedside table"
    ]
  },
  {
    "id": 10,
    "originalId": null,
    "name": "Office & Study",
    "group": "Furniture & Home Decor",
    "keywords": [
      "desk",
      "study table",
      "ergonomic chair",
      "office chair",
      "computer table",
      "workstation"
    ]
  },
  {
    "id": 11,
    "originalId": null,
    "name": "Lighting & Decor",
    "group": "Furniture & Home Decor",
    "keywords": [
      "lamp",
      "led strip",
      "bulb",
      "chandelier",
      "curtain",
      "rug",
      "carpet",
      "vase",
      "photo frame",
      "mirror",
      "cushion"
    ]
  },
  {
    "id": 12,
    "originalId": null,
    "name": "Computers & Laptops",
    "group": "Electronics & Gadgets",
    "keywords": [
      "laptop",
      "macbook",
      "desktop",
      "pc",
      "monitor",
      "cpu",
      "gpu",
      "ram",
      "ssd",
      "hard disk",
      "nvme",
      "motherboard"
    ]
  },
  {
    "id": 13,
    "originalId": null,
    "name": "Mobile & Wearables",
    "group": "Electronics & Gadgets",
    "keywords": [
      "smartphone",
      "iphone",
      "android",
      "tablet",
      "ipad",
      "smartwatch",
      "apple watch",
      "fitness band"
    ]
  },
  {
    "id": 14,
    "originalId": null,
    "name": "Audio & Entertainment",
    "group": "Electronics & Gadgets",
    "keywords": [
      "headphone",
      "earphone",
      "earbuds",
      "airpods",
      "bluetooth speaker",
      "soundbar",
      "home theater",
      "television",
      "smart tv"
    ]
  },
  {
    "id": 15,
    "originalId": null,
    "name": "Accessories & Peripherals",
    "group": "Electronics & Gadgets",
    "keywords": [
      "mouse",
      "keyboard",
      "charger",
      "power bank",
      "usb cable",
      "type-c",
      "hdmi",
      "adapter",
      "router",
      "extension box"
    ]
  },
  {
    "id": 16,
    "originalId": null,
    "name": "Men & Women Wear",
    "group": "Apparel, Clothing & Accessories",
    "keywords": [
      "shirt",
      "t-shirt",
      "tshirt",
      "jeans",
      "trousers",
      "pants",
      "dress",
      "kurti",
      "saree",
      "jacket",
      "hoodie",
      "sweater",
      "suit"
    ]
  },
  {
    "id": 17,
    "originalId": null,
    "name": "Footwear",
    "group": "Apparel, Clothing & Accessories",
    "keywords": [
      "shoes",
      "sneakers",
      "sandals",
      "slippers",
      "boots",
      "heels",
      "socks",
      "crocs",
      "bata",
      "nike",
      "adidas",
      "puma"
    ]
  },
  {
    "id": 18,
    "originalId": null,
    "name": "Accessories",
    "group": "Apparel, Clothing & Accessories",
    "keywords": [
      "watch",
      "sunglasses",
      "wallet",
      "handbag",
      "backpack",
      "luggage",
      "suitcase",
      "belt",
      "cap",
      "hat",
      "jewelry",
      "ring"
    ]
  },
  {
    "id": 19,
    "originalId": null,
    "name": "Pharmacy & Medicines",
    "group": "Healthcare, Medical & Fitness",
    "keywords": [
      "pharmacy",
      "medicals",
      "medicine",
      "tablet",
      "capsule",
      "syrup",
      "ointment",
      "band-aid",
      "paracetamol",
      "apollo pharmacy",
      "netmeds",
      "pharmeasy"
    ]
  },
  {
    "id": 20,
    "originalId": null,
    "name": "Clinical & Diagnostic",
    "group": "Healthcare, Medical & Fitness",
    "keywords": [
      "clinic",
      "hospital",
      "doctor",
      "consultation",
      "lab test",
      "blood test",
      "x-ray",
      "mri",
      "dental",
      "dentist"
    ]
  },
  {
    "id": 21,
    "originalId": null,
    "name": "Fitness & Supplements",
    "group": "Healthcare, Medical & Fitness",
    "keywords": [
      "gym",
      "fitness",
      "protein",
      "whey",
      "creatine",
      "multivitamin",
      "supplement",
      "dumbbell",
      "yoga mat",
      "resistance band"
    ]
  },
  {
    "id": 22,
    "originalId": null,
    "name": "Fuel & Automotive",
    "group": "Travel & Transportation",
    "keywords": [
      "petrol",
      "diesel",
      "cng",
      "fuel",
      "bunk",
      "hpcl",
      "bpcl",
      "iocl",
      "shell",
      "car service",
      "garage",
      "mechanic",
      "tyre",
      "puncture",
      "car wash"
    ]
  },
  {
    "id": 23,
    "originalId": null,
    "name": "Commute & Rideshare",
    "group": "Travel & Transportation",
    "keywords": [
      "ola",
      "uber",
      "rapido",
      "auto",
      "taxi",
      "cab",
      "metro",
      "train ticket",
      "irctc",
      "bus",
      "redbus"
    ]
  },
  {
    "id": 24,
    "originalId": null,
    "name": "Long Distance",
    "group": "Travel & Transportation",
    "keywords": [
      "flight",
      "indigo",
      "air india",
      "spicejet",
      "hotel booking",
      "makemytrip",
      "agoda",
      "goibibo",
      "toll gate",
      "fastag"
    ]
  },
  {
    "id": 25,
    "originalId": null,
    "name": "Streaming Platforms",
    "group": "Entertainment & Media Subscriptions",
    "keywords": [
      "netflix",
      "prime video",
      "hotstar",
      "spotify",
      "youtube premium",
      "apple music",
      "jiosaavn",
      "wynk"
    ]
  },
  {
    "id": 26,
    "originalId": null,
    "name": "Gaming",
    "group": "Entertainment & Media Subscriptions",
    "keywords": [
      "playstation",
      "ps5",
      "xbox",
      "nintendo",
      "steam",
      "epic games",
      "in-game purchase",
      "valorant",
      "pubg",
      "cod",
      "gaming console"
    ]
  },
  {
    "id": 27,
    "originalId": null,
    "name": "Leisure",
    "group": "Entertainment & Media Subscriptions",
    "keywords": [
      "movie",
      "cinema",
      "pvr",
      "inox",
      "bookmyshow",
      "concert",
      "event ticket",
      "theme park",
      "bowling",
      "arcade"
    ]
  },
  {
    "id": 28,
    "originalId": null,
    "name": "Household Utilities",
    "group": "Utilities & Recurring Bills",
    "keywords": [
      "electricity",
      "tneb",
      "eb bill",
      "water bill",
      "gas cylinder",
      "indane",
      "hp gas",
      "bharat gas",
      "maintenance charge"
    ]
  },
  {
    "id": 29,
    "originalId": null,
    "name": "Telecom & Internet",
    "group": "Utilities & Recurring Bills",
    "keywords": [
      "jio",
      "airtel",
      "vi",
      "bsnl",
      "recharge",
      "broadband",
      "wifi",
      "act fibernet",
      "fiber"
    ]
  },
  {
    "id": 30,
    "originalId": null,
    "name": "Learning & Courses",
    "group": "Education, Stationery & Subscriptions",
    "keywords": [
      "udemy",
      "coursera",
      "edx",
      "course fee",
      "tuition",
      "exam fee",
      "certification",
      "ieee",
      "coding academy"
    ]
  },
  {
    "id": 31,
    "originalId": null,
    "name": "Books & Stationery",
    "group": "Education, Stationery & Subscriptions",
    "keywords": [
      "book",
      "textbook",
      "novel",
      "notebook",
      "pen",
      "pencil",
      "marker",
      "diary",
      "calculator",
      "stapler",
      "files",
      "chart paper"
    ]
  },
  {
    "id": 32,
    "originalId": 11,
    "name": "Rent, Real Estate & Housing",
    "group": "Rent, Real Estate & Housing",
    "keywords": [
      "rent",
      "security deposit",
      "brokerage",
      "lease",
      "pg",
      "hostel",
      "maintenance",
      "maintenance fee",
      "society charge",
      "property tax",
      "land lord",
      "flat rent",
      "room rent",
      "nobroker",
      "nestaway"
    ]
  },
  {
    "id": 33,
    "originalId": null,
    "name": "Keywords",
    "group": "Rent, Real Estate & Housing",
    "keywords": [
      "rent",
      "security deposit",
      "brokerage",
      "lease",
      "pg",
      "hostel",
      "maintenance",
      "maintenance fee",
      "society charge",
      "property tax",
      "land lord",
      "flat rent",
      "room rent",
      "nobroker",
      "nestaway"
    ]
  },
  {
    "id": 34,
    "originalId": 12,
    "name": "Insurance & Financial Services",
    "group": "Insurance & Financial Services",
    "keywords": [
      "insurance",
      "premium",
      "lic",
      "hdfc ergo",
      "star health",
      "car insurance",
      "bike insurance",
      "term insurance",
      "health insurance",
      "policy bazaar",
      "digit",
      "acko",
      "processing fee",
      "bank charge",
      "interest",
      "emi",
      "loan repayment"
    ]
  },
  {
    "id": 35,
    "originalId": null,
    "name": "Keywords",
    "group": "Insurance & Financial Services",
    "keywords": [
      "insurance",
      "premium",
      "lic",
      "hdfc ergo",
      "star health",
      "car insurance",
      "bike insurance",
      "term insurance",
      "health insurance",
      "policy bazaar",
      "digit",
      "acko",
      "processing fee",
      "bank charge",
      "interest",
      "emi",
      "loan repayment"
    ]
  },
  {
    "id": 36,
    "originalId": 13,
    "name": "Taxes, Government Fees & Fines",
    "group": "Taxes, Government Fees & Fines",
    "keywords": [
      "income tax",
      "gst",
      "tds",
      "itr",
      "challan",
      "traffic fine",
      "penalty",
      "e-challan",
      "passport fee",
      "visa fee",
      "rto",
      "stamp duty",
      "registration fee",
      "property tax",
      "municipality",
      "court fee"
    ]
  },
  {
    "id": 37,
    "originalId": null,
    "name": "Keywords",
    "group": "Taxes, Government Fees & Fines",
    "keywords": [
      "income tax",
      "gst",
      "tds",
      "itr",
      "challan",
      "traffic fine",
      "penalty",
      "e-challan",
      "passport fee",
      "visa fee",
      "rto",
      "stamp duty",
      "registration fee",
      "property tax",
      "municipality",
      "court fee"
    ]
  },
  {
    "id": 38,
    "originalId": 14,
    "name": "Investments & Wealth Management",
    "group": "Investments & Wealth Management",
    "keywords": [
      "mutual fund",
      "sip",
      "stocks",
      "groww",
      "zerodha",
      "angelone",
      "upstox",
      "coin",
      "gold",
      "silver",
      "sovereign gold bond",
      "fd",
      "fixed deposit",
      "rd",
      "ppf",
      "crypto",
      "bitcoin",
      "ethereum",
      "wazirx",
      "binance",
      "t-bills"
    ]
  },
  {
    "id": 39,
    "originalId": null,
    "name": "Keywords",
    "group": "Investments & Wealth Management",
    "keywords": [
      "mutual fund",
      "sip",
      "stocks",
      "groww",
      "zerodha",
      "angelone",
      "upstox",
      "coin",
      "gold",
      "silver",
      "sovereign gold bond",
      "fd",
      "fixed deposit",
      "rd",
      "ppf",
      "crypto",
      "bitcoin",
      "ethereum",
      "wazirx",
      "binance",
      "t-bills"
    ]
  },
  {
    "id": 40,
    "originalId": 15,
    "name": "Subscriptions, Software & SaaS Tools",
    "group": "Subscriptions, Software & SaaS Tools",
    "keywords": [
      "icloud",
      "google one",
      "chatgpt",
      "openai",
      "midjourney",
      "github",
      "copilot",
      "notion",
      "canva",
      "adobe",
      "photoshop",
      "zoom",
      "slack",
      "microsoft 365",
      "domain",
      "hosting",
      "godaddy",
      "namecheap",
      "aws",
      "vercel",
      "render"
    ]
  },
  {
    "id": 41,
    "originalId": null,
    "name": "Keywords",
    "group": "Subscriptions, Software & SaaS Tools",
    "keywords": [
      "icloud",
      "google one",
      "chatgpt",
      "openai",
      "midjourney",
      "github",
      "copilot",
      "notion",
      "canva",
      "adobe",
      "photoshop",
      "zoom",
      "slack",
      "microsoft 365",
      "domain",
      "hosting",
      "godaddy",
      "namecheap",
      "aws",
      "vercel",
      "render"
    ]
  },
  {
    "id": 42,
    "originalId": 16,
    "name": "Pets & Veterinary Care",
    "group": "Pets & Veterinary Care",
    "keywords": [
      "pet food",
      "whiskas",
      "pedigree",
      "royal canin",
      "cat food",
      "dog food",
      "vet",
      "veterinary",
      "pet clinic",
      "animal hospital",
      "leash",
      "collar",
      "litter",
      "pet grooming",
      "bird food",
      "aquarium supplies"
    ]
  },
  {
    "id": 43,
    "originalId": null,
    "name": "Keywords",
    "group": "Pets & Veterinary Care",
    "keywords": [
      "pet food",
      "whiskas",
      "pedigree",
      "royal canin",
      "cat food",
      "dog food",
      "vet",
      "veterinary",
      "pet clinic",
      "animal hospital",
      "leash",
      "collar",
      "litter",
      "pet grooming",
      "bird food",
      "aquarium supplies"
    ]
  },
  {
    "id": 44,
    "originalId": 17,
    "name": "Kids, Childcare & Toys",
    "group": "Kids, Childcare & Toys",
    "keywords": [
      "diaper",
      "pampers",
      "baby food",
      "cerelac",
      "formula milk",
      "toys",
      "lego",
      "barbie",
      "board game",
      "pram",
      "stroller",
      "baby care",
      "nursery",
      "babysitter",
      "kindergarten",
      "kids apparel",
      "hamleys"
    ]
  },
  {
    "id": 45,
    "originalId": null,
    "name": "Keywords",
    "group": "Kids, Childcare & Toys",
    "keywords": [
      "diaper",
      "pampers",
      "baby food",
      "cerelac",
      "formula milk",
      "toys",
      "lego",
      "barbie",
      "board game",
      "pram",
      "stroller",
      "baby care",
      "nursery",
      "babysitter",
      "kindergarten",
      "kids apparel",
      "hamleys"
    ]
  },
  {
    "id": 46,
    "originalId": 18,
    "name": "Gifts, Donations & Charity",
    "group": "Gifts, Donations & Charity",
    "keywords": [
      "gift",
      "bouquet",
      "flowers",
      "chocolate box",
      "birthday gift",
      "wedding gift",
      "donation",
      "charity",
      "ngo",
      "pm cares",
      "relief fund",
      "temple donation",
      "church offering",
      "crowdfunding",
      "milaap",
      "ketto"
    ]
  },
  {
    "id": 47,
    "originalId": null,
    "name": "Keywords",
    "group": "Gifts, Donations & Charity",
    "keywords": [
      "gift",
      "bouquet",
      "flowers",
      "chocolate box",
      "birthday gift",
      "wedding gift",
      "donation",
      "charity",
      "ngo",
      "pm cares",
      "relief fund",
      "temple donation",
      "church offering",
      "crowdfunding",
      "milaap",
      "ketto"
    ]
  },
  {
    "id": 48,
    "originalId": 19,
    "name": "Office Supplies & Workspace",
    "group": "Office Supplies & Workspace",
    "keywords": [
      "printer paper",
      "a4 paper",
      "ink cartridge",
      "toner",
      "whiteboard",
      "marker",
      "file folder",
      "binder",
      "calculator",
      "laminator",
      "coworking",
      "we_work",
      "desk organizer",
      "paper shredder",
      "envelopes"
    ]
  },
  {
    "id": 49,
    "originalId": null,
    "name": "Keywords",
    "group": "Office Supplies & Workspace",
    "keywords": [
      "printer paper",
      "a4 paper",
      "ink cartridge",
      "toner",
      "whiteboard",
      "marker",
      "file folder",
      "binder",
      "calculator",
      "laminator",
      "coworking",
      "we_work",
      "desk organizer",
      "paper shredder",
      "envelopes"
    ]
  },
  {
    "id": 50,
    "originalId": 20,
    "name": "Hobbies, Crafts & Creative Arts",
    "group": "Hobbies, Crafts & Creative Arts",
    "keywords": [
      "canvas board",
      "acrylic paint",
      "paintbrush",
      "sketchpad",
      "wool",
      "yarn",
      "sewing kit",
      "embroidery",
      "musical strings",
      "guitar pick",
      "drumsticks",
      "clay",
      "pottery",
      "origami",
      "knitting",
      "easel"
    ]
  },
  {
    "id": 51,
    "originalId": null,
    "name": "Keywords",
    "group": "Hobbies, Crafts & Creative Arts",
    "keywords": [
      "canvas board",
      "acrylic paint",
      "paintbrush",
      "sketchpad",
      "wool",
      "yarn",
      "sewing kit",
      "embroidery",
      "musical strings",
      "guitar pick",
      "drumsticks",
      "clay",
      "pottery",
      "origami",
      "knitting",
      "easel"
    ]
  },
  {
    "id": 52,
    "originalId": 21,
    "name": "Sports, Outdoor Gear & Fitness Equipment",
    "group": "Sports, Outdoor Gear & Fitness Equipment",
    "keywords": [
      "cricket bat",
      "leather ball",
      "tennis racket",
      "badminton racket",
      "shuttlecock",
      "football",
      "basketball",
      "jersey",
      "studs",
      "skates",
      "swimming goggles",
      "swimsuit",
      "camping tent",
      "sleeping bag",
      "trekking pole"
    ]
  },
  {
    "id": 53,
    "originalId": null,
    "name": "Keywords",
    "group": "Sports, Outdoor Gear & Fitness Equipment",
    "keywords": [
      "cricket bat",
      "leather ball",
      "tennis racket",
      "badminton racket",
      "shuttlecock",
      "football",
      "basketball",
      "jersey",
      "studs",
      "skates",
      "swimming goggles",
      "swimsuit",
      "camping tent",
      "sleeping bag",
      "trekking pole"
    ]
  },
  {
    "id": 54,
    "originalId": 22,
    "name": "Personal Care, Salon & Grooming",
    "group": "Personal Care, Salon & Grooming",
    "keywords": [
      "salon",
      "haircut",
      "spa",
      "massage",
      "shaving cream",
      "razor",
      "gillette",
      "trimmer",
      "beard oil",
      "shampoo",
      "conditioner",
      "body wash",
      "soap",
      "deodorant",
      "perfume",
      "dettol",
      "handwash"
    ]
  },
  {
    "id": 55,
    "originalId": null,
    "name": "Keywords",
    "group": "Personal Care, Salon & Grooming",
    "keywords": [
      "salon",
      "haircut",
      "spa",
      "massage",
      "shaving cream",
      "razor",
      "gillette",
      "trimmer",
      "beard oil",
      "shampoo",
      "conditioner",
      "body wash",
      "soap",
      "deodorant",
      "perfume",
      "dettol",
      "handwash"
    ]
  },
  {
    "id": 56,
    "originalId": 23,
    "name": "Cosmetics, Makeup & Skincare",
    "group": "Cosmetics, Makeup & Skincare",
    "keywords": [
      "lipstick",
      "foundation",
      "eyeliner",
      "mascara",
      "blush",
      "sunscreen",
      "moisturizer",
      "serum",
      "facewash",
      "toner",
      "nail polish",
      "nykaa",
      "sephora",
      "lakme",
      "mac",
      "minimalist",
      "ordinary"
    ]
  },
  {
    "id": 57,
    "originalId": null,
    "name": "Keywords",
    "group": "Cosmetics, Makeup & Skincare",
    "keywords": [
      "lipstick",
      "foundation",
      "eyeliner",
      "mascara",
      "blush",
      "sunscreen",
      "moisturizer",
      "serum",
      "facewash",
      "toner",
      "nail polish",
      "nykaa",
      "sephora",
      "lakme",
      "mac",
      "minimalist",
      "ordinary"
    ]
  },
  {
    "id": 58,
    "originalId": 24,
    "name": "Laundry, Dry Cleaning & Housekeeping",
    "group": "Laundry, Dry Cleaning & Housekeeping",
    "keywords": [
      "laundry",
      "dry clean",
      "washing powder",
      "surf excel",
      "ariel",
      "comfort",
      "dettol liquid",
      "vim liquid",
      "harpic",
      "lizol",
      "broom",
      "mop",
      "garbage bag",
      "dhobi",
      "iron press"
    ]
  },
  {
    "id": 59,
    "originalId": null,
    "name": "Keywords",
    "group": "Laundry, Dry Cleaning & Housekeeping",
    "keywords": [
      "laundry",
      "dry clean",
      "washing powder",
      "surf excel",
      "ariel",
      "comfort",
      "dettol liquid",
      "vim liquid",
      "harpic",
      "lizol",
      "broom",
      "mop",
      "garbage bag",
      "dhobi",
      "iron press"
    ]
  },
  {
    "id": 60,
    "originalId": 25,
    "name": "Home Maintenance, Repairs & Tools",
    "group": "Home Maintenance, Repairs & Tools",
    "keywords": [
      "plumber",
      "electrician",
      "carpenter",
      "painting",
      "Asian paints",
      "hardware store",
      "screwdriver",
      "hammer",
      "drill machine",
      "nails",
      "screws",
      "glue",
      "fevicol",
      "tape",
      "padlock",
      "key duplication",
      "urban company"
    ]
  },
  {
    "id": 61,
    "originalId": null,
    "name": "Keywords",
    "group": "Home Maintenance, Repairs & Tools",
    "keywords": [
      "plumber",
      "electrician",
      "carpenter",
      "painting",
      "Asian paints",
      "hardware store",
      "screwdriver",
      "hammer",
      "drill machine",
      "nails",
      "screws",
      "glue",
      "fevicol",
      "tape",
      "padlock",
      "key duplication",
      "urban company"
    ]
  },
  {
    "id": 62,
    "originalId": 26,
    "name": "Automotive Maintenance & Spare Parts",
    "group": "Automotive Maintenance & Spare Parts",
    "keywords": [
      "engine oil",
      "castrol",
      "mobil",
      "brake pad",
      "coolant",
      "air filter",
      "battery",
      "exide",
      "amaron",
      "wiper blade",
      "helmet",
      "riding jacket",
      "chain lube",
      "alloy wheels",
      "seat cover"
    ]
  },
  {
    "id": 63,
    "originalId": null,
    "name": "Keywords",
    "group": "Automotive Maintenance & Spare Parts",
    "keywords": [
      "engine oil",
      "castrol",
      "mobil",
      "brake pad",
      "coolant",
      "air filter",
      "battery",
      "exide",
      "amaron",
      "wiper blade",
      "helmet",
      "riding jacket",
      "chain lube",
      "alloy wheels",
      "seat cover"
    ]
  },
  {
    "id": 64,
    "originalId": 27,
    "name": "Professional Services",
    "group": "Professional Services",
    "keywords": [
      "legal fee",
      "lawyer",
      "notary",
      "advocate",
      "ca fee",
      "chartered accountant",
      "consultant",
      "auditor",
      "translation service",
      "background check",
      "resume writing",
      "freelancer",
      "fiverr",
      "upwork"
    ]
  },
  {
    "id": 65,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Services",
    "keywords": [
      "legal fee",
      "lawyer",
      "notary",
      "advocate",
      "ca fee",
      "chartered accountant",
      "consultant",
      "auditor",
      "translation service",
      "background check",
      "resume writing",
      "freelancer",
      "fiverr",
      "upwork"
    ]
  },
  {
    "id": 66,
    "originalId": 28,
    "name": "Courier, Shipping & Postal Services",
    "group": "Courier, Shipping & Postal Services",
    "keywords": [
      "courier",
      "speed post",
      "dhl",
      "fedex",
      "bluedart",
      "delhivery",
      "dtdc",
      "india post",
      "shipping fee",
      "delivery charge",
      "packaging box",
      "bubble wrap",
      "cargo",
      "freight"
    ]
  },
  {
    "id": 67,
    "originalId": null,
    "name": "Keywords",
    "group": "Courier, Shipping & Postal Services",
    "keywords": [
      "courier",
      "speed post",
      "dhl",
      "fedex",
      "bluedart",
      "delhivery",
      "dtdc",
      "india post",
      "shipping fee",
      "delivery charge",
      "packaging box",
      "bubble wrap",
      "cargo",
      "freight"
    ]
  },
  {
    "id": 68,
    "originalId": 29,
    "name": "Events, Celebrations & Party Supplies",
    "group": "Events, Celebrations & Party Supplies",
    "keywords": [
      "party props",
      "balloons",
      "birthday cake",
      "catering",
      "tent house",
      "sound system",
      "dj",
      "event planner",
      "wedding hall",
      "invitation card",
      "crackers",
      "confetti",
      "lighting decoration"
    ]
  },
  {
    "id": 69,
    "originalId": null,
    "name": "Keywords",
    "group": "Events, Celebrations & Party Supplies",
    "keywords": [
      "party props",
      "balloons",
      "birthday cake",
      "catering",
      "tent house",
      "sound system",
      "dj",
      "event planner",
      "wedding hall",
      "invitation card",
      "crackers",
      "confetti",
      "lighting decoration"
    ]
  },
  {
    "id": 70,
    "originalId": 30,
    "name": "Photography, Videography & Audio Gear",
    "group": "Photography, Videography & Audio Gear",
    "keywords": [
      "camera",
      "lens",
      "dslr",
      "mirrorless",
      "sony",
      "canon",
      "nikon",
      "tripod",
      "ring light",
      "gimbal",
      "softbox",
      "sd card",
      "microphone",
      "rode",
      "pop filter",
      "capture card"
    ]
  },
  {
    "id": 71,
    "originalId": null,
    "name": "Keywords",
    "group": "Photography, Videography & Audio Gear",
    "keywords": [
      "camera",
      "lens",
      "dslr",
      "mirrorless",
      "sony",
      "canon",
      "nikon",
      "tripod",
      "ring light",
      "gimbal",
      "softbox",
      "sd card",
      "microphone",
      "rode",
      "pop filter",
      "capture card"
    ]
  },
  {
    "id": 72,
    "originalId": 31,
    "name": "Jewelry, Watches & Precious Metals",
    "group": "Jewelry, Watches & Precious Metals",
    "keywords": [
      "gold ring",
      "diamond",
      "platinum",
      "kalyan jewellers",
      "malabar",
      "joyalukkas",
      "chain",
      "bracelet",
      "earrings",
      "mangalsutra",
      "silver coin",
      "pendant",
      "hallmark",
      "kundan",
      "titan",
      "casio",
      "g-shock"
    ]
  },
  {
    "id": 73,
    "originalId": null,
    "name": "Keywords",
    "group": "Jewelry, Watches & Precious Metals",
    "keywords": [
      "gold ring",
      "diamond",
      "platinum",
      "kalyan jewellers",
      "malabar",
      "joyalukkas",
      "chain",
      "bracelet",
      "earrings",
      "mangalsutra",
      "silver coin",
      "pendant",
      "hallmark",
      "kundan",
      "titan",
      "casio",
      "g-shock"
    ]
  },
  {
    "id": 74,
    "originalId": 32,
    "name": "Religious, Spiritual & Pooja Needs",
    "group": "Religious, Spiritual & Pooja Needs",
    "keywords": [
      "pooja",
      "agarbatti",
      "incense sticks",
      "camphor",
      "diya",
      "idol",
      "rudraksha",
      "havan samagri",
      "pandit fee",
      "temple ticket",
      "offering",
      "dhoop",
      "chandan",
      "kumkum",
      "rosary",
      "yantra"
    ]
  },
  {
    "id": 75,
    "originalId": null,
    "name": "Keywords",
    "group": "Religious, Spiritual & Pooja Needs",
    "keywords": [
      "pooja",
      "agarbatti",
      "incense sticks",
      "camphor",
      "diya",
      "idol",
      "rudraksha",
      "havan samagri",
      "pandit fee",
      "temple ticket",
      "offering",
      "dhoop",
      "chandan",
      "kumkum",
      "rosary",
      "yantra"
    ]
  },
  {
    "id": 76,
    "originalId": 33,
    "name": "Opticals, Eye Care & Vision",
    "group": "Opticals, Eye Care & Vision",
    "keywords": [
      "spectacles",
      "eyeglasses",
      "contact lenses",
      "lenskart",
      "bausch & lomb",
      "eye testing",
      "frames",
      "reading glasses",
      "lens solution",
      "ray-ban",
      "anti-glare",
      "eye drops"
    ]
  },
  {
    "id": 77,
    "originalId": null,
    "name": "Keywords",
    "group": "Opticals, Eye Care & Vision",
    "keywords": [
      "spectacles",
      "eyeglasses",
      "contact lenses",
      "lenskart",
      "bausch & lomb",
      "eye testing",
      "frames",
      "reading glasses",
      "lens solution",
      "ray-ban",
      "anti-glare",
      "eye drops"
    ]
  },
  {
    "id": 78,
    "originalId": 34,
    "name": "Gardening, Plants & Landscaping",
    "group": "Gardening, Plants & Landscaping",
    "keywords": [
      "plant",
      "nursery",
      "seeds",
      "pot",
      "soil",
      "manure",
      "fertilizer",
      "watering can",
      "trowel",
      "pruner",
      "bonsai",
      "indoor plant",
      "cocopeat",
      "sapling",
      "garden hose",
      "lawn mower"
    ]
  },
  {
    "id": 79,
    "originalId": null,
    "name": "Keywords",
    "group": "Gardening, Plants & Landscaping",
    "keywords": [
      "plant",
      "nursery",
      "seeds",
      "pot",
      "soil",
      "manure",
      "fertilizer",
      "watering can",
      "trowel",
      "pruner",
      "bonsai",
      "indoor plant",
      "cocopeat",
      "sapling",
      "garden hose",
      "lawn mower"
    ]
  },
  {
    "id": 80,
    "originalId": 35,
    "name": "Smart Home & IoT Devices",
    "group": "Smart Home & IoT Devices",
    "keywords": [
      "amazon echo",
      "alexa",
      "google nest",
      "smart bulb",
      "smart plug",
      "cctv",
      "security camera",
      "philips hue",
      "smart lock",
      "video doorbell",
      "wipro smart",
      "wifi camera",
      "sensor"
    ]
  },
  {
    "id": 81,
    "originalId": null,
    "name": "Keywords",
    "group": "Smart Home & IoT Devices",
    "keywords": [
      "amazon echo",
      "alexa",
      "google nest",
      "smart bulb",
      "smart plug",
      "cctv",
      "security camera",
      "philips hue",
      "smart lock",
      "video doorbell",
      "wipro smart",
      "wifi camera",
      "sensor"
    ]
  },
  {
    "id": 82,
    "originalId": 36,
    "name": "Musical Instruments & Audio Production",
    "group": "Musical Instruments & Audio Production",
    "keywords": [
      "acoustic guitar",
      "electric guitar",
      "yamaha keyboard",
      "drum kit",
      "violin",
      "flute",
      "synthesizer",
      "midi controller",
      "capo",
      "guitar strings",
      "plectrum",
      "amplifier",
      "casio keyboard",
      "metronome"
    ]
  },
  {
    "id": 83,
    "originalId": null,
    "name": "Keywords",
    "group": "Musical Instruments & Audio Production",
    "keywords": [
      "acoustic guitar",
      "electric guitar",
      "yamaha keyboard",
      "drum kit",
      "violin",
      "flute",
      "synthesizer",
      "midi controller",
      "capo",
      "guitar strings",
      "plectrum",
      "amplifier",
      "casio keyboard",
      "metronome"
    ]
  },
  {
    "id": 84,
    "originalId": 37,
    "name": "Bicycles & Non-Motorized Transport",
    "group": "Bicycles & Non-Motorized Transport",
    "keywords": [
      "bicycle",
      "decathlon",
      "gear cycle",
      "bmx",
      "mtb",
      "cycle repair",
      "air pump",
      "bicycle helmet",
      "chain lube",
      "bell",
      "puncture kit",
      "skateboard",
      "roller skates"
    ]
  },
  {
    "id": 85,
    "originalId": null,
    "name": "Keywords",
    "group": "Bicycles & Non-Motorized Transport",
    "keywords": [
      "bicycle",
      "decathlon",
      "gear cycle",
      "bmx",
      "mtb",
      "cycle repair",
      "air pump",
      "bicycle helmet",
      "chain lube",
      "bell",
      "puncture kit",
      "skateboard",
      "roller skates"
    ]
  },
  {
    "id": 86,
    "originalId": 38,
    "name": "Software Licenses & Digital Goods (One-Time)",
    "group": "Software Licenses & Digital Goods (One-Time)",
    "keywords": [
      "windows 11 key",
      "ms office lifetime",
      "antivirus",
      "kaspersky",
      "mcafee",
      "bitdefender",
      "final cut pro",
      "logic pro",
      "lifetime deal",
      "appsumo",
      "asset pack",
      "3d model"
    ]
  },
  {
    "id": 87,
    "originalId": null,
    "name": "Keywords",
    "group": "Software Licenses & Digital Goods (One-Time)",
    "keywords": [
      "windows 11 key",
      "ms office lifetime",
      "antivirus",
      "kaspersky",
      "mcafee",
      "bitdefender",
      "final cut pro",
      "logic pro",
      "lifetime deal",
      "appsumo",
      "asset pack",
      "3d model"
    ]
  },
  {
    "id": 88,
    "originalId": 39,
    "name": "Gaming Microtransactions & Virtual Goods",
    "group": "Gaming Microtransactions & Virtual Goods",
    "keywords": [
      "v-bucks",
      "robux",
      "pubg uc",
      "steam wallet",
      "valorant points",
      "in-app purchase",
      "gacha",
      "weapon skin",
      "battle pass",
      "fifa points",
      "apex coins",
      "riot points"
    ]
  },
  {
    "id": 89,
    "originalId": null,
    "name": "Keywords",
    "group": "Gaming Microtransactions & Virtual Goods",
    "keywords": [
      "v-bucks",
      "robux",
      "pubg uc",
      "steam wallet",
      "valorant points",
      "in-app purchase",
      "gacha",
      "weapon skin",
      "battle pass",
      "fifa points",
      "apex coins",
      "riot points"
    ]
  },
  {
    "id": 90,
    "originalId": 40,
    "name": "Dating & Matrimony Services",
    "group": "Dating & Matrimony Services",
    "keywords": [
      "tinder plus",
      "bumble premium",
      "hinge",
      "shaadi.com",
      "bharat matrimony",
      "jeevansathi",
      "tamil matrimony",
      "elite matrimony",
      "dating app",
      "subscription upgrade"
    ]
  },
  {
    "id": 91,
    "originalId": null,
    "name": "Keywords",
    "group": "Dating & Matrimony Services",
    "keywords": [
      "tinder plus",
      "bumble premium",
      "hinge",
      "shaadi.com",
      "bharat matrimony",
      "jeevansathi",
      "tamil matrimony",
      "elite matrimony",
      "dating app",
      "subscription upgrade"
    ]
  },
  {
    "id": 92,
    "originalId": 41,
    "name": "Art, Antiques & Collectibles",
    "group": "Art, Antiques & Collectibles",
    "keywords": [
      "painting",
      "sculpture",
      "antique",
      "trading cards",
      "pokemon cards",
      "stamps",
      "rare coin",
      "vintage",
      "art gallery",
      "auction",
      "canvas art",
      "miniature",
      "hot wheels"
    ]
  },
  {
    "id": 93,
    "originalId": null,
    "name": "Keywords",
    "group": "Art, Antiques & Collectibles",
    "keywords": [
      "painting",
      "sculpture",
      "antique",
      "trading cards",
      "pokemon cards",
      "stamps",
      "rare coin",
      "vintage",
      "art gallery",
      "auction",
      "canvas art",
      "miniature",
      "hot wheels"
    ]
  },
  {
    "id": 94,
    "originalId": 42,
    "name": "Safety & Security Equipment",
    "group": "Safety & Security Equipment",
    "keywords": [
      "padlock",
      "godrej lock",
      "door lock",
      "fire extinguisher",
      "smoke detector",
      "safe",
      "locker rent",
      "pepper spray",
      "alarm system",
      "safety boots",
      "high-vis jacket"
    ]
  },
  {
    "id": 95,
    "originalId": null,
    "name": "Keywords",
    "group": "Safety & Security Equipment",
    "keywords": [
      "padlock",
      "godrej lock",
      "door lock",
      "fire extinguisher",
      "smoke detector",
      "safe",
      "locker rent",
      "pepper spray",
      "alarm system",
      "safety boots",
      "high-vis jacket"
    ]
  },
  {
    "id": 96,
    "originalId": 43,
    "name": "Astrology, Occult & Tarot",
    "group": "Astrology, Occult & Tarot",
    "keywords": [
      "astrology",
      "horoscope",
      "kundali",
      "tarot",
      "vastu",
      "gemstone",
      "birthstone",
      "numerology",
      "palmistry",
      "psychic reading",
      "crystals",
      "healing stones"
    ]
  },
  {
    "id": 97,
    "originalId": null,
    "name": "Keywords",
    "group": "Astrology, Occult & Tarot",
    "keywords": [
      "astrology",
      "horoscope",
      "kundali",
      "tarot",
      "vastu",
      "gemstone",
      "birthstone",
      "numerology",
      "palmistry",
      "psychic reading",
      "crystals",
      "healing stones"
    ]
  },
  {
    "id": 98,
    "originalId": 44,
    "name": "Tattoo, Piercing & Body Art",
    "group": "Tattoo, Piercing & Body Art",
    "keywords": [
      "tattoo studio",
      "ink",
      "body piercing",
      "ear piercing",
      "aftercare lotion",
      "temporary tattoo",
      "henna",
      "mehendi",
      "piercing stud"
    ]
  },
  {
    "id": 99,
    "originalId": null,
    "name": "Keywords",
    "group": "Tattoo, Piercing & Body Art",
    "keywords": [
      "tattoo studio",
      "ink",
      "body piercing",
      "ear piercing",
      "aftercare lotion",
      "temporary tattoo",
      "henna",
      "mehendi",
      "piercing stud"
    ]
  },
  {
    "id": 100,
    "originalId": 45,
    "name": "Fantasy Sports, Betting & Gaming",
    "group": "Fantasy Sports, Betting & Gaming",
    "keywords": [
      "dream11",
      "mpl",
      "my11circle",
      "rummy",
      "poker",
      "lottery ticket",
      "casino",
      "betting",
      "stake",
      "horse racing",
      "fantasy league"
    ]
  },
  {
    "id": 101,
    "originalId": null,
    "name": "Keywords",
    "group": "Fantasy Sports, Betting & Gaming",
    "keywords": [
      "dream11",
      "mpl",
      "my11circle",
      "rummy",
      "poker",
      "lottery ticket",
      "casino",
      "betting",
      "stake",
      "horse racing",
      "fantasy league"
    ]
  },
  {
    "id": 102,
    "originalId": 46,
    "name": "Extreme Weather & Rain Gear",
    "group": "Extreme Weather & Rain Gear",
    "keywords": [
      "raincoat",
      "umbrella",
      "thermals",
      "windcheater",
      "snow boots",
      "gloves",
      "muffler",
      "beanie",
      "winter jacket",
      "waterproof bag",
      "ponchos"
    ]
  },
  {
    "id": 103,
    "originalId": null,
    "name": "Keywords",
    "group": "Extreme Weather & Rain Gear",
    "keywords": [
      "raincoat",
      "umbrella",
      "thermals",
      "windcheater",
      "snow boots",
      "gloves",
      "muffler",
      "beanie",
      "winter jacket",
      "waterproof bag",
      "ponchos"
    ]
  },
  {
    "id": 104,
    "originalId": 47,
    "name": "Agriculture & Farming Supplies",
    "group": "Agriculture & Farming Supplies",
    "keywords": [
      "tractor part",
      "pesticide",
      "bulk seeds",
      "irrigation pipe",
      "cattle feed",
      "farming tools",
      "sickle",
      "harvesting",
      "livestock",
      "poultry feed"
    ]
  },
  {
    "id": 105,
    "originalId": null,
    "name": "Keywords",
    "group": "Agriculture & Farming Supplies",
    "keywords": [
      "tractor part",
      "pesticide",
      "bulk seeds",
      "irrigation pipe",
      "cattle feed",
      "farming tools",
      "sickle",
      "harvesting",
      "livestock",
      "poultry feed"
    ]
  },
  {
    "id": 106,
    "originalId": 48,
    "name": "Specialized Diet & Vegan Foods",
    "group": "Specialized Diet & Vegan Foods",
    "keywords": [
      "keto",
      "gluten-free",
      "vegan cheese",
      "almond milk",
      "oat milk",
      "stevia",
      "quinoa",
      "chia seeds",
      "matcha",
      "kombucha",
      "tofu",
      "soy milk",
      "protein bar"
    ]
  },
  {
    "id": 107,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Diet & Vegan Foods",
    "keywords": [
      "keto",
      "gluten-free",
      "vegan cheese",
      "almond milk",
      "oat milk",
      "stevia",
      "quinoa",
      "chia seeds",
      "matcha",
      "kombucha",
      "tofu",
      "soy milk",
      "protein bar"
    ]
  },
  {
    "id": 108,
    "originalId": 49,
    "name": "Water Sports & Marine Gear",
    "group": "Water Sports & Marine Gear",
    "keywords": [
      "swimwear",
      "swimming goggles",
      "kayak",
      "paddleboard",
      "scuba dive",
      "snorkeling",
      "life jacket",
      "surfboard",
      "boat rental",
      "fishing rod",
      "bait"
    ]
  },
  {
    "id": 109,
    "originalId": null,
    "name": "Keywords",
    "group": "Water Sports & Marine Gear",
    "keywords": [
      "swimwear",
      "swimming goggles",
      "kayak",
      "paddleboard",
      "scuba dive",
      "snorkeling",
      "life jacket",
      "surfboard",
      "boat rental",
      "fishing rod",
      "bait"
    ]
  },
  {
    "id": 110,
    "originalId": 50,
    "name": "Event & Exhibition Tickets",
    "group": "Event & Exhibition Tickets",
    "keywords": [
      "expo",
      "comic con",
      "trade fair",
      "museum ticket",
      "planetarium",
      "art exhibition",
      "marathon entry",
      "marathon bib",
      "tech conference",
      "hackathon fee",
      "gallery ticket"
    ]
  },
  {
    "id": 111,
    "originalId": null,
    "name": "Keywords",
    "group": "Event & Exhibition Tickets",
    "keywords": [
      "expo",
      "comic con",
      "trade fair",
      "museum ticket",
      "planetarium",
      "art exhibition",
      "marathon entry",
      "marathon bib",
      "tech conference",
      "hackathon fee",
      "gallery ticket"
    ]
  },
  {
    "id": 112,
    "originalId": 51,
    "name": "Cloud Compute, APIs & Developer SaaS",
    "group": "Cloud Compute, APIs & Developer SaaS",
    "keywords": [
      "aws ec2",
      "google cloud",
      "firebase blaze",
      "azure",
      "twilio",
      "sendgrid",
      "openai api",
      "anthropic api",
      "digitalocean",
      "vercel pro",
      "github copilot",
      "auth0",
      "render",
      "heroku",
      "domain renewal"
    ]
  },
  {
    "id": 113,
    "originalId": null,
    "name": "Keywords",
    "group": "Cloud Compute, APIs & Developer SaaS",
    "keywords": [
      "aws ec2",
      "google cloud",
      "firebase blaze",
      "azure",
      "twilio",
      "sendgrid",
      "openai api",
      "anthropic api",
      "digitalocean",
      "vercel pro",
      "github copilot",
      "auth0",
      "render",
      "heroku",
      "domain renewal"
    ]
  },
  {
    "id": 114,
    "originalId": 52,
    "name": "Cryptocurrency & Web3 Infrastructure",
    "group": "Cryptocurrency & Web3 Infrastructure",
    "keywords": [
      "gas fee",
      "minting fee",
      "cold wallet",
      "ledger nano",
      "trezor",
      "metamask",
      "crypto exchange",
      "nft purchase",
      "staking fee",
      "node hosting",
      "defi protocol",
      "smart contract deployment"
    ]
  },
  {
    "id": 115,
    "originalId": null,
    "name": "Keywords",
    "group": "Cryptocurrency & Web3 Infrastructure",
    "keywords": [
      "gas fee",
      "minting fee",
      "cold wallet",
      "ledger nano",
      "trezor",
      "metamask",
      "crypto exchange",
      "nft purchase",
      "staking fee",
      "node hosting",
      "defi protocol",
      "smart contract deployment"
    ]
  },
  {
    "id": 116,
    "originalId": 53,
    "name": "E-Commerce Seller Fees & Payment Gateways",
    "group": "E-Commerce Seller Fees & Payment Gateways",
    "keywords": [
      "amazon seller fee",
      "shopify plan",
      "etsy fee",
      "razorpay commission",
      "stripe fee",
      "payment gateway",
      "fulfillment fee",
      "return shipping",
      "pos machine rental",
      "merchant charge"
    ]
  },
  {
    "id": 117,
    "originalId": null,
    "name": "Keywords",
    "group": "E-Commerce Seller Fees & Payment Gateways",
    "keywords": [
      "amazon seller fee",
      "shopify plan",
      "etsy fee",
      "razorpay commission",
      "stripe fee",
      "payment gateway",
      "fulfillment fee",
      "return shipping",
      "pos machine rental",
      "merchant charge"
    ]
  },
  {
    "id": 118,
    "originalId": 54,
    "name": "Visas, Immigration & International Travel",
    "group": "Visas, Immigration & International Travel",
    "keywords": [
      "vfs global",
      "visa application",
      "immigration lawyer",
      "ielts fee",
      "toefl fee",
      "passport renewal",
      "biometrics fee",
      "pr application",
      "forex exchange",
      "western union",
      "moneygram"
    ]
  },
  {
    "id": 119,
    "originalId": null,
    "name": "Keywords",
    "group": "Visas, Immigration & International Travel",
    "keywords": [
      "vfs global",
      "visa application",
      "immigration lawyer",
      "ielts fee",
      "toefl fee",
      "passport renewal",
      "biometrics fee",
      "pr application",
      "forex exchange",
      "western union",
      "moneygram"
    ]
  },
  {
    "id": 120,
    "originalId": 55,
    "name": "Tobacco, Pan & Adult Consumables",
    "group": "Tobacco, Pan & Adult Consumables",
    "keywords": [
      "cigarette",
      "cigar",
      "pan masala",
      "gutkha",
      "vape",
      "e-cig",
      "zippo",
      "lighter",
      "tobacco",
      "hookah",
      "beedi",
      "rolling paper",
      "ashtray",
      "paan shop"
    ]
  },
  {
    "id": 121,
    "originalId": null,
    "name": "Keywords",
    "group": "Tobacco, Pan & Adult Consumables",
    "keywords": [
      "cigarette",
      "cigar",
      "pan masala",
      "gutkha",
      "vape",
      "e-cig",
      "zippo",
      "lighter",
      "tobacco",
      "hookah",
      "beedi",
      "rolling paper",
      "ashtray",
      "paan shop"
    ]
  },
  {
    "id": 122,
    "originalId": 56,
    "name": "Legal Escrow, Settlements & Penalties",
    "group": "Legal Escrow, Settlements & Penalties",
    "keywords": [
      "escrow",
      "settlement",
      "bail bond",
      "court fine",
      "alimony",
      "child support",
      "notary public",
      "arbitration fee",
      "retainer fee",
      "dispute resolution",
      "traffic challan"
    ]
  },
  {
    "id": 123,
    "originalId": null,
    "name": "Keywords",
    "group": "Legal Escrow, Settlements & Penalties",
    "keywords": [
      "escrow",
      "settlement",
      "bail bond",
      "court fine",
      "alimony",
      "child support",
      "notary public",
      "arbitration fee",
      "retainer fee",
      "dispute resolution",
      "traffic challan"
    ]
  },
  {
    "id": 124,
    "originalId": 57,
    "name": "Specialized Medical & Prosthetics",
    "group": "Specialized Medical & Prosthetics",
    "keywords": [
      "hearing aid",
      "pacemaker",
      "wheelchair",
      "crutches",
      "prosthetic limb",
      "cpap machine",
      "orthopedic shoes",
      "oxygen cylinder",
      "nebulizer",
      "adult diapers",
      "walking stick"
    ]
  },
  {
    "id": 125,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Medical & Prosthetics",
    "keywords": [
      "hearing aid",
      "pacemaker",
      "wheelchair",
      "crutches",
      "prosthetic limb",
      "cpap machine",
      "orthopedic shoes",
      "oxygen cylinder",
      "nebulizer",
      "adult diapers",
      "walking stick"
    ]
  },
  {
    "id": 126,
    "originalId": 58,
    "name": "Storage Units, Warehousing & Packing",
    "group": "Storage Units, Warehousing & Packing",
    "keywords": [
      "public storage",
      "locker rental",
      "warehouse space",
      "pod rental",
      "cold storage",
      "storage container",
      "packers and movers",
      "bubble wrap roll",
      "packing tape",
      "moving truck"
    ]
  },
  {
    "id": 127,
    "originalId": null,
    "name": "Keywords",
    "group": "Storage Units, Warehousing & Packing",
    "keywords": [
      "public storage",
      "locker rental",
      "warehouse space",
      "pod rental",
      "cold storage",
      "storage container",
      "packers and movers",
      "bubble wrap roll",
      "packing tape",
      "moving truck"
    ]
  },
  {
    "id": 128,
    "originalId": 59,
    "name": "Patents, Trademarks & Intellectual Property",
    "group": "Patents, Trademarks & Intellectual Property",
    "keywords": [
      "trademark registry",
      "patent filing",
      "copyright registration",
      "ip lawyer",
      "design patent",
      "licensing fee",
      "royalty payment",
      "nda drafting",
      "legal stamping"
    ]
  },
  {
    "id": 129,
    "originalId": null,
    "name": "Keywords",
    "group": "Patents, Trademarks & Intellectual Property",
    "keywords": [
      "trademark registry",
      "patent filing",
      "copyright registration",
      "ip lawyer",
      "design patent",
      "licensing fee",
      "royalty payment",
      "nda drafting",
      "legal stamping"
    ]
  },
  {
    "id": 130,
    "originalId": 60,
    "name": "Weapons, Ammunition & Hunting (Regulated Sports)",
    "group": "Weapons, Ammunition & Hunting (Regulated Sports)",
    "keywords": [
      "ammunition",
      "rifle scope",
      "holsters",
      "archery bow",
      "arrows",
      "hunting knife",
      "shooting range",
      "gun safe",
      "cleaning kit",
      "air rifle",
      "pellet gun"
    ]
  },
  {
    "id": 131,
    "originalId": null,
    "name": "Keywords",
    "group": "Weapons, Ammunition & Hunting (Regulated Sports)",
    "keywords": [
      "ammunition",
      "rifle scope",
      "holsters",
      "archery bow",
      "arrows",
      "hunting knife",
      "shooting range",
      "gun safe",
      "cleaning kit",
      "air rifle",
      "pellet gun"
    ]
  },
  {
    "id": 132,
    "originalId": 61,
    "name": "Specialized Collectibles & Numismatics",
    "group": "Specialized Collectibles & Numismatics",
    "keywords": [
      "numismatic",
      "rare coins",
      "bullion",
      "action figures",
      "comic books",
      "funko pop",
      "trading pins",
      "memorabilia",
      "autographed poster",
      "vintage stamps",
      "scale models"
    ]
  },
  {
    "id": 133,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Collectibles & Numismatics",
    "keywords": [
      "numismatic",
      "rare coins",
      "bullion",
      "action figures",
      "comic books",
      "funko pop",
      "trading pins",
      "memorabilia",
      "autographed poster",
      "vintage stamps",
      "scale models"
    ]
  },
  {
    "id": 134,
    "originalId": 62,
    "name": "Funeral, Cemetery & Bereavement",
    "group": "Funeral, Cemetery & Bereavement",
    "keywords": [
      "funeral home",
      "cremation",
      "coffin",
      "casket",
      "urn",
      "wreath",
      "burial plot",
      "headstone",
      "obituary",
      "memorial service",
      "mortuary",
      "death certificate fee"
    ]
  },
  {
    "id": 135,
    "originalId": null,
    "name": "Keywords",
    "group": "Funeral, Cemetery & Bereavement",
    "keywords": [
      "funeral home",
      "cremation",
      "coffin",
      "casket",
      "urn",
      "wreath",
      "burial plot",
      "headstone",
      "obituary",
      "memorial service",
      "mortuary",
      "death certificate fee"
    ]
  },
  {
    "id": 136,
    "originalId": 63,
    "name": "Lotteries, Scratch Cards & Sweepstakes",
    "group": "Lotteries, Scratch Cards & Sweepstakes",
    "keywords": [
      "scratch card",
      "state lottery",
      "raffle ticket",
      "sweepstakes",
      "bingo",
      "bumper prize",
      "lottery ticket",
      "lucky draw entry",
      "prize pool"
    ]
  },
  {
    "id": 137,
    "originalId": null,
    "name": "Keywords",
    "group": "Lotteries, Scratch Cards & Sweepstakes",
    "keywords": [
      "scratch card",
      "state lottery",
      "raffle ticket",
      "sweepstakes",
      "bingo",
      "bumper prize",
      "lottery ticket",
      "lucky draw entry",
      "prize pool"
    ]
  },
  {
    "id": 138,
    "originalId": 64,
    "name": "Astrophysics, Telescopes & Optics",
    "group": "Astrophysics, Telescopes & Optics",
    "keywords": [
      "telescope",
      "binoculars",
      "night vision",
      "astrophotography",
      "observatory ticket",
      "star tracker",
      "microscope",
      "optical lens",
      "magnifying glass",
      "laser pointer"
    ]
  },
  {
    "id": 139,
    "originalId": null,
    "name": "Keywords",
    "group": "Astrophysics, Telescopes & Optics",
    "keywords": [
      "telescope",
      "binoculars",
      "night vision",
      "astrophotography",
      "observatory ticket",
      "star tracker",
      "microscope",
      "optical lens",
      "magnifying glass",
      "laser pointer"
    ]
  },
  {
    "id": 140,
    "originalId": 65,
    "name": "RV, Caravans & Mobile Homes",
    "group": "RV, Caravans & Mobile Homes",
    "keywords": [
      "rv park",
      "caravan rental",
      "campervan",
      "motorhome",
      "dump station",
      "rv awning",
      "towing hitch",
      "12v battery",
      "portable generator",
      "camper tent"
    ]
  },
  {
    "id": 141,
    "originalId": null,
    "name": "Keywords",
    "group": "RV, Caravans & Mobile Homes",
    "keywords": [
      "rv park",
      "caravan rental",
      "campervan",
      "motorhome",
      "dump station",
      "rv awning",
      "towing hitch",
      "12v battery",
      "portable generator",
      "camper tent"
    ]
  },
  {
    "id": 142,
    "originalId": 66,
    "name": "B2B Procurement & Wholesale Materials",
    "group": "B2B Procurement & Wholesale Materials",
    "keywords": [
      "indiamart",
      "alibaba",
      "wholesale",
      "raw steel",
      "lumber",
      "textiles in bulk",
      "plastic granules",
      "heavy machinery",
      "forklift rental",
      "bulk cement",
      "tmt bars"
    ]
  },
  {
    "id": 143,
    "originalId": null,
    "name": "Keywords",
    "group": "B2B Procurement & Wholesale Materials",
    "keywords": [
      "indiamart",
      "alibaba",
      "wholesale",
      "raw steel",
      "lumber",
      "textiles in bulk",
      "plastic granules",
      "heavy machinery",
      "forklift rental",
      "bulk cement",
      "tmt bars"
    ]
  },
  {
    "id": 144,
    "originalId": 67,
    "name": "Political, Union & Community Contributions",
    "group": "Political, Union & Community Contributions",
    "keywords": [
      "pac donation",
      "union dues",
      "political campaign",
      "trade union",
      "lobbyist fee",
      "political party fund",
      "rotary club",
      "lions club membership",
      "community hall rent"
    ]
  },
  {
    "id": 145,
    "originalId": null,
    "name": "Keywords",
    "group": "Political, Union & Community Contributions",
    "keywords": [
      "pac donation",
      "union dues",
      "political campaign",
      "trade union",
      "lobbyist fee",
      "political party fund",
      "rotary club",
      "lions club membership",
      "community hall rent"
    ]
  },
  {
    "id": 146,
    "originalId": 68,
    "name": "Adult Entertainment & Novelties",
    "group": "Adult Entertainment & Novelties",
    "keywords": [
      "onlyfans",
      "patreon",
      "adult toys",
      "lingerie",
      "novelty store",
      "strip club",
      "escort service",
      "cam site",
      "age-restricted content"
    ]
  },
  {
    "id": 147,
    "originalId": null,
    "name": "Keywords",
    "group": "Adult Entertainment & Novelties",
    "keywords": [
      "onlyfans",
      "patreon",
      "adult toys",
      "lingerie",
      "novelty store",
      "strip club",
      "escort service",
      "cam site",
      "age-restricted content"
    ]
  },
  {
    "id": 148,
    "originalId": 69,
    "name": "Aviation & Marine Maintenance",
    "group": "Aviation & Marine Maintenance",
    "keywords": [
      "boat repair",
      "aviation fuel",
      "hangar fee",
      "marina slip",
      "propeller",
      "sailcloth",
      "aircraft maintenance",
      "jet ski repair",
      "outboard motor",
      "dock fee"
    ]
  },
  {
    "id": 149,
    "originalId": null,
    "name": "Keywords",
    "group": "Aviation & Marine Maintenance",
    "keywords": [
      "boat repair",
      "aviation fuel",
      "hangar fee",
      "marina slip",
      "propeller",
      "sailcloth",
      "aircraft maintenance",
      "jet ski repair",
      "outboard motor",
      "dock fee"
    ]
  },
  {
    "id": 150,
    "originalId": 70,
    "name": "Miscellaneous & Unclassified Adjustments",
    "group": "Miscellaneous & Unclassified Adjustments",
    "keywords": [
      "petty cash",
      "rounding off",
      "adjustment",
      "unknown charge",
      "dispute reversal",
      "cashback",
      "atm withdrawal",
      "account fee",
      "ledger correction",
      "undefined"
    ]
  },
  {
    "id": 151,
    "originalId": null,
    "name": "Keywords",
    "group": "Miscellaneous & Unclassified Adjustments",
    "keywords": [
      "petty cash",
      "rounding off",
      "adjustment",
      "unknown charge",
      "dispute reversal",
      "cashback",
      "atm withdrawal",
      "account fee",
      "ledger correction",
      "undefined"
    ]
  },
  {
    "id": 152,
    "originalId": 71,
    "name": "Government Services, Public Records & Civic Fees",
    "group": "Government Services, Public Records & Civic Fees",
    "keywords": [
      "birth certificate",
      "marriage certificate",
      "land registration",
      "rti application",
      "public notary",
      "court summons fee",
      "municipal fine",
      "tax lien clearance",
      "civic duty fee",
      "land survey"
    ]
  },
  {
    "id": 153,
    "originalId": null,
    "name": "Keywords",
    "group": "Government Services, Public Records & Civic Fees",
    "keywords": [
      "birth certificate",
      "marriage certificate",
      "land registration",
      "rti application",
      "public notary",
      "court summons fee",
      "municipal fine",
      "tax lien clearance",
      "civic duty fee",
      "land survey"
    ]
  },
  {
    "id": 154,
    "originalId": 72,
    "name": "Environmental, Recycling & Waste Management",
    "group": "Environmental, Recycling & Waste Management",
    "keywords": [
      "scrap sale",
      "junk removal",
      "e-waste recycling",
      "recycling bin fee",
      "shredding service",
      "hazardous waste disposal",
      "compost bin",
      "plastic recycling",
      "scrap metal",
      "carbon offset credit"
    ]
  },
  {
    "id": 155,
    "originalId": null,
    "name": "Keywords",
    "group": "Environmental, Recycling & Waste Management",
    "keywords": [
      "scrap sale",
      "junk removal",
      "e-waste recycling",
      "recycling bin fee",
      "shredding service",
      "hazardous waste disposal",
      "compost bin",
      "plastic recycling",
      "scrap metal",
      "carbon offset credit"
    ]
  },
  {
    "id": 156,
    "originalId": 73,
    "name": "Physical Arcade, Theme Parks & VR Centers",
    "group": "Physical Arcade, Theme Parks & VR Centers",
    "keywords": [
      "laser tag",
      "smash room",
      "escape room ticket",
      "vr park",
      "trampoline park",
      "bowling alley",
      "arcade tokens",
      "timezone",
      "fun city",
      "roller coaster pass",
      "carnival ticket"
    ]
  },
  {
    "id": 157,
    "originalId": null,
    "name": "Keywords",
    "group": "Physical Arcade, Theme Parks & VR Centers",
    "keywords": [
      "laser tag",
      "smash room",
      "escape room ticket",
      "vr park",
      "trampoline park",
      "bowling alley",
      "arcade tokens",
      "timezone",
      "fun city",
      "roller coaster pass",
      "carnival ticket"
    ]
  },
  {
    "id": 158,
    "originalId": 74,
    "name": "Premium Communities & Private Memberships",
    "group": "Premium Communities & Private Memberships",
    "keywords": [
      "discord subscription",
      "patreon tier",
      "private mastermind",
      "alumni network fee",
      "golf club membership",
      "yacht club dues",
      "premium newsletter",
      "slack community fee",
      "exclusive network"
    ]
  },
  {
    "id": 159,
    "originalId": null,
    "name": "Keywords",
    "group": "Premium Communities & Private Memberships",
    "keywords": [
      "discord subscription",
      "patreon tier",
      "private mastermind",
      "alumni network fee",
      "golf club membership",
      "yacht club dues",
      "premium newsletter",
      "slack community fee",
      "exclusive network"
    ]
  },
  {
    "id": 160,
    "originalId": 75,
    "name": "Laboratory, Chemical & Scientific Research Supplies",
    "group": "Laboratory, Chemical & Scientific Research Supplies",
    "keywords": [
      "petri dish",
      "pipette",
      "chemical reagent",
      "microscope slides",
      "laboratory scale",
      "centrifuge",
      "ph meter",
      "safety goggles bulk",
      "test tubes",
      "distilled water bulk",
      "fume hood part"
    ]
  },
  {
    "id": 161,
    "originalId": null,
    "name": "Keywords",
    "group": "Laboratory, Chemical & Scientific Research Supplies",
    "keywords": [
      "petri dish",
      "pipette",
      "chemical reagent",
      "microscope slides",
      "laboratory scale",
      "centrifuge",
      "ph meter",
      "safety goggles bulk",
      "test tubes",
      "distilled water bulk",
      "fume hood part"
    ]
  },
  {
    "id": 162,
    "originalId": 76,
    "name": "Heavy Construction, Masonry & Structural Materials",
    "group": "Heavy Construction, Masonry & Structural Materials",
    "keywords": [
      "ready-mix concrete",
      "bricks bulk",
      "scaffolding rental",
      "tmt steel bars",
      "gravel truck",
      "river sand",
      "waterproofing compound",
      "concrete mixer",
      "drywall sheets",
      "insulation foam"
    ]
  },
  {
    "id": 163,
    "originalId": null,
    "name": "Keywords",
    "group": "Heavy Construction, Masonry & Structural Materials",
    "keywords": [
      "ready-mix concrete",
      "bricks bulk",
      "scaffolding rental",
      "tmt steel bars",
      "gravel truck",
      "river sand",
      "waterproofing compound",
      "concrete mixer",
      "drywall sheets",
      "insulation foam"
    ]
  },
  {
    "id": 164,
    "originalId": 77,
    "name": "Textile, Wholesale Fabric & Tailoring Infrastructure",
    "group": "Textile, Wholesale Fabric & Tailoring Infrastructure",
    "keywords": [
      "fabric roll",
      "cotton yarn bulk",
      "industrial sewing machine",
      "mannequins",
      "tailoring chalk",
      "sewing threads bulk",
      "buttons wholesale",
      "zippers wholesale",
      "pattern paper",
      "fabric dye"
    ]
  },
  {
    "id": 165,
    "originalId": null,
    "name": "Keywords",
    "group": "Textile, Wholesale Fabric & Tailoring Infrastructure",
    "keywords": [
      "fabric roll",
      "cotton yarn bulk",
      "industrial sewing machine",
      "mannequins",
      "tailoring chalk",
      "sewing threads bulk",
      "buttons wholesale",
      "zippers wholesale",
      "pattern paper",
      "fabric dye"
    ]
  },
  {
    "id": 166,
    "originalId": 78,
    "name": "Scientific Journals, Research Papers & Academic Libraries",
    "group": "Scientific Journals, Research Papers & Academic Libraries",
    "keywords": [
      "ieee xplore",
      "springer link",
      "researchgate premium",
      "jstor subscription",
      "patent database access",
      "academic journal fee",
      "thesis printing",
      "library membership",
      "whitepaper download"
    ]
  },
  {
    "id": 167,
    "originalId": null,
    "name": "Keywords",
    "group": "Scientific Journals, Research Papers & Academic Libraries",
    "keywords": [
      "ieee xplore",
      "springer link",
      "researchgate premium",
      "jstor subscription",
      "patent database access",
      "academic journal fee",
      "thesis printing",
      "library membership",
      "whitepaper download"
    ]
  },
  {
    "id": 168,
    "originalId": 79,
    "name": "Global Logistics, Freight & Customs Clearance",
    "group": "Global Logistics, Freight & Customs Clearance",
    "keywords": [
      "ocean freight",
      "air cargo",
      "customs duty",
      "import tax",
      "bill of lading",
      "container rental",
      "port charges",
      "logistics fee",
      "customs broker",
      "pallet wrapping",
      "international shipping line"
    ]
  },
  {
    "id": 169,
    "originalId": null,
    "name": "Keywords",
    "group": "Global Logistics, Freight & Customs Clearance",
    "keywords": [
      "ocean freight",
      "air cargo",
      "customs duty",
      "import tax",
      "bill of lading",
      "container rental",
      "port charges",
      "logistics fee",
      "customs broker",
      "pallet wrapping",
      "international shipping line"
    ]
  },
  {
    "id": 170,
    "originalId": 80,
    "name": "Luxury Goods, Rare Commodities & Alternative Investments",
    "group": "Luxury Goods, Rare Commodities & Alternative Investments",
    "keywords": [
      "fine wine",
      "aged whiskey",
      "luxury watch",
      "rolex",
      "patek philippe",
      "collectible sneakers",
      "hypebeast apparel",
      "limited edition art print",
      "rare sculpture",
      "luxury handbag"
    ]
  },
  {
    "id": 171,
    "originalId": null,
    "name": "Keywords",
    "group": "Luxury Goods, Rare Commodities & Alternative Investments",
    "keywords": [
      "fine wine",
      "aged whiskey",
      "luxury watch",
      "rolex",
      "patek philippe",
      "collectible sneakers",
      "hypebeast apparel",
      "limited edition art print",
      "rare sculpture",
      "luxury handbag"
    ]
  },
  {
    "id": 172,
    "originalId": 81,
    "name": "DevOps Infrastructure & Container Orchestration",
    "group": "DevOps Infrastructure & Container Orchestration",
    "keywords": [
      "kubernetes",
      "docker hub",
      "datadog",
      "new relic",
      "logstash",
      "grafana",
      "prometheus",
      "elasticsearch",
      "terraform cloud",
      "snyk",
      "pagerduty",
      "cloudflare pro"
    ]
  },
  {
    "id": 173,
    "originalId": null,
    "name": "Keywords",
    "group": "DevOps Infrastructure & Container Orchestration",
    "keywords": [
      "kubernetes",
      "docker hub",
      "datadog",
      "new relic",
      "logstash",
      "grafana",
      "prometheus",
      "elasticsearch",
      "terraform cloud",
      "snyk",
      "pagerduty",
      "cloudflare pro"
    ]
  },
  {
    "id": 174,
    "originalId": 82,
    "name": "Network Infrastructure & Dedicated Hosting",
    "group": "Network Infrastructure & Dedicated Hosting",
    "keywords": [
      "bare metal server",
      "dedicated server",
      "co-location fee",
      "static ip fee",
      "cpanel license",
      "whm",
      "vps hosting",
      "linode",
      "vultr",
      "hetzner",
      "openvpn access server"
    ]
  },
  {
    "id": 175,
    "originalId": null,
    "name": "Keywords",
    "group": "Network Infrastructure & Dedicated Hosting",
    "keywords": [
      "bare metal server",
      "dedicated server",
      "co-location fee",
      "static ip fee",
      "cpanel license",
      "whm",
      "vps hosting",
      "linode",
      "vultr",
      "hetzner",
      "openvpn access server"
    ]
  },
  {
    "id": 176,
    "originalId": 83,
    "name": "Game Server Hosting & Community Infrastructure",
    "group": "Game Server Hosting & Community Infrastructure",
    "keywords": [
      "apex hosting",
      "nitrado",
      "gportal",
      "shockbyte",
      "minecraft server",
      "discord bot hosting",
      "teamspeak",
      "mumble",
      "bisecthosting",
      "server rack rental"
    ]
  },
  {
    "id": 177,
    "originalId": null,
    "name": "Keywords",
    "group": "Game Server Hosting & Community Infrastructure",
    "keywords": [
      "apex hosting",
      "nitrado",
      "gportal",
      "shockbyte",
      "minecraft server",
      "discord bot hosting",
      "teamspeak",
      "mumble",
      "bisecthosting",
      "server rack rental"
    ]
  },
  {
    "id": 178,
    "originalId": 84,
    "name": "Font Licenses, Design Assets & Typography",
    "group": "Font Licenses, Design Assets & Typography",
    "keywords": [
      "adobe fonts",
      "myfonts",
      "envato elements",
      "creative market",
      "dafont license",
      "iconfinder",
      "shutterstock",
      "vector pack",
      "stock video",
      "3d asset license"
    ]
  },
  {
    "id": 179,
    "originalId": null,
    "name": "Keywords",
    "group": "Font Licenses, Design Assets & Typography",
    "keywords": [
      "adobe fonts",
      "myfonts",
      "envato elements",
      "creative market",
      "dafont license",
      "iconfinder",
      "shutterstock",
      "vector pack",
      "stock video",
      "3d asset license"
    ]
  },
  {
    "id": 180,
    "originalId": 85,
    "name": "Translation, Localization & Copywriting APIs",
    "group": "Translation, Localization & Copywriting APIs",
    "keywords": [
      "deepl pro",
      "google translate api",
      "lokalise",
      "crowdin",
      "fiverr translation",
      "copy.ai",
      "jasper",
      "grammarly premium",
      "proofreading fee",
      "localization service"
    ]
  },
  {
    "id": 181,
    "originalId": null,
    "name": "Keywords",
    "group": "Translation, Localization & Copywriting APIs",
    "keywords": [
      "deepl pro",
      "google translate api",
      "lokalise",
      "crowdin",
      "fiverr translation",
      "copy.ai",
      "jasper",
      "grammarly premium",
      "proofreading fee",
      "localization service"
    ]
  },
  {
    "id": 182,
    "originalId": 86,
    "name": "Data Scraping, Proxy Services & Proxies",
    "group": "Data Scraping, Proxy Services & Proxies",
    "keywords": [
      "bright data",
      "oxylabs",
      "proxy-seller",
      "residential proxy",
      "rotating proxy",
      "scrapingbee",
      "scrapestack",
      "captcha solver",
      "2captcha",
      "proxy wallet top-up"
    ]
  },
  {
    "id": 183,
    "originalId": null,
    "name": "Keywords",
    "group": "Data Scraping, Proxy Services & Proxies",
    "keywords": [
      "bright data",
      "oxylabs",
      "proxy-seller",
      "residential proxy",
      "rotating proxy",
      "scrapingbee",
      "scrapestack",
      "captcha solver",
      "2captcha",
      "proxy wallet top-up"
    ]
  },
  {
    "id": 184,
    "originalId": 87,
    "name": "API Marketplaces & Paid Data Feeds",
    "group": "API Marketplaces & Paid Data Feeds",
    "keywords": [
      "rapidapi",
      "twilio sms api",
      "sendgrid mail api",
      "mapbox api",
      "google maps api platform",
      "weather api subscription",
      "alphavantage",
      "stock data api"
    ]
  },
  {
    "id": 185,
    "originalId": null,
    "name": "Keywords",
    "group": "API Marketplaces & Paid Data Feeds",
    "keywords": [
      "rapidapi",
      "twilio sms api",
      "sendgrid mail api",
      "mapbox api",
      "google maps api platform",
      "weather api subscription",
      "alphavantage",
      "stock data api"
    ]
  },
  {
    "id": 186,
    "originalId": 88,
    "name": "AI Model Fine-Tuning & GPU Rental Clusters",
    "group": "AI Model Fine-Tuning & GPU Rental Clusters",
    "keywords": [
      "runpod",
      "vast.ai",
      "lambda labs",
      "paperspace",
      "hugging face pro",
      "replicate api",
      "anyscale",
      "together ai",
      "groq api",
      "bittensor",
      "coreweave"
    ]
  },
  {
    "id": 187,
    "originalId": null,
    "name": "Keywords",
    "group": "AI Model Fine-Tuning & GPU Rental Clusters",
    "keywords": [
      "runpod",
      "vast.ai",
      "lambda labs",
      "paperspace",
      "hugging face pro",
      "replicate api",
      "anyscale",
      "together ai",
      "groq api",
      "bittensor",
      "coreweave"
    ]
  },
  {
    "id": 188,
    "originalId": 89,
    "name": "Mobile App Store Developer Fees & Compliance",
    "group": "Mobile App Store Developer Fees & Compliance",
    "keywords": [
      "apple developer fee",
      "google play console fee",
      "app store fee",
      "expo application services",
      "testflight setup",
      "app store optimization",
      "aso tool"
    ]
  },
  {
    "id": 189,
    "originalId": null,
    "name": "Keywords",
    "group": "Mobile App Store Developer Fees & Compliance",
    "keywords": [
      "apple developer fee",
      "google play console fee",
      "app store fee",
      "expo application services",
      "testflight setup",
      "app store optimization",
      "aso tool"
    ]
  },
  {
    "id": 190,
    "originalId": 90,
    "name": "Cybersecurity Pentesting, Bug Bounties & Audits",
    "group": "Cybersecurity Pentesting, Bug Bounties & Audits",
    "keywords": [
      "hack the box",
      "tryhackme",
      "burp suite pro",
      "kali tools",
      "bugcrowd",
      "hackerone",
      "pentest fee",
      "security audit",
      "code audit",
      "ssl wildcard certificate"
    ]
  },
  {
    "id": 191,
    "originalId": null,
    "name": "Keywords",
    "group": "Cybersecurity Pentesting, Bug Bounties & Audits",
    "keywords": [
      "hack the box",
      "tryhackme",
      "burp suite pro",
      "kali tools",
      "bugcrowd",
      "hackerone",
      "pentest fee",
      "security audit",
      "code audit",
      "ssl wildcard certificate"
    ]
  },
  {
    "id": 192,
    "originalId": 91,
    "name": "Manufacturing Prototyping & 3D Printing",
    "group": "Manufacturing Prototyping & 3D Printing",
    "keywords": [
      "pla filament",
      "petg",
      "abs filament",
      "3d printer resin",
      "jclpcb",
      "pcb prototyping",
      "cnc milling",
      "laser cutting service",
      "3d scanning service",
      "resin wash"
    ]
  },
  {
    "id": 193,
    "originalId": null,
    "name": "Keywords",
    "group": "Manufacturing Prototyping & 3D Printing",
    "keywords": [
      "pla filament",
      "petg",
      "abs filament",
      "3d printer resin",
      "jclpcb",
      "pcb prototyping",
      "cnc milling",
      "laser cutting service",
      "3d scanning service",
      "resin wash"
    ]
  },
  {
    "id": 194,
    "originalId": 92,
    "name": "Welding, Metalwork & Metallurgy",
    "group": "Welding, Metalwork & Metallurgy",
    "keywords": [
      "welding rods",
      "soldering wire",
      "flux",
      "welding mask",
      "blowtorch",
      "angle grinder discs",
      "metal sheet",
      "steel rods",
      "copper pipe",
      "soldering station"
    ]
  },
  {
    "id": 195,
    "originalId": null,
    "name": "Keywords",
    "group": "Welding, Metalwork & Metallurgy",
    "keywords": [
      "welding rods",
      "soldering wire",
      "flux",
      "welding mask",
      "blowtorch",
      "angle grinder discs",
      "metal sheet",
      "steel rods",
      "copper pipe",
      "soldering station"
    ]
  },
  {
    "id": 196,
    "originalId": 93,
    "name": "Industrial Safety, PPE & Workwear",
    "group": "Industrial Safety, PPE & Workwear",
    "keywords": [
      "steel toe boots",
      "safety vest",
      "hard hat",
      "safety gloves",
      "earmuffs",
      "respirator mask",
      "safety goggles",
      "fall protection harness",
      "fire-retardant suit"
    ]
  },
  {
    "id": 197,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Safety, PPE & Workwear",
    "keywords": [
      "steel toe boots",
      "safety vest",
      "hard hat",
      "safety gloves",
      "earmuffs",
      "respirator mask",
      "safety goggles",
      "fall protection harness",
      "fire-retardant suit"
    ]
  },
  {
    "id": 198,
    "originalId": 94,
    "name": "Heavy Equipment & Plant Rental",
    "group": "Heavy Equipment & Plant Rental",
    "keywords": [
      "forklift rental",
      "excavator rental",
      "scissor lift",
      "generator rental",
      "scaffolding setup",
      "cement mixer rental",
      "crane service",
      "dumpster rental bulk"
    ]
  },
  {
    "id": 199,
    "originalId": null,
    "name": "Keywords",
    "group": "Heavy Equipment & Plant Rental",
    "keywords": [
      "forklift rental",
      "excavator rental",
      "scissor lift",
      "generator rental",
      "scaffolding setup",
      "cement mixer rental",
      "crane service",
      "dumpster rental bulk"
    ]
  },
  {
    "id": 200,
    "originalId": 95,
    "name": "Measuring, Calibration & Precision Testing Tools",
    "group": "Measuring, Calibration & Precision Testing Tools",
    "keywords": [
      "vernier caliper",
      "micrometer",
      "multimeter",
      "oscilloscope",
      "laser measure",
      "spirit level",
      "torque wrench",
      "pressure gauge",
      "thermal camera",
      "weighing scale"
    ]
  },
  {
    "id": 201,
    "originalId": null,
    "name": "Keywords",
    "group": "Measuring, Calibration & Precision Testing Tools",
    "keywords": [
      "vernier caliper",
      "micrometer",
      "multimeter",
      "oscilloscope",
      "laser measure",
      "spirit level",
      "torque wrench",
      "pressure gauge",
      "thermal camera",
      "weighing scale"
    ]
  },
  {
    "id": 202,
    "originalId": 96,
    "name": "Pneumatics, Hydraulics & Compressor Gear",
    "group": "Pneumatics, Hydraulics & Compressor Gear",
    "keywords": [
      "air compressor",
      "pneumatic hose",
      "hydraulic oil",
      "pressure valve",
      "air spray gun",
      "pneumatic cylinder",
      "pressure regulator",
      "hydraulic jack"
    ]
  },
  {
    "id": 203,
    "originalId": null,
    "name": "Keywords",
    "group": "Pneumatics, Hydraulics & Compressor Gear",
    "keywords": [
      "air compressor",
      "pneumatic hose",
      "hydraulic oil",
      "pressure valve",
      "air spray gun",
      "pneumatic cylinder",
      "pressure regulator",
      "hydraulic jack"
    ]
  },
  {
    "id": 204,
    "originalId": 97,
    "name": "Adhesives, Sealants & Industrial Chemicals",
    "group": "Adhesives, Sealants & Industrial Chemicals",
    "keywords": [
      "araldite",
      "m-seal",
      "wd-40",
      "silicone sealant",
      "epoxy resin",
      "titebond",
      "super glue bulk",
      "industrial alcohol",
      "acetone bulk",
      "paint thinner",
      "rust remover"
    ]
  },
  {
    "id": 205,
    "originalId": null,
    "name": "Keywords",
    "group": "Adhesives, Sealants & Industrial Chemicals",
    "keywords": [
      "araldite",
      "m-seal",
      "wd-40",
      "silicone sealant",
      "epoxy resin",
      "titebond",
      "super glue bulk",
      "industrial alcohol",
      "acetone bulk",
      "paint thinner",
      "rust remover"
    ]
  },
  {
    "id": 206,
    "originalId": 98,
    "name": "Fasteners, Hardware Wholesale & Rigging",
    "group": "Fasteners, Hardware Wholesale & Rigging",
    "keywords": [
      "anchor bolts",
      "drywall screws",
      "hex nuts",
      "washers bulk",
      "toggle bolts",
      "zip ties bulk",
      "steel wire rope",
      "carabiners",
      "padlocks bulk",
      "hinges wholesale"
    ]
  },
  {
    "id": 207,
    "originalId": null,
    "name": "Keywords",
    "group": "Fasteners, Hardware Wholesale & Rigging",
    "keywords": [
      "anchor bolts",
      "drywall screws",
      "hex nuts",
      "washers bulk",
      "toggle bolts",
      "zip ties bulk",
      "steel wire rope",
      "carabiners",
      "padlocks bulk",
      "hinges wholesale"
    ]
  },
  {
    "id": 208,
    "originalId": 99,
    "name": "Woodworking, Carpentry & Lumber Supplies",
    "group": "Woodworking, Carpentry & Lumber Supplies",
    "keywords": [
      "plywood sheet",
      "mdf board",
      "timber",
      "wood glue",
      "sandpaper bulk",
      "circular saw blade",
      "chisel set",
      "wood stain",
      "varnish",
      "wood planer",
      "dowels"
    ]
  },
  {
    "id": 209,
    "originalId": null,
    "name": "Keywords",
    "group": "Woodworking, Carpentry & Lumber Supplies",
    "keywords": [
      "plywood sheet",
      "mdf board",
      "timber",
      "wood glue",
      "sandpaper bulk",
      "circular saw blade",
      "chisel set",
      "wood stain",
      "varnish",
      "wood planer",
      "dowels"
    ]
  },
  {
    "id": 210,
    "originalId": 100,
    "name": "HVAC, Ventilation & Industrial Cooling",
    "group": "HVAC, Ventilation & Industrial Cooling",
    "keywords": [
      "exhaust fan",
      "ventilation duct",
      "copper coil",
      "r32 refrigerant",
      "air filter bulk",
      "hvac repair",
      "duct tape bulk",
      "blower",
      "thermostat controller"
    ]
  },
  {
    "id": 211,
    "originalId": null,
    "name": "Keywords",
    "group": "HVAC, Ventilation & Industrial Cooling",
    "keywords": [
      "exhaust fan",
      "ventilation duct",
      "copper coil",
      "r32 refrigerant",
      "air filter bulk",
      "hvac repair",
      "duct tape bulk",
      "blower",
      "thermostat controller"
    ]
  },
  {
    "id": 212,
    "originalId": 101,
    "name": "Legal Certifications, Apostille & Attestation",
    "group": "Legal Certifications, Apostille & Attestation",
    "keywords": [
      "apostille fee",
      "document attestation",
      "notary public seal",
      "court affidavit",
      "power of attorney registration",
      "background check verification"
    ]
  },
  {
    "id": 213,
    "originalId": null,
    "name": "Keywords",
    "group": "Legal Certifications, Apostille & Attestation",
    "keywords": [
      "apostille fee",
      "document attestation",
      "notary public seal",
      "court affidavit",
      "power of attorney registration",
      "background check verification"
    ]
  },
  {
    "id": 214,
    "originalId": 102,
    "name": "Company Incorporation & Compliance Filing",
    "group": "Company Incorporation & Compliance Filing",
    "keywords": [
      "mca filing",
      "roc compliance",
      "dsc digital signature",
      "din application",
      "din registration",
      "corporate secretarial services",
      "gst registration fee"
    ]
  },
  {
    "id": 215,
    "originalId": null,
    "name": "Keywords",
    "group": "Company Incorporation & Compliance Filing",
    "keywords": [
      "mca filing",
      "roc compliance",
      "dsc digital signature",
      "din application",
      "din registration",
      "corporate secretarial services",
      "gst registration fee"
    ]
  },
  {
    "id": 216,
    "originalId": 103,
    "name": "Trademarks, Copyrights & Intellectual Property Searches",
    "group": "Trademarks, Copyrights & Intellectual Property Searches",
    "keywords": [
      "trademark search",
      "patent search fee",
      "ip lawyer consultation",
      "copyright filing",
      "patent renewal fee",
      "ip watch service"
    ]
  },
  {
    "id": 217,
    "originalId": null,
    "name": "Keywords",
    "group": "Trademarks, Copyrights & Intellectual Property Searches",
    "keywords": [
      "trademark search",
      "patent search fee",
      "ip lawyer consultation",
      "copyright filing",
      "patent renewal fee",
      "ip watch service"
    ]
  },
  {
    "id": 218,
    "originalId": 104,
    "name": "Customs Clearance, Duties & Port Logistics",
    "group": "Customs Clearance, Duties & Port Logistics",
    "keywords": [
      "customs broker fee",
      "icegate payment",
      "import duty",
      "export cess",
      "port handling charges",
      "demurrage fee",
      "container inspection charge"
    ]
  },
  {
    "id": 219,
    "originalId": null,
    "name": "Keywords",
    "group": "Customs Clearance, Duties & Port Logistics",
    "keywords": [
      "customs broker fee",
      "icegate payment",
      "import duty",
      "export cess",
      "port handling charges",
      "demurrage fee",
      "container inspection charge"
    ]
  },
  {
    "id": 220,
    "originalId": 105,
    "name": "Arbitrations, Mediation & Legal Settlements",
    "group": "Arbitrations, Mediation & Legal Settlements",
    "keywords": [
      "arbitration retainer",
      "mediation fee",
      "legal settlement payout",
      "court mandated deposit",
      "legal counsel fee",
      "litigation cost"
    ]
  },
  {
    "id": 221,
    "originalId": null,
    "name": "Keywords",
    "group": "Arbitrations, Mediation & Legal Settlements",
    "keywords": [
      "arbitration retainer",
      "mediation fee",
      "legal settlement payout",
      "court mandated deposit",
      "legal counsel fee",
      "litigation cost"
    ]
  },
  {
    "id": 222,
    "originalId": 106,
    "name": "Vintage Toys, Action Figures & Model Kits",
    "group": "Vintage Toys, Action Figures & Model Kits",
    "keywords": [
      "gundam model",
      "tamiya kit",
      "funko pop grail",
      "hot wheels treasure hunt",
      "transformers vintage",
      "star wars collectible",
      "action figure display case"
    ]
  },
  {
    "id": 223,
    "originalId": null,
    "name": "Keywords",
    "group": "Vintage Toys, Action Figures & Model Kits",
    "keywords": [
      "gundam model",
      "tamiya kit",
      "funko pop grail",
      "hot wheels treasure hunt",
      "transformers vintage",
      "star wars collectible",
      "action figure display case"
    ]
  },
  {
    "id": 224,
    "originalId": 107,
    "name": "Board Games, TCG & Tabletop RPGs",
    "group": "Board Games, TCG & Tabletop RPGs",
    "keywords": [
      "dungeons and dragons",
      "d&d dice",
      "mtg booster box",
      "yugioh cards",
      "pokemon tcg",
      "board game expansion",
      "catan",
      "warhammer 40k miniatures"
    ]
  },
  {
    "id": 225,
    "originalId": null,
    "name": "Keywords",
    "group": "Board Games, TCG & Tabletop RPGs",
    "keywords": [
      "dungeons and dragons",
      "d&d dice",
      "mtg booster box",
      "yugioh cards",
      "pokemon tcg",
      "board game expansion",
      "catan",
      "warhammer 40k miniatures"
    ]
  },
  {
    "id": 226,
    "originalId": 108,
    "name": "Autographs, Sports Memorabilia & Rare Prints",
    "group": "Autographs, Sports Memorabilia & Rare Prints",
    "keywords": [
      "signed jersey",
      "autographed cricket bat",
      "limited edition lithograph",
      "psa graded card",
      "cgc graded comic",
      "sports card breaker fee"
    ]
  },
  {
    "id": 227,
    "originalId": null,
    "name": "Keywords",
    "group": "Autographs, Sports Memorabilia & Rare Prints",
    "keywords": [
      "signed jersey",
      "autographed cricket bat",
      "limited edition lithograph",
      "psa graded card",
      "cgc graded comic",
      "sports card breaker fee"
    ]
  },
  {
    "id": 228,
    "originalId": 109,
    "name": "Comic Books, Manga & Graphic Novels",
    "group": "Comic Books, Manga & Graphic Novels",
    "keywords": [
      "marvel omnibus",
      "dc graphic novel",
      "manga box set",
      "viz media",
      "comic book sleeves",
      "backboards",
      "indie comic subscription"
    ]
  },
  {
    "id": 229,
    "originalId": null,
    "name": "Keywords",
    "group": "Comic Books, Manga & Graphic Novels",
    "keywords": [
      "marvel omnibus",
      "dc graphic novel",
      "manga box set",
      "viz media",
      "comic book sleeves",
      "backboards",
      "indie comic subscription"
    ]
  },
  {
    "id": 230,
    "originalId": 110,
    "name": "Numismatics, Rare Paper Money & Bullion Trading",
    "group": "Numismatics, Rare Paper Money & Bullion Trading",
    "keywords": [
      "uncirculated coin set",
      "silver bullion bar",
      "gold sovereign",
      "proof coin",
      "banknote collector album",
      "coin grading fee"
    ]
  },
  {
    "id": 231,
    "originalId": null,
    "name": "Keywords",
    "group": "Numismatics, Rare Paper Money & Bullion Trading",
    "keywords": [
      "uncirculated coin set",
      "silver bullion bar",
      "gold sovereign",
      "proof coin",
      "banknote collector album",
      "coin grading fee"
    ]
  },
  {
    "id": 232,
    "originalId": 111,
    "name": "High-End Footwear & Sneaker Collecting",
    "group": "High-End Footwear & Sneaker Collecting",
    "keywords": [
      "air jordan",
      "yeezy",
      "nike dunk sb",
      "sneaker resale",
      "stockx",
      "goat app",
      "sneaker display box",
      "crep protect",
      "sole protector"
    ]
  },
  {
    "id": 233,
    "originalId": null,
    "name": "Keywords",
    "group": "High-End Footwear & Sneaker Collecting",
    "keywords": [
      "air jordan",
      "yeezy",
      "nike dunk sb",
      "sneaker resale",
      "stockx",
      "goat app",
      "sneaker display box",
      "crep protect",
      "sole protector"
    ]
  },
  {
    "id": 234,
    "originalId": 112,
    "name": "Luxury Horology & Watch Customization",
    "group": "Luxury Horology & Watch Customization",
    "keywords": [
      "watch winder",
      "alligator leather strap",
      "rolex service",
      "seiko mod parts",
      "watchmaking tools",
      "bergeon screwdriver",
      "watch display case"
    ]
  },
  {
    "id": 235,
    "originalId": null,
    "name": "Keywords",
    "group": "Luxury Horology & Watch Customization",
    "keywords": [
      "watch winder",
      "alligator leather strap",
      "rolex service",
      "seiko mod parts",
      "watchmaking tools",
      "bergeon screwdriver",
      "watch display case"
    ]
  },
  {
    "id": 236,
    "originalId": 113,
    "name": "Fine Wines, Rare Spirits & Sommelier Services",
    "group": "Fine Wines, Rare Spirits & Sommelier Services",
    "keywords": [
      "single malt scotch",
      "bordeaux futures",
      "wine cellar storage",
      "sommelier tasting fee",
      "whiskey cask investment",
      "rare rum",
      "craft gin bottle"
    ]
  },
  {
    "id": 237,
    "originalId": null,
    "name": "Keywords",
    "group": "Fine Wines, Rare Spirits & Sommelier Services",
    "keywords": [
      "single malt scotch",
      "bordeaux futures",
      "wine cellar storage",
      "sommelier tasting fee",
      "whiskey cask investment",
      "rare rum",
      "craft gin bottle"
    ]
  },
  {
    "id": 238,
    "originalId": 114,
    "name": "Designer Apparel & Haute Couture",
    "group": "Designer Apparel & Haute Couture",
    "keywords": [
      "luxury streetwear",
      "off-white",
      "supreme drop",
      "balenciaga",
      "gucci",
      "designer bag",
      "fashion week ticket",
      "custom tailoring suit"
    ]
  },
  {
    "id": 239,
    "originalId": null,
    "name": "Keywords",
    "group": "Designer Apparel & Haute Couture",
    "keywords": [
      "luxury streetwear",
      "off-white",
      "supreme drop",
      "balenciaga",
      "gucci",
      "designer bag",
      "fashion week ticket",
      "custom tailoring suit"
    ]
  },
  {
    "id": 240,
    "originalId": 115,
    "name": "Contemporary Art, Sculptures & Gallery Commissions",
    "group": "Contemporary Art, Sculptures & Gallery Commissions",
    "keywords": [
      "canvas painting",
      "bronze sculpture",
      "art gallery deposit",
      "custom portrait commission",
      "art framing fee",
      "art exhibition pass"
    ]
  },
  {
    "id": 241,
    "originalId": null,
    "name": "Keywords",
    "group": "Contemporary Art, Sculptures & Gallery Commissions",
    "keywords": [
      "canvas painting",
      "bronze sculpture",
      "art gallery deposit",
      "custom portrait commission",
      "art framing fee",
      "art exhibition pass"
    ]
  },
  {
    "id": 242,
    "originalId": 116,
    "name": "Aviation Fuel, Hangar Fees & Chartered Flights",
    "group": "Aviation Fuel, Hangar Fees & Chartered Flights",
    "keywords": [
      "avgas",
      "jet a-1",
      "hangar lease",
      "aircraft parking fee",
      "private jet charter",
      "flight school rental",
      "avionic repair",
      "landing fee"
    ]
  },
  {
    "id": 243,
    "originalId": null,
    "name": "Keywords",
    "group": "Aviation Fuel, Hangar Fees & Chartered Flights",
    "keywords": [
      "avgas",
      "jet a-1",
      "hangar lease",
      "aircraft parking fee",
      "private jet charter",
      "flight school rental",
      "avionic repair",
      "landing fee"
    ]
  },
  {
    "id": 244,
    "originalId": 117,
    "name": "Marine Dockage, Yacht Moorings & Boat Fuel",
    "group": "Marine Dockage, Yacht Moorings & Boat Fuel",
    "keywords": [
      "marina slip rent",
      "boat fuel bunkering",
      "yacht mooring fee",
      "antifouling paint",
      "outboard motor service",
      "life raft certification"
    ]
  },
  {
    "id": 245,
    "originalId": null,
    "name": "Keywords",
    "group": "Marine Dockage, Yacht Moorings & Boat Fuel",
    "keywords": [
      "marina slip rent",
      "boat fuel bunkering",
      "yacht mooring fee",
      "antifouling paint",
      "outboard motor service",
      "life raft certification"
    ]
  },
  {
    "id": 246,
    "originalId": 118,
    "name": "Extreme Sports, Skydiving & Scuba Expeditions",
    "group": "Extreme Sports, Skydiving & Scuba Expeditions",
    "keywords": [
      "skydive jump ticket",
      "scuba dive charter",
      "padi certification fee",
      "bungee jump ticket",
      "paragliding equipment rental",
      "ski pass lift ticket"
    ]
  },
  {
    "id": 247,
    "originalId": null,
    "name": "Keywords",
    "group": "Extreme Sports, Skydiving & Scuba Expeditions",
    "keywords": [
      "skydive jump ticket",
      "scuba dive charter",
      "padi certification fee",
      "bungee jump ticket",
      "paragliding equipment rental",
      "ski pass lift ticket"
    ]
  },
  {
    "id": 248,
    "originalId": 119,
    "name": "Motorsports Track Days & Racing Licenses",
    "group": "Motorsports Track Days & Racing Licenses",
    "keywords": [
      "track day entry",
      "fmsci license",
      "racing suit",
      "racing helmet snell",
      "track tire set",
      "go-kart championship fee",
      "lap timer tracker"
    ]
  },
  {
    "id": 249,
    "originalId": null,
    "name": "Keywords",
    "group": "Motorsports Track Days & Racing Licenses",
    "keywords": [
      "track day entry",
      "fmsci license",
      "racing suit",
      "racing helmet snell",
      "track tire set",
      "go-kart championship fee",
      "lap timer tracker"
    ]
  },
  {
    "id": 250,
    "originalId": 120,
    "name": "Destination Expeditions, Safaris & Treks",
    "group": "Destination Expeditions, Safaris & Treks",
    "keywords": [
      "mountain guide fee",
      "safari permit",
      "kaza trek package",
      "base camp permit",
      "expedition porter fee",
      "polar expedition cruise"
    ]
  },
  {
    "id": 251,
    "originalId": null,
    "name": "Keywords",
    "group": "Destination Expeditions, Safaris & Treks",
    "keywords": [
      "mountain guide fee",
      "safari permit",
      "kaza trek package",
      "base camp permit",
      "expedition porter fee",
      "polar expedition cruise"
    ]
  },
  {
    "id": 252,
    "originalId": 121,
    "name": "Dietitians, Nutritionists & Meal Prep Subscriptions",
    "group": "Dietitians, Nutritionists & Meal Prep Subscriptions",
    "keywords": [
      "nutritionist consultation",
      "custom diet plan",
      "calorie counted meal prep",
      "keto catering subscription",
      "body composition analysis",
      "fat loss coach"
    ]
  },
  {
    "id": 253,
    "originalId": null,
    "name": "Keywords",
    "group": "Dietitians, Nutritionists & Meal Prep Subscriptions",
    "keywords": [
      "nutritionist consultation",
      "custom diet plan",
      "calorie counted meal prep",
      "keto catering subscription",
      "body composition analysis",
      "fat loss coach"
    ]
  },
  {
    "id": 254,
    "originalId": 122,
    "name": "Physiotherapy, Chiropractic & Sports Massage",
    "group": "Physiotherapy, Chiropractic & Sports Massage",
    "keywords": [
      "physiotherapy session",
      "chiropractor adjustment",
      "dry needling",
      "sports massage therapy",
      "kinesiotherapy",
      "tens machine pads"
    ]
  },
  {
    "id": 255,
    "originalId": null,
    "name": "Keywords",
    "group": "Physiotherapy, Chiropractic & Sports Massage",
    "keywords": [
      "physiotherapy session",
      "chiropractor adjustment",
      "dry needling",
      "sports massage therapy",
      "kinesiotherapy",
      "tens machine pads"
    ]
  },
  {
    "id": 256,
    "originalId": 123,
    "name": "Pilates, Yoga Studios & Wellness Retreats",
    "group": "Pilates, Yoga Studios & Wellness Retreats",
    "keywords": [
      "pilates reformer class",
      "yoga studio pass",
      "mindfulness retreat",
      "meditation course fee",
      "sound healing session",
      "wellness sanctuary ticket"
    ]
  },
  {
    "id": 257,
    "originalId": null,
    "name": "Keywords",
    "group": "Pilates, Yoga Studios & Wellness Retreats",
    "keywords": [
      "pilates reformer class",
      "yoga studio pass",
      "mindfulness retreat",
      "meditation course fee",
      "sound healing session",
      "wellness sanctuary ticket"
    ]
  },
  {
    "id": 258,
    "originalId": 124,
    "name": "Specialized Testing, DNA Analysis & Biohacking",
    "group": "Specialized Testing, DNA Analysis & Biohacking",
    "keywords": [
      "dna ancestry kit",
      "gut microbiome test",
      "continuous glucose monitor",
      "cgm patches",
      "blood panel panel analysis",
      "biohacking supplement"
    ]
  },
  {
    "id": 259,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Testing, DNA Analysis & Biohacking",
    "keywords": [
      "dna ancestry kit",
      "gut microbiome test",
      "continuous glucose monitor",
      "cgm patches",
      "blood panel panel analysis",
      "biohacking supplement"
    ]
  },
  {
    "id": 260,
    "originalId": 125,
    "name": "Alternative Medicine, Ayurveda & Acupuncture",
    "group": "Alternative Medicine, Ayurveda & Acupuncture",
    "keywords": [
      "ayurvedic panchakarma",
      "acupuncture needles session",
      "naturopathy consultation",
      "homeopathic remedies",
      "cupping therapy"
    ]
  },
  {
    "id": 261,
    "originalId": null,
    "name": "Keywords",
    "group": "Alternative Medicine, Ayurveda & Acupuncture",
    "keywords": [
      "ayurvedic panchakarma",
      "acupuncture needles session",
      "naturopathy consultation",
      "homeopathic remedies",
      "cupping therapy"
    ]
  },
  {
    "id": 262,
    "originalId": 126,
    "name": "Auditory Gear, Hearing Aids & Audiologist Services",
    "group": "Auditory Gear, Hearing Aids & Audiologist Services",
    "keywords": [
      "audiologist test",
      "custom iem ear impressions",
      "hearing aid batteries",
      "tinnitus masker",
      "ear wax removal clinic"
    ]
  },
  {
    "id": 263,
    "originalId": null,
    "name": "Keywords",
    "group": "Auditory Gear, Hearing Aids & Audiologist Services",
    "keywords": [
      "audiologist test",
      "custom iem ear impressions",
      "hearing aid batteries",
      "tinnitus masker",
      "ear wax removal clinic"
    ]
  },
  {
    "id": 264,
    "originalId": 127,
    "name": "Orthodontics, Dental Aligners & Cosmetic Dentistry",
    "group": "Orthodontics, Dental Aligners & Cosmetic Dentistry",
    "keywords": [
      "teeth aligners",
      "invisalign installment",
      "dental braces adjustment",
      "teeth whitening kit",
      "root canal procedure",
      "dental crown fee"
    ]
  },
  {
    "id": 265,
    "originalId": null,
    "name": "Keywords",
    "group": "Orthodontics, Dental Aligners & Cosmetic Dentistry",
    "keywords": [
      "teeth aligners",
      "invisalign installment",
      "dental braces adjustment",
      "teeth whitening kit",
      "root canal procedure",
      "dental crown fee"
    ]
  },
  {
    "id": 266,
    "originalId": 128,
    "name": "Mobility Aids, Wheelchairs & Specialized Logistics",
    "group": "Mobility Aids, Wheelchairs & Specialized Logistics",
    "keywords": [
      "motorized wheelchair",
      "mobility scooter rental",
      "ramp installation",
      "wheelchair accessible transport",
      "crutches premium"
    ]
  },
  {
    "id": 267,
    "originalId": null,
    "name": "Keywords",
    "group": "Mobility Aids, Wheelchairs & Specialized Logistics",
    "keywords": [
      "motorized wheelchair",
      "mobility scooter rental",
      "ramp installation",
      "wheelchair accessible transport",
      "crutches premium"
    ]
  },
  {
    "id": 268,
    "originalId": 129,
    "name": "Sleep Optimization, Sleep Coaching & Sleep Tech",
    "group": "Sleep Optimization, Sleep Coaching & Sleep Tech",
    "keywords": [
      "sleep tracking ring",
      "oura ring",
      "cpap mask replacement",
      "weighted blanket premium",
      "black out curtains hotel",
      "sleep coach consultation"
    ]
  },
  {
    "id": 269,
    "originalId": null,
    "name": "Keywords",
    "group": "Sleep Optimization, Sleep Coaching & Sleep Tech",
    "keywords": [
      "sleep tracking ring",
      "oura ring",
      "cpap mask replacement",
      "weighted blanket premium",
      "black out curtains hotel",
      "sleep coach consultation"
    ]
  },
  {
    "id": 270,
    "originalId": 130,
    "name": "Medical Tourism, Out-of-State Consultations & Logistics",
    "group": "Medical Tourism, Out-of-State Consultations & Logistics",
    "keywords": [
      "medical tourism package",
      "out-of-state hospital stay",
      "surgical consultation long distance",
      "medical escort service",
      "specialized clinic stay"
    ]
  },
  {
    "id": 271,
    "originalId": null,
    "name": "Keywords",
    "group": "Medical Tourism, Out-of-State Consultations & Logistics",
    "keywords": [
      "medical tourism package",
      "out-of-state hospital stay",
      "surgical consultation long distance",
      "medical escort service",
      "specialized clinic stay"
    ]
  },
  {
    "id": 272,
    "originalId": 131,
    "name": "Penetration Testing & InfoSec Tools",
    "group": "Penetration Testing & InfoSec Tools",
    "keywords": [
      "kali linux",
      "openvpn",
      "hydra",
      "wordlist",
      "tryhackme",
      "hackthebox",
      "bug bounty",
      "burpsuite pro",
      "wireshark",
      "nmap",
      "ethical hacking cert"
    ]
  },
  {
    "id": 273,
    "originalId": null,
    "name": "Keywords",
    "group": "Penetration Testing & InfoSec Tools",
    "keywords": [
      "kali linux",
      "openvpn",
      "hydra",
      "wordlist",
      "tryhackme",
      "hackthebox",
      "bug bounty",
      "burpsuite pro",
      "wireshark",
      "nmap",
      "ethical hacking cert"
    ]
  },
  {
    "id": 274,
    "originalId": 132,
    "name": "Data Structures & Low-Level Programming",
    "group": "Data Structures & Low-Level Programming",
    "keywords": [
      "c++ overriding",
      "raw arrays",
      "pointers",
      "dsa course",
      "leetcode premium",
      "algoexpert",
      "memory management",
      "compiler tools"
    ]
  },
  {
    "id": 275,
    "originalId": null,
    "name": "Keywords",
    "group": "Data Structures & Low-Level Programming",
    "keywords": [
      "c++ overriding",
      "raw arrays",
      "pointers",
      "dsa course",
      "leetcode premium",
      "algoexpert",
      "memory management",
      "compiler tools"
    ]
  },
  {
    "id": 276,
    "originalId": 133,
    "name": "Open Source & UI/UX Organizations",
    "group": "Open Source & UI/UX Organizations",
    "keywords": [
      "gssoc",
      "ieee tems",
      "glassmorphism assets",
      "dark theme templates",
      "neon web fonts",
      "figma pro",
      "github sponsors",
      "open source donation"
    ]
  },
  {
    "id": 277,
    "originalId": null,
    "name": "Keywords",
    "group": "Open Source & UI/UX Organizations",
    "keywords": [
      "gssoc",
      "ieee tems",
      "glassmorphism assets",
      "dark theme templates",
      "neon web fonts",
      "figma pro",
      "github sponsors",
      "open source donation"
    ]
  },
  {
    "id": 278,
    "originalId": 134,
    "name": "Local AI & Neural Diagnostics",
    "group": "Local AI & Neural Diagnostics",
    "keywords": [
      "local ai model",
      "neuroscan",
      "brain mri dataset",
      "deep learning inference",
      "tensor cores",
      "local llm",
      "pytorch compute"
    ]
  },
  {
    "id": 279,
    "originalId": null,
    "name": "Keywords",
    "group": "Local AI & Neural Diagnostics",
    "keywords": [
      "local ai model",
      "neuroscan",
      "brain mri dataset",
      "deep learning inference",
      "tensor cores",
      "local llm",
      "pytorch compute"
    ]
  },
  {
    "id": 280,
    "originalId": 135,
    "name": "Table Tennis & Precision Racket Sports",
    "group": "Table Tennis & Precision Racket Sports",
    "keywords": [
      "professional blade",
      "rubber sheet",
      "table tennis bat cleaner",
      "cdtta",
      "national gold fee",
      "stiga",
      "butterfly",
      "ping pong",
      "topspin"
    ]
  },
  {
    "id": 281,
    "originalId": null,
    "name": "Keywords",
    "group": "Table Tennis & Precision Racket Sports",
    "keywords": [
      "professional blade",
      "rubber sheet",
      "table tennis bat cleaner",
      "cdtta",
      "national gold fee",
      "stiga",
      "butterfly",
      "ping pong",
      "topspin"
    ]
  },
  {
    "id": 282,
    "originalId": 136,
    "name": "Chess & Strategy Board Games",
    "group": "Chess & Strategy Board Games",
    "keywords": [
      "chess.com",
      "bullet rating",
      "gm_anthya",
      "hades crimson",
      "fide fee",
      "chessbase",
      "dgt board",
      "grandmaster masterclass"
    ]
  },
  {
    "id": 283,
    "originalId": null,
    "name": "Keywords",
    "group": "Chess & Strategy Board Games",
    "keywords": [
      "chess.com",
      "bullet rating",
      "gm_anthya",
      "hades crimson",
      "fide fee",
      "chessbase",
      "dgt board",
      "grandmaster masterclass"
    ]
  },
  {
    "id": 284,
    "originalId": 137,
    "name": "Formula 1 & Motorsport Fandom",
    "group": "Formula 1 & Motorsport Fandom",
    "keywords": [
      "f1 tv pro",
      "charles leclerc",
      "scuderia ferrari",
      "rc formula 1 car",
      "paddock pass",
      "grandstand ticket",
      "pitlane walk",
      "f1 merch"
    ]
  },
  {
    "id": 285,
    "originalId": null,
    "name": "Keywords",
    "group": "Formula 1 & Motorsport Fandom",
    "keywords": [
      "f1 tv pro",
      "charles leclerc",
      "scuderia ferrari",
      "rc formula 1 car",
      "paddock pass",
      "grandstand ticket",
      "pitlane walk",
      "f1 merch"
    ]
  },
  {
    "id": 286,
    "originalId": 138,
    "name": "Cricket Leagues & IPL",
    "group": "Cricket Leagues & IPL",
    "keywords": [
      "ipl 2026",
      "orange cap",
      "purple cap",
      "mohammed siraj",
      "stadium tickets",
      "cricket jersey",
      "dream11 deposit",
      "jio cinema premium"
    ]
  },
  {
    "id": 287,
    "originalId": null,
    "name": "Keywords",
    "group": "Cricket Leagues & IPL",
    "keywords": [
      "ipl 2026",
      "orange cap",
      "purple cap",
      "mohammed siraj",
      "stadium tickets",
      "cricket jersey",
      "dream11 deposit",
      "jio cinema premium"
    ]
  },
  {
    "id": 288,
    "originalId": 139,
    "name": "Classical Music Exams & Streaming",
    "group": "Classical Music Exams & Streaming",
    "keywords": [
      "trinity college london",
      "youtube music",
      "one direction",
      "brodha v",
      "grade exam fee",
      "sheet music",
      "vocal coaching",
      "metronome"
    ]
  },
  {
    "id": 289,
    "originalId": null,
    "name": "Keywords",
    "group": "Classical Music Exams & Streaming",
    "keywords": [
      "trinity college london",
      "youtube music",
      "one direction",
      "brodha v",
      "grade exam fee",
      "sheet music",
      "vocal coaching",
      "metronome"
    ]
  },
  {
    "id": 290,
    "originalId": 140,
    "name": "Philosophy & Self-Mastery Literature",
    "group": "Philosophy & Self-Mastery Literature",
    "keywords": [
      "stoic philosophy",
      "vedantic",
      "atomic habits",
      "48 laws of power",
      "self-improvement book",
      "discipline",
      "audiobook",
      "audible"
    ]
  },
  {
    "id": 291,
    "originalId": null,
    "name": "Keywords",
    "group": "Philosophy & Self-Mastery Literature",
    "keywords": [
      "stoic philosophy",
      "vedantic",
      "atomic habits",
      "48 laws of power",
      "self-improvement book",
      "discipline",
      "audiobook",
      "audible"
    ]
  },
  {
    "id": 292,
    "originalId": 141,
    "name": "Hill Stations & Adventure Parks",
    "group": "Hill Stations & Adventure Parks",
    "keywords": [
      "shevaroy hills",
      "thekkady rose park",
      "black thunder",
      "bungee trampoline",
      "paddle boating",
      "hill resort",
      "eco tourism",
      "view point"
    ]
  },
  {
    "id": 293,
    "originalId": null,
    "name": "Keywords",
    "group": "Hill Stations & Adventure Parks",
    "keywords": [
      "shevaroy hills",
      "thekkady rose park",
      "black thunder",
      "bungee trampoline",
      "paddle boating",
      "hill resort",
      "eco tourism",
      "view point"
    ]
  },
  {
    "id": 294,
    "originalId": 142,
    "name": "Regional Biryani & Middle Eastern Dining",
    "group": "Regional Biryani & Middle Eastern Dining",
    "keywords": [
      "ss briyani coimbatore",
      "street arabiya podanur",
      "annapoorna",
      "shawarma",
      "mandi",
      "alfaham",
      "grill chicken",
      "authentic biryani"
    ]
  },
  {
    "id": 295,
    "originalId": null,
    "name": "Keywords",
    "group": "Regional Biryani & Middle Eastern Dining",
    "keywords": [
      "ss briyani coimbatore",
      "street arabiya podanur",
      "annapoorna",
      "shawarma",
      "mandi",
      "alfaham",
      "grill chicken",
      "authentic biryani"
    ]
  },
  {
    "id": 296,
    "originalId": 143,
    "name": "Inter-Collegiate Events & Campus Fests",
    "group": "Inter-Collegiate Events & Campus Fests",
    "keywords": [
      "sastra university",
      "skcet",
      "symposium",
      "tech fest",
      "hackathon entry",
      "college cultural",
      "inter-college travel",
      "workshop fee"
    ]
  },
  {
    "id": 297,
    "originalId": null,
    "name": "Keywords",
    "group": "Inter-Collegiate Events & Campus Fests",
    "keywords": [
      "sastra university",
      "skcet",
      "symposium",
      "tech fest",
      "hackathon entry",
      "college cultural",
      "inter-college travel",
      "workshop fee"
    ]
  },
  {
    "id": 298,
    "originalId": 144,
    "name": "Couples Milestones & Relationship Wagers",
    "group": "Couples Milestones & Relationship Wagers",
    "keywords": [
      "anniversary dinner",
      "aug 16",
      "highest package bet",
      "couple retreat",
      "romantic gift",
      "date night",
      "valentine",
      "promise ring"
    ]
  },
  {
    "id": 299,
    "originalId": null,
    "name": "Keywords",
    "group": "Couples Milestones & Relationship Wagers",
    "keywords": [
      "anniversary dinner",
      "aug 16",
      "highest package bet",
      "couple retreat",
      "romantic gift",
      "date night",
      "valentine",
      "promise ring"
    ]
  },
  {
    "id": 300,
    "originalId": 145,
    "name": "Cryptography & Encryption Tools",
    "group": "Cryptography & Encryption Tools",
    "keywords": [
      "bitlock",
      "file encryption",
      "pgp key",
      "yubikey",
      "hardware token",
      "secure enclave",
      "ssl cert",
      "vpn subscription",
      "nordvpn"
    ]
  },
  {
    "id": 301,
    "originalId": null,
    "name": "Keywords",
    "group": "Cryptography & Encryption Tools",
    "keywords": [
      "bitlock",
      "file encryption",
      "pgp key",
      "yubikey",
      "hardware token",
      "secure enclave",
      "ssl cert",
      "vpn subscription",
      "nordvpn"
    ]
  },
  {
    "id": 302,
    "originalId": 146,
    "name": "High-Frequency Trading & Quant Tools",
    "group": "High-Frequency Trading & Quant Tools",
    "keywords": [
      "bloomberg terminal",
      "algorithmic trading bot",
      "api rate limits",
      "quantconnect",
      "metatrader",
      "order book data",
      "tick data"
    ]
  },
  {
    "id": 303,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Frequency Trading & Quant Tools",
    "keywords": [
      "bloomberg terminal",
      "algorithmic trading bot",
      "api rate limits",
      "quantconnect",
      "metatrader",
      "order book data",
      "tick data"
    ]
  },
  {
    "id": 304,
    "originalId": 147,
    "name": "Aerospace & Drone Enthusiast",
    "group": "Aerospace & Drone Enthusiast",
    "keywords": [
      "dji drone",
      "drone battery",
      "propeller guards",
      "rc aircraft",
      "drone license fee",
      "fpv goggles",
      "drone repair",
      "aerial photography"
    ]
  },
  {
    "id": 305,
    "originalId": null,
    "name": "Keywords",
    "group": "Aerospace & Drone Enthusiast",
    "keywords": [
      "dji drone",
      "drone battery",
      "propeller guards",
      "rc aircraft",
      "drone license fee",
      "fpv goggles",
      "drone repair",
      "aerial photography"
    ]
  },
  {
    "id": 306,
    "originalId": 148,
    "name": "Aquariums, Marine Life & Pisciculture",
    "group": "Aquariums, Marine Life & Pisciculture",
    "keywords": [
      "aquarium in bangalore",
      "fish tank",
      "aquarium filter",
      "fish food",
      "aquatic plants",
      "marine salt",
      "aquarium heater",
      "coral frag"
    ]
  },
  {
    "id": 307,
    "originalId": null,
    "name": "Keywords",
    "group": "Aquariums, Marine Life & Pisciculture",
    "keywords": [
      "aquarium in bangalore",
      "fish tank",
      "aquarium filter",
      "fish food",
      "aquatic plants",
      "marine salt",
      "aquarium heater",
      "coral frag"
    ]
  },
  {
    "id": 308,
    "originalId": 149,
    "name": "Specialty Coffee & Barista Gear",
    "group": "Specialty Coffee & Barista Gear",
    "keywords": [
      "espresso machine",
      "coffee grinder",
      "french press",
      "arabica beans",
      "pour over",
      "v60",
      "aeropress",
      "barista milk",
      "tamper"
    ]
  },
  {
    "id": 309,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialty Coffee & Barista Gear",
    "keywords": [
      "espresso machine",
      "coffee grinder",
      "french press",
      "arabica beans",
      "pour over",
      "v60",
      "aeropress",
      "barista milk",
      "tamper"
    ]
  },
  {
    "id": 310,
    "originalId": 150,
    "name": "Virtual Reality & Metaverse Assets",
    "group": "Virtual Reality & Metaverse Assets",
    "keywords": [
      "meta quest",
      "vr headset",
      "virtual land",
      "vr chat premium",
      "oculus store",
      "mixed reality",
      "vr accessories",
      "beat saber"
    ]
  },
  {
    "id": 311,
    "originalId": null,
    "name": "Keywords",
    "group": "Virtual Reality & Metaverse Assets",
    "keywords": [
      "meta quest",
      "vr headset",
      "virtual land",
      "vr chat premium",
      "oculus store",
      "mixed reality",
      "vr accessories",
      "beat saber"
    ]
  },
  {
    "id": 312,
    "originalId": 151,
    "name": "Bioinformatics & Genetic Sequencing",
    "group": "Bioinformatics & Genetic Sequencing",
    "keywords": [
      "crispr kit",
      "dna extraction kit",
      "23andme",
      "ancestrydna",
      "lab incubator",
      "bio-reagents",
      "sequencing fee"
    ]
  },
  {
    "id": 313,
    "originalId": null,
    "name": "Keywords",
    "group": "Bioinformatics & Genetic Sequencing",
    "keywords": [
      "crispr kit",
      "dna extraction kit",
      "23andme",
      "ancestrydna",
      "lab incubator",
      "bio-reagents",
      "sequencing fee"
    ]
  },
  {
    "id": 314,
    "originalId": 152,
    "name": "Specialized Tea & Herbal Infusions",
    "group": "Specialized Tea & Herbal Infusions",
    "keywords": [
      "matcha powder",
      "oolong tea",
      "chamomile",
      "green tea bulk",
      "cast iron teapot",
      "tea strainer",
      "boba tea",
      "bubble tea"
    ]
  },
  {
    "id": 315,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Tea & Herbal Infusions",
    "keywords": [
      "matcha powder",
      "oolong tea",
      "chamomile",
      "green tea bulk",
      "cast iron teapot",
      "tea strainer",
      "boba tea",
      "bubble tea"
    ]
  },
  {
    "id": 316,
    "originalId": 153,
    "name": "Custom Keyboard & Mechanical Switches",
    "group": "Custom Keyboard & Mechanical Switches",
    "keywords": [
      "mechanical keyboard",
      "cherry mx",
      "keycaps",
      "switch lube",
      "pcb board",
      "custom deskmat",
      "hot-swappable",
      "tactile switches"
    ]
  },
  {
    "id": 317,
    "originalId": null,
    "name": "Keywords",
    "group": "Custom Keyboard & Mechanical Switches",
    "keywords": [
      "mechanical keyboard",
      "cherry mx",
      "keycaps",
      "switch lube",
      "pcb board",
      "custom deskmat",
      "hot-swappable",
      "tactile switches"
    ]
  },
  {
    "id": 318,
    "originalId": 154,
    "name": "Horology Servicing & Watch Parts",
    "group": "Horology Servicing & Watch Parts",
    "keywords": [
      "watch movement",
      "sapphire crystal",
      "nato strap",
      "watchmaker tools",
      "ultrasonic cleaner",
      "chronometer certification"
    ]
  },
  {
    "id": 319,
    "originalId": null,
    "name": "Keywords",
    "group": "Horology Servicing & Watch Parts",
    "keywords": [
      "watch movement",
      "sapphire crystal",
      "nato strap",
      "watchmaker tools",
      "ultrasonic cleaner",
      "chronometer certification"
    ]
  },
  {
    "id": 320,
    "originalId": 155,
    "name": "Smart City & Urban Mobility",
    "group": "Smart City & Urban Mobility",
    "keywords": [
      "yulu bike",
      "bounce ride",
      "electric scooter rental",
      "ev charging station",
      "ather grid",
      "metro card recharge",
      "smart transit"
    ]
  },
  {
    "id": 321,
    "originalId": null,
    "name": "Keywords",
    "group": "Smart City & Urban Mobility",
    "keywords": [
      "yulu bike",
      "bounce ride",
      "electric scooter rental",
      "ev charging station",
      "ather grid",
      "metro card recharge",
      "smart transit"
    ]
  },
  {
    "id": 322,
    "originalId": 156,
    "name": "Philately & Numismatic Appraisals",
    "group": "Philately & Numismatic Appraisals",
    "keywords": [
      "stamp album",
      "first day cover",
      "coin grading",
      "numismatic society",
      "rare banknote",
      "vintage stamp auction"
    ]
  },
  {
    "id": 323,
    "originalId": null,
    "name": "Keywords",
    "group": "Philately & Numismatic Appraisals",
    "keywords": [
      "stamp album",
      "first day cover",
      "coin grading",
      "numismatic society",
      "rare banknote",
      "vintage stamp auction"
    ]
  },
  {
    "id": 324,
    "originalId": 157,
    "name": "Independent Filmmaking & Cinema Gear",
    "group": "Independent Filmmaking & Cinema Gear",
    "keywords": [
      "clapboard",
      "anamorphic lens",
      "cinema camera",
      "nd filter",
      "boom mic",
      "slate",
      "location permit",
      "film festival entry"
    ]
  },
  {
    "id": 325,
    "originalId": null,
    "name": "Keywords",
    "group": "Independent Filmmaking & Cinema Gear",
    "keywords": [
      "clapboard",
      "anamorphic lens",
      "cinema camera",
      "nd filter",
      "boom mic",
      "slate",
      "location permit",
      "film festival entry"
    ]
  },
  {
    "id": 326,
    "originalId": 158,
    "name": "Specialty Diets & Bio-hacking",
    "group": "Specialty Diets & Bio-hacking",
    "keywords": [
      "nootropics",
      "lions mane",
      "ashwagandha",
      "shilajit",
      "peptide therapy",
      "exogenous ketones",
      "cgm sensor"
    ]
  },
  {
    "id": 327,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialty Diets & Bio-hacking",
    "keywords": [
      "nootropics",
      "lions mane",
      "ashwagandha",
      "shilajit",
      "peptide therapy",
      "exogenous ketones",
      "cgm sensor"
    ]
  },
  {
    "id": 328,
    "originalId": 159,
    "name": "Astronomy & Astrophotography",
    "group": "Astronomy & Astrophotography",
    "keywords": [
      "equatorial mount",
      "deep sky camera",
      "telescope eyepiece",
      "star chart",
      "observatory membership",
      "light pollution filter"
    ]
  },
  {
    "id": 329,
    "originalId": null,
    "name": "Keywords",
    "group": "Astronomy & Astrophotography",
    "keywords": [
      "equatorial mount",
      "deep sky camera",
      "telescope eyepiece",
      "star chart",
      "observatory membership",
      "light pollution filter"
    ]
  },
  {
    "id": 330,
    "originalId": 160,
    "name": "Perfumery, Colognes & Olfactory",
    "group": "Perfumery, Colognes & Olfactory",
    "keywords": [
      "eau de parfum",
      "attar",
      "essential oils",
      "fragrance decant",
      "diffuser",
      "musk",
      "niche perfume",
      "oudh"
    ]
  },
  {
    "id": 331,
    "originalId": null,
    "name": "Keywords",
    "group": "Perfumery, Colognes & Olfactory",
    "keywords": [
      "eau de parfum",
      "attar",
      "essential oils",
      "fragrance decant",
      "diffuser",
      "musk",
      "niche perfume",
      "oudh"
    ]
  },
  {
    "id": 332,
    "originalId": 161,
    "name": "Calligraphy, Typography & Fine Pens",
    "group": "Calligraphy, Typography & Fine Pens",
    "keywords": [
      "fountain pen",
      "pilot vanishing point",
      "lamy safari",
      "ink bottle",
      "calligraphy nib",
      "rhodia notebook",
      "wax seal"
    ]
  },
  {
    "id": 333,
    "originalId": null,
    "name": "Keywords",
    "group": "Calligraphy, Typography & Fine Pens",
    "keywords": [
      "fountain pen",
      "pilot vanishing point",
      "lamy safari",
      "ink bottle",
      "calligraphy nib",
      "rhodia notebook",
      "wax seal"
    ]
  },
  {
    "id": 334,
    "originalId": 162,
    "name": "Spearfishing & Deep Sea Diving",
    "group": "Spearfishing & Deep Sea Diving",
    "keywords": [
      "speargun",
      "wetsuit",
      "dive computer",
      "freediving fins",
      "weight belt",
      "dive mask",
      "diving cylinder recharge"
    ]
  },
  {
    "id": 335,
    "originalId": null,
    "name": "Keywords",
    "group": "Spearfishing & Deep Sea Diving",
    "keywords": [
      "speargun",
      "wetsuit",
      "dive computer",
      "freediving fins",
      "weight belt",
      "dive mask",
      "diving cylinder recharge"
    ]
  },
  {
    "id": 336,
    "originalId": 163,
    "name": "Equestrian & Horse Riding",
    "group": "Equestrian & Horse Riding",
    "keywords": [
      "riding boots",
      "saddle",
      "horse feed",
      "equestrian club",
      "riding helmet",
      "horseshoe",
      "riding crop"
    ]
  },
  {
    "id": 337,
    "originalId": null,
    "name": "Keywords",
    "group": "Equestrian & Horse Riding",
    "keywords": [
      "riding boots",
      "saddle",
      "horse feed",
      "equestrian club",
      "riding helmet",
      "horseshoe",
      "riding crop"
    ]
  },
  {
    "id": 338,
    "originalId": 164,
    "name": "Beekeeping & Apiary",
    "group": "Beekeeping & Apiary",
    "keywords": [
      "bee suit",
      "smoker",
      "honeycomb frame",
      "beeswax",
      "raw honey",
      "apiary lease",
      "queen bee"
    ]
  },
  {
    "id": 339,
    "originalId": null,
    "name": "Keywords",
    "group": "Beekeeping & Apiary",
    "keywords": [
      "bee suit",
      "smoker",
      "honeycomb frame",
      "beeswax",
      "raw honey",
      "apiary lease",
      "queen bee"
    ]
  },
  {
    "id": 340,
    "originalId": 165,
    "name": "Mountaineering & Alpine Gear",
    "group": "Mountaineering & Alpine Gear",
    "keywords": [
      "crampons",
      "ice axe",
      "carabiner",
      "climbing harness",
      "chalk bag",
      "bouldering crash pad",
      "climbing shoe"
    ]
  },
  {
    "id": 341,
    "originalId": null,
    "name": "Keywords",
    "group": "Mountaineering & Alpine Gear",
    "keywords": [
      "crampons",
      "ice axe",
      "carabiner",
      "climbing harness",
      "chalk bag",
      "bouldering crash pad",
      "climbing shoe"
    ]
  },
  {
    "id": 342,
    "originalId": 166,
    "name": "Archery & Target Shooting",
    "group": "Archery & Target Shooting",
    "keywords": [
      "recurve bow",
      "compound bow",
      "carbon arrows",
      "archery target",
      "bowstring",
      "quiver",
      "arm guard"
    ]
  },
  {
    "id": 343,
    "originalId": null,
    "name": "Keywords",
    "group": "Archery & Target Shooting",
    "keywords": [
      "recurve bow",
      "compound bow",
      "carbon arrows",
      "archery target",
      "bowstring",
      "quiver",
      "arm guard"
    ]
  },
  {
    "id": 344,
    "originalId": 167,
    "name": "Survival Prep & Bushcraft",
    "group": "Survival Prep & Bushcraft",
    "keywords": [
      "flint and steel",
      "paracord",
      "survival knife",
      "emergency rations",
      "water purifier tablet",
      "tactical backpack"
    ]
  },
  {
    "id": 345,
    "originalId": null,
    "name": "Keywords",
    "group": "Survival Prep & Bushcraft",
    "keywords": [
      "flint and steel",
      "paracord",
      "survival knife",
      "emergency rations",
      "water purifier tablet",
      "tactical backpack"
    ]
  },
  {
    "id": 346,
    "originalId": 168,
    "name": "Taxidermy & Entomology",
    "group": "Taxidermy & Entomology",
    "keywords": [
      "display dome",
      "pinning block",
      "entomology pins",
      "shadow box",
      "insect specimen",
      "preservation chemical"
    ]
  },
  {
    "id": 347,
    "originalId": null,
    "name": "Keywords",
    "group": "Taxidermy & Entomology",
    "keywords": [
      "display dome",
      "pinning block",
      "entomology pins",
      "shadow box",
      "insect specimen",
      "preservation chemical"
    ]
  },
  {
    "id": 348,
    "originalId": 169,
    "name": "Podcast Production & Broadcasting",
    "group": "Podcast Production & Broadcasting",
    "keywords": [
      "shure sm7b",
      "audio interface",
      "soundproofing foam",
      "podcast hosting",
      "pop filter",
      "mic arm"
    ]
  },
  {
    "id": 349,
    "originalId": null,
    "name": "Keywords",
    "group": "Podcast Production & Broadcasting",
    "keywords": [
      "shure sm7b",
      "audio interface",
      "soundproofing foam",
      "podcast hosting",
      "pop filter",
      "mic arm"
    ]
  },
  {
    "id": 350,
    "originalId": 170,
    "name": "Vintage Arcade & Pinball Maintenance",
    "group": "Vintage Arcade & Pinball Maintenance",
    "keywords": [
      "arcade cabinet",
      "pinball flipper",
      "jamma board",
      "arcade token",
      "coin mech",
      "crt monitor repair"
    ]
  },
  {
    "id": 351,
    "originalId": null,
    "name": "Keywords",
    "group": "Vintage Arcade & Pinball Maintenance",
    "keywords": [
      "arcade cabinet",
      "pinball flipper",
      "jamma board",
      "arcade token",
      "coin mech",
      "crt monitor repair"
    ]
  },
  {
    "id": 352,
    "originalId": 171,
    "name": "Lockpicking & Physical Security Testing",
    "group": "Lockpicking & Physical Security Testing",
    "keywords": [
      "lockpick set",
      "tension wrench",
      "transparent lock",
      "padlock shim",
      "security pins",
      "locksmith tool"
    ]
  },
  {
    "id": 353,
    "originalId": null,
    "name": "Keywords",
    "group": "Lockpicking & Physical Security Testing",
    "keywords": [
      "lockpick set",
      "tension wrench",
      "transparent lock",
      "padlock shim",
      "security pins",
      "locksmith tool"
    ]
  },
  {
    "id": 354,
    "originalId": 172,
    "name": "Mycology & Mushroom Cultivation",
    "group": "Mycology & Mushroom Cultivation",
    "keywords": [
      "spore syringe",
      "grow bag",
      "sterile substrate",
      "laminar flow hood",
      "grain spawn",
      "fruiting chamber"
    ]
  },
  {
    "id": 355,
    "originalId": null,
    "name": "Keywords",
    "group": "Mycology & Mushroom Cultivation",
    "keywords": [
      "spore syringe",
      "grow bag",
      "sterile substrate",
      "laminar flow hood",
      "grain spawn",
      "fruiting chamber"
    ]
  },
  {
    "id": 356,
    "originalId": 173,
    "name": "Blacksmithing & Forging",
    "group": "Blacksmithing & Forging",
    "keywords": [
      "anvil",
      "forging hammer",
      "forge blower",
      "blacksmith tongs",
      "raw steel stock",
      "quenching oil"
    ]
  },
  {
    "id": 357,
    "originalId": null,
    "name": "Keywords",
    "group": "Blacksmithing & Forging",
    "keywords": [
      "anvil",
      "forging hammer",
      "forge blower",
      "blacksmith tongs",
      "raw steel stock",
      "quenching oil"
    ]
  },
  {
    "id": 358,
    "originalId": 174,
    "name": "Hydroponics & Indoor Farming",
    "group": "Hydroponics & Indoor Farming",
    "keywords": [
      "grow tent",
      "led grow light",
      "hydroponic nutrient",
      "net pots",
      "rockwool",
      "ph up down",
      "air stone"
    ]
  },
  {
    "id": 359,
    "originalId": null,
    "name": "Keywords",
    "group": "Hydroponics & Indoor Farming",
    "keywords": [
      "grow tent",
      "led grow light",
      "hydroponic nutrient",
      "net pots",
      "rockwool",
      "ph up down",
      "air stone"
    ]
  },
  {
    "id": 360,
    "originalId": 175,
    "name": "Vinyl Records & Analog Audio",
    "group": "Vinyl Records & Analog Audio",
    "keywords": [
      "turntable",
      "vinyl record",
      "phono preamp",
      "stylus replacement",
      "record cleaning kit",
      "audiophile cable"
    ]
  },
  {
    "id": 361,
    "originalId": null,
    "name": "Keywords",
    "group": "Vinyl Records & Analog Audio",
    "keywords": [
      "turntable",
      "vinyl record",
      "phono preamp",
      "stylus replacement",
      "record cleaning kit",
      "audiophile cable"
    ]
  },
  {
    "id": 362,
    "originalId": 176,
    "name": "Retro Computing & Emulation",
    "group": "Retro Computing & Emulation",
    "keywords": [
      "raspberry pi",
      "retroarch",
      "gameboy advance mod",
      "crt tv",
      "floppy disk",
      "retro console",
      "everdrive"
    ]
  },
  {
    "id": 363,
    "originalId": null,
    "name": "Keywords",
    "group": "Retro Computing & Emulation",
    "keywords": [
      "raspberry pi",
      "retroarch",
      "gameboy advance mod",
      "crt tv",
      "floppy disk",
      "retro console",
      "everdrive"
    ]
  },
  {
    "id": 364,
    "originalId": 177,
    "name": "Mixology & Home Bartending",
    "group": "Mixology & Home Bartending",
    "keywords": [
      "cocktail shaker",
      "jigger",
      "muddler",
      "cocktail bitters",
      "coupe glass",
      "ice mold",
      "bar spoon"
    ]
  },
  {
    "id": 365,
    "originalId": null,
    "name": "Keywords",
    "group": "Mixology & Home Bartending",
    "keywords": [
      "cocktail shaker",
      "jigger",
      "muddler",
      "cocktail bitters",
      "coupe glass",
      "ice mold",
      "bar spoon"
    ]
  },
  {
    "id": 366,
    "originalId": 178,
    "name": "Geocaching & Orienteering",
    "group": "Geocaching & Orienteering",
    "keywords": [
      "handheld gps",
      "geocache container",
      "compass",
      "topo map",
      "hiking gaiters",
      "cache logbook"
    ]
  },
  {
    "id": 367,
    "originalId": null,
    "name": "Keywords",
    "group": "Geocaching & Orienteering",
    "keywords": [
      "handheld gps",
      "geocache container",
      "compass",
      "topo map",
      "hiking gaiters",
      "cache logbook"
    ]
  },
  {
    "id": 368,
    "originalId": 179,
    "name": "Magic, Illusion & Sleight of Hand",
    "group": "Magic, Illusion & Sleight of Hand",
    "keywords": [
      "bicycle playing cards",
      "flash paper",
      "magic prop",
      "trick coin",
      "illusionist masterclass",
      "magician mat"
    ]
  },
  {
    "id": 369,
    "originalId": null,
    "name": "Keywords",
    "group": "Magic, Illusion & Sleight of Hand",
    "keywords": [
      "bicycle playing cards",
      "flash paper",
      "magic prop",
      "trick coin",
      "illusionist masterclass",
      "magician mat"
    ]
  },
  {
    "id": 370,
    "originalId": 180,
    "name": "Pottery, Ceramics & Kiln Firing",
    "group": "Pottery, Ceramics & Kiln Firing",
    "keywords": [
      "pottery wheel",
      "stoneware clay",
      "ceramic glaze",
      "kiln firing fee",
      "sculpting loop",
      "bisque ware"
    ]
  },
  {
    "id": 371,
    "originalId": null,
    "name": "Keywords",
    "group": "Pottery, Ceramics & Kiln Firing",
    "keywords": [
      "pottery wheel",
      "stoneware clay",
      "ceramic glaze",
      "kiln firing fee",
      "sculpting loop",
      "bisque ware"
    ]
  },
  {
    "id": 372,
    "originalId": 181,
    "name": "Bonsai Cultivation & Shaping",
    "group": "Bonsai Cultivation & Shaping",
    "keywords": [
      "bonsai shears",
      "concave cutter",
      "aluminum wire",
      "akadama soil",
      "bonsai pot",
      "jin pliers"
    ]
  },
  {
    "id": 373,
    "originalId": null,
    "name": "Keywords",
    "group": "Bonsai Cultivation & Shaping",
    "keywords": [
      "bonsai shears",
      "concave cutter",
      "aluminum wire",
      "akadama soil",
      "bonsai pot",
      "jin pliers"
    ]
  },
  {
    "id": 374,
    "originalId": 182,
    "name": "Leatherworking & Cobbling",
    "group": "Leatherworking & Cobbling",
    "keywords": [
      "leather hide",
      "edge beveler",
      "leather dye",
      "waxed thread",
      "stitching awl",
      "shoe last"
    ]
  },
  {
    "id": 375,
    "originalId": null,
    "name": "Keywords",
    "group": "Leatherworking & Cobbling",
    "keywords": [
      "leather hide",
      "edge beveler",
      "leather dye",
      "waxed thread",
      "stitching awl",
      "shoe last"
    ]
  },
  {
    "id": 376,
    "originalId": 183,
    "name": "Origami & Paper Crafting",
    "group": "Origami & Paper Crafting",
    "keywords": [
      "washi paper",
      "kami",
      "bone folder",
      "quilling tool",
      "modular origami",
      "craft scalpel"
    ]
  },
  {
    "id": 377,
    "originalId": null,
    "name": "Keywords",
    "group": "Origami & Paper Crafting",
    "keywords": [
      "washi paper",
      "kami",
      "bone folder",
      "quilling tool",
      "modular origami",
      "craft scalpel"
    ]
  },
  {
    "id": 378,
    "originalId": 184,
    "name": "Genealogy & Ancestry Research",
    "group": "Genealogy & Ancestry Research",
    "keywords": [
      "ancestry subscription",
      "family tree software",
      "heritage archive fee",
      "historical record request"
    ]
  },
  {
    "id": 379,
    "originalId": null,
    "name": "Keywords",
    "group": "Genealogy & Ancestry Research",
    "keywords": [
      "ancestry subscription",
      "family tree software",
      "heritage archive fee",
      "historical record request"
    ]
  },
  {
    "id": 380,
    "originalId": 185,
    "name": "Homebrewing & Fermentation",
    "group": "Homebrewing & Fermentation",
    "keywords": [
      "brewing carboy",
      "fermentation lock",
      "brewers yeast",
      "malt extract",
      "hydrometer",
      "kombucha scoby"
    ]
  },
  {
    "id": 381,
    "originalId": null,
    "name": "Keywords",
    "group": "Homebrewing & Fermentation",
    "keywords": [
      "brewing carboy",
      "fermentation lock",
      "brewers yeast",
      "malt extract",
      "hydrometer",
      "kombucha scoby"
    ]
  },
  {
    "id": 382,
    "originalId": 186,
    "name": "Gemology & Lapidary",
    "group": "Gemology & Lapidary",
    "keywords": [
      "cabochon",
      "faceting machine",
      "polishing grit",
      "jewelers loupe",
      "rough gemstone",
      "lapidary saw"
    ]
  },
  {
    "id": 383,
    "originalId": null,
    "name": "Keywords",
    "group": "Gemology & Lapidary",
    "keywords": [
      "cabochon",
      "faceting machine",
      "polishing grit",
      "jewelers loupe",
      "rough gemstone",
      "lapidary saw"
    ]
  },
  {
    "id": 384,
    "originalId": 187,
    "name": "Meteorology & Weather Tracking",
    "group": "Meteorology & Weather Tracking",
    "keywords": [
      "anemometer",
      "barometer",
      "rain gauge",
      "weather station",
      "weather satellite api",
      "wind vane"
    ]
  },
  {
    "id": 385,
    "originalId": null,
    "name": "Keywords",
    "group": "Meteorology & Weather Tracking",
    "keywords": [
      "anemometer",
      "barometer",
      "rain gauge",
      "weather station",
      "weather satellite api",
      "wind vane"
    ]
  },
  {
    "id": 386,
    "originalId": 188,
    "name": "Soapmaking & Cosmetics Crafting",
    "group": "Soapmaking & Cosmetics Crafting",
    "keywords": [
      "lye",
      "shea butter",
      "soap mold",
      "mica powder",
      "fragrance oil",
      "cold process soap"
    ]
  },
  {
    "id": 387,
    "originalId": null,
    "name": "Keywords",
    "group": "Soapmaking & Cosmetics Crafting",
    "keywords": [
      "lye",
      "shea butter",
      "soap mold",
      "mica powder",
      "fragrance oil",
      "cold process soap"
    ]
  },
  {
    "id": 388,
    "originalId": 189,
    "name": "Ham Radio & Amateur Broadcasting",
    "group": "Ham Radio & Amateur Broadcasting",
    "keywords": [
      "vhf transceiver",
      "ham radio license",
      "antenna tuner",
      "sdr receiver",
      "coax cable",
      "morse key"
    ]
  },
  {
    "id": 389,
    "originalId": null,
    "name": "Keywords",
    "group": "Ham Radio & Amateur Broadcasting",
    "keywords": [
      "vhf transceiver",
      "ham radio license",
      "antenna tuner",
      "sdr receiver",
      "coax cable",
      "morse key"
    ]
  },
  {
    "id": 390,
    "originalId": 190,
    "name": "Fencing & Swordplay",
    "group": "Fencing & Swordplay",
    "keywords": [
      "fencing foil",
      "epee",
      "sabre",
      "lame",
      "fencing mask",
      "fencing glove",
      "piste fee"
    ]
  },
  {
    "id": 391,
    "originalId": null,
    "name": "Keywords",
    "group": "Fencing & Swordplay",
    "keywords": [
      "fencing foil",
      "epee",
      "sabre",
      "lame",
      "fencing mask",
      "fencing glove",
      "piste fee"
    ]
  },
  {
    "id": 392,
    "originalId": 191,
    "name": "Kite Surfing & Wind Sports",
    "group": "Kite Surfing & Wind Sports",
    "keywords": [
      "kiteboard",
      "control bar",
      "harness",
      "anemometer",
      "windsurf sail",
      "kite repair tape"
    ]
  },
  {
    "id": 393,
    "originalId": null,
    "name": "Keywords",
    "group": "Kite Surfing & Wind Sports",
    "keywords": [
      "kiteboard",
      "control bar",
      "harness",
      "anemometer",
      "windsurf sail",
      "kite repair tape"
    ]
  },
  {
    "id": 394,
    "originalId": 192,
    "name": "Terrariums & Vivarium Design",
    "group": "Terrariums & Vivarium Design",
    "keywords": [
      "glass enclosure",
      "springtails",
      "isopods",
      "terrarium moss",
      "driftwood",
      "hygrometer"
    ]
  },
  {
    "id": 395,
    "originalId": null,
    "name": "Keywords",
    "group": "Terrariums & Vivarium Design",
    "keywords": [
      "glass enclosure",
      "springtails",
      "isopods",
      "terrarium moss",
      "driftwood",
      "hygrometer"
    ]
  },
  {
    "id": 396,
    "originalId": 193,
    "name": "Paintball & Airsoft",
    "group": "Paintball & Airsoft",
    "keywords": [
      "paintball marker",
      "airsoft rifle",
      "co2 cartridge",
      "biodegradable bbs",
      "tactical vest",
      "paintball mask"
    ]
  },
  {
    "id": 397,
    "originalId": null,
    "name": "Keywords",
    "group": "Paintball & Airsoft",
    "keywords": [
      "paintball marker",
      "airsoft rifle",
      "co2 cartridge",
      "biodegradable bbs",
      "tactical vest",
      "paintball mask"
    ]
  },
  {
    "id": 398,
    "originalId": 194,
    "name": "Unicycling & Juggling",
    "group": "Unicycling & Juggling",
    "keywords": [
      "unicycle",
      "juggling clubs",
      "diabolo",
      "contact juggling ball",
      "poi",
      "fire spinning gear"
    ]
  },
  {
    "id": 399,
    "originalId": null,
    "name": "Keywords",
    "group": "Unicycling & Juggling",
    "keywords": [
      "unicycle",
      "juggling clubs",
      "diabolo",
      "contact juggling ball",
      "poi",
      "fire spinning gear"
    ]
  },
  {
    "id": 400,
    "originalId": 195,
    "name": "Scripophily (Antique Bonds & Shares)",
    "group": "Scripophily (Antique Bonds & Shares)",
    "keywords": [
      "vintage stock certificate",
      "antique bond",
      "financial history archive",
      "stock ticker tape"
    ]
  },
  {
    "id": 401,
    "originalId": null,
    "name": "Keywords",
    "group": "Scripophily (Antique Bonds & Shares)",
    "keywords": [
      "vintage stock certificate",
      "antique bond",
      "financial history archive",
      "stock ticker tape"
    ]
  },
  {
    "id": 402,
    "originalId": 196,
    "name": "Speedcubing & Puzzles",
    "group": "Speedcubing & Puzzles",
    "keywords": [
      "rubiks cube",
      "moyu",
      "gan cube",
      "speedcube lube",
      "cube timer",
      "puzzle mat"
    ]
  },
  {
    "id": 403,
    "originalId": null,
    "name": "Keywords",
    "group": "Speedcubing & Puzzles",
    "keywords": [
      "rubiks cube",
      "moyu",
      "gan cube",
      "speedcube lube",
      "cube timer",
      "puzzle mat"
    ]
  },
  {
    "id": 404,
    "originalId": 197,
    "name": "Falconry & Bird Training",
    "group": "Falconry & Bird Training",
    "keywords": [
      "falconry glove",
      "bird jesses",
      "falcon hood",
      "lure",
      "telemetry tracker",
      "raw meat feed"
    ]
  },
  {
    "id": 405,
    "originalId": null,
    "name": "Keywords",
    "group": "Falconry & Bird Training",
    "keywords": [
      "falconry glove",
      "bird jesses",
      "falcon hood",
      "lure",
      "telemetry tracker",
      "raw meat feed"
    ]
  },
  {
    "id": 406,
    "originalId": 198,
    "name": "Parkour & Freerunning",
    "group": "Parkour & Freerunning",
    "keywords": [
      "parkour shoes",
      "sweatpants",
      "gym crash mat",
      "freerunning class",
      "grip chalk"
    ]
  },
  {
    "id": 407,
    "originalId": null,
    "name": "Keywords",
    "group": "Parkour & Freerunning",
    "keywords": [
      "parkour shoes",
      "sweatpants",
      "gym crash mat",
      "freerunning class",
      "grip chalk"
    ]
  },
  {
    "id": 408,
    "originalId": 199,
    "name": "Callisthenics & Street Workout",
    "group": "Callisthenics & Street Workout",
    "keywords": [
      "gymnastic rings",
      "pull-up bar",
      "parallettes",
      "weight vest",
      "liquid chalk",
      "resistance band"
    ]
  },
  {
    "id": 409,
    "originalId": null,
    "name": "Keywords",
    "group": "Callisthenics & Street Workout",
    "keywords": [
      "gymnastic rings",
      "pull-up bar",
      "parallettes",
      "weight vest",
      "liquid chalk",
      "resistance band"
    ]
  },
  {
    "id": 410,
    "originalId": 200,
    "name": "Sandboarding & Dune Sports",
    "group": "Sandboarding & Dune Sports",
    "keywords": [
      "sandboard",
      "board wax",
      "dune buggy rental",
      "desert safari ticket",
      "sand goggles"
    ]
  },
  {
    "id": 411,
    "originalId": null,
    "name": "Keywords",
    "group": "Sandboarding & Dune Sports",
    "keywords": [
      "sandboard",
      "board wax",
      "dune buggy rental",
      "desert safari ticket",
      "sand goggles"
    ]
  },
  {
    "id": 412,
    "originalId": 201,
    "name": "Ghost Hunting & Paranormal Investigation",
    "group": "Ghost Hunting & Paranormal Investigation",
    "keywords": [
      "emf meter",
      "evp recorder",
      "spirit box",
      "thermal imaging",
      "ir camera",
      "ghost tour ticket"
    ]
  },
  {
    "id": 413,
    "originalId": null,
    "name": "Keywords",
    "group": "Ghost Hunting & Paranormal Investigation",
    "keywords": [
      "emf meter",
      "evp recorder",
      "spirit box",
      "thermal imaging",
      "ir camera",
      "ghost tour ticket"
    ]
  },
  {
    "id": 414,
    "originalId": 202,
    "name": "Metal Detecting & Treasure Hunting",
    "group": "Metal Detecting & Treasure Hunting",
    "keywords": [
      "metal detector",
      "pinpointer",
      "sand scoop",
      "finding pouch",
      "treasure hunting permit"
    ]
  },
  {
    "id": 415,
    "originalId": null,
    "name": "Keywords",
    "group": "Metal Detecting & Treasure Hunting",
    "keywords": [
      "metal detector",
      "pinpointer",
      "sand scoop",
      "finding pouch",
      "treasure hunting permit"
    ]
  },
  {
    "id": 416,
    "originalId": 203,
    "name": "Yo-Yoing & Skill Toys",
    "group": "Yo-Yoing & Skill Toys",
    "keywords": [
      "unresponsive yoyo",
      "yoyo string",
      "bearing lube",
      "counterweight",
      "kendama"
    ]
  },
  {
    "id": 417,
    "originalId": null,
    "name": "Keywords",
    "group": "Yo-Yoing & Skill Toys",
    "keywords": [
      "unresponsive yoyo",
      "yoyo string",
      "bearing lube",
      "counterweight",
      "kendama"
    ]
  },
  {
    "id": 418,
    "originalId": 204,
    "name": "Model Railroading & Dioramas",
    "group": "Model Railroading & Dioramas",
    "keywords": [
      "ho scale train",
      "n scale track",
      "diorama grass",
      "model train controller",
      "miniature figures"
    ]
  },
  {
    "id": 419,
    "originalId": null,
    "name": "Keywords",
    "group": "Model Railroading & Dioramas",
    "keywords": [
      "ho scale train",
      "n scale track",
      "diorama grass",
      "model train controller",
      "miniature figures"
    ]
  },
  {
    "id": 420,
    "originalId": 205,
    "name": "Bookbinding & Restorations",
    "group": "Bookbinding & Restorations",
    "keywords": [
      "book press",
      "awl",
      "binding thread",
      "pva glue",
      "bookcloth",
      "endpapers"
    ]
  },
  {
    "id": 421,
    "originalId": null,
    "name": "Keywords",
    "group": "Bookbinding & Restorations",
    "keywords": [
      "book press",
      "awl",
      "binding thread",
      "pva glue",
      "bookcloth",
      "endpapers"
    ]
  },
  {
    "id": 422,
    "originalId": 206,
    "name": "Glassblowing & Lampworking",
    "group": "Glassblowing & Lampworking",
    "keywords": [
      "glass rod",
      "blowpipe",
      "marver",
      "glassblowing class",
      "annealer",
      "dichroic glass"
    ]
  },
  {
    "id": 423,
    "originalId": null,
    "name": "Keywords",
    "group": "Glassblowing & Lampworking",
    "keywords": [
      "glass rod",
      "blowpipe",
      "marver",
      "glassblowing class",
      "annealer",
      "dichroic glass"
    ]
  },
  {
    "id": 424,
    "originalId": 207,
    "name": "Kite Flying & Fighter Kites",
    "group": "Kite Flying & Fighter Kites",
    "keywords": [
      "stunt kite",
      "kite string",
      "manja",
      "kite spool",
      "kite festival entry"
    ]
  },
  {
    "id": 425,
    "originalId": null,
    "name": "Keywords",
    "group": "Kite Flying & Fighter Kites",
    "keywords": [
      "stunt kite",
      "kite string",
      "manja",
      "kite spool",
      "kite festival entry"
    ]
  },
  {
    "id": 426,
    "originalId": 208,
    "name": "Ice Sculpting & Snow Art",
    "group": "Ice Sculpting & Snow Art",
    "keywords": [
      "ice chisel",
      "chainsaw",
      "ice block",
      "thermal gloves",
      "snow sculpting tool"
    ]
  },
  {
    "id": 427,
    "originalId": null,
    "name": "Keywords",
    "group": "Ice Sculpting & Snow Art",
    "keywords": [
      "ice chisel",
      "chainsaw",
      "ice block",
      "thermal gloves",
      "snow sculpting tool"
    ]
  },
  {
    "id": 428,
    "originalId": 209,
    "name": "Foraging & Wild Edibles",
    "group": "Foraging & Wild Edibles",
    "keywords": [
      "foraging basket",
      "mushroom knife",
      "field guide",
      "tick repellent",
      "wild plant book"
    ]
  },
  {
    "id": 429,
    "originalId": null,
    "name": "Keywords",
    "group": "Foraging & Wild Edibles",
    "keywords": [
      "foraging basket",
      "mushroom knife",
      "field guide",
      "tick repellent",
      "wild plant book"
    ]
  },
  {
    "id": 430,
    "originalId": 210,
    "name": "Miniature Painting & Wargaming",
    "group": "Miniature Painting & Wargaming",
    "keywords": [
      "citadel paint",
      "miniature primer",
      "wet palette",
      "sable brush",
      "warhammer figure"
    ]
  },
  {
    "id": 431,
    "originalId": null,
    "name": "Keywords",
    "group": "Miniature Painting & Wargaming",
    "keywords": [
      "citadel paint",
      "miniature primer",
      "wet palette",
      "sable brush",
      "warhammer figure"
    ]
  },
  {
    "id": 432,
    "originalId": 211,
    "name": "Cross-Stitch & Needlepoint",
    "group": "Cross-Stitch & Needlepoint",
    "keywords": [
      "aida cloth",
      "embroidery hoop",
      "dmc floss",
      "tapestry needle",
      "cross-stitch pattern"
    ]
  },
  {
    "id": 433,
    "originalId": null,
    "name": "Keywords",
    "group": "Cross-Stitch & Needlepoint",
    "keywords": [
      "aida cloth",
      "embroidery hoop",
      "dmc floss",
      "tapestry needle",
      "cross-stitch pattern"
    ]
  },
  {
    "id": 434,
    "originalId": 212,
    "name": "Slacklining & Highlining",
    "group": "Slacklining & Highlining",
    "keywords": [
      "slackline kit",
      "tree protector",
      "highline harness",
      "webbing",
      "carabiner"
    ]
  },
  {
    "id": 435,
    "originalId": null,
    "name": "Keywords",
    "group": "Slacklining & Highlining",
    "keywords": [
      "slackline kit",
      "tree protector",
      "highline harness",
      "webbing",
      "carabiner"
    ]
  },
  {
    "id": 436,
    "originalId": 213,
    "name": "Drone Racing (FPV)",
    "group": "Drone Racing (FPV)",
    "keywords": [
      "fpv frame",
      "lipo battery",
      "flight controller",
      "video transmitter",
      "fpv receiver"
    ]
  },
  {
    "id": 437,
    "originalId": null,
    "name": "Keywords",
    "group": "Drone Racing (FPV)",
    "keywords": [
      "fpv frame",
      "lipo battery",
      "flight controller",
      "video transmitter",
      "fpv receiver"
    ]
  },
  {
    "id": 438,
    "originalId": 214,
    "name": "Beatboxing & Loop Station",
    "group": "Beatboxing & Loop Station",
    "keywords": [
      "loop station",
      "dynamic mic",
      "vocal effects pedal",
      "beatbox battle ticket"
    ]
  },
  {
    "id": 439,
    "originalId": null,
    "name": "Keywords",
    "group": "Beatboxing & Loop Station",
    "keywords": [
      "loop station",
      "dynamic mic",
      "vocal effects pedal",
      "beatbox battle ticket"
    ]
  },
  {
    "id": 440,
    "originalId": 215,
    "name": "Cartography & Map Making",
    "group": "Cartography & Map Making",
    "keywords": [
      "drafting compass",
      "parchment",
      "mapping software",
      "topographic map",
      "globe"
    ]
  },
  {
    "id": 441,
    "originalId": null,
    "name": "Keywords",
    "group": "Cartography & Map Making",
    "keywords": [
      "drafting compass",
      "parchment",
      "mapping software",
      "topographic map",
      "globe"
    ]
  },
  {
    "id": 442,
    "originalId": 216,
    "name": "Mosaics & Tile Art",
    "group": "Mosaics & Tile Art",
    "keywords": [
      "glass tiles",
      "mosaic nippers",
      "grout",
      "tile adhesive",
      "mosaic base"
    ]
  },
  {
    "id": 443,
    "originalId": null,
    "name": "Keywords",
    "group": "Mosaics & Tile Art",
    "keywords": [
      "glass tiles",
      "mosaic nippers",
      "grout",
      "tile adhesive",
      "mosaic base"
    ]
  },
  {
    "id": 444,
    "originalId": 217,
    "name": "Puppetry & Ventriloquism",
    "group": "Puppetry & Ventriloquism",
    "keywords": [
      "ventriloquist dummy",
      "marionette",
      "hand puppet",
      "puppet stage",
      "scriptwriting book"
    ]
  },
  {
    "id": 445,
    "originalId": null,
    "name": "Keywords",
    "group": "Puppetry & Ventriloquism",
    "keywords": [
      "ventriloquist dummy",
      "marionette",
      "hand puppet",
      "puppet stage",
      "scriptwriting book"
    ]
  },
  {
    "id": 446,
    "originalId": 218,
    "name": "Watchmaking & Horology Repair",
    "group": "Watchmaking & Horology Repair",
    "keywords": [
      "movement holder",
      "watch oil",
      "tweezers",
      "loupe",
      "mainspring winder"
    ]
  },
  {
    "id": 447,
    "originalId": null,
    "name": "Keywords",
    "group": "Watchmaking & Horology Repair",
    "keywords": [
      "movement holder",
      "watch oil",
      "tweezers",
      "loupe",
      "mainspring winder"
    ]
  },
  {
    "id": 448,
    "originalId": 219,
    "name": "Origami & Paper Folding",
    "group": "Origami & Paper Folding",
    "keywords": [
      "origami paper",
      "bone folder",
      "modular origami book",
      "wet folding paper"
    ]
  },
  {
    "id": 449,
    "originalId": null,
    "name": "Keywords",
    "group": "Origami & Paper Folding",
    "keywords": [
      "origami paper",
      "bone folder",
      "modular origami book",
      "wet folding paper"
    ]
  },
  {
    "id": 450,
    "originalId": 220,
    "name": "Pyrography & Wood Burning",
    "group": "Pyrography & Wood Burning",
    "keywords": [
      "wood burning pen",
      "basswood blank",
      "transfer paper",
      "pyrography tip"
    ]
  },
  {
    "id": 451,
    "originalId": null,
    "name": "Keywords",
    "group": "Pyrography & Wood Burning",
    "keywords": [
      "wood burning pen",
      "basswood blank",
      "transfer paper",
      "pyrography tip"
    ]
  },
  {
    "id": 452,
    "originalId": 221,
    "name": "Aquascaping & Planted Tanks",
    "group": "Aquascaping & Planted Tanks",
    "keywords": [
      "aquasoil",
      "co2 cylinder",
      "lily pipe",
      "aquascaping tweezers",
      "carpeting plant"
    ]
  },
  {
    "id": 453,
    "originalId": null,
    "name": "Keywords",
    "group": "Aquascaping & Planted Tanks",
    "keywords": [
      "aquasoil",
      "co2 cylinder",
      "lily pipe",
      "aquascaping tweezers",
      "carpeting plant"
    ]
  },
  {
    "id": 454,
    "originalId": 222,
    "name": "Cheese Making & Dairy Fermentation",
    "group": "Cheese Making & Dairy Fermentation",
    "keywords": [
      "rennet",
      "cheese mold",
      "cheese wax",
      "mesophilic culture",
      "cheese press"
    ]
  },
  {
    "id": 455,
    "originalId": null,
    "name": "Keywords",
    "group": "Cheese Making & Dairy Fermentation",
    "keywords": [
      "rennet",
      "cheese mold",
      "cheese wax",
      "mesophilic culture",
      "cheese press"
    ]
  },
  {
    "id": 456,
    "originalId": 223,
    "name": "Pen Spinning & Hand Manipulation",
    "group": "Pen Spinning & Hand Manipulation",
    "keywords": [
      "pen mod",
      "spinning pen",
      "grip tape",
      "weighted ends"
    ]
  },
  {
    "id": 457,
    "originalId": null,
    "name": "Keywords",
    "group": "Pen Spinning & Hand Manipulation",
    "keywords": [
      "pen mod",
      "spinning pen",
      "grip tape",
      "weighted ends"
    ]
  },
  {
    "id": 458,
    "originalId": 224,
    "name": "Fingerboarding & Mini Skate",
    "group": "Fingerboarding & Mini Skate",
    "keywords": [
      "tech deck",
      "fingerboard deck",
      "foam grip tape",
      "bearing wheels",
      "mini ramp"
    ]
  },
  {
    "id": 459,
    "originalId": null,
    "name": "Keywords",
    "group": "Fingerboarding & Mini Skate",
    "keywords": [
      "tech deck",
      "fingerboard deck",
      "foam grip tape",
      "bearing wheels",
      "mini ramp"
    ]
  },
  {
    "id": 460,
    "originalId": 225,
    "name": "Whittling & Wood Carving",
    "group": "Whittling & Wood Carving",
    "keywords": [
      "whittling knife",
      "basswood block",
      "stropping leather",
      "honing compound",
      "cut resistant glove"
    ]
  },
  {
    "id": 461,
    "originalId": null,
    "name": "Keywords",
    "group": "Whittling & Wood Carving",
    "keywords": [
      "whittling knife",
      "basswood block",
      "stropping leather",
      "honing compound",
      "cut resistant glove"
    ]
  },
  {
    "id": 462,
    "originalId": 226,
    "name": "Lock Sport & Picking",
    "group": "Lock Sport & Picking",
    "keywords": [
      "practice lock",
      "pick set",
      "tension tool",
      "pinning mat",
      "lock picking competition"
    ]
  },
  {
    "id": 463,
    "originalId": null,
    "name": "Keywords",
    "group": "Lock Sport & Picking",
    "keywords": [
      "practice lock",
      "pick set",
      "tension tool",
      "pinning mat",
      "lock picking competition"
    ]
  },
  {
    "id": 464,
    "originalId": 227,
    "name": "Throwing Knives & Tomahawks",
    "group": "Throwing Knives & Tomahawks",
    "keywords": [
      "throwing axe",
      "throwing knife set",
      "end grain target",
      "axe sharpening puck"
    ]
  },
  {
    "id": 465,
    "originalId": null,
    "name": "Keywords",
    "group": "Throwing Knives & Tomahawks",
    "keywords": [
      "throwing axe",
      "throwing knife set",
      "end grain target",
      "axe sharpening puck"
    ]
  },
  {
    "id": 466,
    "originalId": 228,
    "name": "Cardistry & Flourishing",
    "group": "Cardistry & Flourishing",
    "keywords": [
      "squids",
      "cardistry deck",
      "fanning powder",
      "card clip",
      "playing card press"
    ]
  },
  {
    "id": 467,
    "originalId": null,
    "name": "Keywords",
    "group": "Cardistry & Flourishing",
    "keywords": [
      "squids",
      "cardistry deck",
      "fanning powder",
      "card clip",
      "playing card press"
    ]
  },
  {
    "id": 468,
    "originalId": 229,
    "name": "Diorama & Miniature Scenery",
    "group": "Diorama & Miniature Scenery",
    "keywords": [
      "static grass",
      "flocking",
      "miniature trees",
      "scale bricks",
      "water effect resin"
    ]
  },
  {
    "id": 469,
    "originalId": null,
    "name": "Keywords",
    "group": "Diorama & Miniature Scenery",
    "keywords": [
      "static grass",
      "flocking",
      "miniature trees",
      "scale bricks",
      "water effect resin"
    ]
  },
  {
    "id": 470,
    "originalId": 230,
    "name": "Geocaching & Wayfinding",
    "group": "Geocaching & Wayfinding",
    "keywords": [
      "travel bug",
      "cache log",
      "waterproof container",
      "handheld gps",
      "geocoin"
    ]
  },
  {
    "id": 471,
    "originalId": null,
    "name": "Keywords",
    "group": "Geocaching & Wayfinding",
    "keywords": [
      "travel bug",
      "cache log",
      "waterproof container",
      "handheld gps",
      "geocoin"
    ]
  },
  {
    "id": 472,
    "originalId": 231,
    "name": "High-Performance Clusters & Quantum Compute",
    "group": "High-Performance Clusters & Quantum Compute",
    "keywords": [
      "quantum simulator",
      "qiskit",
      "slurm cluster",
      "nvidia h100",
      "tensorrt",
      "openmp",
      "mpi cluster",
      "opencl",
      "cuda core rental",
      "vpc network peering"
    ]
  },
  {
    "id": 473,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Performance Clusters & Quantum Compute",
    "keywords": [
      "quantum simulator",
      "qiskit",
      "slurm cluster",
      "nvidia h100",
      "tensorrt",
      "openmp",
      "mpi cluster",
      "opencl",
      "cuda core rental",
      "vpc network peering"
    ]
  },
  {
    "id": 474,
    "originalId": 232,
    "name": "Decentralized Protocols & Node Infrastructure",
    "group": "Decentralized Protocols & Node Infrastructure",
    "keywords": [
      "rpc node",
      "ipfs storage",
      "filecoin staking",
      "validator node",
      "gas optimization",
      "solidity contract",
      "etherscan premium",
      "testnet faucet",
      "layer 2 bridging"
    ]
  },
  {
    "id": 475,
    "originalId": null,
    "name": "Keywords",
    "group": "Decentralized Protocols & Node Infrastructure",
    "keywords": [
      "rpc node",
      "ipfs storage",
      "filecoin staking",
      "validator node",
      "gas optimization",
      "solidity contract",
      "etherscan premium",
      "testnet faucet",
      "layer 2 bridging"
    ]
  },
  {
    "id": 476,
    "originalId": 233,
    "name": "Supply Chain Automation & Barcode Logistics",
    "group": "Supply Chain Automation & Barcode Logistics",
    "keywords": [
      "zebra printer",
      "rfid tags",
      "handheld scanner",
      "upc barcode registration",
      "logistics api",
      "shipping label printer",
      "thermal labels bulk",
      "inventory tracking saas"
    ]
  },
  {
    "id": 477,
    "originalId": null,
    "name": "Keywords",
    "group": "Supply Chain Automation & Barcode Logistics",
    "keywords": [
      "zebra printer",
      "rfid tags",
      "handheld scanner",
      "upc barcode registration",
      "logistics api",
      "shipping label printer",
      "thermal labels bulk",
      "inventory tracking saas"
    ]
  },
  {
    "id": 478,
    "originalId": 234,
    "name": "Global Intellectual Property Enforcement",
    "group": "Global Intellectual Property Enforcement",
    "keywords": [
      "pct filing fee",
      "wipo fee",
      "prior art search",
      "patent infringement defense",
      "international trademark filing",
      "cease and desist drafting",
      "ip escrow"
    ]
  },
  {
    "id": 479,
    "originalId": null,
    "name": "Keywords",
    "group": "Global Intellectual Property Enforcement",
    "keywords": [
      "pct filing fee",
      "wipo fee",
      "prior art search",
      "patent infringement defense",
      "international trademark filing",
      "cease and desist drafting",
      "ip escrow"
    ]
  },
  {
    "id": 480,
    "originalId": 235,
    "name": "Specialized Bio-Fabrication & Tissue Culture",
    "group": "Specialized Bio-Fabrication & Tissue Culture",
    "keywords": [
      "agar powder",
      "petri dishes bulk",
      "laminar hood filter",
      "autoclave bags",
      "growth hormone plant",
      "culture media broth",
      "inoculation loop",
      "sterile gloves bulk"
    ]
  },
  {
    "id": 481,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Bio-Fabrication & Tissue Culture",
    "keywords": [
      "agar powder",
      "petri dishes bulk",
      "laminar hood filter",
      "autoclave bags",
      "growth hormone plant",
      "culture media broth",
      "inoculation loop",
      "sterile gloves bulk"
    ]
  },
  {
    "id": 482,
    "originalId": 236,
    "name": "Geotechnical Surveying & Core Drilling",
    "group": "Geotechnical Surveying & Core Drilling",
    "keywords": [
      "total station rental",
      "theodolite",
      "ground penetrating radar",
      "core soil sampler",
      "surveying tripod",
      "gis software license",
      "land grading consultation"
    ]
  },
  {
    "id": 483,
    "originalId": null,
    "name": "Keywords",
    "group": "Geotechnical Surveying & Core Drilling",
    "keywords": [
      "total station rental",
      "theodolite",
      "ground penetrating radar",
      "core soil sampler",
      "surveying tripod",
      "gis software license",
      "land grading consultation"
    ]
  },
  {
    "id": 484,
    "originalId": 237,
    "name": "Heavy Duty Rigging & Cranes",
    "group": "Heavy Duty Rigging & Cranes",
    "keywords": [
      "shackle bulk",
      "lifting sling",
      "chain hoist",
      "gantry crane rental",
      "boom lift hire",
      "rigging wire rope",
      "crane operator certification",
      "load cell testing"
    ]
  },
  {
    "id": 485,
    "originalId": null,
    "name": "Keywords",
    "group": "Heavy Duty Rigging & Cranes",
    "keywords": [
      "shackle bulk",
      "lifting sling",
      "chain hoist",
      "gantry crane rental",
      "boom lift hire",
      "rigging wire rope",
      "crane operator certification",
      "load cell testing"
    ]
  },
  {
    "id": 486,
    "originalId": 238,
    "name": "Structural Masonry & Refractory Brickwork",
    "group": "Structural Masonry & Refractory Brickwork",
    "keywords": [
      "firebricks",
      "refractory mortar",
      "fly ash bricks wholesale",
      "stone cladding",
      "marble slabs wholesale",
      "granite cutting",
      "cement blocks bulk",
      "line dumper"
    ]
  },
  {
    "id": 487,
    "originalId": null,
    "name": "Keywords",
    "group": "Structural Masonry & Refractory Brickwork",
    "keywords": [
      "firebricks",
      "refractory mortar",
      "fly ash bricks wholesale",
      "stone cladding",
      "marble slabs wholesale",
      "granite cutting",
      "cement blocks bulk",
      "line dumper"
    ]
  },
  {
    "id": 488,
    "originalId": 239,
    "name": "High-End Tailoring & Bespoke Haberdashery",
    "group": "High-End Tailoring & Bespoke Haberdashery",
    "keywords": [
      "merino wool fabric",
      "silk lining roll",
      "horn buttons",
      "shoulder pads wholesale",
      "tailor shears",
      "dressmaker form",
      "custom suit pattern",
      "embroidery stabilizer"
    ]
  },
  {
    "id": 489,
    "originalId": null,
    "name": "Keywords",
    "group": "High-End Tailoring & Bespoke Haberdashery",
    "keywords": [
      "merino wool fabric",
      "silk lining roll",
      "horn buttons",
      "shoulder pads wholesale",
      "tailor shears",
      "dressmaker form",
      "custom suit pattern",
      "embroidery stabilizer"
    ]
  },
  {
    "id": 490,
    "originalId": 240,
    "name": "Academic Peer-Reviews & Open-Access Publishing",
    "group": "Academic Peer-Reviews & Open-Access Publishing",
    "keywords": [
      "open access fee",
      "ieee manuscript fee",
      "article processing charge",
      "turnitin plagiarism check",
      "overleaf premium",
      "academic editor fee",
      "indexation fee"
    ]
  },
  {
    "id": 491,
    "originalId": null,
    "name": "Keywords",
    "group": "Academic Peer-Reviews & Open-Access Publishing",
    "keywords": [
      "open access fee",
      "ieee manuscript fee",
      "article processing charge",
      "turnitin plagiarism check",
      "overleaf premium",
      "academic editor fee",
      "indexation fee"
    ]
  },
  {
    "id": 492,
    "originalId": 241,
    "name": "Rare Book Collecting & First Editions",
    "group": "Rare Book Collecting & First Editions",
    "keywords": [
      "first edition book",
      "antiquarian novel",
      "signed biography",
      "archival book box",
      "leather bookbinding kit",
      "book restoration tape",
      "out-of-print book"
    ]
  },
  {
    "id": 493,
    "originalId": null,
    "name": "Keywords",
    "group": "Rare Book Collecting & First Editions",
    "keywords": [
      "first edition book",
      "antiquarian novel",
      "signed biography",
      "archival book box",
      "leather bookbinding kit",
      "book restoration tape",
      "out-of-print book"
    ]
  },
  {
    "id": 494,
    "originalId": 242,
    "name": "Trading Card Grading & Encapsulation",
    "group": "Trading Card Grading & Encapsulation",
    "keywords": [
      "psa grading fee",
      "bgs grading",
      "cgc slabs",
      "top loaders bulk",
      "penny sleeves",
      "card storage box",
      "graded card display stand",
      "card show entry"
    ]
  },
  {
    "id": 495,
    "originalId": null,
    "name": "Keywords",
    "group": "Trading Card Grading & Encapsulation",
    "keywords": [
      "psa grading fee",
      "bgs grading",
      "cgc slabs",
      "top loaders bulk",
      "penny sleeves",
      "card storage box",
      "graded card display stand",
      "card show entry"
    ]
  },
  {
    "id": 496,
    "originalId": 243,
    "name": "Diecast Models & Scale Replicas",
    "group": "Diecast Models & Scale Replicas",
    "keywords": [
      "1:18 scale diecast",
      "autoart",
      "kyosho",
      "model train engine",
      "diorama asphalt",
      "airbrush paint tamiya",
      "display acrylic case",
      "matchbox superfast"
    ]
  },
  {
    "id": 497,
    "originalId": null,
    "name": "Keywords",
    "group": "Diecast Models & Scale Replicas",
    "keywords": [
      "1:18 scale diecast",
      "autoart",
      "kyosho",
      "model train engine",
      "diorama asphalt",
      "airbrush paint tamiya",
      "display acrylic case",
      "matchbox superfast"
    ]
  },
  {
    "id": 498,
    "originalId": 244,
    "name": "Hypebeast Apparel & Streetwear Drops",
    "group": "Hypebeast Apparel & Streetwear Drops",
    "keywords": [
      "supreme hoodie",
      "bape jacket",
      "kith drop",
      "essentials essentials",
      "streetwear proxy fee",
      "grailed purchase",
      "snkrs app draw",
      "hypebeast sneakers"
    ]
  },
  {
    "id": 499,
    "originalId": null,
    "name": "Keywords",
    "group": "Hypebeast Apparel & Streetwear Drops",
    "keywords": [
      "supreme hoodie",
      "bape jacket",
      "kith drop",
      "essentials essentials",
      "streetwear proxy fee",
      "grailed purchase",
      "snkrs app draw",
      "hypebeast sneakers"
    ]
  },
  {
    "id": 500,
    "originalId": 245,
    "name": "Custom Watch Modifications & Custom Builds",
    "group": "Custom Watch Modifications & Custom Builds",
    "keywords": [
      "nh35 movement",
      "seiko mod dial",
      "watch hands set",
      "sapphire caseback",
      "chapter ring",
      "watch bezel insert",
      "rodico cleaning putty",
      "spring bar tool"
    ]
  },
  {
    "id": 501,
    "originalId": null,
    "name": "Keywords",
    "group": "Custom Watch Modifications & Custom Builds",
    "keywords": [
      "nh35 movement",
      "seiko mod dial",
      "watch hands set",
      "sapphire caseback",
      "chapter ring",
      "watch bezel insert",
      "rodico cleaning putty",
      "spring bar tool"
    ]
  },
  {
    "id": 502,
    "originalId": 246,
    "name": "Enology & Private Vineyard Collections",
    "group": "Enology & Private Vineyard Collections",
    "keywords": [
      "wine collector software",
      "bordeaux futures allocation",
      "sommelier tasting pass",
      "custom wine rack cellar",
      "rare vintage port",
      "wine auction premium"
    ]
  },
  {
    "id": 503,
    "originalId": null,
    "name": "Keywords",
    "group": "Enology & Private Vineyard Collections",
    "keywords": [
      "wine collector software",
      "bordeaux futures allocation",
      "sommelier tasting pass",
      "custom wine rack cellar",
      "rare vintage port",
      "wine auction premium"
    ]
  },
  {
    "id": 504,
    "originalId": 247,
    "name": "Haute Couture & Runway Commissions",
    "group": "Haute Couture & Runway Commissions",
    "keywords": [
      "runway dress deposit",
      "fashion designer retainer",
      "custom measurement fitting",
      "premium tulle fabric",
      "luxury garment bag",
      "couturier service"
    ]
  },
  {
    "id": 505,
    "originalId": null,
    "name": "Keywords",
    "group": "Haute Couture & Runway Commissions",
    "keywords": [
      "runway dress deposit",
      "fashion designer retainer",
      "custom measurement fitting",
      "premium tulle fabric",
      "luxury garment bag",
      "couturier service"
    ]
  },
  {
    "id": 506,
    "originalId": 248,
    "name": "Avant-Garde Sculptures & Fine Art Castings",
    "group": "Avant-Garde Sculptures & Fine Art Castings",
    "keywords": [
      "bronze casting foundry",
      "lost wax casting kit",
      "sculptor clay bulk",
      "gallery exhibition deposit",
      "art transport crate",
      "sculpture pedestal"
    ]
  },
  {
    "id": 507,
    "originalId": null,
    "name": "Keywords",
    "group": "Avant-Garde Sculptures & Fine Art Castings",
    "keywords": [
      "bronze casting foundry",
      "lost wax casting kit",
      "sculptor clay bulk",
      "gallery exhibition deposit",
      "art transport crate",
      "sculpture pedestal"
    ]
  },
  {
    "id": 508,
    "originalId": 249,
    "name": "General Aviation Maintenance & Avionics",
    "group": "General Aviation Maintenance & Avionics",
    "keywords": [
      "garmin avionics update",
      "transponder inspection",
      "general aviation oil",
      "propeller balancing",
      "aircraft spark plugs",
      "landing gear strut repair"
    ]
  },
  {
    "id": 509,
    "originalId": null,
    "name": "Keywords",
    "group": "General Aviation Maintenance & Avionics",
    "keywords": [
      "garmin avionics update",
      "transponder inspection",
      "general aviation oil",
      "propeller balancing",
      "aircraft spark plugs",
      "landing gear strut repair"
    ]
  },
  {
    "id": 510,
    "originalId": 250,
    "name": "Yacht Charters & Marine Port Logistics",
    "group": "Yacht Charters & Marine Port Logistics",
    "keywords": [
      "superyacht berthing",
      "marine customs agent",
      "yacht provisioning",
      "boat hull cleaning",
      "marine radar update",
      "bilge pump replacement",
      "dock lines bulk"
    ]
  },
  {
    "id": 511,
    "originalId": null,
    "name": "Keywords",
    "group": "Yacht Charters & Marine Port Logistics",
    "keywords": [
      "superyacht berthing",
      "marine customs agent",
      "yacht provisioning",
      "boat hull cleaning",
      "marine radar update",
      "bilge pump replacement",
      "dock lines bulk"
    ]
  },
  {
    "id": 512,
    "originalId": 251,
    "name": "Professional Athletics & Competition Entry",
    "group": "Professional Athletics & Competition Entry",
    "keywords": [
      "marathon registration fee",
      "triathlete entry",
      "wada drug test fee",
      "racing bib number",
      "athletic coach retainer",
      "tournament entry pass"
    ]
  },
  {
    "id": 513,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Athletics & Competition Entry",
    "keywords": [
      "marathon registration fee",
      "triathlete entry",
      "wada drug test fee",
      "racing bib number",
      "athletic coach retainer",
      "tournament entry pass"
    ]
  },
  {
    "id": 514,
    "originalId": 252,
    "name": "Professional Racing Safety Equipment",
    "group": "Professional Racing Safety Equipment",
    "keywords": [
      "hans device",
      "fia racing suit",
      "snell helmet",
      "nomex underwear",
      "racing gloves",
      "window net racing",
      "fire suppression system racing"
    ]
  },
  {
    "id": 515,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Racing Safety Equipment",
    "keywords": [
      "hans device",
      "fia racing suit",
      "snell helmet",
      "nomex underwear",
      "racing gloves",
      "window net racing",
      "fire suppression system racing"
    ]
  },
  {
    "id": 516,
    "originalId": 253,
    "name": "Wilderness Expeditions & Wilderness Permits",
    "group": "Wilderness Expeditions & Wilderness Permits",
    "keywords": [
      "mount everest permit",
      "sherpa guide fee",
      "base camp logistics",
      "polar survival gear",
      "high altitude oxygen cylinder",
      "wilderness tracking device"
    ]
  },
  {
    "id": 517,
    "originalId": null,
    "name": "Keywords",
    "group": "Wilderness Expeditions & Wilderness Permits",
    "keywords": [
      "mount everest permit",
      "sherpa guide fee",
      "base camp logistics",
      "polar survival gear",
      "high altitude oxygen cylinder",
      "wilderness tracking device"
    ]
  },
  {
    "id": 518,
    "originalId": 254,
    "name": "Specialized Metabolic Diet Plan & Bio-Tracking",
    "group": "Specialized Metabolic Diet Plan & Bio-Tracking",
    "keywords": [
      "metabolic rate test",
      "customized keto prep",
      "glucose monitor patches",
      "blood panel profiling",
      "biohacking coach subscription",
      "personal dietitian"
    ]
  },
  {
    "id": 519,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Metabolic Diet Plan & Bio-Tracking",
    "keywords": [
      "metabolic rate test",
      "customized keto prep",
      "glucose monitor patches",
      "blood panel profiling",
      "biohacking coach subscription",
      "personal dietitian"
    ]
  },
  {
    "id": 520,
    "originalId": 255,
    "name": "Clinical Kinesiotherapy & Elite Rehab",
    "group": "Clinical Kinesiotherapy & Elite Rehab",
    "keywords": [
      "dry needling therapy",
      "kinesio tape bulk",
      "chiropractic adjustment session",
      "tens machine replacement pads",
      "sports rehabilitation program"
    ]
  },
  {
    "id": 521,
    "originalId": null,
    "name": "Keywords",
    "group": "Clinical Kinesiotherapy & Elite Rehab",
    "keywords": [
      "dry needling therapy",
      "kinesio tape bulk",
      "chiropractic adjustment session",
      "tens machine replacement pads",
      "sports rehabilitation program"
    ]
  },
  {
    "id": 522,
    "originalId": 256,
    "name": "Premium Pilates Classes & Reformer Access",
    "group": "Premium Pilates Classes & Reformer Access",
    "keywords": [
      "pilates reformer studio",
      "reformer package pass",
      "core stability coaching",
      "pilates instructor certification",
      "grip socks pilates"
    ]
  },
  {
    "id": 523,
    "originalId": null,
    "name": "Keywords",
    "group": "Premium Pilates Classes & Reformer Access",
    "keywords": [
      "pilates reformer studio",
      "reformer package pass",
      "core stability coaching",
      "pilates instructor certification",
      "grip socks pilates"
    ]
  },
  {
    "id": 524,
    "originalId": 257,
    "name": "Genetic Genealogy & Heritage Tracking",
    "group": "Genetic Genealogy & Heritage Tracking",
    "keywords": [
      "ancestry dna kit",
      "family tree archivist",
      "historical registry search",
      "gedmatch premium",
      "family crest research"
    ]
  },
  {
    "id": 525,
    "originalId": null,
    "name": "Keywords",
    "group": "Genetic Genealogy & Heritage Tracking",
    "keywords": [
      "ancestry dna kit",
      "family tree archivist",
      "historical registry search",
      "gedmatch premium",
      "family crest research"
    ]
  },
  {
    "id": 526,
    "originalId": 258,
    "name": "Home Distillery & Micro-Fermentation",
    "group": "Home Distillery & Micro-Fermentation",
    "keywords": [
      "copper still",
      "copper alembic",
      "moonshine mash kit",
      "oak aging barrel",
      "hydrometer tube",
      "distillers yeast bulk",
      "bottle capper"
    ]
  },
  {
    "id": 527,
    "originalId": null,
    "name": "Keywords",
    "group": "Home Distillery & Micro-Fermentation",
    "keywords": [
      "copper still",
      "copper alembic",
      "moonshine mash kit",
      "oak aging barrel",
      "hydrometer tube",
      "distillers yeast bulk",
      "bottle capper"
    ]
  },
  {
    "id": 528,
    "originalId": 259,
    "name": "Advanced Mineralogy & Lapidary Tools",
    "group": "Advanced Mineralogy & Lapidary Tools",
    "keywords": [
      "diamond lapidary blade",
      "cabochon grinding wheel",
      "tumbling grit set",
      "rough opal parcel",
      "gemstone faceting lap",
      "dop wax"
    ]
  },
  {
    "id": 529,
    "originalId": null,
    "name": "Keywords",
    "group": "Advanced Mineralogy & Lapidary Tools",
    "keywords": [
      "diamond lapidary blade",
      "cabochon grinding wheel",
      "tumbling grit set",
      "rough opal parcel",
      "gemstone faceting lap",
      "dop wax"
    ]
  },
  {
    "id": 530,
    "originalId": 260,
    "name": "Professional Weather Stations & Meteorological Sensors",
    "group": "Professional Weather Stations & Meteorological Sensors",
    "keywords": [
      "ultrasonic anemometer",
      "solar radiation sensor",
      "wireless weather station console",
      "barometric data logger",
      "weather data api license"
    ]
  },
  {
    "id": 531,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Weather Stations & Meteorological Sensors",
    "keywords": [
      "ultrasonic anemometer",
      "solar radiation sensor",
      "wireless weather station console",
      "barometric data logger",
      "weather data api license"
    ]
  },
  {
    "id": 532,
    "originalId": 261,
    "name": "Professional Soapmaking Machinery & Wholesale Oils",
    "group": "Professional Soapmaking Machinery & Wholesale Oils",
    "keywords": [
      "soap lye sodium hydroxide",
      "organic shea butter bulk",
      "industrial soap molds",
      "essential oil wholesale pack",
      "soap cutter wire"
    ]
  },
  {
    "id": 533,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Soapmaking Machinery & Wholesale Oils",
    "keywords": [
      "soap lye sodium hydroxide",
      "organic shea butter bulk",
      "industrial soap molds",
      "essential oil wholesale pack",
      "soap cutter wire"
    ]
  },
  {
    "id": 534,
    "originalId": 262,
    "name": "Amateur Radio Transceivers & Antennas",
    "group": "Amateur Radio Transceivers & Antennas",
    "keywords": [
      "hf transceiver",
      "swr meter",
      "dual band yagi antenna",
      "sdr dongle",
      "rg8x coaxial cable",
      "morse code paddle",
      "ham license exam"
    ]
  },
  {
    "id": 535,
    "originalId": null,
    "name": "Keywords",
    "group": "Amateur Radio Transceivers & Antennas",
    "keywords": [
      "hf transceiver",
      "swr meter",
      "dual band yagi antenna",
      "sdr dongle",
      "rg8x coaxial cable",
      "morse code paddle",
      "ham license exam"
    ]
  },
  {
    "id": 536,
    "originalId": 263,
    "name": "Fencing Foil Infrastructure & Electric Scoring",
    "group": "Fencing Foil Infrastructure & Electric Scoring",
    "keywords": [
      "fencing foil blade",
      "epee body cord",
      "scoring box fencing",
      "lame jacket",
      "mask fencing 1600n",
      "fencing glove foil"
    ]
  },
  {
    "id": 537,
    "originalId": null,
    "name": "Keywords",
    "group": "Fencing Foil Infrastructure & Electric Scoring",
    "keywords": [
      "fencing foil blade",
      "epee body cord",
      "scoring box fencing",
      "lame jacket",
      "mask fencing 1600n",
      "fencing glove foil"
    ]
  },
  {
    "id": 538,
    "originalId": 264,
    "name": "Extreme Wind Sports & Kiteboarding Gear",
    "group": "Extreme Wind Sports & Kiteboarding Gear",
    "keywords": [
      "traction kite",
      "kiteboard footstraps",
      "kitesurf spreader bar",
      "wind meter anemometer",
      "neoprene boots",
      "drysuit kiteboarding"
    ]
  },
  {
    "id": 539,
    "originalId": null,
    "name": "Keywords",
    "group": "Extreme Wind Sports & Kiteboarding Gear",
    "keywords": [
      "traction kite",
      "kiteboard footstraps",
      "kitesurf spreader bar",
      "wind meter anemometer",
      "neoprene boots",
      "drysuit kiteboarding"
    ]
  },
  {
    "id": 540,
    "originalId": 265,
    "name": "Bioactive Vivarium Design & Exotic Flora",
    "group": "Bioactive Vivarium Design & Exotic Flora",
    "keywords": [
      "isopods culture",
      "springtails starter",
      "bioactive soil substrate",
      "cork bark strips",
      "misting system automated",
      "vivarium led fixture"
    ]
  },
  {
    "id": 541,
    "originalId": null,
    "name": "Keywords",
    "group": "Bioactive Vivarium Design & Exotic Flora",
    "keywords": [
      "isopods culture",
      "springtails starter",
      "bioactive soil substrate",
      "cork bark strips",
      "misting system automated",
      "vivarium led fixture"
    ]
  },
  {
    "id": 542,
    "originalId": 266,
    "name": "Tactical Airsoft Gear & Simulation Markers",
    "group": "Tactical Airsoft Gear & Simulation Markers",
    "keywords": [
      "gas blowback airsoft rifle",
      "green gas canisters",
      "high precision bbs",
      "tactical chest rig",
      "airsoft mesh mask",
      "chronograph airsoft"
    ]
  },
  {
    "id": 543,
    "originalId": null,
    "name": "Keywords",
    "group": "Tactical Airsoft Gear & Simulation Markers",
    "keywords": [
      "gas blowback airsoft rifle",
      "green gas canisters",
      "high precision bbs",
      "tactical chest rig",
      "airsoft mesh mask",
      "chronograph airsoft"
    ]
  },
  {
    "id": 544,
    "originalId": 267,
    "name": "Circus Skills, Diabolos & Fire Spinning",
    "group": "Circus Skills, Diabolos & Fire Spinning",
    "keywords": [
      "fire poi",
      "kevlar wick roll",
      "juggling clubs pack",
      "diabolo carbon sticks",
      "contact juggling ball acrylic",
      "unicycle saddle"
    ]
  },
  {
    "id": 545,
    "originalId": null,
    "name": "Keywords",
    "group": "Circus Skills, Diabolos & Fire Spinning",
    "keywords": [
      "fire poi",
      "kevlar wick roll",
      "juggling clubs pack",
      "diabolo carbon sticks",
      "contact juggling ball acrylic",
      "unicycle saddle"
    ]
  },
  {
    "id": 546,
    "originalId": 268,
    "name": "Antique Bonds & Scripophily Auctions",
    "group": "Antique Bonds & Scripophily Auctions",
    "keywords": [
      "obsolete stock certificate",
      "railway bond antique",
      "historical paper ephemera",
      "numismatic auction catalog"
    ]
  },
  {
    "id": 547,
    "originalId": null,
    "name": "Keywords",
    "group": "Antique Bonds & Scripophily Auctions",
    "keywords": [
      "obsolete stock certificate",
      "railway bond antique",
      "historical paper ephemera",
      "numismatic auction catalog"
    ]
  },
  {
    "id": 548,
    "originalId": 269,
    "name": "Cubing Speed Lubricants & Professional Puzzles",
    "group": "Cubing Speed Lubricants & Professional Puzzles",
    "keywords": [
      "gan lube",
      "speedcube timer mat",
      "magnetic megaminx",
      "4x4 speedcube",
      "custom cube core",
      "speedcubing competition fee"
    ]
  },
  {
    "id": 549,
    "originalId": null,
    "name": "Keywords",
    "group": "Cubing Speed Lubricants & Professional Puzzles",
    "keywords": [
      "gan lube",
      "speedcube timer mat",
      "magnetic megaminx",
      "4x4 speedcube",
      "custom cube core",
      "speedcubing competition fee"
    ]
  },
  {
    "id": 550,
    "originalId": 270,
    "name": "Falconry Equipment & Raptor Care",
    "group": "Falconry Equipment & Raptor Care",
    "keywords": [
      "raptor perch",
      "falconry hood leather",
      "jesses bells",
      "bird telemetry transmitter",
      "frozen day old chicks",
      "falconry gloves"
    ]
  },
  {
    "id": 551,
    "originalId": null,
    "name": "Keywords",
    "group": "Falconry Equipment & Raptor Care",
    "keywords": [
      "raptor perch",
      "falconry hood leather",
      "jesses bells",
      "bird telemetry transmitter",
      "frozen day old chicks",
      "falconry gloves"
    ]
  },
  {
    "id": 552,
    "originalId": 271,
    "name": "Parkour Training Facilities & Grip Enhancers",
    "group": "Parkour Training Facilities & Grip Enhancers",
    "keywords": [
      "parkour gym membership",
      "freerunning shoes",
      "block chalk gymnastics",
      "parkour training ledge",
      "landing mat foam"
    ]
  },
  {
    "id": 553,
    "originalId": null,
    "name": "Keywords",
    "group": "Parkour Training Facilities & Grip Enhancers",
    "keywords": [
      "parkour gym membership",
      "freerunning shoes",
      "block chalk gymnastics",
      "parkour training ledge",
      "landing mat foam"
    ]
  },
  {
    "id": 554,
    "originalId": 272,
    "name": "Heavy Calisthenics Rings & Weighted Vests",
    "group": "Heavy Calisthenics Rings & Weighted Vests",
    "keywords": [
      "wooden gymnastic rings",
      "dip belt heavy duty",
      "parallettes steel",
      "adjustable weight vest",
      "chalk liquid bottle"
    ]
  },
  {
    "id": 555,
    "originalId": null,
    "name": "Keywords",
    "group": "Heavy Calisthenics Rings & Weighted Vests",
    "keywords": [
      "wooden gymnastic rings",
      "dip belt heavy duty",
      "parallettes steel",
      "adjustable weight vest",
      "chalk liquid bottle"
    ]
  },
  {
    "id": 556,
    "originalId": 273,
    "name": "Desert Sandboarding & Dune Buggy Maintenance",
    "group": "Desert Sandboarding & Dune Buggy Maintenance",
    "keywords": [
      "sandboard binding",
      "board wax desert",
      "sand goggles polarization",
      "dune buggy tire",
      "sand tracks recovery"
    ]
  },
  {
    "id": 557,
    "originalId": null,
    "name": "Keywords",
    "group": "Desert Sandboarding & Dune Buggy Maintenance",
    "keywords": [
      "sandboard binding",
      "board wax desert",
      "sand goggles polarization",
      "dune buggy tire",
      "sand tracks recovery"
    ]
  },
  {
    "id": 558,
    "originalId": 274,
    "name": "Paranormal Equipment & Thermal Diagnostics",
    "group": "Paranormal Equipment & Thermal Diagnostics",
    "keywords": [
      "k2 emf meter",
      "digital evp recorder",
      "spirit box sb7",
      "forward looking infrared",
      "night vision monocular"
    ]
  },
  {
    "id": 559,
    "originalId": null,
    "name": "Keywords",
    "group": "Paranormal Equipment & Thermal Diagnostics",
    "keywords": [
      "k2 emf meter",
      "digital evp recorder",
      "spirit box sb7",
      "forward looking infrared",
      "night vision monocular"
    ]
  },
  {
    "id": 560,
    "originalId": 275,
    "name": "Professional Metal Detection & Field Archaeology",
    "group": "Professional Metal Detection & Field Archaeology",
    "keywords": [
      "underground metal detector",
      "pinpointer probe waterproof",
      "target recovery scoop",
      "artifacts pouch",
      "treasure act permit"
    ]
  },
  {
    "id": 561,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Metal Detection & Field Archaeology",
    "keywords": [
      "underground metal detector",
      "pinpointer probe waterproof",
      "target recovery scoop",
      "artifacts pouch",
      "treasure act permit"
    ]
  },
  {
    "id": 562,
    "originalId": 276,
    "name": "Skill Toys, Yo-Yos & Precision Bearings",
    "group": "Skill Toys, Yo-Yos & Precision Bearings",
    "keywords": [
      "bi metal yoyo",
      "yoyo string polyester",
      "ceramic yoyo bearing",
      "thin bearing lube",
      "kendama prime"
    ]
  },
  {
    "id": 563,
    "originalId": null,
    "name": "Keywords",
    "group": "Skill Toys, Yo-Yos & Precision Bearings",
    "keywords": [
      "bi metal yoyo",
      "yoyo string polyester",
      "ceramic yoyo bearing",
      "thin bearing lube",
      "kendama prime"
    ]
  },
  {
    "id": 564,
    "originalId": 277,
    "name": "Industrial Scale Railroading Models",
    "group": "Industrial Scale Railroading Models",
    "keywords": [
      "ho scale locomotive",
      "nickel silver track",
      "terrain static flocking",
      "dcc command station",
      "miniature pine trees"
    ]
  },
  {
    "id": 565,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Scale Railroading Models",
    "keywords": [
      "ho scale locomotive",
      "nickel silver track",
      "terrain static flocking",
      "dcc command station",
      "miniature pine trees"
    ]
  },
  {
    "id": 566,
    "originalId": 278,
    "name": "Advanced Manual Bookbinding & Tooling",
    "group": "Advanced Manual Bookbinding & Tooling",
    "keywords": [
      "hardwood book press",
      "bone folder genuine",
      "binding linen thread",
      "pva glue archival",
      "leather bookcloth roll"
    ]
  },
  {
    "id": 567,
    "originalId": null,
    "name": "Keywords",
    "group": "Advanced Manual Bookbinding & Tooling",
    "keywords": [
      "hardwood book press",
      "bone folder genuine",
      "binding linen thread",
      "pva glue archival",
      "leather bookcloth roll"
    ]
  },
  {
    "id": 568,
    "originalId": 279,
    "name": "Glass Blowing Blowpipes & Lampwork Torches",
    "group": "Glass Blowing Blowpipes & Lampwork Torches",
    "keywords": [
      "borosilicate glass rods",
      "propane oxygen torch",
      "blowpipe stainless steel",
      "graphite marver pad",
      "glass annealing oven"
    ]
  },
  {
    "id": 569,
    "originalId": null,
    "name": "Keywords",
    "group": "Glass Blowing Blowpipes & Lampwork Torches",
    "keywords": [
      "borosilicate glass rods",
      "propane oxygen torch",
      "blowpipe stainless steel",
      "graphite marver pad",
      "glass annealing oven"
    ]
  },
  {
    "id": 570,
    "originalId": 280,
    "name": "Kite Fighter Cord & Spool Infrastructure",
    "group": "Kite Fighter Cord & Spool Infrastructure",
    "keywords": [
      "fighter kite manja",
      "custom kite spool",
      "protective finger tape",
      "high wind stunt kite",
      "kite tissue paper bulk"
    ]
  },
  {
    "id": 571,
    "originalId": null,
    "name": "Keywords",
    "group": "Kite Fighter Cord & Spool Infrastructure",
    "keywords": [
      "fighter kite manja",
      "custom kite spool",
      "protective finger tape",
      "high wind stunt kite",
      "kite tissue paper bulk"
    ]
  },
  {
    "id": 572,
    "originalId": 381,
    "name": "Quantum Algorithm Development & Qubit Leasing",
    "group": "Quantum Algorithm Development & Qubit Leasing",
    "keywords": [
      "d-wave lease",
      "ibm quantum cloud",
      "q# compiler",
      "dilution refrigerator coolant",
      "topological qubit testing",
      "quantum error correction api"
    ]
  },
  {
    "id": 573,
    "originalId": null,
    "name": "Keywords",
    "group": "Quantum Algorithm Development & Qubit Leasing",
    "keywords": [
      "d-wave lease",
      "ibm quantum cloud",
      "q# compiler",
      "dilution refrigerator coolant",
      "topological qubit testing",
      "quantum error correction api"
    ]
  },
  {
    "id": 574,
    "originalId": 382,
    "name": "Synthetic Biology & CRISPR Reagents",
    "group": "Synthetic Biology & CRISPR Reagents",
    "keywords": [
      "cas9 protein bulk",
      "sgRNA synthesis",
      "electroporation cuvettes",
      "bio-reactor calibration",
      "synthetic dna sequence order",
      "plasmid prep kit"
    ]
  },
  {
    "id": 575,
    "originalId": null,
    "name": "Keywords",
    "group": "Synthetic Biology & CRISPR Reagents",
    "keywords": [
      "cas9 protein bulk",
      "sgRNA synthesis",
      "electroporation cuvettes",
      "bio-reactor calibration",
      "synthetic dna sequence order",
      "plasmid prep kit"
    ]
  },
  {
    "id": 576,
    "originalId": 383,
    "name": "Deep Sea Salvage & ROV Operations",
    "group": "Deep Sea Salvage & ROV Operations",
    "keywords": [
      "rov tether cable",
      "side scan sonar",
      "marine salvage permit",
      "saturation diver retainer",
      "underwater cutting torch",
      "lift bag buoyancy"
    ]
  },
  {
    "id": 577,
    "originalId": null,
    "name": "Keywords",
    "group": "Deep Sea Salvage & ROV Operations",
    "keywords": [
      "rov tether cable",
      "side scan sonar",
      "marine salvage permit",
      "saturation diver retainer",
      "underwater cutting torch",
      "lift bag buoyancy"
    ]
  },
  {
    "id": 578,
    "originalId": 384,
    "name": "Private Satellite Telemetry & CubeSat Launch",
    "group": "Private Satellite Telemetry & CubeSat Launch",
    "keywords": [
      "cubesat chassis",
      "s-band transceiver",
      "orbital launch integration fee",
      "satellite ground station lease",
      "radiation hardened microcontroller"
    ]
  },
  {
    "id": 579,
    "originalId": null,
    "name": "Keywords",
    "group": "Private Satellite Telemetry & CubeSat Launch",
    "keywords": [
      "cubesat chassis",
      "s-band transceiver",
      "orbital launch integration fee",
      "satellite ground station lease",
      "radiation hardened microcontroller"
    ]
  },
  {
    "id": 580,
    "originalId": 385,
    "name": "High-Frequency Microwave Trading Towers",
    "group": "High-Frequency Microwave Trading Towers",
    "keywords": [
      "microwave dish alignment",
      "low latency fpga",
      "line-of-sight tower lease",
      "millimeter wave radio",
      "trading colocation cross-connect"
    ]
  },
  {
    "id": 581,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Frequency Microwave Trading Towers",
    "keywords": [
      "microwave dish alignment",
      "low latency fpga",
      "line-of-sight tower lease",
      "millimeter wave radio",
      "trading colocation cross-connect"
    ]
  },
  {
    "id": 582,
    "originalId": 386,
    "name": "Embedded Finance & BaaS API Fees",
    "group": "Embedded Finance & BaaS API Fees",
    "keywords": [
      "plaid api overage",
      "stripe connect payout fee",
      "kyc identity verification api",
      "ledger-as-a-service",
      "virtual card issuance fee"
    ]
  },
  {
    "id": 583,
    "originalId": null,
    "name": "Keywords",
    "group": "Embedded Finance & BaaS API Fees",
    "keywords": [
      "plaid api overage",
      "stripe connect payout fee",
      "kyc identity verification api",
      "ledger-as-a-service",
      "virtual card issuance fee"
    ]
  },
  {
    "id": 584,
    "originalId": 387,
    "name": "Decentralized Autonomous Organization (DAO) Ops",
    "group": "Decentralized Autonomous Organization (DAO) Ops",
    "keywords": [
      "snapshot voting gas fee",
      "multisig wallet deployment",
      "dao legal wrapper registration",
      "governance token airdrop fee",
      "smart contract audit"
    ]
  },
  {
    "id": 585,
    "originalId": null,
    "name": "Keywords",
    "group": "Decentralized Autonomous Organization (DAO) Ops",
    "keywords": [
      "snapshot voting gas fee",
      "multisig wallet deployment",
      "dao legal wrapper registration",
      "governance token airdrop fee",
      "smart contract audit"
    ]
  },
  {
    "id": 586,
    "originalId": 388,
    "name": "High-Security Vaults & Art Freeport Storage",
    "group": "High-Security Vaults & Art Freeport Storage",
    "keywords": [
      "geneva freeport storage",
      "biometric vault access",
      "climate controlled art storage",
      "bonded warehouse fee",
      "bullion transport armored"
    ]
  },
  {
    "id": 587,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Security Vaults & Art Freeport Storage",
    "keywords": [
      "geneva freeport storage",
      "biometric vault access",
      "climate controlled art storage",
      "bonded warehouse fee",
      "bullion transport armored"
    ]
  },
  {
    "id": 588,
    "originalId": 389,
    "name": "Hyperbaric Oxygen Therapy & Clinical Chambers",
    "group": "Hyperbaric Oxygen Therapy & Clinical Chambers",
    "keywords": [
      "hyperbaric chamber dive",
      "pure oxygen cylinder medical",
      "monoplace chamber maintenance",
      "pressure seal replacement",
      "diving medical exam"
    ]
  },
  {
    "id": 589,
    "originalId": null,
    "name": "Keywords",
    "group": "Hyperbaric Oxygen Therapy & Clinical Chambers",
    "keywords": [
      "hyperbaric chamber dive",
      "pure oxygen cylinder medical",
      "monoplace chamber maintenance",
      "pressure seal replacement",
      "diving medical exam"
    ]
  },
  {
    "id": 590,
    "originalId": 390,
    "name": "Commercial Aquaponics & Closed-Loop Farming",
    "group": "Commercial Aquaponics & Closed-Loop Farming",
    "keywords": [
      "aquaponic bell siphon",
      "tilapia fingerlings",
      "hydroton clay pebbles",
      "commercial biofilter media",
      "dissolved oxygen meter"
    ]
  },
  {
    "id": 591,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Aquaponics & Closed-Loop Farming",
    "keywords": [
      "aquaponic bell siphon",
      "tilapia fingerlings",
      "hydroton clay pebbles",
      "commercial biofilter media",
      "dissolved oxygen meter"
    ]
  },
  {
    "id": 592,
    "originalId": 391,
    "name": "Exotic Animal Husbandry & Herpetology",
    "group": "Exotic Animal Husbandry & Herpetology",
    "keywords": [
      "reptile heat panel",
      "frozen feeder mice bulk",
      "dart frog fruit flies",
      "arboreal terrarium",
      "snake hook",
      "herpetology breeding permit"
    ]
  },
  {
    "id": 593,
    "originalId": null,
    "name": "Keywords",
    "group": "Exotic Animal Husbandry & Herpetology",
    "keywords": [
      "reptile heat panel",
      "frozen feeder mice bulk",
      "dart frog fruit flies",
      "arboreal terrarium",
      "snake hook",
      "herpetology breeding permit"
    ]
  },
  {
    "id": 594,
    "originalId": 392,
    "name": "Vintage Typewriter Restoration & Ribbons",
    "group": "Vintage Typewriter Restoration & Ribbons",
    "keywords": [
      "selectric typeball",
      "royal typewriter ribbon",
      "platen resurfacing",
      "typewriter oil",
      "glass keys",
      "mechanical linkage repair"
    ]
  },
  {
    "id": 595,
    "originalId": null,
    "name": "Keywords",
    "group": "Vintage Typewriter Restoration & Ribbons",
    "keywords": [
      "selectric typeball",
      "royal typewriter ribbon",
      "platen resurfacing",
      "typewriter oil",
      "glass keys",
      "mechanical linkage repair"
    ]
  },
  {
    "id": 596,
    "originalId": 393,
    "name": "Specialized Prosthetics & Animatronics",
    "group": "Specialized Prosthetics & Animatronics",
    "keywords": [
      "pneumatic muscle actuator",
      "silicone skin casting",
      "animatronic servo matrix",
      "lifecasting alginate",
      "prosthetic adhesive"
    ]
  },
  {
    "id": 597,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Prosthetics & Animatronics",
    "keywords": [
      "pneumatic muscle actuator",
      "silicone skin casting",
      "animatronic servo matrix",
      "lifecasting alginate",
      "prosthetic adhesive"
    ]
  },
  {
    "id": 598,
    "originalId": 394,
    "name": "Competitive E-Sports Franchise Fees",
    "group": "Competitive E-Sports Franchise Fees",
    "keywords": [
      "riot franchise fee",
      "player buyout clause",
      "gaming house lease",
      "scrim server hosting",
      "e-sports jersey wholesale"
    ]
  },
  {
    "id": 599,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive E-Sports Franchise Fees",
    "keywords": [
      "riot franchise fee",
      "player buyout clause",
      "gaming house lease",
      "scrim server hosting",
      "e-sports jersey wholesale"
    ]
  },
  {
    "id": 600,
    "originalId": 395,
    "name": "Private Investigator & Surveillance Ops",
    "group": "Private Investigator & Surveillance Ops",
    "keywords": [
      "skip tracing database",
      "gps tracker magnetic",
      "directional parabolic mic",
      "private eye retainer",
      "background screening deep"
    ]
  },
  {
    "id": 601,
    "originalId": null,
    "name": "Keywords",
    "group": "Private Investigator & Surveillance Ops",
    "keywords": [
      "skip tracing database",
      "gps tracker magnetic",
      "directional parabolic mic",
      "private eye retainer",
      "background screening deep"
    ]
  },
  {
    "id": 602,
    "originalId": 396,
    "name": "Commercial Bakery & Industrial Ovens",
    "group": "Commercial Bakery & Industrial Ovens",
    "keywords": [
      "rotary rack oven",
      "commercial dough proofer",
      "spiral mixer heavy duty",
      "wholesale flour silo",
      "pastry sheeter"
    ]
  },
  {
    "id": 603,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Bakery & Industrial Ovens",
    "keywords": [
      "rotary rack oven",
      "commercial dough proofer",
      "spiral mixer heavy duty",
      "wholesale flour silo",
      "pastry sheeter"
    ]
  },
  {
    "id": 604,
    "originalId": 397,
    "name": "Artisanal Cheesemaking & Affinage",
    "group": "Artisanal Cheesemaking & Affinage",
    "keywords": [
      "affinage cave climate control",
      "cheese curd cutter",
      "raw milk testing kit",
      "cheese wax dipping pot",
      "pharig ph meter"
    ]
  },
  {
    "id": 605,
    "originalId": null,
    "name": "Keywords",
    "group": "Artisanal Cheesemaking & Affinage",
    "keywords": [
      "affinage cave climate control",
      "cheese curd cutter",
      "raw milk testing kit",
      "cheese wax dipping pot",
      "pharig ph meter"
    ]
  },
  {
    "id": 606,
    "originalId": 398,
    "name": "Industrial Laser Cutting & Engraving",
    "group": "Industrial Laser Cutting & Engraving",
    "keywords": [
      "co2 laser tube",
      "fiber laser chiller",
      "laser focusing lens",
      "honeycomb cutting bed",
      "fume extractor filter"
    ]
  },
  {
    "id": 607,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Laser Cutting & Engraving",
    "keywords": [
      "co2 laser tube",
      "fiber laser chiller",
      "laser focusing lens",
      "honeycomb cutting bed",
      "fume extractor filter"
    ]
  },
  {
    "id": 608,
    "originalId": 399,
    "name": "Micro-Distillery & Craft Spirits",
    "group": "Micro-Distillery & Craft Spirits",
    "keywords": [
      "copper still botanical basket",
      "gin botanical wholesale",
      "bung hole stopper",
      "proofing hydrometer",
      "ttb excise tax"
    ]
  },
  {
    "id": 609,
    "originalId": null,
    "name": "Keywords",
    "group": "Micro-Distillery & Craft Spirits",
    "keywords": [
      "copper still botanical basket",
      "gin botanical wholesale",
      "bung hole stopper",
      "proofing hydrometer",
      "ttb excise tax"
    ]
  },
  {
    "id": 610,
    "originalId": 400,
    "name": "Custom Orthotics & Gait Analysis",
    "group": "Custom Orthotics & Gait Analysis",
    "keywords": [
      "3d foot scanner",
      "eva foam block",
      "gait analysis treadmill session",
      "orthotic grinding wheel",
      "podiatrist mold"
    ]
  },
  {
    "id": 611,
    "originalId": null,
    "name": "Keywords",
    "group": "Custom Orthotics & Gait Analysis",
    "keywords": [
      "3d foot scanner",
      "eva foam block",
      "gait analysis treadmill session",
      "orthotic grinding wheel",
      "podiatrist mold"
    ]
  },
  {
    "id": 612,
    "originalId": 401,
    "name": "Professional Billiards & Snooker Maintenance",
    "group": "Professional Billiards & Snooker Maintenance",
    "keywords": [
      "snooker table re-felting",
      "slate bed leveling",
      "phenolic resin cue ball",
      "cue tip shaper",
      "billiard chalk gross"
    ]
  },
  {
    "id": 613,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Billiards & Snooker Maintenance",
    "keywords": [
      "snooker table re-felting",
      "slate bed leveling",
      "phenolic resin cue ball",
      "cue tip shaper",
      "billiard chalk gross"
    ]
  },
  {
    "id": 614,
    "originalId": 402,
    "name": "High-Altitude Ballooning & Stratospheric Payloads",
    "group": "High-Altitude Ballooning & Stratospheric Payloads",
    "keywords": [
      "weather balloon latex 1200g",
      "helium regulator valve",
      "aprs tracker",
      "payload parachute",
      "flight prediction software"
    ]
  },
  {
    "id": 615,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Altitude Ballooning & Stratospheric Payloads",
    "keywords": [
      "weather balloon latex 1200g",
      "helium regulator valve",
      "aprs tracker",
      "payload parachute",
      "flight prediction software"
    ]
  },
  {
    "id": 616,
    "originalId": 403,
    "name": "Indie Perfumery & Synthetic Aromachemicals",
    "group": "Indie Perfumery & Synthetic Aromachemicals",
    "keywords": [
      "iso e super",
      "ambroxan crystal",
      "galaxolide",
      "fragrance compounding scale",
      "olfactometer",
      "perfumers alcohol bulk"
    ]
  },
  {
    "id": 617,
    "originalId": null,
    "name": "Keywords",
    "group": "Indie Perfumery & Synthetic Aromachemicals",
    "keywords": [
      "iso e super",
      "ambroxan crystal",
      "galaxolide",
      "fragrance compounding scale",
      "olfactometer",
      "perfumers alcohol bulk"
    ]
  },
  {
    "id": 618,
    "originalId": 404,
    "name": "Rare Bonsai Specimen Import & Quarantine",
    "group": "Rare Bonsai Specimen Import & Quarantine",
    "keywords": [
      "yamadori specimen",
      "phytosanitary certificate",
      "bonsai quarantine fee",
      "concave branch cutter",
      "akadama clay imported"
    ]
  },
  {
    "id": 619,
    "originalId": null,
    "name": "Keywords",
    "group": "Rare Bonsai Specimen Import & Quarantine",
    "keywords": [
      "yamadori specimen",
      "phytosanitary certificate",
      "bonsai quarantine fee",
      "concave branch cutter",
      "akadama clay imported"
    ]
  },
  {
    "id": 620,
    "originalId": 405,
    "name": "Bespoke Luthier & Acoustic Instrument Voicing",
    "group": "Bespoke Luthier & Acoustic Instrument Voicing",
    "keywords": [
      "tap tuning hammer",
      "hide glue pot",
      "spruce bracing wood",
      "fret press caul",
      "rosette inlay routing"
    ]
  },
  {
    "id": 621,
    "originalId": null,
    "name": "Keywords",
    "group": "Bespoke Luthier & Acoustic Instrument Voicing",
    "keywords": [
      "tap tuning hammer",
      "hide glue pot",
      "spruce bracing wood",
      "fret press caul",
      "rosette inlay routing"
    ]
  },
  {
    "id": 622,
    "originalId": 406,
    "name": "Professional Bowling Alley Maintenance",
    "group": "Professional Bowling Alley Maintenance",
    "keywords": [
      "lane conditioning oil",
      "pinsetter machine parts",
      "bowling ball resurfacer",
      "approach finish",
      "gutter bumper actuator"
    ]
  },
  {
    "id": 623,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Bowling Alley Maintenance",
    "keywords": [
      "lane conditioning oil",
      "pinsetter machine parts",
      "bowling ball resurfacer",
      "approach finish",
      "gutter bumper actuator"
    ]
  },
  {
    "id": 624,
    "originalId": 407,
    "name": "Historical Fencing & HEMA Gear",
    "group": "Historical Fencing & HEMA Gear",
    "keywords": [
      "hema steel feder",
      "fencing gorget",
      "sparring gauntlets",
      "doublet fencing jacket",
      "rapier thrusting tip"
    ]
  },
  {
    "id": 625,
    "originalId": null,
    "name": "Keywords",
    "group": "Historical Fencing & HEMA Gear",
    "keywords": [
      "hema steel feder",
      "fencing gorget",
      "sparring gauntlets",
      "doublet fencing jacket",
      "rapier thrusting tip"
    ]
  },
  {
    "id": 626,
    "originalId": 408,
    "name": "Commercial Hydroponic Cannabis Logistics",
    "group": "Commercial Hydroponic Cannabis Logistics",
    "keywords": [
      "seed to sale tracking saas",
      "canopy led grid",
      "dehumidifier industrial",
      "trim machine rental",
      "state dispensary license fee"
    ]
  },
  {
    "id": 627,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Hydroponic Cannabis Logistics",
    "keywords": [
      "seed to sale tracking saas",
      "canopy led grid",
      "dehumidifier industrial",
      "trim machine rental",
      "state dispensary license fee"
    ]
  },
  {
    "id": 628,
    "originalId": 409,
    "name": "Vertical Wind Tunnel & Indoor Skydiving",
    "group": "Vertical Wind Tunnel & Indoor Skydiving",
    "keywords": [
      "wind tunnel turbine maintenance",
      "skydiving flight suit",
      "tunnel instructor fee",
      "airflow deflector",
      "indoor skydive helmet"
    ]
  },
  {
    "id": 629,
    "originalId": null,
    "name": "Keywords",
    "group": "Vertical Wind Tunnel & Indoor Skydiving",
    "keywords": [
      "wind tunnel turbine maintenance",
      "skydiving flight suit",
      "tunnel instructor fee",
      "airflow deflector",
      "indoor skydive helmet"
    ]
  },
  {
    "id": 630,
    "originalId": 410,
    "name": "Commercial Mushroom Foraging & Truffle Dogs",
    "group": "Commercial Mushroom Foraging & Truffle Dogs",
    "keywords": [
      "lagotto romagnolo training",
      "truffle hunting permit",
      "morel drying rack",
      "foraging knife folding",
      "mycological society dues"
    ]
  },
  {
    "id": 631,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Mushroom Foraging & Truffle Dogs",
    "keywords": [
      "lagotto romagnolo training",
      "truffle hunting permit",
      "morel drying rack",
      "foraging knife folding",
      "mycological society dues"
    ]
  },
  {
    "id": 632,
    "originalId": 411,
    "name": "Private Submersible & Mini-Sub Maintenance",
    "group": "Private Submersible & Mini-Sub Maintenance",
    "keywords": [
      "acrylic pressure sphere polishing",
      "ballast tank valve",
      "submarine battery bank",
      "life support scrubber",
      "sonar transducer"
    ]
  },
  {
    "id": 633,
    "originalId": null,
    "name": "Keywords",
    "group": "Private Submersible & Mini-Sub Maintenance",
    "keywords": [
      "acrylic pressure sphere polishing",
      "ballast tank valve",
      "submarine battery bank",
      "life support scrubber",
      "sonar transducer"
    ]
  },
  {
    "id": 634,
    "originalId": 412,
    "name": "Avalanche Control & Snow Safety Ops",
    "group": "Avalanche Control & Snow Safety Ops",
    "keywords": [
      "avalanche transceiver",
      "snow profile probe",
      "avalanche airbag cylinder",
      "explosive charge permit",
      "ski patrol toboggan"
    ]
  },
  {
    "id": 635,
    "originalId": null,
    "name": "Keywords",
    "group": "Avalanche Control & Snow Safety Ops",
    "keywords": [
      "avalanche transceiver",
      "snow profile probe",
      "avalanche airbag cylinder",
      "explosive charge permit",
      "ski patrol toboggan"
    ]
  },
  {
    "id": 636,
    "originalId": 413,
    "name": "Professional Chimney Sweep & Masonry",
    "group": "Professional Chimney Sweep & Masonry",
    "keywords": [
      "chimney flue brush",
      "creosote remover chemical",
      "fireplace damper replacement",
      "tuckpointing trowel",
      "soot vacuum"
    ]
  },
  {
    "id": 637,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Chimney Sweep & Masonry",
    "keywords": [
      "chimney flue brush",
      "creosote remover chemical",
      "fireplace damper replacement",
      "tuckpointing trowel",
      "soot vacuum"
    ]
  },
  {
    "id": 638,
    "originalId": 414,
    "name": "Commercial Laundry & Dry Cleaning Solvents",
    "group": "Commercial Laundry & Dry Cleaning Solvents",
    "keywords": [
      "perc solvent drum",
      "industrial mangle iron",
      "garment bagging machine",
      "dry cleaning boiler part",
      "spotting chemical"
    ]
  },
  {
    "id": 639,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Laundry & Dry Cleaning Solvents",
    "keywords": [
      "perc solvent drum",
      "industrial mangle iron",
      "garment bagging machine",
      "dry cleaning boiler part",
      "spotting chemical"
    ]
  },
  {
    "id": 640,
    "originalId": 415,
    "name": "Neonatal ICU & Specialized Incubators",
    "group": "Neonatal ICU & Specialized Incubators",
    "keywords": [
      "infant incubator micro-filter",
      "phototherapy lamp",
      "neonatal ventilator tube",
      "preemie feeding syringe",
      "nicu monitoring software"
    ]
  },
  {
    "id": 641,
    "originalId": null,
    "name": "Keywords",
    "group": "Neonatal ICU & Specialized Incubators",
    "keywords": [
      "infant incubator micro-filter",
      "phototherapy lamp",
      "neonatal ventilator tube",
      "preemie feeding syringe",
      "nicu monitoring software"
    ]
  },
  {
    "id": 642,
    "originalId": 416,
    "name": "Veterinary Dentistry & Equine Floats",
    "group": "Veterinary Dentistry & Equine Floats",
    "keywords": [
      "equine dental float",
      "veterinary tooth extractor",
      "horse sedation dose",
      "dental speculum",
      "animal scaler"
    ]
  },
  {
    "id": 643,
    "originalId": null,
    "name": "Keywords",
    "group": "Veterinary Dentistry & Equine Floats",
    "keywords": [
      "equine dental float",
      "veterinary tooth extractor",
      "horse sedation dose",
      "dental speculum",
      "animal scaler"
    ]
  },
  {
    "id": 644,
    "originalId": 417,
    "name": "Professional Ice Resurfacing & Zamboni",
    "group": "Professional Ice Resurfacing & Zamboni",
    "keywords": [
      "zamboni blade sharpening",
      "ice resurfacer wash water pump",
      "rink board replacement",
      "ice paint white",
      "refrigeration brine"
    ]
  },
  {
    "id": 645,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Ice Resurfacing & Zamboni",
    "keywords": [
      "zamboni blade sharpening",
      "ice resurfacer wash water pump",
      "rink board replacement",
      "ice paint white",
      "refrigeration brine"
    ]
  },
  {
    "id": 646,
    "originalId": 418,
    "name": "Commercial Tannery & Leather Curing",
    "group": "Commercial Tannery & Leather Curing",
    "keywords": [
      "chromium sulfate bulk",
      "tanning drum motor",
      "leather fleshing knife",
      "hide splitting machine",
      "leather finishing wax"
    ]
  },
  {
    "id": 647,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Tannery & Leather Curing",
    "keywords": [
      "chromium sulfate bulk",
      "tanning drum motor",
      "leather fleshing knife",
      "hide splitting machine",
      "leather finishing wax"
    ]
  },
  {
    "id": 648,
    "originalId": 419,
    "name": "Film Projection & 70mm IMAX Maintenance",
    "group": "Film Projection & 70mm IMAX Maintenance",
    "keywords": [
      "imax xenon bulb",
      "70mm film platter",
      "projection lens cleaning",
      "dolby atmos processor",
      "film splicing tape"
    ]
  },
  {
    "id": 649,
    "originalId": null,
    "name": "Keywords",
    "group": "Film Projection & 70mm IMAX Maintenance",
    "keywords": [
      "imax xenon bulb",
      "70mm film platter",
      "projection lens cleaning",
      "dolby atmos processor",
      "film splicing tape"
    ]
  },
  {
    "id": 650,
    "originalId": 420,
    "name": "Professional Taxidermy & Freeze Drying",
    "group": "Professional Taxidermy & Freeze Drying",
    "keywords": [
      "freeze dry machine taxidermy",
      "tanning pickle",
      "glass animal eyes",
      "form armature",
      "ear liners"
    ]
  },
  {
    "id": 651,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Taxidermy & Freeze Drying",
    "keywords": [
      "freeze dry machine taxidermy",
      "tanning pickle",
      "glass animal eyes",
      "form armature",
      "ear liners"
    ]
  },
  {
    "id": 652,
    "originalId": 421,
    "name": "Industrial Sandblasting & Abrasives",
    "group": "Industrial Sandblasting & Abrasives",
    "keywords": [
      "sandblasting cabinet",
      "aluminum oxide grit",
      "glass bead abrasive",
      "sandblast nozzle ceramic",
      "respirator air supply"
    ]
  },
  {
    "id": 653,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Sandblasting & Abrasives",
    "keywords": [
      "sandblasting cabinet",
      "aluminum oxide grit",
      "glass bead abrasive",
      "sandblast nozzle ceramic",
      "respirator air supply"
    ]
  },
  {
    "id": 654,
    "originalId": 422,
    "name": "Commercial Pest Control & Fumigation",
    "group": "Commercial Pest Control & Fumigation",
    "keywords": [
      "termite bait station",
      "fumigation tent rental",
      "ulv cold fogger",
      "rodenticide bulk",
      "exterminator license renewal"
    ]
  },
  {
    "id": 655,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Pest Control & Fumigation",
    "keywords": [
      "termite bait station",
      "fumigation tent rental",
      "ulv cold fogger",
      "rodenticide bulk",
      "exterminator license renewal"
    ]
  },
  {
    "id": 656,
    "originalId": 423,
    "name": "Historic Clock Tower & Horology Restoration",
    "group": "Historic Clock Tower & Horology Restoration",
    "keywords": [
      "turret clock gear cutting",
      "pendulum bob lead",
      "bell tower clapper",
      "escapement wheel forging",
      "clock tower lubrication"
    ]
  },
  {
    "id": 657,
    "originalId": null,
    "name": "Keywords",
    "group": "Historic Clock Tower & Horology Restoration",
    "keywords": [
      "turret clock gear cutting",
      "pendulum bob lead",
      "bell tower clapper",
      "escapement wheel forging",
      "clock tower lubrication"
    ]
  },
  {
    "id": 658,
    "originalId": 424,
    "name": "Professional Foley Art & Sound Design",
    "group": "Professional Foley Art & Sound Design",
    "keywords": [
      "foley pit sand",
      "contact microphone",
      "field recorder sound devices",
      "acoustic baffle",
      "foley prop junk"
    ]
  },
  {
    "id": 659,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Foley Art & Sound Design",
    "keywords": [
      "foley pit sand",
      "contact microphone",
      "field recorder sound devices",
      "acoustic baffle",
      "foley prop junk"
    ]
  },
  {
    "id": 660,
    "originalId": 425,
    "name": "Commercial Fireworks & Pyrotechnic Shows",
    "group": "Commercial Fireworks & Pyrotechnic Shows",
    "keywords": [
      "pyrotechnic firing system",
      "aerial shell mortar",
      "display fireworks permit",
      "electric match igniter",
      "pyro mortar rack"
    ]
  },
  {
    "id": 661,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Fireworks & Pyrotechnic Shows",
    "keywords": [
      "pyrotechnic firing system",
      "aerial shell mortar",
      "display fireworks permit",
      "electric match igniter",
      "pyro mortar rack"
    ]
  },
  {
    "id": 662,
    "originalId": 426,
    "name": "Shipwright & Traditional Wooden Boat Building",
    "group": "Shipwright & Traditional Wooden Boat Building",
    "keywords": [
      "oakum caulking",
      "bronze boat nails",
      "steam box tubing",
      "marine spar varnish",
      "adze woodworking tool"
    ]
  },
  {
    "id": 663,
    "originalId": null,
    "name": "Keywords",
    "group": "Shipwright & Traditional Wooden Boat Building",
    "keywords": [
      "oakum caulking",
      "bronze boat nails",
      "steam box tubing",
      "marine spar varnish",
      "adze woodworking tool"
    ]
  },
  {
    "id": 664,
    "originalId": 427,
    "name": "Commercial Apiary & Queen Bee Breeding",
    "group": "Commercial Apiary & Queen Bee Breeding",
    "keywords": [
      "queen rearing kit",
      "artificial insemination bee syringe",
      "bulk pollen substitute",
      "honey extractor centrifuge",
      "apiary inspector fee"
    ]
  },
  {
    "id": 665,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Apiary & Queen Bee Breeding",
    "keywords": [
      "queen rearing kit",
      "artificial insemination bee syringe",
      "bulk pollen substitute",
      "honey extractor centrifuge",
      "apiary inspector fee"
    ]
  },
  {
    "id": 666,
    "originalId": 428,
    "name": "Professional Pool & Billiards Hall Ops",
    "group": "Professional Pool & Billiards Hall Ops",
    "keywords": [
      "coin op mechanism pool",
      "billiard ball polisher",
      "house cue bulk",
      "chalk cone",
      "pool table iron"
    ]
  },
  {
    "id": 667,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Pool & Billiards Hall Ops",
    "keywords": [
      "coin op mechanism pool",
      "billiard ball polisher",
      "house cue bulk",
      "chalk cone",
      "pool table iron"
    ]
  },
  {
    "id": 668,
    "originalId": 429,
    "name": "Custom Neon Sign Fabrication & Noble Gases",
    "group": "Custom Neon Sign Fabrication & Noble Gases",
    "keywords": [
      "glass tube bending torch",
      "argon gas cylinder",
      "krypton gas vial",
      "neon bombarding transformer",
      "blockout paint black"
    ]
  },
  {
    "id": 669,
    "originalId": null,
    "name": "Keywords",
    "group": "Custom Neon Sign Fabrication & Noble Gases",
    "keywords": [
      "glass tube bending torch",
      "argon gas cylinder",
      "krypton gas vial",
      "neon bombarding transformer",
      "blockout paint black"
    ]
  },
  {
    "id": 670,
    "originalId": 430,
    "name": "Commercial Float Tank & Sensory Deprivation",
    "group": "Commercial Float Tank & Sensory Deprivation",
    "keywords": [
      "epsom salt bulk 1000lb",
      "float tank filtration pump",
      "uv ozone sterilizer",
      "earplugs bulk",
      "sensory deprivation chamber maintenance"
    ]
  },
  {
    "id": 671,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Float Tank & Sensory Deprivation",
    "keywords": [
      "epsom salt bulk 1000lb",
      "float tank filtration pump",
      "uv ozone sterilizer",
      "earplugs bulk",
      "sensory deprivation chamber maintenance"
    ]
  },
  {
    "id": 672,
    "originalId": 431,
    "name": "Industrial Metal Forging & Drop Hammers",
    "group": "Industrial Metal Forging & Drop Hammers",
    "keywords": [
      "drop forging die",
      "power hammer anvil",
      "induction heater billet",
      "forging manipulator",
      "heat treat quenching oil"
    ]
  },
  {
    "id": 673,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Metal Forging & Drop Hammers",
    "keywords": [
      "drop forging die",
      "power hammer anvil",
      "induction heater billet",
      "forging manipulator",
      "heat treat quenching oil"
    ]
  },
  {
    "id": 674,
    "originalId": 432,
    "name": "Commercial Paintball Field Infrastructure",
    "group": "Commercial Paintball Field Infrastructure",
    "keywords": [
      "paintball netting bunker",
      "bulk co2 fill station",
      "rental paintball marker bulk",
      "air compressor 4500psi",
      "field paint bulk"
    ]
  },
  {
    "id": 675,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Paintball Field Infrastructure",
    "keywords": [
      "paintball netting bunker",
      "bulk co2 fill station",
      "rental paintball marker bulk",
      "air compressor 4500psi",
      "field paint bulk"
    ]
  },
  {
    "id": 676,
    "originalId": 433,
    "name": "Professional Hypnotherapy & Neuro-Linguistic",
    "group": "Professional Hypnotherapy & Neuro-Linguistic",
    "keywords": [
      "hypnotherapist certification",
      "emdr light bar",
      "biofeedback software",
      "hypnosis script library",
      "nlp practitioner fee"
    ]
  },
  {
    "id": 677,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Hypnotherapy & Neuro-Linguistic",
    "keywords": [
      "hypnotherapist certification",
      "emdr light bar",
      "biofeedback software",
      "hypnosis script library",
      "nlp practitioner fee"
    ]
  },
  {
    "id": 678,
    "originalId": 434,
    "name": "Industrial Rope Access & SPRAT Certification",
    "group": "Industrial Rope Access & SPRAT Certification",
    "keywords": [
      "sprat level exam",
      "petzl descender",
      "static kernmantle rope",
      "ascender jumar",
      "rope access harness"
    ]
  },
  {
    "id": 679,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Rope Access & SPRAT Certification",
    "keywords": [
      "sprat level exam",
      "petzl descender",
      "static kernmantle rope",
      "ascender jumar",
      "rope access harness"
    ]
  },
  {
    "id": 680,
    "originalId": 435,
    "name": "Commercial Cave Guiding & Speleology",
    "group": "Commercial Cave Guiding & Speleology",
    "keywords": [
      "spelunking helmet light",
      "cave survey disto",
      "guano mask",
      "climbing rack cave",
      "cave conservation fee"
    ]
  },
  {
    "id": 681,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Cave Guiding & Speleology",
    "keywords": [
      "spelunking helmet light",
      "cave survey disto",
      "guano mask",
      "climbing rack cave",
      "cave conservation fee"
    ]
  },
  {
    "id": 682,
    "originalId": 436,
    "name": "Advanced Astrodynamics & Orbital Mechanics",
    "group": "Advanced Astrodynamics & Orbital Mechanics",
    "keywords": [
      "stk software license",
      "orbital propagation api",
      "space situational awareness data",
      "ephemeris data feed",
      "gravity assist calculator"
    ]
  },
  {
    "id": 683,
    "originalId": null,
    "name": "Keywords",
    "group": "Advanced Astrodynamics & Orbital Mechanics",
    "keywords": [
      "stk software license",
      "orbital propagation api",
      "space situational awareness data",
      "ephemeris data feed",
      "gravity assist calculator"
    ]
  },
  {
    "id": 684,
    "originalId": 437,
    "name": "Boutique Vinyl Record Pressing",
    "group": "Boutique Vinyl Record Pressing",
    "keywords": [
      "pvc pellets bulk",
      "vinyl pressing stamper",
      "mastering lathe cut",
      "record jacket printing",
      "test pressing fee"
    ]
  },
  {
    "id": 685,
    "originalId": null,
    "name": "Keywords",
    "group": "Boutique Vinyl Record Pressing",
    "keywords": [
      "pvc pellets bulk",
      "vinyl pressing stamper",
      "mastering lathe cut",
      "record jacket printing",
      "test pressing fee"
    ]
  },
  {
    "id": 686,
    "originalId": 438,
    "name": "Industrial Metrology & CMM Inspection",
    "group": "Industrial Metrology & CMM Inspection",
    "keywords": [
      "coordinate measuring machine probe",
      "optical comparator",
      "gauge block set calibration",
      "laser tracker target",
      "surface roughness tester"
    ]
  },
  {
    "id": 687,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Metrology & CMM Inspection",
    "keywords": [
      "coordinate measuring machine probe",
      "optical comparator",
      "gauge block set calibration",
      "laser tracker target",
      "surface roughness tester"
    ]
  },
  {
    "id": 688,
    "originalId": 439,
    "name": "Professional Stunt Coordination & Rigging",
    "group": "Professional Stunt Coordination & Rigging",
    "keywords": [
      "stunt crash pad",
      "wire work harness",
      "breakaway glass bulk",
      "fire gel stunt",
      "air ram kicker"
    ]
  },
  {
    "id": 689,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Stunt Coordination & Rigging",
    "keywords": [
      "stunt crash pad",
      "wire work harness",
      "breakaway glass bulk",
      "fire gel stunt",
      "air ram kicker"
    ]
  },
  {
    "id": 690,
    "originalId": 440,
    "name": "Commercial Hydrography & Bathymetry",
    "group": "Commercial Hydrography & Bathymetry",
    "keywords": [
      "multibeam echo sounder",
      "tide gauge sensor",
      "bathymetric survey software",
      "underwater drone auv",
      "hydrographic mapping api"
    ]
  },
  {
    "id": 691,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Hydrography & Bathymetry",
    "keywords": [
      "multibeam echo sounder",
      "tide gauge sensor",
      "bathymetric survey software",
      "underwater drone auv",
      "hydrographic mapping api"
    ]
  },
  {
    "id": 692,
    "originalId": 441,
    "name": "Artisan Chocolatier & Couverture Tempering",
    "group": "Artisan Chocolatier & Couverture Tempering",
    "keywords": [
      "chocolate tempering machine",
      "polycarbonate chocolate mold",
      "cocoa butter silk",
      "bulk couverture drops",
      "praline center extruder"
    ]
  },
  {
    "id": 693,
    "originalId": null,
    "name": "Keywords",
    "group": "Artisan Chocolatier & Couverture Tempering",
    "keywords": [
      "chocolate tempering machine",
      "polycarbonate chocolate mold",
      "cocoa butter silk",
      "bulk couverture drops",
      "praline center extruder"
    ]
  },
  {
    "id": 694,
    "originalId": 442,
    "name": "Specialized Nuclear Medicine & Oncology",
    "group": "Specialized Nuclear Medicine & Oncology",
    "keywords": [
      "pet scan radiotracer",
      "cyclotron maintenance",
      "linear accelerator part",
      "brachytherapy seeds",
      "radiation dosimetry service"
    ]
  },
  {
    "id": 695,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Nuclear Medicine & Oncology",
    "keywords": [
      "pet scan radiotracer",
      "cyclotron maintenance",
      "linear accelerator part",
      "brachytherapy seeds",
      "radiation dosimetry service"
    ]
  },
  {
    "id": 696,
    "originalId": 443,
    "name": "High-End Millinery & Hat Making",
    "group": "High-End Millinery & Hat Making",
    "keywords": [
      "felt hat block",
      "petersham ribbon",
      "millinery wire",
      "sinamay fabric roll",
      "hat stretcher"
    ]
  },
  {
    "id": 697,
    "originalId": null,
    "name": "Keywords",
    "group": "High-End Millinery & Hat Making",
    "keywords": [
      "felt hat block",
      "petersham ribbon",
      "millinery wire",
      "sinamay fabric roll",
      "hat stretcher"
    ]
  },
  {
    "id": 698,
    "originalId": 444,
    "name": "Professional Dog Show & Conformation Handling",
    "group": "Professional Dog Show & Conformation Handling",
    "keywords": [
      "akc registration fee",
      "grooming table hydraulic",
      "show lead leather",
      "handling class fee",
      "chalk block dog grooming"
    ]
  },
  {
    "id": 699,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Dog Show & Conformation Handling",
    "keywords": [
      "akc registration fee",
      "grooming table hydraulic",
      "show lead leather",
      "handling class fee",
      "chalk block dog grooming"
    ]
  },
  {
    "id": 700,
    "originalId": 445,
    "name": "Commercial Maple Syrup Sugaring",
    "group": "Commercial Maple Syrup Sugaring",
    "keywords": [
      "maple sap tubing",
      "reverse osmosis sap concentrator",
      "evaporator pan stainless",
      "hydrometer maple",
      "bulk syrup jugs"
    ]
  },
  {
    "id": 701,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Maple Syrup Sugaring",
    "keywords": [
      "maple sap tubing",
      "reverse osmosis sap concentrator",
      "evaporator pan stainless",
      "hydrometer maple",
      "bulk syrup jugs"
    ]
  },
  {
    "id": 702,
    "originalId": 446,
    "name": "Professional Voiceover & Audiobook Narration",
    "group": "Professional Voiceover & Audiobook Narration",
    "keywords": [
      "whisper room booth",
      "neumann u87",
      "izotope rx audio repair",
      "acx distribution fee",
      "punch and roll software"
    ]
  },
  {
    "id": 703,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Voiceover & Audiobook Narration",
    "keywords": [
      "whisper room booth",
      "neumann u87",
      "izotope rx audio repair",
      "acx distribution fee",
      "punch and roll software"
    ]
  },
  {
    "id": 704,
    "originalId": 447,
    "name": "Commercial Oyster Farming & Mariculture",
    "group": "Commercial Oyster Farming & Mariculture",
    "keywords": [
      "oyster spat bulk",
      "floating grow out bag",
      "oyster tumbling grading machine",
      "marine lease fee",
      "vibrio testing kit"
    ]
  },
  {
    "id": 705,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Oyster Farming & Mariculture",
    "keywords": [
      "oyster spat bulk",
      "floating grow out bag",
      "oyster tumbling grading machine",
      "marine lease fee",
      "vibrio testing kit"
    ]
  },
  {
    "id": 706,
    "originalId": 448,
    "name": "Industrial Water Jet Cutting & Garnet",
    "group": "Industrial Water Jet Cutting & Garnet",
    "keywords": [
      "waterjet mixing tube",
      "abrasive garnet sand bulk",
      "high pressure pump seal",
      "waterjet catcher tank baffle",
      "cnc cutting head"
    ]
  },
  {
    "id": 707,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Water Jet Cutting & Garnet",
    "keywords": [
      "waterjet mixing tube",
      "abrasive garnet sand bulk",
      "high pressure pump seal",
      "waterjet catcher tank baffle",
      "cnc cutting head"
    ]
  },
  {
    "id": 708,
    "originalId": 449,
    "name": "Professional Ice Sculpting & Chainsaw Art",
    "group": "Professional Ice Sculpting & Chainsaw Art",
    "keywords": [
      "clinebell ice block maker",
      "die grinder bit carving",
      "chainsaw carving bar",
      "ice tong lifter",
      "cold weather waterproof glove"
    ]
  },
  {
    "id": 709,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Ice Sculpting & Chainsaw Art",
    "keywords": [
      "clinebell ice block maker",
      "die grinder bit carving",
      "chainsaw carving bar",
      "ice tong lifter",
      "cold weather waterproof glove"
    ]
  },
  {
    "id": 710,
    "originalId": 450,
    "name": "Specialized Orthopedic Implants & Surgery",
    "group": "Specialized Orthopedic Implants & Surgery",
    "keywords": [
      "titanium bone screw",
      "intramedullary nail",
      "surgical bone saw blade",
      "joint replacement prosthesis",
      "orthopedic drill"
    ]
  },
  {
    "id": 711,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Orthopedic Implants & Surgery",
    "keywords": [
      "titanium bone screw",
      "intramedullary nail",
      "surgical bone saw blade",
      "joint replacement prosthesis",
      "orthopedic drill"
    ]
  },
  {
    "id": 712,
    "originalId": 451,
    "name": "Industrial Scale Bookbinding & Case Making",
    "group": "Industrial Scale Bookbinding & Case Making",
    "keywords": [
      "perfect binding machine glue",
      "hot foil stamping die",
      "folding machine roller",
      "guillotine paper cutter blade",
      "signatures sewing thread"
    ]
  },
  {
    "id": 713,
    "originalId": null,
    "name": "Keywords",
    "group": "Industrial Scale Bookbinding & Case Making",
    "keywords": [
      "perfect binding machine glue",
      "hot foil stamping die",
      "folding machine roller",
      "guillotine paper cutter blade",
      "signatures sewing thread"
    ]
  },
  {
    "id": 714,
    "originalId": 452,
    "name": "Professional Kart Racing & Telemetry",
    "group": "Professional Kart Racing & Telemetry",
    "keywords": [
      "rotax max engine rebuild",
      "karting rib protector",
      "mychron datalogger",
      "kart slick tires",
      "track rental session"
    ]
  },
  {
    "id": 715,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Kart Racing & Telemetry",
    "keywords": [
      "rotax max engine rebuild",
      "karting rib protector",
      "mychron datalogger",
      "kart slick tires",
      "track rental session"
    ]
  },
  {
    "id": 716,
    "originalId": 453,
    "name": "Commercial Distillery Barrel Maturation",
    "group": "Commercial Distillery Barrel Maturation",
    "keywords": [
      "charred oak barrel",
      "barrel rack storage",
      "angels share ventilation",
      "barrel bung silicone",
      "spirit thief valinch"
    ]
  },
  {
    "id": 717,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Distillery Barrel Maturation",
    "keywords": [
      "charred oak barrel",
      "barrel rack storage",
      "angels share ventilation",
      "barrel bung silicone",
      "spirit thief valinch"
    ]
  },
  {
    "id": 718,
    "originalId": 454,
    "name": "High-Security Shredding & Data Destruction",
    "group": "High-Security Shredding & Data Destruction",
    "keywords": [
      "cross cut industrial shredder",
      "hard drive degausser",
      "shredding bin rental",
      "certificate of destruction fee",
      "secure transport lock"
    ]
  },
  {
    "id": 719,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Security Shredding & Data Destruction",
    "keywords": [
      "cross cut industrial shredder",
      "hard drive degausser",
      "shredding bin rental",
      "certificate of destruction fee",
      "secure transport lock"
    ]
  },
  {
    "id": 720,
    "originalId": 455,
    "name": "Specialized Mycology & Lab Strain Cultivation",
    "group": "Specialized Mycology & Lab Strain Cultivation",
    "keywords": [
      "flow hood hepa filter",
      "autoclave sterilizer tape",
      "agar plates prepoured",
      "master slant culture",
      "liquid culture syringe"
    ]
  },
  {
    "id": 721,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Mycology & Lab Strain Cultivation",
    "keywords": [
      "flow hood hepa filter",
      "autoclave sterilizer tape",
      "agar plates prepoured",
      "master slant culture",
      "liquid culture syringe"
    ]
  },
  {
    "id": 722,
    "originalId": 456,
    "name": "Professional E-Foil & Electric Surfboard",
    "group": "Professional E-Foil & Electric Surfboard",
    "keywords": [
      "e-foil mast",
      "lithium marine battery",
      "wireless waterproof throttle",
      "hydrofoil wing",
      "e-surfboard impeller"
    ]
  },
  {
    "id": 723,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional E-Foil & Electric Surfboard",
    "keywords": [
      "e-foil mast",
      "lithium marine battery",
      "wireless waterproof throttle",
      "hydrofoil wing",
      "e-surfboard impeller"
    ]
  },
  {
    "id": 724,
    "originalId": 457,
    "name": "Commercial Glass Etching & Sandcarving",
    "group": "Commercial Glass Etching & Sandcarving",
    "keywords": [
      "photoresist film",
      "washout booth",
      "sandcarving cabinet",
      "abrasive grit silicon carbide",
      "stencil burnisher"
    ]
  },
  {
    "id": 725,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Glass Etching & Sandcarving",
    "keywords": [
      "photoresist film",
      "washout booth",
      "sandcarving cabinet",
      "abrasive grit silicon carbide",
      "stencil burnisher"
    ]
  },
  {
    "id": 726,
    "originalId": 458,
    "name": "High-Altitude Mountaineering Oxygen",
    "group": "High-Altitude Mountaineering Oxygen",
    "keywords": [
      "poiskh oxygen cylinder",
      "climbing regulator mask",
      "summit suit down",
      "sherpa oxygen deposit fee",
      "o2 flow meter"
    ]
  },
  {
    "id": 727,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Altitude Mountaineering Oxygen",
    "keywords": [
      "poiskh oxygen cylinder",
      "climbing regulator mask",
      "summit suit down",
      "sherpa oxygen deposit fee",
      "o2 flow meter"
    ]
  },
  {
    "id": 728,
    "originalId": 459,
    "name": "Specialized Antique Textile Restoration",
    "group": "Specialized Antique Textile Restoration",
    "keywords": [
      "archival tissue paper",
      "silk crepeline",
      "textile conservation vacuum",
      "ph neutral detergent",
      "natural dye extract"
    ]
  },
  {
    "id": 729,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Antique Textile Restoration",
    "keywords": [
      "archival tissue paper",
      "silk crepeline",
      "textile conservation vacuum",
      "ph neutral detergent",
      "natural dye extract"
    ]
  },
  {
    "id": 730,
    "originalId": 460,
    "name": "Professional Esports Casting & Production",
    "group": "Professional Esports Casting & Production",
    "keywords": [
      "vmix pro license",
      "ndi ptz camera",
      "stream deck xl",
      "tally light system",
      "esports observer pc"
    ]
  },
  {
    "id": 731,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Esports Casting & Production",
    "keywords": [
      "vmix pro license",
      "ndi ptz camera",
      "stream deck xl",
      "tally light system",
      "esports observer pc"
    ]
  },
  {
    "id": 732,
    "originalId": 461,
    "name": "Commercial Wind Turbine Maintenance",
    "group": "Commercial Wind Turbine Maintenance",
    "keywords": [
      "yaw drive motor",
      "wind turbine gearbox oil",
      "anemometer ultrasonic replacement",
      "blade inspection drone",
      "nacelle hoist"
    ]
  },
  {
    "id": 733,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Wind Turbine Maintenance",
    "keywords": [
      "yaw drive motor",
      "wind turbine gearbox oil",
      "anemometer ultrasonic replacement",
      "blade inspection drone",
      "nacelle hoist"
    ]
  },
  {
    "id": 734,
    "originalId": 462,
    "name": "Specialized Prosthetic Eye Ocularistry",
    "group": "Specialized Prosthetic Eye Ocularistry",
    "keywords": [
      "pmma acrylic block",
      "sclera painting pigment",
      "iris button",
      "alginate orbital mold",
      "ocular polishing compound"
    ]
  },
  {
    "id": 735,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Prosthetic Eye Ocularistry",
    "keywords": [
      "pmma acrylic block",
      "sclera painting pigment",
      "iris button",
      "alginate orbital mold",
      "ocular polishing compound"
    ]
  },
  {
    "id": 736,
    "originalId": 463,
    "name": "Professional Unicycle & Juggling Performance",
    "group": "Professional Unicycle & Juggling Performance",
    "keywords": [
      "giraffe unicycle chain",
      "fire juggling torch kevlar",
      "juggling ring bulk",
      "rola bola board",
      "cyr wheel pvc coating"
    ]
  },
  {
    "id": 737,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Unicycle & Juggling Performance",
    "keywords": [
      "giraffe unicycle chain",
      "fire juggling torch kevlar",
      "juggling ring bulk",
      "rola bola board",
      "cyr wheel pvc coating"
    ]
  },
  {
    "id": 738,
    "originalId": 464,
    "name": "Commercial Coffee Roasting & Profiling",
    "group": "Commercial Coffee Roasting & Profiling",
    "keywords": [
      "probat roaster parts",
      "green coffee bean bulk",
      "roast profiling software cropster",
      "chaff collector",
      "cooling tray agitator"
    ]
  },
  {
    "id": 739,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Coffee Roasting & Profiling",
    "keywords": [
      "probat roaster parts",
      "green coffee bean bulk",
      "roast profiling software cropster",
      "chaff collector",
      "cooling tray agitator"
    ]
  },
  {
    "id": 740,
    "originalId": 465,
    "name": "High-End Custom Billiard Cue Making",
    "group": "High-End Custom Billiard Cue Making",
    "keywords": [
      "cue lathe",
      "birdseye maple blank",
      "irish linen wrap",
      "ferrule tenon cutter",
      "cue tip press"
    ]
  },
  {
    "id": 741,
    "originalId": null,
    "name": "Keywords",
    "group": "High-End Custom Billiard Cue Making",
    "keywords": [
      "cue lathe",
      "birdseye maple blank",
      "irish linen wrap",
      "ferrule tenon cutter",
      "cue tip press"
    ]
  },
  {
    "id": 742,
    "originalId": 466,
    "name": "Professional Drone Light Show Swarms",
    "group": "Professional Drone Light Show Swarms",
    "keywords": [
      "swarm drone fleet",
      "rtk gps base station",
      "drone show animation software",
      "lipo battery charging hub",
      "faa waiver application"
    ]
  },
  {
    "id": 743,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Drone Light Show Swarms",
    "keywords": [
      "swarm drone fleet",
      "rtk gps base station",
      "drone show animation software",
      "lipo battery charging hub",
      "faa waiver application"
    ]
  },
  {
    "id": 744,
    "originalId": 467,
    "name": "Specialized Veterinary Acupuncture",
    "group": "Specialized Veterinary Acupuncture",
    "keywords": [
      "veterinary acupuncture needle",
      "electroacupuncture unit",
      "moxa roll vet",
      "laser therapy class iv",
      "equine meridian chart"
    ]
  },
  {
    "id": 745,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Veterinary Acupuncture",
    "keywords": [
      "veterinary acupuncture needle",
      "electroacupuncture unit",
      "moxa roll vet",
      "laser therapy class iv",
      "equine meridian chart"
    ]
  },
  {
    "id": 746,
    "originalId": 468,
    "name": "Commercial Archery Range & 3D Targets",
    "group": "Commercial Archery Range & 3D Targets",
    "keywords": [
      "rinehart 3d target",
      "backstop netting",
      "bow press heavy duty",
      "archery chronograph",
      "target face bulk"
    ]
  },
  {
    "id": 747,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Archery Range & 3D Targets",
    "keywords": [
      "rinehart 3d target",
      "backstop netting",
      "bow press heavy duty",
      "archery chronograph",
      "target face bulk"
    ]
  },
  {
    "id": 748,
    "originalId": 469,
    "name": "High-Security Safecracking & Manipulation",
    "group": "High-Security Safecracking & Manipulation",
    "keywords": [
      "safe dial diagnostic tool",
      "borescope fiber optic",
      "safe drilling rig",
      "carbide drill bit masonry",
      "manipulation amplifier"
    ]
  },
  {
    "id": 749,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Security Safecracking & Manipulation",
    "keywords": [
      "safe dial diagnostic tool",
      "borescope fiber optic",
      "safe drilling rig",
      "carbide drill bit masonry",
      "manipulation amplifier"
    ]
  },
  {
    "id": 750,
    "originalId": 470,
    "name": "Professional Stained Glass & Lead Came",
    "group": "Professional Stained Glass & Lead Came",
    "keywords": [
      "lead came spool",
      "copper foil tape",
      "stained glass soldering iron",
      "glass grinder bit",
      "patina chemical"
    ]
  },
  {
    "id": 751,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Stained Glass & Lead Came",
    "keywords": [
      "lead came spool",
      "copper foil tape",
      "stained glass soldering iron",
      "glass grinder bit",
      "patina chemical"
    ]
  },
  {
    "id": 752,
    "originalId": 471,
    "name": "Commercial Ski Lift & Gondola Ops",
    "group": "Commercial Ski Lift & Gondola Ops",
    "keywords": [
      "bullwheel liner",
      "chairlift grip spring",
      "detachable grip tester",
      "haul rope splicing",
      "gondola door actuator"
    ]
  },
  {
    "id": 753,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Ski Lift & Gondola Ops",
    "keywords": [
      "bullwheel liner",
      "chairlift grip spring",
      "detachable grip tester",
      "haul rope splicing",
      "gondola door actuator"
    ]
  },
  {
    "id": 754,
    "originalId": 472,
    "name": "Specialized Insect Farming & Entomophagy",
    "group": "Specialized Insect Farming & Entomophagy",
    "keywords": [
      "mealworm breeding tray",
      "cricket water dispenser",
      "frass sifter",
      "insect dehydrator commercial",
      "edible insect packaging"
    ]
  },
  {
    "id": 755,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Insect Farming & Entomophagy",
    "keywords": [
      "mealworm breeding tray",
      "cricket water dispenser",
      "frass sifter",
      "insect dehydrator commercial",
      "edible insect packaging"
    ]
  },
  {
    "id": 756,
    "originalId": 473,
    "name": "Professional Balloon Twisting & Decor",
    "group": "Professional Balloon Twisting & Decor",
    "keywords": [
      "qualatex 260q bulk",
      "dual nozzle balloon inflator",
      "balloon arch frame",
      "hi-float treatment",
      "foil balloon heat sealer"
    ]
  },
  {
    "id": 757,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Balloon Twisting & Decor",
    "keywords": [
      "qualatex 260q bulk",
      "dual nozzle balloon inflator",
      "balloon arch frame",
      "hi-float treatment",
      "foil balloon heat sealer"
    ]
  },
  {
    "id": 758,
    "originalId": 474,
    "name": "Commercial Surfboard Shaping & Glassing",
    "group": "Commercial Surfboard Shaping & Glassing",
    "keywords": [
      "polyurethane foam blank",
      "surfboard shaping planer",
      "fiberglass cloth roll",
      "sanding resin uv cure",
      "fin box router template"
    ]
  },
  {
    "id": 759,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Surfboard Shaping & Glassing",
    "keywords": [
      "polyurethane foam blank",
      "surfboard shaping planer",
      "fiberglass cloth roll",
      "sanding resin uv cure",
      "fin box router template"
    ]
  },
  {
    "id": 760,
    "originalId": 475,
    "name": "Specialized Holography & Laser Imaging",
    "group": "Specialized Holography & Laser Imaging",
    "keywords": [
      "holographic plates silver halide",
      "spatial filter pinhole",
      "optical breadboard table",
      "beam splitter cube",
      "laser diode coherent"
    ]
  },
  {
    "id": 761,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Holography & Laser Imaging",
    "keywords": [
      "holographic plates silver halide",
      "spatial filter pinhole",
      "optical breadboard table",
      "beam splitter cube",
      "laser diode coherent"
    ]
  },
  {
    "id": 762,
    "originalId": 476,
    "name": "Professional Dog Agility Training Ops",
    "group": "Professional Dog Agility Training Ops",
    "keywords": [
      "dog agility weave poles",
      "contact zone paint",
      "a-frame agility obstacle",
      "dog tunnel sandbags",
      "timing gate electronic"
    ]
  },
  {
    "id": 763,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Dog Agility Training Ops",
    "keywords": [
      "dog agility weave poles",
      "contact zone paint",
      "a-frame agility obstacle",
      "dog tunnel sandbags",
      "timing gate electronic"
    ]
  },
  {
    "id": 764,
    "originalId": 477,
    "name": "Commercial Snail Farming (Heliciculture)",
    "group": "Commercial Snail Farming (Heliciculture)",
    "keywords": [
      "snail breeding pen",
      "calcium carbonate snail feed",
      "hibernation chiller",
      "slime extraction machine",
      "escargot purge net"
    ]
  },
  {
    "id": 765,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Snail Farming (Heliciculture)",
    "keywords": [
      "snail breeding pen",
      "calcium carbonate snail feed",
      "hibernation chiller",
      "slime extraction machine",
      "escargot purge net"
    ]
  },
  {
    "id": 766,
    "originalId": 478,
    "name": "Specialized Kite Aerial Photography (KAP)",
    "group": "Specialized Kite Aerial Photography (KAP)",
    "keywords": [
      "kap rig picavet",
      "rokkaku kite",
      "auto-kaper intervalometer",
      "dacron kite line spool",
      "remote camera trigger"
    ]
  },
  {
    "id": 767,
    "originalId": null,
    "name": "Keywords",
    "group": "Specialized Kite Aerial Photography (KAP)",
    "keywords": [
      "kap rig picavet",
      "rokkaku kite",
      "auto-kaper intervalometer",
      "dacron kite line spool",
      "remote camera trigger"
    ]
  },
  {
    "id": 768,
    "originalId": 479,
    "name": "Professional Competitive Sand Sculpting",
    "group": "Professional Competitive Sand Sculpting",
    "keywords": [
      "sand compacting tamper",
      "masonry trowel fine",
      "paver base sand bulk",
      "biodegradable glue spray",
      "formwork plywood"
    ]
  },
  {
    "id": 769,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Competitive Sand Sculpting",
    "keywords": [
      "sand compacting tamper",
      "masonry trowel fine",
      "paver base sand bulk",
      "biodegradable glue spray",
      "formwork plywood"
    ]
  },
  {
    "id": 770,
    "originalId": 480,
    "name": "Commercial Hydroelectric Micro-Turbines",
    "group": "Commercial Hydroelectric Micro-Turbines",
    "keywords": [
      "pelton wheel runner",
      "micro hydro generator",
      "penstock pipe pvc",
      "load diversion controller",
      "water intake screen"
    ]
  },
  {
    "id": 771,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Hydroelectric Micro-Turbines",
    "keywords": [
      "pelton wheel runner",
      "micro hydro generator",
      "penstock pipe pvc",
      "load diversion controller",
      "water intake screen"
    ]
  },
  {
    "id": 772,
    "originalId": 481,
    "name": "Deep Shaft Mining & Excavation",
    "group": "Deep Shaft Mining & Excavation",
    "keywords": [
      "continuous miner",
      "rock bolt",
      "skip hoist",
      "mine ventilation fan",
      "subterranean driller",
      "blasting cap"
    ]
  },
  {
    "id": 773,
    "originalId": null,
    "name": "Keywords",
    "group": "Deep Shaft Mining & Excavation",
    "keywords": [
      "continuous miner",
      "rock bolt",
      "skip hoist",
      "mine ventilation fan",
      "subterranean driller",
      "blasting cap"
    ]
  },
  {
    "id": 774,
    "originalId": 482,
    "name": "Oil Sands Extraction & Refining",
    "group": "Oil Sands Extraction & Refining",
    "keywords": [
      "bitumen frother",
      "tailing pond pump",
      "steam assisted gravity drainage",
      "heavy crude upgrader",
      "slurry pipe"
    ]
  },
  {
    "id": 775,
    "originalId": null,
    "name": "Keywords",
    "group": "Oil Sands Extraction & Refining",
    "keywords": [
      "bitumen frother",
      "tailing pond pump",
      "steam assisted gravity drainage",
      "heavy crude upgrader",
      "slurry pipe"
    ]
  },
  {
    "id": 776,
    "originalId": 483,
    "name": "Geothermal Power Infrastructure",
    "group": "Geothermal Power Infrastructure",
    "keywords": [
      "binary cycle turbine",
      "geothermal brine pump",
      "injection well casing",
      "dry steam generator",
      "flash steam plant"
    ]
  },
  {
    "id": 777,
    "originalId": null,
    "name": "Keywords",
    "group": "Geothermal Power Infrastructure",
    "keywords": [
      "binary cycle turbine",
      "geothermal brine pump",
      "injection well casing",
      "dry steam generator",
      "flash steam plant"
    ]
  },
  {
    "id": 778,
    "originalId": 484,
    "name": "Commercial Desalination & Reverse Osmosis",
    "group": "Commercial Desalination & Reverse Osmosis",
    "keywords": [
      "ro membrane bulk",
      "seawater intake screen",
      "brine discharge valve",
      "high pressure booster pump",
      "remineralization filter"
    ]
  },
  {
    "id": 779,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Desalination & Reverse Osmosis",
    "keywords": [
      "ro membrane bulk",
      "seawater intake screen",
      "brine discharge valve",
      "high pressure booster pump",
      "remineralization filter"
    ]
  },
  {
    "id": 780,
    "originalId": 485,
    "name": "Advanced Photonics & Fiber Optics",
    "group": "Advanced Photonics & Fiber Optics",
    "keywords": [
      "fusion splicer",
      "optical time domain reflectometer",
      "erbium doped fiber amplifier",
      "wdm multiplexer",
      "laser diode"
    ]
  },
  {
    "id": 781,
    "originalId": null,
    "name": "Keywords",
    "group": "Advanced Photonics & Fiber Optics",
    "keywords": [
      "fusion splicer",
      "optical time domain reflectometer",
      "erbium doped fiber amplifier",
      "wdm multiplexer",
      "laser diode"
    ]
  },
  {
    "id": 782,
    "originalId": 486,
    "name": "Quantum Cryptography & QKD",
    "group": "Quantum Cryptography & QKD",
    "keywords": [
      "quantum key distribution",
      "entangled photon source",
      "single photon detector",
      "post-quantum algorithm",
      "optical attenuator"
    ]
  },
  {
    "id": 783,
    "originalId": null,
    "name": "Keywords",
    "group": "Quantum Cryptography & QKD",
    "keywords": [
      "quantum key distribution",
      "entangled photon source",
      "single photon detector",
      "post-quantum algorithm",
      "optical attenuator"
    ]
  },
  {
    "id": 784,
    "originalId": 487,
    "name": "Synchrotron & Particle Accelerator Parts",
    "group": "Synchrotron & Particle Accelerator Parts",
    "keywords": [
      "klystron tube",
      "bending magnet",
      "particle beam collimator",
      "rf cavity",
      "ultra high vacuum pump"
    ]
  },
  {
    "id": 785,
    "originalId": null,
    "name": "Keywords",
    "group": "Synchrotron & Particle Accelerator Parts",
    "keywords": [
      "klystron tube",
      "bending magnet",
      "particle beam collimator",
      "rf cavity",
      "ultra high vacuum pump"
    ]
  },
  {
    "id": 786,
    "originalId": 488,
    "name": "Forensic Entomology & Taphonomy",
    "group": "Forensic Entomology & Taphonomy",
    "keywords": [
      "blowfly specimen vial",
      "body farm donation fee",
      "forensic soil sample",
      "taphonomic research kit",
      "pupa casing"
    ]
  },
  {
    "id": 787,
    "originalId": null,
    "name": "Keywords",
    "group": "Forensic Entomology & Taphonomy",
    "keywords": [
      "blowfly specimen vial",
      "body farm donation fee",
      "forensic soil sample",
      "taphonomic research kit",
      "pupa casing"
    ]
  },
  {
    "id": 788,
    "originalId": 489,
    "name": "Ballistics Testing & Forensic Firearms",
    "group": "Ballistics Testing & Forensic Firearms",
    "keywords": [
      "ballistic gelatin block",
      "bullet recovery water tank",
      "chronometer chronograph",
      "rifling comparison microscope",
      "gunshot residue kit"
    ]
  },
  {
    "id": 789,
    "originalId": null,
    "name": "Keywords",
    "group": "Ballistics Testing & Forensic Firearms",
    "keywords": [
      "ballistic gelatin block",
      "bullet recovery water tank",
      "chronometer chronograph",
      "rifling comparison microscope",
      "gunshot residue kit"
    ]
  },
  {
    "id": 790,
    "originalId": 490,
    "name": "Blood Spatter & Crime Scene Analysis",
    "group": "Blood Spatter & Crime Scene Analysis",
    "keywords": [
      "luminol reagent spray",
      "forensic light source",
      "bloodstain pattern string",
      "swab drying rack",
      "crime scene tape bulk"
    ]
  },
  {
    "id": 791,
    "originalId": null,
    "name": "Keywords",
    "group": "Blood Spatter & Crime Scene Analysis",
    "keywords": [
      "luminol reagent spray",
      "forensic light source",
      "bloodstain pattern string",
      "swab drying rack",
      "crime scene tape bulk"
    ]
  },
  {
    "id": 792,
    "originalId": 491,
    "name": "Commercial Submarine Telecommunications",
    "group": "Commercial Submarine Telecommunications",
    "keywords": [
      "submarine cable repeater",
      "cable laying plow",
      "armored fiber optic cable",
      "shore landing station",
      "splice branching unit"
    ]
  },
  {
    "id": 793,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Submarine Telecommunications",
    "keywords": [
      "submarine cable repeater",
      "cable laying plow",
      "armored fiber optic cable",
      "shore landing station",
      "splice branching unit"
    ]
  },
  {
    "id": 794,
    "originalId": 492,
    "name": "High-Altitude Pseudo-Satellites (HAPS)",
    "group": "High-Altitude Pseudo-Satellites (HAPS)",
    "keywords": [
      "solar powered drone wing",
      "stratospheric airship envelope",
      "haps ground station",
      "ultra light payload",
      "long endurance battery"
    ]
  },
  {
    "id": 795,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Altitude Pseudo-Satellites (HAPS)",
    "keywords": [
      "solar powered drone wing",
      "stratospheric airship envelope",
      "haps ground station",
      "ultra light payload",
      "long endurance battery"
    ]
  },
  {
    "id": 796,
    "originalId": 493,
    "name": "Asteroid Mining & Space Resource ISRU",
    "group": "Asteroid Mining & Space Resource ISRU",
    "keywords": [
      "regolith simulant",
      "isru reactor",
      "zero-g separator",
      "asteroid spectroscopy data",
      "lunar ice extractor"
    ]
  },
  {
    "id": 797,
    "originalId": null,
    "name": "Keywords",
    "group": "Asteroid Mining & Space Resource ISRU",
    "keywords": [
      "regolith simulant",
      "isru reactor",
      "zero-g separator",
      "asteroid spectroscopy data",
      "lunar ice extractor"
    ]
  },
  {
    "id": 798,
    "originalId": 494,
    "name": "Advanced Exoskeleton & Human Augmentation",
    "group": "Advanced Exoskeleton & Human Augmentation",
    "keywords": [
      "powered exoskeleton suit",
      "myoelectric sensor",
      "hydraulic joint actuator",
      "load bearing frame",
      "neuro-muscular interface"
    ]
  },
  {
    "id": 799,
    "originalId": null,
    "name": "Keywords",
    "group": "Advanced Exoskeleton & Human Augmentation",
    "keywords": [
      "powered exoskeleton suit",
      "myoelectric sensor",
      "hydraulic joint actuator",
      "load bearing frame",
      "neuro-muscular interface"
    ]
  },
  {
    "id": 800,
    "originalId": 495,
    "name": "Commercial Vertical Farming & Aeroponics",
    "group": "Commercial Vertical Farming & Aeroponics",
    "keywords": [
      "aeroponic misting nozzle",
      "vertical grow tower",
      "led spectrum controller",
      "automated nutrient doser",
      "plant factory climate"
    ]
  },
  {
    "id": 801,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Vertical Farming & Aeroponics",
    "keywords": [
      "aeroponic misting nozzle",
      "vertical grow tower",
      "led spectrum controller",
      "automated nutrient doser",
      "plant factory climate"
    ]
  },
  {
    "id": 802,
    "originalId": 496,
    "name": "Boutique Caviar & Sturgeon Aquaculture",
    "group": "Boutique Caviar & Sturgeon Aquaculture",
    "keywords": [
      "beluga sturgeon fingerling",
      "caviar curing salt",
      "ultrasonic sexing scanner",
      "mother of pearl tin",
      "sturgeon feed bulk"
    ]
  },
  {
    "id": 803,
    "originalId": null,
    "name": "Keywords",
    "group": "Boutique Caviar & Sturgeon Aquaculture",
    "keywords": [
      "beluga sturgeon fingerling",
      "caviar curing salt",
      "ultrasonic sexing scanner",
      "mother of pearl tin",
      "sturgeon feed bulk"
    ]
  },
  {
    "id": 804,
    "originalId": 497,
    "name": "Commercial Saffron & Spice Harvesting",
    "group": "Commercial Saffron & Spice Harvesting",
    "keywords": [
      "crocus sativus corm",
      "saffron thread desiccator",
      "spice grading sieve",
      "stigma extraction tweezer",
      "bulk spice grinder"
    ]
  },
  {
    "id": 805,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Saffron & Spice Harvesting",
    "keywords": [
      "crocus sativus corm",
      "saffron thread desiccator",
      "spice grading sieve",
      "stigma extraction tweezer",
      "bulk spice grinder"
    ]
  },
  {
    "id": 806,
    "originalId": 498,
    "name": "Vanilla Orchid Pollination & Curing",
    "group": "Vanilla Orchid Pollination & Curing",
    "keywords": [
      "vanilla vine cutting",
      "hand pollination toothpick",
      "vanilla bean sweating box",
      "bourbon curing rack",
      "vanillin extract"
    ]
  },
  {
    "id": 807,
    "originalId": null,
    "name": "Keywords",
    "group": "Vanilla Orchid Pollination & Curing",
    "keywords": [
      "vanilla vine cutting",
      "hand pollination toothpick",
      "vanilla bean sweating box",
      "bourbon curing rack",
      "vanillin extract"
    ]
  },
  {
    "id": 808,
    "originalId": 499,
    "name": "Commercial Maple Sugaring & Evaporation",
    "group": "Commercial Maple Sugaring & Evaporation",
    "keywords": [
      "sugarbush tubing network",
      "reverse osmosis sap concentrator",
      "flue pan evaporator",
      "maple syrup hydrometer",
      "sap filter press"
    ]
  },
  {
    "id": 809,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Maple Sugaring & Evaporation",
    "keywords": [
      "sugarbush tubing network",
      "reverse osmosis sap concentrator",
      "flue pan evaporator",
      "maple syrup hydrometer",
      "sap filter press"
    ]
  },
  {
    "id": 810,
    "originalId": 500,
    "name": "Artisanal Sea Salt & Fleur de Sel Harvesting",
    "group": "Artisanal Sea Salt & Fleur de Sel Harvesting",
    "keywords": [
      "salt pan rake",
      "evaporation pond liner",
      "fleur de sel skimmer",
      "magnesium chloride brine",
      "salt curing rack"
    ]
  },
  {
    "id": 811,
    "originalId": null,
    "name": "Keywords",
    "group": "Artisanal Sea Salt & Fleur de Sel Harvesting",
    "keywords": [
      "salt pan rake",
      "evaporation pond liner",
      "fleur de sel skimmer",
      "magnesium chloride brine",
      "salt curing rack"
    ]
  },
  {
    "id": 812,
    "originalId": 501,
    "name": "Bespoke Luthier & Orchestral String Making",
    "group": "Bespoke Luthier & Orchestral String Making",
    "keywords": [
      "sheep gut string",
      "violin bow horsehair",
      "rosin cake bulk",
      "purfling cutter",
      "soundpost wood"
    ]
  },
  {
    "id": 813,
    "originalId": null,
    "name": "Keywords",
    "group": "Bespoke Luthier & Orchestral String Making",
    "keywords": [
      "sheep gut string",
      "violin bow horsehair",
      "rosin cake bulk",
      "purfling cutter",
      "soundpost wood"
    ]
  },
  {
    "id": 814,
    "originalId": 502,
    "name": "Master Horology & Tourbillon Manufacturing",
    "group": "Master Horology & Tourbillon Manufacturing",
    "keywords": [
      "tourbillon cage part",
      "hairspring alloy",
      "ruby jewel bearing",
      "escapement file",
      "horological lathe"
    ]
  },
  {
    "id": 815,
    "originalId": null,
    "name": "Keywords",
    "group": "Master Horology & Tourbillon Manufacturing",
    "keywords": [
      "tourbillon cage part",
      "hairspring alloy",
      "ruby jewel bearing",
      "escapement file",
      "horological lathe"
    ]
  },
  {
    "id": 816,
    "originalId": 503,
    "name": "Handcrafted Fountain Pen & Nib Grinding",
    "group": "Handcrafted Fountain Pen & Nib Grinding",
    "keywords": [
      "gold nib blank",
      "ebonite feed rod",
      "pen turning mandrel",
      "celluloid pen tube",
      "nib smoothing micromesh"
    ]
  },
  {
    "id": 817,
    "originalId": null,
    "name": "Keywords",
    "group": "Handcrafted Fountain Pen & Nib Grinding",
    "keywords": [
      "gold nib blank",
      "ebonite feed rod",
      "pen turning mandrel",
      "celluloid pen tube",
      "nib smoothing micromesh"
    ]
  },
  {
    "id": 818,
    "originalId": 504,
    "name": "Traditional Samurai Sword (Katana) Forging",
    "group": "Traditional Samurai Sword (Katana) Forging",
    "keywords": [
      "tamahagane steel",
      "clay tempering mixture",
      "water stone sharpener",
      "tsuka handle wrap",
      "tsuba hand guard"
    ]
  },
  {
    "id": 819,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Samurai Sword (Katana) Forging",
    "keywords": [
      "tamahagane steel",
      "clay tempering mixture",
      "water stone sharpener",
      "tsuka handle wrap",
      "tsuba hand guard"
    ]
  },
  {
    "id": 820,
    "originalId": 505,
    "name": "Bespoke Shoemaking & Cordwaining Tools",
    "group": "Bespoke Shoemaking & Cordwaining Tools",
    "keywords": [
      "shoemakers last",
      "welt stitching awl",
      "oak bark tanned leather",
      "shoemaking rasp",
      "cobblers hammer"
    ]
  },
  {
    "id": 821,
    "originalId": null,
    "name": "Keywords",
    "group": "Bespoke Shoemaking & Cordwaining Tools",
    "keywords": [
      "shoemakers last",
      "welt stitching awl",
      "oak bark tanned leather",
      "shoemaking rasp",
      "cobblers hammer"
    ]
  },
  {
    "id": 822,
    "originalId": 506,
    "name": "High-End Tailoring & Savile Row Bespoke",
    "group": "High-End Tailoring & Savile Row Bespoke",
    "keywords": [
      "vicuna wool fabric",
      "horsehair canvas interlining",
      "bespoke pattern paper",
      "tailors chalk bulk",
      "drafting french curve"
    ]
  },
  {
    "id": 823,
    "originalId": null,
    "name": "Keywords",
    "group": "High-End Tailoring & Savile Row Bespoke",
    "keywords": [
      "vicuna wool fabric",
      "horsehair canvas interlining",
      "bespoke pattern paper",
      "tailors chalk bulk",
      "drafting french curve"
    ]
  },
  {
    "id": 824,
    "originalId": 507,
    "name": "Millinery & Couture Hat Blocking",
    "group": "Millinery & Couture Hat Blocking",
    "keywords": [
      "wooden hat block",
      "sinamay straw roll",
      "petersham ribbon bulk",
      "hat sizing conformateur",
      "millinery wire"
    ]
  },
  {
    "id": 825,
    "originalId": null,
    "name": "Keywords",
    "group": "Millinery & Couture Hat Blocking",
    "keywords": [
      "wooden hat block",
      "sinamay straw roll",
      "petersham ribbon bulk",
      "hat sizing conformateur",
      "millinery wire"
    ]
  },
  {
    "id": 826,
    "originalId": 508,
    "name": "Haute Horlogerie Enameling & Guilloché",
    "group": "Haute Horlogerie Enameling & Guilloché",
    "keywords": [
      "grand feu enamel powder",
      "rose engine lathe",
      "guilloche graver",
      "kiln firing stand",
      "champleve etching"
    ]
  },
  {
    "id": 827,
    "originalId": null,
    "name": "Keywords",
    "group": "Haute Horlogerie Enameling & Guilloché",
    "keywords": [
      "grand feu enamel powder",
      "rose engine lathe",
      "guilloche graver",
      "kiln firing stand",
      "champleve etching"
    ]
  },
  {
    "id": 828,
    "originalId": 509,
    "name": "Traditional Bookbinding & Gold Tooling",
    "group": "Traditional Bookbinding & Gold Tooling",
    "keywords": [
      "gold leaf booklet",
      "bookbinding press",
      "archival sewing frame",
      "marbled endpaper",
      "brass finishing tool"
    ]
  },
  {
    "id": 829,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Bookbinding & Gold Tooling",
    "keywords": [
      "gold leaf booklet",
      "bookbinding press",
      "archival sewing frame",
      "marbled endpaper",
      "brass finishing tool"
    ]
  },
  {
    "id": 830,
    "originalId": 510,
    "name": "Conservation Framing & Archival Matting",
    "group": "Conservation Framing & Archival Matting",
    "keywords": [
      "museum glass uv",
      "acid free mat board",
      "archival mounting tape",
      "frame joining v-nail",
      "conservation backing"
    ]
  },
  {
    "id": 831,
    "originalId": null,
    "name": "Keywords",
    "group": "Conservation Framing & Archival Matting",
    "keywords": [
      "museum glass uv",
      "acid free mat board",
      "archival mounting tape",
      "frame joining v-nail",
      "conservation backing"
    ]
  },
  {
    "id": 832,
    "originalId": 511,
    "name": "Commercial Art Restoration & Cleaning",
    "group": "Commercial Art Restoration & Cleaning",
    "keywords": [
      "varnish removal solvent",
      "relining canvas",
      "restoration spatula",
      "uv curing resin",
      "paint cross section microscope"
    ]
  },
  {
    "id": 833,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Art Restoration & Cleaning",
    "keywords": [
      "varnish removal solvent",
      "relining canvas",
      "restoration spatula",
      "uv curing resin",
      "paint cross section microscope"
    ]
  },
  {
    "id": 834,
    "originalId": 512,
    "name": "Historical Architecture & Stone Masonry",
    "group": "Historical Architecture & Stone Masonry",
    "keywords": [
      "gargoyle carving stone",
      "limestone ashlar",
      "masonry chisel set",
      "pointing mortar",
      "stone lifting lewis"
    ]
  },
  {
    "id": 835,
    "originalId": null,
    "name": "Keywords",
    "group": "Historical Architecture & Stone Masonry",
    "keywords": [
      "gargoyle carving stone",
      "limestone ashlar",
      "masonry chisel set",
      "pointing mortar",
      "stone lifting lewis"
    ]
  },
  {
    "id": 836,
    "originalId": 513,
    "name": "Traditional Thatching & Roof Reeding",
    "group": "Traditional Thatching & Roof Reeding",
    "keywords": [
      "water reed bundle",
      "thatching spar",
      "legget tool",
      "eaves knife",
      "hazel sway"
    ]
  },
  {
    "id": 837,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Thatching & Roof Reeding",
    "keywords": [
      "water reed bundle",
      "thatching spar",
      "legget tool",
      "eaves knife",
      "hazel sway"
    ]
  },
  {
    "id": 838,
    "originalId": 514,
    "name": "Cob & Rammed Earth Construction",
    "group": "Cob & Rammed Earth Construction",
    "keywords": [
      "rammed earth formwork",
      "pneumatic tamper",
      "raw clay bulk",
      "straw binder",
      "cob mixing tarp"
    ]
  },
  {
    "id": 839,
    "originalId": null,
    "name": "Keywords",
    "group": "Cob & Rammed Earth Construction",
    "keywords": [
      "rammed earth formwork",
      "pneumatic tamper",
      "raw clay bulk",
      "straw binder",
      "cob mixing tarp"
    ]
  },
  {
    "id": 840,
    "originalId": 515,
    "name": "Bamboo Architecture & Structural Joining",
    "group": "Bamboo Architecture & Structural Joining",
    "keywords": [
      "structural bamboo pole",
      "bamboo splitting knife",
      "lashing twine",
      "borate treatment tank",
      "bamboo node drill"
    ]
  },
  {
    "id": 841,
    "originalId": null,
    "name": "Keywords",
    "group": "Bamboo Architecture & Structural Joining",
    "keywords": [
      "structural bamboo pole",
      "bamboo splitting knife",
      "lashing twine",
      "borate treatment tank",
      "bamboo node drill"
    ]
  },
  {
    "id": 842,
    "originalId": 516,
    "name": "Commercial Ice Harvesting & Sculpting",
    "group": "Commercial Ice Harvesting & Sculpting",
    "keywords": [
      "ice harvesting saw",
      "clear ice block maker",
      "ice carving chainsaw bit",
      "cnc ice router",
      "thermal display tray"
    ]
  },
  {
    "id": 843,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Ice Harvesting & Sculpting",
    "keywords": [
      "ice harvesting saw",
      "clear ice block maker",
      "ice carving chainsaw bit",
      "cnc ice router",
      "thermal display tray"
    ]
  },
  {
    "id": 844,
    "originalId": 517,
    "name": "Avalanche Forecasting & Snow Science",
    "group": "Avalanche Forecasting & Snow Science",
    "keywords": [
      "snow density gauge",
      "avalanche probe pole",
      "crystal screen magnifier",
      "rutschblock cord",
      "snowpack thermometer"
    ]
  },
  {
    "id": 845,
    "originalId": null,
    "name": "Keywords",
    "group": "Avalanche Forecasting & Snow Science",
    "keywords": [
      "snow density gauge",
      "avalanche probe pole",
      "crystal screen magnifier",
      "rutschblock cord",
      "snowpack thermometer"
    ]
  },
  {
    "id": 846,
    "originalId": 518,
    "name": "Glaciology & Ice Core Drilling",
    "group": "Glaciology & Ice Core Drilling",
    "keywords": [
      "ice core drill bit",
      "glacier crampon",
      "crevasse rescue pulley",
      "firn sample tube",
      "ice radar antenna"
    ]
  },
  {
    "id": 847,
    "originalId": null,
    "name": "Keywords",
    "group": "Glaciology & Ice Core Drilling",
    "keywords": [
      "ice core drill bit",
      "glacier crampon",
      "crevasse rescue pulley",
      "firn sample tube",
      "ice radar antenna"
    ]
  },
  {
    "id": 848,
    "originalId": 519,
    "name": "Volcanology & Magma Sampling",
    "group": "Volcanology & Magma Sampling",
    "keywords": [
      "heat reflective proximity suit",
      "lava sampling ladle",
      "volcanic gas dosimeter",
      "tiltmeter sensor",
      "seismograph station"
    ]
  },
  {
    "id": 849,
    "originalId": null,
    "name": "Keywords",
    "group": "Volcanology & Magma Sampling",
    "keywords": [
      "heat reflective proximity suit",
      "lava sampling ladle",
      "volcanic gas dosimeter",
      "tiltmeter sensor",
      "seismograph station"
    ]
  },
  {
    "id": 850,
    "originalId": 520,
    "name": "Oceanography & Deep Sea Bathymetry",
    "group": "Oceanography & Deep Sea Bathymetry",
    "keywords": [
      "ctd rosette water sampler",
      "multibeam sonar array",
      "ocean glider auv",
      "plankton tow net",
      "acoustic doppler current profiler"
    ]
  },
  {
    "id": 851,
    "originalId": null,
    "name": "Keywords",
    "group": "Oceanography & Deep Sea Bathymetry",
    "keywords": [
      "ctd rosette water sampler",
      "multibeam sonar array",
      "ocean glider auv",
      "plankton tow net",
      "acoustic doppler current profiler"
    ]
  },
  {
    "id": 852,
    "originalId": 521,
    "name": "Commercial Sponge Diving & Harvesting",
    "group": "Commercial Sponge Diving & Harvesting",
    "keywords": [
      "natural sea sponge",
      "hookah dive compressor",
      "sponge cutting knife",
      "mesh harvest bag",
      "sponge bleaching vat"
    ]
  },
  {
    "id": 853,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Sponge Diving & Harvesting",
    "keywords": [
      "natural sea sponge",
      "hookah dive compressor",
      "sponge cutting knife",
      "mesh harvest bag",
      "sponge bleaching vat"
    ]
  },
  {
    "id": 854,
    "originalId": 522,
    "name": "Pearl Farming & Oyster Seeding",
    "group": "Pearl Farming & Oyster Seeding",
    "keywords": [
      "pearl nucleus bead",
      "oyster grafting scalpel",
      "pearl harvesting net",
      "spat collector rope",
      "pearl grading sieve"
    ]
  },
  {
    "id": 855,
    "originalId": null,
    "name": "Keywords",
    "group": "Pearl Farming & Oyster Seeding",
    "keywords": [
      "pearl nucleus bead",
      "oyster grafting scalpel",
      "pearl harvesting net",
      "spat collector rope",
      "pearl grading sieve"
    ]
  },
  {
    "id": 856,
    "originalId": 523,
    "name": "Commercial Kelp & Seaweed Aquaculture",
    "group": "Commercial Kelp & Seaweed Aquaculture",
    "keywords": [
      "kelp seeded line",
      "marine grow out buoy",
      "seaweed drying rack",
      "agar extraction vat",
      "marine anchor screw"
    ]
  },
  {
    "id": 857,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Kelp & Seaweed Aquaculture",
    "keywords": [
      "kelp seeded line",
      "marine grow out buoy",
      "seaweed drying rack",
      "agar extraction vat",
      "marine anchor screw"
    ]
  },
  {
    "id": 858,
    "originalId": 524,
    "name": "Hydrothermal Vent Biology & Research",
    "group": "Hydrothermal Vent Biology & Research",
    "keywords": [
      "extremophile culture media",
      "deep sea pressure vessel",
      "vent fluid sampler",
      "black smoker sulfide sample",
      "chemosynthesis incubator"
    ]
  },
  {
    "id": 859,
    "originalId": null,
    "name": "Keywords",
    "group": "Hydrothermal Vent Biology & Research",
    "keywords": [
      "extremophile culture media",
      "deep sea pressure vessel",
      "vent fluid sampler",
      "black smoker sulfide sample",
      "chemosynthesis incubator"
    ]
  },
  {
    "id": 860,
    "originalId": 525,
    "name": "Space Weather Forecasting & Heliophysics",
    "group": "Space Weather Forecasting & Heliophysics",
    "keywords": [
      "solar coronagraph data",
      "magnetometer station",
      "ionospheric scintillation receiver",
      "solar flare alert api",
      "sunspot tracker"
    ]
  },
  {
    "id": 861,
    "originalId": null,
    "name": "Keywords",
    "group": "Space Weather Forecasting & Heliophysics",
    "keywords": [
      "solar coronagraph data",
      "magnetometer station",
      "ionospheric scintillation receiver",
      "solar flare alert api",
      "sunspot tracker"
    ]
  },
  {
    "id": 862,
    "originalId": 526,
    "name": "Commercial Meteorite Hunting & Appraisal",
    "group": "Commercial Meteorite Hunting & Appraisal",
    "keywords": [
      "strewn field map",
      "pallasite slice",
      "chondrite classification fee",
      "meteorite etching acid",
      "neodymium magnet bulk"
    ]
  },
  {
    "id": 863,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Meteorite Hunting & Appraisal",
    "keywords": [
      "strewn field map",
      "pallasite slice",
      "chondrite classification fee",
      "meteorite etching acid",
      "neodymium magnet bulk"
    ]
  },
  {
    "id": 864,
    "originalId": 527,
    "name": "Amateur Radio Astronomy & SETI",
    "group": "Amateur Radio Astronomy & SETI",
    "keywords": [
      "hydrogen line receiver",
      "parabolic dish antenna",
      "low noise amplifier sdr",
      "pulsar timing software",
      "radio telescope feed horn"
    ]
  },
  {
    "id": 865,
    "originalId": null,
    "name": "Keywords",
    "group": "Amateur Radio Astronomy & SETI",
    "keywords": [
      "hydrogen line receiver",
      "parabolic dish antenna",
      "low noise amplifier sdr",
      "pulsar timing software",
      "radio telescope feed horn"
    ]
  },
  {
    "id": 866,
    "originalId": 528,
    "name": "High-Power Rocketry & Experimental Propulsion",
    "group": "High-Power Rocketry & Experimental Propulsion",
    "keywords": [
      "ammonium perchlorate composite",
      "graphite nozzle",
      "phenolic airframe tube",
      "dual deployment altimeter",
      "rocket test stand"
    ]
  },
  {
    "id": 867,
    "originalId": null,
    "name": "Keywords",
    "group": "High-Power Rocketry & Experimental Propulsion",
    "keywords": [
      "ammonium perchlorate composite",
      "graphite nozzle",
      "phenolic airframe tube",
      "dual deployment altimeter",
      "rocket test stand"
    ]
  },
  {
    "id": 868,
    "originalId": 529,
    "name": "CubeSat Constellation Operations",
    "group": "CubeSat Constellation Operations",
    "keywords": [
      "cubesat deployer pod",
      "uhf telemetry beacon",
      "sun sensor attitude control",
      "reaction wheel assembly",
      "orbit propagation api"
    ]
  },
  {
    "id": 869,
    "originalId": null,
    "name": "Keywords",
    "group": "CubeSat Constellation Operations",
    "keywords": [
      "cubesat deployer pod",
      "uhf telemetry beacon",
      "sun sensor attitude control",
      "reaction wheel assembly",
      "orbit propagation api"
    ]
  },
  {
    "id": 870,
    "originalId": 530,
    "name": "Commercial Lunar Payload Integration",
    "group": "Commercial Lunar Payload Integration",
    "keywords": [
      "lunar lander payload space",
      "regolith containment vessel",
      "vacuum rated lubricant",
      "radiation hardened fpga",
      "thermal blanket mlm"
    ]
  },
  {
    "id": 871,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Lunar Payload Integration",
    "keywords": [
      "lunar lander payload space",
      "regolith containment vessel",
      "vacuum rated lubricant",
      "radiation hardened fpga",
      "thermal blanket mlm"
    ]
  },
  {
    "id": 872,
    "originalId": 531,
    "name": "Formula SAE & Collegiate Racing Ops",
    "group": "Formula SAE & Collegiate Racing Ops",
    "keywords": [
      "fsae spaceframe tube",
      "restrictor plate",
      "racing slick tire set",
      "pedal box assembly",
      "telemetry data logger"
    ]
  },
  {
    "id": 873,
    "originalId": null,
    "name": "Keywords",
    "group": "Formula SAE & Collegiate Racing Ops",
    "keywords": [
      "fsae spaceframe tube",
      "restrictor plate",
      "racing slick tire set",
      "pedal box assembly",
      "telemetry data logger"
    ]
  },
  {
    "id": 874,
    "originalId": 532,
    "name": "Drag Racing & Top Fuel Mechanics",
    "group": "Drag Racing & Top Fuel Mechanics",
    "keywords": [
      "nitromethane fuel drum",
      "drag slick tire",
      "supercharger blower belt",
      "parachute deployment bag",
      "wheelie bar wheel"
    ]
  },
  {
    "id": 875,
    "originalId": null,
    "name": "Keywords",
    "group": "Drag Racing & Top Fuel Mechanics",
    "keywords": [
      "nitromethane fuel drum",
      "drag slick tire",
      "supercharger blower belt",
      "parachute deployment bag",
      "wheelie bar wheel"
    ]
  },
  {
    "id": 876,
    "originalId": 533,
    "name": "Demolition Derby & Custom Fabrication",
    "group": "Demolition Derby & Custom Fabrication",
    "keywords": [
      "roll cage steel tubing",
      "derby radiator relocation kit",
      "welded differential",
      "solid suspension strut",
      "heavy duty bumper"
    ]
  },
  {
    "id": 877,
    "originalId": null,
    "name": "Keywords",
    "group": "Demolition Derby & Custom Fabrication",
    "keywords": [
      "roll cage steel tubing",
      "derby radiator relocation kit",
      "welded differential",
      "solid suspension strut",
      "heavy duty bumper"
    ]
  },
  {
    "id": 878,
    "originalId": 534,
    "name": "Monster Truck Maintenance & Hydraulics",
    "group": "Monster Truck Maintenance & Hydraulics",
    "keywords": [
      "66-inch terra tire",
      "four wheel steering ram",
      "nitrogen shock absorber",
      "planetary gear hub",
      "blower scoop"
    ]
  },
  {
    "id": 879,
    "originalId": null,
    "name": "Keywords",
    "group": "Monster Truck Maintenance & Hydraulics",
    "keywords": [
      "66-inch terra tire",
      "four wheel steering ram",
      "nitrogen shock absorber",
      "planetary gear hub",
      "blower scoop"
    ]
  },
  {
    "id": 880,
    "originalId": 535,
    "name": "Land Speed Record & Streamliner Engineering",
    "group": "Land Speed Record & Streamliner Engineering",
    "keywords": [
      "salt flat tire",
      "streamliner parachute",
      "land speed aerodynamic fairing",
      "wind tunnel testing fee",
      "thrust ssc part"
    ]
  },
  {
    "id": 881,
    "originalId": null,
    "name": "Keywords",
    "group": "Land Speed Record & Streamliner Engineering",
    "keywords": [
      "salt flat tire",
      "streamliner parachute",
      "land speed aerodynamic fairing",
      "wind tunnel testing fee",
      "thrust ssc part"
    ]
  },
  {
    "id": 882,
    "originalId": 536,
    "name": "Professional Tractor Pulling",
    "group": "Professional Tractor Pulling",
    "keywords": [
      "multi-engine tractor sled",
      "pulling hitch block",
      "methanol injection pump",
      "cut pulling tire",
      "weight transfer sled fee"
    ]
  },
  {
    "id": 883,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Tractor Pulling",
    "keywords": [
      "multi-engine tractor sled",
      "pulling hitch block",
      "methanol injection pump",
      "cut pulling tire",
      "weight transfer sled fee"
    ]
  },
  {
    "id": 884,
    "originalId": 537,
    "name": "Commercial Airboat & Swamp Buggy Ops",
    "group": "Commercial Airboat & Swamp Buggy Ops",
    "keywords": [
      "airboat propeller carbon",
      "hull polymer sheet",
      "swamp buggy tractor tire",
      "rudder stick linkage",
      "marine aviation headset"
    ]
  },
  {
    "id": 885,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Airboat & Swamp Buggy Ops",
    "keywords": [
      "airboat propeller carbon",
      "hull polymer sheet",
      "swamp buggy tractor tire",
      "rudder stick linkage",
      "marine aviation headset"
    ]
  },
  {
    "id": 886,
    "originalId": 538,
    "name": "Hovercraft Racing & Skirt Fabrication",
    "group": "Hovercraft Racing & Skirt Fabrication",
    "keywords": [
      "neoprene coated nylon skirt",
      "hovercraft lift fan",
      "thrust duct aerodynamic",
      "skirt attachment clip",
      "hovercraft racing entry"
    ]
  },
  {
    "id": 887,
    "originalId": null,
    "name": "Keywords",
    "group": "Hovercraft Racing & Skirt Fabrication",
    "keywords": [
      "neoprene coated nylon skirt",
      "hovercraft lift fan",
      "thrust duct aerodynamic",
      "skirt attachment clip",
      "hovercraft racing entry"
    ]
  },
  {
    "id": 888,
    "originalId": 539,
    "name": "Professional Drone Racing (DRL) Ops",
    "group": "Professional Drone Racing (DRL) Ops",
    "keywords": [
      "250mm carbon frame",
      "6s lipo battery pack",
      "5-inch tri-blade prop",
      "fpv video transmitter",
      "drone racing gate"
    ]
  },
  {
    "id": 889,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Drone Racing (DRL) Ops",
    "keywords": [
      "250mm carbon frame",
      "6s lipo battery pack",
      "5-inch tri-blade prop",
      "fpv video transmitter",
      "drone racing gate"
    ]
  },
  {
    "id": 890,
    "originalId": 540,
    "name": "Robot Combat & BattleBots Engineering",
    "group": "Robot Combat & BattleBots Engineering",
    "keywords": [
      "ar500 steel armor",
      "kinetic spinning weapon",
      "brushless drive motor",
      "weapon speed controller",
      "pneumatic flipper ram"
    ]
  },
  {
    "id": 891,
    "originalId": null,
    "name": "Keywords",
    "group": "Robot Combat & BattleBots Engineering",
    "keywords": [
      "ar500 steel armor",
      "kinetic spinning weapon",
      "brushless drive motor",
      "weapon speed controller",
      "pneumatic flipper ram"
    ]
  },
  {
    "id": 892,
    "originalId": 541,
    "name": "Commercial Falconry & Bird Abatement",
    "group": "Commercial Falconry & Bird Abatement",
    "keywords": [
      "abatement falcon purchase",
      "raptor telemetry transmitter",
      "bird strike prevention fee",
      "falcon transport box",
      "quail meat feed"
    ]
  },
  {
    "id": 893,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Falconry & Bird Abatement",
    "keywords": [
      "abatement falcon purchase",
      "raptor telemetry transmitter",
      "bird strike prevention fee",
      "falcon transport box",
      "quail meat feed"
    ]
  },
  {
    "id": 894,
    "originalId": 542,
    "name": "Competitive Pigeon Racing",
    "group": "Competitive Pigeon Racing",
    "keywords": [
      "racing pigeon loft",
      "electronic timing ring",
      "pigeon loft scraper",
      "pigeon grit mix",
      "pigeon racing club fee"
    ]
  },
  {
    "id": 895,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Pigeon Racing",
    "keywords": [
      "racing pigeon loft",
      "electronic timing ring",
      "pigeon loft scraper",
      "pigeon grit mix",
      "pigeon racing club fee"
    ]
  },
  {
    "id": 896,
    "originalId": 543,
    "name": "Professional Dog Sledding & Iditarod",
    "group": "Professional Dog Sledding & Iditarod",
    "keywords": [
      "dog sled runner plastic",
      "gangline bungee",
      "dog booty bulk",
      "mushing headlamp",
      "sled dog high fat kibble"
    ]
  },
  {
    "id": 897,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Dog Sledding & Iditarod",
    "keywords": [
      "dog sled runner plastic",
      "gangline bungee",
      "dog booty bulk",
      "mushing headlamp",
      "sled dog high fat kibble"
    ]
  },
  {
    "id": 898,
    "originalId": 544,
    "name": "Camel Racing & Robotic Jockeys",
    "group": "Camel Racing & Robotic Jockeys",
    "keywords": [
      "camel robotic jockey",
      "camel racing whip",
      "racing camel feed",
      "camel saddle",
      "track entry fee"
    ]
  },
  {
    "id": 899,
    "originalId": null,
    "name": "Keywords",
    "group": "Camel Racing & Robotic Jockeys",
    "keywords": [
      "camel robotic jockey",
      "camel racing whip",
      "racing camel feed",
      "camel saddle",
      "track entry fee"
    ]
  },
  {
    "id": 900,
    "originalId": 545,
    "name": "Professional Ostrich & Emu Farming",
    "group": "Professional Ostrich & Emu Farming",
    "keywords": [
      "ostrich egg incubator",
      "emu oil extraction press",
      "ratite feed bulk",
      "ostrich leather tanning",
      "emu shearing pen"
    ]
  },
  {
    "id": 901,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Ostrich & Emu Farming",
    "keywords": [
      "ostrich egg incubator",
      "emu oil extraction press",
      "ratite feed bulk",
      "ostrich leather tanning",
      "emu shearing pen"
    ]
  },
  {
    "id": 902,
    "originalId": 546,
    "name": "Competitive Sheepdog Trials",
    "group": "Competitive Sheepdog Trials",
    "keywords": [
      "sheepdog whistle",
      "herding crook",
      "trial entry fee",
      "sheepdog training pen",
      "working kelpie breeder fee"
    ]
  },
  {
    "id": 903,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Sheepdog Trials",
    "keywords": [
      "sheepdog whistle",
      "herding crook",
      "trial entry fee",
      "sheepdog training pen",
      "working kelpie breeder fee"
    ]
  },
  {
    "id": 904,
    "originalId": 547,
    "name": "Professional Bull Riding & Rodeo Ops",
    "group": "Professional Bull Riding & Rodeo Ops",
    "keywords": [
      "bull riding rosin",
      "kevlar rodeo vest",
      "bull rope",
      "flank strap",
      "rodeo clown barrel"
    ]
  },
  {
    "id": 905,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Bull Riding & Rodeo Ops",
    "keywords": [
      "bull riding rosin",
      "kevlar rodeo vest",
      "bull rope",
      "flank strap",
      "rodeo clown barrel"
    ]
  },
  {
    "id": 906,
    "originalId": 548,
    "name": "Commercial Jousting & Renaissance Combat",
    "group": "Commercial Jousting & Renaissance Combat",
    "keywords": [
      "jousting lance breakaway",
      "medieval tilting armor",
      "warhorse barding",
      "jousting list barrier",
      "squire fee"
    ]
  },
  {
    "id": 907,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Jousting & Renaissance Combat",
    "keywords": [
      "jousting lance breakaway",
      "medieval tilting armor",
      "warhorse barding",
      "jousting list barrier",
      "squire fee"
    ]
  },
  {
    "id": 908,
    "originalId": 549,
    "name": "Competitive Lumberjack & Timbersports",
    "group": "Competitive Lumberjack & Timbersports",
    "keywords": [
      "racing axe",
      "hot saw modified chainsaw",
      "crosscut saw racing",
      "springboard chopping board",
      "climbing spurs"
    ]
  },
  {
    "id": 909,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Lumberjack & Timbersports",
    "keywords": [
      "racing axe",
      "hot saw modified chainsaw",
      "crosscut saw racing",
      "springboard chopping board",
      "climbing spurs"
    ]
  },
  {
    "id": 910,
    "originalId": 550,
    "name": "Extreme Ironing & Absurd Novelty Sports",
    "group": "Extreme Ironing & Absurd Novelty Sports",
    "keywords": [
      "extreme ironing board cover",
      "cordless iron battery",
      "underwater ironing weight",
      "mountain ironing permit",
      "absurd sports fee"
    ]
  },
  {
    "id": 911,
    "originalId": null,
    "name": "Keywords",
    "group": "Extreme Ironing & Absurd Novelty Sports",
    "keywords": [
      "extreme ironing board cover",
      "cordless iron battery",
      "underwater ironing weight",
      "mountain ironing permit",
      "absurd sports fee"
    ]
  },
  {
    "id": 912,
    "originalId": 551,
    "name": "Professional Competitive Eating Training",
    "group": "Professional Competitive Eating Training",
    "keywords": [
      "stomach capacity training fluid",
      "competitive eating qualifier fee",
      "bulk hot dog purchase",
      "jaw strengthening chew",
      "anti-nausea medication"
    ]
  },
  {
    "id": 913,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Competitive Eating Training",
    "keywords": [
      "stomach capacity training fluid",
      "competitive eating qualifier fee",
      "bulk hot dog purchase",
      "jaw strengthening chew",
      "anti-nausea medication"
    ]
  },
  {
    "id": 914,
    "originalId": 552,
    "name": "Chess Boxing & Hybrid Combat Sports",
    "group": "Chess Boxing & Hybrid Combat Sports",
    "keywords": [
      "chess boxing glove",
      "chess clock timer",
      "mouthguard",
      "chess board shockproof",
      "hybrid sports gym fee"
    ]
  },
  {
    "id": 915,
    "originalId": null,
    "name": "Keywords",
    "group": "Chess Boxing & Hybrid Combat Sports",
    "keywords": [
      "chess boxing glove",
      "chess clock timer",
      "mouthguard",
      "chess board shockproof",
      "hybrid sports gym fee"
    ]
  },
  {
    "id": 916,
    "originalId": 553,
    "name": "Underwater Hockey (Octopush)",
    "group": "Underwater Hockey (Octopush)",
    "keywords": [
      "octopush pusher stick",
      "water polo cap with ear guards",
      "weighted underwater puck",
      "short scuba fins",
      "pool lane rental"
    ]
  },
  {
    "id": 917,
    "originalId": null,
    "name": "Keywords",
    "group": "Underwater Hockey (Octopush)",
    "keywords": [
      "octopush pusher stick",
      "water polo cap with ear guards",
      "weighted underwater puck",
      "short scuba fins",
      "pool lane rental"
    ]
  },
  {
    "id": 918,
    "originalId": 554,
    "name": "Professional Sepak Takraw",
    "group": "Professional Sepak Takraw",
    "keywords": [
      "rattan takraw ball",
      "sepak takraw net",
      "indoor court shoe",
      "flexibility stretching band",
      "takraw tournament fee"
    ]
  },
  {
    "id": 919,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Sepak Takraw",
    "keywords": [
      "rattan takraw ball",
      "sepak takraw net",
      "indoor court shoe",
      "flexibility stretching band",
      "takraw tournament fee"
    ]
  },
  {
    "id": 920,
    "originalId": 555,
    "name": "Competitive Bossaball & Inflatable Courts",
    "group": "Competitive Bossaball & Inflatable Courts",
    "keywords": [
      "bossaball inflatable court",
      "trampoline spring replacement",
      "bossaball net",
      "bossa nova referee fee",
      "court air blower"
    ]
  },
  {
    "id": 921,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Bossaball & Inflatable Courts",
    "keywords": [
      "bossaball inflatable court",
      "trampoline spring replacement",
      "bossaball net",
      "bossa nova referee fee",
      "court air blower"
    ]
  },
  {
    "id": 922,
    "originalId": 556,
    "name": "Professional Kabaddi & Mat Maintenance",
    "group": "Professional Kabaddi & Mat Maintenance",
    "keywords": [
      "kabaddi eva mat",
      "knee support sleeve",
      "anti-slip foot powder",
      "kabaddi raid timer",
      "tournament registration"
    ]
  },
  {
    "id": 923,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Kabaddi & Mat Maintenance",
    "keywords": [
      "kabaddi eva mat",
      "knee support sleeve",
      "anti-slip foot powder",
      "kabaddi raid timer",
      "tournament registration"
    ]
  },
  {
    "id": 924,
    "originalId": 557,
    "name": "Fierljeppen (Canal Jumping) Equipment",
    "group": "Fierljeppen (Canal Jumping) Equipment",
    "keywords": [
      "fierljeppen pole carbon",
      "canal jumping landing sand",
      "pole climbing grip spray",
      "water rescue ring",
      "vaulting spikes"
    ]
  },
  {
    "id": 925,
    "originalId": null,
    "name": "Keywords",
    "group": "Fierljeppen (Canal Jumping) Equipment",
    "keywords": [
      "fierljeppen pole carbon",
      "canal jumping landing sand",
      "pole climbing grip spray",
      "water rescue ring",
      "vaulting spikes"
    ]
  },
  {
    "id": 926,
    "originalId": 558,
    "name": "Cheese Rolling & Extreme Downhill Chasing",
    "group": "Cheese Rolling & Extreme Downhill Chasing",
    "keywords": [
      "double gloucester cheese wheel",
      "downhill safety helmet",
      "impact padding suit",
      "hill closure permit",
      "emergency medical standby"
    ]
  },
  {
    "id": 927,
    "originalId": null,
    "name": "Keywords",
    "group": "Cheese Rolling & Extreme Downhill Chasing",
    "keywords": [
      "double gloucester cheese wheel",
      "downhill safety helmet",
      "impact padding suit",
      "hill closure permit",
      "emergency medical standby"
    ]
  },
  {
    "id": 928,
    "originalId": 559,
    "name": "Wife Carrying (Eukonkanto) Championships",
    "group": "Wife Carrying (Eukonkanto) Championships",
    "keywords": [
      "wife carrying weight belt",
      "water obstacle pool maintenance",
      "official course measurement",
      "competition entry fee",
      "prize beer keg"
    ]
  },
  {
    "id": 929,
    "originalId": null,
    "name": "Keywords",
    "group": "Wife Carrying (Eukonkanto) Championships",
    "keywords": [
      "wife carrying weight belt",
      "water obstacle pool maintenance",
      "official course measurement",
      "competition entry fee",
      "prize beer keg"
    ]
  },
  {
    "id": 930,
    "originalId": 560,
    "name": "Bog Snorkeling & Extreme Swamp Sports",
    "group": "Bog Snorkeling & Extreme Swamp Sports",
    "keywords": [
      "bog snorkeling wetsuit",
      "swamp flippers",
      "bog trench digging equipment",
      "murky water goggles",
      "bog snorkeling entry fee"
    ]
  },
  {
    "id": 931,
    "originalId": null,
    "name": "Keywords",
    "group": "Bog Snorkeling & Extreme Swamp Sports",
    "keywords": [
      "bog snorkeling wetsuit",
      "swamp flippers",
      "bog trench digging equipment",
      "murky water goggles",
      "bog snorkeling entry fee"
    ]
  },
  {
    "id": 932,
    "originalId": 561,
    "name": "Competitive Worm Charming",
    "group": "Competitive Worm Charming",
    "keywords": [
      "worm charming vibrating fork",
      "soil acoustic resonator",
      "collecting tin",
      "damp soil patch rental",
      "charming permit"
    ]
  },
  {
    "id": 933,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Worm Charming",
    "keywords": [
      "worm charming vibrating fork",
      "soil acoustic resonator",
      "collecting tin",
      "damp soil patch rental",
      "charming permit"
    ]
  },
  {
    "id": 934,
    "originalId": 562,
    "name": "Professional Ferret Legging & Niche Pub Sports",
    "group": "Professional Ferret Legging & Niche Pub Sports",
    "keywords": [
      "ferret legging trousers",
      "pub sports entry fee",
      "ferret handling glove",
      "stop watch timer",
      "novelty sports medical kit"
    ]
  },
  {
    "id": 935,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Ferret Legging & Niche Pub Sports",
    "keywords": [
      "ferret legging trousers",
      "pub sports entry fee",
      "ferret handling glove",
      "stop watch timer",
      "novelty sports medical kit"
    ]
  },
  {
    "id": 936,
    "originalId": 563,
    "name": "Commercial Escape Room Design & Props",
    "group": "Commercial Escape Room Design & Props",
    "keywords": [
      "escape room magnetic lock",
      "puzzle logic controller",
      "hidden rfid reader",
      "prop secret door hinge",
      "escape room reset checklist"
    ]
  },
  {
    "id": 937,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Escape Room Design & Props",
    "keywords": [
      "escape room magnetic lock",
      "puzzle logic controller",
      "hidden rfid reader",
      "prop secret door hinge",
      "escape room reset checklist"
    ]
  },
  {
    "id": 938,
    "originalId": 564,
    "name": "Professional Haunted House & Scare Acting",
    "group": "Professional Haunted House & Scare Acting",
    "keywords": [
      "haunted house fog machine",
      "scare actor prosthetic",
      "pneumatic pop-out prop",
      "strobe light controller",
      "fake blood gallon"
    ]
  },
  {
    "id": 939,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Haunted House & Scare Acting",
    "keywords": [
      "haunted house fog machine",
      "scare actor prosthetic",
      "pneumatic pop-out prop",
      "strobe light controller",
      "fake blood gallon"
    ]
  },
  {
    "id": 940,
    "originalId": 565,
    "name": "Immersive Theater & Live Action Roleplay (LARP)",
    "group": "Immersive Theater & Live Action Roleplay (LARP)",
    "keywords": [
      "immersive theater ticket",
      "larp foam weapon bulk",
      "npc costume rental",
      "larp campaign rulebook",
      "prop coin pouch"
    ]
  },
  {
    "id": 941,
    "originalId": null,
    "name": "Keywords",
    "group": "Immersive Theater & Live Action Roleplay (LARP)",
    "keywords": [
      "immersive theater ticket",
      "larp foam weapon bulk",
      "npc costume rental",
      "larp campaign rulebook",
      "prop coin pouch"
    ]
  },
  {
    "id": 942,
    "originalId": 566,
    "name": "Murder Mystery Dinner Theater Logistics",
    "group": "Murder Mystery Dinner Theater Logistics",
    "keywords": [
      "murder mystery script license",
      "prop weapon clue",
      "character dossier envelope",
      "dinner theater catering",
      "actor retainer"
    ]
  },
  {
    "id": 943,
    "originalId": null,
    "name": "Keywords",
    "group": "Murder Mystery Dinner Theater Logistics",
    "keywords": [
      "murder mystery script license",
      "prop weapon clue",
      "character dossier envelope",
      "dinner theater catering",
      "actor retainer"
    ]
  },
  {
    "id": 944,
    "originalId": 567,
    "name": "Historical Reenactment & Encampment",
    "group": "Historical Reenactment & Encampment",
    "keywords": [
      "civil war canvas tent",
      "black powder musket blank",
      "reenactment uniform wool",
      "camp cooking tripod",
      "historical sutler fee"
    ]
  },
  {
    "id": 945,
    "originalId": null,
    "name": "Keywords",
    "group": "Historical Reenactment & Encampment",
    "keywords": [
      "civil war canvas tent",
      "black powder musket blank",
      "reenactment uniform wool",
      "camp cooking tripod",
      "historical sutler fee"
    ]
  },
  {
    "id": 946,
    "originalId": 568,
    "name": "Professional Cosplay & Prop Fabrication",
    "group": "Professional Cosplay & Prop Fabrication",
    "keywords": [
      "eva foam high density",
      "worbla thermoplastic",
      "cosplay contact lenses",
      "prop weathering wash",
      "convention masquerade entry"
    ]
  },
  {
    "id": 947,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Cosplay & Prop Fabrication",
    "keywords": [
      "eva foam high density",
      "worbla thermoplastic",
      "cosplay contact lenses",
      "prop weathering wash",
      "convention masquerade entry"
    ]
  },
  {
    "id": 948,
    "originalId": 569,
    "name": "Competitive Miniature Painting & Golden Demon",
    "group": "Competitive Miniature Painting & Golden Demon",
    "keywords": [
      "kolinsky sable brush",
      "wet palette sponge",
      "miniature painting magnifier",
      "acrylic wash medium",
      "golden demon entry"
    ]
  },
  {
    "id": 949,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Miniature Painting & Golden Demon",
    "keywords": [
      "kolinsky sable brush",
      "wet palette sponge",
      "miniature painting magnifier",
      "acrylic wash medium",
      "golden demon entry"
    ]
  },
  {
    "id": 950,
    "originalId": 570,
    "name": "Professional Diorama & Model Railway Scenery",
    "group": "Professional Diorama & Model Railway Scenery",
    "keywords": [
      "static grass applicator",
      "model train ballast",
      "diorama epoxy water",
      "scale model trees",
      "miniature led streetlights"
    ]
  },
  {
    "id": 951,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Diorama & Model Railway Scenery",
    "keywords": [
      "static grass applicator",
      "model train ballast",
      "diorama epoxy water",
      "scale model trees",
      "miniature led streetlights"
    ]
  },
  {
    "id": 952,
    "originalId": 571,
    "name": "Commercial Kite Aerial Photography (KAP)",
    "group": "Commercial Kite Aerial Photography (KAP)",
    "keywords": [
      "picavet suspension rig",
      "delta kite heavy lift",
      "remote camera shutter trigger",
      "kite line winder reel",
      "kap safety carabiner"
    ]
  },
  {
    "id": 953,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Kite Aerial Photography (KAP)",
    "keywords": [
      "picavet suspension rig",
      "delta kite heavy lift",
      "remote camera shutter trigger",
      "kite line winder reel",
      "kap safety carabiner"
    ]
  },
  {
    "id": 954,
    "originalId": 572,
    "name": "Professional Yo-Yo & Skill Toy Competitions",
    "group": "Professional Yo-Yo & Skill Toy Competitions",
    "keywords": [
      "bi-metal yoyo",
      "unresponsive yoyo bearing",
      "string tension lube",
      "competition freestyle timer",
      "kendama dama replacement"
    ]
  },
  {
    "id": 955,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Yo-Yo & Skill Toy Competitions",
    "keywords": [
      "bi-metal yoyo",
      "unresponsive yoyo bearing",
      "string tension lube",
      "competition freestyle timer",
      "kendama dama replacement"
    ]
  },
  {
    "id": 956,
    "originalId": 573,
    "name": "Speedcubing & WCA Competitions",
    "group": "Speedcubing & WCA Competitions",
    "keywords": [
      "wca stackmat timer",
      "magnetic 3x3 speedcube",
      "cube tensioning tool",
      "speedcube silicone lube",
      "wca competition fee"
    ]
  },
  {
    "id": 957,
    "originalId": null,
    "name": "Keywords",
    "group": "Speedcubing & WCA Competitions",
    "keywords": [
      "wca stackmat timer",
      "magnetic 3x3 speedcube",
      "cube tensioning tool",
      "speedcube silicone lube",
      "wca competition fee"
    ]
  },
  {
    "id": 958,
    "originalId": 574,
    "name": "Competitive Pen Spinning",
    "group": "Competitive Pen Spinning",
    "keywords": [
      "pen spinning mod",
      "heavy metal pen tip",
      "silicone grip tube",
      "pen spinning competition entry",
      "finger dexterity exerciser"
    ]
  },
  {
    "id": 959,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Pen Spinning",
    "keywords": [
      "pen spinning mod",
      "heavy metal pen tip",
      "silicone grip tube",
      "pen spinning competition entry",
      "finger dexterity exerciser"
    ]
  },
  {
    "id": 960,
    "originalId": 575,
    "name": "Professional Cardistry & Flourishing",
    "group": "Professional Cardistry & Flourishing",
    "keywords": [
      "crushed stock playing cards",
      "fanning powder",
      "cardistry trainer block",
      "deck press",
      "playing card display case"
    ]
  },
  {
    "id": 961,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Cardistry & Flourishing",
    "keywords": [
      "crushed stock playing cards",
      "fanning powder",
      "cardistry trainer block",
      "deck press",
      "playing card display case"
    ]
  },
  {
    "id": 962,
    "originalId": 576,
    "name": "Sleight of Hand & Stage Magic Illusions",
    "group": "Sleight of Hand & Stage Magic Illusions",
    "keywords": [
      "stage illusion blueprint",
      "flash paper booklet",
      "magic trick invisible thread",
      "thumb tip prop",
      "illusionist booking fee"
    ]
  },
  {
    "id": 963,
    "originalId": null,
    "name": "Keywords",
    "group": "Sleight of Hand & Stage Magic Illusions",
    "keywords": [
      "stage illusion blueprint",
      "flash paper booklet",
      "magic trick invisible thread",
      "thumb tip prop",
      "illusionist booking fee"
    ]
  },
  {
    "id": 964,
    "originalId": 577,
    "name": "Ventriloquism & Professional Puppetry",
    "group": "Ventriloquism & Professional Puppetry",
    "keywords": [
      "ventriloquist dummy custom head",
      "hand puppet mechanism",
      "puppet stage curtain",
      "marionette control cross",
      "voice throw tutorial"
    ]
  },
  {
    "id": 965,
    "originalId": null,
    "name": "Keywords",
    "group": "Ventriloquism & Professional Puppetry",
    "keywords": [
      "ventriloquist dummy custom head",
      "hand puppet mechanism",
      "puppet stage curtain",
      "marionette control cross",
      "voice throw tutorial"
    ]
  },
  {
    "id": 966,
    "originalId": 578,
    "name": "Professional Clown & Circus Arts",
    "group": "Professional Clown & Circus Arts",
    "keywords": [
      "clown nose silicone",
      "juggling club bulk",
      "unicycle saddle",
      "face paint greasepaint",
      "clown shoe custom"
    ]
  },
  {
    "id": 967,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Clown & Circus Arts",
    "keywords": [
      "clown nose silicone",
      "juggling club bulk",
      "unicycle saddle",
      "face paint greasepaint",
      "clown shoe custom"
    ]
  },
  {
    "id": 968,
    "originalId": 579,
    "name": "Fire Spinning & Flow Arts",
    "group": "Fire Spinning & Flow Arts",
    "keywords": [
      "fire poi kevlar wick",
      "dragon staff",
      "spitfire fuel",
      "flow arts led prop",
      "fire safety blanket"
    ]
  },
  {
    "id": 969,
    "originalId": null,
    "name": "Keywords",
    "group": "Fire Spinning & Flow Arts",
    "keywords": [
      "fire poi kevlar wick",
      "dragon staff",
      "spitfire fuel",
      "flow arts led prop",
      "fire safety blanket"
    ]
  },
  {
    "id": 970,
    "originalId": 580,
    "name": "Aerial Silks & Acrobatics Rigging",
    "group": "Aerial Silks & Acrobatics Rigging",
    "keywords": [
      "aerial silk fabric length",
      "rigging swivel",
      "aerial hoop lyra",
      "crash mat gymnastics",
      "load bearing carabiner"
    ]
  },
  {
    "id": 971,
    "originalId": null,
    "name": "Keywords",
    "group": "Aerial Silks & Acrobatics Rigging",
    "keywords": [
      "aerial silk fabric length",
      "rigging swivel",
      "aerial hoop lyra",
      "crash mat gymnastics",
      "load bearing carabiner"
    ]
  },
  {
    "id": 972,
    "originalId": 581,
    "name": "Trapeze & High Wire Apparatus",
    "group": "Trapeze & High Wire Apparatus",
    "keywords": [
      "flying trapeze bar",
      "high wire tensioner",
      "catcher knee hang grip",
      "safety net rigging",
      "balance pole"
    ]
  },
  {
    "id": 973,
    "originalId": null,
    "name": "Keywords",
    "group": "Trapeze & High Wire Apparatus",
    "keywords": [
      "flying trapeze bar",
      "high wire tensioner",
      "catcher knee hang grip",
      "safety net rigging",
      "balance pole"
    ]
  },
  {
    "id": 974,
    "originalId": 582,
    "name": "Contortion & Flexibility Training",
    "group": "Contortion & Flexibility Training",
    "keywords": [
      "contortion stretching block",
      "flexibility stretching strap",
      "oversplit bench",
      "contortionist coach fee",
      "warming liniment"
    ]
  },
  {
    "id": 975,
    "originalId": null,
    "name": "Keywords",
    "group": "Contortion & Flexibility Training",
    "keywords": [
      "contortion stretching block",
      "flexibility stretching strap",
      "oversplit bench",
      "contortionist coach fee",
      "warming liniment"
    ]
  },
  {
    "id": 976,
    "originalId": 583,
    "name": "Knife Throwing & Impalement Arts",
    "group": "Knife Throwing & Impalement Arts",
    "keywords": [
      "throwing knife perfectly balanced",
      "end grain wood target",
      "throwing tomahawk",
      "impalement arts backboard",
      "sharpening puck"
    ]
  },
  {
    "id": 977,
    "originalId": null,
    "name": "Keywords",
    "group": "Knife Throwing & Impalement Arts",
    "keywords": [
      "throwing knife perfectly balanced",
      "end grain wood target",
      "throwing tomahawk",
      "impalement arts backboard",
      "sharpening puck"
    ]
  },
  {
    "id": 978,
    "originalId": 584,
    "name": "Professional Bullwhip & Whip Cracking",
    "group": "Professional Bullwhip & Whip Cracking",
    "keywords": [
      "kangaroo hide bullwhip",
      "whip cracker popper",
      "stockwhip handle",
      "whip target stand",
      "whip cracking competition"
    ]
  },
  {
    "id": 979,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Bullwhip & Whip Cracking",
    "keywords": [
      "kangaroo hide bullwhip",
      "whip cracker popper",
      "stockwhip handle",
      "whip target stand",
      "whip cracking competition"
    ]
  },
  {
    "id": 980,
    "originalId": 585,
    "name": "Commercial Sandbox & Sand Sculpting",
    "group": "Commercial Sandbox & Sand Sculpting",
    "keywords": [
      "masonry sand bulk",
      "sand sculpting trowel",
      "compaction tamper",
      "biodegradable sand glue",
      "sandcastle formwork"
    ]
  },
  {
    "id": 981,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Sandbox & Sand Sculpting",
    "keywords": [
      "masonry sand bulk",
      "sand sculpting trowel",
      "compaction tamper",
      "biodegradable sand glue",
      "sandcastle formwork"
    ]
  },
  {
    "id": 982,
    "originalId": 586,
    "name": "Professional Ice Sculpting & Chainsaw Art",
    "group": "Professional Ice Sculpting & Chainsaw Art",
    "keywords": [
      "ice sculpting chainsaw bar",
      "ice chisel",
      "clear ice block delivery",
      "ice carving template",
      "thermal carving glove"
    ]
  },
  {
    "id": 983,
    "originalId": 587,
    "name": "Topiary & Precision Hedge Trimming",
    "group": "Topiary & Precision Hedge Trimming",
    "keywords": [
      "topiary shears",
      "wire topiary frame",
      "boxwood shrub bulk",
      "hedge trimming ladder",
      "topiary maintenance fee"
    ]
  },
  {
    "id": 984,
    "originalId": null,
    "name": "Keywords",
    "group": "Topiary & Precision Hedge Trimming",
    "keywords": [
      "topiary shears",
      "wire topiary frame",
      "boxwood shrub bulk",
      "hedge trimming ladder",
      "topiary maintenance fee"
    ]
  },
  {
    "id": 985,
    "originalId": 588,
    "name": "Professional Pumpkin Carving & Jack-o'-Lanterns",
    "group": "Professional Pumpkin Carving & Jack-o'-Lanterns",
    "keywords": [
      "giant pumpkin seed",
      "ribbon loop tool carving",
      "pumpkin preservative spray",
      "pumpkin weigh-off entry",
      "heavy duty carving saw"
    ]
  },
  {
    "id": 986,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Pumpkin Carving & Jack-o'-Lanterns",
    "keywords": [
      "giant pumpkin seed",
      "ribbon loop tool carving",
      "pumpkin preservative spray",
      "pumpkin weigh-off entry",
      "heavy duty carving saw"
    ]
  },
  {
    "id": 987,
    "originalId": 589,
    "name": "Watermelon Carving & Fruit Art",
    "group": "Watermelon Carving & Fruit Art",
    "keywords": [
      "thai carving knife",
      "fruit carving peeling tool",
      "melon baller set",
      "food safe display spray",
      "fruit art competition"
    ]
  },
  {
    "id": 988,
    "originalId": null,
    "name": "Keywords",
    "group": "Watermelon Carving & Fruit Art",
    "keywords": [
      "thai carving knife",
      "fruit carving peeling tool",
      "melon baller set",
      "food safe display spray",
      "fruit art competition"
    ]
  },
  {
    "id": 989,
    "originalId": 590,
    "name": "Competitive Floral Arrangement & Ikebana",
    "group": "Competitive Floral Arrangement & Ikebana",
    "keywords": [
      "kenzan floral frog",
      "ikebana shears",
      "floral foam block",
      "structural floral wire",
      "flower arranging competition fee"
    ]
  },
  {
    "id": 990,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Floral Arrangement & Ikebana",
    "keywords": [
      "kenzan floral frog",
      "ikebana shears",
      "floral foam block",
      "structural floral wire",
      "flower arranging competition fee"
    ]
  },
  {
    "id": 991,
    "originalId": 591,
    "name": "Competitive Aquascaping & Planted Tanks",
    "group": "Competitive Aquascaping & Planted Tanks",
    "keywords": [
      "aquascaping tweezers long",
      "iwagumi stone layout",
      "aquasoil substrate",
      "co2 diffuser glass",
      "aquascaping contest entry"
    ]
  },
  {
    "id": 992,
    "originalId": null,
    "name": "Keywords",
    "group": "Competitive Aquascaping & Planted Tanks",
    "keywords": [
      "aquascaping tweezers long",
      "iwagumi stone layout",
      "aquasoil substrate",
      "co2 diffuser glass",
      "aquascaping contest entry"
    ]
  },
  {
    "id": 993,
    "originalId": 592,
    "name": "Professional Terrarium & Vivarium Design",
    "group": "Professional Terrarium & Vivarium Design",
    "keywords": [
      "terrarium false bottom",
      "springtail culture",
      "cork bark tube",
      "vivarium misting system",
      "terrarium moss bulk"
    ]
  },
  {
    "id": 994,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Terrarium & Vivarium Design",
    "keywords": [
      "terrarium false bottom",
      "springtail culture",
      "cork bark tube",
      "vivarium misting system",
      "terrarium moss bulk"
    ]
  },
  {
    "id": 995,
    "originalId": 593,
    "name": "Paludarium & Riparium Construction",
    "group": "Paludarium & Riparium Construction",
    "keywords": [
      "paludarium water pump",
      "riparium planter",
      "aquatic emergent plant",
      "waterline silicone",
      "ultrasonic fogger"
    ]
  },
  {
    "id": 996,
    "originalId": null,
    "name": "Keywords",
    "group": "Paludarium & Riparium Construction",
    "keywords": [
      "paludarium water pump",
      "riparium planter",
      "aquatic emergent plant",
      "waterline silicone",
      "ultrasonic fogger"
    ]
  },
  {
    "id": 997,
    "originalId": 594,
    "name": "Professional Bonsai Cultivation & Styling",
    "group": "Professional Bonsai Cultivation & Styling",
    "keywords": [
      "bonsai wire cutter",
      "concave branch cutter",
      "akadama bonsai soil",
      "jin pliers",
      "bonsai exhibition fee"
    ]
  },
  {
    "id": 998,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional Bonsai Cultivation & Styling",
    "keywords": [
      "bonsai wire cutter",
      "concave branch cutter",
      "akadama bonsai soil",
      "jin pliers",
      "bonsai exhibition fee"
    ]
  },
  {
    "id": 999,
    "originalId": 595,
    "name": "Penjing & Miniature Landscape Creation",
    "group": "Penjing & Miniature Landscape Creation",
    "keywords": [
      "penjing marble tray",
      "miniature mudman figure",
      "landscape viewing stone",
      "penjing pruning shear",
      "suiseki display stand"
    ]
  },
  {
    "id": 1000,
    "originalId": null,
    "name": "Keywords",
    "group": "Penjing & Miniature Landscape Creation",
    "keywords": [
      "penjing marble tray",
      "miniature mudman figure",
      "landscape viewing stone",
      "penjing pruning shear",
      "suiseki display stand"
    ]
  },
  {
    "id": 1001,
    "originalId": 596,
    "name": "Suiseki (Viewing Stones) Collecting & Daiza Carving",
    "group": "Suiseki (Viewing Stones) Collecting & Daiza Carving",
    "keywords": [
      "suiseki viewing stone",
      "daiza wood carving blank",
      "stone polishing wax",
      "dremel carving bit",
      "suiseki appraisal fee"
    ]
  },
  {
    "id": 1002,
    "originalId": null,
    "name": "Keywords",
    "group": "Suiseki (Viewing Stones) Collecting & Daiza Carving",
    "keywords": [
      "suiseki viewing stone",
      "daiza wood carving blank",
      "stone polishing wax",
      "dremel carving bit",
      "suiseki appraisal fee"
    ]
  },
  {
    "id": 1003,
    "originalId": 597,
    "name": "Kintsugi & Ceramic Repair Art",
    "group": "Kintsugi & Ceramic Repair Art",
    "keywords": [
      "urushi lacquer",
      "pure gold powder kintsugi",
      "tonoko powder",
      "kintsugi curing box",
      "ceramic repair spatula"
    ]
  },
  {
    "id": 1004,
    "originalId": null,
    "name": "Keywords",
    "group": "Kintsugi & Ceramic Repair Art",
    "keywords": [
      "urushi lacquer",
      "pure gold powder kintsugi",
      "tonoko powder",
      "kintsugi curing box",
      "ceramic repair spatula"
    ]
  },
  {
    "id": 1005,
    "originalId": 598,
    "name": "Traditional Calligraphy & Shodo",
    "group": "Traditional Calligraphy & Shodo",
    "keywords": [
      "sumi ink stick",
      "calligraphy brush goat hair",
      "inkstone suzuri",
      "rice paper xuan",
      "calligraphy scroll mounting"
    ]
  },
  {
    "id": 1006,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Calligraphy & Shodo",
    "keywords": [
      "sumi ink stick",
      "calligraphy brush goat hair",
      "inkstone suzuri",
      "rice paper xuan",
      "calligraphy scroll mounting"
    ]
  },
  {
    "id": 1007,
    "originalId": 599,
    "name": "Seal Carving (Tensho) & Stamp Making",
    "group": "Seal Carving (Tensho) & Stamp Making",
    "keywords": [
      "soapstone seal blank",
      "seal carving knife",
      "red cinnabar ink paste",
      "seal engraving clamp",
      "tensho dictionary"
    ]
  },
  {
    "id": 1008,
    "originalId": null,
    "name": "Keywords",
    "group": "Seal Carving (Tensho) & Stamp Making",
    "keywords": [
      "soapstone seal blank",
      "seal carving knife",
      "red cinnabar ink paste",
      "seal engraving clamp",
      "tensho dictionary"
    ]
  },
  {
    "id": 1009,
    "originalId": 600,
    "name": "Traditional Origami & Paper Folding Arts",
    "group": "Traditional Origami & Paper Folding Arts",
    "keywords": [
      "washi origami paper",
      "wet folding paper",
      "bone folder tool",
      "modular origami unit",
      "origami exhibition fee"
    ]
  },
  {
    "id": 1010,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Origami & Paper Folding Arts",
    "keywords": [
      "washi origami paper",
      "wet folding paper",
      "bone folder tool",
      "modular origami unit",
      "origami exhibition fee"
    ]
  },
  {
    "id": 1011,
    "originalId": 601,
    "name": "Kirigami & Paper Cutting Art",
    "group": "Kirigami & Paper Cutting Art",
    "keywords": [
      "kirigami scalpel",
      "self healing cutting mat",
      "precision craft scissors",
      "decorative paper bulk",
      "kirigami template"
    ]
  },
  {
    "id": 1012,
    "originalId": null,
    "name": "Keywords",
    "group": "Kirigami & Paper Cutting Art",
    "keywords": [
      "kirigami scalpel",
      "self healing cutting mat",
      "precision craft scissors",
      "decorative paper bulk",
      "kirigami template"
    ]
  },
  {
    "id": 1013,
    "originalId": 602,
    "name": "Quilling & Paper Filigree",
    "group": "Quilling & Paper Filigree",
    "keywords": [
      "quilling slotted tool",
      "paper quilling strips",
      "quilling board template",
      "clear drying craft glue",
      "quilling crimper"
    ]
  },
  {
    "id": 1014,
    "originalId": null,
    "name": "Keywords",
    "group": "Quilling & Paper Filigree",
    "keywords": [
      "quilling slotted tool",
      "paper quilling strips",
      "quilling board template",
      "clear drying craft glue",
      "quilling crimper"
    ]
  },
  {
    "id": 1015,
    "originalId": 603,
    "name": "Bookbinding & Custom Journal Making",
    "group": "Bookbinding & Custom Journal Making",
    "keywords": [
      "awl for bookbinding",
      "waxed linen thread",
      "pva archival glue",
      "book cloth roll",
      "book press"
    ]
  },
  {
    "id": 1016,
    "originalId": null,
    "name": "Keywords",
    "group": "Bookbinding & Custom Journal Making",
    "keywords": [
      "awl for bookbinding",
      "waxed linen thread",
      "pva archival glue",
      "book cloth roll",
      "book press"
    ]
  },
  {
    "id": 1017,
    "originalId": 604,
    "name": "Papermaking & Pulp Milling",
    "group": "Papermaking & Pulp Milling",
    "keywords": [
      "papermaking mould and deckle",
      "cotton linter sheet",
      "paper pulp blender",
      "couch sheet",
      "paper sizing agent"
    ]
  },
  {
    "id": 1018,
    "originalId": null,
    "name": "Keywords",
    "group": "Papermaking & Pulp Milling",
    "keywords": [
      "papermaking mould and deckle",
      "cotton linter sheet",
      "paper pulp blender",
      "couch sheet",
      "paper sizing agent"
    ]
  },
  {
    "id": 1019,
    "originalId": 605,
    "name": "Marbling & Suminagashi",
    "group": "Marbling & Suminagashi",
    "keywords": [
      "suminagashi ink",
      "carrageenan marbling size",
      "marbling comb",
      "alum mordant",
      "marbling tray"
    ]
  },
  {
    "id": 1020,
    "originalId": null,
    "name": "Keywords",
    "group": "Marbling & Suminagashi",
    "keywords": [
      "suminagashi ink",
      "carrageenan marbling size",
      "marbling comb",
      "alum mordant",
      "marbling tray"
    ]
  },
  {
    "id": 1021,
    "originalId": 606,
    "name": "Traditional Letterpress & Movable Type",
    "group": "Traditional Letterpress & Movable Type",
    "keywords": [
      "letterpress chase",
      "lead movable type font",
      "letterpress ink",
      "tympan paper",
      "composing stick"
    ]
  },
  {
    "id": 1022,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Letterpress & Movable Type",
    "keywords": [
      "letterpress chase",
      "lead movable type font",
      "letterpress ink",
      "tympan paper",
      "composing stick"
    ]
  },
  {
    "id": 1023,
    "originalId": 607,
    "name": "Linocut & Block Printing",
    "group": "Linocut & Block Printing",
    "keywords": [
      "linoleum block carving",
      "lino cutter gauge",
      "block printing brayer",
      "water soluble relief ink",
      "printing barren"
    ]
  },
  {
    "id": 1024,
    "originalId": null,
    "name": "Keywords",
    "group": "Linocut & Block Printing",
    "keywords": [
      "linoleum block carving",
      "lino cutter gauge",
      "block printing brayer",
      "water soluble relief ink",
      "printing barren"
    ]
  },
  {
    "id": 1025,
    "originalId": 608,
    "name": "Screen Printing & Serigraphy",
    "group": "Screen Printing & Serigraphy",
    "keywords": [
      "silk screen mesh frame",
      "emulsion scoop coater",
      "screen printing squeegee",
      "plastisol ink bulk",
      "screen exposure lamp"
    ]
  },
  {
    "id": 1026,
    "originalId": null,
    "name": "Keywords",
    "group": "Screen Printing & Serigraphy",
    "keywords": [
      "silk screen mesh frame",
      "emulsion scoop coater",
      "screen printing squeegee",
      "plastisol ink bulk",
      "screen exposure lamp"
    ]
  },
  {
    "id": 1027,
    "originalId": 609,
    "name": "Lithography & Stone Printing",
    "group": "Lithography & Stone Printing",
    "keywords": [
      "lithographic limestone",
      "litho crayon",
      "gum arabic etch",
      "lithography press leather roller",
      "rosin powder"
    ]
  },
  {
    "id": 1028,
    "originalId": null,
    "name": "Keywords",
    "group": "Lithography & Stone Printing",
    "keywords": [
      "lithographic limestone",
      "litho crayon",
      "gum arabic etch",
      "lithography press leather roller",
      "rosin powder"
    ]
  },
  {
    "id": 1029,
    "originalId": 610,
    "name": "Intaglio, Etching & Drypoint",
    "group": "Intaglio, Etching & Drypoint",
    "keywords": [
      "copper etching plate",
      "etching needle",
      "ferric chloride acid",
      "intaglio ink wiping tarlatan",
      "drypoint roulette"
    ]
  },
  {
    "id": 1030,
    "originalId": null,
    "name": "Keywords",
    "group": "Intaglio, Etching & Drypoint",
    "keywords": [
      "copper etching plate",
      "etching needle",
      "ferric chloride acid",
      "intaglio ink wiping tarlatan",
      "drypoint roulette"
    ]
  },
  {
    "id": 1031,
    "originalId": 611,
    "name": "Mezzotint & Aquatint Printmaking",
    "group": "Mezzotint & Aquatint Printmaking",
    "keywords": [
      "mezzotint rocker",
      "aquatint rosin box",
      "burnisher scraper tool",
      "copper plate polishing compound",
      "mezzotint ground"
    ]
  },
  {
    "id": 1032,
    "originalId": null,
    "name": "Keywords",
    "group": "Mezzotint & Aquatint Printmaking",
    "keywords": [
      "mezzotint rocker",
      "aquatint rosin box",
      "burnisher scraper tool",
      "copper plate polishing compound",
      "mezzotint ground"
    ]
  },
  {
    "id": 1033,
    "originalId": 612,
    "name": "Wood Engraving & Relief Printing",
    "group": "Wood Engraving & Relief Printing",
    "keywords": [
      "end grain woodblock",
      "wood engraving burin",
      "relief printing ink",
      "sandbag engraving cushion",
      "proofing press"
    ]
  },
  {
    "id": 1034,
    "originalId": null,
    "name": "Keywords",
    "group": "Wood Engraving & Relief Printing",
    "keywords": [
      "end grain woodblock",
      "wood engraving burin",
      "relief printing ink",
      "sandbag engraving cushion",
      "proofing press"
    ]
  },
  {
    "id": 1035,
    "originalId": 613,
    "name": "Stained Glass & Lead Came Art",
    "group": "Stained Glass & Lead Came Art",
    "keywords": [
      "stained glass sheet",
      "glass cutter oil feed",
      "copper foil tape",
      "stained glass soldering iron",
      "lead came strip"
    ]
  },
  {
    "id": 1036,
    "originalId": null,
    "name": "Keywords",
    "group": "Stained Glass & Lead Came Art",
    "keywords": [
      "stained glass sheet",
      "glass cutter oil feed",
      "copper foil tape",
      "stained glass soldering iron",
      "lead came strip"
    ]
  },
  {
    "id": 1037,
    "originalId": 614,
    "name": "Glassblowing & Lampworking Torch Arts",
    "group": "Glassblowing & Lampworking Torch Arts",
    "keywords": [
      "borosilicate glass rod",
      "lampworking torch dual fuel",
      "graphite marver",
      "glass blowing pipe",
      "kiln annealer"
    ]
  },
  {
    "id": 1038,
    "originalId": null,
    "name": "Keywords",
    "group": "Glassblowing & Lampworking Torch Arts",
    "keywords": [
      "borosilicate glass rod",
      "lampworking torch dual fuel",
      "graphite marver",
      "glass blowing pipe",
      "kiln annealer"
    ]
  },
  {
    "id": 1039,
    "originalId": 615,
    "name": "Glass Fusing & Slumping",
    "group": "Glass Fusing & Slumping",
    "keywords": [
      "glass fusing kiln",
      "frit powder bulk",
      "slumping mold ceramic",
      "kiln wash primer",
      "dichroic glass scrap"
    ]
  },
  {
    "id": 1040,
    "originalId": null,
    "name": "Keywords",
    "group": "Glass Fusing & Slumping",
    "keywords": [
      "glass fusing kiln",
      "frit powder bulk",
      "slumping mold ceramic",
      "kiln wash primer",
      "dichroic glass scrap"
    ]
  },
  {
    "id": 1041,
    "originalId": 616,
    "name": "Mosaic & Tesserae Art",
    "group": "Mosaic & Tesserae Art",
    "keywords": [
      "mosaic glass tile",
      "tile nipper tool",
      "mosaic grout sanded",
      "tesserae adhesive",
      "mosaic backer board"
    ]
  },
  {
    "id": 1042,
    "originalId": null,
    "name": "Keywords",
    "group": "Mosaic & Tesserae Art",
    "keywords": [
      "mosaic glass tile",
      "tile nipper tool",
      "mosaic grout sanded",
      "tesserae adhesive",
      "mosaic backer board"
    ]
  },
  {
    "id": 1043,
    "originalId": 617,
    "name": "Traditional Fresco & Mural Painting",
    "group": "Traditional Fresco & Mural Painting",
    "keywords": [
      "slaked lime plaster",
      "fresco pigment raw",
      "mural scaffold rental",
      "pouncing wheel",
      "trowel plastering"
    ]
  },
  {
    "id": 1044,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Fresco & Mural Painting",
    "keywords": [
      "slaked lime plaster",
      "fresco pigment raw",
      "mural scaffold rental",
      "pouncing wheel",
      "trowel plastering"
    ]
  },
  {
    "id": 1045,
    "originalId": 618,
    "name": "Trompe L'Oeil & Illusionistic Painting",
    "group": "Trompe L'Oeil & Illusionistic Painting",
    "keywords": [
      "trompe l'oeil brush set",
      "architectural drafting tape",
      "acrylic glazing liquid",
      "faux finish sponge",
      "illusion painting commission"
    ]
  },
  {
    "id": 1046,
    "originalId": null,
    "name": "Keywords",
    "group": "Trompe L'Oeil & Illusionistic Painting",
    "keywords": [
      "trompe l'oeil brush set",
      "architectural drafting tape",
      "acrylic glazing liquid",
      "faux finish sponge",
      "illusion painting commission"
    ]
  },
  {
    "id": 1047,
    "originalId": 619,
    "name": "Miniature Painting & Illuminated Manuscripts",
    "group": "Miniature Painting & Illuminated Manuscripts",
    "keywords": [
      "illuminated manuscript vellum",
      "gold leaf transfer",
      "squirrel hair detail brush",
      "lapis lazuli pigment",
      "calligraphy nib broad"
    ]
  },
  {
    "id": 1048,
    "originalId": null,
    "name": "Keywords",
    "group": "Miniature Painting & Illuminated Manuscripts",
    "keywords": [
      "illuminated manuscript vellum",
      "gold leaf transfer",
      "squirrel hair detail brush",
      "lapis lazuli pigment",
      "calligraphy nib broad"
    ]
  },
  {
    "id": 1049,
    "originalId": 620,
    "name": "Encaustic Painting & Hot Wax Art",
    "group": "Encaustic Painting & Hot Wax Art",
    "keywords": [
      "encaustic beeswax medium",
      "damar resin crystal",
      "hot wax palette",
      "encaustic heat gun",
      "rigid painting panel"
    ]
  },
  {
    "id": 1050,
    "originalId": null,
    "name": "Keywords",
    "group": "Encaustic Painting & Hot Wax Art",
    "keywords": [
      "encaustic beeswax medium",
      "damar resin crystal",
      "hot wax palette",
      "encaustic heat gun",
      "rigid painting panel"
    ]
  },
  {
    "id": 1051,
    "originalId": 621,
    "name": "Egg Tempera & Historical Paint Mixing",
    "group": "Egg Tempera & Historical Paint Mixing",
    "keywords": [
      "dry earth pigment",
      "egg yolk binder",
      "muller glass grinding",
      "tempera gesso board",
      "historical paint recipe book"
    ]
  },
  {
    "id": 1052,
    "originalId": null,
    "name": "Keywords",
    "group": "Egg Tempera & Historical Paint Mixing",
    "keywords": [
      "dry earth pigment",
      "egg yolk binder",
      "muller glass grinding",
      "tempera gesso board",
      "historical paint recipe book"
    ]
  },
  {
    "id": 1053,
    "originalId": 622,
    "name": "Oil Painting & Canvas Stretching",
    "group": "Oil Painting & Canvas Stretching",
    "keywords": [
      "oil paint tube",
      "linseed oil medium",
      "canvas stretching pliers",
      "raw linen canvas roll",
      "palette knife set"
    ]
  },
  {
    "id": 1054,
    "originalId": null,
    "name": "Keywords",
    "group": "Oil Painting & Canvas Stretching",
    "keywords": [
      "oil paint tube",
      "linseed oil medium",
      "canvas stretching pliers",
      "raw linen canvas roll",
      "palette knife set"
    ]
  },
  {
    "id": 1055,
    "originalId": 623,
    "name": "Watercolor & Plein Air Painting",
    "group": "Watercolor & Plein Air Painting",
    "keywords": [
      "watercolor pan set",
      "kolinsky mop brush",
      "cold press watercolor paper",
      "plein air easel",
      "masking fluid"
    ]
  },
  {
    "id": 1056,
    "originalId": null,
    "name": "Keywords",
    "group": "Watercolor & Plein Air Painting",
    "keywords": [
      "watercolor pan set",
      "kolinsky mop brush",
      "cold press watercolor paper",
      "plein air easel",
      "masking fluid"
    ]
  },
  {
    "id": 1057,
    "originalId": 624,
    "name": "Acrylic Pouring & Fluid Art",
    "group": "Acrylic Pouring & Fluid Art",
    "keywords": [
      "acrylic pouring medium",
      "silicone oil cell activator",
      "fluid art canvas",
      "heat torch bubble remover",
      "pouring strainer"
    ]
  },
  {
    "id": 1058,
    "originalId": null,
    "name": "Keywords",
    "group": "Acrylic Pouring & Fluid Art",
    "keywords": [
      "acrylic pouring medium",
      "silicone oil cell activator",
      "fluid art canvas",
      "heat torch bubble remover",
      "pouring strainer"
    ]
  },
  {
    "id": 1059,
    "originalId": 625,
    "name": "Airbrushing & Custom Automotive Paint",
    "group": "Airbrushing & Custom Automotive Paint",
    "keywords": [
      "dual action airbrush",
      "airbrush compressor",
      "automotive candy paint",
      "masking stencil film",
      "airbrush cleaning pot"
    ]
  },
  {
    "id": 1060,
    "originalId": null,
    "name": "Keywords",
    "group": "Airbrushing & Custom Automotive Paint",
    "keywords": [
      "dual action airbrush",
      "airbrush compressor",
      "automotive candy paint",
      "masking stencil film",
      "airbrush cleaning pot"
    ]
  },
  {
    "id": 1061,
    "originalId": 626,
    "name": "Pinstriping & Custom Lettering",
    "group": "Pinstriping & Custom Lettering",
    "keywords": [
      "pinstriping sword brush",
      "one shot lettering enamel",
      "mahl stick",
      "pinstripe layout tape",
      "custom lettering commission"
    ]
  },
  {
    "id": 1062,
    "originalId": null,
    "name": "Keywords",
    "group": "Pinstriping & Custom Lettering",
    "keywords": [
      "pinstriping sword brush",
      "one shot lettering enamel",
      "mahl stick",
      "pinstripe layout tape",
      "custom lettering commission"
    ]
  },
  {
    "id": 1063,
    "originalId": 627,
    "name": "Sign Painting & Gold Leaf Gilding",
    "group": "Sign Painting & Gold Leaf Gilding",
    "keywords": [
      "gold leaf sizing",
      "gilders tip brush",
      "patent gold leaf book",
      "sign painters enamel",
      "glass gilding backup paint"
    ]
  },
  {
    "id": 1064,
    "originalId": null,
    "name": "Keywords",
    "group": "Sign Painting & Gold Leaf Gilding",
    "keywords": [
      "gold leaf sizing",
      "gilders tip brush",
      "patent gold leaf book",
      "sign painters enamel",
      "glass gilding backup paint"
    ]
  },
  {
    "id": 1065,
    "originalId": 628,
    "name": "Pyrography & Wood Burning Art",
    "group": "Pyrography & Wood Burning Art",
    "keywords": [
      "pyrography pen adjustable heat",
      "wood burning wire tip",
      "basswood blank plaque",
      "graphite transfer paper",
      "pyrography shading tool"
    ]
  },
  {
    "id": 1066,
    "originalId": null,
    "name": "Keywords",
    "group": "Pyrography & Wood Burning Art",
    "keywords": [
      "pyrography pen adjustable heat",
      "wood burning wire tip",
      "basswood blank plaque",
      "graphite transfer paper",
      "pyrography shading tool"
    ]
  },
  {
    "id": 1067,
    "originalId": 629,
    "name": "Wood Carving & Whittling",
    "group": "Wood Carving & Whittling",
    "keywords": [
      "wood carving gouge",
      "whittling knife detail",
      "basswood carving block",
      "carving leather strop",
      "honing compound"
    ]
  },
  {
    "id": 1068,
    "originalId": null,
    "name": "Keywords",
    "group": "Wood Carving & Whittling",
    "keywords": [
      "wood carving gouge",
      "whittling knife detail",
      "basswood carving block",
      "carving leather strop",
      "honing compound"
    ]
  },
  {
    "id": 1069,
    "originalId": 630,
    "name": "Chip Carving & Relief Woodwork",
    "group": "Chip Carving & Relief Woodwork",
    "keywords": [
      "chip carving knife",
      "relief carving mallet",
      "basswood plate blank",
      "chip carving pattern",
      "wood finish oil"
    ]
  },
  {
    "id": 1070,
    "originalId": null,
    "name": "Keywords",
    "group": "Chip Carving & Relief Woodwork",
    "keywords": [
      "chip carving knife",
      "relief carving mallet",
      "basswood plate blank",
      "chip carving pattern",
      "wood finish oil"
    ]
  },
  {
    "id": 1071,
    "originalId": 631,
    "name": "Chainsaw Carving & Large Scale Wood Art",
    "group": "Chainsaw Carving & Large Scale Wood Art",
    "keywords": [
      "chainsaw carving bar carving",
      "safety chaps chainsaw",
      "angle grinder sanding disc",
      "log sealing wax",
      "outdoor spar urethane"
    ]
  },
  {
    "id": 1072,
    "originalId": null,
    "name": "Keywords",
    "group": "Chainsaw Carving & Large Scale Wood Art",
    "keywords": [
      "chainsaw carving bar carving",
      "safety chaps chainsaw",
      "angle grinder sanding disc",
      "log sealing wax",
      "outdoor spar urethane"
    ]
  },
  {
    "id": 1073,
    "originalId": 632,
    "name": "Traditional Carpentry & Joinery",
    "group": "Traditional Carpentry & Joinery",
    "keywords": [
      "Japanese pull saw dozuki",
      "marking gauge",
      "mortise chisel",
      "block plane",
      "dovetail marker"
    ]
  },
  {
    "id": 1074,
    "originalId": null,
    "name": "Keywords",
    "group": "Traditional Carpentry & Joinery",
    "keywords": [
      "Japanese pull saw dozuki",
      "marking gauge",
      "mortise chisel",
      "block plane",
      "dovetail marker"
    ]
  },
  {
    "id": 1075,
    "originalId": 633,
    "name": "Cabinetry & Fine Furniture Making",
    "group": "Cabinetry & Fine Furniture Making",
    "keywords": [
      "cabinet table saw",
      "router bit set profile",
      "cabinet grade plywood",
      "concealed hinge jig",
      "furniture veneer sheet"
    ]
  },
  {
    "id": 1076,
    "originalId": null,
    "name": "Keywords",
    "group": "Cabinetry & Fine Furniture Making",
    "keywords": [
      "cabinet table saw",
      "router bit set profile",
      "cabinet grade plywood",
      "concealed hinge jig",
      "furniture veneer sheet"
    ]
  },
  {
    "id": 1077,
    "originalId": 634,
    "name": "Woodturning & Lathe Arts",
    "group": "Woodturning & Lathe Arts",
    "keywords": [
      "wood lathe variable speed",
      "bowl gouge",
      "roughing gouge",
      "woodturning faceplate",
      "friction polish"
    ]
  },
  {
    "id": 1078,
    "originalId": null,
    "name": "Keywords",
    "group": "Woodturning & Lathe Arts",
    "keywords": [
      "wood lathe variable speed",
      "bowl gouge",
      "roughing gouge",
      "woodturning faceplate",
      "friction polish"
    ]
  },
  {
    "id": 1079,
    "originalId": 635,
    "name": "Intarsia, Marquetry & Wood Inlay",
    "group": "Intarsia, Marquetry & Wood Inlay",
    "keywords": [
      "marquetry veneer pack",
      "scroll saw blade fine",
      "intarsia pattern",
      "veneer tape",
      "fret saw"
    ]
  },
  {
    "id": 1080,
    "originalId": null,
    "name": "Keywords",
    "group": "Intarsia, Marquetry & Wood Inlay",
    "keywords": [
      "marquetry veneer pack",
      "scroll saw blade fine",
      "intarsia pattern",
      "veneer tape",
      "fret saw"
    ]
  },
  {
    "id": 1081,
    "originalId": 636,
    "name": "Scroll Sawing & Fretwork",
    "group": "Scroll Sawing & Fretwork",
    "keywords": [
      "variable speed scroll saw",
      "reverse tooth scroll blade",
      "fretwork pattern",
      "spiral saw blade",
      "scroll saw foot pedal"
    ]
  },
  {
    "id": 1082,
    "originalId": null,
    "name": "Keywords",
    "group": "Scroll Sawing & Fretwork",
    "keywords": [
      "variable speed scroll saw",
      "reverse tooth scroll blade",
      "fretwork pattern",
      "spiral saw blade",
      "scroll saw foot pedal"
    ]
  },
  {
    "id": 1083,
    "originalId": 637,
    "name": "Luthier & Acoustic Guitar Building",
    "group": "Luthier & Acoustic Guitar Building",
    "keywords": [
      "guitar fret wire",
      "acoustic guitar soundboard",
      "fret crowning file",
      "guitar truss rod",
      "luthier radius block"
    ]
  },
  {
    "id": 1084,
    "originalId": null,
    "name": "Keywords",
    "group": "Luthier & Acoustic Guitar Building",
    "keywords": [
      "guitar fret wire",
      "acoustic guitar soundboard",
      "fret crowning file",
      "guitar truss rod",
      "luthier radius block"
    ]
  },
  {
    "id": 1085,
    "originalId": 638,
    "name": "Electric Guitar Customization & Wiring",
    "group": "Electric Guitar Customization & Wiring",
    "keywords": [
      "guitar pickup humbucker",
      "guitar potentiometer",
      "copper shielding tape",
      "guitar soldering wire",
      "electric guitar body blank"
    ]
  },
  {
    "id": 1086,
    "originalId": null,
    "name": "Keywords",
    "group": "Electric Guitar Customization & Wiring",
    "keywords": [
      "guitar pickup humbucker",
      "guitar potentiometer",
      "copper shielding tape",
      "guitar soldering wire",
      "electric guitar body blank"
    ]
  },
  {
    "id": 1087,
    "originalId": 639,
    "name": "Drum Building & Percussion Fabrication",
    "group": "Drum Building & Percussion Fabrication",
    "keywords": [
      "drum shell maple ply",
      "drum lug hardware",
      "snare wire",
      "drum hoop rim",
      "drum bearing edge router bit"
    ]
  },
  {
    "id": 1088,
    "originalId": null,
    "name": "Keywords",
    "group": "Drum Building & Percussion Fabrication",
    "keywords": [
      "drum shell maple ply",
      "drum lug hardware",
      "snare wire",
      "drum hoop rim",
      "drum bearing edge router bit"
    ]
  },
  {
    "id": 1089,
    "originalId": 640,
    "name": "Brass Instrument Repair & Dent Removal",
    "group": "Brass Instrument Repair & Dent Removal",
    "keywords": [
      "brass dent ball",
      "trumpet valve oil",
      "trombone slide grease",
      "brass polishing wheel",
      "instrument soldering torch"
    ]
  },
  {
    "id": 1090,
    "originalId": null,
    "name": "Keywords",
    "group": "Brass Instrument Repair & Dent Removal",
    "keywords": [
      "brass dent ball",
      "trumpet valve oil",
      "trombone slide grease",
      "brass polishing wheel",
      "instrument soldering torch"
    ]
  },
  {
    "id": 1091,
    "originalId": 641,
    "name": "Woodwind Instrument Re-Pads & Servicing",
    "group": "Woodwind Instrument Re-Pads & Servicing",
    "keywords": [
      "saxophone pad set",
      "woodwind cork sheet",
      "clarinet spring hook",
      "pad leveling tool",
      "key oil woodwind"
    ]
  },
  {
    "id": 1092,
    "originalId": null,
    "name": "Keywords",
    "group": "Woodwind Instrument Re-Pads & Servicing",
    "keywords": [
      "saxophone pad set",
      "woodwind cork sheet",
      "clarinet spring hook",
      "pad leveling tool",
      "key oil woodwind"
    ]
  },
  {
    "id": 1093,
    "originalId": 642,
    "name": "Piano Tuning & Action Regulation",
    "group": "Piano Tuning & Action Regulation",
    "keywords": [
      "piano tuning hammer",
      "tuning mute wedge",
      "piano action felt",
      "capstan regulating tool",
      "piano pitch raise fee"
    ]
  },
  {
    "id": 1094,
    "originalId": null,
    "name": "Keywords",
    "group": "Piano Tuning & Action Regulation",
    "keywords": [
      "piano tuning hammer",
      "tuning mute wedge",
      "piano action felt",
      "capstan regulating tool",
      "piano pitch raise fee"
    ]
  },
  {
    "id": 1095,
    "originalId": 643,
    "name": "Pipe Organ Voicing & Tuning",
    "group": "Pipe Organ Voicing & Tuning",
    "keywords": [
      "organ tuning cone",
      "flue pipe voicing tool",
      "organ leather valve",
      "windchest repair seal",
      "organ blower maintenance"
    ]
  },
  {
    "id": 1096,
    "originalId": null,
    "name": "Keywords",
    "group": "Pipe Organ Voicing & Tuning",
    "keywords": [
      "organ tuning cone",
      "flue pipe voicing tool",
      "organ leather valve",
      "windchest repair seal",
      "organ blower maintenance"
    ]
  },
  {
    "id": 1097,
    "originalId": 644,
    "name": "Synthesizer Repair & Eurorack DIY",
    "group": "Synthesizer Repair & Eurorack DIY",
    "keywords": [
      "eurorack blank panel",
      "synthesizer patch cable",
      "pcb soldering kit synth",
      "voltage controlled oscillator chip",
      "synth knob replacement"
    ]
  },
  {
    "id": 1098,
    "originalId": null,
    "name": "Keywords",
    "group": "Synthesizer Repair & Eurorack DIY",
    "keywords": [
      "eurorack blank panel",
      "synthesizer patch cable",
      "pcb soldering kit synth",
      "voltage controlled oscillator chip",
      "synth knob replacement"
    ]
  },
  {
    "id": 1099,
    "originalId": 645,
    "name": "Audio Engineering & Studio Mastering",
    "group": "Audio Engineering & Studio Mastering",
    "keywords": [
      "studio monitor speaker",
      "acoustic treatment panel",
      "mastering equalizer hardware",
      "condenser microphone capsule",
      "daw software upgrade"
    ]
  },
  {
    "id": 1100,
    "originalId": null,
    "name": "Keywords",
    "group": "Audio Engineering & Studio Mastering",
    "keywords": [
      "studio monitor speaker",
      "acoustic treatment panel",
      "mastering equalizer hardware",
      "condenser microphone capsule",
      "daw software upgrade"
    ]
  },
  {
    "id": 1101,
    "originalId": 646,
    "name": "Foley Artistry & Sound Effects Recording",
    "group": "Foley Artistry & Sound Effects Recording",
    "keywords": [
      "foley footstep prop",
      "field recorder shotgun mic",
      "wind blimp microphone",
      "foley pit gravel",
      "sound effects library license"
    ]
  },
  {
    "id": 1102,
    "originalId": null,
    "name": "Keywords",
    "group": "Foley Artistry & Sound Effects Recording",
    "keywords": [
      "foley footstep prop",
      "field recorder shotgun mic",
      "wind blimp microphone",
      "foley pit gravel",
      "sound effects library license"
    ]
  },
  {
    "id": 1103,
    "originalId": 647,
    "name": "Vinyl Record Pressing & Lathe Cutting",
    "group": "Vinyl Record Pressing & Lathe Cutting",
    "keywords": [
      "vinyl pressing stamper",
      "lacquer cutting stylus",
      "pvc record pellet",
      "test pressing fee",
      "record jacket cardboard"
    ]
  },
  {
    "id": 1104,
    "originalId": null,
    "name": "Keywords",
    "group": "Vinyl Record Pressing & Lathe Cutting",
    "keywords": [
      "vinyl pressing stamper",
      "lacquer cutting stylus",
      "pvc record pellet",
      "test pressing fee",
      "record jacket cardboard"
    ]
  },
  {
    "id": 1105,
    "originalId": 648,
    "name": "Cassette Tape Duplication & Splicing",
    "group": "Cassette Tape Duplication & Splicing",
    "keywords": [
      "cassette duplicator machine",
      "blank audio cassette bulk",
      "splicing block tape",
      "cassette head cleaner",
      "magnetic tape demagnetizer"
    ]
  },
  {
    "id": 1106,
    "originalId": null,
    "name": "Keywords",
    "group": "Cassette Tape Duplication & Splicing",
    "keywords": [
      "cassette duplicator machine",
      "blank audio cassette bulk",
      "splicing block tape",
      "cassette head cleaner",
      "magnetic tape demagnetizer"
    ]
  },
  {
    "id": 1107,
    "originalId": 649,
    "name": "Vintage Hi-Fi Restoration & Tube Amps",
    "group": "Vintage Hi-Fi Restoration & Tube Amps",
    "keywords": [
      "vacuum tube amplifier",
      "turntable cartridge needle",
      "vintage receiver capacitor",
      "speaker refoaming kit",
      "contact cleaner spray"
    ]
  },
  {
    "id": 1108,
    "originalId": null,
    "name": "Keywords",
    "group": "Vintage Hi-Fi Restoration & Tube Amps",
    "keywords": [
      "vacuum tube amplifier",
      "turntable cartridge needle",
      "vintage receiver capacitor",
      "speaker refoaming kit",
      "contact cleaner spray"
    ]
  },
  {
    "id": 1109,
    "originalId": 650,
    "name": "Audiophile Cables & Custom Wire Sleeving",
    "group": "Audiophile Cables & Custom Wire Sleeving",
    "keywords": [
      "oxygen free copper speaker wire",
      "braided cable sleeving",
      "audiophile banana plug",
      "silver solder wire",
      "cable heat shrink tubing"
    ]
  },
  {
    "id": 1110,
    "originalId": null,
    "name": "Keywords",
    "group": "Audiophile Cables & Custom Wire Sleeving",
    "keywords": [
      "oxygen free copper speaker wire",
      "braided cable sleeving",
      "audiophile banana plug",
      "silver solder wire",
      "cable heat shrink tubing"
    ]
  },
  {
    "id": 1111,
    "originalId": 651,
    "name": "Professional DJ Equipment & Turntablism",
    "group": "Professional DJ Equipment & Turntablism",
    "keywords": [
      "dj controller mixer",
      "direct drive turntable",
      "dj slipmat",
      "control vinyl timecode",
      "dj headphone pad"
    ]
  },
  {
    "id": 1112,
    "originalId": null,
    "name": "Keywords",
    "group": "Professional DJ Equipment & Turntablism",
    "keywords": [
      "dj controller mixer",
      "direct drive turntable",
      "dj slipmat",
      "control vinyl timecode",
      "dj headphone pad"
    ]
  },
  {
    "id": 1113,
    "originalId": 652,
    "name": "Stage Lighting & DMX Control",
    "group": "Stage Lighting & DMX Control",
    "keywords": [
      "dmx lighting controller",
      "led par can light",
      "moving head beam",
      "stage lighting truss",
      "lighting safety cable"
    ]
  },
  {
    "id": 1114,
    "originalId": null,
    "name": "Keywords",
    "group": "Stage Lighting & DMX Control",
    "keywords": [
      "dmx lighting controller",
      "led par can light",
      "moving head beam",
      "stage lighting truss",
      "lighting safety cable"
    ]
  },
  {
    "id": 1115,
    "originalId": 653,
    "name": "Pyrotechnics & Special Effects (SFX)",
    "group": "Pyrotechnics & Special Effects (SFX)",
    "keywords": [
      "stage pyro flash pot",
      "theatrical smoke machine",
      "sparkular powder",
      "special effect detonator",
      "sfx technician fee"
    ]
  },
  {
    "id": 1116,
    "originalId": null,
    "name": "Keywords",
    "group": "Pyrotechnics & Special Effects (SFX)",
    "keywords": [
      "stage pyro flash pot",
      "theatrical smoke machine",
      "sparkular powder",
      "special effect detonator",
      "sfx technician fee"
    ]
  },
  {
    "id": 1117,
    "originalId": 654,
    "name": "Theatrical Rigging & Fly System Maintenance",
    "group": "Theatrical Rigging & Fly System Maintenance",
    "keywords": [
      "theatrical rigging block",
      "fly system counterweight",
      "stage curtain track",
      "rigging shackle stage",
      "theatrical rope hemp"
    ]
  },
  {
    "id": 1118,
    "originalId": null,
    "name": "Keywords",
    "group": "Theatrical Rigging & Fly System Maintenance",
    "keywords": [
      "theatrical rigging block",
      "fly system counterweight",
      "stage curtain track",
      "rigging shackle stage",
      "theatrical rope hemp"
    ]
  },
  {
    "id": 1119,
    "originalId": 655,
    "name": "Stage Scenery Construction & Flat Building",
    "group": "Stage Scenery Construction & Flat Building",
    "keywords": [
      "theatrical flat frame",
      "muslin cloth backdrop",
      "stage bracing hardware",
      "scenic paint flame retardant",
      "stage screw peg"
    ]
  },
  {
    "id": 1120,
    "originalId": null,
    "name": "Keywords",
    "group": "Stage Scenery Construction & Flat Building",
    "keywords": [
      "theatrical flat frame",
      "muslin cloth backdrop",
      "stage bracing hardware",
      "scenic paint flame retardant",
      "stage screw peg"
    ]
  },
  {
    "id": 1121,
    "originalId": 656,
    "name": "Costume Design & Theatrical Wardrobe",
    "group": "Costume Design & Theatrical Wardrobe",
    "keywords": [
      "theatrical costume pattern",
      "heavy duty sewing machine",
      "costume fabric roll",
      "corset boning wire",
      "theatrical wardrobe rack"
    ]
  },
  {
    "id": 1122,
    "originalId": null,
    "name": "Keywords",
    "group": "Costume Design & Theatrical Wardrobe",
    "keywords": [
      "theatrical costume pattern",
      "heavy duty sewing machine",
      "costume fabric roll",
      "corset boning wire",
      "theatrical wardrobe rack"
    ]
  },
  {
    "id": 1123,
    "originalId": 657,
    "name": "Theatrical Makeup & Prosthetic Application",
    "group": "Theatrical Makeup & Prosthetic Application",
    "keywords": [
      "spirit gum adhesive",
      "theatrical blood stage",
      "fx latex liquid",
      "crepe hair beard",
      "makeup setting spray pro"
    ]
  },
  {
    "id": 1124,
    "originalId": null,
    "name": "Keywords",
    "group": "Theatrical Makeup & Prosthetic Application",
    "keywords": [
      "spirit gum adhesive",
      "theatrical blood stage",
      "fx latex liquid",
      "crepe hair beard",
      "makeup setting spray pro"
    ]
  },
  {
    "id": 1125,
    "originalId": 658,
    "name": "Wig Making & Hair Ventilating",
    "group": "Wig Making & Hair Ventilating",
    "keywords": [
      "wig ventilating needle",
      "lace front wig base",
      "human hair bulk bundle",
      "wig canvas block head",
      "wig styling steamer"
    ]
  },
  {
    "id": 1126,
    "originalId": null,
    "name": "Keywords",
    "group": "Wig Making & Hair Ventilating",
    "keywords": [
      "wig ventilating needle",
      "lace front wig base",
      "human hair bulk bundle",
      "wig canvas block head",
      "wig styling steamer"
    ]
  },
  {
    "id": 1127,
    "originalId": 659,
    "name": "Millinery & Theatrical Hat Making",
    "group": "Millinery & Theatrical Hat Making",
    "keywords": [
      "buckram hat frame",
      "hat sizing block wooden",
      "millinery petersham",
      "hat stiffener spray",
      "millinery wire covered"
    ]
  },
  {
    "id": 1128,
    "originalId": null,
    "name": "Keywords",
    "group": "Millinery & Theatrical Hat Making",
    "keywords": [
      "buckram hat frame",
      "hat sizing block wooden",
      "millinery petersham",
      "hat stiffener spray",
      "millinery wire covered"
    ]
  },
  {
    "id": 1129,
    "originalId": 660,
    "name": "Mask Making & Commedia dell'arte",
    "group": "Mask Making & Commedia dell'arte",
    "keywords": [
      "leather mask mold",
      "papier mache mask base",
      "commedia mask half",
      "mask sculpting clay",
      "mask painting acrylic"
    ]
  },
  {
    "id": 1130,
    "originalId": null,
    "name": "Keywords",
    "group": "Mask Making & Commedia dell'arte",
    "keywords": [
      "leather mask mold",
      "papier mache mask base",
      "commedia mask half",
      "mask sculpting clay",
      "mask painting acrylic"
    ]
  },
  {
    "id": 1131,
    "originalId": 661,
    "name": "Puppetry Construction & Marionette Stringing",
    "group": "Puppetry Construction & Marionette Stringing",
    "keywords": [
      "marionette control bar",
      "puppet joint pin",
      "puppet mouth plate",
      "puppetry foam bulk",
      "marionette string nylon"
    ]
  },
  {
    "id": 1132,
    "originalId": null,
    "name": "Keywords",
    "group": "Puppetry Construction & Marionette Stringing",
    "keywords": [
      "marionette control bar",
      "puppet joint pin",
      "puppet mouth plate",
      "puppetry foam bulk",
      "marionette string nylon"
    ]
  },
  {
    "id": 1133,
    "originalId": 662,
    "name": "Animatronics & Robotic Prop Design",
    "group": "Animatronics & Robotic Prop Design",
    "keywords": [
      "animatronic eye mechanism",
      "pneumatic linear actuator",
      "servo controller board animatronic",
      "silicone prop skin",
      "animatronic skeleton frame"
    ]
  },
  {
    "id": 1134,
    "originalId": null,
    "name": "Keywords",
    "group": "Animatronics & Robotic Prop Design",
    "keywords": [
      "animatronic eye mechanism",
      "pneumatic linear actuator",
      "servo controller board animatronic",
      "silicone prop skin",
      "animatronic skeleton frame"
    ]
  },
  {
    "id": 1135,
    "originalId": 663,
    "name": "Haunted House Scare Props & Pneumatics",
    "group": "Haunted House Scare Props & Pneumatics",
    "keywords": [
      "jump scare pneumatic cylinder",
      "haunted house fog chiller",
      "prop trigger motion sensor",
      "strobe light controller dmx",
      "scare actor mask"
    ]
  },
  {
    "id": 1136,
    "originalId": null,
    "name": "Keywords",
    "group": "Haunted House Scare Props & Pneumatics",
    "keywords": [
      "jump scare pneumatic cylinder",
      "haunted house fog chiller",
      "prop trigger motion sensor",
      "strobe light controller dmx",
      "scare actor mask"
    ]
  },
  {
    "id": 1137,
    "originalId": 664,
    "name": "Escape Room Puzzle Fabrication & RFID",
    "group": "Escape Room Puzzle Fabrication & RFID",
    "keywords": [
      "escape room rfid reader",
      "maglock 600lb",
      "puzzle logic controller board",
      "escape room prop switch",
      "secret door hinge"
    ]
  },
  {
    "id": 1138,
    "originalId": null,
    "name": "Keywords",
    "group": "Escape Room Puzzle Fabrication & RFID",
    "keywords": [
      "escape room rfid reader",
      "maglock 600lb",
      "puzzle logic controller board",
      "escape room prop switch",
      "secret door hinge"
    ]
  },
  {
    "id": 1139,
    "originalId": 665,
    "name": "Immersive Theater & ARG (Alternate Reality Game)",
    "group": "Immersive Theater & ARG (Alternate Reality Game)",
    "keywords": [
      "arg website hosting",
      "immersive theater actor fee",
      "arg prop drop envelope",
      "hidden camera surveillance arg",
      "arg puzzle clue"
    ]
  },
  {
    "id": 1140,
    "originalId": null,
    "name": "Keywords",
    "group": "Immersive Theater & ARG (Alternate Reality Game)",
    "keywords": [
      "arg website hosting",
      "immersive theater actor fee",
      "arg prop drop envelope",
      "hidden camera surveillance arg",
      "arg puzzle clue"
    ]
  },
  {
    "id": 1141,
    "originalId": 666,
    "name": "Laser Tag Arena Infrastructure & Vests",
    "group": "Laser Tag Arena Infrastructure & Vests",
    "keywords": [
      "laser tag vest sensor",
      "phaser blaster ir",
      "laser tag arena obstacle",
      "blacklight uv paint arena",
      "arena scoring software"
    ]
  },
  {
    "id": 1142,
    "originalId": null,
    "name": "Keywords",
    "group": "Laser Tag Arena Infrastructure & Vests",
    "keywords": [
      "laser tag vest sensor",
      "phaser blaster ir",
      "laser tag arena obstacle",
      "blacklight uv paint arena",
      "arena scoring software"
    ]
  },
  {
    "id": 1143,
    "originalId": 667,
    "name": "Paintball Field Netting & Air Systems",
    "group": "Paintball Field Netting & Air Systems",
    "keywords": [
      "paintball safety netting",
      "4500psi air compressor paintball",
      "bulk paintball box",
      "rental paintball marker",
      "field turf turf"
    ]
  },
  {
    "id": 1144,
    "originalId": null,
    "name": "Keywords",
    "group": "Paintball Field Netting & Air Systems",
    "keywords": [
      "paintball safety netting",
      "4500psi air compressor paintball",
      "bulk paintball box",
      "rental paintball marker",
      "field turf turf"
    ]
  },
  {
    "id": 1145,
    "originalId": 668,
    "name": "Airsoft MilSim Event Logistics & Props",
    "group": "Airsoft MilSim Event Logistics & Props",
    "keywords": [
      "milsim event ticket",
      "airsoft prop bomb timer",
      "blank firing grenade",
      "airsoft green gas bulk",
      "tactical objective prop"
    ]
  },
  {
    "id": 1146,
    "originalId": null,
    "name": "Keywords",
    "group": "Airsoft MilSim Event Logistics & Props",
    "keywords": [
      "milsim event ticket",
      "airsoft prop bomb timer",
      "blank firing grenade",
      "airsoft green gas bulk",
      "tactical objective prop"
    ]
  },
  {
    "id": 1147,
    "originalId": 669,
    "name": "Go-Kart Track Maintenance & Timing",
    "group": "Go-Kart Track Maintenance & Timing",
    "keywords": [
      "go kart tire slick",
      "kart track timing loop",
      "go kart bumper rubber",
      "kart engine rebuild kit",
      "track flag set"
    ]
  },
  {
    "id": 1148,
    "originalId": null,
    "name": "Keywords",
    "group": "Go-Kart Track Maintenance & Timing",
    "keywords": [
      "go kart tire slick",
      "kart track timing loop",
      "go kart bumper rubber",
      "kart engine rebuild kit",
      "track flag set"
    ]
  },
  {
    "id": 1149,
    "originalId": 670,
    "name": "Mini Golf Course Obstacles & Turf",
    "group": "Mini Golf Course Obstacles & Turf",
    "keywords": [
      "mini golf putter bulk",
      "novelty golf ball bulk",
      "mini golf windmill prop",
      "putting green turf roll",
      "mini golf hole cup"
    ]
  },
  {
    "id": 1150,
    "originalId": null,
    "name": "Keywords",
    "group": "Mini Golf Course Obstacles & Turf",
    "keywords": [
      "mini golf putter bulk",
      "novelty golf ball bulk",
      "mini golf windmill prop",
      "putting green turf roll",
      "mini golf hole cup"
    ]
  },
  {
    "id": 1151,
    "originalId": 671,
    "name": "Bowling Alley Pinsetter & Lane Care",
    "group": "Bowling Alley Pinsetter & Lane Care",
    "keywords": [
      "bowling pinsetter part",
      "lane conditioning oil",
      "bowling pin bulk set",
      "bowling shoe rental bulk",
      "bowling ball return belt"
    ]
  },
  {
    "id": 1152,
    "originalId": null,
    "name": "Keywords",
    "group": "Bowling Alley Pinsetter & Lane Care",
    "keywords": [
      "bowling pinsetter part",
      "lane conditioning oil",
      "bowling pin bulk set",
      "bowling shoe rental bulk",
      "bowling ball return belt"
    ]
  },
  {
    "id": 1153,
    "originalId": 672,
    "name": "Arcade Cabinet Restoration & CRT Repair",
    "group": "Arcade Cabinet Restoration & CRT Repair",
    "keywords": [
      "arcade crt monitor chassis",
      "jamma wiring harness",
      "arcade joystick microswitch",
      "arcade coin mech",
      "arcade marquee marquee"
    ]
  },
  {
    "id": 1154,
    "originalId": null,
    "name": "Keywords",
    "group": "Arcade Cabinet Restoration & CRT Repair",
    "keywords": [
      "arcade crt monitor chassis",
      "jamma wiring harness",
      "arcade joystick microswitch",
      "arcade coin mech",
      "arcade marquee marquee"
    ]
  },
  {
    "id": 1155,
    "originalId": 673,
    "name": "Pinball Machine Playfield & Flipper Parts",
    "group": "Pinball Machine Playfield & Flipper Parts",
    "keywords": [
      "pinball flipper rebuild kit",
      "pinball playfield rubber ring",
      "pinball pop bumper part",
      "pinball led bulb kit",
      "pinball glass sheet"
    ]
  },
  {
    "id": 1156,
    "originalId": null,
    "name": "Keywords",
    "group": "Pinball Machine Playfield & Flipper Parts",
    "keywords": [
      "pinball flipper rebuild kit",
      "pinball playfield rubber ring",
      "pinball pop bumper part",
      "pinball led bulb kit",
      "pinball glass sheet"
    ]
  },
  {
    "id": 1157,
    "originalId": 674,
    "name": "Claw Machine & Redemption Prize Plushies",
    "group": "Claw Machine & Redemption Prize Plushies",
    "keywords": [
      "claw machine gantry",
      "redemption ticket paper",
      "bulk plush toy claw machine",
      "claw machine control board",
      "prize capsule bulk"
    ]
  },
  {
    "id": 1158,
    "originalId": null,
    "name": "Keywords",
    "group": "Claw Machine & Redemption Prize Plushies",
    "keywords": [
      "claw machine gantry",
      "redemption ticket paper",
      "bulk plush toy claw machine",
      "claw machine control board",
      "prize capsule bulk"
    ]
  },
  {
    "id": 1159,
    "originalId": 675,
    "name": "Virtual Reality Arcade & Haptic Suit",
    "group": "Virtual Reality Arcade & Haptic Suit",
    "keywords": [
      "vr headset commercial license",
      "vr haptic vest",
      "vr treadmill omnidirectional",
      "vr controller tracker",
      "vr hygiene face mask"
    ]
  },
  {
    "id": 1160,
    "originalId": null,
    "name": "Keywords",
    "group": "Virtual Reality Arcade & Haptic Suit",
    "keywords": [
      "vr headset commercial license",
      "vr haptic vest",
      "vr treadmill omnidirectional",
      "vr controller tracker",
      "vr hygiene face mask"
    ]
  },
  {
    "id": 1161,
    "originalId": 676,
    "name": "Escape Room Franchise Fee & Licensing",
    "group": "Escape Room Franchise Fee & Licensing",
    "keywords": [
      "escape room franchise fee",
      "room design blueprint license",
      "escape room waiver software",
      "franchisee training manual",
      "escape room marketing kit"
    ]
  },
  {
    "id": 1162,
    "originalId": null,
    "name": "Keywords",
    "group": "Escape Room Franchise Fee & Licensing",
    "keywords": [
      "escape room franchise fee",
      "room design blueprint license",
      "escape room waiver software",
      "franchisee training manual",
      "escape room marketing kit"
    ]
  },
  {
    "id": 1163,
    "originalId": 677,
    "name": "Trampoline Park Spring & Mat Replacement",
    "group": "Trampoline Park Spring & Mat Replacement",
    "keywords": [
      "commercial trampoline spring",
      "trampoline mat replacement",
      "foam pit block bulk",
      "trampoline safety pad",
      "trampoline park grip sock"
    ]
  },
  {
    "id": 1164,
    "originalId": null,
    "name": "Keywords",
    "group": "Trampoline Park Spring & Mat Replacement",
    "keywords": [
      "commercial trampoline spring",
      "trampoline mat replacement",
      "foam pit block bulk",
      "trampoline safety pad",
      "trampoline park grip sock"
    ]
  },
  {
    "id": 1165,
    "originalId": 678,
    "name": "Indoor Climbing Wall & Bouldering Holds",
    "group": "Indoor Climbing Wall & Bouldering Holds",
    "keywords": [
      "climbing hold resin bulk",
      "t-nut climbing wall",
      "climbing auto belay device",
      "bouldering crash mat gym",
      "climbing route tape"
    ]
  },
  {
    "id": 1166,
    "originalId": null,
    "name": "Keywords",
    "group": "Indoor Climbing Wall & Bouldering Holds",
    "keywords": [
      "climbing hold resin bulk",
      "t-nut climbing wall",
      "climbing auto belay device",
      "bouldering crash mat gym",
      "climbing route tape"
    ]
  },
  {
    "id": 1167,
    "originalId": 679,
    "name": "Ninja Warrior Course & Truss Rigging",
    "group": "Ninja Warrior Course & Truss Rigging",
    "keywords": [
      "ninja warrior truss structure",
      "salmon ladder rung",
      "ninja course obstacle hanging",
      "warped wall surface",
      "ninja gym crash pad"
    ]
  },
  {
    "id": 1168,
    "originalId": null,
    "name": "Keywords",
    "group": "Ninja Warrior Course & Truss Rigging",
    "keywords": [
      "ninja warrior truss structure",
      "salmon ladder rung",
      "ninja course obstacle hanging",
      "warped wall surface",
      "ninja gym crash pad"
    ]
  },
  {
    "id": 1169,
    "originalId": 680,
    "name": "Parkour Gym Scaffolding & Vault Boxes",
    "group": "Parkour Gym Scaffolding & Vault Boxes",
    "keywords": [
      "parkour vault box wooden",
      "parkour scaffolding pipe",
      "scaffolding clamp fitting",
      "parkour precision trainer",
      "parkour gym flooring"
    ]
  },
  {
    "id": 1170,
    "originalId": null,
    "name": "Keywords",
    "group": "Parkour Gym Scaffolding & Vault Boxes",
    "keywords": [
      "parkour vault box wooden",
      "parkour scaffolding pipe",
      "scaffolding clamp fitting",
      "parkour precision trainer",
      "parkour gym flooring"
    ]
  },
  {
    "id": 1171,
    "originalId": 681,
    "name": "Gymnastics Equipment & Uneven Bars",
    "group": "Gymnastics Equipment & Uneven Bars",
    "keywords": [
      "uneven bar fiberglass rail",
      "gymnastics pommel horse",
      "gymnastics springboard",
      "gymnastics chalk block bulk",
      "rhythmic gymnastics ribbon"
    ]
  },
  {
    "id": 1172,
    "originalId": null,
    "name": "Keywords",
    "group": "Gymnastics Equipment & Uneven Bars",
    "keywords": [
      "uneven bar fiberglass rail",
      "gymnastics pommel horse",
      "gymnastics springboard",
      "gymnastics chalk block bulk",
      "rhythmic gymnastics ribbon"
    ]
  },
  {
    "id": 1173,
    "originalId": 682,
    "name": "Cheerleading Tumbling Track & Mats",
    "group": "Cheerleading Tumbling Track & Mats",
    "keywords": [
      "cheer tumbling track inflatable",
      "cheer competition mat",
      "cheerleading pom pom bulk",
      "cheer stunt stand",
      "cheer uniform wholesale"
    ]
  },
  {
    "id": 1174,
    "originalId": null,
    "name": "Keywords",
    "group": "Cheerleading Tumbling Track & Mats",
    "keywords": [
      "cheer tumbling track inflatable",
      "cheer competition mat",
      "cheerleading pom pom bulk",
      "cheer stunt stand",
      "cheer uniform wholesale"
    ]
  },
  {
    "id": 1175,
    "originalId": 683,
    "name": "Dance Studio Flooring & Ballet Barres",
    "group": "Dance Studio Flooring & Ballet Barres",
    "keywords": [
      "marley dance floor roll",
      "wall mount ballet barre",
      "dance studio mirror glass",
      "tap dance floor board",
      "dance rosin box"
    ]
  },
  {
    "id": 1176,
    "originalId": null,
    "name": "Keywords",
    "group": "Dance Studio Flooring & Ballet Barres",
    "keywords": [
      "marley dance floor roll",
      "wall mount ballet barre",
      "dance studio mirror glass",
      "tap dance floor board",
      "dance rosin box"
    ]
  },
  {
    "id": 1177,
    "originalId": 684,
    "name": "Ice Skating Rink Refrigeration & Dasher Boards",
    "group": "Ice Skating Rink Refrigeration & Dasher Boards",
    "keywords": [
      "ice rink chiller plant",
      "dasher board acrylic shield",
      "ice resurfacer zamboni blade",
      "ice rink edge edger",
      "ice painting kit"
    ]
  },
  {
    "id": 1178,
    "originalId": null,
    "name": "Keywords",
    "group": "Ice Skating Rink Refrigeration & Dasher Boards",
    "keywords": [
      "ice rink chiller plant",
      "dasher board acrylic shield",
      "ice resurfacer zamboni blade",
      "ice rink edge edger",
      "ice painting kit"
    ]
  },
  {
    "id": 1179,
    "originalId": 685,
    "name": "Roller Skating Rink Wood Floor Finishing",
    "group": "Roller Skating Rink Wood Floor Finishing",
    "keywords": [
      "roller rink floor coating",
      "roller skate rental fleet",
      "skate bearing press",
      "roller rink lighting disco",
      "skate toe stop bulk"
    ]
  },
  {
    "id": 1180,
    "originalId": null,
    "name": "Keywords",
    "group": "Roller Skating Rink Wood Floor Finishing",
    "keywords": [
      "roller rink floor coating",
      "roller skate rental fleet",
      "skate bearing press",
      "roller rink lighting disco",
      "skate toe stop bulk"
    ]
  },
  {
    "id": 1181,
    "originalId": 686,
    "name": "Skatepark Concrete & Coping Steel",
    "group": "Skatepark Concrete & Coping Steel",
    "keywords": [
      "skatepark concrete trowel",
      "steel coping pipe",
      "skatepark ramp transition template",
      "skatepark coping wax",
      "skatepark design fee"
    ]
  },
  {
    "id": 1182,
    "originalId": null,
    "name": "Keywords",
    "group": "Skatepark Concrete & Coping Steel",
    "keywords": [
      "skatepark concrete trowel",
      "steel coping pipe",
      "skatepark ramp transition template",
      "skatepark coping wax",
      "skatepark design fee"
    ]
  },
  {
    "id": 1183,
    "originalId": 687,
    "name": "BMX Dirt Jump Trail Building & Shovels",
    "group": "BMX Dirt Jump Trail Building & Shovels",
    "keywords": [
      "dirt jump shaping shovel",
      "trail building wheelbarrow",
      "dirt jump watering hose",
      "bmx starting gate",
      "bmx trail maintenance fee"
    ]
  },
  {
    "id": 1184,
    "originalId": null,
    "name": "Keywords",
    "group": "BMX Dirt Jump Trail Building & Shovels",
    "keywords": [
      "dirt jump shaping shovel",
      "trail building wheelbarrow",
      "dirt jump watering hose",
      "bmx starting gate",
      "bmx trail maintenance fee"
    ]
  },
  {
    "id": 1185,
    "originalId": 688,
    "name": "Mountain Bike Trail Building & Chainsaws",
    "group": "Mountain Bike Trail Building & Chainsaws",
    "keywords": [
      "trail building pulaski tool",
      "trail rogue hoe",
      "trail building chainsaw",
      "trail bridge lumber",
      "mountain bike trail signage"
    ]
  },
  {
    "id": 1186,
    "originalId": null,
    "name": "Keywords",
    "group": "Mountain Bike Trail Building & Chainsaws",
    "keywords": [
      "trail building pulaski tool",
      "trail rogue hoe",
      "trail building chainsaw",
      "trail bridge lumber",
      "mountain bike trail signage"
    ]
  },
  {
    "id": 1187,
    "originalId": 689,
    "name": "Ski Resort Snowmaking & Snowcat Ops",
    "group": "Ski Resort Snowmaking & Snowcat Ops",
    "keywords": [
      "snowmaking gun fan",
      "snowcat groomer part",
      "ski lift wire rope",
      "ski patrol toboggan",
      "ski resort avalanche explosive"
    ]
  },
  {
    "id": 1188,
    "originalId": null,
    "name": "Keywords",
    "group": "Ski Resort Snowmaking & Snowcat Ops",
    "keywords": [
      "snowmaking gun fan",
      "snowcat groomer part",
      "ski lift wire rope",
      "ski patrol toboggan",
      "ski resort avalanche explosive"
    ]
  },
  {
    "id": 1189,
    "originalId": 690,
    "name": "Surfing Wave Pool Generator & Filtration",
    "group": "Surfing Wave Pool Generator & Filtration",
    "keywords": [
      "wave pool generator pneumatic",
      "wave pool filtration sand",
      "surf pool liner repair",
      "wave pool lifeguard chair",
      "artificial wave software"
    ]
  },
  {
    "id": 1190,
    "originalId": null,
    "name": "Keywords",
    "group": "Surfing Wave Pool Generator & Filtration",
    "keywords": [
      "wave pool generator pneumatic",
      "wave pool filtration sand",
      "surf pool liner repair",
      "wave pool lifeguard chair",
      "artificial wave software"
    ]
  },
  {
    "id": 1191,
    "originalId": 691,
    "name": "Whitewater Rafting Outfitter & Paddles",
    "group": "Whitewater Rafting Outfitter & Paddles",
    "keywords": [
      "commercial whitewater raft",
      "raft paddle bulk",
      "whitewater pfd life jacket",
      "raft repair glue kit",
      "rafting guide license"
    ]
  },
  {
    "id": 1192,
    "originalId": null,
    "name": "Keywords",
    "group": "Whitewater Rafting Outfitter & Paddles",
    "keywords": [
      "commercial whitewater raft",
      "raft paddle bulk",
      "whitewater pfd life jacket",
      "raft repair glue kit",
      "rafting guide license"
    ]
  },
  {
    "id": 1193,
    "originalId": 692,
    "name": "Scuba Diving Center Compressor & Tanks",
    "group": "Scuba Diving Center Compressor & Tanks",
    "keywords": [
      "scuba air compressor high pressure",
      "nitrox membrane system",
      "scuba tank visual inspection tool",
      "dive center rental bcd",
      "dive boat mooring line"
    ]
  },
  {
    "id": 1194,
    "originalId": null,
    "name": "Keywords",
    "group": "Scuba Diving Center Compressor & Tanks",
    "keywords": [
      "scuba air compressor high pressure",
      "nitrox membrane system",
      "scuba tank visual inspection tool",
      "dive center rental bcd",
      "dive boat mooring line"
    ]
  },
  {
    "id": 1195,
    "originalId": 693,
    "name": "Skydiving Dropzone Aircraft & Parachutes",
    "group": "Skydiving Dropzone Aircraft & Parachutes",
    "keywords": [
      "dropzone aircraft fuel",
      "tandem skydive rig",
      "skydiving parachute reserve repack",
      "skydiving altimeter rental",
      "dropzone manifest software"
    ]
  },
  {
    "id": 1196,
    "originalId": null,
    "name": "Keywords",
    "group": "Skydiving Dropzone Aircraft & Parachutes",
    "keywords": [
      "dropzone aircraft fuel",
      "tandem skydive rig",
      "skydiving parachute reserve repack",
      "skydiving altimeter rental",
      "dropzone manifest software"
    ]
  },
  {
    "id": 1197,
    "originalId": 694,
    "name": "Bungee Jumping Crane & Cord Replacement",
    "group": "Bungee Jumping Crane & Cord Replacement",
    "keywords": [
      "bungee jump cord latex",
      "bungee jump ankle harness",
      "bungee crane rental",
      "bungee jump carabiner locking",
      "bungee jump load test"
    ]
  },
  {
    "id": 1198,
    "originalId": null,
    "name": "Keywords",
    "group": "Bungee Jumping Crane & Cord Replacement",
    "keywords": [
      "bungee jump cord latex",
      "bungee jump ankle harness",
      "bungee crane rental",
      "bungee jump carabiner locking",
      "bungee jump load test"
    ]
  },
  {
    "id": 1199,
    "originalId": 695,
    "name": "Zip Line Canopy Tour Cables & Trolleys",
    "group": "Zip Line Canopy Tour Cables & Trolleys",
    "keywords": [
      "zip line wire rope steel",
      "zip line trolley brake",
      "zip line full body harness",
      "zip line tree platform",
      "zip line impact brake"
    ]
  },
  {
    "id": 1200,
    "originalId": null,
    "name": "Keywords",
    "group": "Zip Line Canopy Tour Cables & Trolleys",
    "keywords": [
      "zip line wire rope steel",
      "zip line trolley brake",
      "zip line full body harness",
      "zip line tree platform",
      "zip line impact brake"
    ]
  },
  {
    "id": 1201,
    "originalId": 696,
    "name": "Ropes Course & Aerial Adventure Park",
    "group": "Ropes Course & Aerial Adventure Park",
    "keywords": [
      "ropes course belay cable",
      "aerial adventure obstacle element",
      "continuous belay lanyard",
      "ropes course guide rescue kit",
      "ropes course inspection fee"
    ]
  },
  {
    "id": 1202,
    "originalId": null,
    "name": "Keywords",
    "group": "Ropes Course & Aerial Adventure Park",
    "keywords": [
      "ropes course belay cable",
      "aerial adventure obstacle element",
      "continuous belay lanyard",
      "ropes course guide rescue kit",
      "ropes course inspection fee"
    ]
  },
  {
    "id": 1203,
    "originalId": 697,
    "name": "Commercial Paintball & Laser Tag Insurance",
    "group": "Commercial Paintball & Laser Tag Insurance",
    "keywords": [
      "extreme sports liability insurance",
      "paintball field waiver software",
      "laser tag injury claim",
      "adventure park risk assessment",
      "extreme sports lawyer retainer"
    ]
  },
  {
    "id": 1204,
    "originalId": null,
    "name": "Keywords",
    "group": "Commercial Paintball & Laser Tag Insurance",
    "keywords": [
      "extreme sports liability insurance",
      "paintball field waiver software",
      "laser tag injury claim",
      "adventure park risk assessment",
      "extreme sports lawyer retainer"
    ]
  },
  {
    "id": 1205,
    "originalId": 698,
    "name": "E-Sports Tournament Organization & Prize Pools",
    "group": "E-Sports Tournament Organization & Prize Pools",
    "keywords": [
      "esports tournament prize pool",
      "esports casting desk",
      "esports spectator seating",
      "esports lan network switch",
      "esports referee fee"
    ]
  },
  {
    "id": 1206,
    "originalId": null,
    "name": "Keywords",
    "group": "E-Sports Tournament Organization & Prize Pools",
    "keywords": [
      "esports tournament prize pool",
      "esports casting desk",
      "esports spectator seating",
      "esports lan network switch",
      "esports referee fee"
    ]
  },
  {
    "id": 1207,
    "originalId": 699,
    "name": "Drone Racing League (DRL) Track & FPV",
    "group": "Drone Racing League (DRL) Track & FPV",
    "keywords": [
      "drone racing gate led",
      "fpv video receiver diversity",
      "drone racing timing system",
      "drone repair soldering station",
      "drone racing league entry"
    ]
  },
  {
    "id": 1208,
    "originalId": null,
    "name": "Keywords",
    "group": "Drone Racing League (DRL) Track & FPV",
    "keywords": [
      "drone racing gate led",
      "fpv video receiver diversity",
      "drone racing timing system",
      "drone repair soldering station",
      "drone racing league entry"
    ]
  },
  {
    "id": 1209,
    "originalId": 700,
    "name": "Absolute Singularity & Unclassifiable Edge Cases",
    "group": "Absolute Singularity & Unclassifiable Edge Cases",
    "keywords": [
      "undefined quantum anomaly",
      "temporal causality violation",
      "non-euclidean geometry consulting",
      "hypothetical expense error",
      "omniversal adjustment"
    ]
  },
  {
    "id": 1210,
    "originalId": null,
    "name": "Keywords",
    "group": "Absolute Singularity & Unclassifiable Edge Cases",
    "keywords": [
      "undefined quantum anomaly",
      "temporal causality violation",
      "non-euclidean geometry consulting",
      "hypothetical expense error",
      "omniversal adjustment"
    ]
  }
];

// Escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// Compile regex patterns on module load for maximum runtime performance (O(1) lookup per category)
// Wrap keywords in word boundaries where appropriate so that fragments do not falsely trigger matches (e.g. 'pan' in 'company').
// For keywords that contain special characters (like c++ or e-challan), we ensure boundaries are handled safely.
const COMPILED_CATEGORIES = CATEGORIES.map(category => {
  const patternParts = category.keywords.map(keyword => {
    const escaped = escapeRegExp(keyword);
    // If the keyword starts/ends with a word character, enforce a word boundary.
    // Otherwise (like in 'c++' or symbol-led tags), omit boundaries.
    const startBoundary = /^\w/.test(keyword) ? '\\b' : '';
    const endBoundary = /\w$/.test(keyword) ? '\\b' : '';
    return `${startBoundary}${escaped}${endBoundary}`;
  });
  
  // Create a combined regex for this category
  const regex = patternParts.length > 0 ? new RegExp(patternParts.join('|'), 'i') : null;
  
  return {
    id: category.id,
    originalId: category.originalId,
    name: category.name,
    group: category.group,
    regex
  };
});

/**
 * Classify a raw text string into a category based on key-phrase matching.
 * 
 * Technical Constraints:
 * 1. Case-insensitivity: converted to lowercase.
 * 2. Priority Resolution: evaluates categories in order. Specific categories are positioned first.
 * 3. Fallback: defaults to "Uncategorized/Others".
 * 
 * @param {string} text - The OCR raw text block
 * @returns {object} - The matched category object or default fallback
 */
export function classifyText(text) {
  if (!text) {
    return { id: 31, originalId: 70, name: 'Miscellaneous & Unclassified Adjustments', group: 'Miscellaneous & Unclassified Adjustments' };
  }

  const cleanText = text.toLowerCase();

  // Evaluate matches
  for (const cat of COMPILED_CATEGORIES) {
    if (cat.regex && cat.regex.test(cleanText)) {
      return {
        id: cat.id,
        originalId: cat.originalId,
        name: cat.name,
        group: cat.group
      };
    }
  }

  // Fallback category (e.g. Miscellaneous & Unclassified Adjustments)
  // Let's find index/id of 'Miscellaneous & Unclassified Adjustments'
  const fallback = CATEGORIES.find(c => c.name === 'Miscellaneous & Unclassified Adjustments') || { id: 31, name: 'Miscellaneous & Unclassified Adjustments', group: 'Miscellaneous & Unclassified Adjustments' };
  return {
    id: fallback.id,
    originalId: fallback.originalId,
    name: fallback.name,
    group: fallback.group
  };
}
