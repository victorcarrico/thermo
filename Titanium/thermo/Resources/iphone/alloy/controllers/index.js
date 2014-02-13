function Controller() {
    function goToMain() {
        var main = Alloy.createController("main").getView();
        main.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#3498db",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.logo = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "white",
        text: "ThermoStatus",
        top: 50,
        id: "logo"
    });
    $.__views.index.add($.__views.logo);
    $.__views.id = Ti.UI.createTextField({
        width: 200,
        height: 50,
        color: "white",
        backgroundColor: "white",
        hintText: "usuario",
        top: 100,
        id: "id"
    });
    $.__views.index.add($.__views.id);
    $.__views.senha = Ti.UI.createTextField({
        width: 200,
        height: 50,
        backgroundColor: "white",
        hintText: "senha",
        top: 170,
        id: "senha"
    });
    $.__views.index.add($.__views.senha);
    $.__views.entrar = Ti.UI.createButton({
        width: 100,
        height: 50,
        top: 240,
        color: "white",
        title: "Entrar",
        id: "entrar"
    });
    $.__views.index.add($.__views.entrar);
    goToMain ? $.__views.entrar.addEventListener("click", goToMain) : __defers["$.__views.entrar!click!goToMain"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.entrar!click!goToMain"] && $.__views.entrar.addEventListener("click", goToMain);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;