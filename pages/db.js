import { connectToDatabase } from "../util/mongodb";

export default function Movies({ status }) {
  return (
    <div>
      <h1>Top 20 Movies of All Time</h1>
      <p>
        <small>(According to Metacritic)</small>
      </p>
      <ul>
        {status.map((statu) => (
          <li>
            <h2>{statu.content}</h2>
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const status = await db.collection('status')
    .find({})
    .limit(200)
    .toArray();

  return {
    props: {
      status: JSON.parse(JSON.stringify(status)),
    },
  };
}