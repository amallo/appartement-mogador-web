export const BookButton = ()=>{
    return <>
        <a id="singleroom_book" data-formid="120" href="javascript:;" class="button">RESERVER</a>
        <div id="singleroom_book_form120" class="singleroom_book_form">
            
                    <p class="mphb-required-fields-tip">
                        <small>Required fields are followed by <abbr title="required">*</abbr></small>
                    </p>
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Votre nom<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <input id="mphb_check_in_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" />
                    </p>
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Votre mail<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <input id="mphb_check_in_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" />
                    </p>
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Arrivée le<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <input id="mphb_check_in_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" placeholder="dd/mm/yyyy ex: 13/04/2024" />
                    </p>
                    <p class="mphb-check-out-date-wrapper">
                        <label for="mphb_check_out_date-6061a2113478d"> Départ le <abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <br />
                        <input id="mphb_check_out_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" placeholder="dd/mm/yyyy ex: 16/04/2024" />
                        <input id="mphb_check_out_date-6061a2113478d-hidden" type="hidden" name="mphb_check_out_date" value="" />
                    </p>
                    <p class="mphb-reserve-btn-wrapper">
                        <input class="mphb-reserve-btn button" disabled type="submit" value="Envoyer la demande" />
                        <span class="mphb-preloader mphb-hide"></span>
                    </p>
            
        </div>
    </>
}