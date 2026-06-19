import { Link } from "react-router-dom";
import { ArrowRight, Headphones } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-navy py-12">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Headphones className="w-7 h-7 text-white" />
            </div>
            <div className="text-white">
              <h3 className="text-xl md:text-2xl font-bold">
                Looking for Reliable Power Line Solutions?
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-gray-300 text-sm hidden md:block">
              Get in touch with our experts today
              <br />
              for the best products and services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:brightness-110 text-white font-semibold px-6 py-3 rounded transition-colors whitespace-nowrap"
            >
              CONTACT US NOW
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
