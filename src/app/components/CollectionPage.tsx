import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CollectionPage() {
  const products = [
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
    {
      id: 4,
      name: 'Street Essential',
      image: 'https://images.unsplash.com/photo-1700557477593-2d86947ff385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjY3MjYzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      name: 'Culture Tee',
      image: 'https://images.unsplash.com/photo-1502977601689-3671ddf792b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBjdWx0dXJlJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2Njc3OTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      name: 'Youth Statement',
      image: 'https://images.unsplash.com/photo-1583657217788-ada5fa5214cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB5b3V0aCUyMHN0eWxlfGVufDF8fHx8MTc2Njc3OTc3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      name: 'Urban Movement',
      image: 'https://images.unsplash.com/photo-1542357091-d4cd9ad6ba02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwdXJiYW4lMjBjdWx0dXJlfGVufDF8fHx8MTc2Njc3OTc4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      name: 'Identity Hoodie',
      image: 'https://images.unsplash.com/photo-1654764745582-69893ee8a985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXR3ZWFyJTIwbW9kZWx8ZW58MXx8fHwxNzY2Nzc5Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

 const handleWhatsAppOrder = (productName: string) => {
  const phoneNumber = "917666228277";
  const message = `Hi! I'm interested in ordering the ${productName} from UNBRAND.`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};


  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 tracking-tighter uppercase">
            The Collection
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Premium streetwear designed for the bold. Order directly via WhatsApp.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-zinc-900 aspect-[3/4] mb-4">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button
                      onClick={() => handleWhatsAppOrder(product.name)}
                      className="w-full flex items-center justify-center gap-2 bg-lime-400 text-black px-4 py-3 rounded-full uppercase tracking-wider hover:bg-lime-300 transition-colors"
                    >
                      <MessageCircle size={18} />
                      Order via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg uppercase tracking-wider">{product.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-lime-400 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter uppercase">
            Ready to Elevate?
          </h2>
          <p className="text-xl mb-8">
            Click on any product to order directly via WhatsApp. Fast, simple, personal.
          </p>
          <a
            href="https://wa.me/917666228277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full uppercase tracking-wider hover:bg-zinc-900 transition-colors"
          >
            <MessageCircle size={20} />
            Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
