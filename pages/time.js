export default function Page({ data }) {
  // Render data...
  
 const  date = Date(data.utc_datetime);
  return(
    <>
    <li>timezone: {data.timezone}</li>
    <li>utc_datetime: {data.utc_datetime}</li>
     <li>day_of_week: {data.day_of_week}</li>
      <li>day_of_year: {data.day_of_year}</li>
       <li>week_number: {data.week_number}</li>
    </>
    )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http://worldtimeapi.org/api/timezone/asia/kolkata`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data }, revalidate: 60}
}
