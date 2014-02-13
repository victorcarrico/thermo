function Controller() {
    function attTemp() {
        if ($.switchATT.value) var stop = setInterval(function() {
            var requestTemp = Ti.Network.createHTTPClient();
            requestTemp.open("GET", "http://localhost:8000/status");
            requestTemp.onload = function() {
                ("200" == this.status || "201" == this.status || "301" == this.status) && (temp = JSON.parse(this.responseText));
            };
            requestTemp.send();
            if (temp.length > 1) {
                ultimaTemp = temp[temp.length - 1];
                $.labelTemp.setText("Temperatura agora: " + ultimaTemp.temp);
            }
        }, 2e3); else clearInterval(stop);
    }
    function voltar() {
        $.details.animate({
            left: 340,
            duration: 300
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1"
    });
    $.__views.labelTemp = Ti.UI.createLabel({
        top: 50,
        left: 10,
        height: 50,
        font: {
            fontSize: 26
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "labelTemp"
    });
    $.__views.win1.add($.__views.labelTemp);
    $.__views.labelID = Ti.UI.createLabel({
        top: 110,
        left: 10,
        font: {
            fontSize: 14
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "labelID"
    });
    $.__views.win1.add($.__views.labelID);
    $.__views.labelName = Ti.UI.createLabel({
        top: 130,
        left: 10,
        font: {
            fontSize: 20
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "labelName",
        text: "Nome"
    });
    $.__views.win1.add($.__views.labelName);
    $.__views.name = Ti.UI.createTextField({
        top: 160,
        left: 10,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        backgroundColor: "white",
        borderColor: "white",
        borderWidth: 2,
        id: "name"
    });
    $.__views.win1.add($.__views.name);
    $.__views.pickerView = Ti.UI.createView({
        top: 250,
        width: 340,
        height: 60,
        id: "pickerView"
    });
    $.__views.win1.add($.__views.pickerView);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker"
    });
    $.__views.pickerView.add($.__views.picker);
    var __alloyId1 = [];
    $.__views.celsius = Ti.UI.createPickerRow({
        id: "celsius",
        title: "Celsius"
    });
    __alloyId1.push($.__views.celsius);
    $.__views.faren = Ti.UI.createPickerRow({
        id: "faren",
        title: "Farenheit"
    });
    __alloyId1.push($.__views.faren);
    $.__views.picker.add(__alloyId1);
    $.__views.switchATT = Ti.UI.createSwitch({
        top: 220,
        title: "Atualização Automática",
        value: false,
        id: "switchATT"
    });
    $.__views.win1.add($.__views.switchATT);
    attTemp ? $.__views.switchATT.addEventListener("change", attTemp) : __defers["$.__views.switchATT!change!attTemp"] = true;
    $.__views.voltar = Ti.UI.createButton({
        title: "Voltar",
        backgroundColor: "white",
        color: "black",
        width: 150,
        height: 50,
        top: 320,
        left: 10,
        id: "voltar"
    });
    $.__views.win1.add($.__views.voltar);
    voltar ? $.__views.voltar.addEventListener("click", voltar) : __defers["$.__views.voltar!click!voltar"] = true;
    $.__views.submit = Ti.UI.createButton({
        title: "Atualizar Dados",
        backgroundColor: "white",
        color: "black",
        width: 150,
        height: 50,
        top: 320,
        right: 10,
        id: "submit"
    });
    $.__views.win1.add($.__views.submit);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.win1,
        id: "tab1",
        title: "Detalhes"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2"
    });
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Centro de Informática - UFPE\n					Projeto de alunos da disciplina de Engenharia de Software e Sistemas 2013.2\n					Equipe: - Gustavo Brayner, Sylvia Marcela, Tiago Cavalcanti e Victor Carriço",
        id: "__alloyId2"
    });
    $.__views.win2.add($.__views.__alloyId2);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.win2,
        id: "tab2",
        title: "Sobre"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3"
    });
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Logout",
        id: "__alloyId3"
    });
    $.__views.win3.add($.__views.__alloyId3);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.win3,
        id: "tab3",
        title: "Sair"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.details = Ti.UI.createTabGroup({
        backgroundColor: "#3498db",
        tabs: __alloyId0,
        id: "details"
    });
    $.__views.details && $.addTopLevelView($.__views.details);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = arguments[0].user;
    var temp = [];
    $.win1.setTitle("Termometro do " + user.name);
    $.labelTemp.setText("Temperatura agora: ");
    $.labelID.setText("ID:" + user.user_id);
    $.name.setHintText(user.name);
    __defers["$.__views.switchATT!change!attTemp"] && $.__views.switchATT.addEventListener("change", attTemp);
    __defers["$.__views.voltar!click!voltar"] && $.__views.voltar.addEventListener("click", voltar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;