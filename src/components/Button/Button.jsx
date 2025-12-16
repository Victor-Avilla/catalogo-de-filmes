import { RedButton, WhiteButton } from "./styles"
function Button({ children, red }) {
    return (
        <>{red ? (<RedButton>{children}</RedButton>):(<WhiteButton>{children}</WhiteButton>) }
            
            
        </>

    )
}
export default Button