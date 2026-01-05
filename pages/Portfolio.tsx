
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink, Github, Code2, Cpu, Globe, Layout, Smartphone, Eye, Server, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'WEB DEVELOPMENT', 'MOBILE APP DEVELOPMENT', 'FULL-STACK', 'AI/COMPUTER VISION'];

  const projects = [
    {
      id: 'project-1',
      title: 'AnonChat Live',
      cat: 'WEB DEVELOPMENT',
      img: 'https://i.postimg.cc/HWyk9mDZ/anonchatweb.png',
      desc: 'Production-ready anonymous real-time chat platform designed for instant, private communication without registration.',
      tech: ['Node.js', 'Express', 'Socket.IO', 'React (Vite)', 'Tailwind CSS'],
      stat: 'LIVE DEPLOY',
      repoUrl: 'https://anonchatweb.netlify.app/',
      problem: 'Most platforms require sign-ups and track user data, reducing spontaneity.',
      solution: 'Implemented a low-latency WebSocket architecture with anonymous identities and random matchmaking.'
    },
    {
      id: 'project-2',
      title: 'Real-Time Chat App',
      cat: 'WEB DEVELOPMENT',
      img: 'https://i.postimg.cc/W1F05qLm/nexus-cha.png',
      desc: 'Feature-rich chat app with global/private messaging, emoji support, and an admin panel.',
      tech: ['Flask', 'Socket.IO', 'MySQL', 'Bootstrap', 'Tailwind', 'React'],
      stat: 'ADMIN CONTROL',
      repoUrl: 'https://nexuschatweb.netlify.app/',
      problem: 'Lack of customizable admin controls in lightweight chat solutions for groups.',
      solution: 'Built a Flask + Socket.IO core with a responsive React frontend and a dedicated real-time admin dashboard.'
    },
    {
      id: 'project-3',
      title: 'AI-Powered-Blog',
      cat: 'FULL-STACK',
      img: 'https://i.postimg.cc/fWStnngZ/techsavvy.png',
      desc: 'Modern blog platform with an integrated AI chatbot to answer coding questions and guide readers in real time.',
      tech: ['Python', 'Flask', 'FastAPI', 'LLM API', 'React'],
      stat: 'AI INTEGRATED',
      repoUrl: 'https://techsavvy-insights-personal-blog.netlify.app/#/',
      problem: 'Static blogs limit reader engagement. Users can\'t ask questions while reading complex content.',
      solution: 'Developed an AI chatbot using Python and integrated it to provide instant clarification for tech articles.'
    },
    {
      id: 'project-4',
      title: 'CodeCraftGames',
      cat: 'AI/COMPUTER VISION',
      img: 'https://i.postimg.cc/k4bZhTCv/codecraft.png',
      desc: 'Gesture recognition platform for controlling applications and 3D games using natural hand movements.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'OpenGL'],
      stat: 'GESTURE CONTROL',
      repoUrl: 'https://codecraftgames.netlify.app/',
      problem: 'Traditional input devices limit the immersive feel of natural interaction games.',
      solution: 'Utilized OpenCV and ML models to create a futuristic, controller-free gesture recognition experience.'
    },
    {
      id: 'project-5',
      title: 'FlySyk Tour',
      cat: 'WEB DEVELOPMENT',
      img: 'https://i.postimg.cc/8PFb00Lr/Screenshot-2.png',
      desc: 'Modern travel booking platform with dynamic tour exploration and responsive layouts.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      stat: 'UI MATURITY',
      repoUrl: 'https://flysyk.netlify.app/',
      problem: 'Travel portals often have cluttered booking flows that confuse users on mobile.',
      solution: 'Designed an intuitive, responsive booking engine with a focus on visual clarity and ease of navigation.'
    },
    {
      id: 'project-6',
      title: 'ClearList',
      cat: 'MOBILE APP DEVELOPMENT',
      img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      desc: 'Smart to-do and task management app built for Android focusing on distraction-free productivity.',
      tech: ['Android', 'Kotlin', 'Jetpack Compose'],
      stat: 'MOBILE NATIVE',
      repoUrl: 'https://github.com/halloffame12/Todo_Android_App/releases/tag/v.1.0.0-beta',
      problem: 'Many to-do apps feel cluttered or overcomplicated, reducing daily usage.',
      solution: 'Created a simple, intuitive task flow with real-time state updates and a calm UI experience.'
    }
  ];

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="OUR ARTIFACTS" title="BATTLE-TESTED WORKS" />
        
        <div className="flex flex-wrap gap-3 md:gap-4 mb-16 md:mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 md:px-8 py-3 text-[9px] md:text-[10px] font-black tracking-[0.3em] border transition-all uppercase ${
                filter === cat 
                ? 'bg-orange-600 border-orange-600 text-white shadow-[0_0_20px_rgba(234,88,12,0.4)]' 
                : 'border-white/10 text-gray-500 hover:border-white/30 hover:text-white bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden reveal transition-all duration-700 hover:border-orange-500/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 bg-orange-600 text-[8px] font-black px-3 py-1 uppercase tracking-widest text-white transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                  MISSION // {project.stat}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-3 text-[10px] font-black tracking-widest uppercase flex items-center gap-2 hover:bg-orange-600 hover:text-white transition-all shadow-2xl"
                  >
                    MANIFEST ARTIFACT <Eye size={16} />
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-orange-500 text-[9px] font-black tracking-[0.4em] mb-2 block uppercase">{project.cat}</span>
                    <h3 className="text-2xl md:text-3xl font-anime font-black text-white uppercase tracking-tighter">{project.title}</h3>
                  </div>
                  <div className="flex gap-4">
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <ExternalLink size={20}/>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest border-l-2 border-orange-600 pl-4">
                    PROBLEM: {project.problem}
                  </div>
                  <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest border-l-2 border-cyan-500 pl-4">
                    SOLUTION: {project.solution}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-8 border-t border-white/5">
                  {project.tech.map(t => (
                    <span key={t} className="text-[8px] font-black border border-white/10 px-3 py-1 text-gray-500 uppercase tracking-widest bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 md:mt-40 bg-white/5 border border-white/10 p-12 md:p-20 text-center reveal">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { label: 'Web Deployments', val: '120+', icon: Globe },
                { label: 'Mobile Products', val: '45+', icon: Smartphone },
                { label: 'AI Models', val: '12', icon: Cpu },
                { label: 'Custom Systems', val: '28', icon: Layout },
              ].map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl font-anime font-black text-white">{s.val}</div>
                  <div className="text-[8px] font-black tracking-widest text-gray-600 uppercase">{s.label}</div>
                </div>
              ))}
           </div>
           <h4 className="text-xl md:text-3xl font-anime font-black text-white mb-8 uppercase tracking-tighter italic">Your project is the next masterpiece.</h4>
           <a href="#/contact" className="inline-block bg-white text-black px-12 py-5 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-orange-600 hover:text-white transition-all shadow-xl">
              START THE MISSION
           </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
