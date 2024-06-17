
import Tooltip from "@corvu/tooltip"
import './commodities.css'
import { TbArmchair2 } from "solid-icons/tb"
import { FaSolidKitchenSet, FaSolidToilet } from "solid-icons/fa"
import { FiSun } from 'solid-icons/fi'
import { TooltipProps } from "./tooltip"


export const Level1 = (props: TooltipProps) => {

  return (
    <Tooltip
      open={props.isOpened}
      hoverableContent={false}
      placement={props.isMobile ? "top": "right"}
      openDelay={100}
      closeOnScroll
      openOnHover={false}
      floatingOptions={{
        offset: 13,
      }}
    >
      <Tooltip.Trigger
       as="span"
       onFocusOut={()=>props.onClick(props.name, false)}
       onclick={() => props.onClick(props.name, !props.isOpened)}
       onblur={ ()=>props.onClick(props.name, false)}
      >
        
        <span style={{color: "black"}} >Niveau 1 (cuisine, repas, salon)</span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content >
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FaSolidKitchenSet size={24} />
                <span class="singleroom_bed room_attribute">Cuisine et Espace repas</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <TbArmchair2  size={24} />
                <span class="singleroom_bed room_attribute">Salons</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FaSolidToilet size={24} />
                <span class="singleroom_bed room_attribute">Toilettes</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FiSun size={24} />
                <span class="singleroom_bed room_attribute">Balcon exposé sud</span>
            </div>  
            
          
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  )
}
