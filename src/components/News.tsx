import React from 'react';

const NewsFeed = () => {
  const newsData = [
    {
      id: 1,
      title: 'TechTrek X Release Date Announced',
      content:
        'TechTrek X, the highly anticipated smartphone from Zenith Mobile, is set to be released on June 15th, 2024. Stay tuned for more updates!',
    },
    {
      id: 2,
      title: 'TechTrek X Software Update: Version 2.0',
      content:
        'The latest software update for TechTrek X is now available. Version 2.0 brings new features, performance improvements, and bug fixes to enhance your mobile experience.',
    },
    {
      id: 3,
      title: 'TechTrek X Unveils Exciting Partnership',
      content:
        'TechTrek X has announced a partnership with leading app developers to bring exclusive apps and content to its users. Get ready for an enhanced mobile experience!',
    },
  ];

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-2xl font-bold">News Feed: TechTrek X</h2>
      <div className="space-y-6">
        {newsData.map((news) => (
          <div key={news.id}>
            <h3 className="mb-2 text-lg font-semibold">{news.title}</h3>
            <p className="text-gray-700">{news.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
