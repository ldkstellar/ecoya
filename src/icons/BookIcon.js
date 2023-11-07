import { WithLocalSvg } from 'react-native-svg';
import book from '../../assets/TabBarIcon/book.svg'

const Book = ({color}) => {
    return (
       
            <WithLocalSvg
                width={100}
                asset={book}
            >
                
            </WithLocalSvg>
           
        
    );
}

export default Book;