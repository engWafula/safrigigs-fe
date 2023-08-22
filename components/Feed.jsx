"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import JobCard from "./JobCard";
import JobCardSmall from "./JobCardSmall";
import { Empty } from 'antd';
import { Skeleton } from 'antd';
import InfiniteScroll from "react-infinite-scroll-component";


const PromptCardList = ({ data, loading }) => {
  const isSm = useMediaQuery("only screen and (max-width : 700px)");
  return (
    		<div       className='w-full flex-center flex-col mb-20 mt-10'
        >
     {data?.map((post) => (
      isSm?<JobCardSmall key={post._id} post={post}/>:<JobCard key={post._id} post={post}/>
      ))} 
    </div>
    )
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [loading,setLoading] = useState(false)
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
	const [hasMore, setHasMore] = useState(true);

  const fetchPosts = async () => {
     setLoading(false)
    try {
      const response = await fetch(`https://safarigigs.onrender.com/job?page=${pageNumber}`);
      setLoading(true)
      const data = await response.json();
  
      setAllPosts(data.data);
      setLoading(false)
    } catch (error) {
      
    }
  };

  const fetchData = async () => {
		setPageNumber(pageNumber + 1);
		try {
      const response = await fetch(`https://safarigigs.onrender.com/job?page=${pageNumber}`);
      setLoading(true)
      const data = await response.json();
			setAllPosts(allPosts.concat(data.data));
      if (data?.data.length === 0) {
				setHasMore(false);
			}

		} catch (error) {
			console.log(error);
		}
	};
console.log(pageNumber,'..;p0')


  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(allPosts,"=====")
  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts?.filter(
      (item) =>
        regex.test(item.title) ||
        regex.test(item.location) ||
        regex.test(item.companyName)||
        regex.test(item.workType) ||
        regex.test(item.jobType) 

    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section>
      <div className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for any job title'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      </div>
      <div
      className="mb-15"
					>
			<InfiniteScroll
 dataLength={allPosts?.data?.length || 0} 
 				next={fetchData}
				hasMore={hasMore}
        loader={
					<h4 style={{ textAlign: "center", padding: "1rem" }}>
						{!hasMore? "Thats what  " : "Loading..."}
					</h4>
				}
				endMessage={
					<p style={{ textAlign: "center" }}>
						<b>Thats all we have for you</b>
					</p>
				}
			>
      {searchText ? (
     searchedResults.length > 0 ? (
      <PromptCardList data={searchedResults} loading={loading} />
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}  imageStyle={{color:"black"}}/>
    )
      ) : (
        <PromptCardList data={allPosts} loading={loading} />
      )}
      			</InfiniteScroll>

      </div>
    </section>
  );
};

export default Feed;