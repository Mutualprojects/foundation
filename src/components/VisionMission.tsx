"use client";

import { motion } from "framer-motion";
import { Eye, Zap, ShieldCheck, Handshake, HeartHandshake, Target } from "lucide-react";

const missions = [
  {
    title: "Educate & Awaken",
    description: "Run high-impact awareness campaigns targeting the youth to educate them on the fatal consequences of speeding, drag racing, and reckless driving.",
    icon: Zap,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100"
  },
  {
    title: "Advocate Responsibility",
    description: "Instill deep behavioral accountability in drivers, ensuring they protect not just themselves, but every pedestrian and co-passenger on the road.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    title: "Collaborative Action",
    description: "Partner closely with law enforcement agencies, community leaders, and public figures to distribute safety gear and implement civic safety initiatives.",
    icon: Handshake,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100"
  },
  {
    title: "Holistic Support",
    description: "Extend our hands beyond road safety to uplift marginalized communities through welfare programs, healthcare support, and aid distribution.",
    icon: HeartHandshake,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  }
];

export function VisionMission() {
  return (
    <section className="relative w-full bg-white py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
        
        {/* Top Section: Vision */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-widest mb-6">
              <Eye className="w-4 h-4 text-blue-600" />
              Our Vision
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              A Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">Zero Avoidable Fatalities.</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <p className="text-xl lg:text-3xl font-medium text-slate-700 leading-relaxed relative">
              <span className="absolute -top-6 -left-8 text-6xl text-slate-200 font-serif">&ldquo;</span>
              To foster a society where every individual behind the wheel values human life, resulting in zero avoidable road fatalities, safe transit environments, and absolute adherence to traffic discipline.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Mission */}
        <div>
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold uppercase tracking-widest mb-4">
              <Target className="w-4 h-4 text-red-600" />
              Our Mission
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-slate-900">How We Drive Change</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {missions.map((mission, idx) => {
              const Icon = mission.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                  className="group relative p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-2xl ${mission.bg} ${mission.border} border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 ${mission.color}`} />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{mission.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {mission.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
