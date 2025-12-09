import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';
import { ArrowRight, Zap, Target, Layers, Heart } from 'lucide-react';

export const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] w-full overflow-hidden pt-24 flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-black opacity-80" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
                
                <div className="relative z-10 container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        {/* Left content - 2 columns on large screens */}
                        <div className="lg:col-span-2">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
                                // ABOUT NORC
                            </span>
                            <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl italic font-bold mb-8 leading-none">
                                WHO WE ARE
                            </h1>
                            <p className="text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed">
                                NORC é uma intersecção entre o brutalismo estético e a performance humana. Nascemos da necessidade de equipamentos que não apenas funcionam, mas inspiram disciplina e transformam corpos e mentes.
                            </p>
                        </div>

                        {/* Right Side - Isotipo Pulsing */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-56 h-56 flex-shrink-0 flex items-center justify-center">
                                {/* Outer pulsing ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-neutral-700 animate-gentle-pulse opacity-50" />
                                <div className="absolute inset-4 rounded-full border border-neutral-800 animate-gentle-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
                                
                                {/* Isotipo image */}
                                <div className="relative z-10 animate-gentle-pulse">
                                    <img 
                                        src="/isotipo-norc.png" 
                                        alt="NORC Isotipo" 
                                        className="w-44 h-44 object-contain filter drop-shadow-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 border-b border-neutral-800 bg-neutral-950">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="font-mono text-lg font-bold uppercase mb-4 text-green-500 animate-code-pulse">
                                &gt; MISSION
                            </h3>
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                Criar equipamentos e apparel que unem design brutalist com funcionalidade extrema, elevando cada sessão de treino a uma expressão de disciplina e precisão.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-mono text-lg font-bold uppercase mb-4 text-green-500 animate-code-pulse" style={{ animationDelay: '0.3s' }}>
                                &gt; VISION
                            </h3>
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                Ser a marca definitiva para aqueles que veem o treino como filosofia de vida. Precisão em movimento. Força em propósito.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-mono text-lg font-bold uppercase mb-4 text-green-500 animate-code-pulse" style={{ animationDelay: '0.6s' }}>
                                &gt; VALUES
                            </h3>
                            <p className="text-lg text-neutral-300 leading-relaxed">
                                Integridade no design. Honestidade na performance. Respeito pela disciplina. Excelência sem compromissos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Four Pillars */}
            <section className="py-32 border-b border-neutral-800">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">// THE FOUR PILLARS</span>
                        <h2 className="font-heading text-5xl md:text-7xl mt-4 mb-8">Foundation Of Precision</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { id: 'FORCE', name: 'FORCE', desc: 'Poder físico, resistência e disciplina inabalável. A fundação de tudo.', icon: Zap },
                            { id: 'MIND', name: 'MIND', desc: 'Clareza mental e foco estoico. Força sem controle é caos.', icon: Target },
                            { id: 'URBAN', name: 'URBAN', desc: 'Estética techwear funcional. A cidade é nosso campo de treino.', icon: Layers },
                            { id: 'CYCLE', name: 'CYCLE', desc: 'Ritmo e fluxo. Liberdade no movimento perpétuo.', icon: Heart }
                        ].map((pillar) => {
                            const Icon = pillar.icon;
                            const color = COLORS[pillar.id as keyof typeof COLORS];
                            return (
                                <div 
                                    key={pillar.id} 
                                    className="group p-8 border border-neutral-800 transition-all duration-500 hover:bg-neutral-950/50 relative overflow-hidden rounded-lg"
                                    style={{
                                        borderColor: 'var(--border-color)',
                                        '--border-color': '#4B4C4F'
                                    } as React.CSSProperties}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.setProperty('--border-color', color);
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.setProperty('--border-color', '#4B4C4F');
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                                    <div className="relative z-10">
                                        <Icon size={32} style={{ color, marginBottom: 16 }} className="group-hover:scale-110 transition-transform duration-500" />
                                        <h3 className="font-heading text-3xl mb-4 font-bold" style={{ color }}>
                                            {pillar.name}
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* The Manifesto - Enhanced */}
            <section className="py-40 border-b border-neutral-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-black" />
                <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 rounded-full blur-3xl opacity-20" style={{ backgroundColor: COLORS.FORCE }} />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-8">
                            // MANIFESTO
                        </span>
                        
                        <div className="space-y-8">
                            <p className="text-xl md:text-3xl text-neutral-400 font-light italic">
                                "Não somos para todos."
                            </p>
                            
                            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                            
                            <div className="space-y-6 text-lg md:text-2xl text-neutral-300 font-light leading-relaxed">
                                <p>Somos para aqueles que acordam antes do sol.</p>
                                <p>Para aqueles que encontram paz no desconforto.</p>
                                <p>Para os arquitetos do próprio destino.</p>
                                <p>Para quem entende que o corpo é uma escultura.</p>
                                <p>Para quem treina não para parecer, mas para ser.</p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

                            <p className="font-heading text-4xl md:text-6xl text-white italic font-bold mt-12">
                                PRECISION IN MOTION
                            </p>
                            <p className="font-heading text-3xl md:text-5xl text-white italic font-bold">
                                FORGE YOUR PATH
                            </p>
                        </div>

                        <div className="mt-16 inline-block relative">
                            <div className="absolute -inset-1 rounded-lg blur opacity-25 hover:opacity-75 transition duration-1000 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
                            <button 
                                onClick={() => navigate('/shop')}
                                className="relative flex items-center gap-3 text-white bg-black hover:bg-neutral-800 px-10 py-5 font-heading text-xl uppercase tracking-widest rounded-lg transition-all duration-300 border border-neutral-700 hover:border-green-500"
                            >
                                Join The Movement
                                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why NORC Section */}
            <section className="py-32 border-b border-neutral-800">
                <div className="container mx-auto px-6">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 block mb-8">
                        // WHY NORC
                    </span>
                    <h2 className="font-heading text-5xl md:text-7xl mb-16">Philosophy Of Execution</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            {
                                title: 'Uncompromising Design',
                                desc: 'Cada detalhe é funcional. Nada é decoração. Cada linha de código, cada costura, cada material tem propósito.'
                            },
                            {
                                title: 'Performance First',
                                desc: 'Não criamos para revistas. Criamos para atletas. Testers reais em ambientes reais definem nossos produtos.'
                            },
                            {
                                title: 'Aesthetic Truth',
                                desc: 'Brutalismo não é sobre fealdade. É sobre honestidade estrutural. Forma segue função, sempre.'
                            },
                            {
                                title: 'Community',
                                desc: 'NORC não é uma marca. É um movimento de indivíduos que entendem disciplina, crescimento e excelência.'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="w-1 bg-gradient-to-b from-neutral-700 to-transparent flex-shrink-0" />
                                <div>
                                    <h3 className="font-mono text-lg font-bold text-green-500 mb-4 animate-code-pulse" style={{ animationDelay: `${idx * 0.2}s` }}>
                                        &gt; {item.title}
                                    </h3>
                                    <p className="text-neutral-400 text-lg leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-heading text-5xl md:text-7xl mb-8">Ready To Evolve?</h2>
                    <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                        Explore as quatro linhas de NORC e encontre a que ressoa com sua filosofia de treino.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button variant="primary" onClick={() => navigate('/shop')} className="px-8 py-4">
                            Shop All Collections
                        </Button>
                        <Button variant="secondary" onClick={() => navigate('/shop')} className="px-8 py-4">
                            Explore Lines
                        </Button>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes gentle-pulse {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                .animate-gentle-pulse {
                    animation: gentle-pulse 3s ease-in-out infinite;
                }
                @keyframes code-pulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
                .animate-code-pulse {
                    animation: code-pulse 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};