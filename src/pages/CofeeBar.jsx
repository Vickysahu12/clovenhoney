import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const CoffeeBar = () => {
  return (
    <AnimatedSection>
      <div className="bg-white text-[#1a1a1a] font-sans p-8 md:p-16">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-xs font-medium tracking-widest uppercase text-green-600">
            LITTE SIPS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            𝙲𝚘𝚏𝚏𝚎𝚎 <span className="text-green-600">𝙱𝚊𝚛</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Left Column - Espresso Section */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2 border-green-600">
              ESPRESSO
            </h2>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-end pb-2">
                <span className="font-bold text-green-700">ESPRESSO</span>
                <div className="flex space-x-4 text-gray-500">
                  <span>SOLO</span>
                  <span>DOPPIO</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span></span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-end pb-2">
                <span className="font-bold text-green-700">MACCHIATO</span>
                <div className="flex space-x-4 text-gray-500">
                  <span>SMALL</span>
                  <span>MEDIUM</span>
                  <span>LARGE</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span></span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>2.5</span>
                  <span>2.8</span>
                  <span>3.1</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-green-700">CORTADO</span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>2.3</span>
                  <span>2.6</span>
                  <span>2.85</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-green-700">AMERICANO</span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>2</span>
                  <span>2.25</span>
                  <span>2.5</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-green-700">LATTE</span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>2.5</span>
                  <span>2.75</span>
                  <span>3</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-green-700">AMERICAN LATTE</span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>2.6</span>
                  <span>2.85</span>
                  <span>3.1</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <div className="flex justify-between items-center py-2">
                <span className="font-bold text-green-700">CAPPUCCINO</span>
                <div className="flex space-x-4 font-bold text-green-800">
                  <span>2</span>
                  <span>2.25</span>
                  <span>2.5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Brewed Coffee & Not Coffee Section */}
          <div className="md:w-1/2">
            {/* Brewed Coffee Section */}
            <div className="bg-black text-white p-8">
              <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2 border-green-500">
                BREWED COFFEE
              </h2>
              <div className="grid grid-cols-2 mt-6 text-sm gap-x-8">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold">AEROPRESS</span>
                    <span className="text-green-400">3</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold">SINGLE ORIGIN</span>
                    <span className="text-green-400">3</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold">DRIP OF THE DAY</span>
                    <span className="text-green-400">2.5</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold">COFFEE POUR OVER</span>
                    <span className="text-green-400">2.5</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold">CAFE AU LAIT</span>
                    <span className="text-green-400">3</span>
                  </div>
                </div>
              </div>
              <div className="text-xs mt-8">
                <p className="font-bold text-green-400">Non-Dairy Milk:</p>
                <p>Oat, Soy, Almond, Coconut, Macadamia + 0.50</p>
              </div>
            </div>

            {/* Not Coffee Section */}
            <div className="mt-12">
              <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2 border-green-600">
                NOT COFFEE
              </h2>
              <div className="grid grid-cols-2 gap-x-12 mt-6 text-sm">
                {/* Left side items */}
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">DETOX</div>
                      <div className="font-bold text-green-800">7</div>
                    </div>
                    <div className="text-xs">
                      Ginger, lemon, apple, beetroot, carrot & mint
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">SPRING WATER</div>
                      <div className="font-bold text-green-800">1.5</div>
                    </div>
                    <div className="text-xs">250ml</div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">
                        MATCHA GREEN TEA LATTE
                      </div>
                      <div className="font-bold text-green-800">4</div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">HOT CHOCOLATE</div>
                      <div className="font-bold text-green-800">2.5</div>
                    </div>
                  </div>
                </div>

                {/* Right side items */}
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">TURMERIC LATTE</div>
                      <div className="font-bold text-green-800">5.5</div>
                    </div>
                    <div className="text-xs">
                      Almond milk blended with turmeric, ginger, vanilla & cinnamon
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">
                        GINGER SKINNY LEMONADE
                      </div>
                      <div className="font-bold text-green-800">2.5</div>
                    </div>
                    <div className="text-xs">
                      Water, lemon, agave nectar and fresh ginger
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <div className="flex justify-between items-center py-2">
                      <div className="font-bold text-green-700">RISHI TEA</div>
                      <div className="font-bold text-green-800">3</div>
                    </div>
                    <div className="text-xs">hot or iced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CoffeeBar;
