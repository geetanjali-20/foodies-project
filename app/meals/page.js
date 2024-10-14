import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
	title: "All Meals",
	description: "All Delicious meals, shared by a food-loving community.",
};

async function Meals() {
	console.log("Fetching meals")
	const meals = await getMeals();
	return <MealsGrid meals={meals} />;
}
const MealsPage = () => {
	return (
		<>
			<header className={style.header}>
				<h1>
					Delecious Meals, created{" "}
					<span className={style.highlight}>by you</span>
				</h1>
				<p>
					choose your favorite recipe and cook it for yourelf. IT IS
					EASY TO COOK
				</p>
				<p className={style.cta}>
					<Link href="/meals/share">Share yours recipe</Link>
				</p>
			</header>
			<main className={style.main}>
				<Suspense fallback={<div className={style.loading}>Fetching meals...</div>}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
};

export default MealsPage;
