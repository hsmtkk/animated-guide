import classes from "@/app/meals/[slug]/page.module.css"
import { getMeal } from "@/lib/meals"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function MealsSlugPage({ params }) {
    const meal = getMeal(params.slug)
    meal.instructions = meal.instructions.replace(/\n/g, "<br/>")

    if (!meal) {
        notFound()
    }

    return (
        <div>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <Link href={`mailto:${meal.creator_email}`}>{meal.creator}</Link>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
            </main>
        </div >
    )
}