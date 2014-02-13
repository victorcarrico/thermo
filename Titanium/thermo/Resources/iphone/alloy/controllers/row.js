function Controller() {
    function openDetails() {
        if ($.switchButton.value) {
            var details = Alloy.createController("details", {
                user: user
            }).getView();
            details.open({
                right: 0
            });
            details.animate({
                left: 0,
                duration: 300
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: 50,
        font: {
            fontSize: 30
        },
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    openDetails ? $.__views.row.addEventListener("click", openDetails) : __defers["$.__views.row!click!openDetails"] = true;
    $.__views.switchButton = Ti.UI.createSwitch({
        right: 30,
        value: false,
        id: "switchButton"
    });
    $.__views.row.add($.__views.switchButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = arguments[0].user;
    $.row.setTitle(user.name);
    $.switchButton.setValue(user.on);
    __defers["$.__views.row!click!openDetails"] && $.__views.row.addEventListener("click", openDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;