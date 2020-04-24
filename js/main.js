new Vue({
    el: "#app",
    data: {
        names: [],
        current_name: "",
        selected_name: "",
        is_ok: false,
        if_clicked: false,
    },
    methods: {
        add: function () {
            this.if_clicked = true;
            if (this.current_name.length == 0) {
                this.selected_name = this.current_name;
                this.is_ok = false;
            }
            else {
                this.selected_name = this.current_name;
                this.names.push(this.current_name);
                this.is_ok = true;
                this.methods.clear();
            }
        },
        clear: function () {
            this.current_name = "";
        }
    }
})