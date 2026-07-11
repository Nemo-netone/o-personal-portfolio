import { useEffect, useMemo, useState } from 'react'
import { Code2 } from 'lucide-react'
import { projects, type Project } from './data'
import { Header, Hero } from './components/Layout'
import { About, Contact, Heading } from './components/Sections'
import { Featured, ProjectArchive } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import './App.css'

export default function App() {
  const [category, setCategory] = useState('全部')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Project | null>(null)
  const categories = ['全部', ...new Set(projects.map((project) => project.category))]
  const filtered = useMemo(() => projects.filter((project) => {
    const text = [project.name, project.english, project.summary, ...project.tech].join(' ').toLowerCase()
    return (category === '全部' || project.category === category) && (!query.trim() || text.includes(query.trim().toLowerCase()))
  }), [category, query])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    addEventListener('keydown', close)
    return () => removeEventListener('keydown', close)
  }, [])

  return <div className="site-shell">
    <Header />
    <main id="top">
      <Hero />
      <section className="featured-section">
        <Heading kicker="精选案例" title="从源码到线上产品" text="不同业务领域，同一套完整交付标准：可访问、可体验、可阅读。" />
        <Featured onSelect={setSelected} />
      </section>
      <section className="projects-section" id="projects">
        <Heading kicker="项目档案" title="全部作品" text={`${filtered.length} / ${projects.length} 个项目`} />
        <ProjectArchive projects={filtered} categories={categories} category={category} query={query} onCategory={setCategory} onQuery={setQuery} onSelect={setSelected} />
      </section>
      <About />
      <Contact />
    </main>
    <footer><span>© 2026 Nemo Portfolio</span><span><Code2 size={13} /> Nemo-netone</span></footer>
    {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
  </div>
}

