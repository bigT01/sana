import React, {useEffect} from 'react';
import Layout from "./Layout";
import axios from "./Utils/axios";

function App() {

    useEffect(() => {
        axios.post('/news/')
            .then((response) => {
                console.log('Data:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

    return (
        <Layout>

            <div className="w-full flex flex-col items-center">
                <div className="rounded-xl  mb-6" style={{ width: "70%"}}>
                    <img src="./main.png" alt="img-main" style={{objectFit: "cover", width: "100%", height : "100%"}}/>
                </div>
                <h3 className="w-full mb-4">Catalog</h3>
                <div className="rounded-xl mb-6 p-4 w-full flex gap-6" style={{border: '1px solid #33333370'}}>
                    <div className="w-3/10 h-[300px]">
                        <img src="./main.png" alt="img-main" style={{objectFit: "cover", width: "100%", height : "100%"}}/>
                    </div>

                    <div className="flex flex-col gap-2 w-7/12 h-[300px]">
                        <h3 className="font-bold">Cyber Security problem and solution</h3>
                        <p className="font-normal" style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid amet commodi corporis culpa error labore molestiae pariatur perferendis possimus praesentium quia quibusdam, quis repudiandae rerum sint vero voluptatum. Quo?</p>
                        <p className={"text-secondaryGrey text-sm opacity-50"}>by Albina Muratovna</p>

                        <p className="font-bold mt-auto" style={{fontSize: 24}}>2000 ₸</p>
                    </div>

                </div>
                <div className="rounded-xl mb-6 p-4 w-full flex gap-6" style={{border: '1px solid #33333370'}}>
                    <div className="w-3/10 h-[300px]">
                        <img src="./main.png" alt="img-main" style={{objectFit: "cover", width: "100%", height : "100%"}}/>
                    </div>

                    <div className="flex flex-col gap-2 w-7/12 h-[300px]">
                        <h3 className="font-bold">Cyber Security problem and solution</h3>
                        <p className="font-normal" style={{fontSize: "18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid amet commodi corporis culpa error labore molestiae pariatur perferendis possimus praesentium quia quibusdam, quis repudiandae rerum sint vero voluptatum. Quo?</p>
                        <p className={"text-secondaryGrey text-sm opacity-50"}>by Albina Muratovna</p>

                        <p className="font-bold mt-auto" style={{fontSize: 24}}>2000 ₸</p>
                    </div>

                </div>
            </div>


        </Layout>
    );
}

export default App;
