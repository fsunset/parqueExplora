import './sass/card.scss';

const CardComponent = ({ title, image, text, cssClass="", onClickFunc, cssTitle="", cssImg="", cssText="", externalLink="" }) => {
  return (
    <div className={`custom__card${cssClass}`}>
      <div className="row">
        <div className="col-12">
          <p className={`custom__card__title mb-0 ${cssTitle}`}>{title}</p>
          
          {!!externalLink ? (
            <a href={externalLink} target="_blank" rel="noreferrer">
              <img src={image} alt={title} className={`${cssImg}`}/>
            </a>
          ): (
            <img src={image} alt={title} className={`${cssImg}`} onClick={onClickFunc} />  
          )}
          
          <div>
            <p className={`custom__card__text mb-2 ${cssText}`}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
