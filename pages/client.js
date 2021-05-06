import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

export default function App() {
  const { data, error } = useSWR(
    "/api/status",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return (
    <>
    <div className="spinner" role="spinner"><div className="spinner-icon"></div></div>
    </>
    );
  return (
<div>
      { data.data.map((statu) => (
          <li>
          hi
            <h2>{statu.content}</h2>
          
          </li>

  ))}
  </div>
  )
}
