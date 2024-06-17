
import Tooltip from "@corvu/tooltip"
import './commodities.css'
import { TbCooker, TbIroning1, TbToolsKitchen2, TbWindmill } from "solid-icons/tb"
import { BiSolidCarGarage, BiSolidWasher } from 'solid-icons/bi'
import { FaSolidBaby } from "solid-icons/fa"
import { TooltipProps } from "./tooltip"

export const Commodities = (props: TooltipProps) => {
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
       as="div"
       onFocusOut={()=>props.onClick(props.name, false)}
       onclick={() => props.onClick(props.name, !props.isOpened)}
       onblur={ ()=>props.onClick(props.name, false)}
      >
        
        <span style={{color: "black"}} >Voir les Commodités</span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <TbToolsKitchen2 size={24} />
                <span class="singleroom_bed room_attribute">Cuisine entièrement équipée plaques mixtes</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <TbCooker  size={24} />
                <span class="singleroom_bed room_attribute">Four traditionnel / micro-ondes</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <BiSolidWasher size={24} />
                <span class="singleroom_bed room_attribute">Lave linge séchant / Lave vaisselle</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <TbIroning1 size={24} />
                <span class="singleroom_bed room_attribute">Fer à repasser</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <TbWindmill size={24} />
                <span class="singleroom_bed room_attribute">Séche cheveux</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <FaSolidBaby size={24} />
                <span class="singleroom_bed room_attribute">Lit et chaise bébé</span>
            </div>
            <div  style={{display: "flex", flex:1, "flex-direction": "row", gap: "16px", "align-items": "center"}}>
                <BiSolidCarGarage  size={24} />
                <span class="singleroom_bed room_attribute">Garage privé disponible à proximité</span>
            </div>
          
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  )
}
