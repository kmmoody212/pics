// return (
//     <>
//       <Navbar className="entire-bar" expand="lg">
//         <Container fluid>
//           <img className="logo-img" src="/MLB-logo.png"></img>
//           <Navbar.Brand as={Link} to="/" className="logo-brand">
//             My Library Bookie
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar" />
//           <Navbar.Collapse id="navbar" className="d-flex flex-row-reverse">
//             <Nav className="ml-auto d-flex">
//               <Nav.Link as={Link} to="/" className="nav-link">
//                 Search For Books
//               </Nav.Link>
//               {/* if user is logged in show saved books and logout */}
//               {Auth.loggedIn() ? (
//                 <>
//                   <Nav.Link as={Link} to="/saved" className="nav-link">
//                     See Your Books
//                   </Nav.Link>
//                   <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
//                 </>
//               ) : (
//                 <Nav.Link onClick={() => setShowModal(true)}>
//                   Login/Sign Up
//                 </Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
