const createPodcast = (
  title,
  description,
  year,
  img,
  duration,
  host,
  guests,
  genre,
  createdBy,
  comments
) => {
  return {
    title: title,
    description: description,
    year: year,
    img: img,
    duration: duration,
    host: host,
    guests: guests,
    genre: genre,
    createdBy: createdBy,
    comments: comments,
  };
};

const podcasts = [
  createPodcast(
    'The Adam Buxton Podcast',
    'a podcast in which the English comedian Adam Buxton interviews friends and celebrities. Recurring guests include his comedy partner Joe Cornish and the filmmaker Louis Theroux.',
    2015,
    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Adam_Buxton_Podcast_logo.jpg/220px-Adam_Buxton_Podcast_logo.jpg',
    87,
    'Adam Buxton',
    'LouisTheroux',
    'Talk'
  ),

  createPodcast(
    ' Off Menu',
    'Off Menu with Ed Gamble and James Acaster is a food and comedy podcast in which guests are invited to select their dream menu by both comedians',
    2018,
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Off_Menu_Podcast_Cover_Art.jpg/220px-Off_Menu_Podcast_Cover_Art.jpg',
    61,
    'Ed Gamble & James Acaster',
    'Phil Wang',
    'Comedy, Food and Drink'
  ),

  createPodcast(
    'Tailenders',
    'Tailenders is the hit podcast which takes an alternative look at cricket, fronted by Greg James alongside cricket super-fan and former Maccabees frontman Felix White, and Englands greatest ever Test bowler James Anderson.',
    2017,
    'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/c7/9b/b1/c79bb19c-87f4-fb63-9546-6dcfb04b2231/mza_2942916452169403222.jpg/1200x1200bb.jpg',
    53,
    'Greg James, Felix White and James Anderson',
    'Matchin Tendulkar',
    'Sports, Comedy, Talk, Cricket'
  ),

  createPodcast(
    'Code Switch',
    'Code Switch is a race and culture outlet and a weekly podcast from American public radio network NPR.',
    2013,
    'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/14360523/876fd10a44023143.png',
    44,
    'Shereen Marisol Meraji & Tasneem Raj',
    'Tiny Tom Cruise',
    'Politics, Current Affairs, Talk'
  ),
  createPodcast(
    'Up and Vanished',
    'Up and Vanished is an investigative documentary-style podcast hosted by Payne Lindsey. The series investigates missing persons cold cases by reviewing old leads, interviewing witnesses and townspeople, and on-site investigation.',
    2018,
    'https://upload.wikimedia.org/wikipedia/en/4/4e/Up_and_Vanished.jpeg',
    50,
    'Payne Lindsey',
    'Tiny Tom Cruise',
    'Crime'
  ),
  createPodcast(
    'Alice in Wanderland',
    'The slower you travel, the more you learn. I’m Alice Morrison, an Adventurer, exploring the ancient trails and life today in Africa and Arabia. Walk with me!',
    2018,
    'https://i0.wp.com/alicemorrison.co.uk/wp-content/uploads/2019/10/Podcast-try-4-copy-website.jpg?w=2400&ssl=1',
    54,
    'Alic Morisson',
    'Travelling tiny Tom Cruise',
    'Travel'
  ),
  createPodcast(
    'Happy Place',
    'Fearne Cotton talks to incredible people about life, love, loss, and everything in-between as she reveals what happiness means to them.',
    2019,
    'https://thumborcdn.acast.com/kOXXTbecd7igZV5WfE97MvsSN6E=/500x500/https%3A%2F%2Fassets.pippa.io%2Fshows%2F62260956118c54704394e034%2Fshow-cover.jpg',
    34,
    'Fearne Cotton',
    'Holly Willoughby in some capacity I imagine',
    'Health'
  ),
  createPodcast(
    'Left, Right and Center',
    'Take a look at things from another perspective with this podcast which talks to experts from both sides of the aisle to examine all of the ideological differences, and all of the similarities between the parties viewpoints on the big stories dominating the political scene.',
    2019,
    'https://images.squarespace-cdn.com/content/v1/50189cc3e4b0807297e80058/1527978343634-SNGSKF1QLQDCGE1PF4D3/Left+Right+and+Center.png?format=750w',
    34,
    'Kimberly Atkins Stohr',
    'Joe Biden & Donald Diaper Drumpf',
    'Politics'
  ),
  createPodcast(
    'Science Weekly podcast',
    'Alison Benjamin brings you the latest environment news from around the planet and is joined in the studio by environmental journalists, experts and guests.',
    2019,
    'https://cdn-profiles.tunein.com/p277471/images/logod.png?t=154844',
    34,
    'Alison Benjamin',
    'David Attenborough',
    'Environment / Science'
  ),
  createPodcast(
    'Life as an Egg',
    'Ross Kemp talks candidly about his difficulties living life as an egg. Featuring weekly guests who give him encouragement to leave his egg-cup on Albert Square',
    1964,
    'http://s1.b3ta.com/host/creative/40640/1273095640/EggRoss.jpg',
    34,
    'Ross Kemp',
    'Tony Bennet',
    'Miscellaneous'
  ),
  createPodcast(
    'Entrepeneurs on Fire',
    'Join us on this whacky experiment, where we ask famous business people ALL the tough questions while they literally go up in smoke!',
    2019,
    'https://s3.amazonaws.com/www.starterstory.com/story_images/images/000/000/630/original/open-uri20190103-4-s4a1u2?1546540352',
    34,
    'Andrew Fire',
    'Richard Branston',
    'Miscellaneous'
  ),
  createPodcast(
    'The Day Today',
    'Join us on this whacky ecercise in futility, where we ask famous business people ALL the tough questions while they literally go up in smoke!',
    2015,
    'https://alchetron.com/cdn/the-day-today-9c256ef8-002b-497a-b70f-22f4ad7694c-resize-750.jpeg',
    90,
    'Alan Partridge & Peter Ohanrahan Ohanrahan',
    'Michael Hesseltine',
    'News & Current Affairs'
  ),
  createPodcast(
    'Lex Fridman Podcast',
    'Conversations about science, technology, the human mind, and the nature of intelligence, consciousness, love, and power.',
    2015,
    'https://www.happyscribe.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUhJUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--388a6a1b36fc0f3b5dc35496888abfead3264420/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9UY21WemFYcGxYM1J2WDJacGJHeGJCMmtDZ0FKcEFvQUMiLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--234b44c52e13994fdd283c4997f7126997046d03/lex-frid.png',
    81,
    'Lex Fridman',
    'ELon Muskrat',
    'Technology'
  ),
  createPodcast(
    'Hamish & Andy',
    'Hamish Blake and Andy Lee got their start on community radio in Australia when they were university students. The humble beginnings of their careers evolved and they’re now the two biggest TV and radio personalities in the country. Hands-down the owners of the best description for a podcast of all time',
    2015,
    'https://www.inspirespeakers.com.au/wp-content/uploads/2020/04/Screen-Shot-2020-04-27-at-3.36.08-pm-1270x1280.png',
    81,
    'Hamish',
    'Andy',
    'Comedy'
  ),
  createPodcast(
    'Getting Curious',
    'A weekly exploration of all the things Jonathan Van Ness (Queer Eye, Gay of Thrones) is curious about. Come on a journey with Jonathan and experts in their respective fields as they get curious about anything and everything under the sun.',
    2015,
    'https://s3.amazonaws.com/media.thecrimson.com/photos/2018/04/22/154132_1330281.jpg',
    81,
    'Jonathan',
    'Karomo and the gang',
    'Lifestyle'
  ),

  createPodcast(
    'All Ears',
    'A weekly show hosted by a couple who are literally made of nothing more than ears, join them as they embark on a cleansing cathartic journey!',
    2015,
    'https://cdn-profiles.tunein.com/p652130/images/logod.png?t=1',
    81,
    'Ear Ladies',
    'Yhe man who was just a foot & Pete Walthemstow',
    'Lifestyle'
  ),
];
export default podcasts;
