'use strict'

const data = [
  {
    quotes: [
      'Modern mind is overstimulated. Modern body is under-stimulated. Meditation, exercise, fasting restore ancient balance.',
      'Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth. Status is your place in the social hierarchy.',
      'You make your own luck if you stay at it long enough.',
      'You have society in your phone, society in your pocket, society in your ears… It’s socializing you and programming everyone. The only solution is to turn it off.”',
      'To the experts, what looks like hard work from the outside, is play from the inside.',
      "In any situation in life, you always have three options. You can change it, you can accept it, or you can leave it. What is not a good option is to sit around wishing you would change it but not changing it, wishing you would leave it but not leaving it, and not accepting it. It's that struggle, that aversion, that is responsible for most of our misery. The phrase that I probably use the most to myself in my head is just one word: accept.",
      'Learn to sell. Learn to build. If you can do both, you will be unstoppable.',
      'Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.',
      'Specific knowledge is often highly technical or creative. It cannot be outsourced or automated.',
      'Desire is a contract that you make with yourself to be unhappy until you get what you want.',
      'The secret to public speaking is to speak as if you were alone.',
      'People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can’t fathom.',
      'Reading is faster than listening. Doing is faster than watching.',
      "When you're finally wealthy, you'll realize that it wasn't what you were seeking in the first place.",
      "It's almost always possible to be honest and positive.",
      'Blockchains will replace networks with markets.',
      'A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.',
      'The real struggle isn’t proletariat vs bourgeois. It’s between high-status elites and wealthy elites. When their cooperation breaks, revolution.',
      'Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.',
      'Even today, what to study and how to study it are more important than where to study it and for how long. The best teachers are on the Internet. The best books are on the Internet. The best peers are on the Internet. The tools for learning are abundant. It’s the desire to learn that’s scarce.',
      'This is such a short and precious life that it’s really important that you don’t spend it being unhappy.',
      'The power to make and break habits and learning how to do that is really important.',
      'Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.',
      'A rational person can find peace by cultivating indifference to things outside of their control.',
      'The problem happens when we have multiple desires. When we have fuzzy desires. When we want to do ten different things and we’re not clear about which is the one we care about.',
      'People spend too much time doing and not enough time thinking about what they should be doing.',
      'The people who succeed are irrationally passionate about something.',
      'I don’t plan. I’m not a planner. I prefer to live in the moment and be free and to flow and to be happy.',
      'Be present above all else.',
      'Pick three hobbies: One that makes you money, one that makes you fit, and one that keeps you creative.',
      'The older the problem, the older the solution.',
      'It’s the mark of a charlatan to try and explain simple things in complex ways and it’s the mark of a genius to explain complicated things in simple ways.',
      'People who try to look smart by pointing out obvious exceptions actually signal the opposite.',
      'Cynicism is easy. Mimicry is easy. Optimistic contrarians are the rarest breed.',
      'Following your genuine intellectual curiosity is a better foundation for a career than following whatever is making money right now.',
      'A personal metric: how much of the day is spent doing things out of obligation rather than out of interest?',
      'To be honest, speak without identity.',
      'We feel guilt when we no longer want to associate with old friends and colleagues who haven’t changed. The price, and marker, of growth.',
      'The most important trick to be happy is to realize that happiness is a choice that you make and a skill that you develop. You choose to be happy, and then you work at it. It’s just like building muscles.',
      'I don’t have time is just saying it’s not a priority.',
      'Escape competition through authenticity.',
      'Signaling virtue is a vice.',
      'Knowledge is a skyscraper. You can take a shortcut with a fragile foundation of memorization, or build slowly upon a steel frame of understanding.',
      'Politics is the exercise of power without merit.',
      'Doctors won’t make you healthy. Nutritionists won’t make you slim. Teachers won’t make you smart. Gurus won’t make you calm. Mentors won’t make you rich. Trainers won’t make you fit. Ultimately, you have to take responsibility. Save yourself.',
      'Impatience with actions. Patience with results.'
    ],
    author: 'Naval Ravikant',
    url: 'https://nav.al/',
    handle: '@naval'
  },
  {
    quotes: [
      'We are only as big as the smallest thing it takes to divert us from our goals.',
      'Friendship is more about being there and less about being on facebook.',
      'Peace of mind is the highest wealth.',
      'The most valuable thing to understand is your own mind.',
      'If you are not happy with what you already have, how could you be happier with more?',
      'The good news about school is that it doesn’t reflect the real world. The bad news about school is that it doesn’t reflect the real world.',
      'Start tomorrow today.',
      'Being yourself is a valid goal.',
      'Someone always has the capacity to ruin your day, but whether they do is up to you.',
      'We don’t understand the value of something until we lose it.',
      "You don't need more information, you need to tell the difference between what is important and what isn't.",
      'It takes sweat to work, but only saliva to criticize.',
      'Learning is just as entertaining as entertainment, but with long term benefits.',
      'Deschool your mind, then begin to ask questions.',
      'Knowledge is cheap, curiosity is priceless.',
      'If you can fully accept yourself, others, and the world around you — only trying to change the truly changeable — you’ll be miles ahead of the people who wish life was different, fair, and in-line with their expectations.',
      'For your own sake, get in the habit of understanding the things you wish weren’t true.',
      'If you work like a maniac for three hours you will have surpassed most people who work off and on for eight.',
      'Learning to be happy when you have nothing and are nothing is the most sane thing you can do.',
      "If there is fear, it's not love, it's insecurity. If there is jealousy, it's not love, it's immaturity. If there is anger, it's not love, it's separation. If there is need, it's not love, it's dependence. If there is control, it's not love, it's habit.",
      'Fear wants to protect you, even from the good things in life.',
      'When you stop doing the wrong things, the right thing does itself.',
      'If you didn’t earn it, you’re probably not going to know how to keep it.',
      'Don’t be a prisoner of your preferences. Interrogate your own opinions.',
      'Learn how to say no. First, by saying no to ego which wants it all.',
      'Only a man who loves to prove himself wrong is the true seeker of knowledge.',
      'Stop trying to cope with distractions and work to eliminate them.',
      'Don’t be afraid of discomfort, be more afraid of comfort.',
      'Vulnerability is not fragility. You can allow yourself to bend without breaking.',
      'If you can learn to be patient in a very impatient society, you win.',
      'Thinking about doing is more exhausting than doing. Just do it.',
      'You can measure someone based on the size of the things that bother them.',
      'Kids learn what’s important to adults not by listening to what they say, but by noticing what gets their attention.',
      "If you don't know why you are doing it, then why are you doing it?",
      'Differences draw attention. It takes focus to see similarities'
    ],
    author: 'Thibaut',
    url: 'https://twitter.com/kpaxs',
    handle: '@Kpaxs'
  },
  {
    quotes: [
      'Every word you pronounce when angry will go against you.',
      'Don’t worry about what people think about you: they don’t.',
      'The more you judge, the less you think.',
      'No one can stop you if you’re consistently creative.',
      'If you care about the truth, stop consuming any mainstream media. The truth is never popular.',
      'If you constantly get offended by people who speak the truth, soon enough, you will only be surrounded by liars.',
      'You are not wealthy when you have money, you are wealthy when you can spend your time on your own terms.',
      'People who harass others always pretend to be the victims once the victims fight back.',
      'If you want a certain type of people around you, become that certain type of person first.',
      'Don’t be angry when they treat you poorly, be sorry: that’s how they treat themselves.',
      "Half of success is about cutting off people who don't grow and don't want you to either.",
      "If you can't do anything only you can do, you will be assigned something many others can do.",
      'A sign of intelligence: when you disagree, you start questioning your own beliefs.',
      'Detach yourself from your identity and no one can hurt you with words.',
      'The difference between happy people and worried people: detachment.',
      'If investing was easy, everyone would be rich. If good habits were easy, everyone would be fit, smart, talented. If building a family was easy, everyone would be happy. If spending time alone was easy, everyone would be clear-minded.',
      "It's usually not a gap of talent, but a gap of focus and consistency.",
      "You are truly rich once most of your time isn't spent thinking about money.",
      '“Lucky people” who caught opportunities had been getting ready for years.',
      'Anxiety is lack of meaning. Anger is lack of intelligence. Blaming is lack of understanding. Depression is lack of growth.',
      "Four principles for life. Don't destroy what you can't build. Don't criticize what you can't create. Don't envy what you won't work for. Don't judge what you don't understand",
      'Every time you dislike someone, start asking what they have that you might want.',
      'No one ever got successful by pleasing everybody.',
      'Talent is mostly a lot of time training hard alone even when you don’t feel like it.',
      'You worry less when you do more.',
      'Successful people are just people really good at ignoring distractions.',
      'Life is over, not when your body no longer responds, but when your mind stops being curious.',
      'You can’t compete against people who have fun working.',
      "Another sign of intelligence: you don't judge people you know nothing about.",
      "If you enjoyed it, it wasn't a waste of time. Life isn't all about productivity.",
      'Talent is just another word for discipline.',
      'Efforts are always rewarded, you just don’t know when, and it’s never linear.',
      'No one cares about what you think you can do until you actually do it.',
      'To upgrade knowledge, read. To upgrade understanding, teach. To upgrade clarity, write. To upgrade health, fast. To upgrade growth, self-reflect. To upgrade open-mindedness, travel. To upgrade life, do all of the [previous].'
    ],
    author: 'Orange Book',
    handle: '@orangebook_',
    url: 'orangebook_'
  },
  {
    quotes: [
      'Our work is never over.',
      'For me, money is not my definition of success. Inspiring people is a definition of success.',
      "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
      "We came into a broken world. And we're the cleanup crew.",
      "We all self-conscious. I'm just the first to admit it.",
      'I still think I am the greatest.',
      'My greatest pain in life is that I will never be able to see myself perform life.',
      'Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.',
      'My greatest award is what I’m about to do.',
      'I feel like I’m too busy writing history to read it.',
      'Living well eliminates the need for revenge.',
      'Why are people so afraid of creative ideas and so scared of truth? All I want to do is do good.',
      'One of my biggest Achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.',
      'People always tell you ‘Be humble. Be humble.’ When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome!',
      'Most people are slowed down by the perception of themselves. If you’re taught you can’t do anything, you won’t do anything. I was taught I can do everything.',
      'I’m pretty calculating. I take stuff that I know appeals to people’s bad sides and match it up with stuff that appeals to their good sides.',
      'When you’re the absolute best, you get hated on the most.'
    ],
    author: 'Kanye West',
    handle: '@kanyewest',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Henri Charrière (Papillon)',
    quotes: [
      'Tasting the discoveries of science as one licks a sorbet leads to a thirst for better comfort and the constant struggle to achieve it. All this kills the soul, the commiseration, the understanding, the nobility.'
    ],
    url: 'https://en.wikipedia.org/wiki/Papillon_(book)'
  },
  {
    author: 'Friedrich Nietzsche',
    quotes: [
      'Everything the State says is a lie, and everything it has it has stolen.'
    ],
    url: 'https://en.wikipedia.org/wiki/Friedrich_Nietzsche'
  },
  {
    author: 'Mary Catherine Bateson (Composing a Life)',
    url: 'https://en.wikipedia.org/wiki/Mary_Catherine_Bateson',
    quotes: [
      'We are not what we know, but what we are ready to learn.',
      'The real winners in this rapidly changing world will be those who are most open to alternatives, those who are able to respect and value differences.',
      'Why is our civilization so attentive to economies of scale and blind to the economics of composition?',
      'Today I refuse to work in a position where my trust depends on the other and I believe that independence is the precondition for genuine partnership and responsible participation.'
    ]
  },
  {},
  {
    quotes: [
      "Freedom of transaction is a human right that you need to carry out all your other human rights. What worth is freedom of assembly if you can't buy a train ticket anonymously to go to that assembly?"
    ],
    author: 'Joerg Platzer',
    url: 'http://www.room77.de/'
  },
  {
    quotes: ['What ends as being better starts as being different.'],
    author: 'Shane Parrish',
    url: 'https://shaneparrish.net/'
  },
  {
    author: 'Patrice Franceschi (Ethique du Samourai moderne)',
    url: 'https://fr.wikipedia.org/wiki/Patrice_Franceschi',
    quotes: [
      'Will combined with courage must obey reason, one of the guides of which is generosity.',
      "It's better to think too big and risk getting lost. Than too small, and get nowhere.",
      "Don't always stay in the middle of the road. Dare to go on the ridges at times. The air is pure on the summits and the precipices are clearly visible."
    ]
  },
  {
    quotes: ['What if I fall? Oh but my Darling, what if you fly?'],
    author: 'Erin Hanson',
    url: 'https://www.instagram.com/thepoeticunderground/?hl=en'
  },
  {
    author: 'Lao Tzu',
    quotes: [
      'The great leader talk little. He never speaks carelessly. He works without self-interest and leaves no trace. When he leaves people say « we did it ourselves »'
    ],
    url: 'https://en.wikipedia.org/wiki/Laozi#Tao_Te_Ching'
  },
  {
    quotes: [
      'Tension is who you think you should be. Relaxation is who you are.'
    ],
    author: 'Chinese proverb'
  },
  {
    author: 'Andy Yen',
    quotes: [
      'In any society, if they want to take away your freedom, the first thing they attack is your privacy'
    ],
    url: 'https://protonmail.com/about'
  },
  {
    quotes: [
      'Wisdom is achieved by keeping an open mind and a closed mouth. Ignorance is exposed by having an open mouth and a closed mind'
    ],
    author: 'Jim Stovall',
    url: 'http://jimstovall.com/index.html'
  },
  {
    author: 'Rita Mae Brown',
    quotes: [
      'The reward for conformity is everyone likes you except yourself.'
    ],
    url: 'https://www.ritamaebrownbooks.com/'
  },
  {
    author: 'Napoléon Bonaparte',
    url: 'Envy is a declaration of inferiority',
    quotes: ['Envy is a declaration of inferiority.']
  },
  {
    author: 'Xerses',
    quotes: [
      "If you take account of every danger you'll never do anything . It's better to have a brave heart and endure one half of the terrors we dread than to calculate all of the terrors and suffer nothing at all. . . . Big things are won by big dangers."
    ],
    url: 'https://en.wikipedia.org/wiki/Xerxes_I'
  },
  {
    author: 'John Wooden',
    quotes: [
      'Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.'
    ],
    url: 'https://en.wikipedia.org/wiki/John_Wooden'
  },
  {
    author: 'Bruce Lee',
    quotes: [
      'Live content with small means.',
      'Abstract analysis is not the answer: to stand on the outside and try to look in the inside is futile, whatever was there will go away. To try to identify happiness is like turning on a light to look at darkness. Analyze it and it is gone.',
      'The thing in which error arrives is judgment. An idea, by itself, is not erroenous, judgment makes it.',
      'The more we value things, the less we value ourselves.',
      'The spiritually deficient searches for external securities - the poorer we are inwardly, the more we try to enrich ourselves outwardly.',
      'Becoming is a denial of being.',
      "Anxiety is the gap between the now and the THthenEN. If you are in the now, you can't be anxious, bevause your excitement flows immediately into ongoing spontaneous activity.",
      "Don't add worry your troubles. Worry only creates problems for those around you",
      'The change is from inner to outer - we start by dissolving our attitude not by altering outer conditions.'
    ],
    url: 'https://brucelee.com/'
  },
  {
    author: 'Frédéric Bastiat',
    quotes: [
      'When Law and Morality are in contradiction, the citizen finds himself in the cruel alternative of losing the notion of Morality, or losing respect for the laws.'
    ],
    url: 'http://bastiat.org/fr/la_loi.html'
  },
  {
    author: 'Marcus Aurelius',
    quotes: [
      'Everyone lives only in the present moment and loses only the moment.',
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
      'Dwell on the beauty of life. Watch the stars, and see yourself running with them.',
      'The happiness of your life depends upon the quality of your thoughts.',
      'E  verything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
      'Waste no more time arguing about what a good man should be. Be one.',
      'The soul becomes dyed with the colour of its thoughts.',
      'For it is in your power to retire into yourself whenever you choose.',
      'The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control; but the happiness of the wise grows out of their own free acts.'
    ],
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    url: 'https://en.wikipedia.org/wiki/Cyropaedia',
    quotes: [
      "Toutes les fautes que les hommes commettent par ignorance, j'estime qu'elles sont toujours involontaires",
      "Les hommes obéissent volontiers à celui qui qu'ils croient plus éclairés qu'eux-mêmes sur leurs propres intérêts....Vois avec quels empressement les malades appellent les médecins pour leur prescrire ce qu'ils ont à faire,...si un voyageur pense qu'un autre connaît la route mieux que lui, il s'attache à lui sans vouloir le quitter.",
      "Jamais il ne prit lui même son repas avant de s'être mis en sueur",
      'Quand on voit celui qui pourrait le plus abuser de sa puissance rester fidèle à la modération, cela impose les moins puissants à ne commettre ouvertement aucun excès',
      'Tu prétends que la crainte châties les hommes plus que la punition effective? ',
      "C'est en faisant du bien à vos amis que vous pourrez punir vos ennemis."
    ]
  },
  {
    author: 'John Rawls',
    url:
      'https://en.wikipedia.org/wiki/A_Theory_of_Justice#The_principles_of_justice',
    quotes: [
      'Social and economic inequalities should be arranged so that "they are to be of the greatest benefit to the least-advantaged members of society"'
    ]
  },
  {
    author: 'Philipp Petit',
    url: 'https://en.wikipedia.org/wiki/Philip_Pettit',
    quotes: [
      "Our freedom is compromised when others have the capacity to exercise power in ways we don't understand and that we experience as arbitrary,"
    ]
  },
  {
    author: 'Siddhartha',
    url: 'https://en.wikipedia.org/wiki/Siddhartha_(novel)',
    quotes: [
      'Knowledge can be conveyed, but not wisdom. It can be found, it can be lived but it cannot expressed in words and taught.'
    ]
  },
  {
    author: 'John Shuttleworth',
    quotes: [
      'In more and more cases . . . politics and politicians not only contribute to theproblem. They are the problem.'
    ],
    url: 'https://en.wikipedia.org/wiki/Mother_Earth_News'
  },
  {
    quotes: [
      "You don't lack talent, you are just addicted to comfort.",
      "Sex, alcohol, drug, food, boss... You are a slave of anything you can't say no to.",
      'Optimists solve problems when they arise. Pessimists invent problems before they start.',
      'Truth doesn’t speak to power.',
      'Take care to get what you like, or you will be forced to like what you get.',
      'Control your attention, control your mind. Control their attention, control their mind.',
      'We can have everything, when we want nothing.',
      'Ask not what the government can do for you. Ask what the government is doing to you.'
    ],
    author: 'Unknown'
  }
]

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

module.exports.getQuote = async event => {
  const index = getRandomInt(data.length)
  const quotes = data[index].quotes
  const quote = quotes[getRandomInt(quotes.length)]
  const { author, url, handle } = data[index]
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        quote,
        author,
        url,
        handle
      },
      null,
      2
    )
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
