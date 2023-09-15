import Button from "./Button"
import { offer } from '../assets/images'

const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex-1'>
          <h2 className='font-palanquin text-4xl font-bold lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h2>
          <p className='gap-16 mt-4 info-text lg:max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, expedita non voluptatum, reprehenderit dignissimos iure beatae nesciunt minima magni voluptates quaerat. Reprehenderit magni ea cupiditate necessitatibus ipsam nemo explicabo voluptates.</p>

          <p className='gap-16 mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, assumenda.</p>
          <div className='mt-11'>
            <Button label="View Details"/>
          </div>
      </div>
    </section>
  )
}

export default SpecialOffers