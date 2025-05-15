export default function Home() {
  const news = [
    { title: "Global Economy on the Rise", slug: "economy-rise" },
    { title: "Tech Giants Merge", slug: "tech-merge" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <ul className="space-y-2">
        {news.map((item) => (
          <li key={item.slug}>
            <a href={`/news/${item.slug}`} className="text-blue-600 hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
