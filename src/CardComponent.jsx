import './sass/card.scss';

const CardComponent = ({ title, image, text, cssClass="" }) => {
  return (
    <div className={`custom__card${cssClass}`}>
      <div className="row">
        <div className="col-12">
          <p className="custom__card__title mb-0">{title}</p>
          <img src={image} alt={title} />
          <div>
            <p className="custom__card__text mb-2">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
