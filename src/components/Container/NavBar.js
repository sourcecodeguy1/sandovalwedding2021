import React, {useState} from 'react';
import {MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon} from "mdb-react-ui-kit";

const NavBar = (props) => {

    const [showNavExternal, setShowNavExternal] = useState(false);

    const handleToggle = () =>{
        let element = document.getElementById("navbarExample01");
       if(!showNavExternal)
       {
           element.classList.remove("collapse");
           setShowNavExternal(true)
       } else {
           element.classList.add("collapse");
           setShowNavExternal(false);
       }
    }
    return (

    <div>
        <header>
            <MDBNavbar expand='lg' light bgColor='white'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={handleToggle}
                    >
                        <MDBIcon fas icon='bars'/>
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse' id='navbarExample01'>
                        <MDBNavbarNav right className='mb-2 mb-lg-0 justify-content-center'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Wedding Pictures</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Wedding Video</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>

            <div
                className='p-5 text-center bg-image'
                style={{backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400}}
            >
                <div className='mask' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>SandovalWedding2021</h1>
                            <h4 className='mb-3'>Geraldine & Julio</h4>
                            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                Call to action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
)
};

export default NavBar;