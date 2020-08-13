function populate_credentials_table(username, is_admin, discount_rate) {
    old_username_text_box = document.getElementById("old_username_text_box");
    is_admin_option_box = document.getElementById("is_admin_option_box");
    discount_rate_number_box = document.getElementById("discount_rate_number_box");

    old_username_text_box.value = username;
    is_admin_option_box.value = is_admin;
    discount_rate_number_box.value = discount_rate;
}