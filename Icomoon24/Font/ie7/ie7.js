/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Investira\'">' + entity + '</span>' + html;
	}
	var icons = {
		'-i_ok': '&#xe900;',
		'-i_cancel': '&#xe901;',
		'-i_insert': '&#xe902;',
		'-i_save': '&#xe903;',
		'-i_edit': '&#xe904;',
		'-i_delete': '&#xe905;',
		'-i_find': '&#xe906;',
		'-i_refresh': '&#xe907;',
		'-i_synchronize': '&#xe908;',
		'-i_filter': '&#xe909;',
		'-i_undo': '&#xe90a;',
		'-i_share': '&#xe90b;',
		'-i_share_left': '&#xe90c;',
		'-i_share_right': '&#xe90d;',
		'-i_share_left-right': '&#xe90e;',
		'-i_success': '&#xe90f;',
		'-i_error': '&#xe910;',
		'-i_information': '&#xe911;',
		'-i_warning': '&#xe912;',
		'-i_question': '&#xe913;',
		'-i_checkbox': '&#xe914;',
		'-i_checkbox_select': '&#xe915;',
		'-i_checkbox_invert': '&#xe916;',
		'-i_option': '&#xe917;',
		'-i_option_select': '&#xe918;',
		'-i_on_off': '&#xe919;',
		'-i_download': '&#xe91a;',
		'-i_upload': '&#xe91b;',
		'-i_cloud_off': '&#xe91c;',
		'-i_in': '&#xe91d;',
		'-i_out': '&#xe91e;',
		'-i_user': '&#xe91f;',
		'-i_users': '&#xe920;',
		'-i_user_tie': '&#xe921;',
		'-i_user_hat': '&#xe922;',
		'-i_user_id': '&#xe923;',
		'-i_arrow-first-circle': '&#xe924;',
		'-i_arrow-previous-circle': '&#xe925;',
		'-i_arrow-next-circle': '&#xe926;',
		'-i_arrow-last-circle': '&#xe927;',
		'-i_arrow-up-circle': '&#xe928;',
		'-i_arrow-top-circle': '&#xe929;',
		'-i_arrow-down-circle': '&#xe92a;',
		'-i_arrow-bottom-circle': '&#xe92b;',
		'-i_arrow-left-right': '&#xe92c;',
		'-i_arrow-first': '&#xe92d;',
		'-i_arrow-previous': '&#xe92e;',
		'-i_arrow-next': '&#xe92f;',
		'-i_arrow-last': '&#xe930;',
		'-i_arrow-top': '&#xe931;',
		'-i_arrow-up': '&#xe932;',
		'-i_arrow-down': '&#xe933;',
		'-i_arrow-bottom': '&#xe934;',
		'-i_sort': '&#xe935;',
		'-i_sort_asc': '&#xe936;',
		'-i_sort_des': '&#xe937;',
		'-i_media_play': '&#xe938;',
		'-i_media_stop': '&#xe939;',
		'-i_media_pause': '&#xe93a;',
		'-i_sun': '&#xe93b;',
		'-i_moon': '&#xe93c;',
		'-i_earth': '&#xe93d;',
		'-i_compass': '&#xe93e;',
		'-i_location': '&#xe93f;',
		'-i_map': '&#xe940;',
		'-i_unlock': '&#xe941;',
		'-i_lock': '&#xe942;',
		'-i_link': '&#xe943;',
		'-i_unlink': '&#xe944;',
		'-i_zoom_in': '&#xe945;',
		'-i_zoom_out': '&#xe946;',
		'-i_zoom_money': '&#xe947;',
		'-i_home': '&#xe948;',
		'-i_office_building': '&#xe949;',
		'-i_factory': '&#xe94a;',
		'-i_parthenon': '&#xe94b;',
		'-i_store': '&#xe94c;',
		'-i_hospital': '&#xe94d;',
		'-i_newspaper': '&#xe94e;',
		'-i_portofolio': '&#xe94f;',
		'-i_calendar': '&#xe950;',
		'-i_todo': '&#xe951;',
		'-i_paper': '&#xe952;',
		'-i_papers': '&#xe953;',
		'-i_paper_text': '&#xe954;',
		'-i_paper_printer': '&#xe955;',
		'-i_paper_ribbon': '&#xe956;',
		'-i_paper_organizer': '&#xe957;',
		'-i_file_cabinet': '&#xe958;',
		'-i_stamp': '&#xe959;',
		'-i_paper_clip': '&#xe95a;',
		'-i_stapler': '&#xe95b;',
		'-i_scissors': '&#xe95c;',
		'-i_book': '&#xe95d;',
		'-i_books': '&#xe95e;',
		'-i_graduation_cap': '&#xe95f;',
		'-i_message': '&#xe960;',
		'-i_messages': '&#xe961;',
		'-i_mail': '&#xe962;',
		'-i_at': '&#xe963;',
		'-i_eye_off': '&#xe964;',
		'-i_eye': '&#xe965;',
		'-i_heart': '&#xe966;',
		'-i_cardio': '&#xe967;',
		'-i_hand': '&#xe968;',
		'-i_delta': '&#xe969;',
		'-i_account_activity': '&#xe96a;',
		'-i_calculator': '&#xe96b;',
		'-i_chart_pizza': '&#xe96c;',
		'-i_chart_line': '&#xe96d;',
		'-i_chart_bar': '&#xe96e;',
		'-i_chart_cashflow': '&#xe96f;',
		'-i_chart_lines': '&#xe970;',
		'-i_currency_yen': '&#xe971;',
		'-i_currency_euro': '&#xe972;',
		'-i_currency_pound': '&#xe973;',
		'-i_coin': '&#xe974;',
		'-i_coins': '&#xe975;',
		'-i_bill': '&#xe976;',
		'-i_bills': '&#xe977;',
		'-i_percent': '&#xe978;',
		'-i_safe': '&#xe979;',
		'-i_money_saving': '&#xe97a;',
		'-i_wallet': '&#xe97b;',
		'-i_creditcard': '&#xe97c;',
		'-i_money_bag': '&#xe97d;',
		'-i_investiment': '&#xe97e;',
		'-i_printer': '&#xe97f;',
		'-i_folder': '&#xe980;',
		'-i_bug': '&#xe981;',
		'-i_wifi_off': '&#xe982;',
		'-i_wifi': '&#xe983;',
		'-i_database': '&#xe984;',
		'-i_servers': '&#xe985;',
		'-i_mobile': '&#xe986;',
		'-i_workstation': '&#xe987;',
		'-i_multiplataform': '&#xe988;',
		'-i_chip': '&#xe989;',
		'-i_menu': '&#xe98a;',
		'-i_more': '&#xe98b;',
		'-i_backup': '&#xe98c;',
		'-i_opensource': '&#xe98d;',
		'-i_facebook': '&#xe98e;',
		'-i_twitter': '&#xe98f;',
		'-i_googleplus': '&#xe990;',
		'-i_instagram': '&#xe991;',
		'-i_linkedin': '&#xe992;',
		'-i_clock': '&#xe993;',
		'-i_clock_alarm': '&#xe994;',
		'-i_clock_timer': '&#xe995;',
		'-i_clock_schedule': '&#xe996;',
		'-i_runnig_timer': '&#xe997;',
		'-i_bike': '&#xe998;',
		'-i_car': '&#xe999;',
		'-i_taxi': '&#xe99a;',
		'-i_train': '&#xe99b;',
		'-i_bus': '&#xe99c;',
		'-i_airplane': '&#xe99d;',
		'-i_copter': '&#xe99e;',
		'-i_ship': '&#xe99f;',
		'-i_truck': '&#xe9a0;',
		'-i_traffic_light': '&#xe9a1;',
		'-i_traffic_cone': '&#xe9a2;',
		'-i_gas_pump': '&#xe9a3;',
		'-i_wheel': '&#xe9a4;',
		'-i_steering_wheel': '&#xe9a5;',
		'-i_control_panel': '&#xe9a6;',
		'-i_sign_prohibid': '&#xe9a7;',
		'-i_sign_recycle': '&#xe9a8;',
		'-i_sign_radioactive': '&#xe9a9;',
		'-i_sign_accessibility': '&#xe9aa;',
		'-i_policeman': '&#xe9ab;',
		'-i_workman': '&#xe9ac;',
		'-i_callcenter': '&#xe9ad;',
		'-i_cloud': '&#xe9ae;',
		'-i_cloud_rain': '&#xe9af;',
		'-i_cloud_lightning': '&#xe9b0;',
		'-i_wind': '&#xe9b1;',
		'-i_compasses': '&#xe9b2;',
		'-i_shovel': '&#xe9b3;',
		'-i_wrench': '&#xe9b4;',
		'-i_hammer': '&#xe9b5;',
		'-i_magnet': '&#xe9b6;',
		'-i_lamp': '&#xe9b7;',
		'-i_key': '&#xe9b8;',
		'-i_keyhole': '&#xe9b9;',
		'-i_glasses': '&#xe9ba;',
		'-i_paper_plane': '&#xe9bb;',
		'-i_umbrella': '&#xe9bc;',
		'-i_bomb': '&#xe9bd;',
		'-i_hourglass': '&#xe9be;',
		'-i_target': '&#xe9bf;',
		'-i_phone': '&#xe9c0;',
		'-i_auction_hammer': '&#xe9c1;',
		'-i_balance': '&#xe9c2;',
		'-i_prize_ribbon': '&#xe9c3;',
		'-i_place123': '&#xe9c4;',
		'-i_medal': '&#xe9c5;',
		'-i_balloon': '&#xe9c6;',
		'-i_lifebelt': '&#xe9c7;',
		'-i_anchor': '&#xe9c8;',
		'-i_bell_off': '&#xe9c9;',
		'-i_brief_case': '&#xe9ca;',
		'-i_bell': '&#xe9cb;',
		'-i_thermometer': '&#xe9cc;',
		'-i_stethoscope': '&#xe9cd;',
		'-i_dna': '&#xe9ce;',
		'-i_gear': '&#xe9cf;',
		'-i_gears': '&#xe9d0;',
		'-i_lion': '&#xe9d1;',
		'-i_music_note': '&#xe9d2;',
		'-i_photo_camera': '&#xe9d3;',
		'-i_video_camera': '&#xe9d4;',
		'-i_microphone': '&#xe9d5;',
		'-i_microphone_off': '&#xe9d6;',
		'-i_picture': '&#xe9d7;',
		'-i_slider': '&#xe9d8;',
		'-i_speaker': '&#xe9d9;',
		'-i_speaker_off': '&#xe9da;',
		'-i_headphones': '&#xe9db;',
		'-i_flag_finish': '&#xe9dc;',
		'-i_flag': '&#xe9dd;',
		'-i_box_paper': '&#xe9de;',
		'-i_box_gift': '&#xe9df;',
		'-i_box_3d': '&#xe9e0;',
		'-i_box_treasure': '&#xe9e1;',
		'-i_star5': '&#xe9e2;',
		'-i_shopping_cart': '&#xe9e3;',
		'-i_tag': '&#xe9e4;',
		'-i_tag_price': '&#xe9e5;',
		'-i_bag': '&#xe9e6;',
		'-i_receipt': '&#xe9e7;',
		'-i_barcode': '&#xe9e8;',
		'-i_qr': '&#xe9e9;',
		'-i_ifeed': '&#xe9ea;',
		'-i_investira_h': '&#xe9eb;',
		'-i_investira_h_biz': '&#xe9ec;',
		'-i_investira_h_pro': '&#xe9ed;',
		'-i_investira_v': '&#xe9ee;',
		'-i_investira_icon': '&#xe9ef;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/-i_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
