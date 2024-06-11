
import Tooltip from "@corvu/tooltip"
import type { VoidComponent } from 'solid-js'
import './commodities.css'
import { TbCooker, TbIroning1, TbWindmill } from "solid-icons/tb"
import { BiSolidWasher } from 'solid-icons/bi'
import { FaSolidBath, FaSolidBed, FaSolidToilet } from "solid-icons/fa"
import { FiTv } from "solid-icons/fi"

export const Level2: VoidComponent = () => {
  return (
    <Tooltip

      placement="right"
      openDelay={100}
      hoverableContent={false}
      floatingOptions={{
        offset: 13,
        flip: true,
        shift: true,
      }}
    >
      <Tooltip.Trigger
       as="span"
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
