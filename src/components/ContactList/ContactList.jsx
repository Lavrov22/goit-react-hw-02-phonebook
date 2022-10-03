import PropTypes from 'prop-types';
import { Item, ButtonDelete, List} from "components/ContactList/ContactList.styled";


export const ContactList = ({ visibleName, onDeleteContact}) => {
    return (
        <List >
            {visibleName.map(({id, name, number}) => <Item key={id}>{name}: {number}
                <ButtonDelete type='button' onClick={() => onDeleteContact(id)}>Delete</ButtonDelete>
            </Item>)}
        </List >
    )   
};

ContactList.propTypes = {
    onDeleteContact :PropTypes.func.isRequired,
    visibleName: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
        
    )
        
        
    
}