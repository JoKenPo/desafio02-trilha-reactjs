import { Button } from './Button';
import { GenreResponseProps } from '../App';

import '../styles/sidebar.scss';

export function SideBar(props: { genres: GenreResponseProps[], selectedGenreId: number, onClick: (id: number) => void }) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClick(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}