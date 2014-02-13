function Controller() {
    function attUsers() {
        var requestUsers = Ti.Network.createHTTPClient();
        requestUsers.open("GET", "http://localhost:8000/users");
        requestUsers.onload = function() {
            ("200" == this.status || "201" == this.status || "301" == this.status) && (users = JSON.parse(this.responseText));
        };
        var tableData = [];
        var row = null;
        requestUsers.send();
        setTimeout(function() {
            for (var i = 0; null != users[i]; i++) {
                row = Alloy.createController("row", {
                    user: users[i]
                }).getView();
                tableData.push(row);
            }
            $.tableView.setData(tableData);
        }, 6e3);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId4 = [];
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1",
        title: "Usuários"
    });
    attUsers ? $.__views.win1.addEventListener("focus", attUsers) : __defers["$.__views.win1!focus!attUsers"] = true;
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.win1.add($.__views.tableView);
    $.__views.tab1 = Ti.UI.createTab({
        title: "Usuários",
        window: $.__views.win1,
        id: "tab1"
    });
    __alloyId4.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: "Cadastro"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Centro de Informática - UFPE\n					Projeto de alunos da disciplina de Engenharia de Software e Sistemas 2013.2\n					Equipe: - Gustavo Brayner, Sylvia Marcela, Tiago Cavalcanti e Victor Carriço",
        id: "__alloyId5"
    });
    $.__views.win2.add($.__views.__alloyId5);
    $.__views.tab2 = Ti.UI.createTab({
        title: "Cadastrar",
        window: $.__views.win2,
        id: "tab2"
    });
    __alloyId4.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3",
        title: "Sobre"
    });
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "Logout",
        id: "__alloyId6"
    });
    $.__views.win3.add($.__views.__alloyId6);
    $.__views.tab3 = Ti.UI.createTab({
        title: "Sobre",
        window: $.__views.win3,
        id: "tab3"
    });
    __alloyId4.push($.__views.tab3);
    $.__views.main = Ti.UI.createTabGroup({
        headerTitle: "ThermoStatus",
        font: {
            fontSize: 26
        },
        tabs: __alloyId4,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.win1!focus!attUsers"] && $.__views.win1.addEventListener("focus", attUsers);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;