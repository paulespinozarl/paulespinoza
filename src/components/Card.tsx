interface CardsProps {
  title: string;
  subtitle: string;
  text: string;
  image: string;
  clase: string;
}

const Card = ({title, subtitle, text, image, clase}: CardsProps) => {
  return (
    <div className="flex justify-center image">
      <div className={clase}>
        <img className="image" src={image} alt="Nawara" />
        <div className="text-slate-100">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
