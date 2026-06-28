import { Movie } from "@/types/movie";
import './MovieAbout.scss'

export default function MovieAbout({ movie }: { movie: Movie }) {
    return (
        <section className="about">
            <div className="container">
                <h2 className="about__title">О фильме</h2>
                <ul className="about__list">
                    <li className="about__item">
                        <span className="about__item--label">Язык оригинала</span>
                        <span className="about__item--value">{movie.language}</span>
                    </li>
                    <li className="about__item">
                        <span className="about__item--label">Бюджет</span>
                        <span className="about__item--value">{movie.budget ? `${movie.budget} $` : 'Нет данных'}</span>
                    </li>
                    <li className="about__item">
                        <span className="about__item--label">Выручка</span>
                        <span className="about__item--value">{movie.revenue ? `${movie.revenue} $` : 'Нет данных'}</span>
                    </li>
                    <li className="about__item">
                        <span className="about__item--label">Режиссер</span>
                        <span className="about__item--value">{movie.director || 'Нет данных'}</span>
                    </li>
                    <li className="about__item">
                        <span className="about__item--label">Продакшен</span>
                        <span className="about__item--value">{movie.production || 'Нет данных'}</span>
                    </li>
                    {movie.awardsSummary && (
                        <li className="about__item">
                            <span className="about__item--label">Награды</span>
                            <span className="about__item--value">{movie.awardsSummary}</span>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}