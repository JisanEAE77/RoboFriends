import './Card.css';

function Card({ name, email, phone }) {
    return (
    
        <div className="card">
            <h1 className="name">{name}</h1>
            <img alt="Robots" src={`https://robohash.org/${name}?200*200`} />
            <br />
            <div className="details">
                <h2>{email}</h2>
                <h2>{phone}</h2>
            </div>
        </div>
        
    );
}

export default Card;