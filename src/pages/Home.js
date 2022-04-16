import React from 'react';
import NavBar from "../components/Container/NavBar";

const Home = (props) => (
     <div>
        <NavBar />
        <div>
            <div className={`d-flex justify-content-center pt-4`}>
                <div>
                    <h1>Geraldine & Julio</h1>
                </div>
            </div>
            <div className={`image_content_wrapper`}>
                <div className={`geraldine_julio_img p-5 bg-image`} />
                <div className={`couple_description`}>
                    <p><i>You all know us. And we all know you. We are getting married lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</i>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Home;