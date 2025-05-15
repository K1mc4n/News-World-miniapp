import { useParams } from "next/navigation";

export default function NewsDetail() {
  const { slug } = useParams();

  return (
    <div>
      <h1 className="text-xl font-bold">News Detail</h1>
      <p className="mt-4">This is the full article for: {slug}</p>
    </div>
  );
}
