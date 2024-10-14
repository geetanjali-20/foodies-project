"use client";

import React, { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
	const [pickedImage, setPickImage] = useState();
	const imageRef = useRef();
	function handlePic() {
		imageRef.current.click();
	}
	function handleImageChange(event) {
		const file = event.target.files[0];

		if (!file) {
			setPickImage(null);
			return
		}

		const filereader = new FileReader(file);
		filereader.onload = function () {
			setPickImage(filereader.result);
		};

		filereader.readAsDataURL(file);
	}

	return (
		<>
			<div className={style.picker}>
				<label htmlFor={name}>{label}</label>
				<div className={style.controls}>
					<div className={style.preview}>
						{!pickedImage &&<p>No Image picked yet.</p>}
						{
							pickedImage && <Image src={pickedImage} alt="picked image" fill/>
						}
					</div>

					<input
						type="file"
						className={style.input}
						id={name}
						name={name}
						accept="image/png, image/jpeg"
						ref={imageRef}
						required
						// multiple   # for selecting multiple file
						onChange={handleImageChange}
					/>
					<button
						className={style.button}
						type="button"
						onClick={handlePic}
					>
						Pick an Image
					</button>
				</div>
			</div>
		</>
	);
};

export default ImagePicker;
