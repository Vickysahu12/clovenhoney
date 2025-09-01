import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const menuItems = [
  { name: "AVOCADO TOAST", desc: "Smashed avocado, lemon, chili flakes, spinach, on sourdough toast", price: "8.5" },
  { name: "VEGGIE FRY", desc: "eggs, slow roast tomatoes, roasted onions, grilled halloumi, smashed avocado", price: "12" },
  { name: "BREAKFAST SANDWICH", desc: "Eggs, gruyere, bacon, avocado, sprouts aioli, toasted sourdough", price: "12" },
  { name: "GRANOLA & GREEK YOGURT", desc: "Housemade granola, organic yogurt, banana, raspberries, strawberries, honey", price: "9" },
  { name: "AÇAÍ BANANA BERRY", desc: "Açaí, raspberry, blueberry, banana, vanilla cashew milk, topped with hempseed granola, fresh strawberry, blueberry and honey", price: "7.5" },
  { name: "AMAYA FRY", desc: "Eggs any style, crispy bacon, slow roast tomatoes, thyme roasted portobello mushrooms", price: "8.5" },
  { name: "AÇAÍ PITAYA BOWL", desc: "Pitaya, banana, pineapple, coconut, topped with hempseed granola, coconut flakes, banana and agave nectar", price: "9" },
  { name: "FRUIT SALAD WITH YUZU VANILLA SYRUP AND FRESH MINT", desc: "Melon, pineapple, strawberries, mango and banana", price: "4.9" },
  { name: "SCRAMBLED EGGS & ORGANIC SALMON", desc: "served on sourdough bread, topped with rucola and creme fraiche", price: "8.5" },
  { name: "CORNBREAD FRENCH TOAST", desc: "with bacon, rucola and avocado", price: "8" },
  { name: "BAKED EGGS & CHORIZO", desc: "with tomato and pepper ragout and greek yoghurt", price: "7" },
  { name: "LAVENDER SCENTED PANCAKES", desc: "Raspberries, vanilla butter", price: "7" },
];

const KitchenMenu = () => {
  return (
    <AnimatedSection>
      <section className="w-full bg-white py-16 px-4 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            𝙺𝚒𝚝𝚌𝚑𝚎𝚗
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b border-gray-100 pb-4 hover:border-emerald-200 transition-colors"
            >
              {/* Left Side (Name + Desc) */}
              <div className="pr-6">
                <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide hover:text-blue-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-snug mt-1">
                  {item.desc}
                </p>
              </div>

              {/* Right Side (Price) */}
              <span className="text-emerald-700 font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-300 group-hover:text-emerald-900">
                ${item.price}
              </span>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default KitchenMenu;
