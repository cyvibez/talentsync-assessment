import automatic from '.././Images/Automattic.png'
import coinbase from '.././Images/Coinbase.png'
import dropbox from '.././Images/Dropbox.png'
import intercom from '.././Images/Intercom.png'
import shopify from '.././Images/Shopify.com.png'
import marvel from '.././Images/Marvel.png'


const Partners = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl flex flex-col mx-auto px-20 space-y-10 my-20">
                <p className="text-center text-[#475467] text-[14px] font-medium">Join 1,500+ companies already video conferencing the ClearLink way</p>

                <div className='flex justify-around items-center'>
                    <img src={shopify} alt="shopify" width={100} height={50}/>
                    <img src={coinbase} alt="coinbase" width={100} height={50}/>
                    <img src={dropbox} alt="dropbox" width={100} height={50}/>
                    <img src={intercom} alt="intercom" width={100} height={50}/>
                    <img src={marvel} alt="marvel" width={100} height={50}/>
                    <img src={automatic} alt="Automatic" width={100} height={50}/>
                </div>
            </div>
           
        </div>
    );
}
 
export default Partners;