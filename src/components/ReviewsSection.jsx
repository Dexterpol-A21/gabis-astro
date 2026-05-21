import React from 'react';

const reviews = [
    {
        name: "Carlos M.",
        text: "¡La mejor birria que he probado! Y en la noche las hamburguesas son otro nivel.",
        rating: 5,
        source: "Google Reviews"
    },
    {
        name: "Ana P.",
        text: "Me encanta el concepto. Desayunar rico con familia y volver en la noche con amigos por unas alitas.",
        rating: 5,
        source: "Facebook"
    },
    {
        name: "Jorge L.",
        text: "El servicio es excelente y las porciones son muy generosas. ¡Súper recomendado!",
        rating: 5,
        source: "Google Reviews"
    }
];

export function ReviewsSection() {
    return (
        <section className="py-20 transition-colors duration-500" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl mb-4 transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-accent)' }}>
                        LO QUE DICEN DE NOSOTROS
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto transition-colors duration-500" style={{ fontFamily: 'var(--font-body)', opacity: 0.8 }}>
                        Nuestra comunidad es lo más importante. Gracias por hacernos parte de sus días y sus noches.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="p-8 rounded-2xl shadow-sm border flex flex-col items-center text-center hover:shadow-md transition-all duration-500 group" style={{ backgroundColor: 'var(--theme-card-bg)', borderColor: 'var(--theme-border)' }}>
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 transition-colors duration-500" style={{ color: 'var(--theme-accent)' }} fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="font-satoshi text-lg italic mb-6 transition-colors duration-500" style={{ color: 'var(--theme-text)', opacity: 0.9 }}>"{review.text}"</p>
                            <div className="mt-auto">
                                <h4 className="text-xl tracking-wide transition-all duration-500" style={{ fontFamily: 'var(--theme-font-title)', color: 'var(--theme-text)' }}>{review.name}</h4>
                                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--theme-text)', opacity: 0.5 }}>{review.source}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
