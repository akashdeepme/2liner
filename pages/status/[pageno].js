import { connectToDatabase } from "../../util/mongodb";
import { useRouter } from 'next/router';


export async function getStaticPaths() {
  return { paths:[] , fallback: true };
}

export async function getStaticProps({ params }) {
  const { pageno }  = params;
  const skiper = (Number(pageno)-1)*5;
  const { db } = await connectToDatabase();
  
  const status = await db.collection('status')
    .find({})
    .skip(skiper)
    .limit(5)
    .toArray();
return {
    props: {
      status: JSON.parse(JSON.stringify(status)),
    },
  };

}

export default function Tweet({ status }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading!</h1>
  }

  return (
        <ul>
        {status.map((statu) => (
          <li>
            <h2>{statu.content}</h2>
          
          </li>
        ))}
      </ul>
  );
}