// return (
//     <>
//       {/* <video src={video} muted loop autoPlay></video> */}
//       {/* Video by Maksim Smirnov from Pexels: https://www.pexels.com/video/a-large-library-with-many-books-on-shelves-18969594/ */}
//       <div className="overlay"></div>
//       <div className="search-header">
//         <Container>
//           <div className="text-pic">
//             <h1 className="motto">Take a gamble on your next great read!</h1>
//             <img
//               className="mascot"
//               src="/A_librarian_dressed_as_a_gambler.png"
//             ></img>
//           </div>
//           <div className="search-bar">
//             <Form onSubmit={handleFormSubmit}>
//               <Row>
//                 <Col xs={12} md={8}>
//                   <Form.Control
//                     name="searchInput"
//                     value={searchInput}
//                     onChange={(e) => setSearchInput(e.target.value)}
//                     type="text"
//                     size="lg"
//                     placeholder="Search for a book"
//                   />
//                 </Col>
//                 <Col xs={12} md={4}>
//                   <Button
//                     className="book-s-btn"
//                     type="submit"
//                     variant="success"
//                     size="lg"
//                   >
//                     Submit Search
//                   </Button>
//                 </Col>
//               </Row>
//             </Form>
//           </div>
//         </Container>
//       </div>

//       <Container>
//         <h2 className="filler">
//           {searchedBooks.length
//             ? `Viewing ${searchedBooks.length} results:`
//             : "Search for a book to begin"}
//         </h2>
