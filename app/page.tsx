'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Droplets, 
  Sparkles, 
  Wind, 
  Star, 
  ChevronRight,
  Phone,
  MapPin,
  Facebook,
  Instagram
} from 'lucide-react';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToOrder = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* 1. HERO SECTION */}
      <section className="relative bg-stone-50 overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            >
              <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-emerald-800 border border-emerald-800/20 mb-2">
                🌿 Nam Nung Vietnam
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold leading-tight text-gray-900">
                Herbal Solution to Stop Hair Loss & <span className="text-emerald-700">Stimulate Rapid Growth</span>
              </h1>
              <p className="text-lg text-gray-600">
                Traditional natural ingredients for healthy, thick, and dandruff-free hair.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 py-4">
                <span className="bg-red-50 text-red-600 px-3 py-1 rounded-md text-sm font-semibold border border-red-100">🔥 33% OFF</span>
                <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md text-sm font-semibold border border-orange-100">🎁 Free 50K Voucher</span>
                <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-md text-sm font-semibold border border-emerald-100">🚚 Free Shipping Nationwide</span>
              </div>

              <button 
                suppressHydrationWarning
                onClick={scrollToOrder}
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-orange-600/30 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 animate-pulse"
              >
                Order Now (Đặt hàng tại đây) <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-700" />
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <span>Safe & Effective</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-700" />
                  <span>Trusted by 10,000+</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-emerald-800/10 rounded-full blur-3xl"></div>
                <Image 
                  src="https://picsum.photos/seed/namnung-combo/800/800" 
                  alt="Nam Nung Shampoo and Conditioner Combo" 
                  fill
                  className="object-cover rounded-3xl shadow-2xl z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 z-20 bg-white rounded-2xl shadow-xl p-2 rotate-[-6deg]">
                  <Image 
                    src="https://picsum.photos/seed/namnung-herbs/200/200" 
                    alt="Natural Herbs" 
                    fill
                    className="object-cover rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE BENEFITS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Droplets className="w-8 h-8" />, title: "Reduces Hair Loss" },
              { icon: <Sparkles className="w-8 h-8" />, title: "Stimulates Hair Growth" },
              { icon: <Wind className="w-8 h-8" />, title: "Anti-Dandruff" },
              { icon: <Leaf className="w-8 h-8" />, title: "Relieves Itchy Scalp" }
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition-colors border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE & PRICING */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">The Secret to Healthy Hair from Nature</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect herbal care package for your hair needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Combo */}
            <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-emerald-700 relative overflow-hidden flex flex-col">
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                FLASH SALE
              </div>
              <div className="relative h-56 w-full mb-6 rounded-2xl overflow-hidden bg-gray-50">
                <Image 
                  src="https://picsum.photos/seed/namnung-combo-pack/600/400" 
                  alt="Combo Shampoo + Conditioner" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Combo Shampoo + Conditioner</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">Complete care for reducing hair loss and stimulating growth.</p>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-2xl font-bold text-emerald-700">342,000 VND</span>
                <span className="text-sm text-gray-400 line-through mb-1">510,000 VND</span>
              </div>
              <button suppressHydrationWarning onClick={scrollToOrder} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md">
                Order Now
              </button>
            </div>

            {/* Shampoo */}
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-200 flex flex-col">
              <div className="relative h-56 w-full mb-6 rounded-2xl overflow-hidden bg-gray-50">
                <Image 
                  src="https://picsum.photos/seed/namnung-shampoo/600/400" 
                  alt="Herbal Shampoo" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Herbal Shampoo</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">Deep cleansing, anti-dandruff, and hair loss prevention.</p>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-2xl font-bold text-emerald-700">235,000 VND</span>
                <span className="text-sm text-gray-400 line-through mb-1">350,000 VND</span>
              </div>
              <button suppressHydrationWarning onClick={scrollToOrder} className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl transition-colors">
                Order Now
              </button>
            </div>

            {/* Conditioner */}
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-gray-200 flex flex-col">
              <div className="relative h-56 w-full mb-6 rounded-2xl overflow-hidden bg-gray-50">
                <Image 
                  src="https://picsum.photos/seed/namnung-conditioner/600/400" 
                  alt="Herbal Conditioner" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Herbal Conditioner</h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">Nourishes and repairs damaged hair, making it smooth and silky.</p>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-2xl font-bold text-emerald-700">145,000 VND</span>
                <span className="text-sm text-gray-400 line-through mb-1">220,000 VND</span>
              </div>
              <button suppressHydrationWarning onClick={scrollToOrder} className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY INGREDIENTS SPOTLIGHT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Key Ingredients Spotlight</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Carefully selected traditional herbs to provide the best care for your hair.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Locust (Bồ kết)", desc: "Cleanses excess oil and dirt, supports hair growth.", img: "boket-herb" },
              { name: "Lemon & Ginger (Chanh gừng)", desc: "Reduces fungi and dandruff, stimulates scalp circulation.", img: "lemon-ginger" },
              { name: "Fleeceflower Root (Hà thủ ô)", desc: "Repairs damaged hair, helps maintain natural dark hair color.", img: "fleeceflower" }
            ].map((ing, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl relative group-hover:scale-105 transition-transform border-4 border-emerald-50">
                  <Image 
                    src={`https://picsum.photos/seed/${ing.img}/400/400`}
                    alt={ing.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-xl text-emerald-800 mb-3">{ing.name}</h3>
                <p className="text-gray-600 px-4 leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DETAILED EFFICACY DESCRIPTION */}
      <section className="py-20 bg-emerald-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Leaf className="w-12 h-12 mx-auto mb-6 text-emerald-300 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 leading-tight">
            Nourishes long, thick, and smooth hair. <br className="hidden md:block" />
            <span className="text-yellow-400">No artificial smoothing chemicals.</span>
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl mx-auto font-light">
            Our traditional herbal extraction process ensures that all the natural nutrients are preserved. 
            It penetrates deep into the hair follicles, providing essential vitamins and minerals to stop hair loss at its root. 
            Suitable for both men and women, our formula restores your hair&apos;s natural vitality without relying on harsh chemicals or silicones.
          </p>
        </div>
      </section>

      {/* 6. SOCIAL PROOF (CUSTOMER REVIEWS) */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Customer Reviews</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8 border-b border-gray-100 pb-8 mb-8">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-orange-600 mb-2">5.0</div>
                <div className="flex text-yellow-400 justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <div className="text-gray-500 text-sm">out of 5 Stars (12.4k reviews)</div>
              </div>
              <div className="flex-grow w-full max-w-sm">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2 text-sm mb-1">
                    <span className="w-3">{star}</span>
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full bg-yellow-400 ${star === 5 ? 'w-[95%]' : star === 4 ? 'w-[4%]' : 'w-[1%]'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {[
                { name: "Tran Thi Hoa", date: "2026-03-10", variant: "Combo Shampoo + Conditioner", comment: "My hair stopped falling out entirely after 1 week of using this combo. The herbal scent is so relaxing, like being in a spa. Highly recommend!", response: "Thank you for trusting Nam Nung Vietnam! We are so glad to hear that your hair loss has stopped. Keep using it for the best results!" },
                { name: "Nguyen Van Minh", date: "2026-03-05", variant: "Herbal Shampoo", comment: "I had severe dandruff and itchy scalp for years. This shampoo cleared it up in just a few washes. It doesn't dry out my hair either.", response: "Hi Minh, we're thrilled that our shampoo helped with your dandruff issue. The Lemon & Ginger extract works wonders for the scalp!" },
                { name: "Le Ngoc Mai", date: "2026-02-28", variant: "Combo Shampoo + Conditioner", comment: "Bought this for my mom and she loves it. Her hair is noticeably thicker and darker thanks to the Fleeceflower root. Will buy again.", response: "Thank you for your wonderful feedback, Mai! Fleeceflower root is indeed excellent for maintaining dark, healthy hair. Wishing you and your mom great health!" }
              ].map((review, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-500 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Variation: {review.variant}</div>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{review.comment}</p>
                      
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-sm text-emerald-800">Seller&apos;s Response</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-800" />
                        </div>
                        <p className="text-sm text-gray-600">{review.response}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHECKOUT / LEAD GENERATION FORM */}
      <section id="order-form" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-emerald-800/20">
            <div className="bg-emerald-800 text-white p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Register to receive the offer</h2>
              <p className="text-emerald-200 mb-6">(Limited to 50 fast customers)</p>
              
              <div className="flex justify-center gap-3 md:gap-6">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="bg-white text-emerald-800 rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-2xl font-bold mb-1 shadow-inner">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <span className="text-xs uppercase tracking-wider opacity-90">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input suppressHydrationWarning type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-800 focus:border-transparent outline-none transition-all" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input suppressHydrationWarning type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-800 focus:border-transparent outline-none transition-all" placeholder="Enter your phone number" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
                    <textarea suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-800 focus:border-transparent outline-none transition-all" rows={3} placeholder="Street, Ward, District, City" required></textarea>
                  </div>
                </div>
                
                <div className="pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Package *</label>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border-2 border-emerald-800 bg-stone-50 rounded-xl cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input suppressHydrationWarning type="radio" name="product" className="w-5 h-5 text-emerald-800 focus:ring-emerald-800" defaultChecked />
                        <div>
                          <span className="font-bold block text-gray-900">Combo for Dry Scalp</span>
                          <span className="text-xs text-gray-500">Shampoo + Conditioner</span>
                        </div>
                      </div>
                      <span className="font-bold text-orange-600 text-lg">342,000 VND</span>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <input suppressHydrationWarning type="radio" name="product" className="w-5 h-5 text-emerald-800 focus:ring-emerald-800" />
                        <div>
                          <span className="font-bold block text-gray-900">Combo for Oily Scalp</span>
                          <span className="text-xs text-gray-500">Shampoo + Conditioner</span>
                        </div>
                      </div>
                      <span className="font-bold text-orange-600 text-lg">342,000 VND</span>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <input suppressHydrationWarning type="radio" name="product" className="w-5 h-5 text-emerald-800 focus:ring-emerald-800" />
                        <div>
                          <span className="font-bold block text-gray-900">2L Bulk Jug</span>
                          <span className="text-xs text-gray-500">Family Size Shampoo</span>
                        </div>
                      </div>
                      <span className="font-bold text-orange-600 text-lg">750,000 VND</span>
                    </label>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button suppressHydrationWarning type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl py-5 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide">
                    Confirm Order
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Your information is secure and encrypted.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-emerald-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h4 className="text-white text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-emerald-500" />
                Nam Nung Vietnam Co., Ltd.
              </h4>
              <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
                Dedicated to bringing the best traditional herbal hair care solutions to protect and nourish your hair naturally.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 text-emerald-500" />
                  <span>70 Street 10, Cityland Residential Area, Go Vap Ward, Ho Chi Minh City</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-emerald-500" />
                  <span>Hotlines: 0978266644 / 0977344400 / 0978522244</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Connect With Us</h4>
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-800 text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-800 text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <h4 className="text-white font-bold mb-4 text-lg">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 Nam Nung Vietnam Co., Ltd. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <span>Registered with the Ministry of Industry and Trade</span>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.1)] md:hidden z-50">
        <button suppressHydrationWarning onClick={scrollToOrder} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 animate-pulse uppercase tracking-wide">
          Order Now <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
