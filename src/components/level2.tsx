
import Tooltip from "@corvu/tooltip"
import type { VoidComponent } from 'solid-js'
import './commodities.css'
import { FaSolidBath, FaSolidBed, FaSolidToilet } from "solid-icons/fa"
import { FiTv } from "solid-icons/fi"
import { TooltipProps } from "./tooltip"

export const Level2 = (props: TooltipProps) => {
  return (
    <Tooltip
      open={props.isOpened}
      placement="right"
      openDelay={100}
      openOnHover={false}
      closeOnScroll
      hoverableContent={false}
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
        
        <span style={{color: "black"}} >Niveau 2 (chambres, salon, salle de bain)</span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content >
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
              <FaSolidBed size={24} />
                <span class="singleroom_bed room_attribute">Chambre lit 2 personnes et salle de douche</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FaSolidBed  size={24} />
                <span class="singleroom_bed room_attribute">Chambre 2 lits jumeaux</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FiTv  size={24} />
                <span class="singleroom_bed room_attribute">Salon TV/DVD</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FaSolidBath  size={24} />
                <span class="singleroom_bed room_attribute">Salle de bain</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FaSolidToilet size={24} />
                <span class="singleroom_bed room_attribute">Toilettes</span>
            </div>
            
          
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  )
}
