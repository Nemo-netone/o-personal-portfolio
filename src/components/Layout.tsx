import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Menu, X } from 'lucide-react'

export function Header(){
 const[open,setOpen]=useState(false)
 return <header className="site-header"><a className="brand" href="#top"><span className="brand-mark">N</span><span><strong>Nemo</strong><small>Full-stack Developer</small></span></a><nav className={open?'main-nav is-open':'main-nav'}><a href="#projects" onClick={()=>setOpen(false)}>项目</a><a href="#about" onClick={()=>setOpen(false)}>关于</a><a href="https://github.com/Nemo-netone" target="_blank">GitHub <ArrowUpRight size={14}/></a></nav><button className="icon-button menu-button" onClick={()=>setOpen(!open)} aria-label="导航菜单">{open?<X/>:<Menu/>}</button></header>
}
export function Hero(){return <section className="hero-section"><div className="hero-copy"><p className="eyebrow"><span className="status-dot"/>20 个项目已在线运行</p><h1>把业务想法，<br/>做成<span>可访问的产品。</span></h1><p className="hero-intro">这里收录了我完成设计、开发、云端适配和部署的全栈项目。每个项目都可以查看源码，也可以直接进入在线演示。</p><div className="hero-actions"><button className="primary-button" onClick={()=>document.querySelector('#projects')?.scrollIntoView()}>浏览全部项目 <ArrowDown size={18}/></button><a className="text-button" href="https://github.com/Nemo-netone" target="_blank"><Code2 size={18}/>GitHub 主页</a></div></div><div className="hero-index"><div className="index-heading"><span>SELECTED WORK</span><span>2026</span></div><div className="index-number">20</div><p>PUBLIC PROJECTS<br/>BUILT & DEPLOYED</p><div className="index-stack"><span>React / Vue</span><span>Spring Boot</span><span>Cloudflare</span><span>Supabase</span></div></div></section>}


