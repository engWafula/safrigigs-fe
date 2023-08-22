"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const Job = ({ params }) => {

  const [data, setData] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`https://safarigigs.onrender.com/job/${params?.id}`);
      const {data} = await response.json();

      setData(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      desc="  Before applying, carefully review the job requirements and ensure that you meet the necessary qualifications and skills for the position."
      job={data}
    />
  );
};

export default Job;