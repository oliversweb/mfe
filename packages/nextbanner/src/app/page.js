import { getData } from '../components/footerProvider'

export default async function NextBanner() {
  const data = await getData();

  return (
    <>
    _______________ FOOTER (via app) _______________
    {
      <ul>              
          {data.sections.map(x => <li key={x.id}>[{x.name}]</li>)}
      </ul>        
    }
    ______________________________________
  </>
  )
}
