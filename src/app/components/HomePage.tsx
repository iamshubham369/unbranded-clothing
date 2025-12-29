import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const collectionItems = [
    {
      id: 1,
      name: 'Shadow Hoodie',
      image: 'https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzY2NzAzOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Urban Tee',
      image: 'https://images.unsplash.com/photo-1662011966037-7ea814f79a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmYXNoaW9uJTIwdHNoaXJ0fGVufDF8fHx8MTc2Njc3OTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Minimal Fit',
      image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc3RyZWV0d2VhciUyMGZhc2hpb258ZW58MXx8fHwxNzY2Nzc5Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const lifestyleImages = [
    'https://images.unsplash.com/photo-1700557477593-2d86947ff385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY3MjYzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1502977601689-3671ddf792b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBjdWx0dXJlJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2Njc3OTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1583657217788-ada5fa5214cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB5b3V0aCUyMHN0eWxlfGVufDF8fHx8MTc2Njc3OTc3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1542357091-d4cd9ad6ba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwdXJiYW4lMjBjdWx0dXJlfGVufDF8fHx8MTc2Njc3OTc4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvb2RpZSUyMHN0cmVldHdlYXJ8ZW58MXx8fHwxNzY2NzAzOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc3RyZWV0d2VhciUyMGZhc2hpb258ZW58MXx8fHwxNzY2Nzc5Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1654764745582-69893ee8a985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXR3ZWFyJTIwbW9kZWx8ZW58MXx8fHwxNzY2Nzc5Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tighter uppercase">
              From <span className="text-lime-400">Unbranded</span>
              <br />
              To Branded
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
              Elevate your identity. Express your confidence. Embrace self-expression.
            </p>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 bg-lime-400 text-black px-8 py-4 rounded-full uppercase tracking-wider hover:bg-lime-300 transition-all duration-300 group"
            >
              Explore Collection
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

       
       
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-4 tracking-tighter uppercase">
            Featured Pieces
          </h2>
          <p className="text-gray-400 mb-12">Curated selection of our latest drops</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collectionItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-zinc-900 aspect-[3/4] mb-4">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-lime-400/0 group-hover:bg-lime-400/10 transition-colors duration-300" />
                </div>
                <h3 className="text-xl uppercase tracking-wider">{item.name}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 border-2 border-white px-8 py-3 rounded-full uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              View Full Collection
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-8 tracking-tighter uppercase">
              Your Identity,
              <br />
              <span className="text-lime-400">Your Statement</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300">
              <p>We believe everyone deserves to feel confident in what they wear.</p>
              <p>
                UNBRAND is more than clothing — it's a movement for the everyday individual who
                refuses to blend in.
              </p>
              <p className="text-lime-400 uppercase tracking-wider">
                Elevate. Express. Empower.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl md:text-6xl tracking-tighter uppercase">
            The <span className="text-lime-400">Culture</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {lifestyleImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden bg-zinc-900"
            >
              <ImageWithFallback
                src={image}
                alt={`Lifestyle ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
