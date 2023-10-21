

import { Link } from 'react-router-dom'; 
import Navbar from './Navbar'; 
// @ts-ignore
import blockchainBg from '../../images/blockchain-bg.jpg';
// @ts-ignore
import questionMark from '../../images/question-mark.png';
// @ts-ignore
import metaMask from '../../images/metamask.png'; 
// @ts-ignore
import formImage from '../../images/form.png'; 
// @ts-ignore
import blockchainIcon from '../../images/blockchain-icon.png'; 
// @ts-ignore
import transactionImage from '../../images/transaction.png'; 
const Welcome = () => {
    const handleScrollDown = () => {
        const targetDiv = document.getElementById('targetDiv');

        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: 'smooth' }); 
        }
    }; 

    return (
        <>
            <Navbar/>
            <div style={{ display: 'flex', flexDirection: 'row', height: '50vh', justifyContent: 'center', marginTop: '7%' }}>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '3%'}}>
                    <p style={{fontSize: '36px', fontWeight: 'bold', color: '#675cff', marginBottom: '2%'}}>Verify employment <br/>history for career </p>
                    <div style={{fontSize: '20px'}}>Accuwork is currently testing features <br/> do not use features for public usage yet
                        <br/>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-lg" 
                                    style={{width: '230px', fontSize: '20px', marginTop: '4%'}}
                                    onClick={handleScrollDown}>
                                Get started
                            </button>
                    </div>
            
                </div>
                <div style={{marginLeft: '10%'}}>
                    <img src={blockchainBg} alt="" style={{ width: '400px', height: '400px', borderRadius: '10px'}}/>
                </div>
            </div>
            <div style={{marginTop: '5%', display: 'flex', justifyContent: 'center'}}>
                <img src={questionMark} alt="" style={{width: '200px', height: '200px'}}/>
            </div>
            <div style={{ width: '100%', height: '30px', borderBottom: '1px solid #675cff', textAlign: 'center' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', backgroundColor: 'white', color: '#675cff', marginBottom: '25px'}}>
                    What is Accuwork?
                </span>
                <div style={{marginTop: '10px'}}>
                    Accuwork is the hackathon project in blockhack 2023. It uses blockchain technology <br/>to securely 
                    store employment verification history and export it to third party organization <br/>for personal
                    benefit.
                </div>
                <div style={{ width: '100%', height: '30px', borderBottom: '1px solid #675cff', textAlign: 'center' }}/>
            </div>
            <div id="targetDiv" style={{marginTop: '15%', fontSize: '36px', fontWeight: 'bold', color: '#675cff', textAlign: 'center'}}>
                Accuwork Workflow <br/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '75px', width: '50%', margin: '5% auto', marginBottom: '15%', fontSize: '25px', fontWeight: 'bold', color: '#675cff'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Step 1: Connect your metamask wallet
                        <p style={{fontSize: '18px', fontWeight: 'normal', color: 'black'}}>
                            Click connect wallet at the top right side to connect your wallet. 
                            Accuwork will collect 0.002 ethereum for the fee.
                        </p>
                    </div>
                    <img src={metaMask} alt="" style={{width: '130px', height:'130px', marginLeft: '25%'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Step 2: Fill in the form information
                        <p style={{fontSize: '18px', fontWeight: 'normal', color: 'black'}}>
                            Fill in the blank in the main page. We collect several information 
                            to ensure for the employ verification process.
                        </p>
                    </div>
                    <img src={formImage} alt="" style={{width: '130px', height:'130px', marginLeft: '25%'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Step 3: Export your data to the blockchain
                        <p style={{fontSize: '18px', fontWeight: 'normal', color: 'black'}}>
                            Click export button to pass your data into blockchain environment. 
                            Data will be securely checked by KYC (Know Your Customer) service.
                        </p>
                    </div>
                    <img src={blockchainIcon} alt="" style={{width: '130px', height:'130px', marginLeft: '25%'}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        Step 4: Check Transaction page for result
                        <p style={{fontSize: '18px', fontWeight: 'normal', color: 'black'}}>
                            Transaction page includes your verification result. If it is verified,
                            it will return the result with certification format, you can use it for 
                            third party career organization such as linkedin                        
                        </p>
                    </div>
                    <img src={transactionImage} alt="" style={{width: '130px', height:'130px', marginLeft: '25%'}}/>
                </div>
            </div>

            {/* <div style={{marginBottom: '10%', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
                <div style={{display: 'flex', flexDirection: 'column', marginRight: '10%'}}>
                    <p style={{marginBottom: '5%', fontSize: '36px', fontWeight: 'bold', color: '#675cff'}}>Accuwork Demo</p>
                    <p style={{fontSize: '18px'}}>
                        This is the video of accuwork demo running. <br/> 
                        It follows four accuwork workflows to generate <br/>
                        transaction result and display it to users
                    </p>
                </div>
                <div>
                    <iframe width="576" height="324" src="https://www.youtube.com/embed/k0OmnkE6f4E?si=44K83UaE2l77yFce" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div> */}
        </>
    )
}

export default Welcome; 