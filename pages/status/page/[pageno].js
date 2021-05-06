
import { useRouter } from 'next/router';


export async function getStaticPaths() {
  return { paths:[{ params: { pageno: '1' } }, { params: { pageno: '2' } }] , fallback: true };
}

export async function getStaticProps({ params }) {
  const { pageno }  = params;
  
return { props: { pageno }, revalidate: 60}
  
}

export default function Tweet({ pageno }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading!</h1>
  }

  return (
    <div>
    Hello World {pageno}
    </div>
  );
}