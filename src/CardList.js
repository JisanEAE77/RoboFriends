import Card from './Card';
import './CardList.css'

function CardList({ robots }) {

    return (
        <div className="CardList">
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        name={user.name} 
                        email={user.email} 
                        phone={user.phone} 
                    />
                    );
                })
            }
        </div>
    );
}

export default CardList;