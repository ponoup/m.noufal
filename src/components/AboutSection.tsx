import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';
import myPhoto from '../picture/foto.jpeg';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '20+', label: 'Game yang di maeinkan' },
    { icon: Video, value: '50+', label: 'Film yg di tonton' },
    { icon: Coffee, value: '200+', label: 'Gelas Teh' },
    { icon: Rocket, value: '100+', label: 'Tahun Pengalaman' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={myPhoto}
                    alt="foto saya"
                    className="objeck-cover w-full h-full transition-transdorm duration-300 hover:scale-105"
                    />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">100+ Tahun</p>
                <p className="text-sm text-muted-foreground">Pengalaman</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Passionate Developer &amp; Creator
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              perkenalkan nama saya Muhammad Noufal ,kelas x-10 
              Saya adalah seorang murid dari sekolah MAN 1 Banda Aceh,saat ini saya berumur 16 tahun
              Saya adalah anak ke-3 dari 3 bersaudara atau bisa di bilang anak terakir
              Mata pelajaran saya adalah Bahasa Ingris,PJOK dan juga TIK.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Selain itu saya juga memeliki hobi seperti Bermain game ,Berenang dll 
              saya masuk ke sekolah MAN di karnakan Terdapat sekolah kedinasan di sini,Seperti IPDN,STAN,AKPOL,dll 
              saya berharap kemampuan saya akan terus berkembang dan dapat masuk ke sekolah tinngi yg saya inginkan.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
