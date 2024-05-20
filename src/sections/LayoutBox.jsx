import logoBoxed from '../assets/logoBoxed_colour.svg'
const LayoutBox = () => {
    return ( 
        <section className="flex relative">
            <div className="min-h-screen bg-[#eceeff] w-[62px] p-3 flex flex-col items-center">
                <img src={logoBoxed} alt='' className='w-[38px]' />
                <p>side</p>
            </div>
            <div className="min-h-screen w-[calc(100%-62px)] bg-[white] rounded-tl-[15px] rounded-bl-[15px] p-5">
                <h1>content</h1>
            </div>
        </section>
     );
}
 
export default LayoutBox;