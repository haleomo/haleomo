var activityTypes = ["Beaches", 
                     "Hiking", 
                     "Nature Activities", 
                     "Cultural Activites", 
                     "Scenic Drives", 
                     "Indoor Activities",
                     "Snorkeling"
                    ]

var activities = {
    beach : {
        title: "Beaches",
        activities: [
            {
                name: "",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "Free",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Waihe'e Beach",
                description: "This beach is off the beaten path behind the Waiehu Golf Course. It's located between the towns of Waihe'e and Waiehu, from the Kahekili Highway on Lower Waiehu Beach Park Road. It's a very nice beach for walking, fishing, and some surfing, especially with the larger winter swells. Waiehu is very picturesque with beautiful white sand contrasting with the blue-green shades of the ocean. There's a really nice view of Kahului across the bay. There are some rocks mixed in with the sand and it can get very windy here at times. If you'd like to come to a beach that isn't usually crowded, this may be a great choice. There's usually plenty of parking in the lot and along the side of the road. Beach access isn't far and there are a few benches to sit, relax, and enjoy the scenery. Other amenities include: barbeque grills, picnic tables, and a grassy area. There is no lifeguard here. <a href=\"Resources/MermaidTears.pdf\" target=\"_blank\">The Story of Seaglass</a> ",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Waihee+Beach+Park,+200+Halewaiu+Rd,+Wailuku,+HI+96793,+United+States/@20.9034325,-156.5166372,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7eab2cbe515d4dcb:0xf4a0ca86e94538c7!2m2!1d-156.4991298!2d20.9320498!3e0?entry=ttu",
                drivingTime: "20 minutes",
                fee: "Free",
                proTip: "This is a good walking beach and a nice spot for collecting sea glass. A very local vibe.",
                goodForKeiki: true
            },
            {
                name: "Keawekapu Beach",
                description: "Long strech of sand starting at Mauna Kai and extending to the Andaz. Evening breezes and incredible sunsets make this beach an incredible way to end a busy day on Maui.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Mana+Kai+Maui+Resort,+South+Kihei+Road,+Kihei,+HI,+USA/@20.7914424,-156.5554971,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954dabf3dc239bf:0x5b479ecc952c1567!2m2!1d-156.4464646!2d20.7048703!3e0?entry=ttu",
                drivingTime: "35 minutes",
                fee: "Free",
                proTip: "The beautiful lawn at the Mauna Kai is a gorgeous spot to watch the sunset.",
                goodForKeiki: true
            },
            {
                name: "Sugar Beach",
                description: "Long strech of sand reaching from North Kihei to Ma'alea. This is a good beach for a long walk along the water. You can park anywhere along the beach and explore the sand, canoe clubs, and see stunning views of West Maui Mountain.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Sugar+Beach+Resort,+North+Kihei+Road,+Kihei,+HI,+USA/@20.832756,-156.5253621,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d1a593307b29:0xbf481e405fc1013c!2m2!1d-156.4671817!2d20.7856206!3e0?entry=ttu",
                drivingTime: "20 minutes",
                fee: "Free",
                proTip: "After your walk refresh with shave ice from Ululani's or grab breakfast sweets at Sugar Beach Sweet Shop.",
                goodForKeiki: true
            },
            {
                name: "Olowalu Beach",
                description: "Good alternative beach for a windy day with protected swimming and easy approach into the water. The beach stretches from Ukemehame to Olowalu, with some of the best beach near Olowalu. The beach is next to the Honoapi'ilani Hawaii and is only a good beach alternative if the wind is hitting other beaches from easterly winds.",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Olowalu+Beach,+Hawaii+96761,+United+States/@20.8280029,-156.6039086,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d620a4d0104d:0x6a34602b0ffa082e!2m2!1d-156.6156274!2d20.8090713!3e0?entry=ttu",
                drivingTime: "25 minutes",
                fee: "Free",
                proTip: "",
                goodForKeiki: true
            }                       
        ]
    },
    hiking: {
        title: "Hiking",
        activities: [
            {
                name: "",
                description: "",
                directions: "",
                drivingTime: "",
                difficulty: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Waihe'e Ridge Trail",
                description: "",
                directions: "",
                drivingTime: "",
                difficulty: "Strenuous",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Olinda Forest",
                description: "Waihou Springs Trail -- The fresh pine forest air invigorates as you walk the winding trail through a forest floor covered in red pine needles. The relaxing loop hike is good exercise without being strenuous, and is family friendly. Waihou Springs (Spur Trail): The right fork has a spur trail that leads to a view and a small bench. Beyond here the trail gets hazardous. A steep switch back trail to some small lava caves, begins just beyond the bench. This portion of trail is steep and has loose unstable footing so it is subject to closure due to trail conditions and trail collapse.",
                directions: "",
                drivingTime: "",
                difficulty: "Easy-Moderate. 1 to 2.4 miles round trip depending on trail choices.",
                proTip: "The loop trail is easy, if you hike down to the springs, there is a short hike up switchbacks to return to the loop.",
                goodForKeiki: true
            },
            {
                name: "Makawao Forest Reserve",
                description: "Kahakapao Loop Trail--Generally considered a moderately challenging route, it takes an average of 3 h 11 min to complete. This is a very popular area for birding, hiking, and horseback riding, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash. <a href=\"https://www.alltrails.com/en-gb/parks/hawaii/maui/makawao-forest-reserve\" target=\"_blank\">All Trails<\a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Makawao+Forest+Reserve+Mountain+Biking+Trails,+Haiku,+HI,+USA/@20.8850008,-156.4755042,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954ca57aa960537:0xdfce9b165596fb9b!2m2!1d-156.275298!2d20.832096!3e0?entry=ttu",
                drivingTime: "",
                difficulty: "Moderate",
                proTip: "",
                goodForKeiki: false
            },   
            {
                name: "Lahaina Pali Hike",
                description: "This is a difficult hike that offers huge views of the central part of Maui. The Lāhainā Pali Trail follows a historic old road that traverses high over the southern end of West Maui. The road is over 200 years old, but historians believe that this was earlier part of the Ala Loa Trail that traversed much of the island. Hike originating from Kahului side of the pali (East of Ma'alea) to the Lahaina side of the pali; the trail passes though the Kaheawa wind farm. <a href=\"https://www.alltrails.com/en-gb/trail/hawaii/maui/lahaina-pali-trail\" target=\"_blank\">All Trails</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Lahaina+Pali+Trail,+Lahaina+Pali+Trail+-+eastern+half,+Wailuku,+HI+96793,+United+States/@20.8397031,-156.5527765,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d6c4381c0c3d:0xcb9f10ed6b42e1ae!2m2!1d-156.5380384!2d20.7988967!3e0?entry=ttu",
                drivingTime: "15 minutes (East trail head)",
                difficulty: "Strenuous",
                proTip: "Go early to avoid the heat. Park at one of the trailheads and go out-and-back to the wind farm.",
                goodForKeiki: false
            },  
        ]
    },
    nature: {
        title: "Nature Activities",
        activities: [
            {
                name: "Green Sea Turtles at Ho'okipa Beach",
                description: "Sea turtles crawl onto the beach during any time of the year. If you go in the morning or the eavening, you will be most likely to see turtles.",
                directions: "",
                drivingTime: "",
                fee: "Free",
                proTip: "",
                goodForKeiki: true
            },
            {
                name: "Maui Ocean Center",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "$$$",
                proTip: "",
                goodForKeiki: true
            },
            {
                name: "Green Sea Turtles at Kihei Boat Ramp",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "Free",
                proTip: "",
                goodForKeiki: true
            },
            {
                name: "Maui Butterfly Farm",
                description: "Get a hands-on introduction to the Maui Butterfly Farm during this small-group guided tour. Learn how butterflies are bred in the butterfly production facility and discover butterfly species that are native to Hawaii. Get a chance to feed home-bred butterflies in the butterfly lighthouse. Read more about The Maui Butterfly Farm Tour! - https://www.viator.com/tours/Maui/Butterfly-Farm-Tour-and-Scavenger-Hunt/d671-176274P1?mcid=56757 <a href=\"https://www.themauibutterflyfarm.com/?gclid=CjwKCAjw5MOlBhBTEiwAAJ8e1sC-i9B4gVcChF2LQwtiYS6c8259knlaJC8MSnCFUjm1z2PAkxd1ZhoC0tYQAvD_BwE\" target=\"_blank\">The Maui Butterfly Farm</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/The+Maui+Butterfly+Farm,+Olowalu+Village+Road,+Lahaina,+HI,+USA/@20.8280029,-156.6038692,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7955295d262908eb:0xfb72d41b990c84ab!2m2!1d-156.6226699!2d20.8117286!3e0?entry=ttu",
                drivingTime: "25 Minutes",
                fee: "Free",
                proTip: "",
                goodForKeiki: true
            }
            
        ]
    },
    cultural: {
        title: "Cultural Activities",
        activities: [
            {
                name: "",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Kepaniwai Cultural Park",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Olowalu Petroglyphs",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            }
            
        ]
    },
    scenic: {
        title: "Scenic Drives",
        activities: [
            {
                name: "Road to Hana",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Iao Needle Monument",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "West Maui Loop",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Waiʻānapanapa State Park",
                description: "Remote, wild, volcanic coastline offering solitude and respite from urban life. Lodging, camping, picnicking, shore fishing and hardy family hiking along an ancient Hawaiian coastal trail which leads to Hana. Excellent opportunity to view a seabird colony and natural stone arch. Other features include native hala forest, heiau (religious temple), sea stacks, blow holes and small black sand beach. Entry reservations required. <a href=\"https://dlnr.hawaii.gov/dsp/parks/maui/waianapanapa-state-park/\">DLNR Site</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/20.786334,-156.00292/@20.8599574,-156.257003,10z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m0?entry=ttu",
                drivingTime: "",
                fee: "$$",
                proTip: "",
                goodForKeiki: true
            }
        ]
    },
    adventure: {
        title: "Adventures",
        activities: [
            {
                name: "",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "",
                proTip: "",
                goodForKeiki: false
            },
            {
                name: "Surf Lessons at Cove Park",
                description: "",
                directions: "",
                drivingTime: "40 minutes",
                fee: "$$",
                proTip: "",
                goodForKeiki: true
            },           
            
        ]
    },
    indoorActivities: {
        title: "Indoor Activities",
        activities: [
            {
                name: "Ultimate Air Trampoline Park",
                description: "One of the coolest new additions to Maui’s many family-friendly activities, Ultimate Air Trampoline Park is a 25,000-square-foot indoor activity park in Wailuku with plenty of appeal for guests of all ages. <a href=\"https://www.yelp.com/biz/ultimate-air-trampoline-park-wailuku\" target=\"_blank\">Yelp Review</a>",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Ultimate+Air+Maui,+Laa+Street,+Kahului,+HI,+USA/@20.8744246,-156.5094764,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954d30aa4f48c57:0x184ac37fb8814f7e!2m2!1d-156.4975738!2d20.86833!3e0?entry=ttu",
                drivingTime: "5 minutes",
                fee: "$",
                proTip: "Wednesday afternoon is an Ohana special with a good discount for a per hour charge.",
                goodForKeiki: true
            }
            
        ]
    },
    snorkeling: {
        title: "Snorkeling",
        activities: [
            {
                name: "Keawekapu (Mauna Kai) Beach",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "Free",
                proTip: ".",
                goodForKeiki: true
            },
            {
                name: "Ulua Beach",
                description: "",
                directions: "",
                drivingTime: "",
                fee: "Free",
                proTip: ".",
                goodForKeiki: true
            },
            {
                name: "Kanahena Cove",
                description: ". Parking is at the ‘Āhihi-Kīna‘U Natural Area Reserve parking lot past Kanahena Cove. You can park here and walk back up the main road going north and enjoy some amazing snorkeling. It’s a little over a quarter mile walk!",
                directions: "https://www.google.com/maps/dir/95+Ka+%CA%BBIkena+Lp,+Wailuku,+HI+96793,+USA/Kanahena+Cove,+Makena+Rd,+Kihei,+HI+96753,+United+States/@20.749282,-156.5532334,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x7954d37a8296869d:0x3ff0ce8b095d30a9!2m2!1d-156.5105541!2d20.8780141!1m5!1m1!1s0x7954dcb0ca887c2f:0x570aca7584adb1f!2m2!1d-156.437518!2d20.618084!3e0?entry=ttu",
                drivingTime: "45 minutes",
                fee: "Free",
                proTip: ".",
                goodForKeiki: true
            },
            
        ]       
    }


}