import { SectionHead, FeatureGrid } from './Blocks'

export function DetailSections({ intro, items, processTitle='A practical path from issue to outcome.' }) {return <>
  <section className="section"><div className="shell"><SectionHead kicker="Capabilities" title={intro}/><FeatureGrid items={items}/></div></section>
  <section className="section section-gray"><div className="shell"><SectionHead kicker="How we work" title={processTitle} text="Clear scope, disciplined delivery and accountable support at every step."/><div className="process">{[['01','Discover','Understand users, systems, risks and business priorities.'],['02','Design','Create a right-sized solution with clear costs and outcomes.'],['03','Deliver','Deploy, migrate, test and document with minimal disruption.'],['04','Support','Monitor, maintain and improve through one accountable team.']].map(x=><div key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>
 </>}
