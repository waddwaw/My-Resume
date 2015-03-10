;(function _right_control(d, undefined) {
var util = {
    addEvent: function(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler);
        } else {
            element.attachEvent('on' + event, handler);
        }
    },

    getTarget: function(event) {
        return event.target ? event.target : event.srcElement;
    },

    getButton: function(event) {
        if (event.which === null) {  // IE
            if (event.button < 2) return "LEFT";
            else if (event.button === 4) return "MIDDLE";
            else return "RIGHT";
        } else {  // Others
            if (event.which < 2) return "LEFT";
            else if (event.which === 2) return "MIDDLE";
            else return "RIGHT";
        }
    },

    isChildren: function(child, parent) {
         var node = child.parentNode;
         while (node !== null) {
             if (node == parent) {
                 return true;
             }
             node = node.parentNode;
         }
         return false;
    },

    stopEvent: function(event) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
        if (event.stopPropagation) event.stopPropagation();
    }
};

var rightControl = (function _right_control_impl(areaid, menuid) {
    var de = d.documentElement;
    var area, menu;
    var attached = false;

    // Todo: attach Menu
    function attachMenu(e) {
        var target = util.getTarget(e);
        var button = util.getButton(e);
        console.log(button);
        console.log(target);
        if (button === "RIGHT" &&
             target === area && !attached) {
            util.stopEvent(e);
            menu.className = "";
            menu.style.left = e.clientX + "px";
            menu.style.top = e.clientY + "px";
            attached = true;
            return false;
        }
    }

    function detachMenu(e) {
        var target = util.getTarget(e);
        if (attached && !util.isChildren(target, menu)) {
            util.stopEvent(e);
            menu.className = "hidden";
            attached = false;
        }
    }

    function init(areaid, menuid) {
        area = d.getElementById(areaid);
        menu = d.getElementById(menuid);
        util.addEvent(de, 'contextmenu', attachMenu);
        util.addEvent(de, 'mousedown', detachMenu);
    }

    return {
        init: init
    };
})();

rightControl.init('right-control', 'right-menu');
}(document));
