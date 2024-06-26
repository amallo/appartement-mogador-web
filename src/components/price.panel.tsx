
import { createSignal } from "solid-js";
import { TbWashTemperature4 } from 'solid-icons/tb'
import { FaSolidPlaneArrival } from 'solid-icons/fa'
import { FaSolidPlaneDeparture } from 'solid-icons/fa'
import { FaSolidAsterisk } from 'solid-icons/fa'
import { Commodities } from "./commodities";
import { Level1 } from "./level1";
import { Level2 } from "./level2";

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

function isMobile() {
    var check = false;
    (function(a) {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function isSmallScreen() {
    return ( ( window.innerWidth <= 800 ) );
}

type ToolTip = Record<string, boolean>
export const PricePanel = ()=>{
    const [selectedPriceMethod, selectPriceMethod] = createSignal<SelectedPriceMethod>("night");
    const [selectedMenu, selectMenu] = createSignal<SelectedMenu>("description");
    const [isOpened, setOpen] = createSignal<ToolTip>({});
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
                            <span class="s1">Conçu sur 110 m² sur 2 niveaux, l'Appartement Mogador situé à quelques pas de l'église Ste Catherine et à une centaine de mètres du Vieux Port.</span>
                        </p>
                    </div>
                    <div class="singleroom_attributes_wrapper">
                        <div  style={{display: "flex", flex:0, "flex-direction": "column", gap: "32px"}}>
                        <Level1 isMobile={isMobile() || isSmallScreen()} name={"level1"} isOpened={isOpened()["level1"]} onClick={(name, isOpened)=>setOpen({[name]: isOpened})} />
                        <Level2 isMobile={isMobile() || isSmallScreen()} name={"level2"} isOpened={isOpened()["level2"]} onClick={(name, isOpened)=>setOpen({[name]: isOpened})} />
                        <Commodities  isMobile={isMobile()|| isSmallScreen()}name={"commodities"} isOpened={isOpened()["commodities"]} onClick={(name, isOpened)=>setOpen({[name]: isOpened})}/>
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