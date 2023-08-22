"use client";


import React, { useState } from "react";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { useMediaQuery } from "@uidotdev/usehooks";
import Link from "next/link";

function JobCardSmall ({post}) {
	// const date = new Date(deadline);
	// const formattedDate = date.toLocaleDateString();
	const [visible, setVisible] = useState(false);

	const hanleModal = () => {
		setVisible(!visible);
	};

	const isSm = useMediaQuery("only screen and (max-width : 700px)");

	// const truncateText = (text, maxWords) => {
	// 	const wordsArray = text.split(" ");
	// 	if (wordsArray.length > maxWords) {
	// 		return wordsArray.slice(0, maxWords).join(" ") + "...";
	// 	} else {
	// 		return text;
	// 	}
	// };

	return (
		<Link href={`/job/${post._id}`} style={{ display: 'contents' }}>

		<div
			className=" shadow-3xl "
			style={{
                width: "23rem",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: "white",
				borderRadius: "0.5rem",
				boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
				cursor: "pointer",
				marginBottom: "3rem",
				fontFamily: "Arial, sans-serif"
			}}
		>
			<div
				style={{
					width: "100%",
					color: "#2F73EC",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderTopLeftRadius: "0.5rem",
					borderTopRightRadius: "0.5rem",
					padding: ".7rem"
				}}
			>
				<div
					style={{
						width: "75%",
						padding: "0.4rem",
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<h4
						className=""
						style={{
							marginLeft: "0.4rem",
							fontWeight: "bold",
							fontFamily: "Roboto ",
							letterSpacing: "1px",
							fontSize: "1.1rem"
						}}
					>
						{" "}
						{post.title}({post.workType})
					</h4>
                    <p
							style={{
								letterSpacing: "1.3px",
								textAlign: "left",
								fontFamily: "Poppins,san-serif",
								marginLeft: "0.3rem",
								color: "#4e4b66",
								fontSize: "15px",
								lineHeight: "22px",
								fontWeight: 500
							}}
						>
							{post.companyName}
						</p>
				</div>
				<div
					style={{
						width: "25%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						fontWeight: "bold",
						opacity: 0.5
					}}
				>
					<span
						style={{
							fontSize: ".2rem",
							lineBreak: "auto",
							fontFamily: "Poppins",
							letterSpacing: "2px"
						}}
					>
				 {post.companyName}
					</span>
					<BsBookmark
						style={{
							height: "20px",
							width: "20px",
							fontWeight: "bolder"
						}}
					/>
					<BsThreeDotsVertical style={{ height: "20px", width: "20px" }} />
				</div>
			</div>

			<div className="card-body" style={{ height: "6rem" }}>
				<div className="flex justify-evenly items-center">
                <div className="flex flex-col items-center">
						<p className="mb-1" style={{ color: "#a0a3bd" }}>
                            Salary
						</p>
						<p
							style={{
								color: "#2F73EC",
								fontWeight: "bold",
								padding: ".1rem",
								lineHeight: "1.5rem",
								fontFamily: "Roboto",
								letterSpacing: "2.4px",
								fontSize: "16px"
							}}
						>
							{post.salary}
						</p>
					</div>
                    <div className="flex flex-col items-center">
						<p
							className="mb-1"
							style={{ color: "#a0a3bd", lineHeight: "1.5rem" }}
						>
						Location
						</p>
						<p
							style={{
								color: "#2F73EC",
								fontWeight: "bold",
								padding: ".1rem",
								lineHeight: "1.5rem",
								fontFamily: "Poppins",
								letterSpacing: "2px",
								fontSize: "16px"
							}}
						>
							{post.location}
						</p>
					</div>
					<div className="flex flex-col items-center">
						<p
							className="mb-1"
							style={{ color: "#a0a3bd", lineHeight: "1.5rem" }}
						>
							Job Type
						</p>
						<p
							style={{
								color: "#2F73EC",
								fontWeight: "bold",
								padding: ".1rem",
								lineHeight: "1.5rem",
								fontFamily: "Poppins",
								letterSpacing: "2px",
								fontSize: "16px"
							}}
						>
							{post.jobType}
						</p>
					</div>
				</div>
			</div>
		</div>
		</Link>
	);
}

export default JobCardSmall;
