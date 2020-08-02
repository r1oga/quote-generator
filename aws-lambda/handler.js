'use strict'

const data = [
  {
    author: 'Naval Ravikant',
    quote:
      'Modern mind is overstimulated. Modern body is under-stimulated. Meditation, exercise, fasting restore ancient balance.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Seek wealth, not money or status. Wealth is having assets that earn while you sleep. Money is how we transfer time and wealth. Status is your place in the social hierarchy.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'You make your own luck if you stay at it long enough.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'You have society in your phone, society in your pocket, society in your ears… It’s socializing you and programming everyone. The only solution is to turn it off.”',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'To the experts, what looks like hard work from the outside, is play from the inside.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      "In any situation in life, you always have three options. You can change it, you can accept it, or you can leave it. What is not a good option is to sit around wishing you would change it but not changing it, wishing you would leave it but not leaving it, and not accepting it. It's that struggle, that aversion, that is responsible for most of our misery. The phrase that I probably use the most to myself in my head is just one word: accept.",
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Learn to sell. Learn to build. If you can do both, you will be unstoppable.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Specific knowledge is often highly technical or creative. It cannot be outsourced or automated.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Desire is a contract that you make with yourself to be unhappy until you get what you want.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'The secret to public speaking is to speak as if you were alone.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can’t fathom.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Reading is faster than listening. Doing is faster than watching.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      "When you're finally wealthy, you'll realize that it wasn't what you were seeking in the first place.",
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: "It's almost always possible to be honest and positive.",
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Blockchains will replace networks with markets.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'A fit body, a calm mind, a house full of love. These things cannot be bought — they must be earned.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'The real struggle isn’t proletariat vs bourgeois. It’s between high-status elites and wealthy elites. When their cooperation breaks, revolution.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Even today, what to study and how to study it are more important than where to study it and for how long. The best teachers are on the Internet. The best books are on the Internet. The best peers are on the Internet. The tools for learning are abundant. It’s the desire to learn that’s scarce.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'This is such a short and precious life that it’s really important that you don’t spend it being unhappy.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'The power to make and break habits and learning how to do that is really important.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'A rational person can find peace by cultivating indifference to things outside of their control.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'The problem happens when we have multiple desires. When we have fuzzy desires. When we want to do ten different things and we’re not clear about which is the one we care about.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'People spend too much time doing and not enough time thinking about what they should be doing.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'The people who succeed are irrationally passionate about something.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'I don’t plan. I’m not a planner. I prefer to live in the moment and be free and to flow and to be happy.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Be present above all else.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Pick three hobbies: One that makes you money, one that makes you fit, and one that keeps you creative.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'The older the problem, the older the solution.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'It’s the mark of a charlatan to try and explain simple things in complex ways and it’s the mark of a genius to explain complicated things in simple ways.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'People who try to look smart by pointing out obvious exceptions actually signal the opposite.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Cynicism is easy. Mimicry is easy. Optimistic contrarians are the rarest breed.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Following your genuine intellectual curiosity is a better foundation for a career than following whatever is making money right now.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'A personal metric: how much of the day is spent doing things out of obligation rather than out of interest?',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'To be honest, speak without identity.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'We feel guilt when we no longer want to associate with old friends and colleagues who haven’t changed. The price, and marker, of growth.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'The most important trick to be happy is to realize that happiness is a choice that you make and a skill that you develop. You choose to be happy, and then you work at it. It’s just like building muscles.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'I don’t have time is just saying it’s not a priority.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Escape competition through authenticity.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Signaling virtue is a vice.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Knowledge is a skyscraper. You can take a shortcut with a fragile foundation of memorization, or build slowly upon a steel frame of understanding.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Politics is the exercise of power without merit.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote:
      'Doctors won’t make you healthy. Nutritionists won’t make you slim. Teachers won’t make you smart. Gurus won’t make you calm. Mentors won’t make you rich. Trainers won’t make you fit. Ultimately, you have to take responsibility. Save yourself.',
    url: 'https://nav.al/'
  },
  {
    author: 'Naval Ravikant',
    quote: 'Impatience with actions. Patience with results.',
    url: 'https://nav.al/'
  },
  {
    author: 'Thibaut',
    quote:
      'We are only as big as the smallest thing it takes to divert us from our goals.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Friendship is more about being there and less about being on facebook.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Peace of mind is the highest wealth.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'The most valuable thing to understand is your own mind.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'If you are not happy with what you already have, how could you be happier with more?',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'The good news about school is that it doesn’t reflect the real world. The bad news about school is that it doesn’t reflect the real world.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Start tomorrow today.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Being yourself is a valid goal.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Someone always has the capacity to ruin your day, but whether they do is up to you.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'We don’t understand the value of something until we lose it.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      "You don't need more information, you need to tell the difference between what is important and what isn't.",
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'It takes sweat to work, but only saliva to criticize.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Learning is just as entertaining as entertainment, but with long term benefits.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Deschool your mind, then begin to ask questions.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Knowledge is cheap, curiosity is priceless.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'If you can fully accept yourself, others, and the world around you — only trying to change the truly changeable — you’ll be miles ahead of the people who wish life was different, fair, and in-line with their expectations.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'For your own sake, get in the habit of understanding the things you wish weren’t true.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'If you work like a maniac for three hours you will have surpassed most people who work off and on for eight.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Learning to be happy when you have nothing and are nothing is the most sane thing you can do.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      "If there is fear, it's not love, it's insecurity. If there is jealousy, it's not love, it's immaturity. If there is anger, it's not love, it's separation. If there is need, it's not love, it's dependence. If there is control, it's not love, it's habit.",
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Fear wants to protect you, even from the good things in life.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'When you stop doing the wrong things, the right thing does itself.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'If you didn’t earn it, you’re probably not going to know how to keep it.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Don’t be a prisoner of your preferences. Interrogate your own opinions.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Learn how to say no. First, by saying no to ego which wants it all.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Only a man who loves to prove himself wrong is the true seeker of knowledge.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Stop trying to cope with distractions and work to eliminate them.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Don’t be afraid of discomfort, be more afraid of comfort.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Vulnerability is not fragility. You can allow yourself to bend without breaking.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'If you can learn to be patient in a very impatient society, you win.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Thinking about doing is more exhausting than doing. Just do it.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'You can measure someone based on the size of the things that bother them.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote:
      'Kids learn what’s important to adults not by listening to what they say, but by noticing what gets their attention.',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: "If you don't know why you are doing it, then why are you doing it?",
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Thibaut',
    quote: 'Differences draw attention. It takes focus to see similarities',
    url: 'https://twitter.com/kpaxs'
  },
  {
    author: 'Orange Book',
    quote: 'Every word you pronounce when angry will go against you.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'Don’t worry about what people think about you: they don’t.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'The more you judge, the less you think.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'No one can stop you if you’re consistently creative.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'If you care about the truth, stop consuming any mainstream media. The truth is never popular.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'If you constantly get offended by people who speak the truth, soon enough, you will only be surrounded by liars.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'You are not wealthy when you have money, you are wealthy when you can spend your time on your own terms.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'People who harass others always pretend to be the victims once the victims fight back.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'If you want a certain type of people around you, become that certain type of person first.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Don’t be angry when they treat you poorly, be sorry: that’s how they treat themselves.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "Half of success is about cutting off people who don't grow and don't want you to either.",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "If you can't do anything only you can do, you will be assigned something many others can do.",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'A sign of intelligence: when you disagree, you start questioning your own beliefs.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Detach yourself from your identity and no one can hurt you with words.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'The difference between happy people and worried people: detachment.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'If investing was easy, everyone would be rich. If good habits were easy, everyone would be fit, smart, talented. If building a family was easy, everyone would be happy. If spending time alone was easy, everyone would be clear-minded.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "It's usually not a gap of talent, but a gap of focus and consistency.",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "You are truly rich once most of your time isn't spent thinking about money.",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      '“Lucky people” who caught opportunities had been getting ready for years.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Anxiety is lack of meaning. Anger is lack of intelligence. Blaming is lack of understanding. Depression is lack of growth.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "Four principles for life. Don't destroy what you can't build. Don't criticize what you can't create. Don't envy what you won't work for. Don't judge what you don't understand",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Every time you dislike someone, start asking what they have that you might want.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'No one ever got successful by pleasing everybody.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Talent is mostly a lot of time training hard alone even when you don’t feel like it.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'You worry less when you do more.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Successful people are just people really good at ignoring distractions.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Life is over, not when your body no longer responds, but when your mind stops being curious.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'You can’t compete against people who have fun working.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "Another sign of intelligence: you don't judge people you know nothing about.",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      "If you enjoyed it, it wasn't a waste of time. Life isn't all about productivity.",
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote: 'Talent is just another word for discipline.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'Efforts are always rewarded, you just don’t know when, and it’s never linear.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'No one cares about what you think you can do until you actually do it.',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Orange Book',
    quote:
      'To upgrade knowledge, read. To upgrade understanding, teach. To upgrade clarity, write. To upgrade health, fast. To upgrade growth, self-reflect. To upgrade open-mindedness, travel. To upgrade life, do all of the [previous].',
    url: 'https://twitter.com/orangebook_'
  },
  {
    author: 'Kanye West',
    quote: 'Our work is never over.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'For me, money is not my definition of success. Inspiring people is a definition of success.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      "I refuse to accept other people's ideas of happiness for me. As if there's a 'one size fits all' standard for happiness.",
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: "We came into a broken world. And we're the cleanup crew.",
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: "We all self-conscious. I'm just the first to admit it.",
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: 'I still think I am the greatest.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'My greatest pain in life is that I will never be able to see myself perform life.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: 'My greatest award is what I’m about to do.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: 'I feel like I’m too busy writing history to read it.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: 'Living well eliminates the need for revenge.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'Why are people so afraid of creative ideas and so scared of truth? All I want to do is do good.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'One of my biggest Achilles heels has been my ego. And if I, Kanye West, can remove my ego, I think there’s hope for everyone.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'People always tell you ‘Be humble. Be humble.’ When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome!',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'Most people are slowed down by the perception of themselves. If you’re taught you can’t do anything, you won’t do anything. I was taught I can do everything.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote:
      'I’m pretty calculating. I take stuff that I know appeals to people’s bad sides and match it up with stuff that appeals to their good sides.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Kanye West',
    quote: 'When you’re the absolute best, you get hated on the most.',
    url: 'https://www.kanyewest.com/'
  },
  {
    author: 'Henri Charrière (Papillon)',
    quote:
      'Tasting the discoveries of science as one licks a sorbet leads to a thirst for better comfort and the constant struggle to achieve it. All this kills the soul, the commiseration, the understanding, the nobility.',
    url: 'https://en.wikipedia.org/wiki/Papillon_(book)'
  },
  {
    author: 'Friedrich Nietzsche',
    quote:
      'Everything the State says is a lie, and everything it has it has stolen.',
    url: 'https://en.wikipedia.org/wiki/Friedrich_Nietzsche'
  },
  {
    author: 'Mary Catherine Bateson (Composing a Life)',
    quote: 'We are not what we know, but what we are ready to learn.',
    url: 'https://en.wikipedia.org/wiki/Mary_Catherine_Bateson'
  },
  {
    author: 'Mary Catherine Bateson (Composing a Life)',
    quote:
      'The real winners in this rapidly changing world will be those who are most open to alternatives, those who are able to respect and value differences.',
    url: 'https://en.wikipedia.org/wiki/Mary_Catherine_Bateson'
  },
  {
    author: 'Mary Catherine Bateson (Composing a Life)',
    quote:
      'Why is our civilization so attentive to economies of scale and blind to the economics of composition?',
    url: 'https://en.wikipedia.org/wiki/Mary_Catherine_Bateson'
  },
  {
    author: 'Mary Catherine Bateson (Composing a Life)',
    quote:
      'Today I refuse to work in a position where my trust depends on the other and I believe that independence is the precondition for genuine partnership and responsible participation.',
    url: 'https://en.wikipedia.org/wiki/Mary_Catherine_Bateson'
  },
  {
    author: 'Joerg Platzer',
    quote:
      "Freedom of transaction is a human right that you need to carry out all your other human rights. What worth is freedom of assembly if you can't buy a train ticket anonymously to go to that assembly?",
    url: 'http://www.room77.de/'
  },
  {
    author: 'Shane Parrish',
    quote: 'What ends as being better starts as being different.',
    url: 'https://shaneparrish.net/'
  },
  {
    author: 'Patrice Franceschi (Ethique du Samourai moderne)',
    quote:
      'Will combined with courage must obey reason, one of the guides of which is generosity.',
    url: 'https://fr.wikipedia.org/wiki/Patrice_Franceschi'
  },
  {
    author: 'Patrice Franceschi (Ethique du Samourai moderne)',
    quote:
      "It's better to think too big and risk getting lost. Than too small, and get nowhere.",
    url: 'https://fr.wikipedia.org/wiki/Patrice_Franceschi'
  },
  {
    author: 'Patrice Franceschi (Ethique du Samourai moderne)',
    quote:
      "Don't always stay in the middle of the road. Dare to go on the ridges at times. The air is pure on the summits and the precipices are clearly visible.",
    url: 'https://fr.wikipedia.org/wiki/Patrice_Franceschi'
  },
  {
    author: 'Erin Hanson',
    quote: 'What if I fall? Oh but my Darling, what if you fly?',
    url: 'https://www.instagram.com/thepoeticunderground/?hl=en'
  },
  {
    author: 'Lao Tzu',
    quote:
      'The great leader talk little. He never speaks carelessly. He works without self-interest and leaves no trace. When he leaves people say « we did it ourselves »',
    url: 'https://en.wikipedia.org/wiki/Laozi#Tao_Te_Ching'
  },
  {
    author: 'Chinese proverb',
    quote: 'Tension is who you think you should be. Relaxation is who you are.'
  },
  {
    author: 'Andy Yen',
    quote:
      'In any society, if they want to take away your freedom, the first thing they attack is your privacy',
    url: 'https://protonmail.com/about'
  },
  {
    author: 'Jim Stovall',
    quote:
      'Wisdom is achieved by keeping an open mind and a closed mouth. Ignorance is exposed by having an open mouth and a closed mind',
    url: 'http://jimstovall.com/index.html'
  },
  {
    author: 'Rita Mae Brown',
    quote: 'The reward for conformity is everyone likes you except yourself.',
    url: 'https://www.ritamaebrownbooks.com/'
  },
  {
    author: 'Napoléon Bonaparte',
    quote: 'Envy is a declaration of inferiority.',
    url: 'Envy is a declaration of inferiority'
  },
  {
    author: 'Xerses',
    quote:
      "If you take account of every danger you'll never do anything . It's better to have a brave heart and endure one half of the terrors we dread than to calculate all of the terrors and suffer nothing at all. . . . Big things are won by big dangers.",
    url: 'https://en.wikipedia.org/wiki/Xerxes_I'
  },
  {
    author: 'John Wooden',
    quote:
      'Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.',
    url: 'https://en.wikipedia.org/wiki/John_Wooden'
  },
  {
    author: 'Bruce Lee',
    quote: 'Live content with small means.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote:
      'Abstract analysis is not the answer: to stand on the outside and try to look in the inside is futile, whatever was there will go away. To try to identify happiness is like turning on a light to look at darkness. Analyze it and it is gone.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote:
      'The thing in which error arrives is judgment. An idea, by itself, is not erroenous, judgment makes it.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote: 'The more we value things, the less we value ourselves.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote:
      'The spiritually deficient searches for external securities - the poorer we are inwardly, the more we try to enrich ourselves outwardly.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote: 'Becoming is a denial of being.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote:
      "Anxiety is the gap between the now and the THthenEN. If you are in the now, you can't be anxious, bevause your excitement flows immediately into ongoing spontaneous activity.",
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote:
      "Don't add worry your troubles. Worry only creates problems for those around you",
    url: 'https://brucelee.com/'
  },
  {
    author: 'Bruce Lee',
    quote:
      'The change is from inner to outer - we start by dissolving our attitude not by altering outer conditions.',
    url: 'https://brucelee.com/'
  },
  {
    author: 'Frédéric Bastiat',
    quote:
      'When Law and Morality are in contradiction, the citizen finds himself in the cruel alternative of losing the notion of Morality, or losing respect for the laws.',
    url: 'http://bastiat.org/fr/la_loi.html'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'Everyone lives only in the present moment and loses only the moment.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'Dwell on the beauty of life. Watch the stars, and see yourself running with them.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'The happiness of your life depends upon the quality of your thoughts.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'Waste no more time arguing about what a good man should be. Be one.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote: 'The soul becomes dyed with the colour of its thoughts.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'For it is in your power to retire into yourself whenever you choose.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Marcus Aurelius',
    quote:
      'The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control; but the happiness of the wise grows out of their own free acts.',
    url: 'https://en.wikipedia.org/wiki/Meditations'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    quote:
      "Toutes les fautes que les hommes commettent par ignorance, j'estime qu'elles sont toujours involontaires",
    url: 'https://en.wikipedia.org/wiki/Cyropaedia'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    quote:
      "Les hommes obéissent volontiers à celui qui qu'ils croient plus éclairés qu'eux-mêmes sur leurs propres intérêts....Vois avec quels empressement les malades appellent les médecins pour leur prescrire ce qu'ils ont à faire,...si un voyageur pense qu'un autre connaît la route mieux que lui, il s'attache à lui sans vouloir le quitter.",
    url: 'https://en.wikipedia.org/wiki/Cyropaedia'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    quote: "Jamais il ne prit lui même son repas avant de s'être mis en sueur",
    url: 'https://en.wikipedia.org/wiki/Cyropaedia'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    quote:
      'Quand on voit celui qui pourrait le plus abuser de sa puissance rester fidèle à la modération, cela impose les moins puissants à ne commettre ouvertement aucun excès',
    url: 'https://en.wikipedia.org/wiki/Cyropaedia'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    quote:
      'Tu prétends que la crainte châties les hommes plus que la punition effective? ',
    url: 'https://en.wikipedia.org/wiki/Cyropaedia'
  },
  {
    author: 'Cyrus (Cyropedia - Xenophon)',
    quote:
      "C'est en faisant du bien à vos amis que vous pourrez punir vos ennemis.",
    url: 'https://en.wikipedia.org/wiki/Cyropaedia'
  },
  {
    author: 'John Rawls',
    quote:
      'Social and economic inequalities should be arranged so that "they are to be of the greatest benefit to the least-advantaged members of society"',
    url:
      'https://en.wikipedia.org/wiki/A_Theory_of_Justice#The_principles_of_justice'
  },
  {
    author: 'Philipp Petit',
    quote:
      "Our freedom is compromised when others have the capacity to exercise power in ways we don't understand and that we experience as arbitrary,",
    url: 'https://en.wikipedia.org/wiki/Philip_Pettit'
  },
  {
    author: 'Siddhartha',
    quote:
      'Knowledge can be conveyed, but not wisdom. It can be found, it can be lived but it cannot expressed in words and taught.',
    url: 'https://en.wikipedia.org/wiki/Siddhartha_(novel)'
  },
  {
    author: 'John Shuttleworth',
    quote:
      'In more and more cases . . . politics and politicians not only contribute to theproblem. They are the problem.',
    url: 'https://en.wikipedia.org/wiki/Mother_Earth_News'
  },
  {
    author: 'Unknown',
    quote: "You don't lack talent, you are just addicted to comfort."
  },
  {
    author: 'Unknown',
    quote:
      "Sex, alcohol, drug, food, boss... You are a slave of anything you can't say no to."
  },
  {
    author: 'Unknown',
    quote:
      'Optimists solve problems when they arise. Pessimists invent problems before they start.'
  },
  { author: 'Unknown', quote: 'Truth doesn’t speak to power.' },
  {
    author: 'Unknown',
    quote:
      'Take care to get what you like, or you will be forced to like what you get.'
  },
  {
    author: 'Unknown',
    quote:
      'Control your attention, control your mind. Control their attention, control their mind.'
  },
  {
    author: 'Unknown',
    quote: 'We can have everything, when we want nothing.'
  },
  {
    author: 'Unknown',
    quote:
      'Ask not what the government can do for you. Ask what the government is doing to you.'
  }
]

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

module.exports.getQuote = async event => {
  const index = getRandomInt(data.length)
  const { quote, author, url } = data[index]
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://r1oga.github.io'
    },

    body: JSON.stringify(
      {
        quote,
        author,
        url
      },
      null,
      2
    )
  }
}
