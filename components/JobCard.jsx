"use client";


import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "antd";
import { useState } from "react";
import { BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { FaAward, FaRegCalendarAlt,FaMapMarkerAlt,FaRegClock } from "react-icons/fa";
import Link from "next/link";
const JobCard = ({post}) => {


	const isMd = useMediaQuery(
		"only screen and (min-width : 700px) and (max-width : 1250px)"
	);

	const handleModal = () => {
		setVisible(!visible);
	};

	// const truncateText = (text, maxWords) => {
	// 	const wordsArray = text.split(" ");
	// 	if (wordsArray.length > maxWords) {
	// 		return wordsArray.slice(0, maxWords).join(" ") + "...";
	// 	} else {
	// 		return text;
	// 	}
	// };


	return (
		<>
			<div
				style={{
					backgroundColor: "#fff",
					borderRadius: "5px",
					marginTop: "1rem",
					display: "flex",
					flexDirection: "row",
					boxShadow: "0 5px 10px rgba(0,0,0,0.10)",
					cursor: "pointer",
					padding: "4px",
					width: isMd ? "90%" : "63%",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
				{/* left div */}
				<div
					style={{
						height: "100%",
						width: "70%",
						borderRadius: "5px 0px  0px"
					}}
				>
					<div
						style={{
							paddingTop: ".4rem",
							marginLeft: "1rem",
							marginBottom: "2rem"
						}}
					>
						<h2
							style={{
								fontSize: isMd ? "1" : "1.46rem",
								color: "#2F73EC",
								lineHeight: 1.2,
								fontWeight: 700,
								fontFamily: "poppins",
								whiteSpace: "break-spaces",
								letterSpacing: "2px",
								textAlign: "left"
							}}
						>
                        
							{post.title}({post.workType})
						</h2>
						<p
							style={{
								letterSpacing: "1.3px",
								textAlign: "left",
								fontFamily: "Poppins,san-serif",
								marginLeft: ".1rem",
								color: "#4e4b66",
								fontSize: "16px",
								lineHeight: "22px",
								fontWeight: 500
							}}
						>
							{post.companyName}
						</p>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							paddingLeft: "1rem",
							paddingRight: "1rem",
							height: "5rem"
						}}
					>
						{/* left child div */}
						<div
							style={{
								display: "flex",
								padding: ".1rem",
								justifyContent: "center",
								alignItems: "center",
								height: "100%"
							}}
						>
							<div
								style={{
									paddingLeft: ".1rem",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								<FaAward
									style={{
										width: "1.7rem",
										height: "1.7rem",
										color: "#D8D8D8"
									}}
								/>
							</div>
							<div
								style={{
									justifyContent: "center",
									height: "100%",
									alignItems: "center",
									marginTop: "1.52rem",
									marginLeft: ".8rem"
								}}
							>
								{" "}
								<p
									style={{
										marginBottom: "-1px",
										marginLeft: ".1rem",
										color: "#4e4b66",
										fontSize: "14px",
										lineHeight: "22px",
										fontWeight: "400px"
									}}
								>
									Salary
								</p>
								<p
									style={{
										marginTop: "0px",
										fontWeight: "700px",
										color: "#2F73EC",
										fontSize: isMd ? "1.1" : "1.2rem",
										fontFamily: "Poppins",
										letterSpacing: "2px"
									}}
								>
									{post.salary}
								</p>
							</div>
						</div>
						{/* middle child */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingLeft: "1rem",
								paddingRight: "1rem",
								height: "5rem"
							}}
						>
							<div
								style={{
									paddingLeft: ".1rem",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								 <FaMapMarkerAlt
									style={{
										width: "1.7rem",
										height: "1.7rem",
										color: "#D8D8D8"
									}}
								/> 
							</div>
							<div
								style={{
									justifyContent: "center",
									height: "100%",
									alignItems: "center",
									marginTop: "1.52rem",
									marginLeft: ".8rem"
								}}
							>
								{" "}
								<p
									style={{
										marginBottom: "-1px",
										marginLeft: ".1rem",
										color: "#4e4b66",
										fontSize: "14px",
										lineHeight: "22px",
										fontWeight: "400px"
									}}
								>
									Location
								</p>
								<p
									style={{
										marginTop: "0px",
										fontWeight: "700px",
										color: "#2F73EC",
										fontSize: isMd ? "1.1" : "1.2rem",
										fontFamily: "Poppins",
										letterSpacing: "2px"
									}}
								>
									{post.location}
								</p>
							</div>
						</div>
						{/* right child */}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								paddingLeft: "1rem",
								paddingRight: "1rem",
								height: "5rem"
							}}
						>
							<div
								style={{
									paddingLeft: ".1rem",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								 <FaRegClock
									style={{
										width: "1.7rem",
										height: "1.7rem",
										color: "#D8D8D8"
									}}
								/> 
							</div>
							<div
								style={{
									justifyContent: "center",
									height: "100%",
									alignItems: "center",
									marginTop: "1.52rem",
									marginLeft: ".8rem"
								}}
							>
								{" "}
								<p
									style={{
										marginBottom: "-1px",
										marginLeft: ".1rem",
										color: "#4e4b66",
										fontSize: "14px",
										lineHeight: "22px",
										fontWeight: "400px"
									}}
								>
									Job Type
								</p>
								<p
									style={{
										marginTop: "0px",
										fontWeight: "700px",
										color: "#2F73EC",
										fontSize: isMd ? "1.1" : "1.2rem",
										fontFamily: "Poppins",
										letterSpacing: "2px"
									}}
								>
									{post.jobType}
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* right div */}
				<div
					style={{
						width: "1px",
						backgroundColor: "rgba(128, 128, 128, 0.3)",
						margin: "2rem 0",
						height: "8rem",
						alignContent: "center"
					}}
				></div>
				<div
					style={{
						height: "100%",
						width: "30%",
						borderRadius: "5px"
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							marginBottom: "5rem",
							marginTop: "1rem",
							marginRight: "2rem",
							color: "#4e4b66"
						}}
					>
						<BsBookmark
							// onClick={onClick}
							style={{
								height: "20px",
								width: "20px",
								fontWeight: "bolder"
							}}
						/>
						<BsThreeDotsVertical
							style={{
								height: "20px",
								width: "20px",
								fontWeight: "bolder"
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginBottom: "1rem",
							justifyContent: "center"
						}}
					>
						{" "}
						<Link href={`/job/${post._id}`} style={{ display: 'contents' }}>

						<Button
							style={{ backgroundColor: "#2F73EC", width: "80%" }}
							type="primary"
							block
						>
							Apply
						</Button>
						</Link>
					</div>

				</div>
			</div>
		</>
	);
};

export default JobCard;
