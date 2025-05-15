import React from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface Props {
  articles: Article[];
}

export default function Home({ articles }: Props) {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>News World - Latest Finance News</h1>
      {articles.length === 0 && <p>No news available.</p>}
      <div>
        {articles.map((article, index) => (
          <div key={index} style={{ marginBottom: 40, borderBottom: '1px solid #ddd', paddingBottom: 20 }}>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 8 }}
              />
            )}
            <h3 style={{ marginTop: 10 }}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0070f3', textDecoration: 'none' }}>
                {article.title}
              </a>
            </h3>
            <p>{article.description}</p>
            <small style={{ color: '#666' }}>
              {new Date(article.publishedAt).toLocaleString()} - {article.source.name}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.NEWSAPI_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&language=en&pageSize=15&apiKey=${API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      articles: data.articles || [],
    },
    revalidate: 86400, // update tiap 24 jam
  };
}
