import React from 'react';

const CoffeeBar = () => {
  return (
    <div className="bg-white text-[#1a1a1a] font-sans p-8 md:p-16">
      <div className="text-center mb-12 md:mb-20">
        <p className="text-xs font-medium tracking-widest uppercase">LITTE SIPS</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">𝙲𝚘𝚏𝚏𝚎𝚎 𝙱𝚊𝚛</h1>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Left Column - Espresso Section */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2 border-black">ESPRESSO</h2>
          
          <div className="mt-6 text-sm">
            <div className="flex justify-between items-end pb-2">
              <span className="font-bold">ESPRESSO</span>
              <div className="flex space-x-4 text-gray-500">
                <span>SOLO</span>
                <span>DOPPIO</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span></span>
              <div className="flex space-x-4 font-bold">
                <span>3</span>
                <span>4</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm">
            <div className="flex justify-between items-end pb-2">
              <span className="font-bold">MACCHIATO</span>
              <div className="flex space-x-4 text-gray-500">
                <span>SMALL</span>
                <span>MEDIUM</span>
                <span>LARGE</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span></span>
              <div className="flex space-x-4 font-bold">
                <span>2.5</span>
                <span>2.8</span>
                <span>3.1</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm">
            <div className="flex justify-between items-center py-2">
              <span className="font-bold">CORTADO</span>
              <div className="flex space-x-4 font-bold">
                <span>2.3</span>
                <span>2.6</span>
                <span>2.85</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm">
            <div className="flex justify-between items-center py-2">
              <span className="font-bold">AMERICANO</span>
              <div className="flex space-x-4 font-bold">
                <span>2</span>
                <span>2.25</span>
                <span>2.5</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm">
            <div className="flex justify-between items-center py-2">
              <span className="font-bold">LATTE</span>
              <div className="flex space-x-4 font-bold">
                <span>2.5</span>
                <span>2.75</span>
                <span>3</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm">
            <div className="flex justify-between items-center py-2">
              <span className="font-bold">AMERICAN LATTE</span>
              <div className="flex space-x-4 font-bold">
                <span>2.6</span>
                <span>2.85</span>
                <span>3.1</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm">
            <div className="flex justify-between items-center py-2">
              <span className="font-bold">CAPPUCCINO</span>
              <div className="flex space-x-4 font-bold">
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
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2 border-white">BREWED COFFEE</h2>
            <div className="grid grid-cols-2 mt-6 text-sm gap-x-8">
              <div className="flex flex-col">
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">AEROPRESS</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">SINGLE ORIGIN</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">DRIP OF THE DAY</span>
                  <span>2.5</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">COFFEE POUR OVER</span>
                  <span>2.5</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">CAFE AU LAIT</span>
                  <span>3</span>
                </div>
              </div>
            </div>
            <div className="text-xs mt-8">
              <p className="font-bold">Non-Dairy Milk:</p>
              <p>Oat, Soy, Almond, Coconut, Macadamia + 0.50</p>
            </div>
          </div>

          {/* Not Coffee Section */}
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold pb-2 border-b-2 border-black">NOT COFFEE</h2>
            <div className="grid grid-cols-2 gap-x-12 mt-6 text-sm">
              {/* Left side items */}
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">DETOX</div>
                    <div className="font-bold">7</div>
                  </div>
                  <div className="text-xs">
                    Ginger, lemon, apple, beetroot, carrot & mint
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">SPRING WATER</div>
                    <div className="font-bold">1.5</div>
                  </div>
                  <div className="text-xs">
                    250ml
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">MATCHA GREEN TEA LATTE</div>
                    <div className="font-bold">4</div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">HOT CHOCOLATE</div>
                    <div className="font-bold">2.5</div>
                  </div>
                </div>
              </div>
              
              {/* Right side items */}
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">TURMERIC LATTE</div>
                    <div className="font-bold">5.5</div>
                  </div>
                  <div className="text-xs">
                    Almond milc blended with turmeric, ginger, vanilla & cinnamon
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">GINGER SKINNY LEMONADE</div>
                    <div className="font-bold">2.5</div>
                  </div>
                  <div className="text-xs">
                    Water, lemon, agave nectar and fresh ginger
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="font-bold">RISHI TEA</div>
                    <div className="font-bold">3</div>
                  </div>
                  <div className="text-xs">
                    hot or iced
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBar;
