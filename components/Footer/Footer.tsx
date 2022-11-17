import Back from "./Back";
import { DarkModeSwicher } from '../../Atoms';
import { useRecoilValue} from 'recoil';

function Footer() {
    const DarkMode = useRecoilValue(DarkModeSwicher);
    // console.log(DarkMode);
    
    return (
        <footer>
            <>
                <Back />
            </>
        </footer>);
}

export default Footer;