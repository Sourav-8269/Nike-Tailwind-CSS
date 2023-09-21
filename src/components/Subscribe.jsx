import Button from "./Button"
const Subscribe = () => {
  return (
    <div className='max-container flex justify-between items-center max-lg:flex-col gap-10 ' id="contact-us">
      <h3 className='font-palanquin text-4xl leading-[68px] font-bold'>Sign Up Form
      <span className='text-coral-red'> Updated </span>
      & Newsletter</h3>
      <div className="lg:max-w-[40%] w-full flex justify-between items-center max-sm:flex-col gap-5 p-2.5 border sm:border-slate-gray rounded-full">
        <input type="text" className='input' placeholder='subscribe@nike.com' />
        <div className="flex items-center max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe