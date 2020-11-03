import './sass/card.scss';

const CardComponent = ({ title, image, text, cssClass="", onClickFunc, cssTitle="", cssImg="", cssText="" }) => {
  return (
    <div className={`custom__card${cssClass}`} onClick={onClickFunc}>
      <div className="row">
        <div className="col-12">
          <p className={`custom__card__title mb-0 ${cssTitle}`}>{title}</p>
          <img src={image} alt={title} className={`${cssImg}`} />
          <div>
            <p className={`custom__card__text mb-2 ${cssText}`}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
