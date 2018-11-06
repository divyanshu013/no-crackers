import React, { useEffect, useState } from 'react';

const facts = [
  <div>
    <span css={{ borderBottom: '1px solid white' }}>Noise</span> levels can go
    as high as 120db during diwali -{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.researchgate.net/publication/244056016_STUDY_OF_NOISE_LEVELS_IN_MUMBAI_ON_DIWALI_FESTIVAL_DAY_AND_NIGHT_TIME"
    >
      Source
    </a>
  </div>,
  <div>
    <span css={{ borderBottom: '1px solid white' }}>Firecrackers injuries</span>
    : Our centre received 0.81 patients per 100,000 population of Delhi national
    capital region in the year 2002 and in the year 2010 this ratio rose to 1.51
    per 100,000 population -{' '}
    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3385409/">Source</a>
  </div>,
  <div>
    <span css={{ borderBottom: '1px solid white' }}>Child Labor</span>:
    According to its findings, around 90 per cent of children employed in
    fireworks were found to have contracted asthma, eye disease and TB. -{' '}
    <a href="https://www.indiatoday.in/india/story/india-today-investigation-diwali-firecrackers-children-work-illegal-factories-347409-2016-10-19">
      Source
    </a>
  </div>,
  <div>
    <span css={{ borderBottom: '1px solid white' }}>Air Pollution</span>: During
    the festival day, the average concentration of PM10 was increased 35 times
    compared with a normal day before Diwali. Similarly, concentration of SO2
    has increased 23 times and NOx has increased 3 times on the festival day -{' '}
    <a href="http://www.bioline.org.br/pdf?st15128">Source</a>
  </div>,
  <div>
    <span css={{ borderBottom: '1px solid white' }}>Animals</span>: The team of
    Wildlife Rescue at Chawri Bazar said, “The number of cases of bird injuries
    rises by 60 per cent in Diwali. Nearly 40 per cent of these birds lose their
    eyesights and meet with accidents, 30 per cent get burn injuries due to
    firecrackers and another 30 per cent fall sick due to respiratory problems
    because of the pollution.” -{' '}
    <a href="http://www.millenniumpost.in/delhi/60-per-cent-rise-in-bird-injuries-during-diwali-veterinarians-266642">
      Source
    </a>
  </div>,
];

const Facts = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % facts.length);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      css={{
        border: '4px double white',
        borderRadius: 8,
        padding: '16px 24px',
        fontSize: '1.2rem',
        maxWidth: 800,
        textAlign: 'center',
        lineHeight: 1.5,
      }}
    >
      {facts[index]}
    </div>
  );
};

export default Facts;
