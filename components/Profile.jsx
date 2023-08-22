import PromptCard from "./PromptCard";
import Link from "next/link";
const Profile = ({job}) => {
  console.log(job,"specific")

  return (
    <section className='w-full items-center'>
      <div className="flex flex-col items-center">
        <h1 className='head_text text-center'>
          <span className='blue_gradient'>{job?.title}</span>
        </h1>
        <p className='desc text-center'>
          Make sure that you match the requirements for the job before applying.
        </p>
      </div>
      <div className='w-full p-15 flex justify-center items-center mt-5'>
      <div className='max-w-screen-md w-screen glassmorphism p-19 md:p-5 mt-5'>
    <h2 className='text-center text-2xl mb-2 font-semibold'>
      <span className='blue-gradient'>Job Details</span>
    </h2>
    <p className='text-left text-gray-600'>
      Company: {job?.companyName}
    </p>
    <p className='text-left text-gray-600'>
      Location: {job?.location}
    </p>
    <p className='text-left text-gray-600'>
      Job Type: {job?.jobType}
    </p>
    <p className='text-left text-gray-600'>
      Work Type: {job?.workType}
    </p>
    <p className='text-left text-gray-600'>
      Salary: {job?.salary}
    </p>
    <p className='text-left text-gray-600'>
      Deadline: {job?.deadline}
    </p>
    <h2 className='text-center mt-5 text-xl font-semibold'>
      <span className='blue-gradient'>Requirements</span>
    </h2>
    <p className='text-left text-gray-600'>
      Education: {job?.requirements.education}
    </p>
    <p className='text-left text-gray-600'>
      Experience: {job?.requirements.experience}
    </p>
    <ul className='list-disc list-inside text-left text-gray-600'>
      {job?.requirements.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <ul className='list-disc list-inside text-left text-gray-600'>
      {job?.requirements.other.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className='text-center text-gray-600'>
      How to Apply: <a href={job?.howToApply} target='_blank' rel='noopener noreferrer'>{job?.howToApply}</a>
    </p>
  </div>
</div>
<div className='flex justify-center'>
  <Link href='/' className='text-gray-600 text-sm'>
    Back to Jobs
  </Link>
</div>
<div className='flex justify-center mt-2 mb-10'>
  <a
    href={job?.link}
    target='_blank'
    rel='noopener noreferrer'
    className='px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition duration-300'
  >
    Apply Now
  </a>
</div>

    </section>

  );
};

export default Profile;