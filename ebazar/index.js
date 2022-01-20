const slugFnc = function(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    // remove accents, swap ñ for n, etc
    var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
    return str;
  };
  
  const stalls = [
    {
      name: "Catering and Food",
      items: [
        {
          stall_no: "F1",
          name: "kalpana p. Chaphekar",
          contact1: "8618968130",
          email1: "Kalpanapchaphekar1970@gmail.com",
          representation: "Maharashtra Mandal Member",
          category: "Catering and Food",
          product: "Assorted chocolates 250 above",
          youtube_link: "https://www.youtube.com/embed/MmA8jJruk4g",
          desc1: "S K Enterprises - Assorted chocolates 250 above, Gift Boxes, Handwash and Sanitizers and Ayurvedic Products",
          contact: "9620374327 / 8618968130",
          email1: "Kalpanapchaphekar1970@gmail.com"
      },
      {
          si_no: "3",
          stall_no: "F2",
          name: "Manik patwardhan",
          contact1: "9886046987",
          email1: "Manikpatwardhan@yahoo.co.in",
          representation: "Maharashtra Mandal Member",
          category: "Catering and Food",
          product: "130 plus products 25 to 550",
          youtube_link: "https://www.youtube.com/embed/zvamMeBIpMs",
          desc1: "130 plus products of famous brands like Sakas, Chitale, Dandekar, Apte, Katdhare, Yojak, Desai bandhuand many more ranging from Rs.25 to Rs.550",
          contact: "9972269191",
          email: "mybazzzar@gmail.com",
          fb: "Facebook: www.facebook.com/mybazzzar"
      },
      {
          si_no: "5",
          stall_no: "F3",
          name: "Vaishali Sawant",
          contact1: "9611011044",
          email1: "harshasdelights@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Catering and Food",
          product: "Diwali snacks - from range of 600 - 800 per KG\r\nHandpainted diyas - from 100 - 200\r\nHandmade chocolates- 200 - 500 per pack\r\nWholewheat baked goodies - from 350 onwards",
          youtube_link: "https://www.youtube.com/embed/1a3R7tE9RsY",
          desc1: "Diwali snacks - from range of 600 - 800 per KG; Handpainted diyas - from 100 - 200; Handmade chocolates- 200 - 500 per pack; Wholewheat baked goodies - from 350 onwards",
          contact: "9611011044",
          email1: "harshasdelights@gmail.com",
          insta: " Instagram: www.instagram.com/harshasdelights",
          fb: "Facebook: www.facebook.com/316621428484646"
      },
      {
          si_no: "12",
          stall_no: "F4",
          name: "Varsha Vanpal",
          contact1: "9742814239",
          email1: "varsha.vanpal@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Catering and Food",
          product: "Diwali Faral & Catering services",
          youtube_link: "https://www.youtube.com/embed/sH8ZCUZfwhI",
          desc1: "Diwali Faral & Catering services",
          contact: "9742814239",
          email1: "varsha.vanpal@gmail.com",
          fb: "Facebook: Varsha Vanpal on Facebook"
      },
      {
          si_no: "13",
          stall_no: "F5",
          name: "Pranali Varun Markande",
          contact1: "9702476360",
          email1: "Pranuv789@gmail.com",
          representation: "General Bengaluru Participant",
          category: "Catering and Food",
          product: "Diwali food items and snacks",
          youtube_link: "https://www.youtube.com/embed/a3xTzNv1RhU",
          desc1: "Diwali food items, Sweets and snacks",
          contact: "9892073864 / 7506034237",
          email1: "Pranuv789@gmail.com"
      },
      {
          si_no: "17",
          stall_no: "F6",
          name: "Varsha J D and Madhura shah",
          contact1: "6362738545",
          email1: "pooja28596@gmail.com",
          representation: "Maharashtra Mandal Member",
          category: "Catering and Food",
          product: "Snacks items",
          youtube_link: "https://www.youtube.com/embed/2NMP2ayUK-4",
          desc1: "Varsha JD - Homemade - Maharashtrian Snacks items and Madhura Shah - Diwali Faral Savouries, Sweets and Snacks",
          contact: "9343113515 /  9730029400",
          email: "madhurashah26@gmail.com",
          fb: "Facebook: Varsha J D on Facebook",
      },
      {
          si_no: "19",
          stall_no: "F7",
          name: "Gauri Natu",
          contact1: "9049663312",
          email1: "writetogauri@gmail.com",
          representation: "Maharashtra Mandal Member",
          category: "Catering and Food",
          product: "Frozen food products",
          youtube_link: "https://www.youtube.com/embed/myCnO-W6v_E",
          desc1: "Frozen food products - BEDEKAR",
          contact: "9049663312 / 9372453463",
          email1: "writetogauri@gmail.com",
          fb: "Facebook: Joshiajji on Facebook"
      },
      {
          si_no: "22",
          stall_no: "F8",
          name: "Dr Priya Ingale",
          contact1: "7829014014",
          email1: "",
          representation: "General Bengaluru Participant",
          category: "Catering and Food",
          product: "Cakes & Bakes, Vegetarian & Non Vegetarian Snacks & Main Course",
          youtube_link: "https://www.youtube.com/embed/tsMt-zm5ymE",
          desc1: "Suswaad Foods - Cakes & Bakes, Vegetarian & Non Vegetarian Snacks & Main Course",
          contact: "7829014014",
          email: "suswaad.cakefetish@gmail.com",
          fb: "Facebook: Suswaad Foods on Facebook",
          insta: " Instagram: Suswaad Foods on Instagram"
      },
      {
          si_no: "27",
          stall_no: "F9",
          name: "Pranali Pradhan",
          contact1: "9986344729",
          email1: "aryapradhan@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Catering and Food",
          product: "Besan ladoo ,Rava, ladoo, chakli, shev, shankarpali (sweet/salted), dryfruits ladoo, Naral wadi, karanji, patal pohe chivda",
          youtube_link: "https://www.youtube.com/embed/wYT7wEV9Sbo",
          desc1: "Pranali's Kitchen - Besan ladoo ,Rava ladoo,chakli,shev,shankarpali(sweet/salted),dryfruits ladoo,Naral wadi,karanji, patal pohe chivda",
          contact: "9986344729",
          email1: "aryapradhan@gmail.com"
      },
      {
          si_no: "28",
          stall_no: "F10",
          name: "Vaishalli Gaonkaar",
          contact1: "9.19845E+11",
          email1: "gvaishalli@yahoo.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Catering and Food",
          product: "Maharashtrian Diwali Faral",
          youtube_link: "https://www.youtube.com/embed/YkpvddvaxTo",
          desc1: "Annapoorna Healthy and Tasty Treat - Maharashtrian Diwali Faral, Sweets, Snacks, Healthy ladoos and Cookies, etc.",
          contact: "9845380446",
          fb: "Facebook: Annapoornahealthytreatytreat on Facebook",
          insta: " Instagram: annapoorna_vaishalli on Instagram"
      },
      {
          si_no: "35",
          stall_no: "F11",
          name: "Archana Koparkar",
          contact1: "9845680043",
          email1: "kalpanam0919@gmail.com",
          representation: "General Bengaluru Participant",
          category: "Catering and Food",
          product: "Pickles, murabba, amchoor, kokam 200gms price range rs. 60 to rs. 100",
          youtube_link: "https://www.youtube.com/embed/8SOaCrnQG0w",
          desc1: "Kalpanam Krishi Products - Pickles, murabba, amchoor, kokam 200gms price range rs. 60 to rs. 100",
          contact: "9845680043",
          email1: "kalpanam0919@gmail.com"
      },
      ]
    },
    {
      name: "Decorative and Gift Items",
      items: [
        {
          si_no: "7",
          stall_no: "D1",
          name: "Rasika kadolkar",
          contact1: "9880816340",
          email1: "Krasika10@gmail.com",
          representation: "Non-Member",
          category: "Decorative and Gift Items",
          product: "Mfg Handblended perfumes and designer candles and air fresheners",
          youtube_link: "https://www.youtube.com/embed/xeCZV2h2Vu4",
          desc1: "RISA - Mfg Handblended perfumes and designer candles and air fresheners",
          contact: "988081634",
          email1: "krasika10@gmail.com"
      },
      {
          si_no: "9",
          stall_no: "D2",
          name: "Neeta Bajaj",
          contact1: "8861888880",
          email1: "",
          representation: "General Bengaluru Participant",
          category: "Decorative and Gift Items",
          product: "Designer and aroma Candles, Earthen Diyas, decorative t-lite holders, metal holders, murals.",
          youtube_link: "https://www.youtube.com/embed/s2Z7ZN9kMsA",
          desc1: "Flames N Flavors - Designer and aroma Candles, Earthen Diyas, decorative t-lite holders, metal holders, murals.",
          contact: "8861888880",
          email: "flamesnflavors@yahoo.in",
          fb: "Facebook: Flames N Flavors on Instagram and Facebook"
      },
      {
          si_no: "10",
          stall_no: "D3",
          name: "Kirti Dhondiyal",
          contact1: "9739094595",
          email1: "kirti16.dhondiyal@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Decorative and Gift Items",
          product: "All kinds Bags : Folding Travelling/shopping bag, lunch bags,  - School Bags,  Wallets/slings, Organizers, Return Gifts, Personalized items : Steel bottles/lunch boxes , wallets, Passport covers, Towels",
          youtube_link: "https://www.youtube.com/embed/L53sK78zOJI",
          desc1: "OhMyBagz - All kinds Bags: Folding Travelling/shopping bag, lunch bags, School Bags, Wallets/slings, Organizers, Return Gifts, Personalized items: Steel bottles/lunch boxes, wallets, Passport covers, Towels",
          contact: "9739094595",
          email1: "kirti16.dhondiyal@gmail.com",
          fb: "Facebook: Ohmybagz on Facebook"
      },
      {
          si_no: "11",
          stall_no: "D4",
          name: "Seema Chitnavis",
          contact1: "9945468379",
          email1: "seema.chitnavis@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Decorative and Gift Items",
          product: "Womania Beauty Products \r\nUtana Handmade soap & Other Varities Of Handmade Soaps\r\nWeight : 120 to 135 grams each. Colour varies as per the product. Features: all my products are chemical free & preservatives Free. \r\nPrice range : for handmade soaps it’s₹250/- onwards\r\nFor glycerin handcrafted soaps it’s ₹150/- onwards",
          youtube_link: "https://www.youtube.com/embed/dYmsn2G6zwI",
          desc1: "Womania Beauty Products - Utana Handmade soap & Other Varities Of Handmade Soaps; Weight : 120 to 135 grams each Colour varies as per the product Features: all my products are chemical free & preservatives Free. Price range : for handmade soaps it’s₹250/- onwards For glycerin handcrafted soaps it’s ₹150/- onwards",
          contact: "9945468379",
          email1: "seema.chitnavis@gmail.com",
          fb: "Facebook: WomaniaBeautyProducts on Facebook"
      },
      {
          si_no: "16",
          stall_no: "D5",
          name: "Pallavi Pramod",
          contact1: "7406235554",
          email1: "",
          representation: "General Bengaluru Participant",
          category: "Decorative and Gift Items",
          product: "Ecofriendly Aakashkandil,handmade soap,diyas,oil , size -6”-12”,weight-100gms-1000gms,all colours, made in Bharat, price -350 onwards",
          youtube_link: "https://www.youtube.com/embed/OwtKFUk7lqw",
          desc1: "BloomsJoy Floral Jewellery - Ecofriendly Aakashkandil,handmade soap,diyas,oil , size -6”-12”,weight-100gms-1000gms,all colours, made in Bharat, price -350 onwards; Diwali Lanterns, Decorative Diyas, Gift Articles, Toran and Floral Jewellery.",
          contact: "7406235554",
          email: "pallavipramod29@gmail.com",
          fb: "Facebook: on Instagram @Bloomsjoy floral jewellery"
      },
      {
          si_no: "18",
          stall_no: "D6",
          name: "Dr. Chitra Phadnis",
          contact1: "9845209192",
          email1: "drchitra@madhurpharma.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Decorative and Gift Items",
          product: "Cosmetic gift boxes in the range of Rs 500- 1200 containing facial creams, oils etc.",
          youtube_link: "https://www.youtube.com/embed/NmkkzeEmoIU",
          desc1: "Madhur Pharma & Research Laboratories Pvt Ltd - Cosmetic gift boxes in the range of Rs 500- 1200 containing facial creams, oils etc.",
          contact: "9845209192",
          email1: "drchitra@madhurpharma.com",
          fb: "Facebook: Madhurpharmaandresearchlaboratory on Facebook"
      },
      {
          si_no: "21",
          stall_no: "D7",
          name: "Nirupama Chirmade",
          contact1: "9880393004",
          email1: "cnirupama@hotmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Decorative and Gift Items",
          product: "Hand painted Wooden gift boxes,Wooden jewelaryboxes ,hand painted bomboo decor etc Price range 100 rs to 2000 rs",
          youtube_link: "https://www.youtube.com/embed/6fm7eRB9Nd4",
          desc1: "Niru's World of Art - Hand painted Wooden gift boxes,Wooden jewelaryboxes ,hand painted bomboo decor etc Price range 100 rs to 2000 rs",
          contact: "9880393004",
          email1: "cnirupama@hotmail.com",
          site: "www.nirusworld.com",
          insta: " Instagram: www.instagram.com/onestroke_nirusworld",
          fb: "Facebook: www.facebook.com/nirusworldofart"
      },
      {
          stall_no: "D8",
          name: "Uttara Deshmukh",
          contact1: "9768125080",
          email1: "Info@diningdelights.net.in",
          representation: "Outstation Participant",
          category: "Decorative and Gift Items",
          product: "Ceramic crockery and home decor products. Price from Rs 90 to Rs 10000/-",
          youtube_link: "https://www.youtube.com/embed/_OhNKL1-XTM",
          desc1: "Dining Delights - Ceramic crockery and home decor products. Price from Rs 90 to Rs 10000/- Ceramic Crockery, Ceramic Planters, Décor Items, Gift Articles, etc.",
          contact: "9768125080 / 9769762260",
          email1: "info@diningdelights.net.in",
          fb: "Facebook: FB Page @DiningDelights",
          insta: " Instagram: #diningdelights18"
      },
      ]
    },
    {
      name: "Eco-Friendly and Furnishings",
      items: [
        {
          si_no: "14",
          stall_no: "EF1",
          name: "VATSALYA MOSHTIKOTI",
          contact1: "9902122996",
          email1: "vatsalya.vm@gmail.com",
          representation: "General Bengaluru Participant",
          category: "Eco-Friendly & Furnishings",
          product: "SHATAKSHI CREATIONS - Jaipur Bedsheets, Dohars, Quilts, Razi, Table Covers, Mats and other small Jaipur Handicrafts",
          youtube_link: "https://www.youtube.com/embed/5aJhDrS1otk",
          desc1: "SHATAKSHI CREATIONS - Furnishings / Fabrics, JAIPUR BEDSHEETS, DOHARS, QUILTS, RAZI, TABLE COVERS, MATS AND OTHER SMALL JAIPUR HANDICRAFTS",
          contact: "9902122996",
          email1: "vatsalya.vm@gmail.com"
      },
      {
          si_no: "29",
          stall_no: "EF3",
          name: "Aparna Patankar",
          contact1: "9880550822",
          email1: "pataparna@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Eco-Friendly & Furnishings",
          product: "Cotton based handbags ( 150/- to 1000/)",
          youtube_link: "https://www.youtube.com/embed/DaoCdRUnetU",
          desc1: "Aparna Patankar - Cotton based handbags ( 150/- to 1000/)",
          contact: "9880550822",
          email1: "pataparna@gmail.com"
      },
      {
          si_no: "30",
          stall_no: "EF4",
          name: "Shilpa Dilip Mate",
          contact1: "9822279456",
          email1: "shilpadmate@gmail.com",
          representation: "Outstation Participant",
          category: "Eco-Friendly & Furnishings",
          product: "Name, size, weight, colour, features very as per product, price range from Rs. 1000/- to Rs. 10000/-",
          youtube_link: "https://www.youtube.com/embed/NvxM2TdBVtw",
          desc1: "SM Creations - Fabric and Canvas Paintings; Name, size, weight, colour, features vary as per product, price range from Rs. 1000/- to Rs. 10000/-",
          contact: "9822279456",
          email1: "shilpadmate@gmail.com",
          fb: "Facebook: SMCreations79 on Facebook"
      },
      {
          si_no: "33",
          stall_no: "EF5",
          name: "Rashmi S V",
          contact1: "9739327376",
          email1: "rashmissv@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Eco-Friendly & Furnishings",
          product: "Traditional games and food, fashion frorall over India. Area special products prices from range ₹ 10 to ₹5000.",
          youtube_link: "https://www.youtube.com/embed/BQsUVmB3wkY",
          desc1: "Oributti from Origin - Traditional games and food, fashion frorall over India. Area special products prices from range ₹ 10 to ₹5000.",
          contact: "9739327376",
          email1: "rashmissv@gmail.com",
          insta: " Instagram: @oributti_ind",
          fb: "Facebook: Facebook on Oributti.com",
          site: "www.oributti.com"
      },
      {
          si_no: "36",
          stall_no: "EF6",
          name: "Hita Prem",
          category: "Eco-Friendly & Furnishings",
          product: "NYW Hair is Bangalore's only women owned luxury human hair extension brand that helps women achieve their hair goals be it length, volume, baldness, style or colour!",
          youtube_link: "https://www.youtube.com/embed/iUvGDXhwLEo",
          desc1: "NYW Hair - NYW Hair is Bangalore's only women owned luxury human hair extension brand that helps women achieve their hair goals be it length, volume, baldness, style or colour!",
          contact: "9148422439",
          email1: "nywhair@gmail.com",
          fb: "Facebook: TheNYWHair on Instagram and Facebook"
      },
      ]
    },
    {
      name: "clothing",
      items: [
        {
          si_no: "20",
          stall_no: "C1",
          name: "Arti - Suchitra",
          contact1: "9663379326",
          email1: "",
          representation: "Maharashtra Mandal Member",
          category: "Clothing",
          product: "Stitched n unstitched dresses and nighties at wholesale prices with free delivery anywhere in india",
          youtube_link: "https://www.youtube.com/embed/26ORCWfCGjc",
          desc1: "Aaina Collections Sahiyar - Stitched n unstitched dresses and nighties at wholesale prices with free delivery anywhere in indiaClothing, Food Items, Furnishings / Fabrics",
          contact: "Arti - 9591943456 \ Suchitra - 8496062850"
      },
      {
          stall_no: "C2",
          name: "Pooja nagwekar",
          contact1: "9663379326",
          email1: "pooja.nagwekar@gmail.com",
          representation: "Maharashtra Mandal Member",
          category: "Clothing",
          product: "Stitched n unstitched dresses and nighties at wholesale prices with free delivery anywhere in india",
          youtube_link: "https://www.youtube.com/embed/5QY0OjXySZU",
          desc1: "Aaina Collections - Stitched n unstitched dresses and nighties at wholesale prices with free delivery anywhere in india",
          contact: "9663379326",
          email1: "pooja.nagwekar@gmail.com"
      },
      {
          si_no: "23",
          stall_no: "C3",
          name: "Rathnaprabha",
          contact1: "9844355656",
          email1: "kalavathifashions@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Clothing",
          product: "1. Girls and ladies leggings, shrugs and cycling shorts\r\n2 cotton silk and mixed fabrics\r\nRanging from 100 rupees to 600 rupees",
          youtube_link: "https://www.youtube.com/embed/cXwvBiRbiPc",
          desc1: "Kalavathi Fashions - 1. Girls and ladies leggings, shrugs and cycling shorts; 2 cotton silk and mixed fabrics; Ranging from 100 rupees to 600 rupees",
          contact: "9844355656",
          email1: "Kalavathifashions@gmail.com"
      },
      {
          si_no: "31",
          stall_no: "C4",
          name: "Kuchala Kumari Panduranga",
          contact1: "7899726022",
          email1: "",
          representation: "General Bengaluru Participant",
          category: "Clothing",
          product: "Dress materials and sarees in natural fabrics like handloom cotton, silk, lenin. Rs.800 to Rs.5000.",
          youtube_link: "https://www.youtube.com/embed/YohwvRXwveA",
          desc1: "G-Trendz - Dress materials and sarees in natural fabrics like handloom cotton, silk, lenin. Rs.800 to Rs.5000.",
          contact: "7899726022",
          email: "kuchala@grethyncorp.com",
          fb: "Facebook: www.facebook.com/gtrendz.gtrendz"
      },
      {
          si_no: "32",
          stall_no: "C5",
          name: "Mrs. Rachana M. Nimkar",
          contact1: "9769342226",
          email1: "rachana.nimkar@gmail.com",
          representation: "Outstation Participant",
          category: "Clothing",
          product: "All types of Paithani, Kanjiwaram, pure silk Peshwai, Khan Saree , Traditional Sardeshpande and Dress materials",
          youtube_link: "https://www.youtube.com/embed/q58SSl2btSA",
          desc1: "Stree Collections - All types of Paithani, Kanjiwaram, pure silk Peshwai, Khan Saree , Traditional Sardeshpande and Dress materials",
          contact: "9769342226",
          email1: "rachana.nimkar@gmail.com",
          fb: "Facebook: https://www.facebook.com/RachanaNimkar22/"
      },
      {
          si_no: "34",
          stall_no: "C6",
          name: "S HemaHarinath",
          contact1: "9945390484",
          email1: "sringerihemaharinath@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Clothing",
          product: "All are different prices",
          youtube_link: "https://www.youtube.com/embed/sJIURQxZ6Qo",
          desc1: "Saakhe Collections - Saree, Dress Materials and Kurtis",
          contact: "9945390484",
          email1: "sringerihemaharinath@gmail.com",
          "undefined": " "
      },
      ]
    },
    {
      name: "Jewelry",
      items: [
        {
          si_no: "1",
          stall_no: "J1",
          name: "Ruta Sensharma",
          contact1: "9845904399",
          email1: "",
          representation: "Swakruta Charitable Trust Member",
          category: "Jewelry",
          product: "Terracotta jewellery, terracotta Diyas, Key hangers, pen stands starting 100 to 1500. Various colours, ecofriendly material",
          youtube_link: "https://www.youtube.com/embed/NhUpvnz7nxs",
          desc1: "Rutu's Kreations - Terracotta jewellery, terracotta Diyas, Key hangers, pen stands starting 100 to 1500. Various colours, ecofriendly material",
          contact: "9740263533 / 9845904399",
          email: "info@rutus-kreations.com",
          site: "www.rutus-kreations.com",
          fb: "Facebook: @rutuskreations",
          insta: " Instagram: @rutuskreations"
      },
      {
          si_no: "4",
          stall_no: "J2",
          name: "Uthkala Creations",
          contact1: "9380801835",
          email1: "uthkalacreations@gmail.com",
          representation: "Non-Member",
          category: "Jewelry",
          product: "Varies from product to product. We have paintings, jewellery, and other small items like tea coasters, fridge magnets etc.",
          youtube_link: "https://www.youtube.com/embed/UtPoN_X7Nl0",
          desc1: "Uthkala Creations- Varies from product to product. We have paintings, jewellery, and other small items like tea coasters, fridge magnets etc.",
          contact: "9380801835",
          email1: "uthkalacreations@gmail.com",
          fb: "Facebook: on Facebook Uthkala Creations",
          insta: " Instagram: @uthkala_creations",
          youtube: " YouTube: https://rb.gy/mwxypm"
      },
      {
          si_no: "6",
          stall_no: "J3",
          name: "G.Madhavi",
          contact1: "9844891122",
          email1: "srinishandh@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Jewelry",
          product: "Handloom sarees are length 6.5mtr,42-44inches width,handmade items are Customized",
          youtube_link: "https://www.youtube.com/embed/7G5lvF0mVKQ",
          desc1: "Srini's Handloom and Handmade Collections - Handloom sarees are length 6.5mtr, Suits 42-44inches width, handmade items are Customized",
          contact: "6360999459",
          email1: "srinishandh@gmail.com",
          fb: "Facebook: @SrinisHandloomCollections",
          insta: " Instagram: @SrinisHandloomCollections"
      },
      {
          si_no: "15",
          stall_no: "J4",
          name: "Rachana Kurdikar",
          contact1: "9845975051",
          email1: "rachana.kurdikar@gmail.com",
          representation: "Swakruta Charitable Trust Member",
          category: "Jewelry",
          product: "Hand-made semi-precious beads jewellery, German Silver jewellery, mandala art on canvas, mud pots, coasters, center pieces etc. Tarot card consultation.",
          youtube_link: "https://www.youtube.com/embed/nDHJxCYzNXM",
          desc1: "Unique Dazzling Beads - Hand-made semi-precious beads jewellery, German Silver jewellery, mandala art on canvas, mud pots, coasters, center pieces etc. Tarot card consultation.",
          contact: "9845975051",
          email1: "rachana.kurdikar@gmail.com",
          fb: "Facebook: @Unique Dazzling Beads",
          insta: " Instagram: @Unique Dazzling Beads"
      },
      ]
    },
    {
      name: "Decorative Items",
      items: [
        {
          si_no: "24",
          stall_no: "NG1",
          name: "Pra foundation",
          contact1: "9881907241",
          email1: "prafoundatiin07@gmail.com",
          representation: "Outstation Participant",
          category: "Decorative Items",
          product: "Clay diya(panti) 15/- each",
          youtube_link: "https://www.youtube.com/embed/JmdbDZxlgvU",
          desc1: "Pra Foundation - Clay diya(panti) 15/- each",
          contact: "9623029656",
          email1: "prafoundatiin07@gmail.com",
          site: "www.prafoundation.com",
          fb: "Facebook: Pra fou"
      }
      ]
    }
  ]
  
  module.exports = stalls.map(item=>{
    item.slug = slugFnc(item.name);
    return item;
  });
  