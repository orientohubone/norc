import React from 'react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';

export const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            <div className="container mx-auto px-6">
                
                {/* Intro */}
                <div className="py-20 border-b border-neutral-800">
                    <h1 className="font-heading text-6xl md:text-9xl italic font-bold mb-8">WHO WE ARE</h1>
                    <p className="text-2xl md:text-3xl font-light text-neutral-300 leading-normal max-w-4xl">
                        NORC é uma intersecção entre o brutalismo estético e a performance humana. Nascemos da necessidade de equipamentos que não apenas funcionam, mas inspiram disciplina.
                    </p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-b border-neutral-800">
                    <div>
                        <h3 className="font-heading text-4xl mb-6" style={{ color: COLORS.FORCE }}>FORCE</h3>
                        <p className="text-neutral-400">Poder físico, resistência e disciplina inabalável. Representa a fundação de tudo o que construímos.</p>
                    </div>
                    <div>
                        <h3 className="font-heading text-4xl mb-6" style={{ color: COLORS.MIND }}>MIND</h3>
                        <p className="text-neutral-400">Clareza mental e foco estoico. Acreditamos que a força sem controle é apenas caos.</p>
                    </div>
                    <div>
                        <h3 className="font-heading text-4xl mb-6" style={{ color: COLORS.URBAN }}>URBAN</h3>
                        <p className="text-neutral-400">A cidade é nosso campo de treino. Estética techwear unida à funcionalidade para o ambiente urbano.</p>
                    </div>
                    <div>
                        <h3 className="font-heading text-4xl mb-6" style={{ color: COLORS.CYCLE }}>CYCLE</h3>
                        <p className="text-neutral-400">Ritmo e fluxo. Para aqueles que encontram liberdade no movimento perpétuo e na cadência.</p>
                    </div>
                </div>

                {/* Full Manifesto */}
                <div className="py-32 text-center">
                    <h2 className="font-heading text-4xl mb-12">THE MANIFESTO</h2>
                    <div className="space-y-6 text-xl text-neutral-300 font-light tracking-wide">
                        <p>Não somos para todos.</p>
                        <p>Somos para aqueles que acordam antes do sol.</p>
                        <p>Para aqueles que encontram paz no desconforto.</p>
                        <p>Para os arquitetos do próprio destino.</p>
                        <br />
                        <p className="font-heading text-3xl text-white italic">WE ARE NORC.</p>
                    </div>
                    
                    <div className="mt-16">
                        <Button variant="secondary" onClick={() => navigate('/shop')}>Join The Movement</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};