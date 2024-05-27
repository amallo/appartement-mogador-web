import { createSignal } from "solid-js";
import { BookButton } from "./book.button"
import { TbWashTemperature4 } from 'solid-icons/tb'
import { FaSolidPlaneArrival } from 'solid-icons/fa'
import { FaSolidPlaneDeparture } from 'solid-icons/fa'
import { IoWarningOutline } from 'solid-icons/io'
import { FaSolidAsterisk } from 'solid-icons/fa'

type SelectedTab = "night" | "week"

const PriceNight = ()=>{
    return <div class="elementor-widget-container" style={{color: 'white', display: 'flex', flex:1, "flex-direction": 'column'}}>
        <p>Du lundi au vendredi 190 euros la nuit</p>
        <p>Samedi et dimanche 210 euros la nuit</p>
        <p style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> Deux nuits minimum</p>
        <p style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> En juillet et août location uniquement à la semaine</p>
    </div>
}
const PriceWeek = ()=>{
    return <div class="elementor-widget-container" style={{color: 'white', display: 'flex', flex:1, "flex-direction": 'column'}}>
        <p>Location du samedi au samedi en juillet et août</p>
        <p>1 225 euros la semaine</p>
        <p style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> Selon disponibilités les autres mois</p>
        <p style={{color: '#E99525', display: 'flex', flex: 1, "flex-direction": 'row', "align-items": 'center', gap: "16px"}} ><FaSolidAsterisk color="#E99525" /> ( 175 euros la nuit / garage privé inclus)</p>
      
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
    const [selectedTab, selectTab] = createSignal<SelectedTab>("night");
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
                <a class="elementor-heading-title elementor-size-default" onclick={()=>selectTab("night") } style={{opacity: selectedTab()=== 'night' ? 1 :  0.6, cursor: 'pointer'}}  >TARIF A LA NUIT (<FaSolidAsterisk color="#E99525" />)</a>
                <a class="elementor-heading-title elementor-size-default" onclick={()=>selectTab("week")}  style={{opacity: selectedTab()=== 'week' ? 1 :  0.6, cursor: 'pointer'}}>TARIF A LA SEMAINE (<FaSolidAsterisk color="#E99525" />)</a>
            </div>
        </div>


        {selectedTab() === "night" && <PriceNight />}
        {selectedTab() === "week" && <PriceWeek />}
        <PriceCommon/>
        <BookButton/>
       
    </div>
</div>
}