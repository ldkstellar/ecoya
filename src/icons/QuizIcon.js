import {WithLocalSvg} from 'react-native-svg';
import quiz from '../../assets/quizIcon.svg'

const QuizIcon = ()=>{
    return(
        <WithLocalSvg
           asset={quiz} 
        />
    )
};
export default QuizIcon;