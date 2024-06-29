import {ColorCard } from './colorcard'


/* Este componente recibe el array de colores */
export const ColorCardList = ({colors_info}) => {

    return (
        <>
            {
                colors_info.map((color_info) => <ColorCard card_info = {color_info} key={color_info.id}/>)
            }
        </>
    )
}