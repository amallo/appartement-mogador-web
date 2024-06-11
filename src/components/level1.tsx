
import Tooltip from "@corvu/tooltip"
import type { VoidComponent } from 'solid-js'
import './commodities.css'
import { TbArmchair2 } from "solid-icons/tb"
import { FaSolidKitchenSet, FaSolidToilet } from "solid-icons/fa"
import { FiSun } from 'solid-icons/fi'

export const Level1: VoidComponent = () => {
  return (
    <Tooltip
      hoverableContent={false}
      placement="right"
      openDelay={100}
      floatingOptions={{
        offset: 13,
        flip: true,
        shift: true,
      }}
    >
      <Tooltip.Trigger
       as="span"

      >
        
        <span style={{color: "black"}} >Niveau 1 (cuisine, repas, salon)</span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>
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
