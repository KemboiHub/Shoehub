import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from './sections';

const App = () => (
  <main className="relative">
    {/* <Nav /> */}
    <section className="xl:padding-1 wide:pr-8 pb-8">  {/* Fixed Tailwind classes */}
      <Hero />
    </section>
    <section className="p-4">  {/* Simplified padding */}
      <PopularProducts />
    </section>
    <section className="p-4">
      <SuperQuality />
    </section>
    <section className="px-4 py-10">  {/* Tailwind format */}
      <Services />
    </section>
    <section className="p-4">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue p-4">
      <CustomerReviews />
    </section>
    <section className="px-4 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black px-4 pt-4 pb-8">  {/* Fixed typo */}
      <Footer />  {/* Render as component */}
    </section>
  </main>
);

export default App;