import Modal from './Modal.js';
import './Card.css';
function Card() {
    return (
        <div className="card-group">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Finventory</h5>
                    <p className="card-text">A fisherman's guide to the best fishing spots in West Virginia. Displays a map with stream locations, trout stocking frequencies, and other helpful information.<br></br><br></br>Made for CS 330.</p>
                    <p className="card-text"><small className="text-muted">React, Express, Node.js, Leaflet, SQL </small></p>
                    < Modal 
                        title="Finventory"
                        content="Upon login, users are able to view the map of fishing spots in WV. Upon Each map layer is toggleable so that users can view only the information they want to see. Users can click on the streams to view the stocking frequency and other information. The app is fully responsive and works on all devices. Users can also add their own fishing spots to the map, which will be saved to the database."
                        id="modal1" 
                        link="https://github.com/WVU-CS330-2025-01-Group08/finventory/"
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Minecraft Item Database</h5>
                    <p className="card-text">I developed a Python program to recursively scan "friend lists" of players on the Hypixel server until I found 1.5 million players.<br></br><br></br>Then, I scanned each player's Skyblock inventory to track rare/valuable items.</p>
                    <p className="card-text"><small className="text-muted">Python, REST APIs, asyncio, SQL</small></p>
                    < Modal 
                        title="Minecraft Item Database"
                        content="To make millions of API calls, I used Python's asyncio library to speed up the process. I also used multiple accounts and rotated proxies to avoid getting rate-limited by the API. The process still took an entire week and only accounts for about 2% of all Minecraft accounts."
                        id="modal2" 
                        link="https://matdoes.dev/minecraft-uuids"
                        linkText="There are many more players to scan..."
                    />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Cipherzoic</h5>
                    <p className="card-text">A web app for hiding/revealing messages inside of images. Uses a custom "prehistoric"-themed cipher and LSB steganography.<br></br><br></br>Made for Bitcamp 2025.</p>
                    <p className="card-text"><small className="text-muted">Python, Flask, JS/CSS</small></p>
                    < Modal 
                        title="Cipherzoic"
                        content="The app allows users to upload an image and a message. The app then hides the message inside the image using LSB steganography. The app also allows users to 'decrypt' images that used Cipherzoic to hide messages."
                        id='modal3'
                        link="https://devpost.com/software/cipherzoic"
                        linkText="Devpost"
                    />
                </div>
            </div>
        </div> 
    );
}

export default Card;
