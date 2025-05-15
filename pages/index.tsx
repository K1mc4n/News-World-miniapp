import type { NextPage } from 'next';
import news from '../data/news';

const Home: NextPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">News World - Crypto News</h1>
      <div className="space-y-6">
        {news.map(({ id, title, summary, date, source, image }) => (
          <article key={id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">{summary}</p>
            <div className="text-sm text-gray-500 flex justify-between">
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
