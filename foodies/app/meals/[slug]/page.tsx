export default function MealsSlugPage({ params }) {
    return (
        <div>
            <p>Meals</p>
            <p>{params.slug}</p>
        </div>
    )
}