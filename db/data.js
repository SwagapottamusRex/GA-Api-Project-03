const createPodcast = (
  title,
  description,
  year,
  img,
  duration,
  host,
  guests,
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
    'Phil Wang'
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
    'https://en.wikipedia.org/wiki/File:NPR_Code_Switch_cover_art.png',
    44,
    'Shereen Marisol Meraji & Tasneem Raj',
    'Tiny Tom Cruise',
    'Politics, Current Affairs, Talk'
  ),
];
export default podcasts;
