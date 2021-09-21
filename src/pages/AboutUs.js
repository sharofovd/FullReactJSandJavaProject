import React from "react";
// import axios from 'axios';

export const AboutUs = () => {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	//   const fetchData = async () => {
	// 	const result = await axios(
	// 	  'http://10.10.115.3:8081/api/onlineusers'
	// 	);
    // 	console.log(result);
	// 	setData(result.data);
	//   };
   
	//   fetchData();
	// }, []);
// 	const [posts,setPosts] = useState([])
//  useEffect(()=>{
// 	 const url = 'http://10.10.115.3:8081/api/onlineusers'; //'https://jsonplaceholder.typicode.com/posts';
// 	 fetch(url).then(resp => resp.json())
// 	 .then(resp=>setPosts(resp))
//  },[])	
	return (
			<div>
				{/* <h1> API calls with React Hooks </h1> */}
				{/* {
					console.log(data)
				} */}
			</div>
	);
 };

 export const OurAim = () => {
 return (
 	<div className="home">
 	<h1>GeeksforGeeks Aim</h1>
 	</div>
 );
};

export const OurVision = () => {
return (
	<div className="home">
	<h1>GeeksforGeeks Vision</h1>
	</div>
);
};
