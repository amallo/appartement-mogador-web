import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { BookButton } from './components/book.button';
import { PricePanel } from './components/price.panel';

const App: Component = () => {
  return (
    <>
     <div id="perspective">
        <input type="hidden" id="pp_menu_layout" name="pp_menu_layout" value="leftalign" />
        <input type="hidden" id="pp_enable_right_click" name="pp_enable_right_click" value="" />
        <input type="hidden" id="pp_enable_dragging" name="pp_enable_dragging" value="" />
        <input type="hidden" id="pp_image_path" name="pp_image_path" value="https://themes.themegoods.com/hoteller/apartment/wp-content/themes/hoteller/images/" />
        <input type="hidden" id="pp_homepage_url" name="pp_homepage_url" value="https://themes.themegoods.com/hoteller/apartment/" />
        <input type="hidden" id="pp_fixed_menu" name="pp_fixed_menu" value="" />
        <input type="hidden" id="tg_sidebar_sticky" name="tg_sidebar_sticky" value="1" />
        <input type="hidden" id="pp_topbar" name="pp_topbar" value="" />
        <input type="hidden" id="post_client_column" name="post_client_column" value="4" />
        <input type="hidden" id="pp_back" name="pp_back" value="Back" />
        <input type="hidden" id="tg_lightbox_thumbnails" name="tg_lightbox_thumbnails" value="thumbnail" />
        <input type="hidden" id="tg_lightbox_thumbnails_display" name="tg_lightbox_thumbnails_display" value="1" />
        <input type="hidden" id="tg_lightbox_timer" name="tg_lightbox_timer" value="7000" />
        <input type="hidden" id="tg_header_content" name="tg_header_content" value="menu" />

        <input type="hidden" id="tg_live_builder" name="tg_live_builder" value="0" />

        <input type="hidden" id="pp_footer_style" name="pp_footer_style" value="2" />

        <a id="close_mobile_menu" href="javascript:;"></a>

        <div class="mobile_menu_wrapper">
            <div class="mobile_menu_content">
                <div class="menu-side-mobile-menu-container">
                    <ul id="mobile_main_menu" class="mobile_main_nav">
                        <li class="menu-item menu-item-home current-menu-item current_page_item">
                            <a href="index.html" aria-current="page">Home</a>
                        </li>
                        <li class="menu-item"><a href="our-rooms.html">Our Rooms</a></li>
                        <li class="menu-item"><a href="about-us.html">About Us</a></li>
                        <li class="menu-item"><a href="contact.html">Contact</a></li>
                        <li class="menu-item"><a href="blog.html">Blog</a></li>
                        <li class="menu-item"><a href="explore.html">Explore</a></li>
                        <li class="menu-item"><a href="terms-and-conditions.html">Terms and Conditions</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="wrapper" class=" ">
            <div class="header_style_wrapper">

                <div class="top_bar">
                    <div class="standard_wrapper">
                        <div id="logo_wrapper">
                            <div id="logo_normal" class="logo_container">
                                <div class="logo_align">
                                    <a id="custom_logo" class="logo_wrapper default" href="index.html">
                                        <img src="upload/logo.jpg" alt="" width="400" height="115" />
                                    </a>
                                </div>
                            </div>

                            <div id="logo_transparent" class="logo_container">
                                <div class="logo_align">
                                    <a id="custom_logo_transparent" class="logo_wrapper hidden" href="index.html">
                                        <img src="upload/logo_white.png" alt="" width="110" height="120" />
                                    </a>
                                </div>
                            </div>

                            <div id="menu_wrapper">
                                <div id="nav_wrapper">
                                    <div class="nav_wrapper_inner">
                                        <div id="menu_border_wrapper">
                                            <div class="menu-main-menu-container">
                                                <ul id="main_menu" class="nav">
                                                    <li class="menu-item menu-item-home current_page_item current-menu-item"><a href="index.html">Accueil</a></li>
                                                    <li class="menu-item"><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>

                            
                            
                            <div id="logo_right_wrapper">
                                <div id="logo_right_button">
                                    <div class="header_client_wrapper">
                                        <a class="client_login_link" href="javascript:;" title="Login"><span class="ti-lock"></span>Se connecter</a>
                                    </div>

                                    <a href="javascript:;" id="mobile_nav_icon"><span class="ti-menu"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="page_content_wrapper" class="noheader">
                <div class="inner">
                    <div class="inner_wrapper">
                        <div class="sidebar_content full_width">
                            <div data-elementor-type="wp-post" data-elementor-id="662" class="elementor elementor-662" data-elementor-settings="[]">
                                <div class="elementor-inner">
                                    <div class="elementor-section-wrap">
                                        <section
                                            class="elementor-section elementor-top-section elementor-element elementor-element-a6135f8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                            data-id="a6135f8"
                                            data-element_type="section"
                                            data-settings='{"hoteller_ext_is_background_parallax":"false","hoteller_ext_is_background_on_scroll":"false"}'
                                        >
                                            <div class="elementor-container elementor-column-gap-default">
                                                <div class="elementor-row">
                                                    <div
                                                        class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5140bd0"
                                                        data-id="5140bd0"
                                                        data-element_type="column"
                                                        data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                    >
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div
                                                                    class="elementor-element elementor-element-8e1c27b elementor-widget elementor-widget-heading"
                                                                    data-id="8e1c27b"
                                                                    data-element_type="widget"
                                                                    data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                                    data-widget_type="heading.default"
                                                                >
                                                                    <div class="elementor-widget-container">
                                                                        <h1 class="elementor-heading-title elementor-size-default">
                                                                            Appartement Duplex Mogador <br />
                                                                            Honfleur
                                                                        </h1>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    class="elementor-element elementor-element-99909d9 elementor-invisible elementor-widget elementor-widget-text-editor"
                                                                    data-id="99909d9"
                                                                    data-element_type="widget"
                                                                    data-settings='{"_animation":"fadeInUp","_animation_delay":400,"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                                    data-widget_type="text-editor.default"
                                                                >
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-text-editor elementor-clearfix">
                                                                            <h2 class="elementor-heading-title elementor-size-default">
                                                                                <p class="p1">Situé au coeur du centre historique de Honfleur l’Appartement Duplex Mogador est le 
                                                                                    lieu idéal pour découvrir avec bonheur les multiples aspects d’un site d’exception.
                                                                                </p>
                                                                            </h2>
                                                                            <p class="p1">
                                                                                <span class="s1">Conçu sur 2 étages, à quelques pas de la place Sainte-Catherine et à une centaine
                                                                                    de mètres du Vieux Port, l&#39;Appartement Mogador grâce un cadre spacieux et un
                                                                                    décor d’une authentique qualité est une escale privilégiée autant qu’une
                                                                                    
                                                                                    invitation à poursuivre le voyage.</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section
                                            class="elementor-section elementor-top-section elementor-element elementor-element-58441c5 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default elementor-invisible"
                                            data-id="58441c5"
                                            data-element_type="section"
                                            data-settings='{"animation":"fadeInUp","stretch_section":"section-stretched","background_background":"classic","animation_delay":800,"hoteller_ext_is_background_parallax":"false","hoteller_ext_is_background_on_scroll":"false"}'
                                        >
                                            <div class="elementor-container elementor-column-gap-no">
                                                <div class="elementor-row">
                                                    <div
                                                        class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4ce6044"
                                                        data-id="4ce6044"
                                                        data-element_type="column"
                                                        data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                    >
                                                        <PricePanel />
                                                    </div>
                                                    <div
                                                        class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-7a8d596"
                                                        data-id="7a8d596"
                                                        data-element_type="column"
                                                        data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                    >
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div
                                                                    class="elementor-element elementor-element-58186cb elementor-widget elementor-widget-hoteller-gallery-horizontal"
                                                                    data-id="58186cb"
                                                                    data-element_type="widget"
                                                                    data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                                    data-widget_type="hoteller-gallery-horizontal.default"
                                                                >
                                                                    <div class="elementor-widget-container">
                                                                        <div class="tg_horizontal_gallery_wrapper" data-autoplay="0" data-loop="0" data-navigation="1" data-pagination="0" data-parallax="1" data-fullscreen="0">
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/salon.jpg"
                                                                                    data-flickity-lazyload="upload/salon.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/salon2.jpg"
                                                                                    data-flickity-lazyload="upload/salon2.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/table.jpg"
                                                                                    data-flickity-lazyload="upload/table.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/escalier.jpg"
                                                                                    data-flickity-lazyload="upload/escalier.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/bar.jpg"
                                                                                    data-flickity-lazyload="upload/bar.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/chambre1.jpg"
                                                                                    data-flickity-lazyload="upload/chambre1.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/chambre2.jpg"
                                                                                    data-flickity-lazyload="upload/chambre2.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                            <div class="tg_horizontal_gallery_cell" style="margin-right: 0px;">
                                                                                <img
                                                                                    class="tg_horizontal_gallery_cell_img"
                                                                                    src="upload/sdb.jpg"
                                                                                    data-flickity-lazyload="upload/sdb.jpg"
                                                                                    alt=""
                                                                                    style="height: 600px;"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section
                                            class="elementor-section elementor-top-section elementor-element elementor-element-de407e0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                            data-id="de407e0"
                                            data-element_type="section"
                                            data-settings='{"hoteller_ext_is_background_parallax":"false","hoteller_ext_is_background_on_scroll":"false"}'
                                        >
                                            <div class="elementor-container elementor-column-gap-default">
                                                <div class="elementor-row">
                                                    <div
                                                        class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2467eb2"
                                                        data-id="2467eb2"
                                                        data-element_type="column"
                                                        data-settings='{"hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                    >
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div
                                                                    class="elementor-element elementor-element-deda4ce elementor-invisible elementor-widget elementor-widget-heading"
                                                                    data-id="deda4ce"
                                                                    data-element_type="widget"
                                                                    data-settings='{"_animation":"fadeInUp","hoteller_ext_is_scrollme":"false","hoteller_ext_is_smoove":"false","hoteller_ext_is_parallax_mouse":"false","hoteller_ext_is_infinite":"false","hoteller_ext_is_fadeout_animation":"false"}'
                                                                    data-widget_type="heading.default"
                                                                >
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br class="clear" />
            </div>
        </div>
        <div id="footer_wrapper">

            <div class="footer_bar">
                <div class="footer_bar_wrapper">
                    
                    <div id="copyright">© Copyright APP2B - Concepteur d'applications mobiles et web</div>
                    <br class="clear" />
                </div>
            </div>
        </div>

        <a id="toTop" href="javascript:;"><span class="ti-angle-up"></span></a>
        
    </div>
    </>
  );
};

export default App;
