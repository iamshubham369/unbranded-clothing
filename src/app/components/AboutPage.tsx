import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1583657217788-ada5fa5214cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB5b3V0aCUyMHN0eWxlfGVufDF8fHx8MTc2Njc3OTc3OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About UNBRAND"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tighter uppercase">
            Our <span className="text-lime-400">Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            From the streets of India to the world.
          </p>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tighter uppercase">
              The Beginning
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              UNBRAND was born from a simple observation: too many people settle for clothes that
              don't represent who they truly are. We saw a generation of individuals with unique
              stories, yet wearing generic clothing that blended into the crowd.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tighter uppercase">
              The <span className="text-lime-400">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We exist to empower everyday individuals — the artists, the dreamers, the hustlers —
              to express themselves boldly through premium streetwear. We're not just selling
              clothes; we're building a movement for those who refuse to be invisible.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tighter uppercase">
              Indian Roots,
              <br />
              Global Mindset
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Rooted in Indian street culture but inspired by global fashion movements, UNBRAND
              represents the new India — confident, creative, and unapologetically bold. We blend
              the energy of our streets with the aesthetics of contemporary streetwear.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Image Grid */}
      <section className="py-20">
        <div className="grid grid-cols-2 gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1700557477593-2d86947ff385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY3MjYzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Culture 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="aspect-square overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542357091-d4cd9ad6ba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwdXJiYW4lMjBjdWx0dXJlfGVufDF8fHx8MTc2Njc3OTc4MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Culture 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-16 tracking-tighter uppercase text-center">
              What We Stand For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl mb-4 text-lime-400">01</div>
                <h3 className="text-2xl mb-4 uppercase tracking-wider">Authenticity</h3>
                <p className="text-gray-400">
                  No pretense. No fake hype. Just real clothing for real people with real stories.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4 text-lime-400">02</div>
                <h3 className="text-2xl mb-4 uppercase tracking-wider">Quality</h3>
                <p className="text-gray-400">
                  Premium materials, thoughtful design, and attention to detail in every piece.
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl mb-4 text-lime-400">03</div>
                <h3 className="text-2xl mb-4 uppercase tracking-wider">Empowerment</h3>
                <p className="text-gray-400">
                  Clothing that gives you confidence to be yourself, unapologetically.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-8 tracking-tighter uppercase">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            UNBRAND isn't just a brand. It's a community of individuals who choose to stand out.
          </p>
          <p className="text-2xl md:text-4xl text-lime-400 uppercase tracking-wider">
            From Unbranded to Branded.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
