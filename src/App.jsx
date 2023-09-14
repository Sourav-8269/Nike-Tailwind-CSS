import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import SpecialOffers from "./components/SpecialOffers";
import Subscribe from "./components/Subscribe";
import SuperQuality from "./components/SuperQuality";

const App=()=>{
  return (
    <main className="relative">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer/> 
      </section>
    </main>
  )
}
export default App;