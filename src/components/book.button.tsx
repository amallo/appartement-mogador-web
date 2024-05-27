export const BookButton = ()=>{
    return <>
        <a id="singleroom_book" data-formid="120" href="javascript:;" class="singleroom_book button">Demander une réservation</a>
        <div id="singleroom_book_form120" class="singleroom_book_form">
            <div class="mphb_sc_booking_form-wrapper">
                <form method="get"  class="mphb-booking-form" id="booking-form-120">
                    <p class="mphb-required-fields-tip">
                        <small>Required fields are followed by <abbr title="required">*</abbr></small>
                    </p>
                    <input type="hidden" id="mphb-checkout-nonce" name="mphb-checkout-nonce" value="738b75c68a" />
                    <input type="hidden" name="_wp_http_referer" value="/hoteller/apartment/accommodation/superior-room/" /> <input type="hidden" name="mphb_room_type_id" value="120" />
                    <p class="mphb-check-in-date-wrapper">
                        <label for="mphb_check_in_date-6061a2113478d"> Arrivée le<abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <br />
                        <input id="mphb_check_in_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" placeholder="dd/mm/yyyy ex: 13/04/2024" />
                        <input id="mphb_check_in_date-6061a2113478d-hidden" type="hidden" name="mphb_check_in_date" value="" />
                    </p>
                    <p class="mphb-check-out-date-wrapper">
                        <label for="mphb_check_out_date-6061a2113478d"> Départ le <abbr title="Formatted as dd/mm/yyyy">*</abbr> </label>
                        <br />
                        <input id="mphb_check_out_date-6061a2113478d" type="text" class="mphb-datepick" value="" required autocomplete="off" placeholder="dd/mm/yyyy ex: 16/04/2024" />
                        <input id="mphb_check_out_date-6061a2113478d-hidden" type="hidden" name="mphb_check_out_date" value="" />
                    </p>
                    <p class="mphb-reserve-btn-wrapper">
                        <input class="mphb-reserve-btn button" disabled type="submit" value="Voir le prix" />
                        <span class="mphb-preloader mphb-hide"></span>
                    </p>
                    <div class="mphb-errors-wrapper mphb-hide"></div>
                </form>
            </div>
        </div>
    </>
}