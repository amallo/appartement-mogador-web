import '@rnwonder/solid-date-picker/dist/style.css'
import Calendar from "@rnwonder/solid-date-picker/calendar";

import { createSignal } from "solid-js";
import DatePicker, { DateObjectUnits, PickerValue } from '@rnwonder/solid-date-picker';


const format = (value: PickerValue)=>{
    return `${value.value.selectedDateObject?.day}/${value.value.selectedDateObject?.month}/${value.value.selectedDateObject?.year}`
}
export const BookButton = ()=>{

    const [to] = createSignal("contact@appartement-mogador-honfleur.com");
    const [body, setBody] = createSignal("");
    const [name, setName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [bookedAt, bookAt] = createSignal<PickerValue>({
        value: {},
    label: "",
    });
    const [bookedUntil, bookUntil] = createSignal<PickerValue>({
        value: {},
    label: "",
    });
    

    const openEmailDialog = () => {
        const mailtoLink = `mailto:${to()}?cc=${email()}&subject=${encodeURIComponent(`Demande de réservation du ${format(bookedAt())} au ${format(bookedUntil())}`)}&body=${encodeURIComponent(body())}`;
        window.open(mailtoLink, '_blank');
       
    };

    return <>
        <a id="singleroom_book" data-formid="120" href="javascript:;" class="button" >RESERVER</a>
        <div id="singleroom_book_form120" class="singleroom_book_form">
            
                    <p class="mphb-required-fields-tip">
                        <small>Required fields are followed by <abbr title="required">*</abbr></small>
                    </p>
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Votre nom<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <input id="mphb_check_in_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" onChange={(e)=>setName(e.currentTarget.value)} />
                    </p>
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Votre mail<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <input id="mphb_check_in_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" onChange={(e)=>setEmail(e.currentTarget.value)} />
                    </p>
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Arrivée le<abbr title="Formatted as dd/mm/yyyy"  >*</abbr> </label>
                        <DatePicker setValue={bookAt} value={bookedAt} />
                        
                    </p>
                    <p class="mphb-check-out-date-wrapper">
                        <label for="mphb_check_out_date-6061a2113478d"> Départ le <abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <br />
                        <DatePicker setValue={bookUntil} value={bookedUntil} />
                        
                    </p>
                    <p class="mphb-reserve-btn-wrapper" onclick={()=>openEmailDialog()} >
                        <input  type="submit" value="Envoyer la demande" />
                        <span class="mphb-preloader mphb-hide"></span>
                    </p>
            
        </div>
    </>
}