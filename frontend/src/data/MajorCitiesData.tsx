export interface City {
    id: string;
    name: string;
    image: string;
    shortDescription: string;
    fullDescription: string;
    highlights: string[];
    bestTimeToVisit: string;
    bucketListCount: number;
    coordinates: [number, number];
    attractions: string[];
    localCuisine: string[];
    averageTemperature: string;
    altitude: string;
  }


const MajorCitiesData = [
    {
        id: "kathmandu",
        name: "Kathmandu",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        shortDescription: "The vibrant capital city, home to ancient temples, bustling markets, and rich cultural heritage.",
        fullDescription: "Kathmandu, the capital and largest city of Nepal, is a fascinating blend of ancient traditions and modern development. The city is home to seven UNESCO World Heritage Sites, including Durbar Square, Swayambhunath (Monkey Temple), and Boudhanath Stupa. Walking through the narrow streets of the old city, you'll encounter centuries-old temples, traditional Newari architecture, and vibrant local markets selling everything from spices to handcrafted souvenirs.",
        highlights: ["Durbar Square", "Swayambhunath Temple", "Boudhanath Stupa", "Thamel District"],
        bestTimeToVisit: "October to December",
        bucketListCount: 1250,
        coordinates: [27.7172, 85.3240],
        attractions: ["Pashupatinath Temple", "Garden of Dreams", "Hanuman Dhoka Palace", "Asan Bazaar"],
        localCuisine: ["Dal Bhat", "Momo", "Newari Khaja Set", "Yomari"],
        averageTemperature: "20°C (68°F)",
        altitude: "1,400m (4,593ft)"
      },
      {
        id: "pokhara",
        name: "Pokhara",
        image: "https://i.cdn.newsbytesapp.com/images/l25620241011133617.gif",
        shortDescription: "Gateway to the Himalayas, featuring pristine lakes and stunning mountain views.",
        fullDescription: "Pokhara is Nepal's premier tourist destination and the gateway to the Annapurna region. Set against the backdrop of the majestic Annapurna range, this lakeside city offers breathtaking mountain views, serene lakes, and adventure activities. Phewa Lake, with its reflection of Machhapuchhre (Fishtail Mountain), is one of the most photographed spots in Nepal. The city serves as a starting point for numerous trekking routes and offers activities like paragliding, boating, and cave exploration.",
        highlights: ["Phewa Lake", "Sarangkot Sunrise", "World Peace Pagoda", "Adventure Sports"],
        bestTimeToVisit: "September to November",
        bucketListCount: 980,
        coordinates: [28.2096, 83.9856],
        attractions: ["Davis Falls", "Gupteshwor Cave", "International Mountain Museum", "Seti River Gorge"],
        localCuisine: ["Gundruk", "Thakali Khana", "Rainbow Trout", "Sel Roti"],
        averageTemperature: "22°C (72°F)",
        altitude: "822m (2,697ft)"
      },
      {
        id: "bhaktapur",
        name: "Bhaktapur",
        image: "https://media.istockphoto.com/id/469532554/photo/bahakapur-nepal.jpg?s=612x612&w=0&k=20&c=9RHmLtdaPTJdtzpz86DQDW98X-WrT5FaUdas6mXKEHM=",
        shortDescription: "Medieval city preserving ancient Newari culture and traditional craftsmanship.",
        fullDescription: "Bhaktapur, also known as Bhadgaon, is a living museum of medieval art and architecture. This ancient city in the Kathmandu Valley has preserved its traditional charm better than anywhere else in Nepal. The city is famous for its exquisite wood, metal, and stone craftsmanship, which can be seen in its palaces, temples, and courtyards. Bhaktapur Durbar Square, a UNESCO World Heritage Site, showcases the finest examples of Newari architecture, including the famous 55-Window Palace and Vatsala Temple.",
        highlights: ["55-Window Palace", "Nyatapola Temple", "Pottery Square", "Traditional Crafts"],
        bestTimeToVisit: "October to March",
        bucketListCount: 756,
        coordinates: [27.6710, 85.4298],
        attractions: ["Bhaktapur Durbar Square", "Dattatreya Temple", "Peacock Window", "Juju Dhau (King Curd)"],
        localCuisine: ["Juju Dhau", "Bara", "Chatamari", "Wo (Lentil Pancake)"],
        averageTemperature: "19°C (66°F)",
        altitude: "1,401m (4,596ft)"
      },
      {
        id: "chitwan",
        name: "Chitwan",
        image: "https://media.istockphoto.com/id/517194354/photo/wild-landscape-with-asian-rhinoceroses.jpg?s=612x612&w=0&k=20&c=VIvJlrCyuCmWXSXIRaE4fEt3losB-azWz3FoSfwPUVA=",
        shortDescription: "Wildlife paradise home to rare one-horned rhinoceros and Bengal tigers.",
        fullDescription: "Chitwan National Park, Nepal's first national park, is a UNESCO World Heritage Site and one of the best wildlife viewing destinations in Asia. The park is home to over 700 species of wildlife, including the endangered one-horned rhinoceros, Bengal tigers, and Asian elephants. The subtropical lowlands of Chitwan offer a completely different experience from the mountains, with jungle safaris, canoe rides, and cultural experiences with the indigenous Tharu people. The park covers 932 square kilometers of forests, grasslands, and floodplains.",
        highlights: ["Rhino Safari", "Tiger Spotting", "Tharu Culture", "Canoe Rides"],
        bestTimeToVisit: "October to March",
        bucketListCount: 542,
        coordinates: [27.5291, 84.3542],
        attractions: ["Chitwan National Park", "Elephant Breeding Center", "Tharu Cultural Museum", "Rapti River"],
        localCuisine: ["Tharu Traditional Food", "Fish Curry", "Dhikri", "Sidhara"],
        averageTemperature: "25°C (77°F)",
        altitude: "415m (1,362ft)"
      },
      {
        id: "lumbini",
        name: "Lumbini",
        image: "https://c0.wallpaperflare.com/preview/198/608/948/birth-place-of-buddha-lumbini-siddhartha-gautam-nepal.jpg",
        shortDescription: "Sacred birthplace of Lord Buddha, a UNESCO World Heritage pilgrimage site.",
        fullDescription: "Lumbini is one of the most sacred places in the world for Buddhists, being the birthplace of Siddhartha Gautama, who later became Lord Buddha. This UNESCO World Heritage Site attracts pilgrims and tourists from around the globe. The sacred garden contains the Mayadevi Temple, built over the exact spot where Buddha was born, and the Ashoka Pillar erected by Emperor Ashoka in 249 BC. The site also features monasteries built by various Buddhist countries, each showcasing unique architectural styles from their respective cultures.",
        highlights: ["Mayadevi Temple", "Ashoka Pillar", "International Monasteries", "Sacred Garden"],
        bestTimeToVisit: "October to March",
        bucketListCount: 423,
        coordinates: [27.4664, 83.2765],
        attractions: ["Sacred Garden", "Lumbini Museum", "World Peace Flame", "Crane Sanctuary"],
        localCuisine: ["Vegetarian Buddhist Cuisine", "Kheer", "Samosas", "Tibetan Bread"],
        averageTemperature: "24°C (75°F)",
        altitude: "150m (492ft)"
      },
      {
        id: "bandipur",
        name: "Bandipur",
        image: "https://media.istockphoto.com/id/1210074773/photo/the-pedestrian-zone-in-the-center-of-bandipur-village-on-nepal.jpg?s=612x612&w=0&k=20&c=wX10TL_e9pwLkyYW87OxQky0Mj0ioI_qdk-FPen7Ux4=",
        shortDescription: "Hilltop town with preserved Newari architecture and panoramic Himalayan views.",
        fullDescription: "Bandipur is a beautifully preserved hilltop settlement that offers a glimpse into Nepal's rich cultural heritage. This former trading post on the India-Tibet trade route has maintained its traditional Newari architecture and culture. The town's main bazaar is lined with traditional houses featuring intricate wood carvings and is pedestrian-only, creating a peaceful atmosphere. From Bandipur, visitors can enjoy spectacular views of the Himalayas, including Dhaulagiri, Annapurna, Manaslu, and Ganesh Himal ranges.",
        highlights: ["Traditional Architecture", "Himalayan Views", "Cultural Heritage", "Peaceful Atmosphere"],
        bestTimeToVisit: "September to November",
        bucketListCount: 287,
        coordinates: [27.9252, 84.4198],
        attractions: ["Thani Mai Temple", "Siddha Cave", "Bindabasini Temple", "Old Bazaar"],
        localCuisine: ["Traditional Newari Food", "Gundruk Soup", "Local Honey", "Organic Vegetables"],
        averageTemperature: "18°C (64°F)",
        altitude: "1,030m (3,379ft)"
      },
      {
        id: "gorkha",
        name: "Gorkha",
        image: "https://www.wondersofnepal.com/wp-content/uploads/2019/12/Gorkha-Trek-02-1024x438.jpg",
        shortDescription: "Historic fortress town, birthplace of modern Nepal and the legendary Gurkhas.",
        fullDescription: "Gorkha is a historic town that holds immense significance in Nepal's history as the birthplace of Prithvi Narayan Shah, who unified Nepal in the 18th century. The town is dominated by the impressive Gorkha Durbar (palace), perched on a hilltop and offering commanding views of the surrounding valleys and the Himalayas. Gorkha is also famous as the ancestral home of the Gurkhas, the brave soldiers renowned worldwide for their courage and loyalty. The town serves as a starting point for treks to Manaslu and offers insights into Nepal's rich history.",
        highlights: ["Gorkha Durbar", "Historical Significance", "Mountain Views", "Gurkha Heritage"],
        bestTimeToVisit: "October to December",
        bucketListCount: 198,
        coordinates: [27.9957, 84.6194],
        attractions: ["Gorkha Palace", "Gorakhnath Cave", "Upallokot", "Manakamana Temple"],
        localCuisine: ["Dal Bhat", "Gundruk", "Local Millet Beer", "Yak Cheese"],
        averageTemperature: "16°C (61°F)",
        altitude: "1,135m (3,724ft)"
      },
      {
        id: "patan",
        name: "Patan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Patan_Durbar_Square_at_Night.jpg/960px-Patan_Durbar_Square_at_Night.jpg",
        shortDescription: "Ancient city of arts and crafts with the finest collection of temples in Nepal.",
        fullDescription: "Patan, also known as Lalitpur (City of Beauty), is renowned for having the finest collection of temples and palaces in Nepal. This ancient city in the Kathmandu Valley is a living museum of Newari culture and craftsmanship. Patan Durbar Square, a UNESCO World Heritage Site, showcases exquisite examples of traditional architecture, metal work, and stone carving. The city is famous for its skilled artisans who continue to practice traditional crafts passed down through generations, including metalwork, woodcarving, and thangka painting.",
        highlights: ["Patan Durbar Square", "Krishna Temple", "Traditional Crafts", "Golden Temple"],
        bestTimeToVisit: "October to March",
        bucketListCount: 634,
        coordinates: [27.6588, 85.3247],
        attractions: ["Patan Museum", "Golden Temple (Hiranya Varna Mahavihar)", "Mahabouddha Temple", "Central Zoo"],
        localCuisine: ["Newari Cuisine", "Choila", "Samay Baji", "Lassi"],
        averageTemperature: "20°C (68°F)",
        altitude: "1,400m (4,593ft)"
      },
      {
        id: "janakpur",
        name: "Janakpur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9D413jVCMoJWX_8UDPc2U5jouTTH-Iqi0IOZSlqLMWMlUoY6ZnjSqDbtwj04e_JoYLM&usqp=CAU",
        shortDescription: "Sacred Hindu pilgrimage site, birthplace of Goddess Sita from the Ramayana.",
        fullDescription: "Janakpur is one of the most important religious sites for Hindus, believed to be the birthplace of Goddess Sita, wife of Lord Rama from the epic Ramayana. The city is famous for the ornate Janaki Temple, dedicated to Goddess Sita, which attracts thousands of pilgrims, especially during religious festivals. Janakpur is also known for its vibrant Mithila art (also called Madhubani painting), traditionally created by women on the walls of their homes. The city offers a unique cultural experience with its religious significance, traditional art forms, and warm hospitality.",
        highlights: ["Janaki Temple", "Mithila Art", "Religious Festivals", "Cultural Heritage"],
        bestTimeToVisit: "October to March",
        bucketListCount: 312,
        coordinates: [26.7288, 85.9293],
        attractions: ["Janaki Temple", "Ram Mandir", "Dhanush Sagar", "Mithila Art Centers"],
        localCuisine: ["Madhesi Cuisine", "Fish Curry", "Kheer", "Pedas"],
        averageTemperature: "23°C (73°F)",
        altitude: "74m (243ft)"
      }
]

export default MajorCitiesData;