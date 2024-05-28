import { createSignal } from "solid-js";
import { BookButton } from "./book.button"
import { TbWashTemperature4 } from 'solid-icons/tb'
import { FaSolidPlaneArrival } from 'solid-icons/fa'
import { FaSolidPlaneDeparture } from 'solid-icons/fa'
import { RiSystemCheckboxBlankCircleFill } from 'solid-icons/ri'
import { FaSolidAsterisk } from 'solid-icons/fa'

type SelectedPriceMethod = "night" | "week"


type SelectedMenu = "description" | "price"


const PriceNight = ()=>{
    return <div class="elementor-widget-container" style={{color: 'white', display: 'flex', flex:1, "flex-direction": 'column'}}>
        <p>Du lundi au vendredi 190 euros la nuit</p>
        <p>Samedi et dimanche 210 euros la nuit</p>
        <span style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> Deux nuits minimum</span>
        <span style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> En juillet et août uniquement à la semaine</span>
    </div>
}
const PriceWeek = ()=>{
    return <div class="elementor-widget-container" style={{color: 'white', display: 'flex', flex:1, "flex-direction": 'column'}}>
        <p>Location du samedi au samedi en juillet et août</p>
        <p>1 225 euros la semaine</p>
        <span style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> Selon disponibilités les autres mois</span>
        <span style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> ( 175 euros la nuit / garage privé inclus)</span>
      
    </div>
}
const PriceCommon= ()=>{
    return <div class="elementor-widget-container" style={{color: 'white', display: 'flex', flex:1, "flex-direction": 'column'}}>
        <div style={{display: 'flex', flex:1, "flex-direction": 'row', gap: '36px', "align-items": 'center'}}>
            <TbWashTemperature4 style={{color: '#E99525'}} size={40} /><span>Tous nos tarifs incluent le ménage après séjour et le linge de maison</span>
        </div>
        <div style={{display: 'flex', flex:1, "flex-direction": 'row', gap: '36px', "align-items": 'center'}}>
            <FaSolidPlaneArrival style={{color: '#E99525'}} size={24} /><span>Les arrivées sont prévues entre 15:00 et 19:30</span>
        </div>
        <div style={{display: 'flex', flex:1, "flex-direction": 'row', gap: '36px', "align-items": 'center'}}>
            <FaSolidPlaneDeparture style={{color: '#E99525'}} size={24} /><span>Les départs ont lieu à 11:00 au plus tard</span>
        </div>
    </div>
}

export const PricePanel = ()=>{
    const [selectedPriceMethod, selectPriceMethod] = createSignal<SelectedPriceMethod>("night");
    const [selectedMenu, selectMenu] = createSignal<SelectedMenu>("description");
    return <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap" style={{color: 'white', display: 'flex', flex:1, "flex-direction": 'column'}}>
        <div
            class="elementor-element elementor-element-bacdfa4 elementor-widget elementor-widget-heading"
            data-id="bacdfa4"
            data-element_type="widget"
            data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
            data-widget_type="heading.default"
        >
            

            <div class="elementor-widget-container" style={{flex:1, "flex-direction": "row", "justify-content": 'space-between', display: 'flex'}}>
                <a class="elementor-heading-title elementor-size-default" onclick={()=>selectMenu("description") } style={{opacity: selectedMenu()=== 'description' ? 1 :  0.6, cursor: 'pointer'}}  >DESCRIPTION</a>
                <a class="elementor-heading-title elementor-size-default" onclick={()=>selectMenu("price")}  style={{opacity: selectedMenu()=== 'price' ? 1 :  0.6, cursor: 'pointer'}}>TARIFS</a>
            </div>
            {selectedMenu() === 'description' &&
                <div class="elementor-widget-container">
                    <div class="elementor-text-editor elementor-clearfix">
                        <p class="p1">
                            <span class="s1">Conçu sur 2 étages, à quelques pas de la place Sainte-Catherine et à une centaine
                                de mètres du Vieux Port, l&#39;Appartement Mogador grâce un cadre spacieux et un
                                décor d’une authentique qualité est une escale privilégiée autant qu’une
                                
                                invitation à poursuivre le voyage.</span>
                        </p>
                    </div>
                    <div class="singleroom_attributes_wrapper">
                        <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                            <RiSystemCheckboxBlankCircleFill/>
                            <span class="singleroom_bed room_attribute">Superficie de 80 m2</span>
                        </div>
                        <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                            <RiSystemCheckboxBlankCircleFill/>
                            <span class="singleroom_bed room_attribute">Balcon</span>
                        </div>
                        <div style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                            <RiSystemCheckboxBlankCircleFill/>
                            <span class="singleroom_bed room_attribute">2 chambres  à coucher</span>
                        </div>
                        <div style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                            <RiSystemCheckboxBlankCircleFill/>
                            <span class="singleroom_bed room_attribute">2 salles de bain</span>
                        </div>
                        <div style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                            <RiSystemCheckboxBlankCircleFill/>
                            <span class="singleroom_bed room_attribute">2 toilettes</span>
                        </div>
                        <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                            <RiSystemCheckboxBlankCircleFill/>
                            <span class="singleroom_bed room_attribute">Cuisine équipée</span>
                        </div>
                    </div>
                </div>
            }
            {selectedMenu() === 'price' &&
            <div class="elementor-widget-container" style={{flex:1, "flex-direction": "row", "justify-content": 'space-between',  display: 'flex', "margin-top": "26px"}}>
                <a class="elementor-heading-title elementor-size-default" onclick={()=>selectPriceMethod("night") } style={{opacity: selectedPriceMethod()=== 'night' ? 1 :  0.4, cursor: 'pointer'}}  >A la nuit (<FaSolidAsterisk style={{"align-self": "center"}} color="#E99525" />)</a>
                <a class="elementor-heading-title elementor-size-default" onclick={()=>selectPriceMethod("week")}  style={{opacity: selectedPriceMethod()=== 'week' ? 1 :  0.4, cursor: 'pointer'}}>A la semaine (<FaSolidAsterisk color="#E99525" />)</a>
            </div>
        }
        </div>
       

        {selectedPriceMethod() === "night" && selectedMenu() === 'price' && <PriceNight />}
        {selectedPriceMethod() === "week" && selectedMenu() === 'price' && <PriceWeek />}
        {selectedMenu() == 'price' && <PriceCommon/>}
       
    </div>
</div>
}