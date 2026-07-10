export interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  event: string;
  associated_organizations?: string[];
  celebrities_involved: string[];
  hashtags: string[];
  images: string[];
}

export const ourPrideData: EventData[] = [
  {
    id: 1,
    title: "LEADING & ORGANISING THE RALLY OF #STOPSPEED in #Bangalore Along with celebrities from the south @thenameisyash @akkineniakhil @suniltollywood who joined this event ** #THROWBACK #VISHALBIKER #memories",
    date: "5 March 2021",
    location: "Bangalore",
    event: "#STOPSPEED Rally",
    celebrities_involved: [
      "@thenameisyash",
      "@akkineniakhil",
      "@suniltollywood"
    ],
    hashtags: [
      "#STOPSPEED",
      "#Bangalore",
      "#THROWBACK",
      "#VISHALBIKER",
      "#memories"
    ],
    images: [
      "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/471354947_10160558248806696_4944153313722273785_n.jpg?stp=dst-jpg_tt6&cstp=mx627x539&ctp=s627x539&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=V6DRFAMkzg0Q7kNvwEpRtmM&_nc_oc=Adpfwh-cZroPT_jqPWvV2EKdDgbWL9Fzw13zKqHGiGuLcvmyhz6rhSNeCfZ2KBjCPe-aBdcUK-nv5Qx0DVQRovPl&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=sajDN16aOA4KJTg5bESKXg&_nc_ss=7b2a8&oh=00_AQA2CpoT6pW3Vv3HoMDop8rEw_LM4Gry-ypLusrNKHyt3Q&oe=6A55D1A9",
      "https://scontent.fhyd14-3.fna.fbcdn.net/v/t1.6435-9/156214088_10157758550256696_4867770794997647041_n.jpg?stp=dst-jpg_tt6&cstp=mx689x514&ctp=s689x514&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=O0UzYlN3nx4Q7kNvwFTr9a4&_nc_oc=AdoVkCQzRiUn4F9IV-1aaivuOFIY17I7ImvHLjOoX2PmAU1kMAswZmmt1f3QE2c8vkqm92k71nZk56VhTG-6eTx7&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=X917xSUcq0CaJ0bpmGkTpQ&_nc_ss=7b2a8&oh=00_AQDarppTN92-lB0ToTAm-fcZR6OOa2UsgD_6h8W-0K1_ww&oe=6A7744FE",
      "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/514035036_24123162127316754_2748911282849249421_n.jpg?stp=c161.0.638.638a_dst-jpg_tt6&cstp=mx638x638&ctp=s206x206&_nc_cat=102&ccb=1-7&_nc_sid=969c58&_nc_ohc=Qe6e4wrpKsMQ7kNvwGRqLiG&_nc_oc=AdpT4RKP0G1lmNa3T0wOxGzW-ser-oBY0FXMucjUWYAm9okwDvfX5x01_av0tun1ENz3tmmHdWJMxof9mC6tMBJF&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=aZF4GuU_P3Pn2KlGrcl15g&_nc_ss=7b2a8&oh=00_AQDNJHpx2J0yT8B9wzp7uqanXzk0TaY5sW_f92wBOS6Sng&oe=6A55D5F3",
      "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/514172956_24123162287316738_6499408250774164448_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s206x206&_nc_cat=101&ccb=1-7&_nc_sid=969c58&_nc_ohc=ouH4dZW2xHAQ7kNvwEbaqfG&_nc_oc=Adr45qlm3Tw0Der81Mx7sCR3UYsrayeL6ISMSR1fU9gIrjp9ufFnWvFzffA9q_Nj9AMFi2SGMYw6j-NGx87FeCsq&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=aZF4GuU_P3Pn2KlGrcl15g&_nc_ss=7b2a8&oh=00_AQBYnN2AHscIXPDxdQxq__9sVQDuNZ-YXEbXkazdAROqXw&oe=6A55D7A0",
      "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/513860856_24123162537316713_5147901398905910580_n.jpg?stp=dst-jpg_tt6&cstp=mx960x640&ctp=s960x640&_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=6vt3oSHIU-gQ7kNvwFaZGvc&_nc_oc=Adpl7Zaft2qDsHo3u0EJ0YEHrODF_jcLTiP8wrpc-4wVbLK76iXGtcy-gsAyMuyvEXqDS1iUWXiPzyCu17Nd_el8&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=MaF67EI1GpBl9U9uRYnzaA&_nc_ss=7b2a8&oh=00_AQCMo_5o3Nxo0azszWY1QzGrlc5nj_3QkpyzOkLvH3VUKw&oe=6A55AF91"
    ]
  },
  {
    "id": 2,
    "title": "Always giving your support, cooperating with me in speed driving awareness, and appreciating your constant support. (ఎల్లప్పుడు సపోర్ట్ ఇస్తూ , స్పీడ్ డ్రైవింగ్ అవర్నెస్ లో నాకు సహకారం అందిస్తూ వస్తున్నా మీ సపోర్ట్ ని అభినందిస్తూ)",
    "date": "5 March 2017",
    "location": "South India",
    "event": "#STOPSPEED Campaign",
    "celebrities_involved": [
      "Naga Chaitanya"
    ],
    "hashtags": [
      "#STOPSPEED",
      "#SafeDriving",
      "#Awareness"
    ],
    "images": [
      "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/514010090_24121081087524858_5666970736541979205_n.jpg?stp=dst-jpg_tt6&cstp=mx960x678&ctp=s960x678&_nc_cat=102&ccb=1-7&_nc_sid=75d36f&_nc_ohc=A_5IUmgmFMIQ7kNvwHbbMuI&_nc_oc=Adq3VMd3p7F2meW8jVgwiu3ZavfeWxngzVkVlYBDLpsBDpemT2hIMphBhWezxFf30TCbOqUeOKCgrmCfqSS7AQk5&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=UWJvi65g5SK9jQ8Vi_UeBg&_nc_ss=7b2a8&oh=00_AQDtF1iDMdn5hcTGmkdOjiD98XjJTGL7f3Ynt7ZaSevsqg&oe=6A55C11E",
      "https://scontent.fhyd14-4.fna.fbcdn.net/v/t39.30808-6/482318898_9790466047654873_5871447130301192699_n.jpg?stp=dst-jpg_tt6&cstp=mx1125x1723&ctp=s1125x1723&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FrNiXcPzNAIQ7kNvwHQQwcV&_nc_oc=AdrHP9VEx1FtRMBa-6xmXPWTJMfOGjbpvp9_Z6OaQDlq9VJJKAf7uL8p3ntkUPjHP1Q1C5jKnm8QdfpKd60mnOdg&_nc_zt=23&_nc_ht=scontent.fhyd14-4.fna&_nc_gid=Bynu0hMOgLTdAJfoCDNbWg&_nc_ss=7b2a8&oh=00_AQDUKOw5TY6oWQzKes1TcZJU7Rkod6d8_21PkZELieLGig&oe=6A55A571",
      "https://scontent.fhyd14-1.fna.fbcdn.net/v/t39.30808-6/482208396_9790465864321558_4958568123404629770_n.jpg?stp=dst-jpg_tt6&cstp=mx1125x1069&ctp=s590x590&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5UTqVuoKAgkQ7kNvwGuEl9v&_nc_oc=AdreUc-F1NuI0cpS9YEevEjahv9mWX6CJ9D1xd2nQtZZZSWHHH3IT5WfTmDyzEbYlpHt86Ucvqdg3BjfjnqTuOwO&_nc_zt=23&_nc_ht=scontent.fhyd14-1.fna&_nc_gid=rccZvotEPEEhAc3kKPakZA&_nc_ss=7b2a8&oh=00_AQAA7DDtIpxTay64789e9-wpcjwt4polfnmzMcmmHR_Ibg&oe=6A55C64F"
    ]
  },
  {
    "id": 3,
    "title": "#Stop #speed event Akkineni Naga Chaitanya rides his own bike in associated wid Sriharsha foundation need all ua support in future tq",
    "date": "5 March 2017",
    "location": "South India",
    "event": "#STOPSPEED Campaign",
    "associated_organizations": [
      "Sriharsha Foundation"
    ],
    "celebrities_involved": [
      "Akkineni Naga Chaitanya"
    ],
    "hashtags": [
      "#Stop",
      "#speed",
      "#STOPSPEED"
    ],
    "images": [
      "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/496671928_2775643699285384_1424675422849777045_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1396&ctp=s590x590&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZP55QhVfBSAQ7kNvwGbw0zb&_nc_oc=Adqd0Q2NSugwgVNAZrK1VMgt9SlbUEk0UJCuHU6tjIZc67rGnL-afLlyoPjmLi8AjpaJmEzaJ2Oo54Eupp3d3zB4&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=WFjCoQjxcAU9hFCOs0LY5w&_nc_ss=7b2a8&oh=00_AQC60bqyri5Jpwine7AjLcjFzCZLKA7z47rGPLKTvKxcEg&oe=6A55C50C",
      "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-6/496692286_2775643649285389_3588395542043888716_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x794&ctp=s590x590&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=54OAJq1KTnkQ7kNvwH5N0_u&_nc_oc=Adrk8soGZ4YUy44sZXxdrb9nH1wK5E5MyuaAGAa0flVdu9v637J8ETX7Gw3sk2UvCmZjASuvmEsRwI3uJJkvr7-e&_nc_zt=23&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=WFjCoQjxcAU9hFCOs0LY5w&_nc_ss=7b2a8&oh=00_AQATpXjDmK_Ng32LD3rL7YHLWaK-yBH9Cz56W-aj9eZHFQ&oe=6A55B1E6"
    ]
  },
  {
    "id": 4,
    "title": "#FITNESSUNPLUGGED - India's largest fitness event with Actress Rakul Preet to raise funds to help rape victims. Let's come together to build a better future.",
    "date": "2016",
    "location": "India",
    "event": "#FITNESSUNPLUGGED Campaign",
    "celebrities_involved": [
      "Rakul Preet Singh"
    ],
    "hashtags": [
      "#FITNESSUNPLUGGED",
      "#FitnessForACause",
      "#SupportVictims"
    ],
    "images": [
      "https://scontent.fhyd14-2.fna.fbcdn.net/v/t39.30808-6/512691155_24114329731533327_6343235158735841858_n.jpg?stp=dst-jpg_tt6&cstp=mx539x455&ctp=s539x455&_nc_cat=110&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=rw9znfYRNY4Q7kNvwHE2Qft&_nc_oc=AdpvkYiV-kvH1_HDvg9rv5oBoLV_MLWN8XRbuk9U954DymIQYYp1QZ5tnuSxwRKkpMSCgJr3xBvjxvWgVPa8CU6F&_nc_zt=23&_nc_ht=scontent.fhyd14-2.fna&_nc_gid=VwJQ51ZmTZUOxbbZhKhK5A&_nc_ss=7b2a8&oh=00_AQDNFp7Xia636yggjl2XDhXzZRAQ8wOquNtmszsga7lZ7g&oe=6A55B465",
      "https://scontent.fhyd14-5.fna.fbcdn.net/v/t39.30808-6/513824791_24114345648198402_7291215678672871258_n.jpg?stp=dst-jpg_tt6&cstp=mx540x960&ctp=s540x960&_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=Mx4OmyQSQlMQ7kNvwG2eLvQ&_nc_oc=AdoPQJ71y4Sx0GSkoc4Ou0SKyfcNBb62VTn338cgbLfcI9KYBTmQZVE9C4DsAaI3p54DUJ17QfZ3PI-ypK2OlEVd&_nc_zt=23&_nc_ht=scontent.fhyd14-5.fna&_nc_gid=6j2HqXkiYWng2YYu_Pn6bw&_nc_ss=7b2a8&oh=00_AQAG_wq9ajXBKAdowD4NVvgZLzvJVhnDYxhNaiCfNCY5Ow&oe=6A55B2F1"
    ]
  }
];
