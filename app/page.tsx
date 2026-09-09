import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  CalendarClock,
  ExternalLink,
  LayoutGrid,
  ShieldCheck,
} from 'lucide-react';

const ICP_NUMBER = '鲁ICP备2026052344号-1';

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark" aria-hidden="true">
            果
          </span>
          <span className="brand-copy">
            <strong>果子哥</strong>
            <small>开发随记与小工具</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="主导航">
          <a href="#projects">项目</a>
          <a href="#notes">随记</a>
          <a href="#about">关于</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> HAONANGE.COM
          </p>
          <h1>
            把零散的想法，
            <span>做成真正好用的工具。</span>
          </h1>
          <p className="hero-lead">
            这里记录个人开发实践，也收纳持续打磨的小工具。第一个正式项目，是为
            DNF 团长准备的智能排表工作台。
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://raid.haonange.com"
            >
              打开 DNF 排表工具
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#projects">
              查看项目
              <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="当前项目概览">
          <div className="panel-topline">
            <span>当前项目</span>
            <span className="live-badge">持续开发中</span>
          </div>
          <div className="project-symbol" aria-hidden="true">
            <LayoutGrid />
          </div>
          <h2>DNF 团长排表工具</h2>
          <p>人员管理、角色快照与多波次智能排表，一处完成。</p>
          <div className="feature-list">
            <span>
              <ShieldCheck aria-hidden="true" /> 多账号权限
            </span>
            <span>
              <Braces aria-hidden="true" /> 智能排表
            </span>
            <span>
              <CalendarClock aria-hidden="true" /> 版本发布
            </span>
          </div>
          <a href="https://raid.haonange.com">
            进入工具 <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker">PROJECTS</p>
            <h2>正在做的事</h2>
          </div>
          <p>从解决自己的问题开始，再把答案做得更清楚、更可靠。</p>
        </div>

        <div className="project-grid">
          <article className="project-card project-card-featured">
            <div className="card-icon blue">
              <LayoutGrid aria-hidden="true" />
            </div>
            <div className="card-heading">
              <span className="card-state">已上线</span>
              <h3>DNF 团长排表工具</h3>
            </div>
            <p>面向国服 PC 端团长的人员管理与智能排表网站。</p>
            <a href="https://raid.haonange.com">
              立即使用 <ArrowUpRight aria-hidden="true" />
            </a>
          </article>

          <article className="project-card" id="notes">
            <div className="card-icon amber">
              <BookOpen aria-hidden="true" />
            </div>
            <div className="card-heading">
              <span className="card-state muted">筹备中</span>
              <h3>开发随记</h3>
            </div>
            <p>记录产品取舍、工程实践，以及那些值得留存的问题与答案。</p>
            <span className="card-footnote">内容正在整理</span>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-mark" aria-hidden="true">
          果
        </div>
        <div>
          <p className="section-kicker">ABOUT</p>
          <h2>个人开发随记与小工具</h2>
          <p>
            这是一个非经营性的个人网站，用来分享软件开发记录，并提供自己设计和维护的小工具。
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>个人开发随记与小工具</strong>
          <span>© 2026 haonange.com</span>
        </div>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          {ICP_NUMBER}
        </a>
      </footer>
    </main>
  );
}
