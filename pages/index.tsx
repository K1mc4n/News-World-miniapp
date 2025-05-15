import type { NextPage } from 'next';
import news from '../data/news';

const Home: NextPage = () => {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center">News World - Crypto News</h1>
      <div className="space-y-8">
        {news.map(({ id, title, summary, date, source, image }) => (
          <article
            key={id}
            className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{summary}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{date}</span>
              <span>{source}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Home;
