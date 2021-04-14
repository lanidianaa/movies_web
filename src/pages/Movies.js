// import React, {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
// import {Button} from "@material-ui/core";
// import MovieCard from "../components/MovieCard";
// import MovieAction from "../redux/action/MovieAction";

// const Movies = () => {
//   const dispatch = useDispatch();

//   const [query, setQuery] = useState("");

//   const [movList, setMovList] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [load, setLoad] = useState(false);
//   const [noData, setNoData] = useState(false);

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//     setPageNumber(1);
//   };

//   window.onscroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       if (!noData) {
//         loadMovieList(query, pageNumber);
//       }
//     }
//   };

//   useEffect(() => {
//     loadMovieList(pageNumber);
//   }, []);

//   const loadMovieList = (pageNumber) => {
//     setLoad(true);
//     setTimeout(() => {
//       MovieAction.getList(pageNumber)
//         .then((res) => {
//           const newPage = pageNumber + 1;
//           const newList = movList.concat(res.data.Search);
//           setMovList(newList);
//           setPageNumber(newPage);
//           if (res.data.Search.length === 0) setNoData(true);
//         })
//         .catch((err) => console.log(err))
//         .finally(() => setLoad(false));
//     }, 1500);
//   };
//   return (
//     <div className="container flex">
//       <div>
//         <input type="text" placeholder="Search..." onChange={handleSearch} />
//         <Button>Search</Button>
//       </div>
//       <div>
//         {movList?.map((val, i) => {
//           if (movList.length === i + 1) {
//             return (
//               <div key={val.imdbID}>
//                 {/* <div ref={lastMovieElementRef} key={val.imdbID}> */}
//                 <MovieCard
//                   image={val.Poster}
//                   name={val.Title}
//                   id={val.imdbID}
//                   type={val.Type}
//                   year={val.Year}
//                 />
//               </div>
//             );
//           } else {
//             return (
//               <div key={val.imdbID}>
//                 <MovieCard
//                   image={val.Poster}
//                   name={val.Title}
//                   id={val.imdbID}
//                   type={val.Type}
//                   year={val.Year}
//                 />
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div>{load && "Loading..."}</div>
//       {/* <div>{ && "Error"}</div> */}
//     </div>
//   );
// };

// export default Movies;
