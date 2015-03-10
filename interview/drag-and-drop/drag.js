;(function _drag(d, undefined) {

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

var drag = (function _drag_impl() {
    var state = {
        dragging: false,
        itemTop: 0,
        itemLeft: 0,
        item: undefined
    };

    var de = d.documentElement;

    function startdrag(e) {
        var button = util.getButton(e);
        if (!state.dragging && button === "LEFT" &&
            util.getTarget(e) === state.item) {
            state.itemTop = e.clientY - state.item.offsetTop;
            state.itemLeft = e.clientX - state.item.offsetLeft;
            state.dragging = true;
        }
    }

    function stopdrag(e) {
        if (state.dragging) {
            state.dragging = false;
        }
    }

    function move(e) {
        if (state.dragging) {
            // move to cursor
            var cursorTop = e.clientY;
            var cursorLeft = e.clientX;
            state.item.style.top = cursorTop - state.itemTop + "px";
            state.item.style.left = cursorLeft - state.itemLeft + "px";
        }
    }

    function init(itemid) {
        state.item = d.getElementById(itemid);
        util.addEvent(de, 'mousedown', startdrag);
        util.addEvent(de, 'mouseup', stopdrag);
        util.addEvent(de, 'mousemove', move);
    }

    return {
        init: init
    };
})();

drag.init('drag-item');
}(document));
